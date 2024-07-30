<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Partners class
 * 
 * @since 1.0.0
 */
class Pointcentral_Partners {

    // Create Pointcentral Partners Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_partners'));
        add_shortcode('pointcentral_partners', array($this, 'pointcentral_partners_html'));
    }

    /**
     * Function is used to create Pointcentral Partners custom element.
     */
    public function pointcentral_partners() {

        // Pointcentral Partners.
        vc_map(array(
            'name' => __('Pointcentral Partners', 'md-bakery-antian'),
            'base' => 'pointcentral_partners',
            'params' => array(
                // Storyful Partners Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Storyful Partners Title', 'md-bakery-antian'),
                    'param_name' => 'storyful_partners_title',
                    'value' => '',
                    'description' => __('Enter storyful partners title.', 'md-bakery-antian'),
                ),
                // Storyful Partners Description.
                array(
                    'type' => 'textarea',
                    'heading' => __('Storyful Partners Description', 'md-bakery-antian'),
                    'param_name' => 'storyful_partners_description',
                    'value' => '',
                    'description' => __('Enter storyful partners description.', 'md-bakery-antian'),
                ),
                // Storyful Partner Section 1 Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Storyful Partner Section 1 Title', 'md-bakery-antian'),
                    'param_name' => 'storyful_partner_section_1_title',
                    'value' => '',
                    'description' => __('Enter storyful partner section 1 title.', 'md-bakery-antian'),
                ),
                // Storyful Partner Section 1 Logos.
                array(
                    'type' => 'param_group',
                    'heading' => __('Storyful Partner Section 1 Logos', 'md-bakery-antian'),
                    'param_name' => 'storyful_partner_section_1_logos',
                    'value' => '',
                    'params' => array(
                        // Storyful Partner Section 1 Logo.
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Storyful Partner Section 1 Logo', 'md-bakery-antian'),
                            'param_name' => 'storyful_partner_section_1_logo',
                            'value' => '',
                            'description' => __('Upload storyful partner section 1 logo.', 'md-bakery-antian'),
                        ),
                        // Storyful Partner Section 1 Logo Link.
                        array(
                            'type' => 'vc_link',
                            'heading' => __('Storyful Partner Section 1 Logo Link', 'md-bakery-antian'),
                            'param_name' => 'storyful_partner_section_1_logo_link',
                            'value' => '',
                            'description' => __('Enter storyful partner section 1 logo link.', 'md-bakery-antian'),
                        ),
                    ),
                    'description' => __('Add storyful partner section 1 logos.', 'md-bakery-antian'),
                ),
                // Storyful Partner Section 2 Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Storyful Partner Section 2 Title', 'md-bakery-antian'),
                    'param_name' => 'storyful_partner_section_2_title',
                    'value' => '',
                    'description' => __('Enter storyful partner section 2 title.', 'md-bakery-antian'),
                ),
                // Storyful Partner Section 2 Logos.
                array(
                    'type' => 'param_group',
                    'heading' => __('Storyful Partner Section 2 Logos', 'md-bakery-antian'),
                    'param_name' => 'storyful_partner_section_2_logos',
                    'value' => '',
                    'params' => array(
                        // Storyful Partner Section 2 Logo.
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Storyful Partner Section 2 Logo', 'md-bakery-antian'),
                            'param_name' => 'storyful_partner_section_2_logo',
                            'value' => '',
                            'description' => __('Upload storyful partner section 2 logo.', 'md-bakery-antian'),
                        ),
                        // Storyful Partner Section 2 Logo Link.
                        array(
                            'type' => 'vc_link',
                            'heading' => __('Storyful Partner Section 2 Logo Link', 'md-bakery-antian'),
                            'param_name' => 'storyful_partner_section_2_logo_link',
                            'value' => '',
                            'description' => __('Enter storyful partner section 2 logo link.', 'md-bakery-antian'),
                        ),
                    ),
                    'description' => __('Add storyful partner section 2 logos.', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-images-stack',
        ));
    }

    /**
     * Function is used to display Pointcentral Partners html.
     */
    public function pointcentral_partners_html($atts) {

        $atts = shortcode_atts(
            array(
                'storyful_partners_title' => '',
                'storyful_partners_description' => '',
                'storyful_partner_section_1_title' => '',
                'storyful_partner_section_1_logos' => '',
                'storyful_partner_section_2_title' => '',
                'storyful_partner_section_2_logos' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <section class="pointcentral-partners">
            <div class="container">
                <div class="pointcentral-partners-heading">
                    <h2><?php echo esc_html($atts['storyful_partners_title']); ?></h2>
                    <p><?php echo esc_html($atts['storyful_partners_description']); ?></p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="pointcentral-partners-content">
                            <div class="pointcentral-partners-section">
                                <h3><?php echo esc_html($atts['storyful_partner_section_1_title']); ?></h3>
                                <div class="pointcentral-partners-logos">
                                    <?php
                                    if (!empty($atts['storyful_partner_section_1_logos'])) {
                                        $storyful_partner_section_1_logos = vc_param_group_parse_atts($atts['storyful_partner_section_1_logos']);
                                        foreach ($storyful_partner_section_1_logos as $logo) {
                                            if (isset($logo['storyful_partner_section_1_logo']) && isset($logo['storyful_partner_section_1_logo_link'])) {
                                                $storyful_partner_section_1_logo_link = vc_build_link($logo['storyful_partner_section_1_logo_link']);
                                            ?>
                                                <a href="<?php echo esc_url($storyful_partner_section_1_logo_link['url']); ?>" target="<?php echo esc_attr($storyful_partner_section_1_logo_link['target']); ?>">
                                                    <img src="<?php echo esc_url(wp_get_attachment_url($logo['storyful_partner_section_1_logo'])); ?>" alt="">
                                                </a>
                                            <?php
                                            }
                                        }
                                    }
                                    ?>
                                </div>
                            </div>
                            <div class="pointcentral-divider-wrap"></div>
                            <div class="pointcentral-partners-section">
                                <h3><?php echo esc_html($atts['storyful_partner_section_2_title']); ?></h3>
                                <div class="pointcentral-partners-logos">
                                    <?php
                                    if (!empty($atts['storyful_partner_section_2_logos'])) {
                                        $storyful_partner_section_2_logos = vc_param_group_parse_atts($atts['storyful_partner_section_2_logos']);
                                        foreach ($storyful_partner_section_2_logos as $logo) {
                                            if (isset($logo['storyful_partner_section_2_logo']) && isset($logo['storyful_partner_section_2_logo_link'])) {
                                                $storyful_partner_section_2_logo_link = vc_build_link($logo['storyful_partner_section_2_logo_link']);
                                            ?>
                                                <a href="<?php echo esc_url($storyful_partner_section_2_logo_link['url']); ?>" target="<?php echo esc_attr($storyful_partner_section_2_logo_link['target']); ?>">
                                                    <img src="<?php echo esc_url(wp_get_attachment_url($logo['storyful_partner_section_2_logo'])); ?>" alt="">
                                                </a>
                                            <?php
                                            }
                                        }
                                    }
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php
        return ob_get_clean();
    }

}