<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Image_Banner_List class
 * 
 * @since 1.0.0
 */
class Pointcentral_Image_Banner_List {

    // Create Pointcentral Image Banner List Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_image_banner_list'));
        add_shortcode('pointcentral_image_banner_list', array($this, 'pointcentral_image_banner_list_html'));
    }

    /**
     * Function is used to create Pointcentral Image Banner List custom element.
     */
    public function pointcentral_image_banner_list() {

        // Pointcentral Image Banner List.
        vc_map(array(
            'name' => __('Pointcentral Image Banner List', 'md-bakery-antian'),
            'base' => 'pointcentral_image_banner_list',
            'params' => array(
                // Heading.
                array(
                    'type' => 'textfield',
                    'heading' => __('Hero Banner Title', 'md-bakery-antian'),
                    'param_name' => 'hero_banner_title',
                    'value' => '',
                    'description' => __('Enter hero banner title.', 'md-bakery-antian'),
                ),
                // Sub Heading.
                array(
                    'type' => 'textarea',
                    'heading' => __('Hero Banner Description', 'md-bakery-antian'),
                    'param_name' => 'hero_banner_description',
                    'value' => '',
                    'description' => __('Enter hero banner description.', 'md-bakery-antian'),
                ),
                // Image Banner Lists.
                array(
                    'type' => 'param_group',
                    'heading' => __('Image Banner Lists', 'md-bakery-antian'),
                    'param_name' => 'image_banner_lists',
                    'value' => '',
                    'params' => array(
                        // Image.
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Image', 'md-bakery-antian'),
                            'param_name' => 'image',
                            'value' => '',
                            'description' => __('Upload image.', 'md-bakery-antian'),
                        ),
                        // Title.
                        array(
                            'type' => 'textfield',
                            'heading' => __('Title', 'md-bakery-antian'),
                            'param_name' => 'title',
                            'value' => '',
                            'description' => __('Enter title.', 'md-bakery-antian'),
                        ),
                        // Description.
                        array(
                            'type' => 'textarea',
                            'heading' => __('Description', 'md-bakery-antian'),
                            'param_name' => 'description',
                            'value' => '',
                            'description' => __('Enter description.', 'md-bakery-antian'),
                        ),
                    ),
                    'description' => __('Add image banner lists.', 'md-bakery-antian'),
                ),
                // Background Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Background Color', 'md-bakery-antian'),
                    'param_name' => 'background_color',
                    'value' => '',
                    'description' => __('Select background color.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-application-icon-large',
        ));
    }

    /**
     * Function is used to display Pointcentral Image Banner List html.
     */
    public function pointcentral_image_banner_list_html($atts) {

        $atts = shortcode_atts(
            array(
                'hero_banner_title' => '',
                'hero_banner_description' => '',
                'image_banner_lists' => '',
                'background_color' => '',
            ),
            $atts
        );
        $image_banner_lists = [];
        if (!empty($atts['image_banner_lists'])) {
            $image_banner_lists = vc_param_group_parse_atts($atts['image_banner_lists']);
        }
        ob_start();
        ?>
        <section class="pointcentral-image-banner-list" style="background-color: <?php echo esc_attr($atts['background_color']); ?>">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="image-banner-list__content">
                            <div class="image-banner-list__content-heading">
                                <h2 class="image-banner-list__title"><?php echo esc_html($atts['hero_banner_title']); ?></h2>
                                <p class="image-banner-list__description"><?php echo esc_html($atts['hero_banner_description']); ?></p>
                            </div>
                            <div class="image-banner-list__lists">
                                <?php
                                if (!empty($image_banner_lists)) {
                                    foreach ($image_banner_lists as $image_banner_list) {
                                        $title = (isset($image_banner_list['title']) && !empty($image_banner_list['title'])) ? $image_banner_list['title'] : '';
                                        $description = (isset($image_banner_list['description']) && !empty($image_banner_list['description'])) ? $image_banner_list['description'] : '';
                                        ?>
                                        <div class="image-banner-list__item">
                                            <div class="image-banner-list__item-content">
                                                <h3 class="image-banner-list__item-title"><?php echo esc_html($title); ?></h3>
                                                <p class="image-banner-list__item-description"><?php echo esc_html($description); ?></p>
                                            </div>
                                            <div class="image-banner-list__item-image">
                                                <?php
                                                if (isset($image_banner_list['image']) && !empty($image_banner_list['image'])) {
                                                    echo wp_get_attachment_image($image_banner_list['image'], 'full');
                                                }
                                                ?>
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
        </section>
        <?php
        return ob_get_clean();
    }

}