<?php
/**
 * The Storyful Newswire functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Newswire class
 * 
 * @since 1.0.0
 */
class Storyful_Newswire {

    // Create Storyful Newswire Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_newswire'));
        add_shortcode('storyful_newswire', array($this, 'storyful_newswire_html'));
    }

    /**
     * Function is used to create Storyful Newswire custom element.
     */
    public function storyful_newswire() {

        // Storyful Newswire.
        vc_map(array(
            'name' => __('Storyful Newswire', 'md-bakery-antian'),
            'base' => 'storyful_newswire',
            'params' => array(
                // Newswire Title
                array(
                    'type' => 'textfield',
                    'heading' => __('Newswire Title', 'md-bakery-antian'),
                    'param_name' => 'newswire_title',
                    'value' => '',
                    'description' => __('Enter Newswire title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Newswire Description
                array(
                    'type' => 'textarea',
                    'heading' => __('Newswire Description', 'md-bakery-antian'),
                    'param_name' => 'newswire_description',
                    'value' => '',
                    'description' => __('Enter Newswire description.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Newswire Button Link
                array(
                    'type' => 'vc_link',
                    'heading' => __('Newswire Button Link', 'md-bakery-antian'),
                    'param_name' => 'newswire_button_link',
                    'value' => '',
                    'description' => __('Add Newswire button link.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Newswire Left Title
                array(
                    'type' => 'textfield',
                    'heading' => __('Newswire Left Title', 'md-bakery-antian'),
                    'param_name' => 'newswire_left_title',
                    'value' => '',
                    'description' => __('Enter Newswire left title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Newswire Left Pre Description
                array(
                    'type' => 'textarea',
                    'heading' => __('Newswire Left Pre Description', 'md-bakery-antian'),
                    'param_name' => 'newswire_left_pre_description',
                    'value' => '',
                    'description' => __('Enter Newswire left pre description.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Newswire Left Mark Description
                array(
                    'type' => 'textarea',
                    'heading' => __('Newswire Left Mark Description', 'md-bakery-antian'),
                    'param_name' => 'newswire_left_mark_description',
                    'value' => '',
                    'description' => __('Enter Newswire left mark description.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Newswire Left Post Description
                array(
                    'type' => 'textarea',
                    'heading' => __('Newswire Left Post Description', 'md-bakery-antian'),
                    'param_name' => 'newswire_left_post_description',
                    'value' => '',
                    'description' => __('Enter Newswire left post description.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Newswire Sub Title
                array(
                    'type' => 'textfield',
                    'heading' => __('Newswire Sub Title', 'md-bakery-antian'),
                    'param_name' => 'newswire_sub_title',
                    'value' => '',
                    'description' => __('Enter Newswire sub title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Newswire Right Image
                array(
                    'type' => 'attach_image',
                    'heading' => __('Newswire Right Image', 'md-bakery-antian'),
                    'param_name' => 'newswire_right_image',
                    'value' => '',
                    'description' => __('Add Newswire right image.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Newswire Theme Style
                array(
                    'type' => 'dropdown',
                    'heading' => __('Newswire Theme Style', 'md-bakery-antian'),
                    'param_name' => 'newswire_theme_style',
                    'value' => array(
                        'Style 1' => 'style1',
                        'Style 2' => 'style2',
                    ),
                    'description' => __('Select Newswire theme style.', 'md-bakery-antian'),
                    'admin_label' => true,
                    'group' => __('Theme Style', 'md-bakery-antian'),
                ),
                // Background Lenear Gradient Color1
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Background Lenear Gradient Color1', 'md-bakery-antian'),
                    'param_name' => 'background_lenear_gradient_color1',
                    'value' => '',
                    'description' => __('Select Background lenear gradient color1.', 'md-bakery-antian'),
                    'admin_label' => true,
                    'group' => __('Theme Style', 'md-bakery-antian'),
                ),
                // Background Lenear Gradient Color2
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Background Lenear Gradient Color2', 'md-bakery-antian'),
                    'param_name' => 'background_lenear_gradient_color2',
                    'value' => '',
                    'description' => __('Select Background lenear gradient color2.', 'md-bakery-antian'),
                    'admin_label' => true,
                    'group' => __('Theme Style', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-information-white',
        ));
    }

    /**
     * Function is used to display Storyful Newswire html.
     */
    public function storyful_newswire_html($atts) {

        $atts = shortcode_atts(
            array(
                'newswire_title' => '',
                'newswire_description' => '',
                'newswire_button_link' => '',
                'newswire_left_title' => '',
                'newswire_left_pre_description' => '',
                'newswire_left_mark_description' => '',
                'newswire_left_post_description' => '',
                'newswire_sub_title' => '',
                'newswire_right_image' => '',
                'newswire_theme_style' => 'style1',
                'background_lenear_gradient_color1' => '',
                'background_lenear_gradient_color2' => '',
            ),
            $atts
        );
        $newswire_right_image = wp_get_attachment_image_url($atts['newswire_right_image'], 'full');
        ob_start();
        ?>
        <div class="newswire-by-storyful <?php echo esc_attr($atts['newswire_theme_style']); ?>" style="background: linear-gradient(90deg, <?php echo esc_attr($atts['background_lenear_gradient_color1']); ?> 0%, <?php echo esc_attr($atts['background_lenear_gradient_color2']); ?> 100%);">
            <div class="container">
                <div class="newswire-by-storyful-top">
                    <div class="newswire-by-storyful-top__left fadeInLeft">
                        <div class="section-title h1">
                            <?php echo wp_kses_post($atts['newswire_left_title']); ?>
                        </div>
                        <h2>
                            <?php echo esc_html($atts['newswire_left_pre_description']); ?>
                            <?php if (!empty($atts['newswire_left_mark_description'])) : ?>
                            <mark>
                                <?php echo esc_html($atts['newswire_left_mark_description']); ?>
                            </mark>
                            <?php endif; ?>
                            <?php echo esc_html($atts['newswire_left_post_description']); ?>
                        </h2>
                        <?php if (!empty($atts['newswire_sub_title'])) : ?>
                            <h3><?php echo wp_kses_post($atts['newswire_sub_title']); ?></h3>
                        <?php endif; ?>
                    </div>
                    <div class="newswire-by-storyful-top__right wow fadeInRight">
                        <div class="side-graphics">
                            <img src="<?php echo esc_url($newswire_right_image); ?>" alt="">
                        </div>
                    </div>
                </div>
                <div class="newswire-by-storyful-buttom">
                    <div class="newswire-by-storyful-buttom__grid">
                        <div class="newswire-by-storyful-items single-col">
                            <div class="newswire-by-storyful-items__item wow fadeInUp">
                                <h3><?php echo esc_html($atts['newswire_title']); ?></h3>
                                <p><?php echo esc_html($atts['newswire_description']); ?></p>
                            </div>
                        </div>
                    </div>
                    <div class="newswire-by-storyful-buttom__contact wow bounceIn">
                        <div class="circle-button">
                            <div class="circle-text">
                                <?php
                                $newswire_button_link = vc_build_link($atts['newswire_button_link']);
                                if (isset($newswire_button_link['url']) && !empty($newswire_button_link['url'])) :
                                    ?>
                                    <a href="<?php echo esc_url($newswire_button_link['url']); ?>" class="btn btn-primary" target="<?php echo esc_attr($newswire_button_link['target']); ?>">
                                        <?php echo esc_html($newswire_button_link['title']); ?>
                                    </a>
                                <?php endif; ?>
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