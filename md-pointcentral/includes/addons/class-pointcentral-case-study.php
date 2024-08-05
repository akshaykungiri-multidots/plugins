<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Case_Study class
 * 
 * @since 1.0.0
 */
class Pointcentral_Case_Study {

    // Create Pointcentral Case Study Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_case_study'));
        add_shortcode('pointcentral_case_study', array($this, 'pointcentral_case_study_html'));
    }

    /**
     * Function is used to create Pointcentral Case Study custom element.
     */
    public function pointcentral_case_study() {

        // Pointcentral Case Study.
        vc_map(array(
            'name' => __('Pointcentral Case Study', 'md-bakery-antian'),
            'base' => 'pointcentral_case_study',
            'params' => array(
                // Case Study Background Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'image_banner_background_image',
                    'value' => '',
                    'description' => __('Select background image.', 'md-bakery-antian'),
                ),
                // Case Study Box Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Box Color', 'md-bakery-antian'),
                    'param_name' => 'image_banner_box_color',
                    'value' => '',
                    'description' => __('Select box color.', 'md-bakery-antian'),
                ),
                // Case Study Link.
                array(
                    'type' => 'vc_link',
                    'heading' => __('Case Study Link', 'md-bakery-antian'),
                    'param_name' => 'image_banner_link',
                    'value' => '',
                    'description' => __('Enter case study link.', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Pointcentral', 'md-bakery-antian'),
            'icon' => 'icon-wpb-vc_icon',
        ));
    }

    /**
     * Function is used to display Pointcentral Case Study html.
     */
    public function pointcentral_case_study_html($atts) {

        $atts = shortcode_atts(
            array(
                'image_banner_background_image' => '',
                'image_banner_box_color' => '',
                'image_banner_link' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="pointcentral-case-study">
            <div class="pointcentral-case-study-box" style="background-image: url(<?php echo esc_url(wp_get_attachment_image_url($atts['image_banner_background_image'], 'full')); ?>);">
                <div class="container">
                <?php if (!empty($atts['image_banner_link'])) : 
                    $image_banner_link = vc_build_link($atts['image_banner_link']);
                    ?>
                    <div class="pointcentral-case-study-box-inner" style="background-color: <?php echo esc_attr($atts['image_banner_box_color']); ?>">
                        <a href="<?php echo esc_url($image_banner_link['url']); ?>" target="<?php echo esc_attr($image_banner_link['target']); ?>">
                            <?php echo esc_html($image_banner_link['title']); ?>
                        </a>
                    </div>
                <?php endif; ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}