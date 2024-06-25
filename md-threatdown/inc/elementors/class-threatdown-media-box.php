<?php
/**
 * Elementor Widgets.
 *
 * @package    MD_Threatdown
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Threatdown\Inc\Elementors;


/**
 * Threatdown_Media_Box class
 * 
 * @since 1.0.0
 */
class Threatdown_Media_Box extends \Elementor\Widget_Base {

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
		return 'threatdown-media-box';
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
		return esc_html__( 'Threatdown Media Box', 'md-threatdown' );
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
		return [ 'md-threatdown-addons' ];
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
		return [ 'threatdown', 'media', 'box' ];
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
				'label' => esc_html__( 'Content', 'md-threatdown' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'heading',
			[
				'label'       => esc_html__( 'Heading', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your title', 'md-threatdown' ),
				'label_block' => true,
			]
		);

		// Description.
		$this->add_control(
			'description',
			[
				'label'       => esc_html__( 'Description', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXTAREA,
				'placeholder' => esc_html__( 'Enter your description', 'md-threatdown' ),
				'label_block' => true,
			]
		);

		// Banner List Icon Selector.
		$this->add_responsive_control(
			'list_icon',
			[
				'label'   => esc_html__( 'List Icon', 'md-threatdown' ),
				'type'    => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value'   => 'fas fa-check',
					'library' => 'solid',
				],
			]
		);

		// Banner Lists.
		$banner_list = new \Elementor\Repeater();

		$banner_list->add_control(
			'list_text',
			[
				'label'       => esc_html__( 'Text', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your list text', 'md-threatdown' ),
				'label_block' => true,
			]
		);

		$this->add_control(
			'banner_list',
			[
				'label'       => esc_html__( 'List', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::REPEATER,
				'fields'      => $banner_list->get_controls(),
				'title_field' => '{{{ list_text }}}',
			]
		);

		// Link Text and Link URL.
		$this->add_control(
			'link_text',
			[
				'label'       => esc_html__( 'Link Text', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your link text', 'md-threatdown' ),
				'label_block' => true,
			]
		);

		$this->add_control(
			'link_url',
			[
				'label'       => esc_html__( 'Link URL', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::URL,
				'placeholder' => esc_html__( 'https://your-link.com', 'md-threatdown' ),
				'label_block' => true,
			]
		);

		// Banner Image
		$this->add_control(
			'banner_image',
			[
				'label'   => esc_html__( 'Banner Image', 'md-threatdown' ),
				'type'    => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		$this->end_controls_section();

		// Style Section
		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'md-threatdown' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Media Position Left or Right
		$this->add_control(
			'media_position',
			[
				'label'   => esc_html__( 'Media Position', 'md-threatdown' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'row-reverse' => esc_html__( 'Left', 'md-threatdown' ),
					'row'        => esc_html__( 'Right', 'md-threatdown' ),
				],
				'default' => 'row-reverse',
				'selectors' => [
					'{{WRAPPER}} .threatdown-media-box' => 'flex-direction: {{VALUE}};',
				],
			]
		);

		// Media and Content Gap
		$this->add_responsive_control(
			'media_content_gap',
			[
				'label'           => esc_html__( 'Media and Content Gap', 'md-threatdown' ),
				'type'            => \Elementor\Controls_Manager::SLIDER,
				'size_units'      => [ 'px', 'em', '%' ],
				'range'           => [
					'px' => [
						'min'  => 0,
						'max'  => 1200,
						'step' => 1,
					],
					'%'  => [
						'min'  => 0,
						'max'  => 100,
						'step' => 1,
					],
				],
				'default'         => [
					'size' => 20,
					'unit' => 'px',
				],
				'selectors'       => [
					'{{WRAPPER}} .threatdown-media-box' => 'gap: {{SIZE}}{{UNIT}};',
				],
			]
		);

		// Flex Alignment
		$this->add_control(
			'flex_alignment',
			[
				'label'   => esc_html__( 'Flex Alignment', 'md-threatdown' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'flex-start' => esc_html__( 'Start', 'md-threatdown' ),
					'center'     => esc_html__( 'Center', 'md-threatdown' ),
					'flex-end'   => esc_html__( 'End', 'md-threatdown' ),
				],
				'default' => 'center',
				'selectors' => [
					'{{WRAPPER}} .threatdown-media-box' => 'align-items: {{VALUE}};',
				],
			]
		);

		// Alignment
		$this->add_control(
			'alignment',
			[
				'label'   => esc_html__( 'Alignment', 'md-threatdown' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left'   => [
						'title' => esc_html__( 'Left', 'md-threatdown' ),
						'icon'  => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'md-threatdown' ),
						'icon'  => 'eicon-text-align-center',
					],
					'right'  => [
						'title' => esc_html__( 'Right', 'md-threatdown' ),
						'icon'  => 'eicon-text-align-right',
					],
				],
				'default' => 'left',
				'selectors' => [
					'{{WRAPPER}} .threatdown-media-box .threatdown-media-box-content' => 'text-align: {{VALUE}};',
				],
			]
		);

		// Heading Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'heading_typography',
				'label'    => esc_html__( 'Heading Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .threatdown-media-box .threatdown-media-box-content .threatdown-media-box-content__heading',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label'     => esc_html__( 'Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-media-box .threatdown-media-box-content .threatdown-media-box-content__heading' => 'color: {{VALUE}}',
				],
			]
		);

		// Description Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'description_typography',
				'label'    => esc_html__( 'Description Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .threatdown-media-box .threatdown-media-box-content .threatdown-media-box-content__description',
			]
		);

		$this->add_control(
			'description_color',
			[
				'label'     => esc_html__( 'Description Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-media-box .threatdown-media-box-content .threatdown-media-box-content__description' => 'color: {{VALUE}}',
				],
			]
		);

		// Bnner List Icon Color
		$this->add_control(
			'list_icon_color',
			[
				'label'     => esc_html__( 'List Icon Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-media-box .threatdown-media-box-content .threatdown-media-box-content__list i' => 'color: {{VALUE}}',
				],
			]
		);

		// Bnner List Icon Background Color
		$this->add_control(
			'list_icon_bg_color',
			[
				'label'     => esc_html__( 'List Icon Background Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-media-box .threatdown-media-box-content .threatdown-media-box-content__list i' => 'background-color: {{VALUE}}',
				],
			]
		);

		// Bnner List Icon Size
		$this->add_responsive_control(
			'list_icon_size',
			[
				'label'           => esc_html__( 'List Icon Size', 'md-threatdown' ),
				'type'            => \Elementor\Controls_Manager::SLIDER,
				'size_units'      => [ 'px', 'em', '%' ],
				'range'           => [
					'px' => [
						'min'  => 0,
						'max'  => 120,
						'step' => 1,
					],
					'%'  => [
						'min'  => 0,
						'max'  => 100,
						'step' => 1,
					],
				],
				'default'         => [
					'size' => 16,
					'unit' => 'px',
				],
				'selectors'       => [
					'{{WRAPPER}} .threatdown-media-box .threatdown-media-box-content .threatdown-media-box-content__list i' => 'font-size: {{SIZE}}{{UNIT}};',
				],
			]
		);

		// Bnner List Text Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'list_text_typography',
				'label'    => esc_html__( 'List Text Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .threatdown-media-box .threatdown-media-box-content .threatdown-media-box-content__list span',
			]
		);

		$this->add_control(
			'list_text_color',
			[
				'label'     => esc_html__( 'List Text Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-media-box .threatdown-media-box-content .threatdown-media-box-content__list span' => 'color: {{VALUE}}',
				],
			]
		);

		// Link Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'link_typography',
				'label'    => esc_html__( 'Link Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .threatdown-media-box .threatdown-media-box-content .threatdown-media-box-btn',
			]
		);

