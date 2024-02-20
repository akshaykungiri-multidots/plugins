<?php

/**
 * Dynamic Blocks.
 *
 * @package md-sync-product-multisite
 */

namespace MD_Sync_Product_Multisite\Inc;

use MD_Sync_Product_Multisite\Inc\Traits\Singleton;
use WP_CLI;
use WP_Query;
use WC_Product_Simple;
use WC_Product_Variable;
use WC_Product_Grouped;
use WC_Product_External;
use WC_Product_Variation;
use WC_Product_Attribute;

class Md_Product_Command
{

    use Singleton;

    /**
     * Function to sync post in multisite
     * 
     * @param  $args array
     * @param  $assoc_args array
     * 
     * @return null
     */
    public function __invoke($args, $assoc_args)
    {
        if (!isset($assoc_args['number-of-posts'])) {
            WP_CLI::error("number-of-posts is missing in command");
            return;
        }

        if (!isset($assoc_args['site-to'])) {
            WP_CLI::error("site-to is missing in command");
            return;
        }

        include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
        if ( ! function_exists( 'WC' ) ) {
            require_once( WP_PLUGIN_DIR . '/woocommerce/woocommerce.php' );
        }

        restore_current_blog();

        $dest_site_id = $assoc_args['site-to'];
        $categories = isset($assoc_args['categories']) ? $assoc_args['categories'] : array();
        $number_of_posts = $assoc_args['number-of-posts'];

        $args = array(
            'post_type' => 'product',
            'posts_per_page' => $number_of_posts,
        );
    
        if (!empty($categories)) {
            $args['tax_query'] = array(
                array(
                    'taxonomy' => 'product_cat',
                    'field' => 'slug',
                    'terms' => $categories,
                ),
            );
        }
    
        $products = new WP_Query($args);
        if ($products->have_posts()) {
            while ($products->have_posts()) {

                $products->the_post();

                $product_id = get_the_ID();
                $product = wc_get_product( $product_id );

                // Additional details for import
                $product_data = array(
                    'id' => $product_id,
                    'name' => $product->get_name(),
                    'sku' => $product->get_sku(), // Include SKU
                    'description' => $product->get_description(),
                    'short_description' => $product->get_short_description(),
                    'price' => $product->get_sale_price(),
                    'regular_price' => $product->get_regular_price(),
                    'attributes_meta' => get_post_meta($product->get_id(), '_product_attributes', true),
                    'categories' => wp_get_post_terms($product->get_id(), 'product_cat', array('fields' => 'names')),
                    'tags' => wp_get_post_terms($product->get_id(), 'product_tag', array('fields' => 'names')),
                    'type' => $product->get_type(),
                    'image' => $this->Woo_Md_Get_Product_image($product),
                    'gallery' => $this->Woo_Md_Get_Product_gallery($product),
                );

                // Include variations for variable products
                if ($product->is_type('variable')) {
                    $product_data['variations'] = $product->get_available_variations();
                }

                $products_array[] = $product_data;
            }

            switch_to_blog($dest_site_id);
            //Loop through the imported products and create/update them on the current site
            foreach ($products_array as $imported_product) {
                $this->Product_Sync_Import_Api_Create_Or_Update_product($imported_product);
            }
            WP_CLI::success("Products synced successfully!");
        } else {
            WP_CLI::error("Products not found.");
        }
        restore_current_blog();
    }


    /**
     * Function to get product images
     * 
     * @param $product object
     * 
     * @return string
     */
    public function Woo_Md_Get_Product_image($product)
    {
        $attachment_ids = $product->get_gallery_image_ids();
        $image_id = $attachment_ids ? $attachment_ids[0] : get_post_thumbnail_id($product->get_id());

        return wp_get_attachment_image_src($image_id, 'full');
    }

    /**
     * Function to get product galleries
     * 
     * @param $product object
     * 
     * @return array
     */
    public function Woo_Md_Get_Product_gallery($product)
    {
        $attachment_ids = $product->get_gallery_image_ids();
        $gallery = array();

        foreach ($attachment_ids as $attachment_id) {
            $gallery[] = wp_get_attachment_image_src($attachment_id, 'full');
        }

        return $gallery;
    }

