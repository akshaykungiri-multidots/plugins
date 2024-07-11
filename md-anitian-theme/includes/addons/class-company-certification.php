<?php
/**
 * The Company Certification functionality of the plugin.
 *
 * @package    MD_ANITIAN
 * @author     Multidots <info@multidots.com>
 */

namespace MD_ANITIAN\Includes\Addons;


/**
 * Company_Certification class
 * 
 * @since 1.0.0
 */
class Company_Certification {

    // Create Company Certification Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'company_certification'));
        add_shortcode('company_certification', array($this, 'company_certification_html'));
    }

    /**
     * Function is used to create Company Certification custom element.
     */
    public function company_certification() {

        // Company Certification.
        vc_map(array(
            'name' => __('Company Certification', 'md-bakery-antian'),
            'base' => 'company_certification',
            'params' => array(
                // Title
                array(
                    'type' => 'textfield',
                    'heading' => __('Title', 'md-bakery-antian'),
                    'param_name' => 'title',
                    'value' => '',
                    'description' => __('Enter title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Content
                array(
                    'type' => 'textarea',
                    'heading' => __('Heading Content', 'md-bakery-antian'),
                    'param_name' => 'heading_content',
                    'value' => '',
                    'description' => __('Enter content.', 'md-bakery-antian'),
                ),
                // Certificates
                array(
                    'type' => 'param_group',
                    'value' => '',
                    'param_name' => 'company_certification__certificates',
                    'heading' => __('Certificates', 'md-bakery-antian'),
                    'min' => 3,
                    'max' => 3,
                    'params' => array(
                        array(
                            'type' => 'textfield',
                            'heading' => __('Certificate Title', 'md-bakery-antian'),
                            'param_name' => 'certificate_title',
                            'value' => '',
                            'description' => __('Enter Certificate title.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                        array(
                            'type' => 'textarea',
                            'heading' => __('Certificate Description', 'md-bakery-antian'),
                            'param_name' => 'certificate_description',
                            'value' => '',
                            'description' => __('Enter certificate description.', 'md-bakery-antian'),
                        ),
                    ),
                ),
                // Certifcation Partners.
                array(
                    'type' => 'param_group',
                    'value' => '',
                    'param_name' => 'company_certification__partners',
                    'heading' => __('Certification Partners', 'md-bakery-antian'),
                    'min' => 3,
                    'max' => 3,
                    'params' => array(
                        // Partner Image.
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Partner Image', 'md-bakery-antian'),
                            'param_name' => 'partner_image',
                            'value' => '',
                            'description' => __('Upload partner image.', 'md-bakery-antian'),
                        ),
                        // Partner Title
                        array(
                            'type' => 'textfield',
                            'heading' => __('Partner Title', 'md-bakery-antian'),
                            'param_name' => 'partner_title',
                            'value' => '',
                            'description' => __('Enter partner title.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                        // Partner Certificates Lists
                        array(
                            'type' => 'param_group',
                            'value' => '',
                            'param_name' => 'partner_certificates',
                            'heading' => __('Partner Certificates', 'md-bakery-antian'),
                            'min' => 3,
                            'max' => 3,
                            'params' => array(
                                array(
                                    'type' => 'textfield',
                                    'heading' => __('Certificate Title', 'md-bakery-antian'),
                                    'param_name' => 'certificate_title',
                                    'value' => '',
                                    'description' => __('Enter Certificate title.', 'md-bakery-antian'),
                                    'admin_label' => true,
                                ),
                            ),
                        ),
                    ),
                ),
            ),
            'category' => __('Antian', 'md-bakery-antian'),
            'icon' => 'icon-wpb-layout_sidebar',
        ));
    }

    /**
     * Function is used to display Company Certification html.
     */
    public function company_certification_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'heading_content' => '',
                'company_certification__certificates' => '',
                'company_certification__partners' => '',
            ),
            $atts
        );
        $company_certification__certificates = [];
        if (isset($atts['company_certification__certificates']) && !empty($atts['company_certification__certificates'])){
            $company_certification__certificates = vc_param_group_parse_atts($atts['company_certification__certificates']);
        }
        $company_certification__partners = [];
        if (isset($atts['company_certification__partners']) && !empty($atts['company_certification__partners'])){
            $company_certification__partners = vc_param_group_parse_atts($atts['company_certification__partners']);
        }
        ob_start();
        ?>
        <div class="md_anitian_company_certification" >
            <div class="full_width">
                <div class="md_anitian_company_certification__inner">
                    <div class="md_anitian_company_certification__left">
                        <div class="md_anitian_company_certification__heading">
                            <h2><?php echo esc_html($atts['title']); ?></h2>
                            <p><?php echo esc_html($atts['heading_content']); ?></p>
                        </div>
                        <div class="md_anitian_company_certification__certificates">
                            <?php
                            if (!empty($company_certification__certificates)) {
                                foreach ($company_certification__certificates as $certificate) {
                                    if (empty($certificate['certificate_title'])) {
                                        continue;
                                    }
                                    ?>
                                    <div class="md_anitian_company_certification__certificate">
                                        <h3><?php echo esc_html($certificate['certificate_title']); ?></h3>
                                        <p><?php echo esc_html($certificate['certificate_description']); ?></p>
                                    </div>
                                    <?php
                                }
                            }
                            ?>
                        </div>
                    </div>
                    <div class="md_anitian_company_certification__right">
                        <div class="md_anitian_company_certification__partner_items">
                            <?php
                            if (!empty($company_certification__partners)) {
                                foreach ($company_certification__partners as $partner) {
                                    if (empty($partner['partner_title'])) {
                                        continue;
                                    }
                                    $partner_certificates = [];
                                    if (isset($partner['partner_certificates']) && !empty($partner['partner_certificates'])){
                                        $partner_certificates = vc_param_group_parse_atts($partner['partner_certificates']);
                                    }
                                    ?>
                                    <div class="md_anitian_company_certification__partner_item">
                                        <div class="md_anitian_company_certification__partner_image">
                                            <?php
                                            if (!empty($partner['partner_image'])) {
                                                echo wp_get_attachment_image($partner['partner_image'], 'full');
                                            }
                                            ?>
                                        </div>
                                        <div class="md_anitian_company_certification__partner_content">
                                            <h3><?php echo esc_html($partner['partner_title']); ?></h3>
                                            <ul>
                                                <?php
                                                if (!empty($partner_certificates)) {
                                                    foreach ($partner_certificates as $certificate) {
                                                        ?>
                                                        <li>
                                                            <i class="fa fa-check-square-o"></i>
                                                            <p><?php echo esc_html($certificate['certificate_title']); ?></p>
                                                        </li>
                                                        <?php
                                                    }
                                                }
                                                ?>
                                            </ul>
                                        </div>
                                    </div>
                                    <?php
                                }
                            }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}