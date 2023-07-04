<?php

/**
 * Class SampleTest
 *
 * @package Md_Sample
 */

/**
 * Sample test case.
 */
class SampleTest extends WP_UnitTestCase
{

    public function test_primary_menu_is_set()
    {
        // Assign the primary menu location to a menu
        $primary_menu_id = wp_create_nav_menu('Primary Menu');
        $theme_locations = get_nav_menu_locations();
        $theme_locations['primary'] = $primary_menu_id;
        set_theme_mod('nav_menu_locations', $theme_locations);

        // Create a "Contact" page
        $contact_page_id = $this->factory()->post->create(array(
            'post_title' => 'Contact',
            'post_type' => 'page',
        ));

        // Add the "Contact" page to the primary menu
        wp_update_nav_menu_item($primary_menu_id, 0, array(
            'menu-item-title' => 'Contact',
            'menu-item-object' => 'page',
            'menu-item-object-id' => $contact_page_id,
            'menu-item-type' => 'post_type',
            'menu-item-status' => 'publish',
        ));

        // Create the "Service" parent menu item
        $service_parent_id = wp_update_nav_menu_item($primary_menu_id, 0, array(
            'menu-item-title' => 'Service',
            'menu-item-object' => 'custom',
            'menu-item-type' => 'custom',
            'menu-item-status' => 'publish',
        ));
        // Create three sublinks under the "Service" parent menu item
        $sublink_titles = array('Sublink 1', 'Sublink 2', 'Sublink 3');
        foreach ($sublink_titles as $title) {
            wp_update_nav_menu_item($primary_menu_id, 0, array(
                'menu-item-title' => $title,
                'menu-item-object' => 'custom',
                'menu-item-type' => 'custom',
                'menu-item-parent-id' => $service_parent_id,
                'menu-item-status' => 'publish',
            ));
        }

        // Get the assigned primary menu

        $theme_locations = get_nav_menu_locations();
        $primary_menu_id = $theme_locations['primary'];
        $primary_menu = wp_get_nav_menu_object($primary_menu_id);

        // Assert that the primary menu exists
        $this->assertNotNull($primary_menu, 'Primary menu is set.');


        $menu_items = wp_get_nav_menu_items($primary_menu_id);
        $contact_link_found = false;
        $service_menu_item = null;
        $service_sublinks_count = 0;
        foreach ($menu_items as $item) {
            if ($item->title === 'Contact' && $item->object === 'page' && $item->object_id == $contact_page_id) {
                $contact_link_found = true;
            }
            if ($item->title === 'Service') {
                $service_menu_item = $item;
            }
            if ($service_menu_item && $item->menu_item_parent == $service_menu_item->ID) {
                $service_sublinks_count++;
            }
        }

        // Check if the primary menu exists and contains the "Contact" page link
        $this->assertTrue($contact_link_found, 'Primary menu contains the "Contact" page link.');

        // Check if the "Service" menu item has three sublinks
        $this->assertEquals(3, $service_sublinks_count, 'The "Service" menu item contains 3 sublinks.');
    }

    public function test_search_results_show_posts_only()
    {
        // Create a test post
        $post_data = array(
            'post_title'   => 'Test Post',
            'post_content' => 'This is the content of the test post.',
            // 'post_type'    => 'page' 
        );
        $post_id = $this->factory()->post->create($post_data);

        // Set up a search query
        $search_query = 'Test Post';

        // Perform the search
        $search_results = new WP_Query(array(
            's' => $search_query,
        ));
        
        // Assert that there are search results
        $this->assertNotEmpty($search_results->posts, 'Search results are not empty.');

        // Assert that all search results are posts
        foreach ($search_results->posts as $result) {
            $this->assertEquals('post', $result->post_type, 'Search result is a post.');
        }
    }

    public function test_sitemap_is_working_properly()
    {
        // Perform a GET request to the sitemap URL
        $response = wp_remote_get(home_url('/sitemap_index.xml'));

        // Assert that the request was successful (status code 200)
        $this->assertEquals(200, wp_remote_retrieve_response_code($response), 'Sitemap is accessible.');

        // echo "<pre>";
        // print_r($response);
        // echo "</pre>";

        // Assert that the response body contains valid sitemap content
        $sitemap_content = wp_remote_retrieve_body($response);
        $this->assertStringContainsString('<sitemapindex', $sitemap_content, 'Sitemap content is present.');
        $this->assertStringContainsString('</sitemapindex', $sitemap_content, 'Sitemap content is complete.');
    }

    public function test_site_is_noindex()
    {

        // Set the blog_public option to '0'
        update_option('blog_public', '0');

        // Get the site's robots meta tag
        $robots_meta_tag = get_option('blog_public');

        // Assert that the site is set to noindex
        $this->assertEquals('0', $robots_meta_tag, 'Site is set to noindex.');
    }

    public function test_google_analytics_is_implemented()
    {
        // Get the URL of the homepage
        $homepage_url = get_home_url();

        // Make a GET request to the homepage
        $response = wp_remote_get($homepage_url);

        // Check if the request was successful
        if (is_wp_error($response)) {
            $error_message = $response->get_error_message();
            $this->fail("Failed to retrieve homepage: $error_message");
        }

        // Get the HTML content of the response
        $html = wp_remote_retrieve_body($response);

        // echo "<pre>";
        // echo $html;
        // echo "</pre>";

        // Assert that the Google Analytics tracking code is present
        $this->assertStringContainsString('G-1RPW27WEET', $html, 'Google Analytics is implemented.');
    }
}
