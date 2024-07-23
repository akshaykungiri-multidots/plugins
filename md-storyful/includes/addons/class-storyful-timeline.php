<?php
/**
 * The Storyful Timeline functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Timeline class
 * 
 * @since 1.0.0
 */
class Storyful_Timeline {

    // Create Storyful Timeline Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_timeline'));
        add_shortcode('storyful_timeline', array($this, 'storyful_timeline_html'));
    }

    /**
     * Function is used to create Storyful Timeline custom element.
     */
    public function storyful_timeline() {

        // Storyful Timeline.
        vc_map(array(
            'name' => __('Storyful Timeline', 'md-bakery-antian'),
            'base' => 'storyful_timeline',
            'params' => array(
                // Timeline Title
                array(
                    'type' => 'textfield',
                    'heading' => __('Timeline Title', 'md-bakery-antian'),
                    'param_name' => 'timeline_title',
                    'value' => '',
                    'description' => __('Enter timeline title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Timeline Items
                array(
                    'type' => 'param_group',
                    'heading' => __('Timeline Items', 'md-bakery-antian'),
                    'param_name' => 'timeline_items',
                    'value' => '',
                    'params' => array(
                        // Timeline Year
                        array(
                            'type' => 'textfield',
                            'heading' => __('Timeline Year', 'md-bakery-antian'),
                            'param_name' => 'timeline_year',
                            'value' => '',
                            'description' => __('Enter timeline year.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                        // Timeline Title
                        array(
                            'type' => 'textfield',
                            'heading' => __('Timeline Title', 'md-bakery-antian'),
                            'param_name' => 'timeline_title',
                            'value' => '',
                            'description' => __('Enter timeline title.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                        // Timeline Description
                        array(
                            'type' => 'textarea',
                            'heading' => __('Timeline Description', 'md-bakery-antian'),
                            'param_name' => 'timeline_description',
                            'value' => '',
                            'description' => __('Enter timeline description.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                        // Timeline Image
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Timeline Image', 'md-bakery-antian'),
                            'param_name' => 'timeline_image',
                            'value' => '',
                            'description' => __('Upload timeline image.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                    ),
                    'description' => __('Enter timeline items.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-ui-pageable',
        ));
    }

    /**
     * Function is used to display Storyful Timeline html.
     */
    public function storyful_timeline_html($atts) {

        $atts = shortcode_atts(
            array(
                'timeline_title' => '',
                'timeline_items' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="storyful-timeline">
            <div class="container">
                <div class="storyful-timeline-items">
                    <?php
                    if (!empty($atts['timeline_items'])) {
                    $timeline_items = vc_param_group_parse_atts($atts['timeline_items']);
                    $activeClass = 'active';
                    ?>
                    <div class="wrapper__box-inner">
                        <?php foreach ($timeline_items as $key => $timeline_item) {
                            $timeline_item_title = ( isset($timeline_item['timeline_title']) && !empty($timeline_item['timeline_title']) ) ? $timeline_item['timeline_title'] : '';
                            $timeline_item_description = ( isset($timeline_item['timeline_description']) && !empty($timeline_item['timeline_description']) ) ? $timeline_item['timeline_description'] : '';
                            ?>
                            <div class="storyful-timeline-item <?php echo esc_attr($activeClass); ?>" data-key="<?php echo esc_attr($key); ?>">
                                <?php if (isset($timeline_item['timeline_image']) && !empty($timeline_item['timeline_image'])) { ?>
                                    <div class="storyful-timeline-item-image">
                                        <?php echo wp_get_attachment_image($timeline_item['timeline_image'], 'full'); ?>
                                    </div>
                                <?php } ?>
                                <div class="storyful-timeline-content">
                                    <h3 class="storyful-timeline-title"><?php echo esc_html($atts['timeline_title']); ?></h3>
                                    <h4 class="storyful-timeline-item-title"><?php echo esc_html($timeline_item_title); ?></h4>
                                    <p class="storyful-timeline-item-description"><?php echo esc_html($timeline_item_description); ?></p>
                                </div>
                            </div>
                        <?php 
                        $activeClass = '';
                        } 
                        ?>
                    </div>
                    <div class="storyful-timeline-years">
                        <?php 
                        $activeClass = 'active';
                        foreach ($timeline_items as $key => $timeline_item) { 
                            $timeline_item_year = ( isset($timeline_item['timeline_year']) && !empty($timeline_item['timeline_year']) ) ? $timeline_item['timeline_year'] : '';
                        ?>
                            <div class="storyful-timeline-year <?php echo esc_attr($activeClass); ?>" data-key="<?php echo esc_attr($key); ?>">
                                <h4><?php echo esc_html($timeline_item_year); ?></h4>
                            </div>
                        <?php 
                        $activeClass = '';
                        } 
                        ?>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}