<?php
/**
 * The Hero Banner functionality of the plugin.
 *
 * @package    MD_Bakery_Antian
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Bakery_Antian\Inc\Addons;


/**
 * Slider_Image_Box class
 * 
 * @since 1.0.0
 */
class Slider_Image_Box {

    // Create Slider Image Box Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'slider_image_box'));
        add_shortcode('slider_image_box', array($this, 'slider_image_box_html'));
    }

    /**
     * Function is used to create slider_image_box custom element.
     */
    public function slider_image_box() {

        // Slider Image Box With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Slider Image Box', 'md-bakery-antian'),
            'base' => 'slider_image_box',
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
                // Slides.
                array(
                    'type' => 'param_group',
                    'heading' => __('Slides', 'md-bakery-antian'),
                    'param_name' => 'slides',
                    'value' => '',
                    'params' => array(
                        // Slider Image
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Slider Image', 'md-bakery-antian'),
                            'param_name' => 'slider_image',
                            'value' => '',
                            'description' => __('Upload slider image.', 'md-bakery-antian'),
                        ),
                        // Slider Content
                        array(
                            'type' => 'textarea',
                            'heading' => __('Slider Content', 'md-bakery-antian'),
                            'param_name' => 'slider_content',
                            'value' => '',
                            'description' => __('Enter slider content.', 'md-bakery-antian'),
                        ),
                        // Slider Button.
                        array(
                            'type' => 'vc_link',
                            'heading' => __('Slider Button', 'md-bakery-antian'),
                            'param_name' => 'slider_button',
                            'value' => '',
                            'description' => __('Enter slider button.', 'md-bakery-antian'),
                        ),
                    ),
                ),
                // Slider Options like slides_to_show, slides_to_scroll, autoplay, etc.
                array(
                    'type' => 'textfield',
                    'heading' => __('Slides To Show', 'md-bakery-antian'),
                    'param_name' => 'slides_to_show',
                    'value' => '3',
                    'description' => __('Enter number of slides to show.', 'md-bakery-antian'),
                    'group' => 'Slider Options'
                ),
                array(
                    'type' => 'textfield',
                    'heading' => __('Slides To Scroll', 'md-bakery-antian'),
                    'param_name' => 'slides_to_scroll',
                    'value' => '1',
                    'description' => __('Enter number of slides to scroll.', 'md-bakery-antian'),
                    'group' => 'Slider Options'
                ),
                array(
                    'type' => 'checkbox',
                    'heading' => __('Autoplay', 'md-bakery-antian'),
                    'param_name' => 'autoplay',
                    'value' => array(__('Yes', 'text-domain') => 'yes'),
                    'description' => __('Enable or disable autoplay.', 'md-bakery-antian'),
                    'group' => 'Slider Options'
                ),
                array(
                    'type' => 'textfield',
                    'heading' => __('Autoplay Speed', 'md-bakery-antian'),
                    'param_name' => 'autoplay_speed',
                    'value' => '2000',
                    'description' => __('Enter autoplay speed.', 'md-bakery-antian'),
                    'group' => 'Slider Options'
                ),
                // Infinte Scroll
                array(
                    'type' => 'checkbox',
                    'heading' => __('Infinite Scroll', 'md-bakery-antian'),
                    'param_name' => 'infinite_scroll',
                    'value' => array(__('Yes', 'text-domain') => 'yes'),
                    'description' => __('Enable or disable infinite scroll.', 'md-bakery-antian'),
                    'group' => 'Slider Options'
                ),
                // Dots
                array(
                    'type' => 'checkbox',
                    'heading' => __('Dots', 'md-bakery-antian'),
                    'param_name' => 'dots',
                    'value' => array(__('Yes', 'text-domain') => 'yes'),
                    'description' => __('Enable or disable dots.', 'md-bakery-antian'),
                    'group' => 'Slider Options'
                ),
                // Arrows
                array(
                    'type' => 'checkbox',
                    'heading' => __('Arrows', 'md-bakery-antian'),
                    'param_name' => 'arrows',
                    'value' => array(__('Yes', 'text-domain') => 'yes'),
                    'description' => __('Enable or disable arrows.', 'md-bakery-antian'),
                    'group' => 'Slider Options'
                ),
            ),
            // slider icon
            'icon' => 'icon-wpb-ui-pageable',
        ));
    }

    /**
     * Function is used to display image banner html.
     */
    public function slider_image_box_html($atts) {
        $atts = shortcode_atts(
            array(
                'sub_heading' => '',
                'heading' => '',
                'slides' => array(),
                'slides_to_show' => '3',
                'slides_to_scroll' => '1',
                'autoplay' => 'no',
                'autoplay_speed' => '2000',
                'infinite_scroll' => 'no',
                'dots' => 'no',
                'arrows' => 'no',
            ),
            $atts
        );
        ob_start();
        include MD_BAKERY_ANTIAN_PATH . '/inc/addons/templates/slider-image-box.php';
        return ob_get_clean();
    }

}