<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Plus
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Plus\Inc\Elementors;


/**
 * Member_Experience class
 * 
 * @since 1.0.0
 */
class Member_Experience extends \Elementor\Widget_Base {

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
		return 'member-experience';
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
		return esc_html__( 'Member Experience', 'md-circle-plus' );
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
		return [ 'member', 'experience', 'box', 'plus' ];
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

		// Content Section.
		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'md-circle-plus' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		// Heading, Description, Features as repeater, Link Text, Link URL, Image.
		$this->add_control(
			'heading',
			[
				'label'       => esc_html__( 'Heading', 'md-circle-plus' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your heading', 'md-circle-plus' ),
			]
		);

		$this->add_control(
			'description',
			[
				'label'       => esc_html__( 'Description', 'md-circle-plus' ),
				'type'        => \Elementor\Controls_Manager::TEXTAREA,
				'placeholder' => esc_html__( 'Enter your description', 'md-circle-plus' ),
			]
		);

		// Feature as repeater.
		$features_repeater = new \Elementor\Repeater();

		$features_repeater->add_control(
			'feature_text',
			[
				'label'       => esc_html__( 'Feature Text', 'md-circle-plus' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your feature text', 'md-circle-plus' ),
			]
		);

		$this->add_control(
			'features',
			[
				'label'       => esc_html__( 'Features', 'md-circle-plus' ),
				'type'        => \Elementor\Controls_Manager::REPEATER,
				'fields'      => $features_repeater->get_controls(),
				'title_field' => '{{{ feature_text }}}',
			]
		);

		// Feature Icon Responsive Selector.
		$this->add_control(
			'feature_icon',
			[
				'label'       => esc_html__( 'Feature Icon', 'md-circle-plus' ),
				'type'        => \Elementor\Controls_Manager::ICONS,
				'label_block' => true,
				'default'     => [
					'value'   => 'fas fa-check',
					'library' => 'solid',
				],
			]
		);

		$this->add_control(
			'link_text',
			[
				'label'       => esc_html__( 'Link Text', 'md-circle-plus' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your link text', 'md-circle-plus' ),
			]
		);

		$this->add_control(
			'link_url',
			[
				'label'       => esc_html__( 'Link URL', 'md-circle-plus' ),
				'type'        => \Elementor\Controls_Manager::URL,
				'placeholder' => esc_html__( 'https://your-link.com', 'md-circle-plus' ),
			]
		);

		$this->add_control(
			'image',
			[
				'label'   => esc_html__( 'Image', 'md-circle-plus' ),
				'type'    => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		$this->end_controls_section();

		// Style Section.
		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'md-circle-plus' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Heading Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'heading_typography',
				'label'    => esc_html__( 'Heading Typography', 'md-circle-plus' ),
				'selector' => '{{WRAPPER}} .member-experience-heading',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label'     => esc_html__( 'Heading Color', 'md-circle-plus' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .member-experience-heading' => 'color: {{VALUE}}',
				],
			]
		);

		// Description Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'description_typography',
				'label'    => esc_html__( 'Description Typography', 'md-circle-plus' ),
				'selector' => '{{WRAPPER}} .member-experience-description',
			]
		);

		$this->add_control(
			'description_color',
			[
				'label'     => esc_html__( 'Description Color', 'md-circle-plus' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .member-experience-description' => 'color: {{VALUE}}',
				],
			]
		);

		// Feature Icon Size and Color.
		$this->add_control(
			'feature_icon_size',
			[
				'label'      => esc_html__( 'Feature Icon Size', 'md-circle-plus' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range'      => [
					'px'  => [
						'min'  => 10,
						'max'  => 100,
						'step' => 1,
					],
					'em'  => [
						'min'  => 1,
						'max'  => 10,
						'step' => 0.1,
					],
					'rem' => [
						'min'  => 1,
						'max'  => 10,
						'step' => 0.1,
					],
				],
				'selectors'  => [
					'{{WRAPPER}} .member-experience-feature-icon img' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .member-experience-feature-icon i'   => 'font-size: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'feature_icon_color',
			[
				'label'     => esc_html__( 'Feature Icon Color', 'md-circle-plus' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .member-experience-feature-icon img' => 'color: {{VALUE}}',
					'{{WRAPPER}} .member-experience-feature-icon i'   => 'color: {{VALUE}}',
				],
			]
		);

		// Feature Text Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'feature_text_typography',
				'label'    => esc_html__( 'Feature Text Typography', 'md-circle-plus' ),
				'selector' => '{{WRAPPER}} .member-experience-feature-text',
			]
		);

		$this->add_control(
			'feature_text_color',
			[
				'label'     => esc_html__( 'Feature Text Color', 'md-circle-plus' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .member-experience-feature-text' => 'color: {{VALUE}}',
				],
			]
		);

