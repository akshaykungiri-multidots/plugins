<?php
/**
 * The Media With Content functionality of the plugin.
 *
 * @package    MD_ANITIAN
 * @author     Multidots <info@multidots.com>
 */

namespace MD_ANITIAN\Includes\Addons;


/**
 * Media_With_Content class
 * 
 * @since 1.0.0
 */
class Media_With_Content {

    // Create Media With Content Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'media_with_content'));
        add_shortcode('media_with_content', array($this, 'media_with_content_html'));
    }

    /**
     * Function is used to create Media With Content custom element.
     */
    public function media_with_content() {

        // Media With Content.
        vc_map(array(
            'name' => __('Media With Content', 'md-bakery-antian'),
            'base' => 'media_with_content',
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
                // Button1  Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('Button Link', 'md-bakery-antian'),
                    'param_name' => 'button_link',
                    'value' => '',
                    'description' => __('Add button link.', 'md-bakery-antian'),
                ),
                // Button2  Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('Button 2 Link', 'md-bakery-antian'),
                    'param_name' => 'button2_link',
                    'value' => '',
                    'description' => __('Add button link.', 'md-bakery-antian'),
                ),
                // Media Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Media Image', 'md-bakery-antian'),
                    'param_name' => 'media_image',
                    'value' => '',
                    'description' => __('Upload media image.', 'md-bakery-antian'),
                ),
                // Media Image Size.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Media Image Size', 'md-bakery-antian'),
                    'param_name' => 'media_image_size',
                    'value' => array(
                        __('Small', 'md-bakery-antian') => 'small',
                        __('Medium', 'md-bakery-antian') => 'medium',
                        __('Large', 'md-bakery-antian') => 'large',
                    ),
                    'description' => __('Select media image size.', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Antian', 'md-bakery-antian'),
            'icon' => 'vc_icon-vc-hoverbox',
        ));
    }

    /**
     * Function is used to display Media With Content html.
     */
    public function media_with_content_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'heading_content' => '',
                'button_link' => '',
                'button2_link' => '',
                'media_image' => '',
                'media_image_size' => '',
            ),
            $atts
        );
        $button_link = vc_build_link($atts['button_link']);
        $button2_link = vc_build_link($atts['button2_link']);
        $media_image = wp_get_attachment_image_src($atts['media_image'], 'full');
        ob_start();
        ?>
        <div class="md_anitian_media_with_content" >
            <div class="container">
                <div class="md_anitian_media_with_content__inner <?php echo esc_attr($atts['media_image_size']); ?>">
                    <div class="md_anitian_media_with_content__heading">
                        <h2><?php echo esc_html($atts['title']); ?></h2>
                        <p><?php echo esc_html($atts['heading_content']); ?></p>
                        <div class="md_anitian_media_with_content__buttons">
                            <?php if (!empty($button_link['url'])) { ?>
                                <div class="md_anitian_media_with_content__btn">
                                    <a href="<?php echo esc_url($button_link['url']); ?>" class="btn-anitian md_anitian_media_with_content__btn bg-orage color-white"><?php echo esc_html($button_link['title']); ?></a>
                                </div>
                            <?php } ?>
                            <?php if (!empty($button2_link['url'])) { ?>
                                <div class="md_anitian_media_with_content__btn">
                                    <a href="<?php echo esc_url($button2_link['url']); ?>" class="btn-anitian md_anitian_media_with_content__btn bg-white color-blue"><?php echo esc_html($button2_link['title']); ?></a>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                    <?php if (!empty($media_image)) { ?>
                        <div class="md_anitian_media_with_content__image">
                            <div class="media_with_content__image">
                                <img src="<?php echo esc_url($media_image[0]); ?>" alt="<?php echo esc_attr($atts['title']); ?>">
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}