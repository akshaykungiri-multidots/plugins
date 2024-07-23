<?php
/**
 * The Storyful Hero Banner2 functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Hero_Banner2 class
 * 
 * @since 1.0.0
 */
class Storyful_Hero_Banner2 {

    // Create Storyful Hero Banner2 Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_hero_banner2'));
        add_shortcode('storyful_hero_banner2', array($this, 'storyful_hero_banner2_html'));
    }

    /**
     * Function is used to create Storyful Hero Banner2 custom element.
     */
    public function storyful_hero_banner2() {

        // Storyful Hero Banner2.
        vc_map(array(
            'name' => __('Storyful Hero Banner2', 'md-bakery-antian'),
            'base' => 'storyful_hero_banner2',
            'params' => array(
                // Title
                array(
                    'type' => 'textfield',
                    'heading' => __('Animated Pre Title', 'md-bakery-antian'),
                    'param_name' => 'animated_pre_title',
                    'value' => '',
                    'description' => __('Enter animated pre title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                array(
                    'type' => 'textfield',
                    'heading' => __('Title', 'md-bakery-antian'),
                    'param_name' => 'title',
                    'value' => '',
                    'description' => __('Enter title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Banner Button Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('Banner Button Link', 'md-bakery-antian'),
                    'param_name' => 'banner_button_link',
                    'value' => '',
                    'description' => __('Add banner button link.', 'md-bakery-antian'),
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
                // Heading Title Color
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Heading Title Color', 'md-bakery-antian'),
                    'param_name' => 'heading_title_color',
                    'value' => '',
                    'description' => __('Add heading title color.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-layout_sidebar',
        ));
    }

    /**
     * Function is used to display Storyful Hero Banner2 html.
     */
    public function storyful_hero_banner2_html($atts) {

        $atts = shortcode_atts(
            array(
                'animated_pre_title' => '',
                'title' => '',
                'banner_button_link' => '',
                'media_background_image' => '',
                'linear_color_1' => '',
                'linear_color_2' => '',
                'heading_title_color' => '',
            ),
            $atts
        );
        $media_background_image = (isset($atts['media_background_image']) && !empty($atts['media_background_image'])) ? wp_get_attachment_url($atts['media_background_image']) : '';
        ob_start();
        ?>
        <div class="md_storyful_storyful_hero_banner" style="background-image: url(<?php echo esc_url($media_background_image); ?>);">
            <div class="md_storyful_storyful_hero_banner__overlay" style="background-image: linear-gradient(to right, <?php echo esc_attr($atts['linear_color_1']); ?>, <?php echo esc_attr($atts['linear_color_2']); ?>);"></div>
            <div class="container">
                <div class="md_storyful_storyful_hero_banner__inner">
                    <div class="md_storyful_storyful_hero_banner__heading">
                        <h1 style="color: <?php echo esc_attr($atts['heading_title_color']); ?>">
                            <strong><?php echo wp_kses_post($atts['animated_pre_title']); ?></strong>
                            <?php echo wp_kses_post($atts['title']); ?>
                        </h1>
                    </div>
                    <?php
                    if (!empty($atts['banner_button_link'])) {
                        $banner_button_link = vc_build_link($atts['banner_button_link']);
                        ?>
                        <div class="md_storyful_storyful_hero_banner__content">
                            <div class="sbtn sbtn-arrow-primary-v2 wow fadeInLeft">
                                <a href="<?php echo esc_url($banner_button_link['url']); ?>" target="<?php echo esc_attr($banner_button_link['target']); ?>" class="md_storyful_storyful_hero_banner__content__button__link"><?php echo esc_html($banner_button_link['title']); ?></a>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}