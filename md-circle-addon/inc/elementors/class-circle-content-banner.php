<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Addon
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Addon\Inc\Elementors;


/**
 * Circle_Content_Banner class
 * 
 * @since 1.0.0
 */
class Circle_Content_Banner extends \Elementor\Widget_Base {

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
		return 'circle-content-banner';
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
		return esc_html__( 'Circle Content Banner', 'circle-addon' );
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
		return [ 'circle', 'content', 'banner' ];
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
			'section_content',
			[
				'label' => esc_html__( 'Content', 'circle-addon' ),
			]
		);

		$this->add_control(
			'content_title',
			[
				'label' => esc_html__( 'Title', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Content Banner', 'circle-addon' ),
				'placeholder' => esc_html__( 'Type your title here', 'circle-addon' ),
			]
		);

		// Content Editor
		$this->add_control(
			'content_description',
			[
				'label' => esc_html__( 'Description', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::WYSIWYG,
				'default' => esc_html__( 'This is the description of the content banner.', 'circle-addon' ),
				'placeholder' => esc_html__( 'Type your description here', 'circle-addon' ),
			]
		);

		// Content Image
		$this->add_control(
			'content_image',
			[
				'label' => esc_html__( 'Image', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		$this->end_controls_section();

		// Style Section
		$this->start_controls_section(
			'section_style',
			[
				'label' => esc_html__( 'Style', 'circle-addon' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Title Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'title_typography',
				'label' => esc_html__( 'Title Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .content-banner-title',
			]
		);

		$this->add_control(
			'title_color',
			[
				'label' => esc_html__( 'Title Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .content-banner-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Description Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'description_typography',
				'label' => esc_html__( 'Description Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .content-banner-description',
			]
		);

		$this->add_control(
			'description_color',
			[
				'label' => esc_html__( 'Description Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .content-banner-description' => 'color: {{VALUE}}',
				],
			]
		);

		// Image Width, Height and Border Radius
		$this->add_responsive_control(
			'image_width',
			[
				'label' => esc_html__( 'Image Width', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
					],
					'em' => [
						'min' => 0,
						'max' => 50,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'size' => 100,
					'unit' => 'px',
				],
				'selectors' => [
					'{{WRAPPER}} .content-banner-image img' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'image_height',
			[
				'label' => esc_html__( 'Image Height', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
					],
					'em' => [
						'min' => 0,
						'max' => 50,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'size' => 100,
					'unit' => 'px',
				],
				'selectors' => [
					'{{WRAPPER}} .content-banner-image img' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'image_border_radius',
			[
				'label' => esc_html__( 'Image Border Radius', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
					],
					'em' => [
						'min' => 0,
						'max' => 50,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'size' => 0,
					'unit' => 'px',
				],
				'selectors' => [
					'{{WRAPPER}} .content-banner-image img' => 'border-radius: {{SIZE}}{{UNIT}};',
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
			<div class="content-banner__inner">
				<div class="content-banner__content">
					<h2 class="content-banner-title"><?php echo esc_html( $settings['content_title'] ); ?></h2>
					<div class="content-banner-description"><?php echo wp_kses_post( $settings['content_description'] ); ?></div>
				</div>
				<div class="content-banner-image">
					<img src="<?php echo esc_url( $settings['content_image']['url'] ); ?>" alt="<?php echo esc_attr( $settings['content_title'] ); ?>">
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

		<div class="content-banner">
			<div class="content-banner__inner">
				<div class="content-banner__content">
					<h2 class="content-banner-title">{{{ settings.content_title }}}</h2>
					<div class="content-banner-description">{{{ settings.content_description }}}</div>
				</div>
				<div class="content-banner-image">
					<img src="{{{ settings.content_image.url }}}" alt="{{{ settings.content_title }}}">
				</div>
			</div>
		</div>

        <?php
	}

}