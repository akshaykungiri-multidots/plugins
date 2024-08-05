<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Image_Banner class
 * 
 * @since 1.0.0
 */
class Pointcentral_Image_Banner {

    // Create Pointcentral Image Banner Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_image_banner'));
        add_shortcode('pointcentral_image_banner', array($this, 'pointcentral_image_banner_html'));
    }

    /**
     * Function is used to create Pointcentral Image Banner custom element.
     */
    public function pointcentral_image_banner() {

        // Pointcentral Image Banner.
        vc_map(array(
            'name' => __('Pointcentral Image Banner', 'md-bakery-antian'),
            'base' => 'pointcentral_image_banner',
            'params' => array(
                // Image Banner Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Image Banner Image', 'md-bakery-antian'),
                    'param_name' => 'image_banner_image',
                    'value' => '',
                    'description' => __('Select image banner image.', 'md-bakery-antian'),
                ),
                // Image Banner Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Image Banner Title', 'md-bakery-antian'),
                    'param_name' => 'image_banner_title',
                    'value' => '',
                    'description' => __('Enter image banner title.', 'md-bakery-antian'),
                ),
                // Image Banner Description.
                array(
                    'type' => 'textarea',
                    'heading' => __('Image Banner Description', 'md-bakery-antian'),
                    'param_name' => 'image_banner_description',
                    'value' => '',
                    'description' => __('Enter image banner description.', 'md-bakery-antian'),
                ),
                // Image Banner Background Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Image Banner Background Image', 'md-bakery-antian'),
                    'param_name' => 'image_banner_background_image',
                    'value' => '',
                    'description' => __('Select image banner background image.', 'md-bakery-antian'),
                    'group' => __('Design Option', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Pointcentral', 'md-bakery-antian'),
            'icon' => 'icon-wpb-single-image',
        ));
    }

    /**
     * Function is used to display Pointcentral Image Banner html.
     */
    public function pointcentral_image_banner_html($atts) {

        $atts = shortcode_atts(
            array(
                'image_banner_image' => '',
                'image_banner_title' => '',
                'image_banner_description' => '',
                'image_banner_background_image' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="pointcentral-image-banner">
            <div class="pointcentral-image-banner-inner" style="background-image: url(<?php echo esc_url(wp_get_attachment_url($atts['image_banner_background_image'])); ?>);">
                <div class="container">
                    <div class="pointcentral-image-banner-content">
                        <div class="pointcentral-image-banner-content-inner">
                            <div class="pointcentral-image-banner-content-left">
                                <div class="pointcentral-image-banner-content-left-inner">
                                    <div class="pointcentral-image-banner-image">
                                        <img src="<?php echo esc_url(wp_get_attachment_url($atts['image_banner_image'])); ?>" alt="<?php echo esc_attr($atts['image_banner_title']); ?>">
                                    </div>
                                </div>
                            </div>
                            <div class="pointcentral-image-banner-content-right">
                                <div class="pointcentral-image-banner-content-right-inner">
                                    <div class="pointcentral-image-banner-title">
                                        <h2><?php echo wp_kses_post($atts['image_banner_title']); ?></h2>
                                    </div>
                                    <div class="pointcentral-image-banner-description">
                                        <p><?php echo wp_kses_post($atts['image_banner_description']); ?></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}