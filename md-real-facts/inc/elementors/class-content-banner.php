<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Real_Facts
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Real_Facts\Inc\Elementors;


/**
 * Content_Banner class
 * 
 * @since 1.0.0
 */
class Content_Banner extends \Elementor\Widget_Base {

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
		return 'content-banner';
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
		return esc_html__( 'Content Banner', 'md-real-facts' );
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
		return 'eicon-call-to-action';
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
		return [ 'md-real-facts-addons' ];
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
		return [ 'content', 'real', 'banner' ];
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

		// Content Section
		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'md-real-facts' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		// Content Wyniwyg Editor
		$this->add_control(
			'content',
			[
				'label' => esc_html__( 'Content', 'md-real-facts' ),
				'type'  => \Elementor\Controls_Manager::WYSIWYG,
			]
		);

		// Image Control
		$this->add_control(
			'banner_image',
			[
				'label'   => esc_html__( 'Image', 'md-real-facts' ),
				'type'    => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);
		
		// Define the nested repeater
        $nested_repeater = new \Elementor\Repeater();

        $nested_repeater->add_control(
            'sub_field_title',
            [
                'label' => __( 'Sub Field Title', 'plugin-name' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __( 'Sub Title' , 'plugin-name' ),
                'label_block' => true,
            ]
        );

        $nested_repeater->add_control(
            'sub_field_content',
            [
                'label' => __( 'Sub Field Content', 'plugin-name' ),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __( 'Sub Content' , 'plugin-name' ),
                'show_label' => false,
            ]
        );

        // Define the outer repeater
        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'field_title',
            [
                'label' => __( 'Field Title', 'plugin-name' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __( 'Title' , 'plugin-name' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'field_content',
            [
                'label' => __( 'Field Content', 'plugin-name' ),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __( 'Content' , 'plugin-name' ),
                'show_label' => false,
            ]
        );

        $repeater->add_control(
            'sub_fields',
            [
                'label' => __( 'Sub Fields', 'plugin-name' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $nested_repeater->get_controls(),
                'title_field' => '{{{ sub_field_title }}}',
            ]
        );

        // Add the outer repeater to the widget controls
        $this->add_control(
            'fields',
            [
                'label' => __( 'Fields', 'plugin-name' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'title_field' => '{{{ field_title }}}',
            ]
        );

		$this->end_controls_section();

		// Style Section
		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'md-real-facts' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Content Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'content_typography',
				'label'    => esc_html__( 'Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .content',
			]
		);

		$this->add_control(
			'content_color',
			[
				'label'     => esc_html__( 'Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .content' => 'color: {{VALUE}}',
				],
			]
		);

		// Alginment
		$this->add_control(
			'content_alignment',
			[
				'label'   => esc_html__( 'Alignment', 'md-real-facts' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left'   => [
						'title' => esc_html__( 'Left', 'md-real-facts' ),
						'icon'  => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'md-real-facts' ),
						'icon'  => 'eicon-text-align-center',
					],
					'right'  => [
						'title' => esc_html__( 'Right', 'md-real-facts' ),
						'icon'  => 'eicon-text-align-right',
					],
				],
				'default' => 'left',
				'toggle'  => true,
				'selectors' => [
					'{{WRAPPER}} .content' => 'text-align: {{VALUE}};',
				],
			]
		);

		// Banner Image width
		$this->add_responsive_control(
			'banner_image_width',
			[
				'label'     => esc_html__( 'Image Width', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range'     => [
					'%' => [
						'min' => 0,
						'max' => 100,
					],
					'px' => [
						'min' => 0,
						'max' => 500,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .banner-image' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		// Banner Image height
		$this->add_responsive_control(
			'banner_image_height',
			[
				'label'     => esc_html__( 'Image Height', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range'     => [
					'%' => [
						'min' => 0,
						'max' => 100,
					],
					'px' => [
						'min' => 0,
						'max' => 500,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .banner-image' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		// Banner Image margin
		$this->add_responsive_control(
			'banner_image_margin',
			[
				'label'     => esc_html__( 'Image Margin', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .banner-image' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		// Banner Image border
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name'     => 'banner_image_border',
				'label'    => esc_html__( 'Border', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .banner-image',
			]
		);

		// Banner Image border radius
		$this->add_responsive_control(
			'banner_image_border_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'md-real-facts' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .banner-image' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
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

		<div class="content-banner">
			<div class="content">
				<?php echo wp_kses_post( $settings['content'] ); ?>
			</div>
			<div class="banner-image">
				<img src="<?php echo esc_url( $settings['banner_image']['url'] ); ?>" alt="banner-image">
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

		<div class="content-banner">
			<div class="content">
				{{{ settings.content }}}
			</div>
			<div class="banner-image">
				<img src="{{{ settings.banner_image.url }}}" alt="banner-image">
			</div>
		</div>

        <?php
	}

}