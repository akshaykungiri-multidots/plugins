<?php
/**
 * The Logo Slider functionality of the plugin.
 *
 * @package    MD_Partner_Program
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Partner_Program\Inc\Addons;


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
            // Repeatable field
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
                // description
                array(
                    'type' => 'textarea',
                    'heading' => __('Description', 'md-bakery-antian'),
                    'param_name' => 'description',
                    'value' => '',
                    'description' => __('Enter description.', 'md-bakery-antian'),
                ),
                // Partner Images 1
                array(
                    'type' => 'attach_image',
                    'heading' => __('Partner Image 1', 'md-bakery-antian'),
                    'param_name' => 'partner_image_1',
                    'value' => '',
                    'description' => __('Upload partner image 1.', 'md-bakery-antian'),
                ),
                // Partner Images 2
                array(
                    'type' => 'attach_image',
                    'heading' => __('Partner Image 2', 'md-bakery-antian'),
                    'param_name' => 'partner_image_2',
                    'value' => '',
                    'description' => __('Upload partner image 2.', 'md-bakery-antian'),
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
                'description' => '',
                'partner_image_1' => '',
                'partner_image_2' => '',
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
        // Template for image banner.
        $slides = vc_param_group_parse_atts($atts['slides']);
        $image_border_enable = $atts['image_border_enable'] == 'yes' ? 'image-border-enable' : '';
        ?>
        <div class="bakery_antian__logo_slider">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bakery_antian__logo_slider__inner">
                            <div class="bakery_antian__logo_slider-left">
                                <div class="bakery_antiab__partner-images">
                                    <img src="<?php echo esc_url(wp_get_attachment_image_url($atts['partner_image_1'], 'full')); ?>" alt="Partner Image 1">
                                    <img src="<?php echo esc_url(wp_get_attachment_image_url($atts['partner_image_2'], 'full')); ?>" alt="Partner Image 2">
                                </div>
                            </div>
                            <div class="bakery_antian__logo_slider-right">
                                <div class="bakery_antian__logo_slider--heading">
                                    <h2><?php echo esc_html($atts['heading']); ?></h2>
                                    <p><?php echo esc_html($atts['description']); ?></p>
                                </div>
                                <div class="bakery_antian__slider md-slick-slider <?php echo esc_attr($image_border_enable); ?>" data-slides-to-show="<?php echo esc_attr($atts['slides_to_show']); ?>" data-slides-to-scroll="<?php echo esc_attr($atts['slides_to_scroll']); ?>" data-autoplay="<?php echo esc_attr($atts['autoplay']); ?>" data-autoplay-speed="<?php echo esc_attr($atts['autoplay_speed']); ?>" data-infinite-scroll="<?php echo esc_attr($atts['infinite_scroll']); ?>" data-dots="<?php echo esc_attr($atts['dots']); ?>" data-arrows="<?php echo esc_attr($atts['arrows']); ?>">
                                    <?php 
                                    foreach ($slides as $slide) : 
                                        $slider_logo = wp_get_attachment_image_url($slide['slider_logo'], 'full');
                                    ?>
                                        <div class="bakery_antian__slider-item">
                                            <div class="bakery_antian__slider-image">
                                                <img src="<?php echo esc_url($slider_logo); ?>" alt="Slider Image">
                                            </div>
                                            <?php if (!empty($slide['slider_logo_title'])) : ?>
                                                <div class="bakery_antiab__slider-title">
                                                    <h6><?php echo esc_html($slide['slider_logo_title']); ?></h6>
                                                </div>
                                            <?php endif; ?>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}