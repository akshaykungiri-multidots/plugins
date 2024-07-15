<?php
/**
 * The Let's Get Started functionality of the plugin.
 *
 * @package    MD_ANITIAN
 * @author     Multidots <info@multidots.com>
 */

namespace MD_ANITIAN\Includes\Addons;


/**
 * Lets_Get_Started class
 * 
 * @since 1.0.0
 */
class Lets_Get_Started {

    // Create Let's Get Started Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'lets_get_started'));
        add_shortcode('lets_get_started', array($this, 'lets_get_started_html'));
    }

    /**
     * Function is used to create hero banner custom element.
     */
    public function lets_get_started() {

        // Lets Get Started With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Lets Get Started', 'md-bakery-antian'),
            'base' => 'lets_get_started',
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
                    'description' => __('Upload background image.', 'md-bakery-antian')
                ),
                // Style
                array(
                    'type' => 'dropdown',
                    'heading' => __('Select Style', 'md-bakery-antian'),
                    'param_name' => 'get_started_style',
                    'value' => array(
                        __('Style 1', 'md-bakery-antian') => 'style1',
                        __('Style 2', 'md-bakery-antian') => 'style2',
                    ),
                    'description' => __('Select style for lets get started.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Heading Font Size
                array(
                    'type' => 'dropdown',
                    'heading' => __('Heading Font Size', 'md-bakery-antian'),
                    'param_name' => 'heading_font_size',
                    'value' => array(
                        __('Default', 'md-bakery-antian') => '',
                        __('Extra Small', 'md-bakery-antian') => 'extra-small',
                        __('Small', 'md-bakery-antian') => 'small',
                        __('Medium', 'md-bakery-antian') => 'medium',
                        __('Large', 'md-bakery-antian') => 'large',
                        __('Extra Large', 'md-bakery-antian') => 'extra-large',
                    ),
                    'description' => __('Select heading font size.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Description Font Size
                array(
                    'type' => 'dropdown',
                    'heading' => __('Description Font Size', 'md-bakery-antian'),
                    'param_name' => 'description_font_size',
                    'value' => array(
                        __('Default', 'md-bakery-antian') => '',
                        __('Extra Small', 'md-bakery-antian') => 'extra-small',
                        __('Small', 'md-bakery-antian') => 'small',
                        __('Medium', 'md-bakery-antian') => 'medium',
                        __('Large', 'md-bakery-antian') => 'large',
                        __('Extra Large', 'md-bakery-antian') => 'extra-large',
                    ),
                    'description' => __('Select description font size.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Button1 Background Color
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Button 1 Background Color', 'md-bakery-antian'),
                    'param_name' => 'button1_background_color',
                    'value' => '',
                    'description' => __('Select button 1 background color.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Button1 Text Color
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Button 1 Text Color', 'md-bakery-antian'),
                    'param_name' => 'button1_text_color',
                    'value' => '',
                    'description' => __('Select button 1 text color.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Button2 Background Color
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Button 2 Background Color', 'md-bakery-antian'),
                    'param_name' => 'button2_background_color',
                    'value' => '',
                    'description' => __('Select button 2 background color.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Button2 Text Color
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Button 2 Text Color', 'md-bakery-antian'),
                    'param_name' => 'button2_text_color',
                    'value' => '',
                    'description' => __('Select button 2 text color.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
            ),
            'category' => __('Antian', 'md-bakery-antian'),
            'icon' => 'icon-wpb-toggle-small-expand',
        ));
    }

    /**
     * Function is used to display hero banner html.
     */
    public function lets_get_started_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'description' => '',
                'button1' => '',
                'button2' => '',
                'background_image' => '',
                'get_started_style' => 'style1',
                'heading_font_size' => '',
                'description_font_size' => '',
                'button1_background_color' => '',
                'button1_text_color' => '',
                'button2_background_color' => '',
                'button2_text_color' => '',
            ),
            $atts
        );
        ob_start();
        $background_image = wp_get_attachment_image_url($atts['background_image'], 'full');
        $button1 = vc_build_link($atts['button1']);
        $button2 = vc_build_link($atts['button2']);
        ?>
        <div class="bakery_antian__lets-get-started__wrapper">
            <div class="container">
                <div class="bakery_antian__lets-get-started <?php echo esc_attr($atts['get_started_style']); ?>" style="background-image: url(<?php echo esc_url($background_image); ?>);">
                    <div class="lets-get-started-content">
                        <div class="lets-get-started-content__left">
                            <h2 class="lets-get-started__title <?php echo esc_attr($atts['heading_font_size']); ?>"><?php echo wp_kses_post($atts['title']); ?></h2>
                            <p class="lets-get-started__desc <?php echo esc_attr($atts['description_font_size']); ?>"><?php echo wp_kses_post($atts['description']); ?></p>
                        </div>
                        <div class="lets-get-started-content__right">
                            <div class="lets-get-started-buttons">
                                <?php if (!empty($button1['url']) && !empty($button1['title'])) : ?>
                                    <div class="lets-get-started__button button_orange">
                                        <a href="<?php echo esc_url($button1['url']); ?>" class="btn btn-anitian" style="background-color: <?php echo esc_attr($atts['button1_background_color']); ?>; color: <?php echo esc_attr($atts['button1_text_color']); ?>" target="<?php echo esc_attr($button1['target']); ?>"><?php echo esc_html($button1['title']); ?></a>
                                    </div>
                                <?php endif; ?>
                                <?php if (!empty($button2['url']) && !empty($button2['title'])) : ?>
                                    <div class="lets-get-started__button button_white">
                                        <a href="<?php echo esc_url($button2['url']); ?>" class="btn btn-anitian" style="background-color: <?php echo esc_attr($atts['button2_background_color']); ?>; color: <?php echo esc_attr($atts['button2_text_color']); ?>" target="<?php echo esc_attr($button2['target']); ?>"><?php echo esc_html($button2['title']); ?></a>
                                    </div>
                                <?php endif; ?>
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