    /**
     * Function to sync product and update.
     * 
     * @param $imported_product array
     * 
     * @return $product_id int
     */
    public function Product_Sync_Import_Api_Create_Or_Update_product($imported_product)
    {

        // Get product ID by slug or create a new one
        $product_slug = sanitize_title($imported_product['name']);
        $product_id = $this->Product_Sync_Import_Api_Get_Product_Id_By_slug($product_slug);

        if (!$product_id) {
            // If product does not exist, create a new one
            $product = $this->Product_Sync_Import_Api_Create_product($imported_product['type']);
            $product_id = $product->save();
        } else {
            // If product already exists, load it
            $product = wc_get_product($product_id);
        }

        // Update product data
        $product->set_name($imported_product['name']);
        $product->set_description($imported_product['description']);
        $product->set_short_description($imported_product['short_description']);
        $product->set_regular_price($imported_product['regular_price']);
        $product->set_sale_price($imported_product['price']);

        // Set product categories
        foreach ($imported_product['categories'] as $category_name) {
            wp_set_object_terms($product_id, $category_name, "product_cat");
        }

        // Set product tags
        foreach ($imported_product['tags'] as $tag_name) {
            wp_set_object_terms($product_id, $tag_name, "product_tag");
        }

        // Set product images and gallery
        $this->Product_Sync_Import_Api_Set_Product_images($product, $imported_product['image'], $imported_product['gallery']);

        // Save the product
        $product->save();

        // Check if the product is a variable product
        if ($product->is_type('variable') && isset($imported_product['variations'])) {
            // Handle variations update for variable products
            if (isset($imported_product['attributes_meta']) && is_array($imported_product['attributes_meta'])) {
                # code...
                $product_attributes = $this->Product_Sync_Api_Create_Attributes_If_Not_exist($product, $imported_product['attributes_meta']);
                $product->set_attributes($product_attributes);
                $product->save();
            }
            $this->Product_Sync_Api_Update_Product_variations($product_id, $product, $imported_product['variations']);
        }

        return $product_id;
    }

    /**
     * Function to insert images to product
     * 
     * @param $product             object
     * @param $main_image_url      string
     * @param $gallery_images_urls array
     * 
     * @return null
     */
    function Product_Sync_Import_Api_Set_Product_images($product, $main_image_url, $gallery_images_urls)
    {
        // Download and set the main image
        if (!empty($main_image_url)) {
            $main_image_attachment_id = $this->Product_Sync_Import_Api_Download_Image_And_Get_Attachment_id($main_image_url);
            if ($main_image_attachment_id) {
                $product->set_image_id($main_image_attachment_id);
            }
        }

        // Download and set the gallery images
        if (!empty($gallery_images_urls)) {
            $gallery_image_attachment_ids = array_map(
                function ($gallery_image_url) {
                    return $this->Product_Sync_Import_Api_Download_Image_And_Get_Attachment_id($gallery_image_url);
                },
                $gallery_images_urls
            );

            $gallery_image_attachment_ids = array_filter($gallery_image_attachment_ids);

            if (!empty($gallery_image_attachment_ids)) {
                $product->set_gallery_image_ids($gallery_image_attachment_ids);
            }
        }
    }

    /**
     * Function get attachment based on filename.
     * 
     * @param $filename string
     * 
     * @return int
     */
    function Product_Sync_Import_Api_Get_Attachment_Id_By_filename($filename)
    {
        $attachment = get_page_by_title($filename, OBJECT, 'attachment');
        return $attachment ? $attachment->ID : 0;
    }

    /**
     * Function to insert attachment to product based on URL.
     * 
     * @param $image_url string
     * 
     * @return $attachment_id int
     */
    public function Product_Sync_Import_Api_Download_Image_And_Get_Attachment_id($image_url)
    {
        global $wp_filesystem;

        // Ensure $image_url is a valid string
        if ($image_url === false) {
            return false;
        }

        if (is_array($image_url)) {
            $image_url = $image_url[0];
        }

        $image_name = basename($image_url);
        $upload_dir = wp_upload_dir();
        $image_path = $upload_dir['path'] . '/' . $image_name;

        // Check if an image with the same filename already exists in the media library
        $existing_attachment_id = $this->Product_Sync_Import_Api_Get_Attachment_Id_By_filename(basename($image_url));

        if ($existing_attachment_id) {
            // Return the existing attachment ID
            return $existing_attachment_id;
        }

        // Check if the WP_Filesystem class is available
        if (!isset($wp_filesystem) || !is_a($wp_filesystem, 'WP_Filesystem_Base')) {
            // Load the necessary file system methods
            require_once ABSPATH . 'wp-admin/includes/file.php';
            WP_Filesystem();
        }

        // Download the image
        $image_content = file_get_contents($image_url);
        if ($wp_filesystem) {
            // Use the put_contents method of WP_Filesystem
            $wp_filesystem->put_contents($image_path, $image_content, FS_CHMOD_FILE);
        }

        // Insert the image as an attachment
        $attachment = array(
            'post_title' => $image_name,
            'post_content' => '',
            'post_status' => 'inherit',
            'post_mime_type' => 'image/jpeg', // Adjust the MIME type based on the image type
        );

        $attachment_id = wp_insert_attachment($attachment, $image_path);

        // Include image metadata
        include_once ABSPATH . 'wp-admin/includes/image.php';
        $attachment_data = wp_generate_attachment_metadata($attachment_id, $image_path);
        wp_update_attachment_metadata($attachment_id, $attachment_data);

        return $attachment_id;
    }

    /**
     * Function to get products based on slug
     * 
     * @param $product_slug string
     * 
     * @return int
     */
    public function Product_Sync_Import_Api_Get_Product_Id_By_slug($product_slug)
    {
        $args = array(
            'post_type' => 'product',
            'name' => $product_slug,
            'post_status' => 'any',
            'numberposts' => 1
        );

        $products = get_posts($args);

        return !empty($products) ? $products[0]->ID : 0;
    }

