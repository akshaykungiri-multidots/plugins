<?php
/**
 * The Partner Level functionality of the plugin.
 *
 * @package    MD_Partner_Program
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Partner_Program\Inc\Addons;


/**
 * Partner_Levels class
 * 
 * @since 1.0.0
 */
class Partner_Levels {

    // Create Partner Level Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'partner_level'));
        add_shortcode('partner_level', array($this, 'partner_level_html'));
    }

    /**
     * Function is used to create partner_level custom element.
     */
    public function partner_level() {

        // Partner Level With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Partner Level', 'md-bakery-antian'),
            'base' => 'partner_level',
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
                // Description
                array(
                    'type' => 'textarea',
                    'heading' => __('Description', 'md-bakery-antian'),
                    'param_name' => 'description',
                    'value' => '',
                    'description' => __('Enter description.', 'md-bakery-antian'),
                ),
                // Partner Levels.
                array(
                    'type' => 'param_group',
                    'heading' => __('Partner Levels', 'md-bakery-antian'),
                    'param_name' => 'partner_levels',
                    'value' => '',
                    'params' => array(
                        // Title Pre Image
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Title Pre Image', 'md-bakery-antian'),
                            'param_name' => 'title_pre_image',
                            'value' => '',
                            'description' => __('Upload title pre image.', 'md-bakery-antian'),
                        ),
                        array(
                            'type' => 'textfield',
                            'heading' => __('Box Title', 'md-bakery-antian'),
                            'param_name' => 'box_title',
                            'value' => '',
                            'description' => __('Enter title.', 'md-bakery-antian'),
                        ),
                        // Box Content
                        array(
                            'type' => 'textarea',
                            'heading' => __('Box Content', 'md-bakery-antian'),
                            'param_name' => 'box_content',
                            'value' => '',
                            'description' => __('Enter content.', 'md-bakery-antian'),
                        ),
                    ),
                ),
                // Partner Levels Image
                array(
                    'type' => 'attach_image',
                    'heading' => __('Partner Levels Image', 'md-bakery-antian'),
                    'param_name' => 'partner_levels_image',
                    'value' => '',
                    'description' => __('Upload partner levels image.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
            ),
            'icon' => 'icon-wpb-layout_sidebar',
        ));
    }

    /**
     * Function is used to display Partner Level html.
     */
    public function partner_level_html($atts) {
        $atts = shortcode_atts(
            array(
                'heading' => '',
                'description' => '',
                'partner_levels' => array(),
                'partner_levels_image' => '',
            ),
            $atts
        );
        $image_boxes = [];
        if (isset($atts['partner_levels']) && !empty($atts['partner_levels'])){
            $image_boxes = vc_param_group_parse_atts($atts['partner_levels']);
        }
        ob_start();
        ?>
        <div class="bakery_partner_levels">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bakery_partner_levels__inner">
                            <div class="bakery_partner_levels__left">
                                <div class="bakery_partner_levels__heading">
                                    <div class="md_bakery_partner_pre_text">
                                        <img class="md_bakery_partner_pre_text__image" src="<?php echo esc_url(MD_PARTNER_PROGRAM_URL . '/assets/src/images/2-blocks-Accelerate-icon.png'); ?>" alt="pre-text" />
                                        <h2><?php echo esc_html($atts['heading']); ?></h2>
                                    </div>
                                    <p><?php echo wp_kses_post($atts['description']); ?></p>
                                </div>
                                <div class="bakery_antian__box" >
                                    <?php 
                                    foreach ($image_boxes as $slide) : 
                                        if (!empty($slide)) {
                                    ?>
                                        <div class="bakery_antian__box-item">
                                            <div class="md_bakery_partner_pre_text">
                                                <img class="md_bakery_partner_pre_text__image" src="<?php echo esc_url(wp_get_attachment_url($slide['title_pre_image'])); ?>" alt="pre-text" />
                                                <h4><?php echo esc_html($slide['box_title']); ?></h4>
                                            </div>
                                            <p><?php echo esc_html($slide['box_content']); ?></p>
                                        </div>
                                    <?php 
                                        }
                                    endforeach; ?>
                                </div>
                            </div>
                            <div class="bakery_partner_levels__right">
                                <img src="<?php echo esc_url(wp_get_attachment_url($atts['partner_levels_image'])); ?>" />
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