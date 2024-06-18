<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Plus
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Plus\Inc\Elementors;


/**
 * Single_Author_Box class
 * 
 * @since 1.0.0
 */
class Single_Author_Box extends \Elementor\Widget_Base {

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
		return 'single_author_box';
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
		return esc_html__( 'Single Author Box', 'md-circle-plus' );
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
		return 'eicon-posts-carousel';
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
		return [ 'md-circle-plus' ];
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
		return [ 'single', 'author', 'box', 'plus' ];
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

		// Single Author Box Section including Review, Author Image, Author Name, Author Position.
		$this->start_controls_section(
			'section_single_author_box',
			[
				'label' => esc_html__( 'Single Author Box', 'md-circle-plus' ),
			]
		);

		// Review.
		$this->add_control(
			'review',
			[
				'label' => esc_html__( 'Review', 'md-circle-plus' ),
				'type' => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__( 'Type your review here', 'md-circle-plus' ),
			]
		);

		// Author Image.
		$this->add_control(
			'author_image',
			[
				'label' => esc_html__( 'Author Image', 'md-circle-plus' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		// Author Name.
		$this->add_control(
			'author_name',
			[
				'label' => esc_html__( 'Author Name', 'md-circle-plus' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Type author name here', 'md-circle-plus' ),
			]
		);

		// Author Position.
		$this->add_control(
			'author_position',
			[
				'label' => esc_html__( 'Author Position', 'md-circle-plus' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Type author position here', 'md-circle-plus' ),
			]
		);

		$this->end_controls_section();

		// Style Tab.
		$this->start_controls_section(
			'section_style',
			[
				'label' => esc_html__( 'Style', 'md-circle-plus' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Review Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'review_typography',
				'label' => esc_html__( 'Review Typography', 'md-circle-plus' ),
				'selector' => '{{WRAPPER}} .review',
			]
		);

		// Review Color.
		$this->add_control(
			'review_color',
			[
				'label' => esc_html__( 'Review Color', 'md-circle-plus' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .review' => 'color: {{VALUE}}',
				],
			]
		);

		// Author Name Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'author_name_typography',
				'label' => esc_html__( 'Author Name Typography', 'md-circle-plus' ),
				'selector' => '{{WRAPPER}} .author-name',
			]
		);

		// Author Name Color.
		$this->add_control(
			'author_name_color',
			[
				'label' => esc_html__( 'Author Name Color', 'md-circle-plus' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .author-name' => 'color: {{VALUE}}',
				],
			]
		);

		// Author Position Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'author_position_typography',
				'label' => esc_html__( 'Author Position Typography', 'md-circle-plus' ),
				'selector' => '{{WRAPPER}} .author-position',
			]
		);

		// Author Position Color.
		$this->add_control(
			'author_position_color',
			[
				'label' => esc_html__( 'Author Position Color', 'md-circle-plus' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .author-position' => 'color: {{VALUE}}',
				],
			]
		);

		// Author Image Width.
		$this->add_control(
			'author_image_width',
			[
				'label' => esc_html__( 'Author Image Width', 'md-circle-plus' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'size' => 100,
					'unit' => '%',
				],
				'selectors' => [
					'{{WRAPPER}} .author-image img' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		// Author Image Height.
		$this->add_control(
			'author_image_height',
			[
				'label' => esc_html__( 'Author Image Height', 'md-circle-plus' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'size' => 100,
					'unit' => '%',
				],
				'selectors' => [
					'{{WRAPPER}} .author-image img' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		// Author Image Border Group.
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'author_image_border',
				'label' => esc_html__( 'Author Image Border', 'md-circle-plus' ),
				'selector' => '{{WRAPPER}} .author-image img',
			]
		);

		// Author Image Border Radius.
		$this->add_control(
			'author_image_border_radius',
			[
				'label' => esc_html__( 'Author Image Border Radius', 'md-circle-plus' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .author-image img' => 'border-radius: {{SIZE}}{{UNIT}};',
				],
			]
		);

		// Alignment.
		$this->add_responsive_control(
			'alignment',
			[
				'label' => esc_html__( 'Alignment', 'md-circle-plus' ),
				'type' => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'md-circle-plus' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'md-circle-plus' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'md-circle-plus' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'default' => 'center',
				'selectors' => [
					'{{WRAPPER}}' => 'text-align: {{VALUE}};',
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

		<div class="single-author-box">
			<div class="author-review">
				<div class="review"><?php echo wp_kses_post( $settings['review'] ); ?></div>
			</div>
			<div class="author-info-text-box">
				<div class="author-info">
					<?php if ( ! empty( $settings['author_image']['url'] ) ) : ?>
						<div class="author-image">
							<img src="<?php echo esc_url( $settings['author_image']['url'] ); ?>" alt="<?php echo esc_attr( $settings['author_name'] ); ?>">
						</div>
					<?php endif; ?>
					<div class="author-info-text">
						<div class="author-name"><?php echo esc_html( $settings['author_name'] ); ?></div>
						<div class="author-position"><?php echo esc_html( $settings['author_position'] ); ?></div>
					</div>
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

		<div class="single-author-box">
			<div class="author-review">
				<div class="review">{{{ settings.review }}}</div>
			</div>
			<div class="author-info-text-box">
				<div class="author-info">
					<# if ( settings.author_image.url ) { #>
						<div class="author-image">
							<img src="{{ settings.author_image.url }}" alt="{{ settings.author_name }}">
						</div>
					<# } #>
					<div class="author-info-text">
						<div class="author-name">{{ settings.author_name }}</div>
						<div class="author-position">{{ settings.author_position }}</div>
					</div>
				</div>
			</div>
		</div>

        <?php
	}

}