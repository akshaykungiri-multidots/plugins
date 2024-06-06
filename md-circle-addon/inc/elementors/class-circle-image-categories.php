<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Addon
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Addon\Inc\Elementors;


/**
 * Circle_Image_Categories class
 * 
 * @since 1.0.0
 */
class Circle_Image_Categories extends \Elementor\Widget_Base {

	/**
	 * Get widget name.
	 *
	 * Retrieve list widget name.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget name.
	 */
	public function get_name() {
		return 'circle_image_categories';
	}

	/**
	 * Get widget title.
	 *
	 * Retrieve list widget title.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget title.
	 */
	public function get_title() {
		return esc_html__( 'Circle Image Categories', 'circle-addon' );
	}

	/**
	 * Get widget icon.
	 *
	 * Retrieve list widget icon.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget icon.
	 */
	public function get_icon() {
		return 'eicon-posts-group';
	}

	/**
	 * Get widget categories.
	 *
	 * Retrieve the list of categories the list widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget categories.
	 */
	public function get_categories() {
		return [ 'md-circle-addon' ];
	}

	/**
	 * Get widget keywords.
	 *
	 * Retrieve the list of keywords the list widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget keywords.
	 */
	public function get_keywords() {
		return [ 'circle', 'image', 'categories' ];
	}

	/**
	 * Get custom help URL.
	 *
	 * Retrieve a URL where the user can get more information about the widget.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget help URL.
	 */
	public function get_custom_help_url() {
		return 'https://developers.elementor.com/docs/widgets/';
	}