		$this->add_control(
			'link_color',
			[
				'label'     => esc_html__( 'Link Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-media-box .threatdown-media-box-content .threatdown-media-box-btn' => 'color: {{VALUE}}',
				],
			]
		);

		// Link Text Decoration
		$this->add_control(
			'link_text_decoration',
			[
				'label'   => esc_html__( 'Link Text Decoration', 'md-threatdown' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'none'   => esc_html__( 'None', 'md-threatdown' ),
					'underline' => esc_html__( 'Underline', 'md-threatdown' ),
					'overline' => esc_html__( 'Overline', 'md-threatdown' ),
					'line-through' => esc_html__( 'Line Through', 'md-threatdown' ),
				],
				'default' => 'none',
				'selectors' => [
					'{{WRAPPER}} .threatdown-media-box .threatdown-media-box-content .threatdown-media-box-btn' => 'text-decoration: {{VALUE}};',
				],
			]
		);

		// Link Text Decoration Color
		$this->add_control(
			'link_text_decoration_color',
			[
				'label'     => esc_html__( 'Link Text Decoration Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-media-box .threatdown-media-box-content .threatdown-media-box-btn' => 'text-decoration-color: {{VALUE}}',
				],
			]
		);

		// Banner Content Width.
		$this->add_responsive_control(
			'banner_content_width',
			[
				'label'           => esc_html__( 'Content Width', 'md-threatdown' ),
				'type'            => \Elementor\Controls_Manager::SLIDER,
				'size_units'      => [ 'px', '%' ],
				'range'           => [
					'px' => [
						'min'  => 0,
						'max'  => 1200,
						'step' => 1,
					],
					'%'  => [
						'min'  => 0,
						'max'  => 100,
						'step' => 1,
					],
				],
				'default'         => [
					'size' => 100,
					'unit' => '%',
				],
				'selectors'       => [
					'{{WRAPPER}} .threatdown-media-box' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		// Banner Image Size, Position and Overlay.
		$this->add_responsive_control(
			'banner_image_size',
			[
				'label'   => esc_html__( 'Image Size', 'md-threatdown' ),
				'type'    => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', '%' ],
				'range'     => [
					'px' => [
						'min'  => 0,
						'max'  => 1200,
						'step' => 1,
					],
					'%'  => [
						'min'  => 0,
						'max'  => 100,
						'step' => 1,
					],
				],
				'default' => [
					'size' => 100,
					'unit' => '%',
				],
				'selectors' => [
					'{{WRAPPER}} .threatdown-media-box-image' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'banner_image_position',
			[
				'label'   => esc_html__( 'Image Position', 'md-threatdown' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'center center' => esc_html__( 'Center Center', 'md-threatdown' ),
					'center top'    => esc_html__( 'Center Top', 'md-threatdown' ),
					'center bottom' => esc_html__( 'Center Bottom', 'md-threatdown' ),
					'left top'      => esc_html__( 'Left Top', 'md-threatdown' ),
					'left center'   => esc_html__( 'Left Center', 'md-threatdown' ),
					'left bottom'   => esc_html__( 'Left Bottom', 'md-threatdown' ),
					'right top'     => esc_html__( 'Right Top', 'md-threatdown' ),
					'right center'  => esc_html__( 'Right Center', 'md-threatdown' ),
					'right bottom'  => esc_html__( 'Right Bottom', 'md-threatdown' ),
				],
				'default' => 'center center',
			]
		);

		$this->add_control(
			'banner_image_overlay',
			[
				'label'   => esc_html__( 'Image Overlay', 'md-threatdown' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'none'    => esc_html__( 'None', 'md-threatdown' ),
					'color'   => esc_html__( 'Color', 'md-threatdown' ),
					'gradient' => esc_html__( 'Gradient', 'md-threatdown' ),
				],
				'default' => 'none',
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
		<div class="threatdown-media-box-container">
			<div class="threatdown-container">
				<div class="threatdown-media-box-absolute">
					<div class="threatdown-media-box-absolute___background"></div>
				</div>
				<div class="threatdown-media-box">
					<div class="threatdown-media-box-content">
						<h2 class="threatdown-media-box-content__heading"><?php echo wp_kses_post( $settings['heading'] ); ?></h2>
						<p class="threatdown-media-box-content__description"><?php echo esc_html( $settings['description'] ); ?></p>
						<?php if ( ! empty( $settings['banner_list'] ) ) : ?>
							<div class="threatdown-media-box-content__list">
								<?php foreach ( $settings['banner_list'] as $item ) : ?>
									<div class="threatdown-media-box-content__list-item">
										<?php if ( ! empty( $settings['list_icon']['value'] ) ) : ?>
											<div class="threatdown-media-box-content__list-icon">
												<?php if ( ! empty( $settings['list_icon']['library'] ) && $settings['list_icon']['library'] === 'svg' ) : ?>
													<img src="<?php echo esc_url( $settings['list_icon']['value'] ); ?>" alt="<?php echo esc_attr( $item['list_text'] ); ?>">
												<?php else : ?>
													<i class="<?php echo esc_attr( $settings['list_icon']['value'] ); ?>"></i>
												<?php endif; ?>
											</div>
										<?php endif; ?>
										<span><?php echo esc_html( $item['list_text'] ); ?></span>
									</div>
								<?php endforeach; ?>
							</div>
						<?php endif; ?>
						<div class="threatdown-media-box-btn-group">
							<?php if ( ! empty( $settings['link_text'] ) ) : ?>
								<a href="<?php echo esc_url( $settings['link_url']['url'] ); ?>" class="threatdown-media-box-btn"><?php echo esc_html( $settings['link_text'] ); ?></a>
							<?php endif; ?>
						</div>
					</div>
					<?php if ( ! empty( $settings['banner_image']['url'] ) ) : ?>
						<div class="threatdown-media-box-image">
							<img src="<?php echo esc_url( $settings['banner_image']['url'] ); ?>" alt="<?php echo esc_attr( $settings['heading'] ); ?>">
						</div>
					<?php endif; ?>
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
		<div class="threatdown-media-box-container">
			<div class="threatdown-container">
				<div class="threatdown-media-box-absolute">
					<div class="threatdown-media-box-absolute___background"></div>
				</div>
				<div class="threatdown-media-box">
					<div class="threatdown-media-box-content">
						<h2 class="threatdown-media-box-content__heading">{{{ settings.heading }}}</h2>
						<p class="threatdown-media-box-content__description">{{{ settings.description }}}</p>
						<# if ( settings.banner_list.length ) { #>
							<div class="threatdown-media-box-content__list">
								<# _.each( settings.banner_list, function( item ) { #>
									<div class="threatdown-media-box-content__list-item">
										<# if ( settings.list_icon.value ) { #>
											<div class="threatdown-media-box-content__list-icon">
												<# if ( settings.list_icon.library && settings.list_icon.library === 'svg' ) { #>
													<img src="{{{ settings.list_icon.value }}}" alt="{{{ item.list_text }}}">
												<# } else { #>
													<i class="{{{ settings.list_icon.value }}}"></i>
												<# } #>
											</div>
										<# } #>
										<span>{{{ item.list_text }}}</span>
									</div>
								<# }); #>
							</div>
						<# } #>
						<div class="threatdown-media-box-btn-group">
							<# if ( settings.link_text ) { #>
								<a href="{{{ settings.link_url.url }}}" class="threatdown-media-box-btn">{{{ settings.link_text }}}</a>
							<# } #>
						</div>
					</div>
					<# if ( settings.banner_image.url ) { #>
						<div class="threatdown-media-box-image">
							<img src="{{{ settings.banner_image.url }}}" alt="{{{ settings.heading }}}">
						</div>
					<# } #>
				</div>
			</div>
		</div>
        <?php
	}

}