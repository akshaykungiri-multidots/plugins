<?php
/**
 * The Hero Banner functionality of the plugin.
 *
 * @package    MD_Bakery_Antian
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Bakery_Antian\Inc\Addons;


/**
 * Toggle_Image_Box class
 * 
 * @since 1.0.0
 */
class Toggle_Image_Box {

    // Create Toggle Image Box Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'toggle_image_box'));
        add_shortcode('toggle_image_box', array($this, 'toggle_image_box_html'));
    }

    /**
     * Function is used to create toggle_image_box custom element.
     */
    public function toggle_image_box() {

        // Toggle Image Box
        vc_map(array(
            'name' => __('Toggle Image Box', 'md-bakery-antian'),
            'base' => 'toggle_image_box',
            'category' => __('Antian', 'md-bakery-antian'),
            // Repeatable field
            'params' => array(
                // Heading
                array(
                    'type' => 'textfield',
                    'heading' => __('Heading', 'md-bakery-antian'),
                    'param_name' => 'heading',
                    'value' => '',
                    'description' => __('Enter heading.', 'md-bakery-antian'),
                ),
                // ImageBox array.
                array(
                    'type' => 'param_group',
                    'heading' => __('Image Box Items', 'md-bakery-antian'),
                    'param_name' => 'image_box_items',
                    'value' => '',
                    'params' => array(
                        // Toggle Image Box Image
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Image', 'md-bakery-antian'),
                            'param_name' => 'toggle_image_box_image',
                            'value' => '',
                            'description' => __('Upload image.', 'md-bakery-antian'),
                        ),
                        // Toggle Image Box Title
                        array(
                            'type' => 'textfield',
                            'heading' => __('Title', 'md-bakery-antian'),
                            'param_name' => 'toggle_image_box_title',
                            'value' => '',
                            'description' => __('Enter title.', 'md-bakery-antian'),
                        ),
                        // Toggle Image Box Content
                        array(
                            'type' => 'textarea',
                            'heading' => __('Content', 'md-bakery-antian'),
                            'param_name' => 'toggle_image_box_content',
                            'value' => '',
                            'description' => __('Enter content.', 'md-bakery-antian'),
                        ),
                    ),
                ),
            ),
            'icon' => 'icon-wpb-images-carousel',
        ));
    }

    /**
     * Function is used to display image banner html.
     */
    public function toggle_image_box_html($atts) {
        $atts = shortcode_atts(
            array(
                'heading' => '',
                'image_box_items' => array(),
            ),
            $atts
        );
        ob_start();
        include MD_BAKERY_ANTIAN_PATH . '/inc/addons/templates/toggle-image-box.php';
        return ob_get_clean();
    }

}