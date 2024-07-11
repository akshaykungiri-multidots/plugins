<?php
/**
 * The Cover CTA functionality of the plugin.
 *
 * @package    MD_ANITIAN
 * @author     Multidots <info@multidots.com>
 */

namespace MD_ANITIAN\Includes\Addons;


/**
 * Cover_CTA class
 * 
 * @since 1.0.0
 */
class Cover_CTA {

    // Create Cover CTA Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'cover_cta'));
        add_shortcode('cover_cta', array($this, 'cover_cta_html'));
    }

    /**
     * Function is used to create Cover CTA custom element.
     */
    public function cover_cta() {

        // Cover CTA.
        vc_map(array(
            'name' => __('Cover CTA', 'md-bakery-antian'),
            'base' => 'cover_cta',
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
                // Button Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('Button Link', 'md-bakery-antian'),
                    'param_name' => 'button_link',
                    'value' => '',
                    'description' => __('Add button link.', 'md-bakery-antian'),
                ),
                // Cover Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Cover Image', 'md-bakery-antian'),
                    'param_name' => 'cover_image',
                    'value' => '',
                    'description' => __('Upload cover image.', 'md-bakery-antian'),
                ),
                // Background Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'background_image',
                    'value' => '',
                    'description' => __('Upload background image.', 'md-bakery-antian'),
                    'group' => __('Design Option', 'md-bakery-antian'),
                ),
                // Background Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Background Color', 'md-bakery-antian'),
                    'param_name' => 'background_color',
                    'value' => '',
                    'description' => __('Select background color.', 'md-bakery-antian'),
                    'group' => __('Design Option', 'md-bakery-antian'),
                ),

                // Select Cover CTA Style.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Select Cover CTA Style', 'md-bakery-antian'),
                    'param_name' => 'cover_cta_style',
                    'value' => array(
                        'Style 1' => 'style1',
                        'Style 2' => 'style2',
                    ),
                    'description' => __('Select Cover CTA Style.', 'md-bakery-antian'),
                    'group' => __('Design Option', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Antian', 'md-bakery-antian'),
            'icon' => 'icon-wpb-flickr',
        ));
    }

    /**
     * Function is used to display Cover CTA html.
     */
    public function cover_cta_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'heading_content' => '',
                'button_link' => '',
                'cover_image' => '',
                'background_image' => '',
                'background_color' => '',
                'cover_cta_style' => 'style1',
            ),
            $atts
        );
        $button_link = vc_build_link($atts['button_link']);
        $cover_image = wp_get_attachment_image_src($atts['cover_image'], 'full');
        $background_image = '';
        if ($atts['background_image']) {
            $background_image = wp_get_attachment_image_src($atts['background_image'], 'full');
            $background_image = $background_image[0];
        }
        ob_start();
        ?>
        <div class="md_anitian_cover_cta_wrap <?php echo esc_attr($atts['cover_cta_style']); ?>" style="background-color: <?php echo esc_attr($atts['background_color']); ?>;">
            <?php if ($atts['cover_cta_style'] === 'style2') { ?>
                <div class="md_anitian_cover_cta_arc">
                </div>
            <?php } ?>
            <div class="md_anitian_cover_cta" style="background-image: url(<?php echo esc_url($background_image); ?>);">
                <?php if ($atts['cover_cta_style'] === 'style1') { ?>
                <div class="background_overlay" style="background: linear-gradient(180deg, <?php echo esc_attr($atts['background_color']); ?> 0%, <?php echo esc_attr($atts['background_color']); ?> 100%);">
                </div>
                <?php } ?>
                <div class="container">
                    <div class="md_anitian_cover_cta__inner">
                        <div class="md_anitian_cover_cta__heading">
                            <h2><?php echo esc_html($atts['title']); ?></h2>
                            <p><?php echo esc_html($atts['heading_content']); ?></p>
                            <?php if (!empty($button_link['url'])) { ?>
                                <div class="md_anitian_cover_cta__btn">
                                    <a href="<?php echo esc_url($button_link['url']); ?>" class="btn-anitian md_anitian_cover_cta__btn"><?php echo esc_html($button_link['title']); ?></a>
                                </div>
                            <?php } ?>
                        </div>
                        <?php if (!empty($cover_image)) { ?>
                            <div class="md_anitian_cover_cta__image">
                                <div class="cover_cta__image">
                                    <img src="<?php echo esc_url($cover_image[0]); ?>" alt="<?php echo esc_attr($atts['title']); ?>">
                                </div>
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}