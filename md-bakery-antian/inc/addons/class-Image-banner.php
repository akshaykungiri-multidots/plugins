<?php
/**
 * The Hero Banner functionality of the plugin.
 *
 * @package    MD_Bakery_Antian
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Bakery_Antian\Inc\Addons;


/**
 * Image_Banner class
 * 
 * @since 1.0.0
 */
class Image_Banner {

    // Create Image Banner Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'image_banner'));
        add_shortcode('image_banner', array($this, 'image_banner_html'));
    }

    /**
     * Function is used to create image banner custom element.
     */
    public function image_banner() {

        // Image Banner With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Image Banner', 'md-bakery-antian'),
            'base' => 'image_banner',
            'params' => array(
                array(
                    'type' => 'textfield',
                    'heading' => __('Subtitle', 'md-bakery-antian'),
                    'param_name' => 'subtitle',
                    'value' => '',
                    'description' => __('Enter subtitle.', 'md-bakery-antian')
                ),
                array(
                    'type' => 'textfield',
                    'heading' => __('Title', 'md-bakery-antian'),
                    'param_name' => 'title',
                    'value' => '',
                    'description' => __('Enter title.', 'md-bakery-antian')
                ),
                array(
                    'type' => 'textarea',
                    'heading' => __('Description', 'md-bakery-antian'),
                    'param_name' => 'description',
                    'value' => '',
                    'description' => __('Enter description.', 'md-bakery-antian')
                ),
                array(
                    'type' => 'attach_image',
                    'heading' => __('Banner Image', 'md-bakery-antian'),
                    'param_name' => 'banner_image',
                    'value' => '',
                    'description' => __('Upload banner image.', 'md-bakery-antian')
                ),
                // Image Position Left or Right
                array(
                    'type' => 'dropdown',
                    'heading' => __('Image Position', 'md-bakery-antian'),
                    'param_name' => 'image_position',
                    'value' => array(
                        __('Left', 'md-bakery-antian') => 'left',
                        __('Right', 'md-bakery-antian') => 'right',
                    ),
                    'description' => __('Select image position.', 'md-bakery-antian')
                ),
                // Image Size as dropdown - Small, Medium, Large
                array(
                    'type' => 'dropdown',
                    'heading' => __('Image Size', 'md-bakery-antian'),
                    'param_name' => 'image_size',
                    'value' => array(
                        __('Small', 'md-bakery-antian') => 'small',
                        __('Medium', 'md-bakery-antian') => 'medium',
                        __('Large', 'md-bakery-antian') => 'large',
                    ),
                    'description' => __('Select image size.', 'md-bakery-antian')
                ),
            ),
            'category' => __('Antian', 'md-bakery-antian'),
        ));
    }

    /**
     * Function is used to display image banner html.
     */
    public function image_banner_html($atts) {

        $atts = shortcode_atts(
            array(
                'subtitle' => '',
                'title' => '',
                'description' => '',
                'banner_image' => '',
                'image_position' => 'left',
                'image_size' => '',
            ),
            $atts
        );
        ob_start();
        include MD_BAKERY_ANTIAN_PATH . '/inc/addons/templates/image-banner.php';
        return ob_get_clean();
    }

}