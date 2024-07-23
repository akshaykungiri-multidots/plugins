<?php
/**
 * The Storyful Video Slider functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Video_Slider class
 * 
 * @since 1.0.0
 */
class Storyful_Video_Slider {

    // Create Storyful Video Slider Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_video_slider'));
        add_shortcode('storyful_video_slider', array($this, 'storyful_video_slider_html'));
    }

    /**
     * Function is used to create Storyful Video Slider custom element.
     */
    public function storyful_video_slider() {

        // Storyful Video Slider.
        vc_map(array(
            'name' => __('Storyful Video Slider', 'md-bakery-antian'),
            'base' => 'storyful_video_slider',
            'params' => array(
                // Add multiple youtube video urls using repeater field.
                array(
                    'type' => 'param_group',
                    'value' => '',
                    'param_name' => 'video_urls',
                    'heading' => __('Add Video URL', 'md-bakery-antian'),
                    'description' => __('Add multiple video urls.', 'md-bakery-antian'),
                    'params' => array(
                        array(
                            'type' => 'textfield',
                            'value' => '',
                            'heading' => __('Video URL', 'md-bakery-antian'),
                            'param_name' => 'video_url',
                        ),
                    ),
                ),
                // Slick slider settings.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Slider To Show', 'md-bakery-antian'),
                    'param_name' => 'slider_to_show',
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
                    'std' => '3',
                    'group' => 'Slider Settings',
                ),
                array(
                    'type' => 'dropdown',
                    'heading' => __('Slider To Scroll', 'md-bakery-antian'),
                    'param_name' => 'slider_to_scroll',
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
                    'group' => 'Slider Settings',
                ),
                array(
                    'type' => 'dropdown',
                    'heading' => __('Slider Autoplay', 'md-bakery-antian'),
                    'param_name' => 'slider_autoplay',
                    'value' => array(
                        'true' => 'true',
                        'false' => 'false',
                    ),
                    'std' => 'true',
                    'group' => 'Slider Settings',
                ),
                array(
                    'type' => 'dropdown',
                    'heading' => __('Slider Infinite', 'md-bakery-antian'),
                    'param_name' => 'slider_infinite',
                    'value' => array(
                        'true' => 'true',
                        'false' => 'false',
                    ),
                    'std' => 'true',
                    'group' => 'Slider Settings',
                ),
                array(
                    'type' => 'dropdown',
                    'heading' => __('Slider Dots', 'md-bakery-antian'),
                    'param_name' => 'slider_dots',
                    'value' => array(
                        'true' => 'true',
                        'false' => 'false',
                    ),
                    'std' => 'true',
                    'group' => 'Slider Settings',
                ),
                array(
                    'type' => 'dropdown',
                    'heading' => __('Slider Arrows', 'md-bakery-antian'),
                    'param_name' => 'slider_arrows',
                    'value' => array(
                        'true' => 'true',
                        'false' => 'false',
                    ),
                    'std' => 'true',
                    'group' => 'Slider Settings',
                ),
                array(
                    'type' => 'dropdown',
                    'heading' => __('Slider Pause On Hover', 'md-bakery-antian'),
                    'param_name' => 'slider_pause_on_hover',
                    'value' => array(
                        'true' => 'true',
                        'false' => 'false',
                    ),
                    'std' => 'true',
                    'group' => 'Slider Settings',
                ),
                array(
                    'type' => 'dropdown',
                    'heading' => __('Slider Center Mode', 'md-bakery-antian'),
                    'param_name' => 'slider_center_mode',
                    'value' => array(
                        'true' => 'true',
                        'false' => 'false',
                    ),
                    'std' => 'true',
                    'group' => 'Slider Settings',
                ),

            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-film-youtube',
        ));
    }

    /**
     * Function is used to display Storyful Video Slider html.
     */
    public function storyful_video_slider_html($atts) {

        $atts = shortcode_atts(
            array(
                'video_urls' => '',
                'slider_to_show' => '3',
                'slider_to_scroll' => '1',
                'slider_autoplay' => 'true',
                'slider_infinite' => 'true',
                'slider_dots' => 'true',
                'slider_arrows' => 'true',
                'slider_pause_on_hover' => 'true',
                'slider_center_mode' => 'true',
            ),
            $atts
        );
        ob_start();
        $video_urls = [];
        if (!empty($atts['video_urls'])) {
            $video_urls = vc_param_group_parse_atts($atts['video_urls']);
        }
        ?>
        <div class="storyful-video-slider video-section">
            <div class="video-container">
                <div class="video-wrapper" data-slider-to-show="<?php echo esc_attr($atts['slider_to_show']); ?>" data-slider-to-scroll="<?php echo esc_attr($atts['slider_to_scroll']); ?>" data-slider-autoplay="<?php echo esc_attr($atts['slider_autoplay']); ?>" data-slider-infinite="<?php echo esc_attr($atts['slider_infinite']); ?>" data-slider-dots="<?php echo esc_attr($atts['slider_dots']); ?>" data-slider-arrows="<?php echo esc_attr($atts['slider_arrows']); ?>" data-slider-pause-on-hover="<?php echo esc_attr($atts['slider_pause_on_hover']); ?>" data-slider-center-mode="<?php echo esc_attr($atts['slider_center_mode']); ?>">
                    <?php
                    if (!empty($video_urls)) {
                        foreach ($video_urls as $video_url) {
                            if (isset($video_url['video_url']) && !empty($video_url['video_url'])) {
                            ?>
                            <div class="wrapper__item">
                                <div class="wrapper__box-inner">
                                    <div class="video-details-wrapper">
                                        <iframe width="560" height="315" src="<?php echo esc_url($video_url['video_url']); ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <div class="video-overlay"></div>
                                    </div>
                                </div>
                            </div>
                            <?php
                            }
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