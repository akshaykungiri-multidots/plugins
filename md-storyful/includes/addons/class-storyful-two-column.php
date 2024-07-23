<?php
/**
 * The Storyful Two Column functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Two_Column class
 * 
 * @since 1.0.0
 */
class Storyful_Two_Column {

    // Create Storyful Two Column Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_two_column'));
        add_shortcode('storyful_two_column', array($this, 'storyful_two_column_html'));
    }

    /**
     * Function is used to create Storyful Two Column custom element.
     */
    public function storyful_two_column() {

        // Storyful Two Column.
        vc_map(array(
            'name' => __('Storyful Two Column', 'md-bakery-antian'),
            'base' => 'storyful_two_column',
            'params' => array(
                // Storyful Two Column Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Title', 'md-bakery-antian'),
                    'param_name' => 'title',
                    'value' => '',
                    'description' => __('Enter title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Storyful Two Column Mark Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Mark Title', 'md-bakery-antian'),
                    'param_name' => 'mark_title',
                    'value' => '',
                    'description' => __('Enter mark title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Storyful Two Column Description.
                array(
                    'type' => 'textarea',
                    'heading' => __('Description', 'md-bakery-antian'),
                    'param_name' => 'description',
                    'value' => '',
                    'description' => __('Enter description.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Storyful Two Column Background Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'background_image',
                    'value' => '',
                    'description' => __('Upload background image.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-layer-shape-text',
        ));
    }

    /**
     * Function is used to display Storyful Two Column html.
     */
    public function storyful_two_column_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'mark_title' => '',
                'description' => '',
                'background_image' => '',
            ),
            $atts
        );
        $background_image = wp_get_attachment_image_url($atts['background_image'], 'full');
        ob_start();
        ?>
        <div class="storyful-two-column" style="background-image: url(<?php echo esc_url($background_image); ?>);">
            <div class="container">
                <div class="two-columns__title">
                    <h2>
                        <?php echo esc_html($atts['title']); ?>
                        <mark><?php echo esc_html($atts['mark_title']); ?></mark>
                    </h2>
                </div>
                <div class="two-columns__description wow fadeInRight">
                    <p><?php echo esc_html($atts['description']); ?></p>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}