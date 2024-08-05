<?php
/**
 * The Pointcentral Video Banner functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Video_Banner class
 * 
 * @since 1.0.0
 */
class Pointcentral_Video_Banner {

    // Create Pointcentral Video Banner Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_video_banner'));
        add_shortcode('pointcentral_video_banner', array($this, 'pointcentral_video_banner_html'));
    }

    /**
     * Function is used to create Pointcentral Video Banner custom element.
     */
    public function pointcentral_video_banner() {

        // Pointcentral Video Banner.
        vc_map(array(
            'name' => __('Pointcentral Video Banner', 'md-bakery-antian'),
            'base' => 'pointcentral_video_banner',
            'params' => array(
                // Sub Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Sub Title', 'md-bakery-antian'),
                    'param_name' => 'sub_title',
                    'value' => '',
                    'description' => __('Enter sub title.', 'md-bakery-antian'),
                ),
                // Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Title', 'md-bakery-antian'),
                    'param_name' => 'title',
                    'value' => '',
                    'description' => __('Enter title.', 'md-bakery-antian'),
                ),
                // Content Text.
                array(
                    'type' => 'textarea',
                    'heading' => __('Content Text', 'md-bakery-antian'),
                    'param_name' => 'content_text',
                    'value' => '',
                    'description' => __('Enter content text.', 'md-bakery-antian'),
                ),
                // Button Link.
                array(
                    'type' => 'vc_link',
                    'heading' => __('Button Link', 'md-bakery-antian'),
                    'param_name' => 'button_link',
                    'value' => '',
                    'description' => __('Enter button link.', 'md-bakery-antian'),
                ),
                // Background Video.
                array(
                    'type' => 'textfield',
                    'heading' => __('Background Video', 'md-bakery-antian'),
                    'param_name' => 'background_video',
                    'value' => '',
                    'description' => __('Enter background video.', 'md-bakery-antian'),
                    'group' => 'Background Video',
                ),
                // Background Video Overlay Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Background Video Overlay Color', 'md-bakery-antian'),
                    'param_name' => 'background_video_overlay_color',
                    'value' => '',
                    'description' => __('Select background video overlay color.', 'md-bakery-antian'),
                    'group' => 'Background Video',
                ),
            ),
            'category' => __('Pointcentral', 'md-bakery-antian'),
            'icon' => 'icon-wpb-layout_sidebar',
        ));
    }

    /**
     * Function is used to display Pointcentral Video Banner html.
     */
    public function pointcentral_video_banner_html($atts) {

        $atts = shortcode_atts(
            array(
                'sub_title' => '',
                'title' => '',
                'content_text' => '',
                'button_link' => '',
                'background_video' => '',
                'background_video_overlay_color' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="pointcentral-video-banner">
            <div class="pointcentral-video-banner__video">
                <div class="pointcentral-video-banner__video__inner">
                    <video autoplay loop muted playsinline>
                        <source src="<?php echo esc_url($atts['background_video']); ?>" type="video/mp4">
                    </video>
                </div>
                <div class="pointcentral-video-banner__overlay" style="background-color: <?php echo esc_attr($atts['background_video_overlay_color']); ?>"></div>
            </div>
            <div class="container">
                <div class="pointcentral-video-banner__content">
                    <h3 class="pointcentral-video-banner__sub-title"><?php echo esc_html($atts['sub_title']); ?></h3>
                    <h2 class="pointcentral-video-banner__title"><?php echo esc_html($atts['title']); ?></h2>
                    <p class="pointcentral-video-banner__description"><?php echo esc_html($atts['content_text']); ?></p>
                    <?php if (!empty($atts['button_link'])) : 
                        $button_link = vc_build_link($atts['button_link']);
                        ?>
                        <div class="pointcentral-video-banner__button">
                            <a href="<?php echo esc_url($button_link['url']); ?>" class="pointcentral-video-banner__button"><?php echo esc_html($button_link['title']); ?></a>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}