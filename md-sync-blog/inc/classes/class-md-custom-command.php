<?php

/**
 * Dynamic Blocks.
 *
 * @package md-sync-post-multisite
 */

namespace MD_Sync_Blog\Inc;

use MD_Sync_Blog\Inc\Traits\Singleton;
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

        if (!isset($assoc_args['page-from'])) {
            WP_CLI::error("page-from is missing in command");
            return;
        }

        if (!isset($assoc_args['page-to'])) {
            WP_CLI::error("page-to is missing in command");
            return;
        }

        $url = $assoc_args['page-url']; // URL of the website to fetch posts from
        $startPage = ( isset($assoc_args['page-from']) ? $assoc_args['page-from'] : 1 );
        $endPage = ( isset($assoc_args['page-to']) ? $assoc_args['page-to'] : 1 );

        for ($i=$startPage; $i <= $endPage; $i++) { 

            $paged_url = ( $i !== 1 ) ? $url . "/page/" . $i : $url;
            // Fetch posts using DOMElement
            $dom = new \DOMDocument();
            $dom->loadHTMLFile( $paged_url );
            $xpath = new \DOMXPath( $dom );
            $posts = $xpath->query( "//div[@class='article-wrapper']" );
    
            // Loop through the posts and migrate content to Gutenberg blocks
            foreach ( $posts as $post ) {
                // Get post title
                $blogImage = $post->getElementsByTagName( 'img' )->item(0)->getAttribute("src");
                $blogTitle = $post->getElementsByTagName( 'a' )->item(0)->textContent;
                $blogUrl = $post->getElementsByTagName( 'a' )->item(0)->getAttribute("href");
                $postDom = new \DOMDocument();
                $postDom->loadHTMLFile( $blogUrl );
                $blogDom = $postDom->getElementsByTagName('article')->item(0);
                $blogXpath = new \DOMXPath( $postDom );
                $singlePostContent = $blogXpath->query( "//div[@class='content-inner']", $blogDom );
                $singlePostContentHtml = $postDom->saveHTML($singlePostContent[0]);
    
                
                // Split the content into lines
                $lines = explode("\n", $singlePostContentHtml);
    
                // Iterate through each line
                foreach ($lines as &$line) {
                    // Check if the line contains a heading tag
                    if (preg_match('/<h[1-6]>.*?<\/h[1-6]>/', $line)) {
                        // Convert heading tag to Gutenberg heading block
                        $line = preg_replace('/<h([1-6])>(.*?)<\/h[1-6]>/s', '<!-- wp:heading {"level":$1} --><h$1>$2</h$1><!-- /wp:heading -->', $line);
                    } else if (preg_match('/p>.*?<\/p>/', $line)) {
                        // Convert the line to a Gutenberg paragraph block
                        $line = '<!-- wp:paragraph -->' . $line . '<!-- /wp:paragraph -->';
                    } else {
                        $line = '';
                    }
                }
    
                // Join the lines back together
                $new_content = implode("\n", $lines);
    
                $post_id = post_exists($blogTitle);
    
                if ($post_id) { 
                    wp_update_post( array(
                        'ID' => $post_id, 
                        'post_content' => $new_content
                    ) );
                } else {
                    // Create a new Gutenberg block for the post
                    $post_id = wp_insert_post( array(
                        'post_title'   => $blogTitle,
                        'post_content' => $new_content,
                        'post_status'  => 'publish',
                        'post_type'    => 'post',
                    ) );
                }
    
                if (!empty($blogImage)) {
                    $originalImage = $this->MD_Sync_Extract_Image($blogImage);
                    $attachment_id = $this->MD_Sync_Import_Api_Download_Image_And_Get_Attachment_id($originalImage);
                    set_post_thumbnail( $post_id, $attachment_id );
                }
    
                WP_CLI::success('Post Updated ==> ' . $post_id);
            }
        }
    }
}