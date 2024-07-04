<?php
/**
 * The Logo Slider functionality of the plugin.
 *
 * @package    MD_Bakery_Antian
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Bakery_Antian\Inc\Addons;


/**
 * Logo_Slider class
 * 
 * @since 1.0.0
 */
class Logo_Slider {

    // Create Logo Slider Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'logo_slider'));
        add_shortcode('logo_slider', array($this, 'logo_slider_html'));
    }

    /**
     * Function is used to create logo_slider custom element.
     */
    public function logo_slider() {

        // Logo Slider
        vc_map(array(
            'name' => __('Logo Slider', 'md-bakery-antian'),
            'base' => 'logo_slider',
            'category' => __('Antian', 'md-bakery-antian'),
            'icon' => 'icon-wpb-application-icon-large',
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
                // View More Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('View More Link', 'md-bakery-antian'),
                    'param_name' => 'view_more_link',
                    'value' => '',
                    'description' => __('Enter view more link.', 'md-bakery-antian'),
                ),
                // Slides.
                array(
                    'type' => 'param_group',
                    'heading' => __('Slides', 'md-bakery-antian'),
                    'param_name' => 'slides',
                    'value' => '',
                    'params' => array(
                        // Slider Logo
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Slider Logo', 'md-bakery-antian'),
                            'param_name' => 'slider_logo',
                            'value' => '',
                            'description' => __('Upload slider logo.', 'md-bakery-antian'),
                        ),
                        // Slider Logo Title
                        array(
                            'type' => 'textfield',
                            'heading' => __('Slider Logo Title', 'md-bakery-antian'),
                            'param_name' => 'slider_logo_title',
                            'value' => '',
                            'description' => __('Enter slider logo title.', 'md-bakery-antian'),
                        ),
                    ),
                ),
                // Image Border Enable
                array(
                    'type' => 'checkbox',
                    'heading' => __('Image Border Enable', 'md-bakery-antian'),
                    'param_name' => 'image_border_enable',
                    'value' => array(__('Yes', 'text-domain') => 'yes'),
                    'description' => __('Enable or disable image border.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'text-domain'),
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
        ));
    }

    /**
     * Function is used to display image banner html.
     */
    public function logo_slider_html($atts) {
        $atts = shortcode_atts(
            array(
                'heading' => '',
                'view_more_link' => '',
                'slides' => array(),
                'image_border_enable' => 'no',
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
        include MD_BAKERY_ANTIAN_PATH . '/inc/addons/templates/logo-slider.php';
        return ob_get_clean();
    }

}