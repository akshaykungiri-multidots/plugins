<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Image_Box class
 * 
 * @since 1.0.0
 */
class Pointcentral_Image_Box {

    // Create Pointcentral Image Box Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_image_box'));
        add_shortcode('pointcentral_image_box', array($this, 'pointcentral_image_box_html'));
    }

    /**
     * Function is used to create Pointcentral Image Box custom element.
     */
    public function pointcentral_image_box() {

        // Pointcentral Image Box.
        vc_map(array(
            'name' => __('Pointcentral Image Box', 'md-bakery-antian'),
            'base' => 'pointcentral_image_box',
            'params' => array(
                // Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Title', 'md-bakery-antian'),
                    'param_name' => 'image_box_title',
                    'value' => '',
                    'description' => __('Enter title.', 'md-bakery-antian'),
                ),
                // Image Box List.
                array(
                    'type' => 'param_group',
                    'heading' => __('Image Box List', 'md-bakery-antian'),
                    'param_name' => 'image_box_list',
                    'value' => '',
                    'params' => array(
                        // Box Image.
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Box Image', 'md-bakery-antian'),
                            'param_name' => 'box_image',
                            'value' => '',
                            'description' => __('Upload box image.', 'md-bakery-antian'),
                        ),
                        // Box Title.
                        array(
                            'type' => 'textfield',
                            'heading' => __('Box Title', 'md-bakery-antian'),
                            'param_name' => 'box_title',
                            'value' => '',
                            'description' => __('Enter box title.', 'md-bakery-antian'),
                        ),
                        // Box Description.
                        array(
                            'type' => 'textarea',
                            'heading' => __('Box Description', 'md-bakery-antian'),
                            'param_name' => 'box_description',
                            'value' => '',
                            'description' => __('Enter box description.', 'md-bakery-antian'),
                        ),
                    ),
                    'description' => __('Add image box list.', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Pointcentral', 'md-bakery-antian'),
            'icon' => 'icon-wpb-single-image',
        ));
    }

    /**
     * Function is used to display Pointcentral Image Box html.
     */
    public function pointcentral_image_box_html($atts) {

        $atts = shortcode_atts(
            array(
                'image_box_title' => '',
                'solution_features_description' => '',
                'image_box_list' => '',
            ),
            $atts
        );
        $image_box_list = [];
        if (!empty($atts['image_box_list'])) {
            $image_box_list = vc_param_group_parse_atts($atts['image_box_list']);
        }
        ob_start();
        ?>
        <div class="pointcentral-image-boxes">
            <div class="container">
                <div class="image-box-heading">
                    <div class="image-box-heading__inner">
                        <div class="section-title">
                            <h2><?php echo esc_html($atts['image_box_title']); ?></h2>
                        </div>
                    </div>
                </div>
                <div class="image-box-content">
                    <?php
                    if (!empty($image_box_list)) {
                        foreach ($image_box_list as $solution_feature) {
                            $box_title = (isset($solution_feature['box_title']) && !empty($solution_feature['box_title'])) ? $solution_feature['box_title'] : '';
                            $box_description = (isset($solution_feature['box_description']) && !empty($solution_feature['box_description'])) ? $solution_feature['box_description'] : '';
                            ?>
                            <div class="image-box-list__item">
                                <div class="image-box__image">
                                    <?php
                                    if (isset($solution_feature['box_image']) && !empty($solution_feature['box_image'])) {
                                        echo wp_get_attachment_image($solution_feature['box_image'], 'full');
                                    }
                                    ?>
                                </div>
                                <div class="image-box__content">
                                    <h3><?php echo esc_html($box_title); ?></h3>
                                    <p><?php echo esc_html($box_description); ?></p>
                                </div>
                            </div>
                            <?php
                        }
                    }
                    ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}