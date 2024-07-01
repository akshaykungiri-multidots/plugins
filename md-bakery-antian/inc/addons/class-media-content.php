<?php
/**
 * The Media Content functionality of the plugin.
 *
 * @package    MD_Bakery_Antian
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Bakery_Antian\Inc\Addons;


/**
 * Media_Content class
 * 
 * @since 1.0.0
 */
class Media_Content {

    // Create Media Content Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'media_content'));
        add_shortcode('media_content', array($this, 'media_content_html'));
    }

    /**
     * Function is used to create media_content custom element.
     */
    public function media_content() {

        // Media Content With Title as WYSIWYG, Description as WYSIWYG, Button1, Button2 and Background Image
        vc_map(array(
            'name' => __('Media Content', 'md-bakery-antian'),
            'base' => 'media_content',
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
                // Image Boxes.
                array(
                    'type' => 'param_group',
                    'heading' => __('Image Boxes', 'md-bakery-antian'),
                    'param_name' => 'media_contents_list',
                    'value' => '',
                    'params' => array(
                        // Image
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Image', 'md-bakery-antian'),
                            'param_name' => 'box_image',
                            'value' => '',
                            'description' => __('Upload box image.', 'md-bakery-antian'),
                        ),
                        array(
                            'type' => 'textfield',
                            'heading' => __('Box Title', 'md-bakery-antian'),
                            'param_name' => 'box_title',
                            'value' => '',
                            'description' => __('Enter title.', 'md-bakery-antian'),
                        ),
                        // Box Link
                        array(
                            'type' => 'vc_link',
                            'heading' => __('Box Link', 'md-bakery-antian'),
                            'param_name' => 'box_link',
                            'value' => '',
                            'description' => __('Enter link.', 'md-bakery-antian'),
                        ),
                    ),
                ),
            ),
        ));
    }

    /**
     * Function is used to display image banner html.
     */
    public function media_content_html($atts) {
        $atts = shortcode_atts(
            array(
                'sub_heading' => '',
                'heading' => '',
                'media_contents_list' => array(),
            ),
            $atts
        );
        ob_start();
        include MD_BAKERY_ANTIAN_PATH . '/inc/addons/templates/media-content.php';
        return ob_get_clean();
    }

}