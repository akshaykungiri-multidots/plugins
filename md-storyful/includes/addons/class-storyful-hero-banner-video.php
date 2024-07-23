<?php
/**
 * The Storyful Hero Banner Video functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Hero_Banner_Video class
 * 
 * @since 1.0.0
 */
class Storyful_Hero_Banner_Video {

    // Create Storyful Hero Banner Video Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_hero_banner_video'));
        add_shortcode('storyful_hero_banner_video', array($this, 'storyful_hero_banner_video_html'));
    }

    /**
     * Function is used to create Storyful Hero Banner Video custom element.
     */
    public function storyful_hero_banner_video() {

        // Storyful Hero Banner Video.
        vc_map(array(
            'name' => __('Storyful Hero Banner Video', 'md-bakery-antian'),
            'base' => 'storyful_hero_banner_video',
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
                // Banner Background Video
                array(
                    'type' => 'textfield',
                    'heading' => __('Banner Background Video', 'md-bakery-antian'),
                    'param_name' => 'media_background_video',
                    'value' => '',
                    'description' => __('Add banner background video.', 'md-bakery-antian'),
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
     * Function is used to display Storyful Hero Banner Video html.
     */
    public function storyful_hero_banner_video_html($atts) {

        $atts = shortcode_atts(
            array(
                'animated_pre_title' => '',
                'title' => '',
                'media_background_video' => '',
                'banner_button_link' => '',
                'linear_color_1' => '',
                'linear_color_2' => '',
                'heading_title_color' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="md_storyful_storyful_hero_banner__video">
            <div class="hero-banner full-width-height">
                <div class="hero-banner__video">
                    <video autoplay muted loop>
                        <source src="<?php echo esc_url($atts['media_background_video']); ?>" type="video/mp4">
                    </video>
                </div>
                <div class="hero-banner__overlay" style="background-image: linear-gradient(to right, <?php echo esc_attr($atts['linear_color_1']); ?>, <?php echo esc_attr($atts['linear_color_2']); ?>);"></div>
                <div class="container">
                    <div class="hero-banner__wrap">
                        <div class="hero-banner__content">
                            <h1 class="hero-banner__heading wow fadeInDown" style="color: <?php echo esc_attr($atts['heading_title_color']); ?>">
                                <strong><?php echo wp_kses_post($atts['animated_pre_title']); ?></strong>
                                <?php echo wp_kses_post($atts['title']); ?>
                            </h1>
                            <?php if (!empty($atts['banner_button_link'])) {
                                $banner_button_link = vc_build_link($atts['banner_button_link']);
                                ?>
                                <div class="sbtn sbtn-arrow-primary-v2 wow fadeInLeft">
                                    <span class="btn-text">
                                        <a href="<?php echo esc_url($banner_button_link['url']); ?>" target="<?php echo esc_attr($banner_button_link['target']); ?>" class="md_storyful_storyful_hero_banner__video__content__button__link"><?php echo esc_html($banner_button_link['title']); ?></a>
                                    </span>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}