<?php
/**
 * The Hero Banner functionality of the plugin.
 *
 * @package    MD_Bakery_Antian
 * @author     Multidots <info@multidots.com>
 */

namespace MD_ANITIAN\Includes\Addons;


/**
 * Image_Banner class
 * 
 * @since 1.0.0
 */
class Image_Banner {

    // Create Image Banner Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'image_banner'));
        add_shortcode('image_banner', array($this, 'image_banner_html'));
    }

    /**
     * Function is used to create image banner custom element.
     */
    public function image_banner() {

        // Image Banner With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Image Banner', 'md-bakery-antian'),
            'base' => 'image_banner',
            'params' => array(
                array(
                    'type' => 'textfield',
                    'heading' => __('Subtitle', 'md-bakery-antian'),
                    'param_name' => 'subtitle',
                    'value' => '',
                    'description' => __('Enter subtitle.', 'md-bakery-antian')
                ),
                array(
                    'type' => 'textfield',
                    'heading' => __('Title', 'md-bakery-antian'),
                    'param_name' => 'title',
                    'value' => '',
                    'description' => __('Enter title.', 'md-bakery-antian')
                ),
                // Desciption as wysing text
                array(
                    'type' => 'textarea_html',
                    'heading' => __('Description', 'md-bakery-antian'),
                    'param_name' => 'description',
                    'value' => '',
                    'description' => __('Enter description.', 'md-bakery-antian')
                ),
                // Learn More Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('Learn More Link', 'md-bakery-antian'),
                    'param_name' => 'learn_more_link',
                    'value' => '',
                    'description' => __('Enter learn more link.', 'md-bakery-antian')
                ),
                array(
                    'type' => 'attach_image',
                    'heading' => __('Banner Image', 'md-bakery-antian'),
                    'param_name' => 'banner_image',
                    'value' => '',
                    'description' => __('Upload banner image.', 'md-bakery-antian')
                ),
                // Image Style Left or Right
                array(
                    'type' => 'dropdown',
                    'heading' => __('Image Style', 'md-bakery-antian'),
                    'param_name' => 'image_style',
                    'value' => array(
                        __('Left', 'md-bakery-antian') => 'left',
                        __('Right', 'md-bakery-antian') => 'right',
                        __('Center', 'md-bakery-antian') => 'center',
                    ),
                    'description' => __('Select image style.', 'md-bakery-antian')
                ),
                // Image Size as dropdown - Small, Medium, Large
                array(
                    'type' => 'dropdown',
                    'heading' => __('Image Size', 'md-bakery-antian'),
                    'param_name' => 'image_size',
                    'value' => array(
                        __('Small', 'md-bakery-antian') => 'small',
                        __('Medium', 'md-bakery-antian') => 'medium',
                        __('Large', 'md-bakery-antian') => 'large',
                    ),
                    'description' => __('Select image size.', 'md-bakery-antian')
                ),
            ),
            'category' => __('Antian', 'md-bakery-antian'),
            'icon' => 'vc_icon-vc-hoverbox',
        ));
    }

    /**
     * Function is used to display image banner html.
     */
    public function image_banner_html($atts) {

        $atts = shortcode_atts(
            array(
                'subtitle' => '',
                'title' => '',
                'description' => '',
                'learn_more_link' => '',
                'banner_image' => '',
                'image_style' => 'left',
                'image_size' => '',
            ),
            $atts
        );
        ob_start();

        $banner_image = wp_get_attachment_image_url($atts['banner_image'], 'full');
        $banner_image_style = $atts['image_style'];
        $image_size = $atts['image_size'];
        $learn_more_link = vc_build_link($atts['learn_more_link']);
        ?>
        <div class="bakery_antian__image-banner <?php echo esc_attr($banner_image_style); ?>">
            <div class="container">
                <div class="image-banner__inner">
                    <div class="image-banner-content">
                        <?php if (!empty($atts['subtitle'])) : ?>
                            <h4 class="image-banner__subtitle"><?php echo wp_kses_post($atts['subtitle']); ?></h4>
                        <?php endif; ?> 
                        <h2 class="image-banner__title"><?php echo wp_kses_post($atts['title']); ?></h2>
                        <div class="image-banner__desc"><?php echo wp_kses_post($atts['description']); ?></div>
                        <?php if (!empty($learn_more_link['url'])) : ?>
                            <div class="image-banner__link">
                                <a href="<?php echo esc_url($learn_more_link['url']); ?>" class="banner-link" target="<?php echo esc_attr($learn_more_link['target']); ?>"><?php echo esc_html($learn_more_link['title']); ?></a>
                            </div>
                        <?php endif; ?>
                    </div>
                    <?php if (!empty($banner_image)) : ?>
                    <div class="image-banner-image <?php echo esc_attr($image_size); ?>">
                        <img src="<?php echo esc_url($banner_image); ?>" alt="Banner Image">
                    </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}