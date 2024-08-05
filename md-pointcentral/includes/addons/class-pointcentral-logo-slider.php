<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Logo_Slider class
 * 
 * @since 1.0.0
 */
class Pointcentral_Logo_Slider {

    // Create Pointcentral Logo Slider Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_logo_slider'));
        add_shortcode('pointcentral_logo_slider', array($this, 'pointcentral_logo_slider_html'));
    }

    /**
     * Function is used to create Pointcentral Logo Slider custom element.
     */
    public function pointcentral_logo_slider() {

        // Pointcentral Logo Slider.
        vc_map(array(
            'name' => __('Pointcentral Logo Slider', 'md-bakery-antian'),
            'base' => 'pointcentral_logo_slider',
            'params' => array(
                // Logo Slider with Link using param_group.
                array(
                    'type' => 'param_group',
                    'heading' => __('Logo Slider', 'md-bakery-antian'),
                    'param_name' => 'logo_slider_with_link',
                    'value' => '',
                    'params' => array(
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Logo Image', 'md-bakery-antian'),
                            'param_name' => 'logo_image',
                            'value' => '',
                            'description' => __('Select image from media library.', 'md-bakery-antian'),
                        ),
                        array(
                            'type' => 'vc_link',
                            'heading' => __('Logo Link', 'md-bakery-antian'),
                            'param_name' => 'logo_link',
                            'value' => '',
                            'description' => __('Add link for logo.', 'md-bakery-antian'),
                        ),
                    ),
                    'description' => __('Add Logo Slider with Link.', 'md-bakery-antian'),
                ),
                // Slider Settings.
                // Slide To Show.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Slide To Show', 'md-bakery-antian'),
                    'param_name' => 'slide_to_show',
                    'value' => array(
                        '1' => '1',
                        '2' => '2',
                        '3' => '3',
                        '4' => '4',
                        '5' => '5',
                        '6' => '6',
                        '7' => '7',
                        '8' => '8',
                        '9' => '9',
                        '10' => '10',
                    ),
                    'std' => '5',
                    'description' => __('Select number of slides to show.', 'md-bakery-antian'),
                    'group' => 'Slider Settings',
                ),
                // Slide To Scroll.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Slide To Scroll', 'md-bakery-antian'),
                    'param_name' => 'slide_to_scroll',
                    'value' => array(
                        '1' => '1',
                        '2' => '2',
                        '3' => '3',
                        '4' => '4',
                        '5' => '5',
                        '6' => '6',
                        '7' => '7',
                        '8' => '8',
                        '9' => '9',
                        '10' => '10',
                    ),
                    'std' => '1',
                    'description' => __('Select number of slides to scroll.', 'md-bakery-antian'),
                    'group' => 'Slider Settings',
                ),
                // Auto Play.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Auto Play', 'md-bakery-antian'),
                    'param_name' => 'auto_play',
                    'value' => array(
                        __('Yes', 'md-bakery-antian') => 'true',
                        __('No', 'md-bakery-antian') => 'false',
                    ),
                    'std' => 'true',
                    'description' => __('Enable or disable auto play.', 'md-bakery-antian'),
                    'group' => 'Slider Settings',
                ),
                // Arrows.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Arrows', 'md-bakery-antian'),
                    'param_name' => 'arrows',
                    'value' => array(
                        __('Yes', 'md-bakery-antian') => 'true',
                        __('No', 'md-bakery-antian') => 'false',
                    ),
                    'std' => 'true',
                    'description' => __('Enable or disable arrows.', 'md-bakery-antian'),
                    'group' => 'Slider Settings',
                ),
                // Dots.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Dots', 'md-bakery-antian'),
                    'param_name' => 'dots',
                    'value' => array(
                        __('Yes', 'md-bakery-antian') => 'true',
                        __('No', 'md-bakery-antian') => 'false',
                    ),
                    'std' => 'true',
                    'description' => __('Enable or disable dots.', 'md-bakery-antian'),
                    'group' => 'Slider Settings',
                ),
                // Pause On Hover.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Pause On Hover', 'md-bakery-antian'),
                    'param_name' => 'pause_on_hover',
                    'value' => array(
                        __('Yes', 'md-bakery-antian') => 'true',
                        __('No', 'md-bakery-antian') => 'false',
                    ),
                    'std' => 'true',
                    'description' => __('Enable or disable pause on hover.', 'md-bakery-antian'),
                    'group' => 'Slider Settings',
                ),
            ),
            'category' => __('Pointcentral', 'md-bakery-antian'),
            'icon' => 'icon-wpb-flickr',
        ));
    }

    /**
     * Function is used to display Pointcentral Logo Slider html.
     */
    public function pointcentral_logo_slider_html($atts) {

        $atts = shortcode_atts(
            array(
                'logo_slider_with_link' => '',
                'slide_to_show' => '5',
                'slide_to_scroll' => '1',
                'auto_play' => 'true',
                'arrows' => 'true',
                'dots' => 'true',
                'pause_on_hover' => 'true',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="pointcentral-logo-slider">
            <div class="container">
                <div class="pointcentral-logo-slider-inner">
                    <div class="pointcentral-logo-slider-wrap" data-slide-to-show="<?php echo esc_attr($atts['slide_to_show']); ?>" data-slide-to-scroll="<?php echo esc_attr($atts['slide_to_scroll']); ?>" data-auto-play="<?php echo esc_attr($atts['auto_play']); ?>" data-arrows="<?php echo esc_attr($atts['arrows']); ?>" data-dots="<?php echo esc_attr($atts['dots']); ?>" data-pause-on-hover="<?php echo esc_attr($atts['pause_on_hover']); ?>">
                        <?php
                        if (!empty($atts['logo_slider_with_link'])) {
                            $logo_slider_with_link = vc_param_group_parse_atts($atts['logo_slider_with_link']);
                            foreach ($logo_slider_with_link as $logo_slider) {
                                $logo_slider_image = ( isset($logo_slider['logo_image']) && !empty($logo_slider['logo_image']) ) ? wp_get_attachment_url($logo_slider['logo_image']) : '';
                                $logo_slider_link = ( isset($logo_slider['logo_link']) && !empty($logo_slider['logo_link']) ) ? vc_build_link($logo_slider['logo_link']) : '';
                                ?>
                                <div class="pointcentral-logo-slider-item">
                                    <?php if (!empty($logo_slider_link['url'])) { ?>
                                        <a href="<?php echo esc_url($logo_slider_link['url']); ?>" target="<?php echo esc_attr($logo_slider_link['target']); ?>">
                                            <img src="<?php echo esc_url($logo_slider_image); ?>" alt="<?php echo esc_attr__('Logo Image', 'md-bakery-antian'); ?>">
                                        </a>
                                    <?php } else { ?>
                                        <img src="<?php echo esc_url($logo_slider_image); ?>" alt="<?php echo esc_attr__('Logo Image', 'md-bakery-antian'); ?>">
                                    <?php } ?>
                                </div>
                                <?php
                            }
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}