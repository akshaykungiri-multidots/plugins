<?php
/**
 * The Storyful Divider functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Divider class
 * 
 * @since 1.0.0
 */
class Storyful_Divider {

    // Create Storyful Divider Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_divider'));
        add_shortcode('storyful_divider', array($this, 'storyful_divider_html'));
    }

    /**
     * Function is used to create Storyful Divider custom element.
     */
    public function storyful_divider() {

        // Storyful Divider.
        vc_map(array(
            'name' => __('Storyful Divider', 'md-bakery-antian'),
            'base' => 'storyful_divider',
            'params' => array(
                // Section Title
                array(
                    'type' => 'textfield',
                    'heading' => __('Section Title', 'md-bakery-antian'),
                    'param_name' => 'section_title',
                    'value' => '',
                    'description' => __('Enter section title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Linear Gradient Color1
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Linear Gradient Color1', 'md-bakery-antian'),
                    'param_name' => 'linear_gradient_color1',
                    'value' => '',
                    'description' => __('Select linear gradient color1.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Linear Gradient Color2
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Linear Gradient Color2', 'md-bakery-antian'),
                    'param_name' => 'linear_gradient_color2',
                    'value' => '',
                    'description' => __('Select linear gradient color2.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-ui-separator',
        ));
    }

    /**
     * Function is used to display Storyful Divider html.
     */
    public function storyful_divider_html($atts) {

        $atts = shortcode_atts(
            array(
                'section_title' => '',
                'linear_gradient_color1' => '',
                'linear_gradient_color2' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="with-text divider-section" style="background:linear-gradient(95.22deg, <?php echo esc_attr($atts['linear_gradient_color1']); ?> 0%, <?php echo esc_attr($atts['linear_gradient_color2']); ?> 98.84%);">
            <div class="container">
                <h3 class="section-title wow fadeInLeft">
                    <?php echo wp_kses_post($atts['section_title']); ?>
                </h3>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}