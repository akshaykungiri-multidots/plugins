<?php
/**
 * The Text Video functionality of the plugin.
 *
 * @package    MD_ANITIAN
 * @author     Multidots <info@multidots.com>
 */

namespace MD_ANITIAN\Includes\Addons;


/**
 * Text_Video class
 * 
 * @since 1.0.0
 */
class Text_Video {

    // Create Text Video Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'text_video'));
        add_shortcode('text_video', array($this, 'text_video_html'));
    }

    /**
     * Function is used to create Text Video custom element.
     */
    public function text_video() {

        // Text Video.
        vc_map(array(
            'name' => __('Text Video', 'md-bakery-antian'),
            'base' => 'text_video',
            'params' => array(
                // Sub Title
                array(
                    'type' => 'textfield',
                    'heading' => __('Sub Title', 'md-bakery-antian'),
                    'param_name' => 'sub_title',
                    'value' => '',
                    'description' => __('Enter sub title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
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
                // Cover Video.
                array(
                    'type' => 'textfield',
                    'heading' => __('Cover Video', 'md-bakery-antian'),
                    'param_name' => 'cover_video',
                    'value' => '',
                    'description' => __('Enter cover video.', 'md-bakery-antian'),
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
            ),
            'category' => __('Antian', 'md-bakery-antian'),
            'icon' => 'icon-wpb-film-youtube',
        ));
    }

    /**
     * Function is used to display Text Video html.
     */
    public function text_video_html($atts) {

        $atts = shortcode_atts(
            array(
                'sub_title' => '',
                'title' => '',
                'heading_content' => '',
                'button_link' => '',
                'cover_video' => '',
                'background_image' => '',
                'background_color' => '',
            ),
            $atts
        );
        $button_link = vc_build_link($atts['button_link']);

        $cover_video = $atts['cover_video'];
        // Check if cover video is youtube or not.
        if (strpos($cover_video, 'youtube') !== false) {
            $cover_video = str_replace('watch?v=', 'embed/', $cover_video);
        } else {
            $cover_video = "";
        }
        $background_image = '';
        if ($atts['background_image']) {
            $background_image = wp_get_attachment_image_src($atts['background_image'], 'full');
            $background_image = $background_image[0];
        }
        ob_start();
        ?>
        <div class="md_anitian_text_video_wrap">
            <div class="md_anitian_text_video" style="background: <?php echo esc_attr($atts['background_color']); ?> url(<?php echo esc_url($background_image); ?>);">
                <div class="container">
                    <div class="md_anitian_text_video__inner">
                        <div class="md_anitian_text_video__heading">
                            <h4><?php echo esc_html($atts['sub_title']); ?></h4>
                            <h2><?php echo esc_html($atts['title']); ?></h2>
                            <p><?php echo esc_html($atts['heading_content']); ?></p>
                            <div class="md_anitian_text_video__btn">
                                <?php if (!empty($button_link['url'])) { ?>
                                <a href="<?php echo esc_url($button_link['url']); ?>" class="btn-anitian md_anitian_text_video__btn"><?php echo esc_html($button_link['title']); ?></a>
                                <?php } ?>
                            </div>
                        </div>
                        <?php if (!empty($cover_video)) { ?>
                            <div class="md_anitian_text_video__youtube">
                                <div class="text_video__youtube">
                                    <div class="video_section_wrapper" id="MdYTplayer">
                                        <iframe src="<?php echo esc_url($cover_video); ?>" frameborder="0" allowfullscreen></iframe>
                                    </div>
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