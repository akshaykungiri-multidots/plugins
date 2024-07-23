<?php
/**
 * The Storyful Cover Background functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Cover_Bg class
 * 
 * @since 1.0.0
 */
class Storyful_Cover_Bg {

    // Create Storyful Cover Background Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_cover_bg'));
        add_shortcode('storyful_cover_bg', array($this, 'storyful_cover_bg_html'));
    }

    /**
     * Function is used to create Storyful Cover Background custom element.
     */
    public function storyful_cover_bg() {

        // Storyful Cover Background.
        vc_map(array(
            'name' => __('Storyful Cover Background', 'md-bakery-antian'),
            'base' => 'storyful_cover_bg',
            'params' => array(
                // Background Image
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'bg_image',
                    'value' => '',
                    'description' => __('Upload background image.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Background Image Position
                array(
                    'type' => 'dropdown',
                    'heading' => __('Background Image Position', 'md-bakery-antian'),
                    'param_name' => 'bg_image_position',
                    'value' => array(
                        'Top Left' => 'top left',
                        'Top Center' => 'top center',
                        'Top Right' => 'top right',
                        'Center Left' => 'center left',
                        'Center Center' => 'center center',
                        'Center Right' => 'center right',
                        'Bottom Left' => 'bottom left',
                        'Bottom Center' => 'bottom center',
                        'Bottom Right' => 'bottom right',
                    ),
                    'description' => __('Select background image position.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Background Image Size
                array(
                    'type' => 'dropdown',
                    'heading' => __('Background Image Size', 'md-bakery-antian'),
                    'param_name' => 'bg_image_size',
                    'value' => array(
                        'Auto' => 'auto',
                        'Cover' => 'cover',
                        'Contain' => 'contain',
                    ),
                    'description' => __('Select background image size.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Background Image Repeat
                array(
                    'type' => 'dropdown',
                    'heading' => __('Background Image Repeat', 'md-bakery-antian'),
                    'param_name' => 'bg_image_repeat',
                    'value' => array(
                        'No Repeat' => 'no-repeat',
                        'Repeat' => 'repeat',
                        'Repeat X' => 'repeat-x',
                        'Repeat Y' => 'repeat-y',
                    ),
                    'description' => __('Select background image repeat.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Background Image Attachment
                array(
                    'type' => 'dropdown',
                    'heading' => __('Background Image Attachment', 'md-bakery-antian'),
                    'param_name' => 'bg_image_attachment',
                    'value' => array(
                        'Scroll' => 'scroll',
                        'Fixed' => 'fixed',
                    ),
                    'description' => __('Select background image attachment.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-single-image',
        ));
    }

    /**
     * Function is used to display Storyful Cover Background html.
     */
    public function storyful_cover_bg_html($atts) {

        $atts = shortcode_atts(
            array(
                'bg_image' => '',
                'bg_image_position' => 'center center',
                'bg_image_size' => 'cover',
                'bg_image_repeat' => 'no-repeat',
                'bg_image_attachment' => 'fixed',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="storyful-cover-bg">
            <div class="storyful-cover-bg-inner" style="background-image: url(<?php echo esc_url(wp_get_attachment_url($atts['bg_image'])); ?>); background-position: <?php echo esc_attr($atts['bg_image_position']); ?>; background-size: <?php echo esc_attr($atts['bg_image_size']); ?>; background-repeat: <?php echo esc_attr($atts['bg_image_repeat']); ?>; background-attachment: <?php echo esc_attr($atts['bg_image_attachment']); ?>;">
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}