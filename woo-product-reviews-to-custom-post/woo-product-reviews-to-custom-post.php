<?php
/**
 * Plugin Name: WooCommerce Product Reviews to Custom Post
 * Description: WP-CLI command to migrate WooCommerce product reviews to custom post types.
 * Version: 1.0
 */

if ( defined( 'WP_CLI' ) && WP_CLI ) {

    function export_product_reviews_command( $args, $assoc_args ) {
        // Define your custom post type for product reviews
        $post_type = 'woo-reviews';

        // Get all WooCommerce product reviews
        $products = get_posts(
            array(
                'post_type'   => 'product',
                'numberposts' => -1, // Get all products
                'post_status' => 'publish',
            )
        );

        if ( empty( $products ) ) {
            WP_CLI::success( 'No products found.' );
            return;
        }

        foreach ( $products as $product ) {
            // Extract product data
            $product_id = $product->ID;
            $product_reviews = get_comments( array(
                'number'  => 100, 
                'post_id' => $product_id,
                'type'    => 'review',
                'status'  => 'approve', 
            ) );

            if ( empty( $product_reviews ) ) {
                continue; // Skip products with no reviews
            }

            foreach ( $product_reviews as $review ) {
                $rating       = get_comment_meta( $review->comment_ID, 'rating', true );
                $review_text  = $review->comment_content;

                if (!empty($review_text)) {
                    # code...
                    // Create a new custom post
                    $review_post_id = wp_insert_post(
                        array(
                            'post_type'    => $post_type,
                            'post_title'   => 'Review for Product ID ' . $product_id,
                            'post_content' => $review_text,
                            'post_status'  => 'publish',
                        )
                    );
    
                    // Store meta data
                    if ( $review_post_id ) {
                        update_post_meta( $review_post_id, 'product_id', $product_id );
                        update_post_meta( $review_post_id, 'rating', $rating );
                    }
                }
            }
        }

        WP_CLI::success( 'Product reviews exported to custom post type successfully.' );
    }

    /**
     * Export WooCommerce Product Reviews to Custom Post Type
     */
    WP_CLI::add_command( 'export_product_reviews', 'export_product_reviews_command' );
}

