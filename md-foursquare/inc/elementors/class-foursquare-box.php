<?php
/**
 * Elementor Widgets.
 *
 * @package    MD_Foursquare
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Foursquare\Inc\Elementors;


/**
 * Foursquare_Box class
 * 
 * @since 1.0.0
 */
class Foursquare_Box extends \Elementor\Widget_Base {

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
		return 'foursquare-box';
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
		return esc_html__( 'Foursquare Box', 'md-foursquare' );
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
		return 'eicon-testimonial';
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
		return [ 'md-foursquare-addons' ];
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
		return [ 'foursquare', 'box', 'why', 'md' ];
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
				'label' => esc_html__( 'Content', 'md-foursquare' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		// Heading
		$this->add_control(
			'heading',
			[
				'label'       => esc_html__( 'Heading', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Loved by thousands of creators and brands', 'md-foursquare' ),
			]
		);

		// Repeater as FourSquare Box Items including title, description.
		$foursquare_box_repeater = new \Elementor\Repeater();

		// Title
		$foursquare_box_repeater->add_control(
			'title',
			[
				'label'       => esc_html__( 'Title', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Title', 'md-foursquare' ),
			]
		);

		// Description
		$foursquare_box_repeater->add_control(
			'description',
			[
				'label'       => esc_html__( 'Description', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::TEXTAREA,
				'placeholder' => esc_html__( 'Description', 'md-foursquare' ),
			]
		);

		// Add Item
		$this->add_control(
			'foursquare_box_items',
			[
				'label'  => esc_html__( 'Items', 'md-foursquare' ),
				'type'   => \Elementor\Controls_Manager::REPEATER,
				'fields' => $foursquare_box_repeater->get_controls(),
				'title_field' => '{{{ title }}}',
			]
		);

		// FourSquare Box Item Icon Selector.
		$this->add_responsive_control(
			'foursquare_box_icon',
			[
				'label' => esc_html__( 'Icon', 'md-foursquare' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-check',
					'library' => 'solid',
				],
			]
		);

		$this->end_controls_section();

		// Style Section

		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'md-foursquare' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Heading Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'heading_typography',
				'label'    => esc_html__( 'Heading Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-box-heading',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label'     => esc_html__( 'Heading Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-box-heading' => 'color: {{VALUE}}',
				],
			]
		);

		// FourSquare Box Item Title Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'foursquare_box_title_typography',
				'label'    => esc_html__( 'Item Title Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-box-item-title',
			]
		);

		$this->add_control(
			'foursquare_box_title_color',
			[
				'label'     => esc_html__( 'Item Title Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-box-item-title' => 'color: {{VALUE}}',
				],
			]
		);

		// FourSquare Box Item Description Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'foursquare_box_description_typography',
				'label'    => esc_html__( 'Item Description Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-box-item-description',
			]
		);

		$this->add_control(
			'foursquare_box_description_color',
			[
				'label'     => esc_html__( 'Item Description Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-box-item-description' => 'color: {{VALUE}}',
				],
			]
		);

		// FourSquare Box Item Icon Color.
		$this->add_control(
			'foursquare_box_icon_color',
			[
				'label'     => esc_html__( 'Icon Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-box-item-icon' => 'color: {{VALUE}}',
				],
			]
		);

		// FourSquare Box Item Icon Size.
		$this->add_responsive_control(
			'foursquare_box_icon_size',
			[
				'label' => esc_html__( 'Icon Size', 'md-foursquare' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range' => [
					'px' => [
						'min' => 10,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .foursquare-box-item-icon' => 'font-size: {{SIZE}}{{UNIT}}',
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

		<div class="foursquare-box">
			<h2 class="foursquare-box-heading"><?php echo esc_html( $settings['heading'] ); ?></h2>
			<div class="foursquare-box-items">
				<?php foreach ( $settings['foursquare_box_items'] as $item ) : ?>
					<div class="foursquare-box-item">
						<div class="foursquare-box-item-icon">
							<?php if ( ! empty( $settings['foursquare_box_icon']['library'] ) && $settings['foursquare_box_icon']['library'] === 'svg' ) : ?>
								<img src="<?php echo esc_url( $settings['foursquare_box_icon']['value']['url'] ); ?>" alt="<?php echo esc_attr( $item['title'] ); ?>">
							<?php else : ?>
								<i class="<?php echo esc_attr( $settings['foursquare_box_icon']['value'] ); ?>"></i>
							<?php endif; ?>
						</div>
						<div class="foursquare-box-item-content">
							<h3 class="foursquare-box-item-title"><?php echo esc_html( $item['title'] ); ?></h3>
							<p class="foursquare-box-item-description"><?php echo esc_html( $item['description'] ); ?></p>
						</div>
					</div>
				<?php endforeach; ?>
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

		<div class="foursquare-box">
			<h2 class="foursquare-box-heading">{{{ settings.heading }}}</h2>
			<div class="foursquare-box-items">
				<# _.each( settings.foursquare_box_items, function( item ) { #>
					<div class="foursquare-box-item">
						<div class="foursquare-box-item-icon">
							<# if ( settings.foursquare_box_icon.library === 'svg' ) { #>
								<img src="{{{ settings.foursquare_box_icon.value.url }}}" alt="{{{ item.title }}}">
							<# } else { #>
								<i class="{{{ settings.foursquare_box_icon.value }}}"></i>
							<# } #>
						</div>
						<div class="foursquare-box-item-content">
							<h3 class="foursquare-box-item-title">{{{ item.title }}}</h3>
							<p class="foursquare-box-item-description">{{{ item.description }}}</p>
						</div>
					</div>
				<# }); #>
			</div>
		</div>


        <?php
	}

}