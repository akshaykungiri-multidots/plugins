<?php
/**
 * The Storyful Stat Number functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Stat_Number class
 * 
 * @since 1.0.0
 */
class Storyful_Stat_Number {

    // Create Storyful Stat Number Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_stat_number'));
        add_shortcode('storyful_stat_number', array($this, 'storyful_stat_number_html'));
    }

    /**
     * Function is used to create Storyful Stat Number custom element.
     */
    public function storyful_stat_number() {

        // Storyful Stat Number.
        vc_map(array(
            'name' => __('Storyful Stat Number', 'md-bakery-antian'),
            'base' => 'storyful_stat_number',
            'params' => array(
                // Storyful Stat Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Storyful Stat Title', 'md-bakery-antian'),
                    'param_name' => 'storyful_stat_title',
                    'value' => '',
                    'description' => __('Enter storyful stat title.', 'md-bakery-antian'),
                ),
                // Storyful Stat Text
                array(
                    'type' => 'textarea',
                    'heading' => __('Storyful Stat Text', 'md-bakery-antian'),
                    'param_name' => 'storyful_stat_text',
                    'value' => '',
                    'description' => __('Enter storyful stat text.', 'md-bakery-antian'),
                ),
                // Storyful Stat Button Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('Storyful Stat Button Link', 'md-bakery-antian'),
                    'param_name' => 'storyful_stat_button_link',
                    'value' => '',
                    'description' => __('Enter storyful stat button link.', 'md-bakery-antian'),
                ),
                // Storyful Stat Numbers
                array(
                    'type' => 'param_group',
                    'heading' => __('Storyful Stat Numbers', 'md-bakery-antian'),
                    'param_name' => 'storyful_stat_numbers',
                    'value' => '',
                    'params' => array(
                        // Storyful Stat Number
                        array(
                            'type' => 'textfield',
                            'heading' => __('Storyful Stat Number', 'md-bakery-antian'),
                            'param_name' => 'storyful_stat_number',
                            'value' => '',
                            'description' => __('Enter storyful stat number.', 'md-bakery-antian'),
                        ),
                        // Storyful Stat Number Text
                        array(
                            'type' => 'textfield',
                            'heading' => __('Storyful Stat Number Text', 'md-bakery-antian'),
                            'param_name' => 'storyful_stat_number_text',
                            'value' => '',
                            'description' => __('Enter storyful stat number text.', 'md-bakery-antian'),
                        ),
                    ),
                ),
                // Background Image
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'background_image',
                    'value' => '',
                    'description' => __('Upload background image.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // Background Overlay Color
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Background Overlay Color', 'md-bakery-antian'),
                    'param_name' => 'background_overlay_color',
                    'value' => '',
                    'description' => __('Select background overlay color.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-ui-custom_heading',
        ));
    }

    /**
     * Function is used to display Storyful Stat Number html.
     */
    public function storyful_stat_number_html($atts) {

        $atts = shortcode_atts(
            array(
                'storyful_stat_title' => '',
                'storyful_stat_text' => '',
                'storyful_stat_button_link' => '',
                'storyful_stat_numbers' => '',
                'background_image' => '',
                'background_overlay_color' => '',
            ),
            $atts
        );
        ob_start();
        $storyful_stat_button_link = [];
        if (!empty($atts['storyful_stat_button_link'])) {
            $storyful_stat_button_link = vc_build_link($atts['storyful_stat_button_link']);
        }
        $background_image = wp_get_attachment_image_url($atts['background_image'], 'full');
        ?>
        <div class="storyful-stat-number" style="background-image: url(<?php echo esc_url($background_image); ?>);">
            <div class="container">
                <div class="stats-block-top">
                    <div class="stats-block-top__left fadeInLeft">
                        <div class="state-block__heading">
                            <?php echo esc_html($atts['storyful_stat_title']); ?>
                        </div>
                    </div>
                    <div class="stats-block-top__right fadeInRight">
                        <p class="state-block__description">
                            <?php echo esc_html($atts['storyful_stat_text']); ?>
                        </p>
                        <?php if (!empty($storyful_stat_button_link['url'])) { ?>
                            <div class="sbtn sbtn-arrow-primary-v2">
                                <span class="btn-text">
                                    <a href="<?php echo esc_url($storyful_stat_button_link['url']); ?>" target="<?php echo esc_attr($storyful_stat_button_link['target']); ?>">
                                        <?php echo esc_html($storyful_stat_button_link['title']); ?>
                                    </a>
                                </span>
                            </div>
                        <?php } ?>
                    </div>
                </div>
                <div class="stats-block-bottom">
                    <?php if (!empty($atts['storyful_stat_numbers'])) {
                        $storyful_stat_numbers = vc_param_group_parse_atts($atts['storyful_stat_numbers']);
                        foreach ($storyful_stat_numbers as $storyful_stat_number) {
                            $stat_number = ( isset($storyful_stat_number['storyful_stat_number']) && !empty($storyful_stat_number['storyful_stat_number']) ) ? $storyful_stat_number['storyful_stat_number'] : '';
                            $stat_number_text = ( isset($storyful_stat_number['storyful_stat_number_text']) && !empty($storyful_stat_number['storyful_stat_number_text']) ) ? $storyful_stat_number['storyful_stat_number_text'] : '';
                            ?>
                            <div class="stats-block-bottom__item fadeInUp">
                                <h3>
                                    <?php echo esc_html($stat_number); ?>
                                </h3>
                                <p>
                                    <?php echo esc_html($stat_number_text); ?>
                                </p>
                            </div>
                        <?php }
                    } ?>
                </div>
            </div>
            <div class="overlay" style="background-color: <?php echo esc_attr($atts['background_overlay_color']); ?>"></div>
        </div>
        <?php
        return ob_get_clean();
    }

}