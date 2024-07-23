<?php
/**
 * The Storyful Media Text functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Media_Text class
 * 
 * @since 1.0.0
 */
class Storyful_Media_Text {

    // Create Storyful Media Text Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_media_text'));
        add_shortcode('storyful_media_text', array($this, 'storyful_media_text_html'));
    }

    /**
     * Function is used to create Storyful Media Text custom element.
     */
    public function storyful_media_text() {

        // Storyful Media Text.
        vc_map(array(
            'name' => __('Storyful Media Text', 'md-bakery-antian'),
            'base' => 'storyful_media_text',
            'params' => array(
                // Main Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Main Title', 'md-bakery-antian'),
                    'param_name' => 'main_title',
                    'value' => '',
                    'description' => __('Enter main title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // List Items.
                array(
                    'type' => 'param_group',
                    'heading' => __('List Items', 'md-bakery-antian'),
                    'param_name' => 'list_items',
                    'value' => '',
                    'params' => array(
                        // List Item Text.
                        array(
                            'type' => 'textfield',
                            'heading' => __('Text', 'md-bakery-antian'),
                            'param_name' => 'text',
                            'value' => '',
                            'description' => __('Enter text.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                    ),
                    'description' => __('Enter list items.', 'md-bakery-antian'),
                ),
                // Learn More Button Link.
                array(
                    'type' => 'vc_link',
                    'heading' => __('Learn More Button Link', 'md-bakery-antian'),
                    'param_name' => 'learn_more_button_link',
                    'value' => '',
                    'description' => __('Enter learn more button link.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Media Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Media Image', 'md-bakery-antian'),
                    'param_name' => 'media_image',
                    'value' => '',
                    'description' => __('Upload media image.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Content linear gradient color1.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Content Linear Gradient Color1', 'md-bakery-antian'),
                    'param_name' => 'content_linear_gradient_color1',
                    'value' => '',
                    'description' => __('Select content linear gradient color1.', 'md-bakery-antian'),
                    'admin_label' => true,
                    'group' => 'Style',
                ),
                // Content linear gradient color2.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Content Linear Gradient Color2', 'md-bakery-antian'),
                    'param_name' => 'content_linear_gradient_color2',
                    'value' => '',
                    'description' => __('Select content linear gradient color2.', 'md-bakery-antian'),
                    'admin_label' => true,
                    'group' => 'Style',
                ),
                // Media Image Background Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Media Image Background Color', 'md-bakery-antian'),
                    'param_name' => 'media_image_background_color',
                    'value' => '',
                    'description' => __('Select media image background color.', 'md-bakery-antian'),
                    'admin_label' => true,
                    'group' => 'Style',
                ),
                // Media Image Left or Right
                array(
                    'type' => 'dropdown',
                    'heading' => __('Media Image Position', 'md-bakery-antian'),
                    'param_name' => 'media_image_position',
                    'value' => array(
                        'Left' => 'left',
                        'Right' => 'right',
                    ),
                    'description' => __('Select media image position.', 'md-bakery-antian'),
                    'admin_label' => true,
                    'group' => 'Style',
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'vc_icon-vc-hoverbox',
        ));
    }

    /**
     * Function is used to display Storyful Media Text html.
     */
    public function storyful_media_text_html($atts) {

        $atts = shortcode_atts(
            array(
                'main_title' => '',
                'list_items' => '',
                'learn_more_button_link' => '',
                'media_image' => '',
                'content_linear_gradient_color1' => '',
                'content_linear_gradient_color2' => '',
                'media_image_background_color' => '',
                'media_image_position' => 'left',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="storyful-media-text <?php echo esc_attr($atts['media_image_position']); ?>">
            <div class="storyful-media-text__content" style="background: linear-gradient(263.64deg, <?php echo esc_attr($atts['content_linear_gradient_color1']); ?> -9.66%, <?php echo esc_attr($atts['content_linear_gradient_color2']); ?> 30.44%);">
                <div class="text-section">
                    <h2 class="storyful-media-text__title"><?php echo esc_html($atts['main_title']); ?></h2>
                    <ul class="storyful-media-text__list">
                        <?php
                        if (!empty($atts['list_items'])) {
                            $list_items = vc_param_group_parse_atts($atts['list_items']);
                            foreach ($list_items as $list_item) {
                                if (empty($list_item['text'])) {
                                    continue;
                                }
                                ?>
                                <li class="storyful-media-text__list-item"><?php echo esc_html($list_item['text']); ?></li>
                                <?php
                            }
                        }
                        ?>
                    </ul>
                    <?php
                    if (!empty($atts['learn_more_button_link'])) {
                        $learn_more_button_link = vc_build_link($atts['learn_more_button_link']);
                        ?>
                        <div class="media-text-button">
                            <div class="sbtn sbtn-arrow-secondary">
                                <span class="btn-text">
                                    <a href="<?php echo esc_url($learn_more_button_link['url']); ?>" target="<?php echo esc_attr($learn_more_button_link['target']); ?>" class="storyful-media-text__button__link"><?php echo esc_html($learn_more_button_link['title']); ?></a>
                                </span>
                            </div>
                        </div>
                        <?php
                    }
                    ?>
                </div>
            </div>
            <div class="storyful-media-text__media" style="background-color: <?php echo esc_attr($atts['media_image_background_color']); ?>;">
                <div class="media-section wow fadeInRight">
                <?php
                if (!empty($atts['media_image'])) {
                    $media_image = wp_get_attachment_image_url($atts['media_image'], 'full');
                    ?>
                    <img src="<?php echo esc_url($media_image); ?>" alt="Media Image">
                    <?php
                }
                ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}