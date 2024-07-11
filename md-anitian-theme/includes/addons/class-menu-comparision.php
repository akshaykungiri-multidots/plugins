<?php
/**
 * The Menu Comparision functionality of the plugin.
 *
 * @package    MD_ANITIAN
 * @author     Multidots <info@multidots.com>
 */

namespace MD_ANITIAN\Includes\Addons;


/**
 * Menu_Comparision class
 * 
 * @since 1.0.0
 */
class Menu_Comparision {

    // Create Menu Comparision Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'menu_comparision'));
        add_shortcode('menu_comparision', array($this, 'menu_comparision_html'));
    }

    /**
     * Function is used to create Menu Comparision custom element.
     */
    public function menu_comparision() {

        // Menu Comparision.
        vc_map(array(
            'name' => __('Menu Comparision', 'md-bakery-antian'),
            'base' => 'menu_comparision',
            'params' => array(
                // Title
                array(
                    'type' => 'textfield',
                    'heading' => __('Title', 'md-bakery-antian'),
                    'param_name' => 'title',
                    'value' => '',
                    'description' => __('Enter title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                array(
                    'type' => 'param_group',
                    'heading' => __('Menu Comparision', 'md-bakery-antian'),
                    'value' => '',
                    'param_name' => 'menu_comparision',
                    'min' => 3,
                    'max' => 3,
                    'params' => array(
                        // Table Color.
                        array(
                            'type' => 'colorpicker',
                            'heading' => __('Table Color', 'md-bakery-antian'),
                            'param_name' => 'table_color',
                            'value' => '',
                            'description' => __('Select table color.', 'md-bakery-antian'),
                        ),
                        // Table Title.
                        array(
                            'type' => 'textfield',
                            'heading' => __('Table Title', 'md-bakery-antian'),
                            'param_name' => 'table_title',
                            'value' => '',
                            'description' => __('Enter table title.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                        // Table List.
                        array(
                            'type' => 'param_group',
                            'heading' => __('Table List', 'md-bakery-antian'),
                            'value' => '',
                            'param_name' => 'table_list',
                            'params' => array(
                                // Table List Title.
                                array(
                                    'type' => 'textfield',
                                    'heading' => __('Table List Title', 'md-bakery-antian'),
                                    'param_name' => 'table_list_title',
                                    'value' => '',
                                    'description' => __('Enter table list title.', 'md-bakery-antian'),
                                    'admin_label' => true,
                                ),
                                // Table List Yes/No.
                                array(
                                    'type' => 'dropdown',
                                    'heading' => __('Table List Yes/No', 'md-bakery-antian'),
                                    'param_name' => 'table_list_yes_no',
                                    'value' => array(
                                        __('Yes', 'md-bakery-antian') => 'yes',
                                        __('No', 'md-bakery-antian') => 'no',
                                    ),
                                    'description' => __('Select table list yes/no.', 'md-bakery-antian'),
                                ),
                            ),
                        ),
                    ),
                ),
            ),
            'category' => __('Antian', 'md-bakery-antian'),
            'icon' => 'vc_icon-vc-media-grid',
        ));
    }

    /**
     * Function is used to display Menu Comparision html.
     */
    public function menu_comparision_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'menu_comparision' => '',
            ),
            $atts
        );
        $menu_comparision = [];
        if (isset($atts['menu_comparision']) && !empty($atts['menu_comparision'])){
            $menu_comparision = vc_param_group_parse_atts($atts['menu_comparision']);
        }
        ob_start();
        ?>
        <div class="md_anitian_menu_comparision">
            <div class="md_anitian_menu_comparision__head">
                <div class="container">
                    <div class="md_anitian_menu_comparision__heading">
                        <h2><?php echo wp_kses_post($atts['title']); ?></h2>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="md_anitian_menu_comparision__content">
                    <?php
                    if (!empty($menu_comparision)) {
                        foreach ($menu_comparision as $value) {
                            $menu_list = [];
                            if (isset($value['table_list']) && !empty($value['table_list'])){
                                $menu_list = vc_param_group_parse_atts($value['table_list']);
                            }
                            $menu_title = ( isset($value['table_title']) && !empty($value['table_title']) ) ? $value['table_title'] : '';
                            $table_color = ( isset($value['table_color']) && !empty($value['table_color']) ) ? $value['table_color'] : '';
                            ?>
                            <div class="md_anitian_menu_comparision__table">
                                <div class="md_anitian_menu_comparision__table_head" style="background-color: <?php echo esc_attr($table_color); ?>">
                                    <h3><?php echo esc_html($menu_title); ?></h3>
                                </div>
                                <ul>
                                    <?php
                                    if (!empty($menu_list)) {
                                        foreach ($menu_list as $list) {
                                            if (empty($list['table_list_title'])) {
                                                continue;
                                            }
                                            ?>
                                            <li>
                                                <?php if ($list['table_list_yes_no'] == 'yes') { ?>
                                                    <i class="fa fa-check"></i>
                                                <?php } else { ?>
                                                    <i class="fa fa-times"></i>
                                                <?php } ?>
                                                <p><?php echo esc_html($list['table_list_title']); ?></p>
                                            </li>
                                            <?php
                                        }
                                    }
                                    ?>
                                </ul>
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