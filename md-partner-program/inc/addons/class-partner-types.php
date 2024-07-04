<?php
/**
 * The Partner Type functionality of the plugin.
 *
 * @package    MD_Partner_Program
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Partner_Program\Inc\Addons;


/**
 * Partner_Types class
 * 
 * @since 1.0.0
 */
class Partner_Types {

    // Create Partner Type Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'partner_type'));
        add_shortcode('partner_type', array($this, 'partner_type_html'));
    }

    /**
     * Function is used to create partner_type custom element.
     */
    public function partner_type() {

        // Partner Type With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Partner Type', 'md-bakery-antian'),
            'base' => 'partner_type',
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
                // Partner Types.
                array(
                    'type' => 'param_group',
                    'heading' => __('Partner Types', 'md-bakery-antian'),
                    'param_name' => 'partner_types',
                    'value' => '',
                    'params' => array(
                        // Card Color.
                        array(
                            'type' => 'colorpicker',
                            'heading' => __('Card Top Border Color', 'md-bakery-antian'),
                            'param_name' => 'card_color',
                            'value' => '',
                            'description' => __('Select card top border color.', 'md-bakery-antian'),
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
                        // Learn More Link
                        array(
                            'type' => 'vc_link',
                            'heading' => __('Link', 'md-bakery-antian'),
                            'param_name' => 'link',
                            'value' => '',
                            'description' => __('Enter link.', 'md-bakery-antian'),
                        ),
                        // Partner Logo
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Partner Logo', 'md-bakery-antian'),
                            'param_name' => 'partner_logo',
                            'value' => '',
                            'description' => __('Upload partner logo.', 'md-bakery-antian'),
                        ),
                    ),
                ),
            ),
            'icon' => 'icon-wpb-slideshow',
        ));
    }

    /**
     * Function is used to display Partner Type html.
     */
    public function partner_type_html($atts) {
        $atts = shortcode_atts(
            array(
                'heading' => '',
                'partner_types' => array(),
            ),
            $atts
        );
        $image_boxes = [];
        if (isset($atts['partner_types']) && !empty($atts['partner_types'])){
            $image_boxes = vc_param_group_parse_atts($atts['partner_types']);
        }
        ob_start();
        ?>
        <div class="bakery_partner__partner_types">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bakery_partner__partner_types__heading">
                            <div class="md_bakery_partner_pre_text">
                                <img class="md_bakery_partner_pre_text__image" src="<?php echo esc_url(MD_PARTNER_PROGRAM_URL . '/assets/src/images/2-blocks-Accelerate-icon.png'); ?>" alt="pre-text" />
                                <h2><?php echo esc_html($atts['heading']); ?></h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bakery_antian__box" >
                            <?php 
                            foreach ($image_boxes as $slide) : 
                                if (!empty($slide)) {
                                $learn_more_link = vc_build_link($slide['link']);
                            ?>
                                <div class="bakery_antian__box-item" style="border-top: 5px solid <?php echo esc_attr($slide['card_color']); ?>">
                                    <div class="bakery_antian__box-content">
                                        <div class="md_bakery_partner_pre_text">
                                            <img class="md_bakery_partner_pre_text__image" src="<?php echo esc_url(MD_PARTNER_PROGRAM_URL . '/assets/src/images/2-blocks-Accelerate-icon.png'); ?>" alt="pre-text" />
                                            <h4><?php echo esc_html($slide['box_title']); ?></h4>
                                        </div>
                                        <p><?php echo esc_html($slide['box_content']); ?></p>
                                        <?php if (!empty($learn_more_link['url'])) : ?>
                                            <a href="<?php echo esc_url($learn_more_link['url']); ?>" class="bakery_antian__box-link"><?php echo esc_html($learn_more_link['title']); ?></a>
                                        <?php endif; ?>
                                    </div>
                                    <div class="bakery_antian__box-partner_logo">
                                        <img src="<?php echo esc_url(wp_get_attachment_image_url($slide['partner_logo'], 'full')); ?>" alt="partner-logo" />
                                    </div>
                                </div>
                            <?php 
                                }
                            endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}