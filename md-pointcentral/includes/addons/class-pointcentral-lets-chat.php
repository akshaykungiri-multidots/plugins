<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Lets_Chat class
 * 
 * @since 1.0.0
 */
class Pointcentral_Lets_Chat {

    // Create Pointcentral Lets Chat Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_lets_chat'));
        add_shortcode('pointcentral_lets_chat', array($this, 'pointcentral_lets_chat_html'));
    }

    /**
     * Function is used to create Pointcentral Lets Chat custom element.
     */
    public function pointcentral_lets_chat() {

        // Pointcentral Lets Chat.
        vc_map(array(
            'name' => __('Pointcentral Lets Chat', 'md-bakery-antian'),
            'base' => 'pointcentral_lets_chat',
            'params' => array(
                // Image Banner Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Image Banner Image', 'md-bakery-antian'),
                    'param_name' => 'image_banner_image',
                    'value' => '',
                    'description' => __('Select image banner image.', 'md-bakery-antian'),
                ),
                // Image Banner Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Image Banner Title', 'md-bakery-antian'),
                    'param_name' => 'image_banner_title',
                    'value' => '',
                    'description' => __('Enter image banner title.', 'md-bakery-antian'),
                ),
                // Image Banner Description.
                array(
                    'type' => 'textarea',
                    'heading' => __('Image Banner Description', 'md-bakery-antian'),
                    'param_name' => 'image_banner_description',
                    'value' => '',
                    'description' => __('Enter image banner description.', 'md-bakery-antian'),
                ),
                // Image Banner Button Link.
                array(
                    'type' => 'vc_link',
                    'heading' => __('Image Banner Button Link', 'md-bakery-antian'),
                    'param_name' => 'image_banner_button_link',
                    'value' => '',
                    'description' => __('Enter image banner button link.', 'md-bakery-antian'),
                ),
                // Image Banner Background Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Image Banner Background Color', 'md-bakery-antian'),
                    'param_name' => 'image_banner_background_color',
                    'value' => '',
                    'description' => __('Select image banner background color.', 'md-bakery-antian'),
                    'group' => __('Design Option', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Pointcentral', 'md-bakery-antian'),
            'icon' => 'icon-wpb-information-white',
        ));
    }

    /**
     * Function is used to display Pointcentral Lets Chat html.
     */
    public function pointcentral_lets_chat_html($atts) {

        $atts = shortcode_atts(
            array(
                'image_banner_image' => '',
                'image_banner_title' => '',
                'image_banner_description' => '',
                'image_banner_button_link' => '',
                'image_banner_background_color' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="pointcentral-lets-chat">
            <div class="pointcentral-lets-chat-inner" style="background-color: <?php echo esc_attr($atts['image_banner_background_color']); ?>">
                <div class="container">
                    <div class="pointcentral-lets-chat-content">
                        <div class="pointcentral-lets-chat-content-inner">
                            <div class="pointcentral-lets-chat-content-left">
                                <div class="pointcentral-lets-chat-content-left-inner">
                                    <div class="pointcentral-lets-chat-image">
                                        <img src="<?php echo esc_url(wp_get_attachment_url($atts['image_banner_image'])); ?>" alt="<?php echo esc_attr($atts['image_banner_title']); ?>">
                                    </div>
                                </div>
                            </div>
                            <div class="pointcentral-lets-chat-content-right">
                                <div class="pointcentral-lets-chat-content-right-inner">
                                    <div class="pointcentral-lets-chat-title">
                                        <h2><?php echo wp_kses_post($atts['image_banner_title']); ?></h2>
                                    </div>
                                    <div class="pointcentral-lets-chat-description">
                                        <p><?php echo wp_kses_post($atts['image_banner_description']); ?></p>
                                    </div>
                                    <?php 
                                    if (!empty($atts['image_banner_button_link'])) : 
                                        $image_banner_button_link = vc_build_link($atts['image_banner_button_link']);
                                        ?>
                                        <div class="pointcentral-lets-chat-button">
                                            <a href="<?php echo esc_url($image_banner_button_link['url']); ?>" target="<?php echo esc_attr($image_banner_button_link['target']); ?>" class="btn btn-primary"><?php echo esc_html($image_banner_button_link['title']); ?></a>
                                        </div>
                                    <?php endif; ?>
                                </div>
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