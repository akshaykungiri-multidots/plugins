<?php
/**
 * The Storyful Video Licensing functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Video_Licensing class
 * 
 * @since 1.0.0
 */
class Storyful_Video_Licensing {

    // Create Storyful Video Licensing Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_video_licensing'));
        add_shortcode('storyful_video_licensing', array($this, 'storyful_video_licensing_html'));
    }

    /**
     * Function is used to create Storyful Video Licensing custom element.
     */
    public function storyful_video_licensing() {

        // Storyful Video Licensing.
        vc_map(array(
            'name' => __('Storyful Video Licensing', 'md-bakery-antian'),
            'base' => 'storyful_video_licensing',
            'params' => array(
                // Section Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Section Title', 'md-bakery-antian'),
                    'param_name' => 'section_title',
                    'value' => '',
                    'description' => __('Enter section title.', 'md-bakery-antian'),
                ),
                // Buy Button Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('Buy Button Link', 'md-bakery-antian'),
                    'param_name' => 'buy_button_link',
                    'value' => '',
                    'description' => __('Enter buy button link.', 'md-bakery-antian'),
                ),
                // Sell Button Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('Sell Button Link', 'md-bakery-antian'),
                    'param_name' => 'sell_button_link',
                    'value' => '',
                    'description' => __('Enter sell button link.', 'md-bakery-antian'),
                ),
                // licensing-pre-text
                array(
                    'type' => 'textfield',
                    'heading' => __('Licensing Pre Text', 'md-bakery-antian'),
                    'param_name' => 'licensing_pre_text',
                    'value' => '',
                    'description' => __('Enter licensing description.', 'md-bakery-antian'),
                ),
                // licensing-mark-text
                array(
                    'type' => 'textfield',
                    'heading' => __('Licensing Mark Text', 'md-bakery-antian'),
                    'param_name' => 'licensing_mark_text',
                    'value' => '',
                    'description' => __('Enter licensing mark text.', 'md-bakery-antian'),
                ),
                // licensing-post-text
                array(
                    'type' => 'textfield',
                    'heading' => __('Licensing Post Text', 'md-bakery-antian'),
                    'param_name' => 'licensing_post_text',
                    'value' => '',
                    'description' => __('Enter licensing post text.', 'md-bakery-antian'),
                ),
                // Learn More Button Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('Learn More Button Link', 'md-bakery-antian'),
                    'param_name' => 'learn_more_button_link',
                    'value' => '',
                    'description' => __('Enter learn more button link.', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-ui-separator-label',
        ));
    }

    /**
     * Function is used to display Storyful Video Licensing html.
     */
    public function storyful_video_licensing_html($atts) {

        $atts = shortcode_atts(
            array(
                'section_title' => '',
                'buy_button_link' => '',
                'sell_button_link' => '',
                'licensing_pre_text' => '',
                'licensing_mark_text' => '',
                'licensing_post_text' => '',
                'learn_more_button_link' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="storyful-video-licensing">
            <div class="container">
                <div class="video-licensing-wrap">
                    <div class="video-licensing-wrap__left">
                        <h1 class="section-title h1 wow fadeInLeft">
                            <?php echo wp_kses_post($atts['section_title']); ?>
                        </h1>
                        <div class="bye-sell-button wow fadeInLeft">
                            <span class="link">
                                <?php
                                if (!empty($atts['buy_button_link'])) {
                                    $buy_button_link = vc_build_link($atts['buy_button_link']);
                                    echo '<a href="' . esc_url($buy_button_link['url']) . '" target="' . esc_attr($buy_button_link['target']) . '">' . esc_html($buy_button_link['title']) . '</a>';
                                }
                                ?>
                            </span>
                            <span class="link">
                                <?php
                                if (!empty($atts['sell_button_link'])) {
                                    $sell_button_link = vc_build_link($atts['sell_button_link']);
                                    echo '<a href="' . esc_url($sell_button_link['url']) . '" target="' . esc_attr($sell_button_link['target']) . '">' . esc_html($sell_button_link['title']) . '</a>';
                                }
                                ?>
                            </span>
                        </div>
                    </div>
                    <div class="video-licensing-wrap__right">
                        <div class="licensing-description-and-button">
                            <h2 class="licensing-description">
                                <?php echo esc_html($atts['licensing_pre_text']); ?>
                                <mark class="licensing-mark-text">
                                    <?php echo esc_html($atts['licensing_mark_text']); ?>
                                </mark>
                                <?php echo esc_html($atts['licensing_post_text']); ?>
                            </h2>
                            <?php if (!empty($atts['learn_more_button_link'])) : 
                                $learn_more_button_link = vc_build_link($atts['learn_more_button_link']);
                                if (!empty($learn_more_button_link['url'])) : ?>
                                    <div class="sbtn sbtn-arrow-primary">
                                        <span class="btn-text">
                                            <a href="<?php echo esc_url($learn_more_button_link['url']); ?>" target="<?php echo esc_attr($learn_more_button_link['target']); ?>">
                                                <?php echo esc_html($learn_more_button_link['title']); ?>
                                            </a>
                                        </span>
                                    </div>
                                <?php endif;
                            endif;
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}