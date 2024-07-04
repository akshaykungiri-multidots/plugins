<?php
/**
 * The Let's Get Started functionality of the plugin.
 *
 * @package    MD_Bakery_Antian
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Bakery_Antian\Inc\Addons;


/**
 * Lets_Get_Started class
 * 
 * @since 1.0.0
 */
class Lets_Get_Started {

    // Create Let's Get Started Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'lets_get_started'));
        add_shortcode('lets_get_started', array($this, 'lets_get_started_html'));
    }

    /**
     * Function is used to create hero banner custom element.
     */
    public function lets_get_started() {

        // Lets Get Started With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Lets Get Started', 'md-bakery-antian'),
            'base' => 'lets_get_started',
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
            'icon' => 'icon-wpb-toggle-small-expand',
        ));
    }

    /**
     * Function is used to display hero banner html.
     */
    public function lets_get_started_html($atts) {

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
        include MD_BAKERY_ANTIAN_PATH . '/inc/addons/templates/lets-get-started.php';
        return ob_get_clean();
    }

}