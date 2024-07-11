<?php
/**
 * The Career Parallex functionality of the plugin.
 *
 * @package    MD_Bakery_Antian
 * @author     Multidots <info@multidots.com>
 */

namespace MD_ANITIAN\Includes\Addons;


/**
 * Career_Parallex class
 * 
 * @since 1.0.0
 */
class Career_Parallex {

    // Create Career Parallex Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'career_parallex'));
        add_shortcode('career_parallex', array($this, 'career_parallex_html'));
    }

    /**
     * Function is used to create career_parallex custom element.
     */
    public function career_parallex() {

        // Career Parallex With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Career Parallex', 'md-bakery-antian'),
            'base' => 'career_parallex',
            'category' => __('Antian', 'md-bakery-antian'),
            // Repeatable field
            'params' => array(

                // Heading
                array(
                    'type' => 'textfield',
                    'heading' => __('Heading', 'md-bakery-antian'),
                    'param_name' => 'heading',
                    'value' => '',
                    'description' => __('Enter heading.', 'md-bakery-antian'),
                ),
                // Description as WYSIWYG
                array(
                    'type' => 'textarea',
                    'heading' => __('Description', 'md-bakery-antian'),
                    'param_name' => 'career_description',
                    'value' => '',
                    'description' => __('Enter Description.', 'md-bakery-antian'),
                ),
                // Background Image
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'background_image',
                    'value' => '',
                    'description' => __('Upload background image.', 'md-bakery-antian'),
                ),
            ),
            'icon' => 'md-icons fa fa-columns',
        ));
    }

    /**
     * Function is used to display image banner html.
     */
    public function career_parallex_html($atts) {
        $atts = shortcode_atts(
            array(
                'heading' => '',
                'career_description' => '',
                'background_image' => '',
            ),
            $atts
        );

        ob_start();
        
        $background_image = wp_get_attachment_image_url($atts['background_image'], 'full');
        ?>
        <div class="bakery_antian__career_parallex">
            <div class="bakery_antian__career_parallex__inner">
                <div class="container" style="background-image: url(<?php echo esc_url($background_image); ?>);">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="bakery_antian__heading">
                                <h2><?php echo esc_html($atts['heading']); ?></h2>
                                <div class="bakery_antian__content">
                                    <?php echo esc_html($atts['career_description']); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}