function cptui_register_my_cpts_woo_reviews() {

	/**
	 * Post Type: Woo Custom Reviews.
	 */

	$labels = [
		"name" => esc_html__( "Woo Custom Reviews", "storefront" ),
		"singular_name" => esc_html__( "Woo Custom Review", "storefront" ),
		"menu_name" => esc_html__( "My Woo Custom Reviews", "storefront" ),
		"all_items" => esc_html__( "All Woo Custom Reviews", "storefront" ),
		"add_new" => esc_html__( "Add new", "storefront" ),
		"add_new_item" => esc_html__( "Add new Woo Custom Review", "storefront" ),
		"edit_item" => esc_html__( "Edit Woo Custom Review", "storefront" ),
		"new_item" => esc_html__( "New Woo Custom Review", "storefront" ),
		"view_item" => esc_html__( "View Woo Custom Review", "storefront" ),
		"view_items" => esc_html__( "View Woo Custom Reviews", "storefront" ),
		"search_items" => esc_html__( "Search Woo Custom Reviews", "storefront" ),
		"not_found" => esc_html__( "No Woo Custom Reviews found", "storefront" ),
		"not_found_in_trash" => esc_html__( "No Woo Custom Reviews found in trash", "storefront" ),
		"parent" => esc_html__( "Parent Woo Custom Review:", "storefront" ),
		"featured_image" => esc_html__( "Featured image for this Woo Custom Review", "storefront" ),
		"set_featured_image" => esc_html__( "Set featured image for this Woo Custom Review", "storefront" ),
		"remove_featured_image" => esc_html__( "Remove featured image for this Woo Custom Review", "storefront" ),
		"use_featured_image" => esc_html__( "Use as featured image for this Woo Custom Review", "storefront" ),
		"archives" => esc_html__( "Woo Custom Review archives", "storefront" ),
		"insert_into_item" => esc_html__( "Insert into Woo Custom Review", "storefront" ),
		"uploaded_to_this_item" => esc_html__( "Upload to this Woo Custom Review", "storefront" ),
		"filter_items_list" => esc_html__( "Filter Woo Custom Reviews list", "storefront" ),
		"items_list_navigation" => esc_html__( "Woo Custom Reviews list navigation", "storefront" ),
		"items_list" => esc_html__( "Woo Custom Reviews list", "storefront" ),
		"attributes" => esc_html__( "Woo Custom Reviews attributes", "storefront" ),
		"name_admin_bar" => esc_html__( "Woo Custom Review", "storefront" ),
		"item_published" => esc_html__( "Woo Custom Review published", "storefront" ),
		"item_published_privately" => esc_html__( "Woo Custom Review published privately.", "storefront" ),
		"item_reverted_to_draft" => esc_html__( "Woo Custom Review reverted to draft.", "storefront" ),
		"item_scheduled" => esc_html__( "Woo Custom Review scheduled", "storefront" ),
		"item_updated" => esc_html__( "Woo Custom Review updated.", "storefront" ),
		"parent_item_colon" => esc_html__( "Parent Woo Custom Review:", "storefront" ),
	];

	$args = [
		"label" => esc_html__( "Woo Custom Reviews", "storefront" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"rest_namespace" => "wp/v2",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"delete_with_user" => false,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"can_export" => false,
		"rewrite" => [ "slug" => "woo-reviews", "with_front" => true ],
		"query_var" => true,
		"supports" => [ "title", "editor", "thumbnail" ],
		"show_in_graphql" => false,
	];

	register_post_type( "woo-reviews", $args );
}
add_action( 'init', 'cptui_register_my_cpts_woo_reviews' );


// Callback function to display the custom meta box
function custom_review_meta_box_callback($post)
{
    // Nonce field to secure the form data
    wp_nonce_field('custom_reviews_meta_box_nonce', 'custom_reviews_meta_box_nonce');

    // Get the saved meta values
    $product_id     = get_post_meta($post->ID, 'product_id', true);
    $rating          = get_post_meta($post->ID, 'rating', true);

    ?>
    <p>
        <label for="product_id"><?php _e('Product ID:', 'text_domain'); ?></label><br />
        <input type="text" id="product_id" name="product_id" value="<?php echo esc_attr($product_id); ?>">
    </p>
    <p>
        <label for="rating"><?php _e('Rating:', 'text_domain'); ?></label><br />
        <input type="number" id="rating" name="rating" min="0" max="5" step="0.1" value="<?php echo esc_attr($rating); ?>">
    </p>
<?php
}

// Function to add the custom meta box to "Reviews"
function add_custom_reviews_meta_box()
{
    add_meta_box(
        'custom_review_meta_box',
        __('Review Details', 'text_domain'),
        'custom_review_meta_box_callback',
        'woo-reviews', // Replace 'woo-reviews' with your custom post type slug
        'normal',
        'high'
    );
}

// Function to save the custom meta box data
function save_custom_reviews_meta($post_id)
{
    // Verify the nonce field
    if (!isset($_POST['custom_reviews_meta_box_nonce']) || !wp_verify_nonce($_POST['custom_reviews_meta_box_nonce'], 'custom_reviews_meta_box_nonce')) {
        return;
    }

    // Save the custom field values
    if (isset($_POST['product_id'])) {
        update_post_meta($post_id, 'product_id', sanitize_text_field($_POST['product_id']));
    }

    // Save the rating field
    if (isset($_POST['rating'])) {
        $rating = floatval($_POST['rating']);
        $rating = max(0, min(5, $rating));
        update_post_meta($post_id, 'rating', $rating);
    }
}

add_action('add_meta_boxes', 'add_custom_reviews_meta_box');
// add_action('save_post', 'save_custom_reviews_meta');