    /**
     * Function to initialize product according to type.
     * 
     * @param $product_type string
     * 
     * @return object
     */
    public function Product_Sync_Import_Api_Create_product($product_type)
    {
        // Create the appropriate product instance based on the product type
        switch ($product_type) {
            case 'variable':
                return new WC_Product_Variable();
            case 'grouped':
                return new WC_Product_Grouped();
            case 'external':
                return new WC_Product_External();
            default:
                return new WC_Product_Simple();
        }
    }

    /**
     * Function to update or add production variation from api.
     * 
     * @param $product_id      int
     * @param $product         object
     * @param $variations_data array
     * 
     * @return null
     */
    function Product_Sync_Api_Update_Product_variations($product_id, $product, $variations_data)
    {
        // Get existing variations
        $existing_variations = $product->get_available_variations();

        foreach ($variations_data as $variation_data) {

            // Find the existing variation ID based on attributes
            $variation_id = $this->Product_Sync_Import_Api_Get_Variation_id($existing_variations, $variation_data);
            // Load the existing variation or create a new one
            $variation = $variation_id ? wc_get_product($variation_id) : new WC_Product_Variation();

            $variation->set_parent_id($product_id);
            $updated_attributes = $this->Md_Set_Product_Variation_attributes($variation_data['attributes']);

            $variation->set_attributes($updated_attributes);

            $variation->set_manage_stock($variation_data['is_in_stock']);

            $variation->set_stock_quantity($variation_data['max_qty']);
            $back_orders = ($variation_data['backorders_allowed'] ? "yes" : "no");
            $variation->set_backorders($back_orders);
            $variation->set_low_stock_amount($variation_data['min_qty']);

            $variation->set_weight($variation_data['weight']);
            $variation->set_length($variation_data['dimensions']['length']);
            $variation->set_width($variation_data['dimensions']['width']);
            $variation->set_height($variation_data['dimensions']['height']);

            $variation->set_regular_price($variation_data['display_regular_price']);

            // Update variation data if the keys are set
            if (isset($variation_data['dimensions'])) {
                // Set dimensions
                $variation->set_length($variation_data['dimensions']['length']);
                $variation->set_width($variation_data['dimensions']['width']);
                $variation->set_height($variation_data['dimensions']['height']);
            }

            if (isset($variation_data['weight'])) {
                // Set weight
                $variation->set_weight($variation_data['weight']);
            }

            // Save the variation
            $v_id = $variation->save();
            update_post_meta($v_id, 'md_variation_id', $variation_data['variation_id']);
        }
    }

    /**
     * Function to set attribute to varation related product.
     * 
     * @param $attributes array
     * 
     * @return $updated_attributes array
     */
    public function Md_Set_Product_Variation_attributes($attributes)
    {
        $updated_attributes = array();
        foreach ($attributes as $attribute_name => $attribute_value) {
            // Check if the attribute exists, create it if not
            $attribute_name = ltrim($attribute_name, "attribute_");
            $updated_attributes[$attribute_name] = $attribute_value;
        }
        return $updated_attributes;
    }

    /**
     * Function to create attribute if not exist.
     * 
     * @param $product    object
     * @param $attributes array
     * 
     * @return $existing_attributes array
     */
    public function Product_Sync_Api_Create_Attributes_If_Not_exist($product, $attributes)
    {

        $existing_attributes = $product->get_attributes();
        $existing_attributes = (!empty($existing_attributes) ? $existing_attributes : array());
        foreach ($attributes as $attribute_name => $attribute_value) {

            if ($attribute_value['is_taxonomy']) {
                $attribute = wc_get_attribute($attribute_name);
                if (!$attribute) {
                    wc_create_attribute(array('name' => $attribute_name));
                }
            }

            if (!array_key_exists($attribute_name, $existing_attributes)) {
                $attribute = new WC_Product_Attribute();
                $attribute->set_id(wc_attribute_taxonomy_id_by_name($attribute_name));
                $attribute->set_name($attribute_value['name']);
                $attribute->set_options(explode("|", $attribute_value['value']));
                $attribute->set_position($attribute_value['position']);
                $attribute->set_visible($attribute_value['is_visible']);
                $attribute->set_variation($attribute_value['is_variation']);
                $existing_attributes[] = $attribute;
            }
        }
        return $existing_attributes;
    }

    /**
     * Function to get variaion id if already exist.
     * 
     * @param $existing_variations array
     * @param $variation_data      array
     * 
     * @return $variation_id int
     */
    public function Product_Sync_Import_Api_Get_Variation_id($existing_variations, $variation_data)
    {

        $variation_id = 0;
        $variation_data_id = $variation_data['variation_id'];
        if (!empty($existing_variations)) {
            foreach ($existing_variations as $variation) {
                $is_variation_id = get_post_meta($variation['variation_id'], 'md_variation_id', true);

                if ($is_variation_id == $variation_data_id) {
                    $variation_id = $variation['variation_id'];
                    break;
                }
            }
        }

        return $variation_id;
    }
}
