<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Quote_Image class
 * 
 * @since 1.0.0
 */
class Pointcentral_Quote_Image {

    // Create Pointcentral Quote Image Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_quote_image'));
        add_shortcode('pointcentral_quote_image', array($this, 'pointcentral_quote_image_html'));
    }

    /**
     * Function is used to create Pointcentral Quote Image custom element.
     */
    public function pointcentral_quote_image() {

        // Pointcentral Quote Image.
        vc_map(array(
            'name' => __('Pointcentral Quote Image', 'md-bakery-antian'),
            'base' => 'pointcentral_quote_image',
            'params' => array(
                // Quote Text.
                array(
                    'type' => 'textarea_html',
                    'heading' => __('Quote Text', 'md-bakery-antian'),
                    'param_name' => 'quote_text',
                    'value' => '',
                    'description' => __('Enter quote text.', 'md-bakery-antian'),
                ),
                // Quote Author.
                array(
                    'type' => 'textfield',
                    'heading' => __('Quote Author', 'md-bakery-antian'),
                    'param_name' => 'quote_author',
                    'value' => '',
                    'description' => __('Enter quote author.', 'md-bakery-antian'),
                ),
                // Quote Author Position.
                array(
                    'type' => 'textfield',
                    'heading' => __('Quote Author Position', 'md-bakery-antian'),
                    'param_name' => 'quote_author_position',
                    'value' => '',
                    'description' => __('Enter quote author position.', 'md-bakery-antian'),
                ),
                // Quote Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Quote Image', 'md-bakery-antian'),
                    'param_name' => 'quote_image',
                    'value' => '',
                    'description' => __('Select quote image.', 'md-bakery-antian'),
                ),
                // Quote Image Position.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Quote Image Position', 'md-bakery-antian'),
                    'param_name' => 'quote_image_position',
                    'value' => array(
                        'Left' => 'left',
                        'Right' => 'right',
                    ),
                    'description' => __('Select quote image position.', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-layer-shape-text',
        ));
    }

    /**
     * Function is used to display Pointcentral Quote Image html.
     */
    public function pointcentral_quote_image_html($atts) {

        $atts = shortcode_atts(
            array(
                'quote_text' => '',
                'quote_author' => '',
                'quote_author_position' => '',
                'quote_image' => '',
                'quote_image_position' => 'left',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="pointcentral-quote-image">
            <div class="pointcentral-quote-image-inner">
                <div class="container <?php echo esc_attr($atts['quote_image_position']); ?>">
                    <div class="pointcentral-quote-image__left">
                        <div class="pointcentral-quote-image__content">
                            <div class="pointcentral-quote-image__text"><?php echo wp_kses_post($atts['quote_text']); ?></div>
                            <p class="pointcentral-quote-image__author">
                                <?php echo esc_html($atts['quote_author']); ?>
                                <br />
                                <?php echo esc_html($atts['quote_author_position']); ?>
                            </p>
                        </div>
                    </div>
                    <div class="pointcentral-quote-image__right">
                        <img src="<?php echo esc_url(wp_get_attachment_url($atts['quote_image'], 'full')); ?>" alt="<?php echo esc_attr($atts['quote_author']); ?>" />
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}