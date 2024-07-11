<?php
/**
 * The Header Page Title functionality of the plugin.
 *
 * @package    MD_ANITIAN
 * @author     Multidots <info@multidots.com>
 */

namespace MD_ANITIAN\Includes\Addons;


/**
 * Header_Page_Title class
 * 
 * @since 1.0.0
 */
class Header_Page_Title {

    // Create Header Page Title Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'header_page_title'));
        add_shortcode('header_page_title', array($this, 'header_page_title_html'));
    }

    /**
     * Function is used to create Header Page Title custom element.
     */
    public function header_page_title() {

        // Header Page Title.
        vc_map(array(
            'name' => __('Header Page Title', 'md-bakery-antian'),
            'base' => 'header_page_title',
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
                // Button  Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('Button Link', 'md-bakery-antian'),
                    'param_name' => 'button_link',
                    'value' => '',
                    'description' => __('Add button link.', 'md-bakery-antian'),
                ),

                // Background Image
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'media_background_image',
                    'value' => '',
                    'description' => __('Add background image.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // Linear Color 1
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Linear Color 1', 'md-bakery-antian'),
                    'param_name' => 'linear_color_1',
                    'value' => '',
                    'description' => __('Add linear color 1.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // Linear Color 2
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Linear Color 2', 'md-bakery-antian'),
                    'param_name' => 'linear_color_2',
                    'value' => '',
                    'description' => __('Add linear color 2.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // Heading Title Color
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Heading Title Color', 'md-bakery-antian'),
                    'param_name' => 'heading_title_color',
                    'value' => '',
                    'description' => __('Add heading title color.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // Heading Content Color
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Heading Content Color', 'md-bakery-antian'),
                    'param_name' => 'heading_content_color',
                    'value' => '',
                    'description' => __('Add heading content color.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // Button Background Color
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Button Background Color', 'md-bakery-antian'),
                    'param_name' => 'button_background_color',
                    'value' => '',
                    'description' => __('Add button background color.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // Button Text Color
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Button Text Color', 'md-bakery-antian'),
                    'param_name' => 'button_text_color',
                    'value' => '',
                    'description' => __('Add button text color.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
            ),
            'category' => __('Antian', 'md-bakery-antian'),
            'icon' => 'icon-wpb-layer-shape-text',
        ));
    }

    /**
     * Function is used to display Header Page Title html.
     */
    public function header_page_title_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'heading_content' => '',
                'button_link' => '',
                'media_background_image' => '',
                'linear_color_1' => '',
                'linear_color_2' => '',
                'heading_title_color' => '',
                'heading_content_color' => '',
                'button_background_color' => '',
                'button_text_color' => '',
            ),
            $atts
        );
        $button_link = vc_build_link($atts['button_link']);
        $media_background_image = '';
        if (!empty($atts['media_background_image'])) {
            $media_background_image = wp_get_attachment_image_src($atts['media_background_image'], 'full');
            $media_background_image = $media_background_image[0];
        }
        ob_start();
        ?>
        <div class="md_anitian_header_page_title" style="background-image: url(<?php echo esc_url($media_background_image); ?>);">
            <div class="md_anitian_header_page_title__overlay" style="background-image: linear-gradient(to right, <?php echo esc_attr($atts['linear_color_1']); ?>, <?php echo esc_attr($atts['linear_color_2']); ?>);"></div>
            <div class="container">
                <div class="md_anitian_header_page_title__inner">
                    <div class="md_anitian_header_page_title__heading">
                        <h2 style="color: <?php echo esc_attr($atts['heading_title_color']); ?>"><?php echo esc_html($atts['title']); ?></h2>
                        <p style="color: <?php echo esc_attr($atts['heading_content_color']); ?>"><?php echo esc_html($atts['heading_content']); ?></p>
                        <div class="md_anitian_header_page_title__buttons">
                            <?php if (!empty($button_link['url'])) { ?>
                                <div class="md_anitian_header_page_title__btn">
                                    <a href="<?php echo esc_url($button_link['url']); ?>" class="btn-anitian md_anitian_header_page_title__btn" style="background-color: <?php echo esc_attr($atts['button_background_color']); ?>; color: <?php echo esc_attr($atts['button_text_color']); ?>"><?php echo esc_html($button_link['title']); ?></a>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}