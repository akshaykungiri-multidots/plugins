<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Addon
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Addon\Inc\Elementors;


/**
 * Circle_Quote_Banner class
 * 
 * @since 1.0.0
 */
class Circle_Quote_Banner extends \Elementor\Widget_Base {

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
		return 'circle-quote-banner';
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
		return esc_html__( 'Circle Quote Banner', 'circle-addon' );
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
		return 'eicon-editor-quote';
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
		return [ 'circle', 'quote', 'banner' ];
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

		// Quote Icon Selector Field
		$this->add_control(
			'quote_icon',
			[
				'label' => esc_html__( 'Quote Icon', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-quote-left',
					'library' => 'solid',
				],
			]
		);

		// Quote Content Editor Field
		$this->add_control(
			'quote_content',
			[
				'label' => esc_html__( 'Quote Content', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::WYSIWYG,
				'default' => esc_html__( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.', 'circle-addon' ),
			]
		);

		// Quote Author Logo Field
		$this->add_control(
			'quote_author_logo',
			[
				'label' => esc_html__( 'Quote Author Logo', 'circle-addon' ),
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

		// Quote Cotent Background Group Control
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'quote_content_background',
				'label' => esc_html__( 'Background', 'circle-addon' ),
				'types' => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}}',
			]
		);

		// Quote Content Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'quote_content_typography',
				'label' => esc_html__( 'Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .quote-content',
			]
		);

		$this->add_control(
			'quote_content_color',
			[
				'label' => esc_html__( 'Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .quote-content' => 'color: {{VALUE}};',
				],
			]
		);

		// Quote Logo Width, Height and Border Radius
		$this->add_control(
			'quote_logo_width',
			[
				'label' => esc_html__( 'Logo Width', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range' => [
					'px' => [
						'min' => 50,
						'max' => 200,
					],
				],
				'default' => [
					'size' => 100,
					'unit' => 'px',
				],
				'selectors' => [
					'{{WRAPPER}} .quote-author-logo img' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'quote_logo_height',
			[
				'label' => esc_html__( 'Logo Height', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range' => [
					'px' => [
						'min' => 50,
						'max' => 200,
					],
				],
				'default' => [
					'size' => 100,
					'unit' => 'px',
				],
				'selectors' => [
					'{{WRAPPER}} .quote-author-logo img' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'quote_logo_border_radius',
			[
				'label' => esc_html__( 'Logo Border Radius', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 50,
					],
					'%' => [
						'min' => 0,
						'max' => 50,
					],
				],
				'default' => [
					'size' => 50,
					'unit' => 'px',
				],
				'selectors' => [
					'{{WRAPPER}} .quote-author-logo img' => 'border-radius: {{SIZE}}{{UNIT}};',
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

		<div class="quote-banner">
			<div class="quote-banner__inner">
				<div class="quote-banner__content">
					<div class="quote-icon">
						<?php
						if ( isset( $settings['quote_icon']['value'] ) && ! empty( $settings['quote_icon']['value'] ) ) {
							if ( $settings['quote_icon']['library'] === 'svg' ) {
								?>
								<img src="<?php echo esc_url( $settings['quote_icon']['value']['url'] ); ?>" alt="<?php echo isset( $settings['quote_icon']['value']['alt'] ) ? esc_attr( $settings['quote_icon']['value']['alt'] ) : ''; ?>">
								<?php
							} else {
								?>
								<i class="<?php echo esc_attr( $settings['quote_icon']['value'] ); ?>"></i>
								<?php
							}
						}
						?>
					</div>
					<div class="quote-content"><?php echo $settings['quote_content']; ?></div>
					<div class="quote-author-logo">
						<img src="<?php echo $settings['quote_author_logo']['url']; ?>" alt="<?php echo esc_attr( get_post_meta( $settings['quote_author_logo']['id'], '_wp_attachment_image_alt', true ) ); ?>">
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

		<div class="quote-banner">
			<div class="quote-banner__inner">
				<div class="quote-banner__content">
					<div class="quote-icon">
						<# if ( settings.quote_icon.value ) { #>
							<# if ( settings.quote_icon.library === 'svg' ) { #>
								<img src="{{ settings.quote_icon.value.url }}" alt="{{ settings.quote_icon.value.alt }}">
							<# } else { #>
								<i class="{{ settings.quote_icon.value }}"></i>
							<# } #>
						<# } #>
					</div>
					<div class="quote-content">{{{ settings.quote_content }}}</div>
					<div class="quote-author-logo">
						<img src="{{ settings.quote_author_logo.url }}" alt="{{ settings.quote_author_logo.alt }}">
					</div>
				</div>
			</div>
		</div>

        <?php
	}

}