<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Hero_Banner class
 * 
 * @since 1.0.0
 */
class Pointcentral_Hero_Banner {

    // Create Pointcentral Hero Banner Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_hero_banner'));
        add_shortcode('pointcentral_hero_banner', array($this, 'pointcentral_hero_banner_html'));
    }

    /**
     * Function is used to create Pointcentral Hero Banner custom element.
     */
    public function pointcentral_hero_banner() {

        // Pointcentral Hero Banner.
        vc_map(array(
            'name' => __('Pointcentral Hero Banner', 'md-bakery-antian'),
            'base' => 'pointcentral_hero_banner',
            'params' => array(
                // Hero Banner Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Hero Banner Title', 'md-bakery-antian'),
                    'param_name' => 'hero_banner_title',
                    'value' => '',
                    'description' => __('Enter hero banner title.', 'md-bakery-antian'),
                ),
                // Hero Banner Description.
                array(
                    'type' => 'textarea',
                    'heading' => __('Hero Banner Description', 'md-bakery-antian'),
                    'param_name' => 'hero_banner_description',
                    'value' => '',
                    'description' => __('Enter hero banner description.', 'md-bakery-antian'),
                ),
                // Hero Banner Button Link.
                array(
                    'type' => 'vc_link',
                    'heading' => __('Hero Banner Button Link', 'md-bakery-antian'),
                    'param_name' => 'hero_banner_button_link',
                    'value' => '',
                    'description' => __('Enter hero banner button link.', 'md-bakery-antian'),
                ),
                // Hero Banner Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Hero Banner Image', 'md-bakery-antian'),
                    'param_name' => 'hero_banner_image',
                    'value' => '',
                    'description' => __('Select hero banner image.', 'md-bakery-antian'),
                ),
                // Theme Style.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Theme Style', 'md-bakery-antian'),
                    'param_name' => 'theme_style',
                    'value' => array(
                        __('Style 1', 'md-bakery-antian') => 'style1',
                        __('Style 2', 'md-bakery-antian') => 'style2',
                    ),
                    'description' => __('Select theme style.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Hero Banner Background Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Hero Banner Background Image', 'md-bakery-antian'),
                    'param_name' => 'hero_banner_background_image',
                    'value' => '',
                    'description' => __('Select hero banner background image.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Hero Banner Background Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Hero Banner Background Color', 'md-bakery-antian'),
                    'param_name' => 'hero_banner_background_color',
                    'value' => '',
                    'description' => __('Select hero banner background color.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Hero Banner Background Color Opacity.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Hero Banner Background Color Opacity', 'md-bakery-antian'),
                    'param_name' => 'hero_banner_background_color_opacity',
                    'value' => array(
                        __('1.0', 'md-bakery-antian') => '1',
                        __('0.9', 'md-bakery-antian') => '0.9',
                        __('0.8', 'md-bakery-antian') => '0.8',
                        __('0.7', 'md-bakery-antian') => '0.7',
                        __('0.6', 'md-bakery-antian') => '0.6',
                        __('0.5', 'md-bakery-antian') => '0.5',
                        __('0.4', 'md-bakery-antian') => '0.4',
                        __('0.3', 'md-bakery-antian') => '0.3',
                        __('0.2', 'md-bakery-antian') => '0.2',
                        __('0.1', 'md-bakery-antian') => '0.1',
                        __('0.0', 'md-bakery-antian') => '0',
                    ),
                    'description' => __('Select hero banner background color opacity.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Hero Banner Title Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Hero Banner Title Color', 'md-bakery-antian'),
                    'param_name' => 'hero_banner_title_color',
                    'value' => '',
                    'description' => __('Select hero banner title color.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Hero Banner Description Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Hero Banner Description Color', 'md-bakery-antian'),
                    'param_name' => 'hero_banner_description_color',
                    'value' => '',
                    'description' => __('Select hero banner description color.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
            ),
            'category' => __('Pointcentral', 'md-bakery-antian'),
            'icon' => 'icon-wpb-call-to-action',
        ));
    }

    /**
     * Function is used to display Pointcentral Hero Banner html.
     */
    public function pointcentral_hero_banner_html($atts) {

        $atts = shortcode_atts(
            array(
                'hero_banner_title' => '',
                'hero_banner_description' => '',
                'hero_banner_button_link' => '',
                'hero_banner_image' => '',
                'theme_style' => 'style1',
                'hero_banner_background_image' => '',
                'hero_banner_background_color' => '',
                'hero_banner_background_color_opacity' => '1',
                'hero_banner_title_color' => '',
                'hero_banner_description_color' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <section class="pointcentral-hero-banner <?php echo esc_attr($atts['theme_style']); ?>" style="background-image: url(<?php echo esc_url(wp_get_attachment_url($atts['hero_banner_background_image'], 'full')); ?>);">
            <div class="hero-banner-overlay" style="background-color: <?php echo esc_attr($atts['hero_banner_background_color']); ?>; opacity: <?php echo esc_attr($atts['hero_banner_background_color_opacity']); ?>;"></div>
            <div class="container">
                <div class="pointcentral-hero-banner-inner">
                    <div class="pointcentral-hero-banner-left">
                        <div class="pointcentral-hero-banner-content">
                            <h1 style="color: <?php echo esc_attr($atts['hero_banner_title_color']); ?>;"><?php echo esc_html($atts['hero_banner_title']); ?></h1>
                            <p style="color: <?php echo esc_attr($atts['hero_banner_description_color']); ?>;"><?php echo wp_kses_post($atts['hero_banner_description']); ?></p>
                            <?php 
                            if (!empty($atts['hero_banner_button_link'])) : 
                                $hero_banner_button_link = vc_build_link($atts['hero_banner_button_link']);
                            ?>
                                <div class="pointcentral-hero-banner-button">
                                    <a href="<?php echo esc_url($hero_banner_button_link['url']); ?>" target="<?php echo esc_attr($hero_banner_button_link['target']); ?>"><?php echo esc_html($hero_banner_button_link['title']); ?></a>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php if (!empty($atts['hero_banner_image'])) : ?>
                    <div class="pointcentral-hero-banner-right">
                        <div class="solution-image">
                            <img src="<?php echo esc_url(wp_get_attachment_url($atts['hero_banner_image'], 'full')); ?>" alt="<?php echo esc_attr($atts['hero_banner_title']); ?>">
                        </div>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
        </section>
        <?php
        return ob_get_clean();
    }

}