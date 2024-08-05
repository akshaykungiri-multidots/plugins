<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Solution_Features class
 * 
 * @since 1.0.0
 */
class Pointcentral_Solution_Features {

    // Create Pointcentral Solution Features Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_solution_features'));
        add_shortcode('pointcentral_solution_features', array($this, 'pointcentral_solution_features_html'));
    }

    /**
     * Function is used to create Pointcentral Solution Features custom element.
     */
    public function pointcentral_solution_features() {

        // Pointcentral Solution Features.
        vc_map(array(
            'name' => __('Pointcentral Solution Features', 'md-bakery-antian'),
            'base' => 'pointcentral_solution_features',
            'params' => array(
                // Solution Features Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Solution Features Title', 'md-bakery-antian'),
                    'param_name' => 'solution_features_title',
                    'value' => '',
                    'description' => __('Enter solution features title.', 'md-bakery-antian'),
                ),
                // Solution Features Description.
                array(
                    'type' => 'textarea',
                    'heading' => __('Solution Features Description', 'md-bakery-antian'),
                    'param_name' => 'solution_features_description',
                    'value' => '',
                    'description' => __('Enter solution features description.', 'md-bakery-antian'),
                ),
                // Solution Features List.
                array(
                    'type' => 'param_group',
                    'heading' => __('Solution Features List', 'md-bakery-antian'),
                    'param_name' => 'solution_features_list',
                    'value' => '',
                    'params' => array(
                        // Solution Feature Image.
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Solution Feature Image', 'md-bakery-antian'),
                            'param_name' => 'solution_feature_image',
                            'value' => '',
                            'description' => __('Upload solution feature image.', 'md-bakery-antian'),
                        ),
                        // Solution Feature Title.
                        array(
                            'type' => 'textfield',
                            'heading' => __('Solution Feature Title', 'md-bakery-antian'),
                            'param_name' => 'solution_feature_title',
                            'value' => '',
                            'description' => __('Enter solution feature title.', 'md-bakery-antian'),
                        ),
                        // Solution Feature Description.
                        array(
                            'type' => 'textarea',
                            'heading' => __('Solution Feature Description', 'md-bakery-antian'),
                            'param_name' => 'solution_feature_description',
                            'value' => '',
                            'description' => __('Enter solution feature description.', 'md-bakery-antian'),
                        ),
                    ),
                    'description' => __('Add solution features list.', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Pointcentral', 'md-bakery-antian'),
            'icon' => 'icon-wpb-graph',
        ));
    }

    /**
     * Function is used to display Pointcentral Solution Features html.
     */
    public function pointcentral_solution_features_html($atts) {

        $atts = shortcode_atts(
            array(
                'solution_features_title' => '',
                'solution_features_description' => '',
                'solution_features_list' => '',
            ),
            $atts
        );
        $solution_features_list = [];
        if (!empty($atts['solution_features_list'])) {
            $solution_features_list = vc_param_group_parse_atts($atts['solution_features_list']);
        }
        ob_start();
        ?>
        <div class="pointcentral-solution-features">
            <div class="container">
                <div class="solution-features-heading">
                    <div class="solution-features-heading__inner">
                        <div class="section-title">
                            <h2><?php echo esc_html($atts['solution_features_title']); ?></h2>
                            <p><?php echo wp_kses_post($atts['solution_features_description']); ?></p>
                        </div>
                    </div>
                </div>
                <div class="solution-features-content">
                    <?php
                    if (!empty($solution_features_list)) {
                        foreach ($solution_features_list as $solution_feature) {
                            $solution_feature_title = (isset($solution_feature['solution_feature_title']) && !empty($solution_feature['solution_feature_title'])) ? $solution_feature['solution_feature_title'] : '';
                            $solution_feature_description = (isset($solution_feature['solution_feature_description']) && !empty($solution_feature['solution_feature_description'])) ? $solution_feature['solution_feature_description'] : '';
                            ?>
                            <div class="solution-features-list__item">
                                <div class="solution-feature-image">
                                    <?php
                                    if (isset($solution_feature['solution_feature_image']) && !empty($solution_feature['solution_feature_image'])) {
                                        echo wp_get_attachment_image($solution_feature['solution_feature_image'], 'full');
                                    }
                                    ?>
                                </div>
                                <div class="solution-feature-content">
                                    <h3><?php echo esc_html($solution_feature_title); ?></h3>
                                    <p><?php echo esc_html($solution_feature_description); ?></p>
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