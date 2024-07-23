<?php
/**
 * The Storyful CTA Banner functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_CTA_Banner class
 * 
 * @since 1.0.0
 */
class Storyful_CTA_Banner {

    // Create Storyful CTA Banner Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_cta_banner'));
        add_shortcode('storyful_cta_banner', array($this, 'storyful_cta_banner_html'));
    }

    /**
     * Function is used to create Storyful CTA Banner custom element.
     */
    public function storyful_cta_banner() {

        // Storyful CTA Banner.
        vc_map(array(
            'name' => __('Storyful CTA Banner', 'md-bakery-antian'),
            'base' => 'storyful_cta_banner',
            'params' => array(
                // CTA Text
                array(
                    'type' => 'textarea',
                    'heading' => __('CTA Text', 'md-bakery-antian'),
                    'param_name' => 'cta_text',
                    'value' => '',
                    'description' => __('Enter CTA text.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // CTA Description
                array(
                    'type' => 'textarea',
                    'heading' => __('CTA Description', 'md-bakery-antian'),
                    'param_name' => 'cta_description',
                    'value' => '',
                    'description' => __('Enter CTA description.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // CTA Button Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('CTA Button Link', 'md-bakery-antian'),
                    'param_name' => 'cta_button_link',
                    'value' => '',
                    'description' => __('Add CTA button link.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Background Image
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'media_background_image',
                    'value' => '',
                    'description' => __('Add background image.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // Linear Color 1
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Linear Color 1', 'md-bakery-antian'),
                    'param_name' => 'linear_color_1',
                    'value' => '',
                    'description' => __('Add linear color 1.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // Linear Color 2
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Linear Color 2', 'md-bakery-antian'),
                    'param_name' => 'linear_color_2',
                    'value' => '',
                    'description' => __('Add linear color 2.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // CTA Text Color
                array(
                    'type' => 'colorpicker',
                    'heading' => __('CTA Text Color', 'md-bakery-antian'),
                    'param_name' => 'cta_text_color',
                    'value' => '',
                    'description' => __('Add CTA text color.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // CTA Description Color
                array(
                    'type' => 'colorpicker',
                    'heading' => __('CTA Description Color', 'md-bakery-antian'),
                    'param_name' => 'cta_description_color',
                    'value' => '',
                    'description' => __('Add CTA description color.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-ui-button',
        ));
    }

    /**
     * Function is used to display Storyful CTA Banner html.
     */
    public function storyful_cta_banner_html($atts) {

        $atts = shortcode_atts(
            array(
                'cta_text' => '',
                'cta_description' => '',
                'cta_button_link' => '',
                'media_background_image' => '',
                'linear_color_1' => '',
                'linear_color_2' => '',
                'cta_text_color' => '',
            ),
            $atts
        );
        $media_background_image = (isset($atts['media_background_image']) && !empty($atts['media_background_image'])) ? wp_get_attachment_url($atts['media_background_image']) : '';
        $cta_button_link = vc_build_link($atts['cta_button_link']);
        ob_start();
        ?>
        <div class="md_storyful_storyful_cta_banner" style="background-image: url(<?php echo esc_url($media_background_image); ?>);">
            <div class="md_storyful_storyful_cta_banner__overlay" style="background-image: linear-gradient(to right, <?php echo esc_attr($atts['linear_color_1']); ?>, <?php echo esc_attr($atts['linear_color_2']); ?>);"></div>
            <div class="container">
                <div class="md_storyful_storyful_cta_banner__inner">
                    <div class="md_storyful_storyful_cta_banner__heading">
                        <p style="color: <?php echo esc_attr($atts['cta_text_color']); ?>">
                            <?php echo wp_kses_post($atts['cta_text']); ?>
                        </p>
                    </div>
                    <div class="md_storyful_storyful_cta_banner__description" style="color: <?php echo esc_attr($atts['cta_text_color']); ?>">
                        <?php echo wp_kses_post($atts['cta_description']); ?>
                    </div>
                    <?php if (isset($cta_button_link['url']) && !empty($cta_button_link['url'])) : ?>
                    <div class="md_storyful_storyful_cta_banner__button">
                        <a href="<?php echo esc_url($cta_button_link['url']); ?>" class="btn btn-primary">
                            <?php echo esc_html($cta_button_link['title']); ?>
                        </a>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}