<?php
/**
 * The Storyful Leadership Author Box functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Leadership_Author_Box class
 * 
 * @since 1.0.0
 */
class Storyful_Leadership_Author_Box {

    // Create Storyful Leadership Author Box Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_leadership_author_box'));
        add_shortcode('storyful_leadership_author_box', array($this, 'storyful_leadership_author_box_html'));
    }

    /**
     * Function is used to create Storyful Leadership Author Box custom element.
     */
    public function storyful_leadership_author_box() {

        // Storyful Leadership Author Box.
        vc_map(array(
            'name' => __('Storyful Leadership Author Box', 'md-bakery-antian'),
            'base' => 'storyful_leadership_author_box',
            'params' => array(
                // Leadership Author Box Title
                array(
                    'type' => 'textfield',
                    'heading' => __('Title', 'md-bakery-antian'),
                    'param_name' => 'title',
                    'value' => '',
                    'description' => __('Enter title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Leadership Author Box List
                array(
                    'type' => 'param_group',
                    'heading' => __('Leadership Author Box List', 'md-bakery-antian'),
                    'param_name' => 'leadership_author_box_list',
                    'value' => '',
                    'params' => array(
                        // Leadership Author Box Image
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Image', 'md-bakery-antian'),
                            'param_name' => 'image',
                            'value' => '',
                            'description' => __('Upload image.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                        // Leadership Author Box Name
                        array(
                            'type' => 'textfield',
                            'heading' => __('Name', 'md-bakery-antian'),
                            'param_name' => 'name',
                            'value' => '',
                            'description' => __('Enter name.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                        // Leadership Author Box Designation
                        array(
                            'type' => 'textfield',
                            'heading' => __('Designation', 'md-bakery-antian'),
                            'param_name' => 'designation',
                            'value' => '',
                            'description' => __('Enter designation.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                        // Leadership Author Box LinkedIn Link
                        array(
                            'type' => 'textfield',
                            'heading' => __('LinkedIn Link', 'md-bakery-antian'),
                            'param_name' => 'linkedin_link',
                            'value' => '',
                            'description' => __('Enter LinkedIn link.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                        // Leadership Author Box Description
                        array(
                            'type' => 'textarea',
                            'heading' => __('Description', 'md-bakery-antian'),
                            'param_name' => 'description',
                            'value' => '',
                            'description' => __('Enter description.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                    ),
                    'description' => __('Add Leadership Author Box List.', 'md-bakery-antian'),
                ),
                // Bottom Text
                array(
                    'type' => 'textfield',
                    'heading' => __('Bottom Text', 'md-bakery-antian'),
                    'param_name' => 'bottom_text',
                    'value' => '',
                    'description' => __('Enter bottom text.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Bottom Button Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('Bottom Button Link', 'md-bakery-antian'),
                    'param_name' => 'bottom_button_link',
                    'value' => '',
                    'description' => __('Enter bottom button link.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-application-icon-large',
        ));
    }

    /**
     * Function is used to display Storyful Leadership Author Box html.
     */
    public function storyful_leadership_author_box_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'leadership_author_box_list' => '',
                'bottom_text' => '',
                'bottom_button_link' => '',
            ),
            $atts
        );
        ob_start();
        $leadership_author_box_list = array();
        if (!empty($atts['leadership_author_box_list'])) {
            $leadership_author_box_list = vc_param_group_parse_atts($atts['leadership_author_box_list']);
        }
        ?>
        <div class="leadership-author-box">
            <div class="leadership__header">
                <h2 class="leadership__header-heading wow fadeInLeft">
                    <?php echo wp_kses_post($atts['title']); ?>
                </h2>
            </div>
            <div class="container">
                <div class="box-item-main leadership__author__box">
                    <?php foreach ($leadership_author_box_list as $leadership_author_box) { 
                        $leadership_author_box_image = isset($leadership_author_box['image']) ? wp_get_attachment_image_url($leadership_author_box['image'], 'full') : '';
                        $linkedin_link = isset($leadership_author_box['linkedin_link']) ? $leadership_author_box['linkedin_link'] : '';
                        $author_name = isset($leadership_author_box['name']) ? $leadership_author_box['name'] : '';
                        $author_designation = isset($leadership_author_box['designation']) ? $leadership_author_box['designation'] : '';
                        $author_description = isset($leadership_author_box['description']) ? $leadership_author_box['description'] : '';
                        ?>
                        <div class="leadership__author__box-item">
                            <div class="leadership__author__box-item-inner">
                                <div class="leadership__author__box-item-inner-img">
                                    <?php if (!empty($leadership_author_box_image)) { ?>
                                        <img class="author-img wow fadeInDown" src="<?php echo esc_url($leadership_author_box_image); ?>" alt="Leadership Author Image">
                                    <?php } ?>
                                    <div class="linked-in-icon wow bounceIn">
                                        <a href="<?php echo esc_url($linkedin_link); ?>" target="_blank">
                                            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/src/images/linkedin-icon-orange.svg'); ?>" alt="Linked In Icon">
                                        </a>
                                    </div>
                                </div>
                                <div class="leadership__author__box-item-inner-content">
                                    <h3 class="leadershipName wow fadeInUp">
                                        <?php echo wp_kses_post($author_name); ?>
                                    </h3>
                                    <p class="leadershipTitle wow fadeInUp">
                                        <?php echo wp_kses_post($author_designation); ?>
                                    </p>
                                </div>
                            </div>
                            <div class="leadership__popup-model">
                                <div class="leadership__popup-model-content">
                                    <div class="leadership__popup-model-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
                                    </div>
                                    <div class="leadership__popup-model-body">
                                        <div class="leadership__popup-model-author-details-main">
                                            <div class="leadership__popup-model-author-details-main-img-section">
                                                <?php if (!empty($leadership_author_box_image)) { ?>
                                                    <img class="author-img" src="<?php echo esc_url($leadership_author_box_image); ?>" alt="Leadership Author Image">
                                                <?php } ?>
                                                <div class="linked-in-icon wow bounceIn">
                                                    <a href="<?php echo esc_url($linkedin_link); ?>" target="_blank">
                                                        <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/src/images/linkedin-icon-orange.svg'); ?>" alt="Linked In Icon">
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="leadership__popup-model-author-details-box">
                                                <h3 class="leadershipName">
                                                    <?php echo wp_kses_post($author_name); ?>
                                                </h3>
                                                <p class="leadershipTitle">
                                                    <?php echo wp_kses_post($author_designation); ?>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-8 bio-text leadership__popup-model-about-author-box">
                                            <div class="about-author">
                                                <span class="about-head"><?php esc_html_e('About', 'md-bakery-antian'); ?></span>
                                            </div>
                                            <p class="leadershipBio">
                                                <?php echo wp_kses_post($author_description); ?>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                </div>
                <div class="leadership__join-team wow animated">
                    <h4 class="leadership__join-team__heading">
                        <?php echo wp_kses_post($atts['bottom_text']); ?>
                    </h4>
                    <span class="leadership__join-team__heading-span"></span>
                    <?php 
                    if (!empty($atts['bottom_button_link'])) { 
                        $bottom_button_link = vc_build_link($atts['bottom_button_link']);
                        ?>
                        <div class="sbtn sbtn-arrow-primary wow animated">
                            <span class="btn-text">
                                <a href="<?php echo esc_url($bottom_button_link['url']); ?>" target="<?php echo esc_attr($bottom_button_link['target']); ?>">
                                    <?php echo esc_html($bottom_button_link['title']); ?>
                                </a>
                            </span>
                        </div>
                        <?php
                    }
                    ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}