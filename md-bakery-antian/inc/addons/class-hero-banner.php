<?php
/**
 * The Hero Banner functionality of the plugin.
 *
 * @package    MD_Bakery_Antian
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Bakery_Antian\Inc\Addons;


/**
 * Hero_Banner class
 * 
 * @since 1.0.0
 */
class Hero_Banner {

    // Create Hero Banner Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'hero_banner'));
        add_shortcode('hero_banner', array($this, 'hero_banner_html'));
    }

    /**
     * Function is used to create hero banner custom element.
     */
    public function hero_banner() {

        // Hero Banner With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Hero Banner', 'md-bakery-antian'),
            'base' => 'hero_banner',
            'params' => array(
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
                    'type' => 'vc_link',
                    'heading' => __('Button 1', 'md-bakery-antian'),
                    'param_name' => 'button1',
                    'value' => '',
                    'description' => __('Enter button 1 text and link.', 'md-bakery-antian')
                ),
                array(
                    'type' => 'vc_link',
                    'heading' => __('Button 2', 'md-bakery-antian'),
                    'param_name' => 'button2',
                    'value' => '',
                    'description' => __('Enter button 2 text and link.', 'md-bakery-antian')
                ),
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'background_image',
                    'value' => '',
                    'description' => __('Upload background image.', 'md-bakery-antian')
                )
            ),
            'category' => __('Antian', 'md-bakery-antian'),
        ));
    }

    /**
     * Function is used to display hero banner html.
     */
    public function hero_banner_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'description' => '',
                'button1' => '',
                'button2' => '',
                'background_image' => ''
            ),
            $atts
        );
        ob_start();
        include MD_BAKERY_ANTIAN_PATH . '/inc/addons/templates/hero-banner.php';
        return ob_get_clean();
    }

}