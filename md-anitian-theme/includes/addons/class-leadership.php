<?php
/**
 * The Leadership Title functionality of the plugin.
 *
 * @package    MD_ANITIAN
 * @author     Multidots <info@multidots.com>
 */

namespace MD_ANITIAN\Includes\Addons;


/**
 * Leadership class
 * 
 * @since 1.0.0
 */
class Leadership {

    // Create Leadership Title Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'leadership'));
        add_shortcode('leadership', array($this, 'leadership_html'));
    }

    /**
     * Function is used to create Leadership Title custom element.
     */
    public function leadership() {

        // Leadership Title.
        vc_map(array(
            'name' => __('Leadership Title', 'md-bakery-antian'),
            'base' => 'leadership',
            'params' => array(
                // Logo
                array(
                    'type' => 'attach_image',
                    'heading' => __('Logo', 'md-bakery-antian'),
                    'param_name' => 'logo',
                    'value' => '',
                    'description' => __('Add logo.', 'md-bakery-antian'),
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
                // Leadership Tabs.
                array(
                    'type' => 'param_group',
                    'value' => '',
                    'param_name' => 'leadership_tabs',
                    'heading' => __('Leadership Tabs', 'md-bakery-antian'),
                    'description' => __('Add Leadership Tabs.', 'md-bakery-antian'),
                    'params' => array(
                        // Name
                        array(
                            'type' => 'textfield',
                            'heading' => __('Tab Title', 'md-bakery-antian'),
                            'param_name' => 'tab_title',
                            'value' => '',
                            'description' => __('Enter tab title.', 'md-bakery-antian'),
                            'admin_label' => true,
                        ),
                        // Add Leaders.
                        array(
                            'type' => 'param_group',
                            'value' => '',
                            'param_name' => 'leaders',
                            'heading' => __('Leaders', 'md-bakery-antian'),
                            'description' => __('Add Leaders.', 'md-bakery-antian'),
                            'params' => array(
                                // Name
                                array(
                                    'type' => 'textfield',
                                    'heading' => __('Name', 'md-bakery-antian'),
                                    'param_name' => 'name',
                                    'value' => '',
                                    'description' => __('Enter name.', 'md-bakery-antian'),
                                    'admin_label' => true,
                                ),
                                // Designation
                                array(
                                    'type' => 'textfield',
                                    'heading' => __('Designation', 'md-bakery-antian'),
                                    'param_name' => 'designation',
                                    'value' => '',
                                    'description' => __('Enter designation.', 'md-bakery-antian'),
                                ),
                                // Description
                                array(
                                    'type' => 'textarea',
                                    'heading' => __('Description', 'md-bakery-antian'),
                                    'param_name' => 'description',
                                    'value' => '',
                                    'description' => __('Enter description.', 'md-bakery-antian'),
                                ),
                                // Image
                                array(
                                    'type' => 'attach_image',
                                    'heading' => __('Image', 'md-bakery-antian'),
                                    'param_name' => 'image',
                                    'value' => '',
                                    'description' => __('Add image.', 'md-bakery-antian'),
                                ),
                                // Social Links Linkedin Type Link
                                array(
                                    'type' => 'vc_link',
                                    'heading' => __('Linkedin Link', 'md-bakery-antian'),
                                    'param_name' => 'linkedin_link',
                                    'value' => '',
                                    'description' => __('Add linkedin link.', 'md-bakery-antian'),
                                ),
                            ),
                        ),
                    ),
                ),
            ),
            'category' => __('Antian', 'md-bakery-antian'),
            'icon' => 'icon-wpb-ui-separator-label',
        ));
    }

    /**
     * Function is used to display Leadership Title html.
     */
    public function leadership_html($atts) {

        $atts = shortcode_atts(
            array(
                'title' => '',
                'logo' => '',
                'leadership_tabs' => '',
            ),
            $atts
        );
        $logo = "";
        if (!empty($atts['logo'])) {
            $logo = wp_get_attachment_image_src($atts['logo'], 'full');
            $logo = $logo[0];
        }
        $leadership_tabs = [];
        if (!empty($atts['leadership_tabs'])) {
            $leadership_tabs = vc_param_group_parse_atts($atts['leadership_tabs']);
        }
        ob_start();
        ?>
        <div class="md_anitian_leadership">
            <div class="container">
                <div class="md_anitian_leadership__inner">
                    <div class="md_anitian_leadership__heading">
                        <img src="<?php echo esc_url($logo); ?>" alt="<?php echo esc_attr($atts['title']); ?>">
                        <h2><?php echo esc_html($atts['title']); ?></h2>
                    </div>
                    <div class="md_anitian_leadership__tabs">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <?php
                            $i = 0;
                            foreach ($leadership_tabs as $leadership_tab) {
                                if (empty($leadership_tab['tab_title'])) {
                                    continue;
                                }
                                $active = ($i == 0) ? 'active' : '';
                                ?>
                                <li class="nav-item <?php echo esc_attr($active); ?>">
                                    <a class="nav-link" id="tab-<?php echo esc_attr($i); ?>" data-toggle="tab" href="#tab-<?php echo esc_attr($i); ?>" role="tab" aria-controls="tab-<?php echo esc_attr($i); ?>" aria-selected="true"><?php echo esc_html($leadership_tab['tab_title']); ?></a>
                                </li>
                                <?php
                                $i++;
                            }
                            ?>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <?php
                            $i = 0;
                            foreach ($leadership_tabs as $leadership_tab) {
                                if (empty($leadership_tab['leaders'])) {
                                    continue;
                                }
                                $active = ($i === 0) ? 'show active' : '';
                                ?>
                                <div class="tab-pane fade <?php echo esc_attr($active); ?>" id="tab-<?php echo esc_attr($i); ?>" role="tabpanel" aria-labelledby="tab-<?php echo esc_attr($i); ?>">
                                    <div class="md_anitian_leadership__leaders">
                                        <?php
                                        if (!empty($leadership_tab['leaders'])) {
                                            $leaders = vc_param_group_parse_atts($leadership_tab['leaders']);
                                            foreach ($leaders as $leader) {
                                                if (empty($leader['name'])) {
                                                    continue;
                                                }
                                                // Create Read More Button for leadership__member-description
                                                $visible_length = 300;
                                                $description = $leader['description'];
                                                $description_length = strlen($description);
                                                $visible_description = substr($description, 0, $visible_length);
                                                $hidden_description = substr($description, $visible_length, $description_length);
                                                $linkedin_link = [];
                                                if (isset($leader['linkedin_link'])) {
                                                    $linkedin_link = vc_build_link($leader['linkedin_link']);
                                                }
                                                ?>
                                                <div class="md_anitian_leadership__leader">
                                                    <div class="md_anitian_leadership__leader__image">
                                                        <?php
                                                        if (!empty($leader['image'])) {
                                                            $leader_image = wp_get_attachment_image_src($leader['image'], 'full');
                                                            ?>
                                                            <img src="<?php echo esc_url($leader_image[0]); ?>" alt="<?php echo esc_attr($leader['name']); ?>">
                                                        <?php } ?>
                                                    </div>
                                                    <div class="md_anitian_leadership__leader__content">
                                                        <h3><?php echo esc_html($leader['name']); ?></h3>
                                                        <p class="leadership__member-designation"><?php echo esc_html($leader['designation']); ?></p>
                                                        <div class="leadership__member-description">
                                                            <p>
                                                                <?php echo esc_html($visible_description); ?>
                                                                <span class="ellipsis">... </span>
                                                                <a href="javascript:void(0)" class="read-more">Read More</a>
                                                                <span class="hidden-description">
                                                                    <?php echo esc_html($hidden_description); ?></span>
                                                                    <a href="javascript:void(0)" class="read-less">Read Less</a>
                                                                </p>
                                                        </div>
                                                        <?php if (isset($linkedin_link['url']) && !empty($linkedin_link['url'])) { ?>
                                                            <a href="<?php echo esc_url($linkedin_link['url']); ?>" target="<?php echo esc_attr($linkedin_link['target']); ?>" class="leadership__member-linkedin">
                                                                <i class="fa fa-linkedin"></i>
                                                            </a>
                                                        <?php } ?>
                                                    </div>
                                                </div>
                                            <?php } ?>
                                        <?php } ?>
                                    </div>
                                </div>
                                <?php
                                $i++;
                            }
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