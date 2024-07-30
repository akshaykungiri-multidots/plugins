<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Hero_Text_Banner class
 * 
 * @since 1.0.0
 */
class Pointcentral_Hero_Text_Banner {

    // Create Pointcentral Hero Text Banner Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_hero_text_banner'));
        add_shortcode('pointcentral_hero_text_banner', array($this, 'pointcentral_hero_text_banner_html'));
    }

    /**
     * Function is used to create Pointcentral Hero Text Banner custom element.
     */
    public function pointcentral_hero_text_banner() {

        // Pointcentral Hero Text Banner.
        vc_map(array(
            'name' => __('Pointcentral Hero Text Banner', 'md-bakery-antian'),
            'base' => 'pointcentral_hero_text_banner',
            'params' => array(
                // Hero Text Banner Heading.
                array(
                    'type' => 'textfield',
                    'heading' => __('Hero Text Banner Heading', 'md-bakery-antian'),
                    'param_name' => 'hero_text_banner_heading',
                    'value' => '',
                    'description' => __('Enter hero text banner heading.', 'md-bakery-antian'),
                ),
                // Hero Text Banner Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Hero Text Banner Title', 'md-bakery-antian'),
                    'param_name' => 'hero_text_banner_title',
                    'value' => '',
                    'description' => __('Enter hero text banner title.', 'md-bakery-antian'),
                ),
                // Hero Text Banner Description.
                array(
                    'type' => 'textarea',
                    'heading' => __('Hero Text Banner Description', 'md-bakery-antian'),
                    'param_name' => 'hero_text_banner_description',
                    'value' => '',
                    'description' => __('Enter hero text banner description.', 'md-bakery-antian'),
                ),
                // Hero Text Banner Background Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Hero Text Banner Background Image', 'md-bakery-antian'),
                    'param_name' => 'hero_text_banner_background_image',
                    'value' => '',
                    'description' => __('Select image from media library.', 'md-bakery-antian'),
                    'group' => __('Design Option', 'md-bakery-antian'),
                ),
                // Hero Text Banner Box Background Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Hero Text Banner Box Background Color', 'md-bakery-antian'),
                    'param_name' => 'hero_text_banner_box_background_color',
                    'value' => '',
                    'description' => __('Select hero text banner box background color.', 'md-bakery-antian'),
                    'group' => __('Design Option', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-layer-shape-text',
        ));
    }

    /**
     * Function is used to display Pointcentral Hero Text Banner html.
     */
    public function pointcentral_hero_text_banner_html($atts) {

        $atts = shortcode_atts(
            array(
                'hero_text_banner_heading' => '',
                'hero_text_banner_title' => '',
                'hero_text_banner_description' => '',
                'hero_text_banner_background_image' => '',
                'hero_text_banner_box_background_color' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <section class="pointcentral-hero-text-banner">
            <div class="pointcentral-hero-text-banner-heading" style="background-image: url(<?php echo esc_url(wp_get_attachment_url($atts['hero_text_banner_background_image'], 'full')); ?>);">
                <div class="container">
                    <h2><?php echo esc_html($atts['hero_text_banner_heading']); ?></h2>
                </div>
            </div>
            <div class="container">
                <div class="pointcentral-hero-text-banner-content-wrapper">
                    <div class="pointcentral-hero-text-banner-content" style="background-color: <?php echo esc_attr($atts['hero_text_banner_box_background_color']); ?>;">
                        <h3><?php echo esc_html($atts['hero_text_banner_title']); ?></h3>
                        <p><?php echo esc_html($atts['hero_text_banner_description']); ?></p>
                    </div>
                </div>
            </div>
        </section>
        <?php
        return ob_get_clean();
    }

}