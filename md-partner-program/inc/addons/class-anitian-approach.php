<?php
/**
 * The Anitian Approach functionality of the plugin.
 *
 * @package    MD_Partner_Program
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Partner_Program\Inc\Addons;


/**
 * Anitian_Approach class
 * 
 * @since 1.0.0
 */
class Anitian_Approach {

    // Create Anitian Approach Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'anitian_approach'));
        add_shortcode('anitian_approach', array($this, 'anitian_approach_html'));
    }

    /**
     * Function is used to create anitian_approach custom element.
     */
    public function anitian_approach() {

        // Anitian Approach With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Anitian Approach', 'md-bakery-antian'),
            'base' => 'anitian_approach',
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
                // Button
                array(
                    'type' => 'vc_link',
                    'heading' => __('Button', 'md-bakery-antian'),
                    'param_name' => 'button',
                    'value' => '',
                    'description' => __('Add button.', 'md-bakery-antian'),
                ),
                // Anitian Approaches.
                array(
                    'type' => 'param_group',
                    'heading' => __('Anitian Approaches Items', 'md-bakery-antian'),
                    'param_name' => 'anitian_approaches_items',
                    'value' => '',
                    'params' => array(
                        // Approach Content
                        array(
                            'type' => 'textarea',
                            'heading' => __('Approach Content', 'md-bakery-antian'),
                            'param_name' => 'approach_content',
                            'value' => '',
                            'description' => __('Enter content.', 'md-bakery-antian'),
                        ),
                    ),
                ),
            ),

            'icon' => 'icon-wpb-call-to-action',
        ));
    }

    /**
     * Function is used to display Anitian Approach html.
     */
    public function anitian_approach_html($atts) {
        $atts = shortcode_atts(
            array(
                'heading' => '',
                'description' => '',
                'button' => '',
                'anitian_approaches_items' => array(),
            ),
            $atts
        );
        $anitian_approaches_items = [];
        if (isset($atts['anitian_approaches_items']) && !empty($atts['anitian_approaches_items'])){
            $anitian_approaches_items = vc_param_group_parse_atts($atts['anitian_approaches_items']);
        }
        $approach_button = vc_build_link($atts['button']);
        ob_start();
        ?>
        <div class="bakery_partner__anitian_approach">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bakery_partner__anitian_approach__inner">
                            <div class="bakery_partner__anitian_approach__heading">
                                <div class="md_bakery_partner_pre_text">
                                    <img class="md_bakery_partner_pre_text__image" src="<?php echo esc_url(MD_PARTNER_PROGRAM_URL . '/assets/src/images/2-blocks-Accelerate-icon.png'); ?>" alt="pre-text" />
                                    <h2><?php echo esc_html($atts['heading']); ?></h2>
                                </div>
                                <p><?php echo wp_kses_post($atts['description']); ?></p>
                                <?php if (!empty($approach_button['url'])) : ?>
                                    <div class="bakery_anitian_approaches_button">
                                        <a href="<?php echo esc_url($approach_button['url']); ?>" class="btn btn-primary"><?php echo esc_html($approach_button['title']); ?></a>
                                    </div>
                                <?php endif; ?>
                            </div>
                            <div class="bakery_anitian_approaches_items" >
                                <?php foreach ($anitian_approaches_items as $slide) : 
                                    if (!empty($slide)) :
                                    ?>
                                    <div class="anitian_approaches_item">
                                        <i class="anitian-approach__icon fa fa-check is-small"></i>
                                        <p><?php echo esc_html($slide['approach_content']); ?></p>
                                    </div>
                                <?php 
                                    endif;
                                endforeach; ?>
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