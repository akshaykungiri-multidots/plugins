<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes\Addons;


/**
 * Pointcentral_Tab_Banner class
 * 
 * @since 1.0.0
 */
class Pointcentral_Tab_Banner {

    // Create Pointcentral Tab Banner Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'pointcentral_tab_banner'));
        add_shortcode('pointcentral_tab_banner', array($this, 'pointcentral_tab_banner_html'));
    }

    /**
     * Function is used to create Pointcentral Tab Banner custom element.
     */
    public function pointcentral_tab_banner() {

        // Pointcentral Tab Banner.
        vc_map(array(
            'name' => __('Pointcentral Tab Banner', 'md-bakery-antian'),
            'base' => 'pointcentral_tab_banner',
            'params' => array(
                // Tab Banner Tabs.
                array(
                    'type' => 'param_group',
                    'heading' => __('Tab Banner Tabs', 'md-bakery-antian'),
                    'param_name' => 'tab_banner_tabs',
                    'value' => '',
                    'params' => array(
                        // Tab Icon Select.
                        array(
                            'type' => 'iconpicker',
                            'heading' => __('Tab Icon', 'md-bakery-antian'),
                            'param_name' => 'tab_icon',
                            'value' => '',
                            'description' => __('Select tab icon.', 'md-bakery-antian'),
                        ),
                        // Tab Title.
                        array(
                            'type' => 'textfield',
                            'heading' => __('Tab Title', 'md-bakery-antian'),
                            'param_name' => 'tab_title',
                            'value' => '',
                            'description' => __('Enter tab title.', 'md-bakery-antian'),
                        ),
                        // Tab Content Heading.
                        array(
                            'type' => 'textfield',
                            'heading' => __('Tab Content Heading', 'md-bakery-antian'),
                            'param_name' => 'tab_content_heading',
                            'value' => '',
                            'description' => __('Enter tab content heading.', 'md-bakery-antian'),
                        ),
                        // Tab Content Description.
                        array(
                            'type' => 'textarea',
                            'heading' => __('Tab Content Description', 'md-bakery-antian'),
                            'param_name' => 'tab_content_description',
                            'value' => '',
                            'description' => __('Enter tab content description.', 'md-bakery-antian'),
                        ),
                        // Tab Content Button Link.
                        array(
                            'type' => 'vc_link',
                            'heading' => __('Tab Content Button Link', 'md-bakery-antian'),
                            'param_name' => 'tab_content_button_link',
                            'value' => '',
                            'description' => __('Enter tab content button link.', 'md-bakery-antian'),
                        ),
                        // Tab Content Image.
                        array(
                            'type' => 'attach_image',
                            'heading' => __('Tab Content Image', 'md-bakery-antian'),
                            'param_name' => 'tab_content_image',
                            'value' => '',
                            'description' => __('Select tab content image.', 'md-bakery-antian'),
                        ),
                    ),
                    'description' => __('Add tab banner tabs.', 'md-bakery-antian'),
                ),
                // Tab List Background Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Tab List Background Color', 'md-bakery-antian'),
                    'param_name' => 'tab_list_background_color',
                    'value' => '',
                    'description' => __('Select tab list background color.', 'md-bakery-antian'),
                    'group' => __('Design Option', 'md-bakery-antian'),
                ),
                // Tab Content Background Color.
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Tab Content Background Color', 'md-bakery-antian'),
                    'param_name' => 'tab_content_background_color',
                    'value' => '',
                    'description' => __('Select tab content background color.', 'md-bakery-antian'),
                    'group' => __('Design Option', 'md-bakery-antian'),
                ),
            ),
            'category' => __('Pointcentral', 'md-bakery-antian'),
            'icon' => 'icon-wpb-layout_sidebar',
        ));
    }

    /**
     * Function is used to display Pointcentral Tab Banner html.
     */
    public function pointcentral_tab_banner_html($atts) {

        $atts = shortcode_atts(
            array(
                'tab_banner_tabs' => '',
                'tab_list_background_color' => '',
                'tab_content_background_color' => '',
            ),
            $atts
        );
        $tab_banner_tabs = [];
        if (!empty($atts['tab_banner_tabs'])) {
            $tab_banner_tabs = vc_param_group_parse_atts($atts['tab_banner_tabs']);
        }
        ob_start();
        ?>
        <div class="pointcentral-tab-banner">
            <div class="container">
                <div class="tab-list" style="background-color: <?php echo esc_attr($atts['tab_list_background_color']); ?>">
                    <div class="tab-list-inner">
                        <?php
                        if (!empty($tab_banner_tabs)) {
                            $activeClass = "active";
                            foreach ($tab_banner_tabs as $key => $tab_banner_tab) {
                                $icon = ( isset($tab_banner_tab['tab_icon']) && !empty($tab_banner_tab['tab_icon']) ) ? $tab_banner_tab['tab_icon'] : 'fa fa-home';
                                $tab_title = ( isset($tab_banner_tab['tab_title']) && !empty($tab_banner_tab['tab_title']) ) ? $tab_banner_tab['tab_title'] : '';
                                ?>
                                <div class="tab-list-item <?php echo esc_attr($activeClass); ?>" data-tab="<?php echo esc_attr($key); ?>"> 
                                    <i class="<?php echo esc_attr($icon); ?>"></i>
                                    <span><?php echo wp_kses_post($tab_title); ?></span>
                                </div>
                                <?php
                                $activeClass = "";
                            }
                        }
                        ?>
                    </div>
                </div>
                <div class="tab-content" style="background-color: <?php echo esc_attr($atts['tab_content_background_color']); ?>">
                    <?php
                    if (!empty($tab_banner_tabs)) {
                        $activeClass = "active";
                        foreach ($tab_banner_tabs as $key => $tab_banner_tab) {
                            $tab_content_heading = ( isset($tab_banner_tab['tab_content_heading']) && !empty($tab_banner_tab['tab_content_heading']) ) ? $tab_banner_tab['tab_content_heading'] : '';
                            $tab_content_description = ( isset($tab_banner_tab['tab_content_description']) && !empty($tab_banner_tab['tab_content_description']) ) ? $tab_banner_tab['tab_content_description'] : '';
                            ?>
                            <div class="tab-content-item <?php echo esc_attr($activeClass); ?>" data-tab="<?php echo esc_attr($key); ?>">
                                <div class="tab-content-inner">
                                    <div class="tab-content-left">
                                        <div class="tab-content-left-inner">
                                            <h2><?php echo esc_html($tab_content_heading); ?></h2>
                                            <p><?php echo esc_html($tab_content_description); ?></p>
                                            <?php
                                            if (isset($tab_banner_tab['tab_content_button_link']) && !empty($tab_banner_tab['tab_content_button_link'])) {
                                                $tab_content_button_link = vc_build_link($tab_banner_tab['tab_content_button_link']);
                                                ?>
                                                <a href="<?php echo esc_url($tab_content_button_link['url']); ?>" class="tab-content-button"><?php echo esc_html($tab_content_button_link['title']); ?></a>
                                                <?php
                                            }
                                            ?>
                                        </div>
                                    </div>
                                    <?php if (isset($tab_banner_tab['tab_content_image']) && !empty($tab_banner_tab['tab_content_image'])) : ?>
                                        <div class="tab-content-right">
                                            <img src="<?php echo esc_url(wp_get_attachment_url($tab_banner_tab['tab_content_image'])); ?>" alt="<?php echo esc_attr($tab_content_heading); ?>">
                                        </div>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <?php
                            $activeClass = "";
                        }
                    }
                    ?>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}