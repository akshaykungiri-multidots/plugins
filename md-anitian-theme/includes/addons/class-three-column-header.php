<?php
/**
 * The Three Column Header functionality of the plugin.
 *
 * @package    MD_ANITIAN
 * @author     Multidots <info@multidots.com>
 */

namespace MD_ANITIAN\Includes\Addons;


/**
 * Three_Column_Header class
 * 
 * @since 1.0.0
 */
class Three_Column_Header {

    // Create Three Column Header Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'three_column_header'));
        add_shortcode('three_column_header', array($this, 'three_column_header_html'));
    }

    /**
     * Function is used to create Three Column Header custom element.
     */
    public function three_column_header() {

        // Three Column Header.
        vc_map(array(
            'name' => __('Three Column Header', 'md-bakery-antian'),
            'base' => 'three_column_header',
            'params' => array(
                array(
                    'type' => 'textfield',
                    'heading' => __('Title', 'md-bakery-antian'),
                    'param_name' => 'title',
                    'value' => 'Three Column Header',
                    'description' => __('Enter title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Background Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'background_image',
                    'value' => 'Three Column Header Description',
                    'description' => __('Upload background image.', 'md-bakery-antian'),
                ),
                array(
                    'type' => 'param_group',
                    'value' => '',
                    'param_name' => 'three_column_header',
                    'min' => 3,
                    'max' => 3,
                    'params' => array(
                        array(
                            'type' => 'textfield',
                            'heading' => __('Column Title', 'md-bakery-antian'),
                            'param_name' => 'column_title',
                            'value' => '',
                            'description' => __('Enter column title.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                        array(
                            'type' => 'textarea',
                            'heading' => __('Column Description', 'md-bakery-antian'),
                            'param_name' => 'column_description',
                            'value' => '',
                            'description' => __('Enter column description.', 'md-bakery-antian'),
                        ),
                        array(
                            'type' => 'vc_link',
                            'heading' => __('Column Link', 'md-bakery-antian'),
                            'param_name' => 'column_link',
                            'value' => '',
                            'description' => __('Enter column link.', 'md-bakery-antian'),
                        ),
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Column Image', 'md-bakery-antian'),
                            'param_name' => 'column_image',
                            'value' => '',
                            'description' => __('Upload column image.', 'md-bakery-antian'),
                        ),
                    ),
                ),
            ),
            'category' => __('Antian', 'md-bakery-antian'),
            'icon' => 'icon-wpb-call-to-action',
        ));
    }

    /**
     * Function is used to display Three Column Header html.
     */
    public function three_column_header_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'background_image' => '',
                'three_column_header' => '',
            ),
            $atts
        );
        $background_image = "";
        if (!empty($atts['background_image'])) {
            $background_image = wp_get_attachment_image_src($atts['background_image'], 'full');
            $background_image = $background_image[0];
        }
        $three_column_header = [];
        if (isset($atts['three_column_header']) && !empty($atts['three_column_header'])){
            $three_column_header = vc_param_group_parse_atts($atts['three_column_header']);
        }
        ob_start();
        ?>
        <div class="md_anitian_three_column_header">
            <div class="md_anitian_three_column_header__bg_image" style="background-image: url(<?php echo esc_url($background_image); ?>);">
                <div class="container">
                    <div class="md_anitian_three_column_header__heading">
                        <h2><?php echo esc_html($atts['title']); ?></h2>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="md_anitian_three_column_header__content">
                    <?php
                    if (!empty($three_column_header)) {
                        foreach ($three_column_header as $column) {
                            $column_title = (!empty($column['column_title']) ? $column['column_title'] : '');
                            $column_description = (!empty($column['column_description']) ? $column['column_description'] : '');
                            $column_link = [];
                            if (!empty($column['column_link'])) {
                                $column_link = vc_build_link($column['column_link']);
                            }
                            ?>
                            <div class="md_anitian_three_column_header__item">
                                <div class="md_anitian_three_column_header__item__image">
                                    <?php
                                    if (!empty($column['column_image'])) {
                                        $column_image = wp_get_attachment_image_src($column['column_image'], 'full');
                                        ?>
                                        <img src="<?php echo esc_url($column_image[0]); ?>" alt="<?php echo esc_attr($column['column_title']); ?>">
                                    <?php } ?>
                                </div>
                                <div class="md_anitian_three_column_header__item__content">
                                    <h5><?php echo esc_html($column_title); ?></h5>
                                    <p><?php echo esc_html($column_description); ?></p>
                                    <?php
                                    if ( isset($column_link['url']) && !empty($column_link['url']) ) { 
                                        ?>
                                        <a href="<?php echo esc_url($column_link['url']); ?>" class="md_anitian_three_column_header__item__link" target="<?php echo esc_attr($column_link['target']); ?>">
                                            <?php echo esc_html($column_link['title']); ?>
                                            <i class="fa fa-long-arrow-right"></i>
                                        </a>
                                    <?php } ?>
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