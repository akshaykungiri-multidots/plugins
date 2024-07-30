<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Image_Banner2 class
 * 
 * @since 1.0.0
 */
class Pointcentral_Image_Banner2 {

    // Create Pointcentral Image Banner 2 Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_image_banner2'));
        add_shortcode('pointcentral_image_banner2', array($this, 'pointcentral_image_banner2_html'));
    }

    /**
     * Function is used to create Pointcentral Image Banner 2 custom element.
     */
    public function pointcentral_image_banner2() {

        // Pointcentral Image Banner 2.
        vc_map(array(
            'name' => __('Pointcentral Image Banner 2', 'md-bakery-antian'),
            'base' => 'pointcentral_image_banner2',
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
                // Image Banner Sub Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Image Banner Sub Title', 'md-bakery-antian'),
                    'param_name' => 'image_banner_sub_title',
                    'value' => '',
                    'description' => __('Enter image banner sub title.', 'md-bakery-antian'),
                ),
                // Image Banner Description.
                array(
                    'type' => 'textarea',
                    'heading' => __('Image Banner Description', 'md-bakery-antian'),
                    'param_name' => 'image_banner_description',
                    'value' => '',
                    'description' => __('Enter image banner description.', 'md-bakery-antian'),
                ),
                // Image Banner Button Link.
                array(
                    'type' => 'vc_link',
                    'heading' => __('Image Banner Button Link', 'md-bakery-antian'),
                    'param_name' => 'image_banner_button_link',
                    'value' => '',
                    'description' => __('Enter image banner button link.', 'md-bakery-antian'),
                ),
                // Image Position.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Image Position', 'md-bakery-antian'),
                    'param_name' => 'image_position',
                    'value' => array(
                        __('Left', 'md-bakery-antian') => 'left',
                        __('Right', 'md-bakery-antian') => 'right',
                    ),
                    'description' => __('Select image position.', 'md-bakery-antian'),
                    'group' => __('Design Option', 'md-bakery-antian'),
                ),
                // Image Size.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Image Size', 'md-bakery-antian'),
                    'param_name' => 'image_size',
                    'value' => array(
                        __('Large', 'md-bakery-antian') => 'large',
                        __('Medium', 'md-bakery-antian') => 'medium',
                        __('Small', 'md-bakery-antian') => 'small',
                    ),
                    'description' => __('Select image size.', 'md-bakery-antian'),
                    'group' => __('Design Option', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'vc_icon-vc-hoverbox',
        ));
    }

    /**
     * Function is used to display Pointcentral Image Banner 2 html.
     */
    public function pointcentral_image_banner2_html($atts) {

        $atts = shortcode_atts(
            array(
                'image_banner_image' => '',
                'image_banner_title' => '',
                'image_banner_sub_title' => '',
                'image_banner_description' => '',
                'image_banner_button_link' => '',
                'image_position' => 'left',
                'image_size' => 'large',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="pointcentral-image-banner2">
            <div class="pointcentral-image-banner2-inner">
                <div class="container <?php echo esc_attr($atts['image_position']); ?>">
                    <div class="pointcentral-image-banner2__left">
                        <h2 class="pointcentral-image-banner2__title"><?php echo esc_html($atts['image_banner_title']); ?></h2>
                        <h3 class="pointcentral-image-banner2__sub-title"><?php echo esc_html($atts['image_banner_sub_title']); ?></h3>
                        <p class="pointcentral-image-banner2__description"><?php echo esc_html($atts['image_banner_description']); ?></p>
                        <?php 
                        if (!empty($atts['image_banner_button_link'])) { 
                            $image_banner_button_link = vc_build_link($atts['image_banner_button_link']);
                            ?>
                            <div class="pointcentral-image-banner2__button">
                                <a href="<?php echo esc_url($image_banner_button_link['url']); ?>" class="btn btn-primary"><?php echo esc_html($image_banner_button_link['title']); ?></a>
                            </div>
                        <?php } ?>
                    </div>
                    <div class="pointcentral-image-banner2__right <?php echo esc_attr($atts['image_size']); ?>">
                        <img src="<?php echo esc_url(wp_get_attachment_url($atts['image_banner_image'], 'full')); ?>" alt="<?php echo esc_attr($atts['image_banner_title']); ?>">
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}