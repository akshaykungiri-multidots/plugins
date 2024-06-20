<?php
/**
 * Elementor Widgets.
 *
 * @package    MD_Foursquare
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Foursquare\Inc\Elementors;


/**
 * Foursquare_Multi_Image_Box class
 * 
 * @since 1.0.0
 */
class Foursquare_Multi_Image_Box extends \Elementor\Widget_Base {

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
		return 'foursquare-multi-image-box';
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
		return esc_html__( 'Foursquare Multi Image Box', 'md-foursquare' );
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
		return [ 'foursquare', 'multi', 'image', 'box' ];
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

		// Sub Heading
		$this->add_control(
			'sub_heading',
			[
				'label'       => esc_html__( 'Sub Heading', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Sub Heading', 'md-foursquare' ),
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

		// Repeater Control for Product List Items including Title, Product Items, Link Text, Link URL.
		$product_list_repeater = new \Elementor\Repeater();

		// Product Title.
		$product_list_repeater->add_control(
			'product_title',
			[
				'label'       => esc_html__( 'Product Title', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Product Title', 'md-foursquare' ),
			]
		);

		// Product Items as Repeater including Image, Title, Description.
		$product_items_repeater = new \Elementor\Repeater();

		// Image
		$product_items_repeater->add_control(
			'product_item_image',
			[
				'label'   => esc_html__( 'Image', 'md-foursquare' ),
				'type'    => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			],
		);

		// Title
		$product_items_repeater->add_control(
			'product_item_title',
			[
				'label'       => esc_html__( 'Title', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Title', 'md-foursquare' ),
			]
		);

		// Description
		$product_items_repeater->add_control(
			'product_item_description',
			[
				'label'       => esc_html__( 'Description', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::TEXTAREA,
				'placeholder' => esc_html__( 'Description', 'md-foursquare' ),
			]
		);

		// Add Product Item
		$product_list_repeater->add_control(
			'product_items',
			[
				'label'  => esc_html__( 'Items', 'md-foursquare' ),
				'type'   => \Elementor\Controls_Manager::REPEATER,
				'fields' => $product_items_repeater->get_controls(),
				'title_field' => '{{{ product_item_title }}}',
				'default' => [
					[
						'product_item_title' => esc_html__( 'Product Title', 'md-foursquare' ),
					],
				],
			]
		);

		// Product Link Text
		$product_list_repeater->add_control(
			'product_link_text',
			[
				'label'       => esc_html__( 'Link Text', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Link Text', 'md-foursquare' ),
			]
		);

		// Product Link URL
		$product_list_repeater->add_control(
			'product_link_url',
			[
				'label'       => esc_html__( 'Link URL', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::URL,
				'placeholder' => esc_html__( 'https://your-link.com', 'md-foursquare' ),
			]
		);

		// Add Product List Item
		$this->add_control(
			'product_list_items',
			[
				'label'  => esc_html__( 'Product List Items', 'md-foursquare' ),
				'type'   => \Elementor\Controls_Manager::REPEATER,
				'fields' => $product_list_repeater->get_controls(),
				'title_field' => '{{{ product_title }}}',
				'default' => [
					[
						'product_title' => esc_html__( 'Product Title', 'md-foursquare' ),
					],
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

		// Sub Heading Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'sub_heading_typography',
				'label'    => esc_html__( 'Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-multi-image-box-sub-heading',
			]
		);

		$this->add_control(
			'sub_heading_color',
			[
				'label'  => esc_html__( 'Color', 'md-foursquare' ),
				'type'   => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-multi-image-box-sub-heading' => 'color: {{VALUE}}',
				],
			]
		);

		// Heading Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'heading_typography',
				'label'    => esc_html__( 'Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-multi-image-box-heading',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label'  => esc_html__( 'Color', 'md-foursquare' ),
				'type'   => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-multi-image-box-heading' => 'color: {{VALUE}}',
				],
			]
		);

		// Product Title Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'product_title_typography',
				'label'    => esc_html__( 'Product Title Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-multi-image-box-product-title',
			]
		);

		$this->add_control(
			'product_title_color',
			[
				'label'  => esc_html__( 'Product Title Color', 'md-foursquare' ),
				'type'   => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-multi-image-box-product-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Product Item Title Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'product_item_title_typography',
				'label'    => esc_html__( 'Product Item Title Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-multi-image-box-product-item-title',
			]
		);

		$this->add_control(
			'product_item_title_color',
			[
				'label'  => esc_html__( 'Product Item Title Color', 'md-foursquare' ),
				'type'   => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-multi-image-box-product-item-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Product Item Description Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'product_item_description_typography',
				'label'    => esc_html__( 'Product Item Description Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-multi-image-box-product-item-description',
			]
		);

		$this->add_control(
			'product_item_description_color',
			[
				'label'  => esc_html__( 'Product Item Description Color', 'md-foursquare' ),
				'type'   => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-multi-image-box-product-item-description' => 'color: {{VALUE}}',
				],
			]
		);

		// Product Item Image Size.
		$this->add_control(
			'product_item_image_size',
			[
				'label'   => esc_html__( 'Product Item Image Size', 'md-foursquare' ),
				'type'    => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range'   => [
					'px' => [
						'min'  => 0,
						'max'  => 500,
						'step' => 1,
					],
					'em' => [
						'min'  => 0,
						'max'  => 50,
						'step' => 0.1,
					],
					'rem' => [
						'min'  => 0,
						'max'  => 50,
						'step' => 0.1,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .foursquare-multi-image-box-product-item-image img' => 'width: {{SIZE}}{{UNIT}}; height: auto;',
				],
			]
		);

		// Product Link Text Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'product_link_text_typography',
				'label'    => esc_html__( 'Product Link Text Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-multi-image-box-product-link-text',
			]
		);

		$this->add_control(
			'product_link_text_color',
			[
				'label'  => esc_html__( 'Product Link Text Color', 'md-foursquare' ),
				'type'   => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-multi-image-box-product-link-text' => 'color: {{VALUE}}',
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

		<div class="foursquare-multi-image-box">
			<div class="foursquare-multi-image-box-inner">
				<?php if ( ! empty( $settings['sub_heading'] ) ) : ?>
					<div class="foursquare-multi-image-box-sub-heading"><?php echo esc_html( $settings['sub_heading'] ); ?></div>
				<?php endif; ?>
				<?php if ( ! empty( $settings['heading'] ) ) : ?>
					<h2 class="foursquare-multi-image-box-heading"><?php echo esc_html( $settings['heading'] ); ?></h2>
				<?php endif; ?>
				<div class="foursquare-multi-image-box-product-list">
					<?php foreach ( $settings['product_list_items'] as $product_list_item ) : ?>
						<div class="foursquare-multi-image-box-product-list-items">
							<?php if ( ! empty( $product_list_item['product_title'] ) ) : ?>
								<h3 class="foursquare-multi-image-box-product-title"><?php echo esc_html( $product_list_item['product_title'] ); ?></h3>
							<?php endif; ?>
							<div class="foursquare-multi-image-box-product-items">
								<?php foreach ( $product_list_item['product_items'] as $product_item ) : ?>
									<div class="foursquare-multi-image-box-product-item">
										<div class="foursquare-multi-image-box-product-item-image">
											<img src="<?php echo esc_url( $product_item['product_item_image']['url'] ); ?>" alt="<?php echo esc_attr( $product_item['product_item_title'] ); ?>">
										</div>
										<div class="foursquare-multi-image-box-product-item-content">
											<h4 class="foursquare-multi-image-box-product-item-title"><?php echo esc_html( $product_item['product_item_title'] ); ?></h4>
											<p class="foursquare-multi-image-box-product-item-description"><?php echo esc_html( $product_item['product_item_description'] ); ?></p>
										</div>
									</div>
								<?php endforeach; ?>
							</div>
							<?php if ( ! empty( $product_list_item['product_link_text'] ) && ! empty( $product_list_item['product_link_url']['url'] ) ) : ?>
								<a href="<?php echo esc_url( $product_list_item['product_link_url']['url'] ); ?>" class="foursquare-multi-image-box-product-link-text"><?php echo esc_html( $product_list_item['product_link_text'] ); ?></a>
							<?php endif; ?>
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

		<div class="foursquare-multi-image-box">
			<div class="foursquare-multi-image-box-inner">
				<# if ( settings.sub_heading ) { #>
					<div class="foursquare-multi-image-box-sub-heading">{{{ settings.sub_heading }}}</div>
				<# } #>
				<# if ( settings.heading ) { #>
					<h2 class="foursquare-multi-image-box-heading">{{{ settings.heading }}}</h2>
				<# } #>
				<div class="foursquare-multi-image-box-product-list">
					<# _.each( settings.product_list_items, function( product_list_item ) { #>
						<div class="foursquare-multi-image-box-product-list-items">
							<# if ( product_list_item.product_title ) { #>
								<h3 class="foursquare-multi-image-box-product-title">{{{ product_list_item.product_title }}}</h3>
							<# } #>
							<div class="foursquare-multi-image-box-product-items">
								<# _.each( product_list_item.product_items, function( product_item ) { #>
									<div class="foursquare-multi-image-box-product-item">
										<div class="foursquare-multi-image-box-product-item-image">
											<img src="{{{ product_item.product_item_image.url }}}" alt="{{{ product_item.product_item_title }}}">
										</div>
										<div class="foursquare-multi-image-box-product-item-content">
											<h4 class="foursquare-multi-image-box-product-item-title">{{{ product_item.product_item_title }}}</h4>
											<p class="foursquare-multi-image-box-product-item-description">{{{ product_item.product_item_description }}}</p>
										</div>
									</div>
								<# }); #>
							</div>
							<# if ( product_list_item.product_link_text && product_list_item.product_link_url.url ) { #>
								<a href="{{{ product_list_item.product_link_url.url }}}" class="foursquare-multi-image-box-product-link-text">{{{ product_list_item.product_link_text }}}</a>
							<# } #>
						</div>
					<# }); #>
				</div>
			</div>
		</div>
		

        <?php
	}

}