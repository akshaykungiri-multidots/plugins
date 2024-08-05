<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Press_Listing class
 * 
 * @since 1.0.0
 */
class Pointcentral_Press_Listing {

    // Create Pointcentral Press Listing Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_press_listing'));
        add_shortcode('pointcentral_press_listing', array($this, 'pointcentral_press_listing_html'));
    }

    /**
     * Function is used to create Pointcentral Press Listing custom element.
     */
    public function pointcentral_press_listing() {

        // Pointcentral Press Listing.
        vc_map(array(
            'name' => __('Pointcentral Press Listing', 'md-bakery-antian'),
            'base' => 'pointcentral_press_listing',
            'params' => array(
                // Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Title', 'md-bakery-antian'),
                    'param_name' => 'title',
                    'value' => '',
                    'description' => __('Enter title.', 'md-bakery-antian'),
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
                        // Item Link.
                        array(
                            'type' => 'vc_link',
                            'heading' => __('Item Link', 'md-bakery-antian'),
                            'param_name' => 'item_link',
                            'value' => '',
                            'description' => __('Enter item link.', 'md-bakery-antian'),
                        ),
                    ),
                    'description' => __('Enter image text items.', 'md-bakery-antian'),
                ),
                // Button Link.
                array(
                    'type' => 'vc_link',
                    'heading' => __('Button Link', 'md-bakery-antian'),
                    'param_name' => 'button_link',
                    'value' => '',
                    'description' => __('Enter button link.', 'md-bakery-antian'),
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
                // Image Text Item Title Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Image Text Item Title Color', 'md-bakery-antian'),
                    'param_name' => 'image_text_item_title_color',
                    'value' => '',
                    'description' => __('Select image text item title color.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Number of Columns.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Number of Columns', 'md-bakery-antian'),
                    'param_name' => 'number_of_columns',
                    'value' => array(
                        '1' => '1',
                        '2' => '2',
                        '3' => '3',
                        '4' => '4',
                    ),
                    'description' => __('Select number of columns.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Box Gap.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Box Gap', 'md-bakery-antian'),
                    'param_name' => 'box_gap',
                    'value' => array(
                        '0px' => '0',
                        '5px' => '5',
                        '10px' => '10',
                        '15px' => '15',
                        '20px' => '20',
                        '25px' => '25',
                        '30px' => '30',
                        '35px' => '35',
                        '40px' => '40',
                        '45px' => '45',
                        '50px' => '50',
                        '60px' => '60',
                        '70px' => '70',
                    ),
                    'description' => __('Select box gap.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
                // Theme Style.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Theme Style', 'md-bakery-antian'),
                    'param_name' => 'theme_style',
                    'value' => array(
                        'Style 1' => 'style_1',
                        'Style 2' => 'style_2',
                    ),
                    'description' => __('Select theme style.', 'md-bakery-antian'),
                    'group' => 'Design Options',
                ),
            ),
            'category' => __('Pointcentral', 'md-bakery-antian'),
            'icon' => 'icon-wpb-toggle-small-expand',
        ));
    }

    /**
     * Function is used to display Pointcentral Press Listing html.
     */
    public function pointcentral_press_listing_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'image_text_items' => '',
                'button_link' => '',
                'title_color' => '',
                'image_text_item_title_color' => '',
                'number_of_columns' => '1',
                'box_gap' => '30px',
                'theme_style' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="pointcentral-press-listing <?php echo esc_attr($atts['theme_style']); ?>">
            <div class="container">
                <?php if (!empty($atts['title'])) : ?>
                    <div class="pointcentral-press-listing__header">
                        <h2 class="pointcentral-press-listing__title" style="color: <?php echo esc_attr($atts['title_color']); ?>"><?php echo wp_kses_post($atts['title']); ?></h2>
                    </div>
                <?php endif; ?>
                <div class="pointcentral-press-listing__items" style="gap: <?php echo esc_attr($atts['box_gap']); ?>px;">
                    <?php
                    if (!empty($atts['image_text_items'])) {
                        $image_text_items = vc_param_group_parse_atts($atts['image_text_items']);
                        foreach ($image_text_items as $image_text_item) {
                            $image_text_item_image = ( isset($image_text_item['image']) && !empty($image_text_item['image']) ) ? wp_get_attachment_image_url($image_text_item['image'], 'full') : '';
                            $image_text_item_link = ( isset($image_text_item['item_link']) && !empty($image_text_item['item_link']) ) ? vc_build_link($image_text_item['item_link']) : '';
                            ?>
                            <div class="pointcentral-press-listing__item" style="width: calc(100% / <?php echo (int) $atts['number_of_columns']; ?> - 30px);">
                                <div class="pointcentral-press-listing__item-image">
                                    <img src="<?php echo esc_url($image_text_item_image); ?>" alt="image">
                                </div>
                                <?php if (!empty($image_text_item_link)) : ?>
                                    <div class="pointcentral-press-listing__item-title" >
                                        <a href="<?php echo esc_url($image_text_item_link['url']); ?>" class="pointcentral-press-listing__item-link" style="color: <?php echo esc_attr($atts['image_text_item_title_color']); ?>">
                                            <?php echo esc_html($image_text_item_link['title']); ?>
                                        </a>
                                    </div>
                                <?php endif; ?>
                            </div>
                            <?php
                        }
                    }
                    ?>
                </div>
                <div class="pointcentral-press-listing__button">
                    <?php if (!empty($atts['button_link'])) : 
                        $button_link = vc_build_link($atts['button_link']);
                        ?>
                        <a href="<?php echo esc_url($button_link['url']); ?>" class="pointcentral-press-listing__button"><?php echo esc_html($button_link['title']); ?></a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}