	/**
	 * Register faq widget controls.
	 *
	 * Add input fields to allow the user to customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function register_controls() {    
        // Heading Section.
        $this->start_controls_section(
            'section_heading',
            [
                'label' => esc_html__( 'Heading', 'circle-addon' ),
            ]
        );

        $this->add_control(
            'heading',
            [
                'label' => esc_html__( 'Heading', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Heading', 'circle-addon' ),
                'label_block' => true,
            ]
        );

        // Sub Heading.

        $this->add_control(
            'sub_heading',
            [
                'label' => esc_html__( 'Sub Heading', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Sub Heading', 'circle-addon' ),
                'label_block' => true,
            ]
        );

        $this->end_controls_section();

        // Category Section.

        $this->start_controls_section(
            'section_categories',
            [
                'label' => esc_html__( 'Categories', 'circle-addon' ),
            ]
        );

        $repeater = new \Elementor\Repeater();

        // Category Name.

        $repeater->add_control(
            'category_name',
            [
                'label' => esc_html__( 'Category Name', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Category Name', 'circle-addon' ),
                'label_block' => true,
            ]
        );

        // Category Title.

        $repeater->add_control(
            'category_title',
            [
                'label' => esc_html__( 'Category Title', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Category Title', 'circle-addon' ),
                'label_block' => true,
            ]
        );

        // Category Content.

        $repeater->add_control(
            'category_content',
            [
                'label' => esc_html__( 'Category Content', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__( 'Category Content', 'circle-addon' ),
                'label_block' => true,
            ]
        );

        // Category Image.

        $repeater->add_control(
            'category_image',
            [
                'label' => esc_html__( 'Category Image', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'label_block' => true,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->add_control(
            'categories',
            [
                'label' => esc_html__( 'Categories', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'category_name' => esc_html__( 'Category Name', 'circle-addon' ),
                        'category_title' => esc_html__( 'Category Title', 'circle-addon' ),
                        'category_content' => esc_html__( 'Category Content', 'circle-addon' ),
                        'category_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                    ],
                ],
                'title_field' => '{{{ category_name }}}',
            ]
        );

        $this->end_controls_section();

        // Heading Style Section including typography, color, etc.

        $this->start_controls_section(
            'section_heading_style',
            [
                'label' => esc_html__( 'Heading', 'circle-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        // Typography.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'heading_typography',
                'label' => esc_html__( 'Heading Typography', 'circle-addon' ),
                'selector' => '{{WRAPPER}} .circle-image-categories__heading h2',
            ]
        );

        // Color.
        
        $this->add_control(
            'heading_color',
            [
                'label' => esc_html__( 'Heading Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-image-categories__heading h2' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Sub Heading Typography.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'sub_heading_typography',
                'label' => esc_html__( 'Sub Heading Typography', 'circle-addon' ),
                'selector' => '{{WRAPPER}} .circle-image-categories__heading span',
            ]
        );

        // Sub Heading Color.

        $this->add_control(
            'sub_heading_color',
            [
                'label' => esc_html__( 'Sub Heading Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-image-categories__heading span' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->end_controls_section();

        // Categories Style Section including typography, color, etc.

        $this->start_controls_section(
            'section_categories_style',
            [
                'label' => esc_html__( 'Categories', 'circle-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        // Category Name Typography.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'category_name_typography',
                'label' => esc_html__( 'Category Name Typography', 'circle-addon' ),
                'selector' => '{{WRAPPER}} .circle-image-categories__category_name',
            ]
        );

        // Category Name Color.

        $this->add_control(
            'category_name_color',
            [
                'label' => esc_html__( 'Category Name Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-image-categories__category_name' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Category Name Background Color.

        $this->add_control(
            'category_name_background_color',
            [
                'label' => esc_html__( 'Category Name Background Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-image-categories__category_name' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        // Category Name Active Color.

        $this->add_control(
            'category_name_active_color',
            [
                'label' => esc_html__( 'Category Name Active Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-image-categories__category_name.active' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Category Name Active Background Color.

        $this->add_control(
            'category_name_active_background_color',
            [
                'label' => esc_html__( 'Category Name Active Background Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-image-categories__category_name.active' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        // Category Name Padding.

        $this->add_responsive_control(
            'category_name_padding',
            [
                'label' => esc_html__( 'Category Name Padding', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .circle-image-categories__category_name' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        // Category Name Border Radius.

        $this->add_responsive_control(
            'category_name_border_radius',
            [
                'label' => esc_html__( 'Category Name Border Radius', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .circle-image-categories__category_name' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        // Category Title Typography.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'category_title_typography',
                'label' => esc_html__( 'Category Title Typography', 'circle-addon' ),
                'selector' => '{{WRAPPER}} .circle-image-categories__category_content h3',
            ]
        );

        // Category Title Color.

        $this->add_control(
            'category_title_color',
            [
                'label' => esc_html__( 'Category Title Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-image-categories__category_content h3' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Category Content Typography.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'category_content_typography',
                'label' => esc_html__( 'Category Content Typography', 'circle-addon' ),
                'selector' => '{{WRAPPER}} .circle-image-categories__category_content p',
            ]
        );

        // Category Content Color.

        $this->add_control(
            'category_content_color',
            [
                'label' => esc_html__( 'Category Content Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-image-categories__category_content p' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Display Only Image.

        $this->add_control(
            'display_only_image',
            [
                'label' => esc_html__( 'Display Only Image', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'circle-addon' ),
                'label_off' => esc_html__( 'No', 'circle-addon' ),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $this->end_controls_section();

	}

	/**
	 * Render faq widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render() {
        $settings = $this->get_settings_for_display();
        ?>

        <div class="circle-image-categories">
            <div class="circle-image-categories__heading">
                <h2>
                    <?php echo esc_html( $settings['heading'] ); ?>
                    <span><?php echo esc_html( $settings['sub_heading'] ); ?></span>
                </h2>
            </div>

            <div class="circle-image-categories__categories_wrapper">
                <div class="circle-image-categories__categories_name">
                    <?php 
                    foreach ( $settings['categories'] as $key => $category ) : 
                        $activeClass = ( $key === 0 ) ? 'active' : '';
                    ?>
                        <div class="circle-image-categories__category_name <?php echo esc_attr( $activeClass ); ?>" data-category-key="<?php echo esc_attr( $key ); ?>">
                            <?php echo esc_html( $category['category_name'] ); ?>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="circle-image-categories__categories_content <?php if ( 'no' === $settings['display_only_image'] ) { echo 'with-content'; } ?>" >
                    <?php 
                    foreach ( $settings['categories'] as $key => $category ) : 
                        $activeClass = ( $key === 0 ) ? 'active' : '';
                    ?>
                        <div class="circle-image-categories__category_content <?php echo esc_attr( $activeClass ); ?>" data-category-key="<?php echo esc_attr( $key ); ?>">
                            <div class="circle-image-categories__category_content_inner">
                                <?php
                                if ( 'no' === $settings['display_only_image'] ) :
                                ?>
                                <div class="circle-image-categories__category_content_left">
                                    <h3><?php echo esc_html( $category['category_title'] ); ?></h3>
                                    <p><?php echo esc_html( $category['category_content'] ); ?></p>
                                </div>
                                <?php endif; ?>
                                <div class="circle-image-categories__category_content_right">
                                    <img src="<?php echo esc_url( $category['category_image']['url'] ); ?>" alt="<?php echo esc_attr( $category['category_name'] ); ?>">
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
        <?php
	}

	/**
	 * Render faq widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function content_template() {
        ?>

        <div class="circle-image-categories">
            <div class="circle-image-categories__heading">
                <h2>
                    {{{ settings.heading }}}
                    <span>{{{ settings.sub_heading }}}</span>
                </h2>
            </div>

            <div class="circle-image-categories__categories_wrapper">
                <div class="circle-image-categories__categories_name">
                    <# _.each( settings.categories, function( category, key ) { #>
                        <div class="circle-image-categories__category_name {{ key === 0 ? 'active' : '' }}" data-category-key="{{ key }}">
                            {{{ category.category_name }}}
                        </div>
                    <# }); #>
                </div>
                <div class="circle-image-categories__categories_content {{ 'no' === settings.display_only_image ? 'with-content' : '' }}" >
                    <# _.each( settings.categories, function( category, key ) { #>
                        <div class="circle-image-categories__category_content {{ key === 0 ? 'active' : '' }}" data-category-key="{{ key }}">
                            <div class="circle-image-categories__category_content_inner">
                                <# if ( 'no' === settings.display_only_image ) { #>
                                <div class="circle-image-categories__category_content_left">
                                    <h3>{{{ category.category_title }}}</h3>
                                    <p>{{{ category.category_content }}}</p>
                                </div>
                                <# } #>
                                <div class="circle-image-categories__category_content_right">
                                    <img src="{{{ category.category_image.url }}}" alt="{{{ category.category_name }}}">
                                </div>
                            </div>
                        </div>
                    <# }); #>
                </div>
            </div>
        </div>
        <?php
	}

}