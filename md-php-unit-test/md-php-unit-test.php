<?php

/**
 * Plugin Name: Multi Dots PHP Unit Exercise
 * Description: This is plugin to unit test WordPress Functionality.
 * Author: Akshay Kungiri
 * Version: 1.0.0
 */

defined('ABSPATH') || die('Access Denied');

// Register custom post type
function md_custom_plugin_register_post_type()
{
    register_post_type('md_custom_books', [
        'label' => 'MD Books',
        'public' => true,
        'supports' => ['title', 'editor'],
    ]);
}
add_action('init', 'md_custom_plugin_register_post_type');

// Register taxonomy
function md_custom_plugin_register_taxonomy()
{
    register_taxonomy('md_author', 'md_custom_books', [
        'label' => 'MD Author',
        'hierarchical' => true,
    ]);
}
add_action('init', 'md_custom_plugin_register_taxonomy');

// Create shortcode
function md_custom_plugin_shortcode($atts)
{
    return 'This is Unit Testing.';
}
add_shortcode('md_custom_shortcode', 'md_custom_plugin_shortcode');

// Register custom sidebar
function md_custom_plugin_register_sidebar()
{
    register_sidebar([
        'name' => 'MD Sidebar',
        'id' => 'md_sidebar',
        'description' => 'This is a custom md sidebar.',
        'before_widget' => '<div class="widget">',
        'after_widget' => '</div>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ]);
}
add_action('widgets_init', 'md_custom_plugin_register_sidebar');

// Register custom REST API route
function md_custom_plugin_register_rest_route()
{
    register_rest_route('md/v1', '/data', [
        'methods' => 'GET',
        'callback' => 'md_custom_plugin_rest_callback',
        'permission_callback' => function () {
            return '';
        }
    ]);
}

function md_custom_plugin_rest_callback($request)
{
    $data = array('message' => 'Welcome To Multidots.');
    return rest_ensure_response($data);
}
add_action('rest_api_init', 'md_custom_plugin_register_rest_route');
