<?php
/**
 * The Storyful Resources functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Resources class
 * 
 * @since 1.0.0
 */
class Storyful_Resources {

    // Create Storyful Resources Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_resources'));
        add_shortcode('storyful_resources', array($this, 'storyful_resources_html'));
    }

    /**
     * Function is used to create Storyful Resources custom element.
     */
    public function storyful_resources() {

        // Storyful Resources.
        vc_map(array(
            'name' => __('Storyful Resources', 'md-bakery-antian'),
            'base' => 'storyful_resources',
            'params' => array(
                // Enable Most Popular Resources
                array(
                    'type' => 'checkbox',
                    'heading' => __('Enable Most Popular Resources', 'md-bakery-antian'),
                    'param_name' => 'enable_most_popular_resources',
                    'value' => array(
                        __('Yes', 'md-bakery-antian') => 'yes',
                    ),
                    'description' => __('Enable most popular resources.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Enable Filter By Category
                array(
                    'type' => 'checkbox',
                    'heading' => __('Enable Filter By Category', 'md-bakery-antian'),
                    'param_name' => 'enable_filter_by_category',
                    'value' => array(
                        __('Yes', 'md-bakery-antian') => 'yes',
                    ),
                    'description' => __('Enable filter by category.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Enable Filter By Date
                array(
                    'type' => 'checkbox',
                    'heading' => __('Enable Filter By Date', 'md-bakery-antian'),
                    'param_name' => 'enable_filter_by_date',
                    'value' => array(
                        __('Yes', 'md-bakery-antian') => 'yes',
                    ),
                    'description' => __('Enable filter by date.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Number of Rows
                array(
                    'type' => 'dropdown',
                    'heading' => __('Number of Rows', 'md-bakery-antian'),
                    'param_name' => 'number_of_rows',
                    'value' => array(
                        __('1', 'md-bakery-antian') => '1',
                        __('2', 'md-bakery-antian') => '2',
                        __('3', 'md-bakery-antian') => '3',
                        __('4', 'md-bakery-antian') => '4',
                    ),
                    'description' => __('Select number of rows.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Number of Columns
                array(
                    'type' => 'dropdown',
                    'heading' => __('Number of Columns', 'md-bakery-antian'),
                    'param_name' => 'number_of_columns',
                    'value' => array(
                        __('1', 'md-bakery-antian') => '1',
                        __('2', 'md-bakery-antian') => '2',
                        __('3', 'md-bakery-antian') => '3',
                        __('4', 'md-bakery-antian') => '4',
                    ),
                    'description' => __('Select number of columns.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Enable Subscribe Box
                array(
                    'type' => 'checkbox',
                    'heading' => __('Enable Subscribe Box', 'md-bakery-antian'),
                    'param_name' => 'enable_subscribe_box',
                    'value' => array(
                        __('Yes', 'md-bakery-antian') => 'yes',
                    ),
                    'description' => __('Enable subscribe box.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'vc_icon-vc-media-grid',
        ));
    }

    /**
     * Function is used to display Storyful Resources html.
     */
    public function storyful_resources_html($atts) {

        $atts = shortcode_atts(
            array(
                'enable_most_popular_resources' => '',
                'enable_filter_by_category' => '',
                'enable_filter_by_date' => '',
                'number_of_rows' => '',
                'number_of_columns' => '',
                'enable_subscribe_box' => '',
            ),
            $atts
        );

        $resource_type = "";
        $resources_cat = "";
        $filter_by_date = "";
        $page_number = 1;
        ob_start();
        ?>
        <div class="storyful-resources">
            <div class="storyful-resources__container">
                <?php require_once get_template_directory() . '/includes/addons/templates/storyful-resources.php'; ?>
            </div>
            <input type="hidden" class="resources-attributes" value='<?php echo wp_json_encode($atts); ?>'>
            <input type="hidden" class="storyful_post_type" value="resources" />
        </div>
        <?php
        return ob_get_clean();
    }

}