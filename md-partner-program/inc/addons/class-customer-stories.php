<?php
/**
 * The Customer Stories functionality of the plugin.
 *
 * @package    MD_Partner_Program
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Partner_Program\Inc\Addons;


/**
 * Customer_Stories class
 * 
 * @since 1.0.0
 */
class Customer_Stories {

    // Create Customer Stories Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'customer_stories'));
        add_shortcode('customer_stories', array($this, 'customer_stories_html'));
    }

    /**
     * Function is used to create customer_stories custom element.
     */
    public function customer_stories() {

        // Customer Stories With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Customer Stories', 'md-bakery-antian'),
            'base' => 'customer_stories',
            'category' => __('Antian', 'md-bakery-antian'),
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
                // Description
                array(
                    'type' => 'textarea',
                    'heading' => __('Description', 'md-bakery-antian'),
                    'param_name' => 'description',
                    'value' => '',
                    'description' => __('Enter description.', 'md-bakery-antian'),
                ),
                // View More Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('View More Link', 'md-bakery-antian'),
                    'param_name' => 'view_more_link',
                    'value' => '',
                    'description' => __('Enter view more link.', 'md-bakery-antian'),
                ),
                // Customer Stories Slides.
                array(
                    'type' => 'param_group',
                    'heading' => __('Customer Stories Slides', 'md-bakery-antian'),
                    'param_name' => 'customer_stories_slides',
                    'value' => '',
                    'params' => array(
                        // Customer Reviews.
                        array(
                            'type' => 'textarea',
                            'heading' => __('Customer Reviews', 'md-bakery-antian'),
                            'param_name' => 'customer_reviews',
                            'value' => '',
                            'description' => __('Enter customer reviews.', 'md-bakery-antian'),
                        ),
                        // Author Image
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Author Image', 'md-bakery-antian'),
                            'param_name' => 'author_image',
                            'value' => '',
                            'description' => __('Upload author image.', 'md-bakery-antian'),
                        ),
                        // Author Name
                        array(
                            'type' => 'textfield',
                            'heading' => __('Author Name', 'md-bakery-antian'),
                            'param_name' => 'author_name',
                            'value' => '',
                            'description' => __('Enter author name.', 'md-bakery-antian'),
                        ),
                        // Author Designation
                        array(
                            'type' => 'textfield',
                            'heading' => __('Author Designation', 'md-bakery-antian'),
                            'param_name' => 'author_designation',
                            'value' => '',
                            'description' => __('Enter author designation.', 'md-bakery-antian'),
                        ),
                    ),
                ),
                // Background Image
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'background_image',
                    'value' => '',
                    'description' => __('Upload background image.', 'md-bakery-antian'),
                ),
                // Background Color
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Background Color', 'md-bakery-antian'),
                    'param_name' => 'background_color',
                    'value' => '',
                    'description' => __('Select background color.', 'md-bakery-antian'),
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
            'icon' => 'icon-wpb-images-carousel',
        ));
    }

    /**
     * Function is used to display image banner html.
     */
    public function customer_stories_html($atts) {
        $atts = shortcode_atts(
            array(
                'heading' => '',
                'description' => '',
                'view_more_link' => '',
                'customer_stories_slides' => array(),
                'background_image' => '',
                'background_color' => '',
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
        $customer_stories_slides = [];
        if (isset($atts['customer_stories_slides']) && !empty($atts['customer_stories_slides'])){
            $customer_stories_slides = vc_param_group_parse_atts($atts['customer_stories_slides']);
        }
        $background_image = wp_get_attachment_image_url($atts['background_image'], 'full');
        $background_color = $atts['background_color'];
        $view_more_link = vc_build_link($atts['view_more_link']);
        ?>
        <div class="bakery_antian__customer_stories" style="background-image: url(<?php echo esc_url($background_image); ?>); background-color: <?php echo esc_attr($background_color); ?>">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="bakery_antiann__customer_stories__inner">
                            <div class="bakery_antian__heading">
                                <h2><?php echo esc_html($atts['heading']); ?></h2>
                                <p><?php echo esc_html($atts['description']); ?></p>
                            </div>
                            <?php if (!empty($customer_stories_slides)) : ?>
                                <div class="bakery_antian__customer_stories_slider md-slick-slider" data-slides-to-show="<?php echo esc_attr($atts['slides_to_show']); ?>" data-slides-to-scroll="<?php echo esc_attr($atts['slides_to_scroll']); ?>" data-autoplay="<?php echo esc_attr($atts['autoplay']); ?>" data-autoplay-speed="<?php echo esc_attr($atts['autoplay_speed']); ?>" data-infinite-scroll="<?php echo esc_attr($atts['infinite_scroll']); ?>" data-dots="<?php echo esc_attr($atts['dots']); ?>" data-arrows="<?php echo esc_attr($atts['arrows']); ?>">
                                    <?php 
                                    foreach ($customer_stories_slides as $slide) : 
                                        if (empty($slide)) {
                                            continue;
                                        }
                                        $author_image = wp_get_attachment_image_url($slide['author_image'], 'full');
                                    ?>
                                        <div class="bakery_antian__slider-item">
                                            <div class="bakery_antian__customer_stories_review">
                                                <div class="bakery_antian__customer_stories_review__content">
                                                    <p><?php echo esc_html($slide['customer_reviews']); ?></p>
                                                </div>
                                                <div class="bakery_antiann__customer_stories_review__author">
                                                    <div class="bakery_antiann__customer_stories_review__author__image">
                                                        <img src="<?php echo esc_url($author_image); ?>" alt="<?php echo esc_attr($slide['author_name']); ?>">
                                                    </div>
                                                    <div class="bakery_antiann__customer_stories_review__author__name">
                                                        <h4><?php echo esc_html($slide['author_name']); ?></h4>
                                                        <p><?php echo esc_html($slide['author_designation']); ?></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 bakery_antiann__customer_stories__bottom">
                        <div class="bakery_antiann__customer_stories__view_more">
                            <?php if (!empty($view_more_link['url'])) : ?>
                                <a href="<?php echo esc_url($view_more_link['url']); ?>" class="bakery_antian__button"><?php echo esc_html($view_more_link['title']); ?></a>
                            <?php endif; ?>
                        </div>
                        <?php if (!empty($customer_stories_slides)) : ?>
                            <div class="slick-arrows">
                                <button type="button" class="slick-prev"></button>
                                <button type="button" class="slick-next"></button>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}