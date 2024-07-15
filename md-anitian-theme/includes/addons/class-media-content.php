<?php
/**
 * The Media Content functionality of the plugin.
 *
 * @package    MD_Bakery_Antian
 * @author     Multidots <info@multidots.com>
 */

namespace MD_ANITIAN\Includes\Addons;


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
            'icon' => 'md-icons fa fa-columns',
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
        $media_contents_list = [];
        if (isset($atts['media_contents_list']) && !empty($atts['media_contents_list'])){
            $media_contents_list = vc_param_group_parse_atts($atts['media_contents_list']);
        }
        ?>
        <div class="bakery_antian__media_content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bakery_antian__heading">
                            <h6><?php echo esc_html($atts['sub_heading']); ?></h6>
                            <h2><?php echo esc_html($atts['heading']); ?></h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="bakery_antian__box" >
                            <?php 
                            foreach ($media_contents_list as $slide) : 
                                $box_image = ( isset($slide['box_image']) && !empty($slide['box_image']) ) ? wp_get_attachment_image_url($slide['box_image'], 'full') : '';
                            ?>
                                <div class="bakery_antian__box-item">
                                    <?php if (!empty($slide['box_image'])) : ?>
                                        <div class="bakery_antian__box-image">
                                            <img src="<?php echo esc_url($box_image); ?>" alt="box Image">
                                        </div>
                                    <?php endif; ?>
                                    <div class="bakery_antiab__box-content">
                                        <?php if (!empty($slide['box_title'])) : ?>
                                            <h4><?php echo esc_html($slide['box_title']); ?></h4>
                                        <?php endif; ?>
                                        <?php 
                                        if (!empty($slide['box_link'])) {
                                            $box_link = vc_build_link($slide['box_link']);
                                            if (!empty($box_link['url'])) {
                                                echo '<a href="'.esc_url($box_link['url']).'" target="'.esc_attr($box_link['target']).'">Read More</a>';
                                            }
                                        }
                                        ?>
                                    </div>
                                </div>
                            <?php 
                            endforeach; 
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}