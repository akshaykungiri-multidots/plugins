<?php
/**
 * The Storyful Case Studies functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Case_Studies class
 * 
 * @since 1.0.0
 */
class Storyful_Case_Studies {

    // Create Storyful Case Studies Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_case_studies'));
        add_shortcode('storyful_case_studies', array($this, 'storyful_case_studies_html'));
    }

    /**
     * Function is used to create Storyful Case Studies custom element.
     */
    public function storyful_case_studies() {

        // Storyful Case Studies.
        vc_map(array(
            'name' => __('Storyful Case Studies', 'md-bakery-antian'),
            'base' => 'storyful_case_studies',
            'params' => array(
                // Section Title.
                array(
                    'type' => 'textfield',
                    'heading' => __('Section Title', 'md-bakery-antian'),
                    'param_name' => 'section_title',
                    'value' => '',
                    'description' => __('Enter section title.', 'md-bakery-antian'),
                ),
                // Number of Case Studies to show.
                array(
                    'type' => 'dropdown',
                    'heading' => __('Number of Case Studies to show', 'md-bakery-antian'),
                    'param_name' => 'number_of_case_studies',
                    'value' => array(
                        '1' => '1',
                        '2' => '2',
                        '3' => '3',
                        '4' => '4',
                    ),
                    'description' => __('Select number of case studies to show.', 'md-bakery-antian'),
                ),
                // Add Case Studies Ids Comma Separated.
                array(
                    'type' => 'textfield',
                    'heading' => __('Add Case Studies Ids Comma Separated', 'md-bakery-antian'),
                    'param_name' => 'case_studies_ids',
                    'value' => '',
                    'description' => __('Enter case studies ids comma separated.', 'md-bakery-antian'),
                ),
                // Background Image.
                array(
                    'type' => 'attach_image',
                    'heading' => __('Background Image', 'md-bakery-antian'),
                    'param_name' => 'background_image',
                    'value' => '',
                    'description' => __('Upload background image.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // Linear Color 1
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Linear Color 1', 'md-bakery-antian'),
                    'param_name' => 'linear_color_1',
                    'value' => '',
                    'description' => __('Select linear color 1.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // Linear Color 2
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Linear Color 2', 'md-bakery-antian'),
                    'param_name' => 'linear_color_2',
                    'value' => '',
                    'description' => __('Select linear color 2.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // Background Overlay Opacity
                array(
                    'type' => 'dropdown',
                    'heading' => __('Background Overlay Opacity', 'md-bakery-antian'),
                    'param_name' => 'background_overlay_opacity',
                    'value' => array(
                        '0.1' => '0.1',
                        '0.2' => '0.2',
                        '0.3' => '0.3',
                        '0.4' => '0.4',
                        '0.5' => '0.5',
                        '0.6' => '0.6',
                        '0.7' => '0.7',
                        '0.8' => '0.8',
                        '0.9' => '0.9',
                        '1.0' => '1.0',
                    ),
                    'description' => __('Select background overlay opacity.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // Text Color
                array(
                    'type' => 'colorpicker',
                    'heading' => __('Text Color', 'md-bakery-antian'),
                    'param_name' => 'text_color',
                    'value' => '',
                    'description' => __('Select text color.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
                // Case Studies Style
                array(
                    'type' => 'dropdown',
                    'heading' => __('Case Studies Style', 'md-bakery-antian'),
                    'param_name' => 'case_studies_style',
                    'value' => array(
                        'Style 1' => 'style_1',
                        'Style 2' => 'style_2',
                    ),
                    'description' => __('Select case studies style.', 'md-bakery-antian'),
                    'group' => 'Style',
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-layer-shape-text',
        ));
    }

    /**
     * Function is used to display Storyful Case Studies html.
     */
    public function storyful_case_studies_html($atts) {

        $atts = shortcode_atts(
            array(
                'section_title' => '',
                'number_of_case_studies' => '3',
                'case_studies_ids' => '',
                'background_image' => '',
                'linear_color_1' => '',
                'linear_color_2' => '',
                'background_overlay_opacity' => '0.5',
                'text_color' => '',
                'case_studies_style' => 'style_1',
            ),
            $atts
        );
        ob_start();
        $number_of_case_studies = (int) $atts['number_of_case_studies'];
        $case_studies_ids = array();
        if (!empty($atts['case_studies_ids'])) {
            $case_studies_ids = explode(',', $atts['case_studies_ids']);
        }
        $args = array(
            'post_type' => 'resources',
            'posts_per_page' => $number_of_case_studies,
            'orderby' => 'date',
            'order' => 'DESC',
            'tax_query' => array(
                array(
                    'taxonomy' => 'resource-type',
                    'field' => 'slug',
                    'terms' => 'case-studies',
                ),
            ),
            'post__in' => $case_studies_ids,
            'paged' => 1,
        );
        $case_studies =  new \WP_Query($args);
        $background_image = wp_get_attachment_image_url($atts['background_image'], 'full');
        $case_studies_style = $atts['case_studies_style'];
        ?>
        <div class="storyful-case-studies <?php echo esc_attr($atts['case_studies_style']); ?>" style="background-image: url(<?php echo esc_url($background_image); ?>);">
            <div class="overlay" style="background: linear-gradient(90.9deg, <?php echo esc_attr($atts['linear_color_1']); ?> .77%, <?php echo esc_attr($atts['linear_color_2']); ?> 130.71%); opacity: <?php echo esc_attr($atts['background_overlay_opacity']); ?>;"></div>
            <div class="container">
                <div class="section-title">
                    <h1 style="color: <?php echo esc_attr($atts['text_color']); ?>"><?php echo wp_kses_post($atts['section_title']); ?></h1>
                </div>
                <div class="case-studies">
                    <div class="case-studies__list">
                        <?php
                        if ($case_studies->have_posts()) :
                            $active = 'active';
                            while ($case_studies->have_posts()) : $case_studies->the_post();
                                ?>
                                <div class="case-studies__item <?php echo esc_attr($active); ?>" data-post-id="<?php echo esc_attr(get_the_ID()); ?>" >
                                    <h3 style="color: <?php echo esc_attr($atts['text_color']); ?>"><?php the_title(); ?></h3>
                                    <?php if ( $case_studies_style === 'style_1' ) : ?>
                                        <div style="color: <?php echo esc_attr($atts['text_color']); ?>" class="case-studies__excerpt"><?php the_excerpt(); ?></div>
                                    <?php endif; ?>
                                </div>
                            <?php
                            $active = '';
                            endwhile;
                            wp_reset_postdata();
                        endif;
                        ?>
                    </div>
                    <div class="case-studies__feature-post fadeInRight">
                        <?php
                        if ($case_studies->have_posts()) :
                            $active = 'active';
                            while ($case_studies->have_posts()) : $case_studies->the_post();
                                ?>
                                <div class="item <?php echo esc_attr($active); ?>" data-post-id="<?php echo esc_attr(get_the_ID()); ?>">
                                    <?php if ( $case_studies_style === 'style_2' ) : ?>
                                        <h3 style="color: <?php echo esc_attr($atts['text_color']); ?>"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                                    <?php endif; ?>
                                    <?php if ( $case_studies_style === 'style_1' ) : ?>
                                        <div class="item__image-wrapper">
                                            <?php the_post_thumbnail(); ?>
                                        </div>
                                    <?php endif; ?>
                                    <div class="item__details">
                                        <?php if ( $case_studies_style === 'style_1' ) : ?>
                                            <h3 style="color: <?php echo esc_attr($atts['text_color']); ?>"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                                            <div class="item__publish-details">
                                                <p style="color: <?php echo esc_attr($atts['text_color']); ?>"><?php echo get_the_author(); ?></p>
                                                <span style="color: <?php echo esc_attr($atts['text_color']); ?>">-</span>
                                                <p style="color: <?php echo esc_attr($atts['text_color']); ?>"><?php echo get_the_date(); ?></p>
                                            </div>
                                            <div style="color: <?php echo esc_attr($atts['text_color']); ?>" class="item__excerpt"><?php the_excerpt(); ?></div>
                                        <?php endif; ?>
                                        <?php if ( $case_studies_style === 'style_2' ) : ?>
                                            <?php the_post_thumbnail(); ?>
                                        <?php endif; ?>
                                        <div class="btn btn-arrow">
                                            <a href="<?php the_permalink(); ?>"><?php esc_html_e('Full Case Study', 'md-bakery-antian'); ?></a>
                                        </div>
                                    </div>
                                </div>
                            <?php
                            $active = '';
                            endwhile;
                            wp_reset_postdata();
                        endif;
                        ?>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}