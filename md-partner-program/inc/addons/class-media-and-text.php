<?php
/**
 * The Media And Text functionality of the plugin.
 *
 * @package    MD_Partner_Program
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Partner_Program\Inc\Addons;


/**
 * Media_And_Text class
 * 
 * @since 1.0.0
 */
class Media_And_Text {

    // Create Media And Text Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'media_and_text'));
        add_shortcode('media_and_text', array($this, 'media_and_text_html'));
    }

    /**
     * Function is used to create Media And Text custom element.
     */
    public function media_and_text() {

        // Media And Text With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Media And Text', 'md-bakery-antian'),
            'base' => 'media_and_text',
            'params' => array(
                array(
                    'type' => 'textfield',
                    'heading' => __('Title', 'md-bakery-antian'),
                    'param_name' => 'title',
                    'value' => '',
                    'description' => __('Enter title.', 'md-bakery-antian')
                ),
                array(
                    'type' => 'textarea',
                    'heading' => __('Description', 'md-bakery-antian'),
                    'param_name' => 'description',
                    'value' => '',
                    'description' => __('Enter description.', 'md-bakery-antian')
                ),
                array(
                    'type' => 'vc_link',
                    'heading' => __('Media Link', 'md-bakery-antian'),
                    'param_name' => 'media_link',
                    'value' => '',
                    'description' => __('Enter Media Link.', 'md-bakery-antian')
                ),
                // Add Media Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Media Image', 'md-bakery-antian'),
                    'param_name' => 'media_image',
                    'value' => '',
                    'description' => __('Upload media image.', 'md-bakery-antian')
                ),
                // Media Alignment.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Media Alignment', 'md-bakery-antian'),
                    'param_name' => 'media_alignment',
                    'value' => array(
                        __('Left', 'md-bakery-antian') => 'left',
                        __('Right', 'md-bakery-antian') => 'right',
                    ),
                    'description' => __('Select media alignment.', 'md-bakery-antian')
                ),

                // Media Style.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Media Style', 'md-bakery-antian'),
                    'param_name' => 'media_style',
                    'value' => array(
                        __('Style 1', 'md-bakery-antian') => 'style1',
                        __('Style 2', 'md-bakery-antian') => 'style2',
                    ),
                    'description' => __('Select media style.', 'md-bakery-antian')
                ),

                // Media Image Top Wave.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Media Image Top Wave', 'md-bakery-antian'),
                    'param_name' => 'media_image_top_wave',
                    'value' => '',
                    'description' => __('Upload media image top wave.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),

                // Design Options.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'background_image',
                    'value' => '',
                    'description' => __('Upload background image.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
                // Add Background Color as linear gradient
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Background Overlay Color', 'md-bakery-antian'),
                    'param_name' => 'background_color',
                    'value' => '',
                    'description' => __('Select background overlay color.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
                // Alignment.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Alignment', 'md-bakery-antian'),
                    'param_name' => 'alignment',
                    'value' => array(
                        __('Left', 'md-bakery-antian') => 'left',
                        __('Center', 'md-bakery-antian') => 'center',
                        __('Right', 'md-bakery-antian') => 'right',
                    ),
                    'description' => __('Select alignment.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
                // Heading Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Heading Color', 'md-bakery-antian'),
                    'param_name' => 'heading_color',
                    'value' => '',
                    'description' => __('Select heading color.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
                // Description Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Description Color', 'md-bakery-antian'),
                    'param_name' => 'description_color',
                    'value' => '',
                    'description' => __('Select description color.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
                // Button Color and Background Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Button Color', 'md-bakery-antian'),
                    'param_name' => 'button_color',
                    'value' => '',
                    'description' => __('Select button color.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Button Background Color', 'md-bakery-antian'),
                    'param_name' => 'button_background_color',
                    'value' => '',
                    'description' => __('Select button background color.', 'md-bakery-antian'),
                    'group' => __('Design Options', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Antian', 'md-bakery-antian'),
        ));
    }

    /**
     * Function is used to display Media And Text html.
     */
    public function media_and_text_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'description' => '',
                'media_link' => '',
                'media_image' => '',
                'media_style' => 'style1',
                'media_alignment' => 'left',
                'media_image_top_wave' => '',
                'background_image' => '',
                'background_color' => '',
                'alignment' => '',
                'heading_color' => '',
                'description_color' => '',
                'button_color' => '',
                'button_background_color' => '',
            ),
            $atts
        );
        $media_image = wp_get_attachment_url($atts['media_image']);
        $media_alignment = $atts['media_alignment'];
        $media_image_top_wave = wp_get_attachment_url($atts['media_image_top_wave']);
        $background_image = wp_get_attachment_url($atts['background_image']);
        $media_link = vc_build_link($atts['media_link']);
        $background_overlay = $atts['background_color'];
        $alignment = $atts['alignment'];
        $heading_color = $atts['heading_color'];
        $description_color = $atts['description_color'];
        $button_color = $atts['button_color'];
        $button_background_color = $atts['button_background_color'];
        $media_alignment_class = ($media_alignment === 'left') ? 'partner__media_and_text__inner--left' : 'partner__media_and_text__inner--right';
        ob_start();
        ?>
        <div class="partner__media_and_text <?php echo esc_attr($atts['media_style']); ?>" style="background: url(<?php echo esc_url($background_image); ?>); background-color: <?php echo esc_attr($background_overlay); ?>;">
            <div class="media-and-text-section-two__top-wave" style="background: url(<?php echo esc_url($media_image_top_wave); ?>);"></div>
            <div class="container">
                <div class="partner__media_and_text__wrapper">
                    <div class="partner__media_and_text__inner <?php echo esc_attr($media_alignment_class); ?>">
                        <div class="partner__media_and_text-content" style="text-align: <?php echo esc_attr($alignment); ?>">
                            <div class="md_bakery_partner_pre_text">
                                <img class="md_bakery_partner_pre_text__image" src="<?php echo esc_url(MD_PARTNER_PROGRAM_URL . '/assets/src/images/2-blocks-Accelerate-icon.png'); ?>" alt="pre-text" />
                                <h1 style="color: <?php echo esc_attr($heading_color); ?>"><?php echo esc_html($atts['title']); ?></h1>
                            </div>
                            <div class="description" style="color: <?php echo esc_attr($description_color); ?>"><?php echo wp_kses_post($atts['description']); ?></div>
                            <div class="partner__media_and_text-buttons">
                                <?php if (!empty($media_link['url'])) : ?>
                                    <a href="<?php echo esc_url($media_link['url']); ?>" class="partner__media_and_text-button" style="color: <?php echo esc_attr($button_color); ?>; background-color: <?php echo esc_attr($button_background_color); ?>"><?php echo esc_html($media_link['title']); ?></a>
                                <?php endif; ?>
                            </div>
                        </div>
                        <div class="partner__media_and_text-media">
                            <img src="<?php echo esc_url($media_image); ?>" alt="media image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}