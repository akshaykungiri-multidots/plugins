<?php

/**
 * Dynamic Blocks.
 *
 * @package md-sync-post-multisite
 */

namespace MD_Sync_Post_Multisite\Inc;

use MD_Sync_Post_Multisite\Inc\Traits\Singleton;
use WP_CLI;
use WP_Query;
 
class Md_Command {

    use Singleton;

    /**
     * Function to check if image exist in attachment or not
     * 
     * @param  $url string
     * 
     * @return $attachment_id int
     */
    public function attachment_url_to_postid($url)
    {

        $attachment_id = false;

        // Handle thumbnail URLs
        $url = preg_replace('/-\d+x\d+(?=\.(jpg|jpeg|png|gif)$)/i', '', $url);

        // Use WP_Query for attachment retrieval
        $query = new WP_Query(array(
            'post_type'      => 'attachment',
            'post_status'    => 'inherit',  // Include all attachment statuses
            'guid'           => $url,
            'fields'         => 'ids',      // Only retrieve IDs for efficiency
            'posts_per_page' => 1,          // Limit to a single result
        ));

        if ($query->have_posts()) {
            $attachment_id = $query->posts[0];
        }

        return $attachment_id;
    }

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

        if (!isset($assoc_args['site-from'])) {
            WP_CLI::error("site-from is missing in command");
            return;
        }

        if (!isset($assoc_args['site-to'])) {
            WP_CLI::error("site-to is missing in command");
            return;
        }

        $posts = get_posts(
            array(
                'suppress_filters' => false,
                'numberposts' => $assoc_args['number-of-posts'] ?? -1,
                'blog_id'     => $assoc_args['site-from'],
            )
        );

        foreach ($posts as $post) {

            $post_metas = get_post_meta($post->ID);
            $original_attachment_url = "";
            if (has_post_thumbnail($post->ID)) {
                $original_attachment_id = get_post_thumbnail_id($post->ID);
                $original_attachment_url = wp_get_attachment_url($original_attachment_id);
            }
            $categories = wp_get_post_categories($post->ID, array('fields' => 'names'));
            $tags = wp_get_post_tags($post->ID, ['fields' => 'names']);

            switch_to_blog($assoc_args['site-to']);

            // Check for existing post by title
            $existing_post = get_page_by_title($post->post_title, OBJECT, 'post');

            if ($existing_post) {
                $new_post_id = wp_insert_post([
                    'ID'            => $existing_post->ID,
                    'post_title'    => $post->post_title,
                    'post_content'  => $post->post_content,
                    'post_excerpt'  => $post->post_excerpt,  // Add excerpt
                    'post_author'   => $post->post_author,  // Add author
                    'post_date'     => $post->post_date,
                    'post_date_gmt' => $post->post_date_gmt,
                ]);
            } else {
                $new_post_id = wp_insert_post([
                    'post_title'    => $post->post_title,
                    'post_content'  => $post->post_content,
                    'post_excerpt'  => $post->post_excerpt,  // Add excerpt
                    'post_author'   => $post->post_author,  // Add author
                    'post_date'     => $post->post_date,
                    'post_date_gmt' => $post->post_date_gmt,
                ]);
            }

            // Sync meta
            foreach ($post_metas as $key => $value) {
                update_post_meta($new_post_id, $key, $value[0]);
            }

            // Handle featured image
            if (!empty($original_attachment_url)) {

                // Download featured image from source site
                $file_array = array(
                    'name' => basename($original_attachment_url),
                    'tmp_name' => download_url($original_attachment_url),
                );

                $existing_attachment_id = $this->attachment_url_to_postid($original_attachment_url);

                // Upload featured image to destination site
                if (!$existing_attachment_id) {
                    // Upload featured image to destination site
                    $existing_attachment_id = media_handle_sideload($file_array, $new_post_id);
                }
                // Set featured image for new post
                set_post_thumbnail($new_post_id, $existing_attachment_id);
            }

            // Sync images
            $content = $post->post_content;
            preg_match_all('/https?:\/\/[^\s]+.\.(jpg|jpeg|png|gif)/i', $content, $matches);
            foreach ($matches[0] as $image_url) {
                $file_array = array(
                    'name' => basename($image_url),
                    'tmp_name' => download_url($image_url),
                );
                $existing_attachment_id = $this->attachment_url_to_postid($image_url);
                if ($existing_attachment_id) {
                    $new_image_url = wp_get_attachment_url($existing_attachment_id);
                } else {
                    $new_image_url = media_handle_sideload($file_array, $new_post_id);
                }
                $content = str_replace($image_url, $new_image_url, $content);
            }

            // Sync categories and tags
            wp_set_object_terms($new_post_id, $categories, 'category');
            wp_set_object_terms($new_post_id, $tags, 'post_tag');

            restore_current_blog();
        }

        WP_CLI::success("Posts synced successfully!");
    }
}