<?php
/**
 * The Storyful Three Column List functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Threecol_list class
 * 
 * @since 1.0.0
 */
class Storyful_Threecol_list {

    // Create Storyful Three Column List Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_threecol_list'));
        add_shortcode('storyful_threecol_list', array($this, 'storyful_threecol_list_html'));
    }

    /**
     * Function is used to create Storyful Three Column List custom element.
     */
    public function storyful_threecol_list() {

        // Storyful Three Column List.
        vc_map(array(
            'name' => __('Storyful Three Column List', 'md-bakery-antian'),
            'base' => 'storyful_threecol_list',
            'params' => array(
                // Storyful Three Column Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Title', 'md-bakery-antian'),
                    'param_name' => 'title',
                    'value' => '',
                    'description' => __('Enter title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Storyful Three Column List Items.
                array(
                    'type' => 'param_group',
                    'heading' => __('Three Column List Items', 'md-bakery-antian'),
                    'param_name' => 'threecol_list_items',
                    'value' => '',
                    'params' => array(
                        // Storyful Three Column List Item Title.
                        array(
                            'type' => 'textfield',
                            'heading' => __('Item Title', 'md-bakery-antian'),
                            'param_name' => 'item_title',
                            'value' => '',
                            'description' => __('Enter item title.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                        // Storyful Three Column List Item Description.
                        array(
                            'type' => 'textarea',
                            'heading' => __('Item Description', 'md-bakery-antian'),
                            'param_name' => 'item_description',
                            'value' => '',
                            'description' => __('Enter item description.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                        // Storyful Three Column List Item Image.
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Item Image', 'md-bakery-antian'),
                            'param_name' => 'item_image',
                            'value' => '',
                            'description' => __('Upload item image.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                    ),
                ),
                // Storyful Three Column List Button Link.
                array(
                    'type' => 'vc_link',
                    'heading' => __('Button Link', 'md-bakery-antian'),
                    'param_name' => 'button_link',
                    'value' => '',
                    'description' => __('Add button link.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Background Image
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'background_image',
                    'value' => '',
                    'description' => __('Add background image.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-ui-accordion',
        ));
    }

    /**
     * Function is used to display Storyful Three Column List html.
     */
    public function storyful_threecol_list_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'threecol_list_items' => '',
                'button_link' => '',
                'background_image' => '',
            ),
            $atts
        );
        $threecol_list_items = array();
        if (!empty($atts['threecol_list_items'])) {
            $threecol_list_items = vc_param_group_parse_atts($atts['threecol_list_items']);
        }
        $background_image = wp_get_attachment_image_url($atts['background_image'], 'full');
        ob_start();
        ?>
        <section class="storyful-three-col-list" style="background-image: url(<?php echo esc_url($background_image); ?>);">
            <div class="container">
                <div class="storyful-three-col-list__title">
                    <h2><?php echo wp_kses_post($atts['title']); ?></h2>
                </div>
                <div class="threecol-wrap">
                    <div class="threecol-list-items">
                    <?php
                    if (!empty($threecol_list_items)) {
                        foreach ($threecol_list_items as $threecol_list_item) {
                            $item_image = ( isset($threecol_list_item['item_image']) && !empty($threecol_list_item['item_image']) ) ? wp_get_attachment_image_url($threecol_list_item['item_image'], 'full') : '';
                            $item_title = ( isset($threecol_list_item['item_title']) && !empty($threecol_list_item['item_title']) ) ? $threecol_list_item['item_title'] : '';
                            $item_description = ( isset($threecol_list_item['item_description']) && !empty($threecol_list_item['item_description']) ) ? $threecol_list_item['item_description'] : '';
                            ?>
                            <div class="threecol-list-items__item">
                                <div class="column-item-img">
                                    <img src="<?php echo esc_url($item_image); ?>" alt="<?php echo esc_attr($item_title); ?>">
                                </div>
                                <h3 class="column-item-title"><?php echo esc_html($item_title); ?></h3>
                                <p class="column-item-desc"><?php echo esc_html($item_description); ?></p>
                            </div>
                            <?php
                        }
                    }
                    ?>
                    </div>
                    <?php if (!empty($atts['button_link'])) { 
                        $button_link = vc_build_link($atts['button_link']);
                        ?>
                        <div class="sbtn sbtn-arrow-primary-v2 wow fadeInLeft">
                            <div class="storyful-three-col-list__button">
                                <a href="<?php echo esc_url($button_link['url']); ?>" class="btn btn-primary" target="<?php echo esc_attr($button_link['target']); ?>"><?php echo esc_html($button_link['title']); ?></a>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </section>
        <?php
        return ob_get_clean();
    }

}