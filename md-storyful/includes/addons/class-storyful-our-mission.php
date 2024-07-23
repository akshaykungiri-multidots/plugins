<?php
/**
 * The Storyful Our Mission functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Our_Mission class
 * 
 * @since 1.0.0
 */
class Storyful_Our_Mission {

    // Create Storyful Our Mission Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_our_mission'));
        add_shortcode('storyful_our_mission', array($this, 'storyful_our_mission_html'));
    }

    /**
     * Function is used to create Storyful Our Mission custom element.
     */
    public function storyful_our_mission() {

        // Storyful Our Mission.
        vc_map(array(
            'name' => __('Storyful Our Mission', 'md-bakery-antian'),
            'base' => 'storyful_our_mission',
            'params' => array(
                // Our Mission Title
                array(
                    'type' => 'textfield',
                    'heading' => __('Our Mission Title', 'md-bakery-antian'),
                    'param_name' => 'our_mission_title',
                    'value' => '',
                    'description' => __('Enter our mission title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Our Mission Description
                array(
                    'type' => 'textarea',
                    'heading' => __('Our Mission Description', 'md-bakery-antian'),
                    'param_name' => 'our_mission_description',
                    'value' => '',
                    'description' => __('Enter our mission description.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-layer-shape-text',
        ));
    }

    /**
     * Function is used to display Storyful Our Mission html.
     */
    public function storyful_our_mission_html($atts) {

        $atts = shortcode_atts(
            array(
                'our_mission_title' => '',
                'our_mission_description' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="our-mission">
            <div class="container">
                <div class="our-mission__title wow fadeInLeft">
                    <h2 class="section-title h1">
                        <?php echo wp_kses_post($atts['our_mission_title']); ?>
                    </h2>
                </div>
                <div class="our-mission__description wow fadeInRight">
                    <p>
                        <?php echo wp_kses_post($atts['our_mission_description']); ?>
                    </p>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}