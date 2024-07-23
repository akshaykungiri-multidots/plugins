<?php
/**
 * The Storyful CTA Section functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_CTA_Section class
 * 
 * @since 1.0.0
 */
class Storyful_CTA_Section {

    // Create Storyful CTA Section Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_cta_section'));
        add_shortcode('storyful_cta_section', array($this, 'storyful_cta_section_html'));
    }

    /**
     * Function is used to create Storyful CTA Section custom element.
     */
    public function storyful_cta_section() {

        // Storyful CTA Section.
        vc_map(array(
            'name' => __('Storyful CTA Section', 'md-bakery-antian'),
            'base' => 'storyful_cta_section',
            'params' => array(
                // Section Left Title
                array(
                    'type' => 'textfield',
                    'heading' => __('Section Left Title', 'md-bakery-antian'),
                    'param_name' => 'section_left_title',
                    'value' => '',
                    'description' => __('Enter section left title.', 'md-bakery-antian'),
                    'admin_label' => true,
                    'group' => __('Section Left', 'md-bakery-antian'),
                ),
                // Section Left Description
                array(
                    'type' => 'textarea',
                    'heading' => __('Section Left Description', 'md-bakery-antian'),
                    'param_name' => 'section_left_description',
                    'value' => '',
                    'description' => __('Enter section left description.', 'md-bakery-antian'),
                    'admin_label' => true,
                    'group' => __('Section Left', 'md-bakery-antian'),
                ),
                // Section Left Button Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('Section Left Button Link', 'md-bakery-antian'),
                    'param_name' => 'section_left_button_link',
                    'value' => '',
                    'description' => __('Add section left button link.', 'md-bakery-antian'),
                    'admin_label' => true,
                    'group' => __('Section Left', 'md-bakery-antian'),
                ),
                // Section Left Image
                array(
                    'type' => 'attach_image',
                    'heading' => __('Section Left Image', 'md-bakery-antian'),
                    'param_name' => 'section_left_image',
                    'value' => '',
                    'description' => __('Upload section left image.', 'md-bakery-antian'),
                    'admin_label' => true,
                    'group' => __('Section Left', 'md-bakery-antian'),
                ),
                // Section Right Title
                array(
                    'type' => 'textfield',
                    'heading' => __('Section Right Title', 'md-bakery-antian'),
                    'param_name' => 'section_right_title',
                    'value' => '',
                    'description' => __('Enter section right title.', 'md-bakery-antian'),
                    'admin_label' => true,
                    'group' => __('Section Right', 'md-bakery-antian'),
                ),
                // Section Right Description
                array(
                    'type' => 'textarea',
                    'heading' => __('Section Right Description', 'md-bakery-antian'),
                    'param_name' => 'section_right_description',
                    'value' => '',
                    'description' => __('Enter section right description.', 'md-bakery-antian'),
                    'admin_label' => true,
                    'group' => __('Section Right', 'md-bakery-antian'),
                ),
                // Section Right Button Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('Section Right Button Link', 'md-bakery-antian'),
                    'param_name' => 'section_right_button_link',
                    'value' => '',
                    'description' => __('Add section right button link.', 'md-bakery-antian'),
                    'admin_label' => true,
                    'group' => __('Section Right', 'md-bakery-antian'),
                ),
                // Section Right Image
                array(
                    'type' => 'attach_image',
                    'heading' => __('Section Right Image', 'md-bakery-antian'),
                    'param_name' => 'section_right_image',
                    'value' => '',
                    'description' => __('Upload section right image.', 'md-bakery-antian'),
                    'admin_label' => true,
                    'group' => __('Section Right', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-layout_sidebar',
        ));
    }

    /**
     * Function is used to display Storyful CTA Section html.
     */
    public function storyful_cta_section_html($atts) {

        $atts = shortcode_atts(
            array(
                'section_left_title' => '',
                'section_left_description' => '',
                'section_left_button_link' => '',
                'section_left_image' => '',
                'section_right_title' => '',
                'section_right_description' => '',
                'section_right_button_link' => '',
                'section_right_image' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="cta-section">
            <div class="container-fluid">
                <div class="cta-section__right">
                    <div class="intelligence-section">
                        <div class="intelligence-section__details wow fadeInLeft">
                            <h2 class="section-title h1 with-darkbg">
                                <?php echo wp_kses_post($atts['section_left_title']); ?>
                            </h2>
                            <p class="cta-section-desc">
                                <?php echo wp_kses_post($atts['section_left_description']); ?>
                            </p>
                            <?php 
                            if (!empty($atts['section_left_button_link'])) : 
                                $section_left_button_link = vc_build_link($atts['section_left_button_link']);
                            ?>
                            <div class="sbtn sbtn-arrow-primary-v2">
                                <span class="btn-text">
                                    <a href="<?php echo esc_url($section_left_button_link['url']); ?>">
                                        <?php echo esc_html($section_left_button_link['title']); ?>
                                    </a>
                                </span>
                            </div>
                            <?php endif; ?>
                        </div>
                        <?php if (!empty($atts['section_left_image'])) : ?>
                        <div class="intelligence-section__media wow bounceIn">
                            <div class="media-image-wrapper">
                                <figure id="img-two">
                                    <img src="<?php echo esc_url(wp_get_attachment_url($atts['section_left_image'])); ?>" alt="media-image">
                                </figure>
                            </div>
                        </div>
                        <?php endif; ?>
                    </div>
                </div>
                <div class="cta-section__left">
                    <div class="cta-news-section">
                        <div class="cta-news-section__details wow fadeInLeft">
                            <h2 class="section-title h1">
                                <?php echo wp_kses_post($atts['section_right_title']); ?>
                            </h2>
                            <p class="cta-section-desc">
                                <?php echo wp_kses_post($atts['section_right_description']); ?>
                            </p>
                            <?php 
                            if (!empty($atts['section_right_button_link'])) : 
                                $section_right_button_link = vc_build_link($atts['section_right_button_link']);
                            ?>
                            <div class="sbtn sbtn-arrow-primary-v2">
                                <span class="btn-text">
                                    <a href="<?php echo esc_url($section_right_button_link['url']); ?>">
                                        <?php echo esc_html($section_right_button_link['title']); ?>
                                    </a>
                                </span>
                            </div>
                            <?php endif; ?>
                        </div>
                        <?php if (!empty($atts['section_right_image'])) : ?>
                        <div class="cta-news-section__media wow bounceIn">
                            <div class="media-image-wrapper">
                                <figure id="img-one">
                                    <img src="<?php echo esc_url(wp_get_attachment_url($atts['section_right_image'])); ?>" alt="media-image">
                                </figure>
                            </div>
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