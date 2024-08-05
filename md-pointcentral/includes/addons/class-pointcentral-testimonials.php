<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Testimonials class
 * 
 * @since 1.0.0
 */
class Pointcentral_Testimonials {

    // Create Pointcentral Testimonials Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_testimonials'));
        add_shortcode('pointcentral_testimonials', array($this, 'pointcentral_testimonials_html'));
    }

    /**
     * Function is used to create Pointcentral Testimonials custom element.
     */
    public function pointcentral_testimonials() {

        // Pointcentral Testimonials.
        vc_map(array(
            'name' => __('Pointcentral Testimonials', 'md-bakery-antian'),
            'base' => 'pointcentral_testimonials',
            'params' => array(
                // Testimonials List.
                array(
                    'type' => 'param_group',
                    'heading' => __('Testimonials List', 'md-bakery-antian'),
                    'param_name' => 'testimonials_list',
                    'value' => '',
                    'params' => array(
                        // Testimonials Title.
                        array(
                            'type' => 'textfield',
                            'heading' => __('Testimonials Title', 'md-bakery-antian'),
                            'param_name' => 'testimonials_title',
                            'value' => '',
                            'description' => __('Enter testimonials title.', 'md-bakery-antian'),
                        ),
                        // Testimonials Content.
                        array(
                            'type' => 'textarea',
                            'heading' => __('Testimonials Content', 'md-bakery-antian'),
                            'param_name' => 'testimonials_content',
                            'value' => '',
                            'description' => __('Enter testimonials content.', 'md-bakery-antian'),
                        ),
                    ),
                    'description' => __('Enter testimonials list.', 'md-bakery-antian'),
                ),
                // Slider Settings.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Slider Auto Play', 'md-bakery-antian'),
                    'param_name' => 'slider_auto_play',
                    'value' => array(
                        'Yes' => 'yes',
                        'No' => 'no',
                    ),
                    'description' => __('Select slider auto play.', 'md-bakery-antian'),
                    'group' => 'Slider Settings',
                ),
                array(
                    'type' => 'dropdown',
                    'heading' => __('Slider Infinite Loop', 'md-bakery-antian'),
                    'param_name' => 'slider_infinite_loop',
                    'value' => array(
                        'Yes' => 'yes',
                        'No' => 'no',
                    ),
                    'description' => __('Select slider infinite loop.', 'md-bakery-antian'),
                    'group' => 'Slider Settings',
                ),
                array(
                    'type' => 'dropdown',
                    'heading' => __('Slider Pause On Hover', 'md-bakery-antian'),
                    'param_name' => 'slider_pause_on_hover',
                    'value' => array(
                        'Yes' => 'yes',
                        'No' => 'no',
                    ),
                    'description' => __('Select slider pause on hover.', 'md-bakery-antian'),
                    'group' => 'Slider Settings',
                ),
                array(
                    'type' => 'dropdown',
                    'heading' => __('Slider Dots', 'md-bakery-antian'),
                    'param_name' => 'slider_dots',
                    'value' => array(
                        'Yes' => 'yes',
                        'No' => 'no',
                    ),
                    'description' => __('Select slider dots.', 'md-bakery-antian'),
                    'group' => 'Slider Settings',
                ),
                array(
                    'type' => 'dropdown',
                    'heading' => __('Slider Arrows', 'md-bakery-antian'),
                    'param_name' => 'slider_arrows',
                    'value' => array(
                        'Yes' => 'yes',
                        'No' => 'no',
                    ),
                    'description' => __('Select slider arrows.', 'md-bakery-antian'),
                    'group' => 'Slider Settings',
                ),
                // Backgound Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Backgound Color', 'md-bakery-antian'),
                    'param_name' => 'backgound_color',
                    'value' => '',
                    'description' => __('Select backgound color.', 'md-bakery-antian'),
                    'group' => 'Design Option',
                ),
            ),
            'category' => __('Pointcentral', 'md-bakery-antian'),
            'icon' => 'icon-wpb-ui-pageable',
        ));
    }

    /**
     * Function is used to display Pointcentral Testimonials html.
     */
    public function pointcentral_testimonials_html($atts) {

        $atts = shortcode_atts(
            array(
                'testimonials_list' => '',
                'slider_auto_play' => 'yes',
                'slider_infinite_loop' => 'yes',
                'slider_speed' => '5000',
                'slider_pause_on_hover' => 'yes',
                'slider_dots' => 'yes',
                'slider_arrows' => 'yes',
                'backgound_color' => '#f5f5f5',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="pointcentral-testimonials" style="background-color: <?php echo esc_attr($atts['backgound_color']); ?>">
            <div class="container">
                <div class="pointcentral-testimonials-slider" data-auto-play="<?php echo esc_attr($atts['slider_auto_play']); ?>" data-infinite-loop="<?php echo esc_attr($atts['slider_infinite_loop']); ?>" data-pause-on-hover="<?php echo esc_attr($atts['slider_pause_on_hover']); ?>" data-dots="<?php echo esc_attr($atts['slider_dots']); ?>" data-arrows="<?php echo esc_attr($atts['slider_arrows']); ?>">
                    <?php
                    if (!empty($atts['testimonials_list'])) {
                        $testimonials_list = vc_param_group_parse_atts($atts['testimonials_list']);
                        foreach ($testimonials_list as $testimonials) {
                            $testimonials_content = (isset($testimonials['testimonials_content']) && !empty($testimonials['testimonials_content'])) ? $testimonials['testimonials_content'] : '';
                            $testimonials_title = (isset($testimonials['testimonials_title']) && !empty($testimonials['testimonials_title'])) ? $testimonials['testimonials_title'] : '';
                            ?>
                            <div class="pointcentral-testimonials-item">
                                <div class="pointcentral-testimonials-content">
                                    <p class="pointcentral-testimonials-description">
                                        <span class="open-quote">“</span>
                                        <?php echo esc_html($testimonials_content); ?>
                                        <span class="close-quote">”</span>
                                    </p>
                                    <div class="pointcentral-testimonials-title"><?php echo esc_html($testimonials_title); ?></div>
                                </div>
                            </div>
                            <?php
                        }
                    }
                    ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}