<?php
/**
 * The Storyful Posts functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Posts class
 * 
 * @since 1.0.0
 */
class Storyful_Posts {

    // Create Storyful Posts Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_posts'));
        add_shortcode('storyful_posts', array($this, 'storyful_posts_html'));
    }

    /**
     * Function is used to create Storyful Posts custom element.
     */
    public function storyful_posts() {

        // Storyful Posts.
        vc_map(array(
            'name' => __('Storyful Posts', 'md-bakery-antian'),
            'base' => 'storyful_posts',
            'params' => array(
                // Enable Most Popular Posts
                array(
                    'type' => 'checkbox',
                    'heading' => __('Enable Most Popular Posts', 'md-bakery-antian'),
                    'param_name' => 'enable_most_popular_post',
                    'value' => array(
                        __('Yes', 'md-bakery-antian') => 'yes',
                    ),
                    'description' => __('Enable most popular posts.', 'md-bakery-antian'),
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
            'icon' => 'icon-wpb-application-icon-large',
        ));
    }

    /**
     * Function is used to display Storyful Posts html.
     */
    public function storyful_posts_html($atts) {

        $atts = shortcode_atts(
            array(
                'enable_most_popular_post' => '',
                'enable_filter_by_category' => '',
                'enable_filter_by_date' => '',
                'number_of_rows' => '',
                'number_of_columns' => '',
                'enable_subscribe_box' => '',
            ),
            $atts
        );

        $post_cat = "";
        $filter_by_date = "";
        $page_number = 1;
        $search_val = "";
        ob_start();
        ?>
        <div class="storyful-resources storyful-posts">
            <div class="storyful-resources__container">
                <?php require_once get_template_directory() . '/includes/addons/templates/storyful-posts-template.php'; ?>
            </div>
            <input type="hidden" class="resources-attributes" value='<?php echo wp_json_encode($atts); ?>'>
            <input type="hidden" class="storyful_post_type" value="post" />
        </div>
        <?php
        return ob_get_clean();
    }

}