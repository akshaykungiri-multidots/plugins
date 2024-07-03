<?php
/**
 * The Hero Banner functionality of the plugin.
 *
 * @package    MD_Partner_Program
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Partner_Program\Inc\Addons;


/**
 * Hero_Banner class
 * 
 * @since 1.0.0
 */
class Hero_Banner {

    // Create Hero Banner Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'hero_banner'));
        add_shortcode('hero_banner', array($this, 'hero_banner_html'));
    }

    /**
     * Function is used to create hero banner custom element.
     */
    public function hero_banner() {

        // Hero Banner With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Hero Banner', 'md-bakery-antian'),
            'base' => 'hero_banner',
            'params' => array(
                // Add Logo
                array(
                    'type' => 'attach_image',
                    'heading' => __('Logo', 'md-bakery-antian'),
                    'param_name' => 'logo',
                    'value' => '',
                    'description' => __('Upload logo.', 'md-bakery-antian')
                ),
                array(
                    'type' => 'textfield',
                    'heading' => __('Title', 'md-bakery-antian'),
                    'param_name' => 'title',
                    'value' => '',
                    'description' => __('Enter title.', 'md-bakery-antian')
                ),
                array(
                    'type' => 'textarea',
                    'heading' => __('Description', 'md-bakery-antian'),
                    'param_name' => 'description',
                    'value' => '',
                    'description' => __('Enter description.', 'md-bakery-antian')
                ),
                array(
                    'type' => 'vc_link',
                    'heading' => __('Button 1', 'md-bakery-antian'),
                    'param_name' => 'button1',
                    'value' => '',
                    'description' => __('Enter button 1 text and link.', 'md-bakery-antian')
                ),
                array(
                    'type' => 'vc_link',
                    'heading' => __('Button 2', 'md-bakery-antian'),
                    'param_name' => 'button2',
                    'value' => '',
                    'description' => __('Enter button 2 text and link.', 'md-bakery-antian')
                ),
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'background_image',
                    'value' => '',
                    'description' => __('Upload background image.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
                // Add Background Color as linear gradient
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Background Overlay Color', 'md-bakery-antian'),
                    'param_name' => 'background_color',
                    'value' => '',
                    'description' => __('Select background overlay color.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
                // Alignment.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Alignment', 'md-bakery-antian'),
                    'param_name' => 'alignment',
                    'value' => array(
                        __('Left', 'md-bakery-antian') => 'left',
                        __('Center', 'md-bakery-antian') => 'center',
                        __('Right', 'md-bakery-antian') => 'right',
                    ),
                    'description' => __('Select alignment.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
                // Heading Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Heading Color', 'md-bakery-antian'),
                    'param_name' => 'heading_color',
                    'value' => '',
                    'description' => __('Select heading color.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
                // Description Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Description Color', 'md-bakery-antian'),
                    'param_name' => 'description_color',
                    'value' => '',
                    'description' => __('Select description color.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
                // Button Color and Background Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Button Color', 'md-bakery-antian'),
                    'param_name' => 'button_color',
                    'value' => '',
                    'description' => __('Select button color.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Button Background Color', 'md-bakery-antian'),
                    'param_name' => 'button_background_color',
                    'value' => '',
                    'description' => __('Select button background color.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Antian', 'md-bakery-antian'),
        ));
    }

    /**
     * Function is used to display hero banner html.
     */
    public function hero_banner_html($atts) {

        $atts = shortcode_atts(
            array(
                'logo' => '',
                'title' => '',
                'description' => '',
                'button1' => '',
                'button2' => '',
                'background_image' => '',
                'background_color' => '',
                'alignment' => 'center',
                'heading_color' => '',
                'description_color' => '',
                'button_color' => '',
                'button_background_color' => '',
            ),
            $atts
        );
        $background_image = wp_get_attachment_url($atts['background_image']);
        $logo = wp_get_attachment_url($atts['logo']);
        $button1 = vc_build_link($atts['button1']);
        $button2 = vc_build_link($atts['button2']);
        $background_overlay = $atts['background_color'];
        $alignment = $atts['alignment'];
        $heading_color = $atts['heading_color'];
        $description_color = $atts['description_color'];
        $button_color = $atts['button_color'];
        $button_background_color = $atts['button_background_color'];
        ob_start();
        ?>
        <div class="partner-hero-banner" style="background: linear-gradient(100deg, rgba(11, 51, 84, 0.9) 0% , <?php echo esc_attr($background_overlay); ?> 100%), url(<?php echo esc_url($background_image); ?>) no-repeat center center; background-size: cover;">
            <div class="container">
                <div class="hero-banner-content" style="text-align: <?php echo esc_attr($alignment); ?>">
                    <div class="hero-banner-content__inner">
                        <div class="hero-banner-logo">
                            <img src="<?php echo esc_url($logo); ?>" alt="logo">
                        </div>
                        <h1 style="color: <?php echo esc_attr($heading_color); ?>"><?php echo esc_html($atts['title']); ?></h1>
                        <p style="color: <?php echo esc_attr($description_color); ?>"><?php echo esc_html($atts['description']); ?></p>
                        <div class="hero-banner-buttons">
                            <?php if (!empty($button1['url'])) : ?>
                                <a style="color: <?php echo esc_attr($button_color); ?>; background-color: <?php echo esc_attr($button_background_color); ?>" href="<?php echo esc_url($button1['url']); ?>" class="btn"><?php echo esc_html($button1['title']); ?></a>
                            <?php endif; ?>
                            <?php if (!empty($button2['url'])) : ?>
                                <a style="color: <?php echo esc_attr($button_color); ?>; background-color: <?php echo esc_attr($button_background_color); ?>" href="<?php echo esc_url($button2['url']); ?>" class="btn"><?php echo esc_html($button2['title']); ?></a>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}