<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Three_Column_Image class
 * 
 * @since 1.0.0
 */
class Pointcentral_Three_Column_Image {

    // Create Pointcentral Three Column Image Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_three_column_image'));
        add_shortcode('pointcentral_three_column_image', array($this, 'pointcentral_three_column_image_html'));
    }

    /**
     * Function is used to create Pointcentral Three Column Image custom element.
     */
    public function pointcentral_three_column_image() {

        // Pointcentral Three Column Image.
        vc_map(array(
            'name' => __('Pointcentral Three Column Image', 'md-bakery-antian'),
            'base' => 'pointcentral_three_column_image',
            'params' => array(
                // Three Column Image Text.
                array(
                    'type' => 'textfield',
                    'heading' => __('Three Column Image Text', 'md-bakery-antian'),
                    'param_name' => 'three_column_image_text',
                    'value' => '',
                    'description' => __('Enter three column image text.', 'md-bakery-antian'),
                ),
                // Three Column Images List.
                array(
                    'type' => 'param_group',
                    'heading' => __('Three Column Images List', 'md-bakery-antian'),
                    'param_name' => 'three_column_images_list',
                    'value' => '',
                    'params' => array(
                        // Three Column Image.
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Three Column Image', 'md-bakery-antian'),
                            'param_name' => 'three_column_image',
                            'value' => '',
                            'description' => __('Select three column image.', 'md-bakery-antian'),
                        ),
                    ),
                    'description' => __('Add three column images.', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-images-stack',
        ));
    }

    /**
     * Function is used to display Pointcentral Three Column Image html.
     */
    public function pointcentral_three_column_image_html($atts) {

        $atts = shortcode_atts(
            array(
                'three_column_image_text' => '',
                'three_column_images_list' => '',
            ),
            $atts
        );
        $three_column_images_list = array();
        if (!empty($atts['three_column_images_list'])) {
            $three_column_images_list = vc_param_group_parse_atts($atts['three_column_images_list']);
        }
        ob_start();
        ?>
        <div class="three-column-image">
            <div class="container">
                <div class="three-column-image__inner">
                    <div class="three-column-image-title">
                        <h2><?php echo wp_kses_post($atts['three_column_image_text']); ?></h2>
                    </div>
                    <div class="three-column-image-list">
                        <?php
                        if (!empty($three_column_images_list)) {
                            foreach ($three_column_images_list as $three_column_image) {
                                if (isset($three_column_image['three_column_image']) && !empty($three_column_image['three_column_image'])) {
                                ?>
                                <div class="three-column-image-item">
                                    <img src="<?php echo esc_url(wp_get_attachment_url($three_column_image['three_column_image'])); ?>" alt="">
                                </div>
                                <?php
                                }
                            }
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}