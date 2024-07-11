<?php
/**
 * The Card Block functionality of the plugin.
 *
 * @package    MD_ANITIAN
 * @author     Multidots <info@multidots.com>
 */

namespace MD_ANITIAN\Includes\Addons;


/**
 * Card_Block class
 * 
 * @since 1.0.0
 */
class Card_Block {

    // Create Card Block Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'card_block'));
        add_shortcode('card_block', array($this, 'card_block_html'));
    }

    /**
     * Function is used to create Card Block custom element.
     */
    public function card_block() {

        // Card Block.
        vc_map(array(
            'name' => __('Card Block', 'md-bakery-antian'),
            'base' => 'card_block',
            'params' => array(
                // Sub Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Sub Title', 'md-bakery-antian'),
                    'param_name' => 'sub_title',
                    'value' => '',
                    'description' => __('Enter sub title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Title
                array(
                    'type' => 'textfield',
                    'heading' => __('Title', 'md-bakery-antian'),
                    'param_name' => 'title',
                    'value' => '',
                    'description' => __('Enter title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Content
                array(
                    'type' => 'textarea',
                    'heading' => __('Heading Content', 'md-bakery-antian'),
                    'param_name' => 'heading_content',
                    'value' => '',
                    'description' => __('Enter content.', 'md-bakery-antian'),
                ),
                // Card Block Style.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Card Block Style', 'md-bakery-antian'),
                    'param_name' => 'card_block_style',
                    'value' => array(
                        __('Style 1', 'md-bakery-antian') => 'style1',
                        __('Style 2', 'md-bakery-antian') => 'style2',
                        __('Style 3', 'md-bakery-antian') => 'style3',
                    ),
                    'description' => __('Select card block style.', 'md-bakery-antian'),
                ),

                array(
                    'type' => 'param_group',
                    'heading' => __('Card Block', 'md-bakery-antian'),
                    'value' => '',
                    'param_name' => 'card_block',
                    'min' => 3,
                    'max' => 3,
                    'params' => array(
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Card Image', 'md-bakery-antian'),
                            'param_name' => 'card_image',
                            'value' => '',
                            'description' => __('Upload card image.', 'md-bakery-antian'),
                        ),
                        array(
                            'type' => 'textfield',
                            'heading' => __('Card Title', 'md-bakery-antian'),
                            'param_name' => 'card_title',
                            'value' => '',
                            'description' => __('Enter card title.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                        array(
                            'type' => 'textarea',
                            'heading' => __('Card Description', 'md-bakery-antian'),
                            'param_name' => 'card_description',
                            'value' => '',
                            'description' => __('Enter card description.', 'md-bakery-antian'),
                        ),
                        // Learn More Link.
                        array(
                            'type' => 'vc_link',
                            'heading' => __('Learn More Link', 'md-bakery-antian'),
                            'param_name' => 'learn_more_link',
                            'value' => '',
                            'description' => __('Enter learn more link.', 'md-bakery-antian'),
                        ),
                    ),
                ),
            ),
            'category' => __('Antian', 'md-bakery-antian'),
            'icon' => 'icon-wpb-application-icon-large',
        ));
    }

    /**
     * Function is used to display Card Block html.
     */
    public function card_block_html($atts) {

        $atts = shortcode_atts(
            array(
                'sub_title' => '',
                'title' => '',
                'heading_content' => '',
                'card_block_style' => 'style1',
                'card_block' => '',
            ),
            $atts
        );
        $card_block = [];
        if (isset($atts['card_block']) && !empty($atts['card_block'])){
            $card_block = vc_param_group_parse_atts($atts['card_block']);
        }
        ob_start();
        ?>
        <div class="md_anitian_card_block <?php echo esc_attr($atts['card_block_style']); ?>">
            <div class="md_anitian_card_block__head">
                <div class="container">
                    <div class="md_anitian_card_block__heading">
                        <h3><?php echo esc_html($atts['sub_title']); ?></h3>
                        <h2><?php echo wp_kses_post($atts['title']); ?></h2>
                        <p><?php echo esc_html($atts['heading_content']); ?></p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="md_anitian_card_block__content">
                    <?php
                    if (!empty($card_block)) {
                        foreach ($card_block as $card) {
                            $card_title = (!empty($card['card_title']) ? $card['card_title'] : '');
                            $card_description = (!empty($card['card_description']) ? $card['card_description'] : '');
                            $learn_more_link = [];
                            if (!empty($card['learn_more_link'])) {
                                $learn_more_link = vc_build_link($card['learn_more_link']);
                            }
                            ?>
                            <div class="md_anitian_card_block__item">
                                <div class="md_anitian_card_block__item__image">
                                    <?php
                                    if (!empty($card['card_image'])) {
                                        $card_image = wp_get_attachment_image_src($card['card_image'], 'full');
                                        ?>
                                        <img src="<?php echo esc_url($card_image[0]); ?>" alt="<?php echo esc_attr($card['card_title']); ?>">
                                    <?php } ?>
                                </div>
                                <div class="md_anitian_card_block__item__content">
                                    <h3><?php echo esc_html($card_title); ?></h3>
                                    <div class="md_anitian_card_block__item__content__link">
                                        <p><?php echo esc_html($card_description); ?></p>
                                        <?php if (!empty($learn_more_link)) { ?>
                                            <a href="<?php echo esc_url($learn_more_link['url']); ?>" target="<?php echo esc_attr($learn_more_link['target']); ?>">
                                                <?php echo esc_html($learn_more_link['title']); ?>
                                                <i class="fa fa-long-arrow-right"></i>
                                            </a>
                                        <?php } ?>
                                    </div>
                                </div>
                            </div>
                        <?php } ?>
                    <?php } ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}