<?php
/**
 * The Icon Box functionality of the plugin.
 *
 * @package    MD_Partner_Program
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Partner_Program\Inc\Addons;


/**
 * Icon_Box class
 * 
 * @since 1.0.0
 */
class Icon_Box {

    // Create Icon Box Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'icon_box'));
        add_shortcode('icon_box', array($this, 'icon_box_html'));
    }

    /**
     * Function is used to create icon_box custom element.
     */
    public function icon_box() {

        // Icon Box With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Icon Box', 'md-bakery-antian'),
            'base' => 'icon_box',
            'category' => __('Antian', 'md-bakery-antian'),
            // Repeatable field
            'params' => array(
                // Sub Heading
                array(
                    'type' => 'textfield',
                    'heading' => __('Sub Heading', 'md-bakery-antian'),
                    'param_name' => 'sub_heading',
                    'value' => '',
                    'description' => __('Enter sub heading.', 'md-bakery-antian'),
                ),
                // Heading
                array(
                    'type' => 'textfield',
                    'heading' => __('Heading', 'md-bakery-antian'),
                    'param_name' => 'heading',
                    'value' => '',
                    'description' => __('Enter heading.', 'md-bakery-antian'),
                ),
                // Description
                array(
                    'type' => 'textarea',
                    'heading' => __('Description', 'md-bakery-antian'),
                    'param_name' => 'description',
                    'value' => '',
                    'description' => __('Enter description.', 'md-bakery-antian'),
                ),
                // Icon Boxes.
                array(
                    'type' => 'param_group',
                    'heading' => __('Icon Boxes', 'md-bakery-antian'),
                    'param_name' => 'icon_boxes',
                    'value' => '',
                    'params' => array(
                        // Font Awesome Icon Selection.
                        array(
                            'type' => 'iconpicker',
                            'heading' => __('Icon', 'text-domain'),
                            'param_name' => 'icon',
                            'settings' => array(
                                'emptyIcon' => true, // Display an "empty" icon as an option
                                'iconsPerPage' => 200, // Number of icons per page
                                'type' => 'fontawesome', // Use Font Awesome library
                            ),
                            'description' => __('Select an icon from the Font Awesome library.', 'text-domain'),
                        ),
                        array(
                            'type' => 'textfield',
                            'heading' => __('Box Title', 'md-bakery-antian'),
                            'param_name' => 'box_title',
                            'value' => '',
                            'description' => __('Enter title.', 'md-bakery-antian'),
                        ),
                        // Box Content
                        array(
                            'type' => 'textarea',
                            'heading' => __('Box Content', 'md-bakery-antian'),
                            'param_name' => 'box_content',
                            'value' => '',
                            'description' => __('Enter content.', 'md-bakery-antian'),
                        ),
                    ),
                ),
            ),
        ));
    }

    /**
     * Function is used to display icon box html.
     */
    public function icon_box_html($atts) {
        $atts = shortcode_atts(
            array(
                'sub_heading' => '',
                'heading' => '',
                'description' => '',
                'icon_boxes' => array(),
            ),
            $atts
        );
        $image_boxes = vc_param_group_parse_atts($atts['icon_boxes']);
        ob_start();
        ?>
        <div class="bakery_partner__icon-box">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bakery_partner__icon-box__heading">
                            <div class="md_bakery_partner_pre_text">
                                <img class="md_bakery_partner_pre_text__image" src="<?php echo esc_url(MD_PARTNER_PROGRAM_URL . '/assets/src/images/2-blocks-Accelerate-icon.png'); ?>" alt="pre-text" />
                                <h6><?php echo esc_html($atts['sub_heading']); ?></h6>
                            </div>
                            <h2><?php echo esc_html($atts['heading']); ?></h2>
                            <p><?php echo wp_kses_post($atts['description']); ?></p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bakery_antian__box" >
                            <?php 
                            foreach ($image_boxes as $slide) : 
                            ?>
                                <div class="bakery_antian__box-item">
                                    <div class="bakery_antian__box-icon">
                                        <i class="<?php echo esc_attr($slide['icon']); ?>"></i>
                                    </div>
                                    <div class="bakery_antiab__box-content">
                                        <h4><?php echo esc_html($slide['box_title']); ?></h4>
                                        <p><?php echo esc_html($slide['box_content']); ?></p>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}