<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Image_Text class
 * 
 * @since 1.0.0
 */
class Pointcentral_Image_Text {

    // Create Pointcentral Image Text Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_image_text'));
        add_shortcode('pointcentral_image_text', array($this, 'pointcentral_image_text_html'));
    }

    /**
     * Function is used to create Pointcentral Image Text custom element.
     */
    public function pointcentral_image_text() {

        // Pointcentral Image Text.
        vc_map(array(
            'name' => __('Pointcentral Image Text', 'md-bakery-antian'),
            'base' => 'pointcentral_image_text',
            'params' => array(
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
                // Image Text Items.
                array(
                    'type' => 'param_group',
                    'heading' => __('Image Text Items', 'md-bakery-antian'),
                    'param_name' => 'image_text_items',
                    'value' => '',
                    'params' => array(
                        // Image.
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Image', 'md-bakery-antian'),
                            'param_name' => 'image',
                            'value' => '',
                            'description' => __('Select image.', 'md-bakery-antian'),
                        ),
                        // Title.
                        array(
                            'type' => 'textfield',
                            'heading' => __('Title', 'md-bakery-antian'),
                            'param_name' => 'title',
                            'value' => '',
                            'description' => __('Enter title.', 'md-bakery-antian'),
                        ),
                    ),
                    'description' => __('Enter image text items.', 'md-bakery-antian'),
                ),
                // Title Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Title Color', 'md-bakery-antian'),
                    'param_name' => 'title_color',
                    'value' => '',
                    'description' => __('Select title color.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Description Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Description Color', 'md-bakery-antian'),
                    'param_name' => 'description_color',
                    'value' => '',
                    'description' => __('Select description color.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Image Text Item Title Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Image Text Item Title Color', 'md-bakery-antian'),
                    'param_name' => 'image_text_item_title_color',
                    'value' => '',
                    'description' => __('Select image text item title color.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'vc_icon-vc-hoverbox',
        ));
    }

    /**
     * Function is used to display Pointcentral Image Text html.
     */
    public function pointcentral_image_text_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'description' => '',
                'image_text_items' => '',
                'title_color' => '',
                'description_color' => '',
                'image_text_item_title_color' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="pointcentral-image-text">
            <div class="container">
                <div class="pointcentral-image-text__header">
                    <h2 class="pointcentral-image-text__title" style="color: <?php echo esc_attr($atts['title_color']); ?>"><?php echo wp_kses_post($atts['title']); ?></h2>
                    <p class="pointcentral-image-text__description" style="color: <?php echo esc_attr($atts['description_color']); ?>"><?php echo wp_kses_post($atts['description']); ?></p>
                </div>
                <div class="pointcentral-image-text__items">
                    <?php
                    if (!empty($atts['image_text_items'])) {
                        $image_text_items = vc_param_group_parse_atts($atts['image_text_items']);
                        foreach ($image_text_items as $image_text_item) {
                            $image_text_item_image = ( isset($image_text_item['image']) && !empty($image_text_item['image']) ) ? wp_get_attachment_image_url($image_text_item['image']) : '';
                            $image_text_item_title = ( isset($image_text_item['title']) && !empty($image_text_item['title']) ) ? $image_text_item['title'] : '';
                            ?>
                            <div class="pointcentral-image-text__item">
                                <div class="pointcentral-image-text__item-image">
                                    <img src="<?php echo esc_url($image_text_item_image); ?>" alt="<?php echo esc_attr($image_text_item_title); ?>">
                                </div>
                                <p class="pointcentral-image-text__item-title" style="color: <?php echo esc_attr($atts['image_text_item_title_color']); ?>"><?php echo wp_kses_post($image_text_item_title); ?></p>
                            </div>
                            <?php
                        }
                    }
                    ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}