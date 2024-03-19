<?php

/**
 * Dynamic Blocks.
 *
 * @package MD_Migrate_Resources
 */

namespace MD_Migrate_Resources\Inc;

use MD_Migrate_Resources\Inc\Traits\Singleton;
use WP_CLI;
 
class Md_Custom_Command {

    use Singleton;

    /**
     * Function get attachment based on filename.
     * 
     * @param $filename string
     * 
     * @return int
     */
    public function MD_Sync_Import_Api_Get_Attachment_Id_By_filename($filename)
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
    public function MD_Sync_Import_Api_Download_Image_And_Get_Attachment_id($image_url)
    {
        global $wp_filesystem;

        // Ensure $image_url is a valid string
        if ($image_url === false) {
            return false;
        }

        $image_name = basename($image_url);
        $upload_dir = wp_upload_dir();
        $image_path = $upload_dir['path'] . '/' . $image_name;

        // Check if an image with the same filename already exists in the media library
        $existing_attachment_id = $this->MD_Sync_Import_Api_Get_Attachment_Id_By_filename(basename($image_url));
        if ($existing_attachment_id) {
            // Return the existing attachment ID
            return $existing_attachment_id;
        }

        // Check if the WP_Filesystem class is available
        if ( ! isset( $wp_filesystem ) || ! is_a( $wp_filesystem, 'WP_Filesystem_Base' ) ) {
            // Load the necessary file system methods
            require_once ABSPATH . 'wp-admin/includes/file.php';
            WP_Filesystem();
        }

        if ( $wp_filesystem ) {
            // Download the image
            $image_content = $wp_filesystem->get_contents($image_url);
            // Use the put_contents method of WP_Filesystem
            $wp_filesystem->put_contents( $image_path, $image_content, FS_CHMOD_FILE );
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
     * Function to remove query param from image url.
     * 
     * @param $originalUrl string
     * 
     * @return $originalUrl string
     */
    public function MD_Sync_Extract_Image($originalUrl) {
        // Parse the URL
        $parsedUrl = wp_parse_url($originalUrl);

        // Check if the URL has a path
        if (isset($parsedUrl['path'])) {
            // Extract the path (which is the image URL without the query parameter)
            $imageUrl = $parsedUrl['scheme'] . '://' . $parsedUrl['host'] . $parsedUrl['path'];
            return $imageUrl;
        }
        return $originalUrl;
    }

    /**
     * Function to sync blog
     * 
     * @param  $args array
     * @param  $assoc_args array
     * 
     * @return null
     */
    public function __invoke($args, $assoc_args)
    {

        if (!isset($assoc_args['page-url'])) {
            WP_CLI::error("url is missing in command");
            return;
        }

        if (!isset($assoc_args['post-type'])) {
            WP_CLI::error("post-type is missing in command");
            return;
        }

        $post_type = $assoc_args['post-type']; // URL of the website to fetch posts from
        if (!post_type_exists($post_type)) {
            WP_CLI::error("Post Type is not found.");
        }
        $base_url = $assoc_args['page-url']; // URL of the website to fetch posts from

        $resource_categories = array(
            "documents" => "Documents", 
            "case-study" => "Case Studies", 
            "press-release" => "Press Releases",
            "news" => "News",
            "on-demand-webinar" => "On-Demand Webinars",
            "awards" => "Awards",
        );

        foreach ($resource_categories as $resource_categories_key => $resource_categories_value) {
            
            WP_CLI::success( $resource_categories_value . ' posts are syncing');

            $resource_action = ($resource_categories_key === "press-release") ? 'posts_listing_filter_v2' : 'resources_listing_filter';
            $posts_per_page = 1;
            $is_next_page = "1";
            do {
                // Parameters
                $params = array(
                    'action' => $resource_action,
                    'selected_filter' => '',
                    'pageNumber' => $posts_per_page,
                    'selected_categories' => $resource_categories_key,
                    'selected_select_tag' => '',
                    'show_title' => 'true',
                    'show_pub_date' => 'true',
                    'show_desc' => 'true',
                    'show_tag' => 'true',
                    'post_per_page' => 20,
                    'data_append' => 'false'
                );
                // Build query string
                $query_string = http_build_query($params);

                // Construct full URL with query string
                $url = $base_url . '/wp-admin/admin-ajax.php?' . $query_string;
        
                // Execute cURL session
                $response = wp_remote_get($url);
        
                // Handle response
                $responseBody = json_decode($response['body']);
                $ajax_response =  $responseBody->ajax_response;
                $result_pagination =  $responseBody->result_pagination;
                $dom = new \DOMDocument();
                $dom->loadHTML( $ajax_response );
                $xpath = new \DOMXPath( $dom );
                // Query for div elements with the class name 'res-list-filter__item'
                if ($resource_categories_key === "press-release") {
                    $elements = $xpath->query("//div[(@class='post-list-filter__item')]");
                } else {
                    $elements = $xpath->query("//div[(@class='res-list-filter__item')]");
                }
                // Loop through each matching element
                foreach ($elements as $element) {
    
                    if ($resource_categories_key === "press-release") {
                        // Extract post title
                        $postTitle = $xpath->evaluate("string(.//h3[@class='post-list-filter__item-title']/a/text())", $element);
                        
                        // Extract post URL
                        $postUrl = $xpath->evaluate("string(.//h3[@class='post-list-filter__item-title']/a/@href)", $element);
                        
                        // Extract post tag
                        $postTag = $xpath->evaluate("string(.//p[@class='post-list-filter__item-tag'])", $element);
                        
                        // Extract post Image
                        $postImage = $xpath->evaluate("string(.//div[@class='post-list-filter__item-image']/a/img/@src)", $element);
            
                        // Extract post content
                        $postDom = new \DOMDocument();
                        $postDom->loadHTMLFile( $postUrl );
                        $blogXpath = new \DOMXPath( $postDom );
                        $singlePostContent = $blogXpath->query( "//div[(@class='post-entry-content')]", $postDom );
                        $postContent = $postDom->saveHTML($singlePostContent[0]);
                    } else {
                        // Extract post title
                        $postTitle = $xpath->evaluate("string(.//h3[@class='res-list-filter__item-title']/a/text())", $element);
                        
                        // Extract post URL
                        $postUrl = $xpath->evaluate("string(.//h3[@class='res-list-filter__item-title']/a/@href)", $element);
                        
                        // Extract post tag
                        $postTag = $xpath->evaluate("string(.//p[@class='res-list-filter__item-tag'])", $element);
                        
                        // Extract post Image
                        $postImage = $xpath->evaluate("string(.//div[@class='res-list-filter__item-image']/a/img/@src)", $element);
            
                        $postContent = "";
                        if ($resource_categories_key !== "news" && $resource_categories_key !== "awards") {
                            // Extract post content
                            $postDom = new \DOMDocument();
                            $postDom->loadHTMLFile( $postUrl );
                            $blogXpath = new \DOMXPath( $postDom );
                            $singlePostContent = $blogXpath->query( "//div[(@class='info-with-form__desc')]", $postDom );
                            $postContent = $postDom->saveHTML($singlePostContent[0]);
                        }
                    }
        
                    $post_id = post_exists($postTitle);
                    if ($post_id) { 
                        wp_update_post( array(
                            'ID' => $post_id, 
                            'post_content' => $postContent
                        ) );
                    } else {
                        // Create a new Gutenberg block for the post
                        $post_id = wp_insert_post( array(
                            'post_title'   => $postTitle,
                            'post_content' => $postContent,
                            'post_status'  => 'publish',
                            'post_type'    => $post_type,
                        ) );
                    }
                    
                    if (!empty($postImage)) {
                        $originalImage = $this->MD_Sync_Extract_Image($postImage);
                        $attachment_id = $this->MD_Sync_Import_Api_Download_Image_And_Get_Attachment_id($originalImage);
                        set_post_thumbnail( $post_id, $attachment_id );
                    }
        
                    // Get the term ID from the term slug
                    $resource_term = get_term_by('slug', $resource_categories_key, 'resource-categories');
                    if (!$resource_term) {
                        $term_args = array(
                            'slug' => $resource_categories_key,
                            'description' => 'Description of ' . $resource_categories_value,
                            'parent' => 0 // Adjust parent ID if necessary
                        );
                        $resource_term = wp_insert_term($resource_categories_value, 'resource-categories', $term_args);
                    }
                    wp_set_object_terms($post_id, $resource_term->term_id, 'resource-categories');
                    wp_set_object_terms( $post_id, trim($postTag), "resource-tags" );
        
                    WP_CLI::success('Post synced ==> ' . $post_id);
                }
                if (empty($result_pagination)) {
                    $is_next_page = "";
                    break;
                }
                $posts_per_page++;
            } while ($is_next_page);

            WP_CLI::success( $resource_categories_value . ' posts syncing completed.');
        }
    }
}