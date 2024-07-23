<?php
/**
 * The Storyful Client Testimonials functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Client_Testimonials class
 * 
 * @since 1.0.0
 */
class Storyful_Client_Testimonials {

    // Create Storyful Client Testimonials Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_client_testimonials'));
        add_shortcode('storyful_client_testimonials', array($this, 'storyful_client_testimonials_html'));
    }

    /**
     * Function is used to create Storyful Client Testimonials custom element.
     */
    public function storyful_client_testimonials() {

        // Storyful Client Testimonials.
        vc_map(array(
            'name' => __('Storyful Client Testimonials', 'md-bakery-antian'),
            'base' => 'storyful_client_testimonials',
            'params' => array(
                // Section Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Section Title', 'md-bakery-antian'),
                    'param_name' => 'section_title',
                    'value' => '',
                    'description' => __('Enter section title.', 'md-bakery-antian'),
                ),
                // Client Testimonials.
                array(
                    'type' => 'param_group',
                    'heading' => __('Client Testimonials', 'md-bakery-antian'),
                    'param_name' => 'client_testimonials',
                    'value' => '',
                    'params' => array(
                        // Client Testimonial Text.
                        array(
                            'type' => 'textarea',
                            'heading' => __('Client Testimonial Text', 'md-bakery-antian'),
                            'param_name' => 'client_testimonial_text',
                            'value' => '',
                            'description' => __('Enter client testimonial text.', 'md-bakery-antian'),
                        ),
                        // Client Testimonial Title.
                        array(
                            'type' => 'textfield',
                            'heading' => __('Client Testimonial Title', 'md-bakery-antian'),
                            'param_name' => 'client_testimonial_title',
                            'value' => '',
                            'description' => __('Enter client testimonial title.', 'md-bakery-antian'),
                        ),
                        // Client Logo.
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Client Logo', 'md-bakery-antian'),
                            'param_name' => 'client_logo',
                            'value' => '',
                            'description' => __('Upload client logo.', 'md-bakery-antian'),
                        ),
                    ),
                    'description' => __('Add client testimonials.', 'md-bakery-antian'),
                ),
                // Theme Style.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Theme Style', 'md-bakery-antian'),
                    'param_name' => 'theme_style',
                    'value' => array(
                        'Style 1' => 'style1',
                        'Style 2' => 'style2',
                    ),
                    'description' => __('Select theme style.', 'md-bakery-antian'),
                    'group' => __('Style', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-call-to-action',
        ));
    }

    /**
     * Function is used to display Storyful Client Testimonials html.
     */
    public function storyful_client_testimonials_html($atts) {

        $atts = shortcode_atts(
            array(
                'section_title' => '',
                'client_testimonials' => '',
                'theme_style' => 'style1',
            ),
            $atts
        );
        $client_testimonials = array();
        if (!empty($atts['client_testimonials'])) {
            $client_testimonials = vc_param_group_parse_atts($atts['client_testimonials']);
        }
        ob_start();
        ?>
        <div class="storyful-client-testimonials <?php echo esc_attr($atts['theme_style']); ?>">
            <div class="container">
                <?php if (!empty($atts['section_title'])) { ?>
                    <div class="theme-title">
                        <h2 class="section-title"><?php echo wp_kses_post($atts['section_title']); ?></h2>
                    </div>
                <?php } ?>
                <div class="client-testimonials">
                    <?php if (!empty($client_testimonials)) { ?>
                        <?php foreach ($client_testimonials as $client_testimonial) { ?>
                            <div class="client-testimonial">
                                <?php if (!empty($client_testimonial['client_testimonial_text'])) { ?>
                                    <div class="client-testimonial-text">
                                        <?php echo wp_kses_post($client_testimonial['client_testimonial_text']); ?>
                                    </div>
                                <?php } ?>
                                <?php if (!empty($client_testimonial['client_testimonial_title'])) { ?>
                                    <div class="client-testimonial-title">
                                        <?php echo wp_kses_post($client_testimonial['client_testimonial_title']); ?>
                                    </div>
                                <?php } ?>
                                <?php if (!empty($client_testimonial['client_logo'])) { ?>
                                    <div class="client-logo">
                                        <?php echo wp_get_attachment_image($client_testimonial['client_logo'], 'full'); ?>
                                    </div>
                                <?php } ?>
                            </div>
                        <?php } ?>
                    <?php } ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}