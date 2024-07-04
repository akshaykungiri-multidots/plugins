<?php
/**
 * The Image Box functionality of the plugin.
 *
 * @package    MD_Bakery_Antian
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Bakery_Antian\Inc\Addons;


/**
 * Image_Box class
 * 
 * @since 1.0.0
 */
class Image_Box {

    // Create Image Box Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'image_box'));
        add_shortcode('image_box', array($this, 'image_box_html'));
    }

    /**
     * Function is used to create image_box custom element.
     */
    public function image_box() {

        // Image Box With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Image Box', 'md-bakery-antian'),
            'base' => 'image_box',
            'category' => __('Antian', 'md-bakery-antian'),
            // Repeatable field
            'params' => array(
                // Sub Heading
                array(
                    'type' => 'textfield',
                    'heading' => __('Sub Heading', 'md-bakery-antian'),
                    'param_name' => 'sub_heading',
                    'value' => '',
                    'description' => __('Enter sub heading.', 'md-bakery-antian'),
                ),
                // Heading
                array(
                    'type' => 'textfield',
                    'heading' => __('Heading', 'md-bakery-antian'),
                    'param_name' => 'heading',
                    'value' => '',
                    'description' => __('Enter heading.', 'md-bakery-antian'),
                ),
                // Image Boxes.
                array(
                    'type' => 'param_group',
                    'heading' => __('Image Boxes', 'md-bakery-antian'),
                    'param_name' => 'image_boxes',
                    'value' => '',
                    'params' => array(
                        // Image
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Image', 'md-bakery-antian'),
                            'param_name' => 'box_image',
                            'value' => '',
                            'description' => __('Upload box image.', 'md-bakery-antian'),
                        ),
                        array(
                            'type' => 'textfield',
                            'heading' => __('Box Title', 'md-bakery-antian'),
                            'param_name' => 'box_title',
                            'value' => '',
                            'description' => __('Enter title.', 'md-bakery-antian'),
                        ),
                        // Box Content
                        array(
                            'type' => 'textarea',
                            'heading' => __('Box Content', 'md-bakery-antian'),
                            'param_name' => 'box_content',
                            'value' => '',
                            'description' => __('Enter content.', 'md-bakery-antian'),
                        ),
                    ),
                ),
            ),
            'icon' => 'md-icons fa fa-image',
        ));
    }

    /**
     * Function is used to display image banner html.
     */
    public function image_box_html($atts) {
        $atts = shortcode_atts(
            array(
                'sub_heading' => '',
                'heading' => '',
                'image_boxes' => array(),
            ),
            $atts
        );
        ob_start();
        include MD_BAKERY_ANTIAN_PATH . '/inc/addons/templates/image-box.php';
        return ob_get_clean();
    }

}