		// Link Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'link_typography',
				'label'    => esc_html__( 'Link Typography', 'md-circle-plus' ),
				'selector' => '{{WRAPPER}} .member-experience-link',
			]
		);

		$this->add_control(
			'link_color',
			[
				'label'     => esc_html__( 'Link Color', 'md-circle-plus' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .member-experience-link' => 'color: {{VALUE}}',
				],
			]
		);

		// Image Width, Height, Border Group and Border Radius.
		$this->add_responsive_control(
			'image_width',
			[
				'label'      => esc_html__( 'Image Width', 'md-circle-plus' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range'      => [
					'px' => [
						'min'  => 50,
						'max'  => 500,
						'step' => 1,
					],
					'%'  => [
						'min'  => 10,
						'max'  => 100,
						'step' => 1,
					],
				],
				'selectors'  => [
					'{{WRAPPER}} .member-experience-image img' => 'width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'image_height',
			[
				'label'      => esc_html__( 'Image Height', 'md-circle-plus' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range'      => [
					'px' => [
						'min'  => 50,
						'max'  => 500,
						'step' => 1,
					],
					'%'  => [
						'min'  => 10,
						'max'  => 100,
						'step' => 1,
					],
				],
				'selectors'  => [
					'{{WRAPPER}} .member-experience-image img' => 'height: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name'     => 'image_border',
				'label'    => esc_html__( 'Image Border', 'md-circle-plus' ),
				'selector' => '{{WRAPPER}} .member-experience-image img',
			]
		);

		$this->add_responsive_control(
			'image_border_radius',
			[
				'label'      => esc_html__( 'Image Border Radius', 'md-circle-plus' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 100,
						'step' => 1,
					],
					'%'  => [
						'min'  => 0,
						'max'  => 100,
						'step' => 1,
					],
				],
				'selectors'  => [
					'{{WRAPPER}} .member-experience-image img' => 'border-radius: {{SIZE}}{{UNIT}}',
				],
			]
		);

		// Image Position Left or Right.
		$this->add_control(
			'image_position',
			[
				'label'   => esc_html__( 'Image Position', 'md-circle-plus' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'row-reverse'  => esc_html__( 'Left', 'md-circle-plus' ),
					'row' => esc_html__( 'Right', 'md-circle-plus' ),
				],
				'default' => 'left',
				'selectors' => [
					'{{WRAPPER}} .member-experience' => 'flex-direction: {{VALUE}}',
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

		<div class="member-experience">
			<div class="member-experience-content">
				<div class="member-experience-heading"><?php echo esc_html( $settings['heading'] ); ?></div>
				<div class="member-experience-description"><?php echo esc_html( $settings['description'] ); ?></div>
				<div class="member-experience-features">
					<?php
					if ( ! empty( $settings['features'] ) ) {
						foreach ( $settings['features'] as $feature ) {
							?>
							<div class="member-experience-feature">
								<div class="member-experience-feature-icon">
									<?php if ( ! empty( $settings['feature_icon'] ) && $settings['feature_icon']['library'] === 'svg' ) { ?>
										<img src="<?php echo esc_url( $settings['feature_icon']['value']['url'] ); ?>" alt="<?php echo ( ! empty( $feature['feature_text'] ) ? esc_attr( $feature['feature_text'] ) : '' ); ?>" />
									<?php } else { ?>
										<i class="<?php echo esc_attr( $settings['feature_icon']['value'] ); ?>"></i>
									<?php } ?>
								</div>
								<div class="member-experience-feature-text"><?php echo esc_html( $feature['feature_text'] ); ?></div>
							</div>
						<?php } ?>
					<?php } ?>
				</div>
				<div class="member-experience-link">
					<a href="<?php echo esc_url( $settings['link_url']['url'] ); ?>"><?php echo esc_html( $settings['link_text'] ); ?></a>
				</div>
			</div>
			<div class="member-experience-image">
				<img src="<?php echo esc_url( $settings['image']['url'] ); ?>" alt="<?php echo esc_attr( $settings['heading'] ); ?>">
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

		<div class="member-experience">
			<div class="member-experience-content">
				<div class="member-experience-heading">{{{ settings.heading }}}</div>
				<div class="member-experience-description">{{{ settings.description }}}</div>
				<div class="member-experience-features">
					<# if ( settings.features.length ) { #>
						<# _.each( settings.features, function( feature ) { #>
							<div class="member-experience-feature">
								<div class="member-experience-feature-icon">\
									<# if ( settings.feature_icon && settings.feature_icon.library === 'svg' ) { #>
										<img src="{{{ settings.feature_icon.value.url }}}" alt="{{{ feature.feature_text }}}" />
									<# } else { #>
										<i class="{{{ settings.feature_icon.value }}}"></i>
									<# } #>
								</div>
								<div class="member-experience-feature-text">{{{ feature.feature_text }}}</div>
							</div>
						<# } ); #>
					<# } #>
				</div>
				<div class="member-experience-link">
					<a href="{{{ settings.link_url.url }}}">{{{ settings.link_text }}}</a>
				</div>
			</div>
			<div class="member-experience-image">
				<img src="{{{ settings.image.url }}}" alt="{{{ settings.heading }}}">
			</div>
		</div>
		
        <?php
	}

}