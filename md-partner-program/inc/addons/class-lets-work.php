<?php
/**
 * The Lets Work functionality of the plugin.
 *
 * @package    MD_Partner_Program
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Partner_Program\Inc\Addons;


/**
 * Lets_Work class
 * 
 * @since 1.0.0
 */
class Lets_Work {

    // Create Lets Work Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'lets_work'));
        add_shortcode('lets_work', array($this, 'lets_work_html'));
    }

    /**
     * Function is used to create Lets Work custom element.
     */
    public function lets_work() {

        // Lets Work With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Lets Work', 'md-bakery-antian'),
            'base' => 'lets_work',
            'params' => array(
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
                    'heading' => __('Button', 'md-bakery-antian'),
                    'param_name' => 'button',
                    'value' => '',
                    'description' => __('Enter button 1 text and link.', 'md-bakery-antian')
                ),
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'background_image',
                    'value' => '',
                    'description' => __('Upload background image.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
                // Linear Gradient Color 1.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Linear Gradient Color 1', 'md-bakery-antian'),
                    'param_name' => 'background_color',
                    'value' => '',
                    'description' => __('Select linear gradient color 1.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
                // Linear Gradient Color 2.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Linear Gradient Color 2', 'md-bakery-antian'),
                    'param_name' => 'background_color2',
                    'value' => '',
                    'description' => __('Select linear gradient color 2.', 'md-bakery-antian'),
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
            'icon' => 'icon-wpb-toggle-small-expand',
        ));
    }

    /**
     * Function is used to display Lets Work html.
     */
    public function lets_work_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'description' => '',
                'button' => '',
                'background_image' => '',
                'background_color' => '',
                'background_color2' => '',
                'alignment' => 'center',
                'heading_color' => '',
                'description_color' => '',
                'button_color' => '',
                'button_background_color' => '',
            ),
            $atts
        );
        $background_image = wp_get_attachment_url($atts['background_image']);
        $button1 = vc_build_link($atts['button']);
        $background_overlay = $atts['background_color'];
        $background_overlay2 = $atts['background_color2'];
        $alignment = $atts['alignment'];
        $heading_color = $atts['heading_color'];
        $description_color = $atts['description_color'];
        $button_color = $atts['button_color'];
        $button_background_color = $atts['button_background_color'];
        ob_start();
        ?>
        <div class="partner-hero-banner partner_lets_work" style="background-image: url(<?php echo esc_url($background_image); ?>), linear-gradient(100deg, <?php echo esc_attr($background_overlay); ?>  0% , <?php echo esc_attr($background_overlay2); ?> 100%); background-position: center; background-size: cover;">
            <div class="container">
                <div class="hero-banner-content" style="text-align: <?php echo esc_attr($alignment); ?>">
                    <div class="hero-banner-content__inner">
                        <h1 style="color: <?php echo esc_attr($heading_color); ?>"><?php echo esc_html($atts['title']); ?></h1>
                        <div class="description" style="color: <?php echo esc_attr($description_color); ?>"><?php echo wp_kses_post($atts['description']); ?></div>
                        <div class="hero-banner-buttons">
                            <?php if (!empty($button1['url'])) : ?>
                                <a style="color: <?php echo esc_attr($button_color); ?>; background-color: <?php echo esc_attr($button_background_color); ?>" href="<?php echo esc_url($button1['url']); ?>" class="btn"><?php echo esc_html($button1['title']); ?></a>
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