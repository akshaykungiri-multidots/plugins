<?php
/**
 * The Hero Banner functionality of the plugin.
 *
 * @package    MD_Bakery_Antian
 * @author     Multidots <info@multidots.com>
 */

namespace MD_ANITIAN\Includes\Addons;


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
        $slides = [];
        if (isset($atts['slides']) && !empty($atts['slides'])){
            $slides = vc_param_group_parse_atts($atts['slides']);
        }
        ?>
        <div class="bakery_antian__slider-image-box">
            <div class="bakery_antian__slider-image-box__inner">
                <div class="text-video-slider__video-and-text">
                    <div class="container">
                        <div class="bakery_antian__heading">
                            <h6><?php echo esc_html($atts['sub_heading']); ?></h6>
                            <h2><?php echo esc_html($atts['heading']); ?></h2>
                        </div>
                    </div>
                </div>
                <div class="text-video-slider__slider">
                    <div class="container">
                        <div class="bakery_antian__slider md-slick-slider" data-slides-to-show="<?php echo esc_attr($atts['slides_to_show']); ?>" data-slides-to-scroll="<?php echo esc_attr($atts['slides_to_scroll']); ?>" data-autoplay="<?php echo esc_attr($atts['autoplay']); ?>" data-autoplay-speed="<?php echo esc_attr($atts['autoplay_speed']); ?>" data-infinite-scroll="<?php echo esc_attr($atts['infinite_scroll']); ?>" data-dots="<?php echo esc_attr($atts['dots']); ?>" data-arrows="<?php echo esc_attr($atts['arrows']); ?>">
                            <?php 
                            foreach ($slides as $slide) : 
                                if (!empty($slide)) {
                                $slider_button = vc_build_link($slide['slider_button']);
                                $slider_image = wp_get_attachment_image_url($slide['slider_image'], 'full');
                            ?>
                                <div class="bakery_antian__slider-item">
                                    <div class="bakery_antian__slider-image">
                                        <img src="<?php echo esc_url($slider_image); ?>" alt="Slider Image">
                                    </div>
                                    <div class="bakery_antiab__slider-content">
                                        <p><?php echo esc_html($slide['slider_content']); ?></p>
                                        <div class="bakery_antian__slider-button btn-anitian">
                                            <a href="<?php echo esc_url($slider_button['url']); ?>" class="btn"><?php echo esc_html($slider_button['title']); ?></a>
                                        </div>
                                    </div>
                                </div>
                            <?php 
                                }
                            endforeach; 
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}