<?php

/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Fiery_Addon
 * @author     Multidots <info@multidots.com>
 */

 namespace MD_Fiery_Addon\Inc\Elementors;


/**
 * Elementor Hero Banner Widget.
 *
 * Elementor widget that inserts an embbedable content into the page, from any given URL.
 *
 * @since 1.0.0
 */
class Fiery_Hero_Card_Banner extends \Elementor\Widget_Base {

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
		return 'fiery_hero_card_banner';
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
		return esc_html__( 'Hero Card Banner', 'md-fiery-addon' );
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
		return 'eicon-posts-grid';
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
		return [ 'md-fiery-addons' ];
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
		return [ 'hero', 'card', 'banner', 'hero-card-banner' ];
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
	 * Register list widget controls.
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
                'label' => esc_html__( 'Content', 'md-fiery-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        // Heading, Content.

        $this->add_control(
            'heading',
            [
                'label' => esc_html__( 'Heading', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Heading', 'md-fiery-addon' ),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'content',
            [
                'label' => esc_html__( 'Content', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::WYSIWYG,
                'default' => esc_html__( 'Content', 'md-fiery-addon' ),
                'show_label' => true,
            ]
        );

        $this->end_controls_section();

        // Card Section for repeater including title, link and icon and card link.

        $this->start_controls_section(
            'card_section',
            [
                'label' => esc_html__( 'Card', 'md-fiery-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'title',
            [
                'label' => esc_html__( 'Title', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Title', 'md-fiery-addon' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'link_text',
            [
                'label' => esc_html__( 'Link Text', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Link Text', 'md-fiery-addon' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'link_url',
            [
                'label' => esc_html__( 'Link URL', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::URL,
                'default' => [
                    'url' => '#',
                ],
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'icon',
            [
                'label' => esc_html__( 'Icon', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::ICONS,
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'card_link',
            [
                'label' => esc_html__( 'Card Link', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::URL,
                'default' => [
                    'url' => '',
                ],
                'label_block' => true,
            ]
        );

        // Card Background color.

        $repeater->add_control(
            'card_background',
            [
                'label' => esc_html__( 'Card Background', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
            ]
        );

        // Card Background image.

        $repeater->add_control(
            'card_background_image',
            [
                'label' => esc_html__( 'Card Background Image', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::MEDIA,
            ]
        );

        // Add the repeater control.
        $this->add_control(
            'card_list',
            [
                'label' => esc_html__( 'Card List', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'title' => esc_html__( 'Card Title', 'md-fiery-addon' ),
                        'link_text' => esc_html__( 'Link Text', 'md-fiery-addon' ),
                        'link_url' => [
                            'url' => '#',
                        ],
                        'icon' => [
                            'value' => 'fas fa-home',
                            'library' => 'fa-solid',
                        ],
                        'card_link' => [
                            'url' => '',
                        ],
                    ],
                    [
                        'title' => esc_html__( 'Card Title', 'md-fiery-addon' ),
                        'link_text' => esc_html__( 'Link Text', 'md-fiery-addon' ),
                        'link_url' => [
                            'url' => '#',
                        ],
                        'icon' => [
                            'value' => 'fas fa-home',
                            'library' => 'fa-solid',
                        ],
                        'card_link' => [
                            'url' => '',
                        ],
                    ],
                    [
                        'title' => esc_html__( 'Card Title', 'md-fiery-addon' ),
                        'link_text' => esc_html__( 'Link Text', 'md-fiery-addon' ),
                        'link_url' => [
                            'url' => '#',
                        ],
                        'icon' => [
                            'value' => 'fas fa-home',
                            'library' => 'fa-solid',
                        ],
                        'card_link' => [
                            'url' => '',
                        ],
                    ],
                ],
                'title_field' => '{{{ title }}}',
            ]
        );

        $this->end_controls_section();
        

        // Style Section.

        $this->start_controls_section(
            'style_section',
            [
                'label' => esc_html__( 'General', 'md-fiery-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        // Add Background Group control.

        $this->add_group_control(
            \Elementor\Group_Control_Background::get_type(),
            [
                'name' => 'background',
                'label' => esc_html__( 'Background', 'md-fiery-addon' ),
                'types' => [ 'classic', 'gradient' ],
                'selector' => '{{WRAPPER}} .hero-card-banner',
            ]
        );

        // Add Boxed or Fullwidth control. If boxed then add max-width and margin: 0 auto.

        $this->add_control(
            'boxed',
            [
                'label' => esc_html__( 'Boxed', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
                'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
                'return_value' => 'boxed',
                'default' => '',
                "selectors" => [
                    "{{WRAPPER}} .hero-card-banner__inner " => "max-width: 1200px; margin: 0 auto;",
                ],
            ]
        );

        // Heading Typography and Color.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'heading_typography',
                'label' => esc_html__( 'Heading Typography', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .heading',
            ]
        );

        $this->add_control(
            'heading_color',
            [
                'label' => esc_html__( 'Heading Color', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .heading' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Content Typography and Color.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'content_typography',
                'label' => esc_html__( 'Content Typography', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .content',
            ]
        );

        $this->add_control(
            'content_color',
            [
                'label' => esc_html__( 'Content Color', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .content' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Alignment.

        $this->add_responsive_control(
            'alignment',
            [
                'label' => esc_html__( 'Alignment', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => esc_html__( 'Left', 'md-fiery-addon' ),
                        'icon' => 'eicon-text-align-left',
                    ],
                    'center' => [
                        'title' => esc_html__( 'Center', 'md-fiery-addon' ),
                        'icon' => 'eicon-text-align-center',
                    ],
                    'right' => [
                        'title' => esc_html__( 'Right', 'md-fiery-addon' ),
                        'icon' => 'eicon-text-align-right',
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .hero-card-banner__inner' => 'text-align: {{VALUE}}',
                ],
                "default" => "center",
            ]
        );

        $this->end_controls_section();

        // Create style for card section.

        $this->start_controls_section(
            'card_style_section',
            [
                'label' => esc_html__( 'Card', 'md-fiery-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        // Card per row.

        $this->add_responsive_control(
            'card_per_row',
            [
                'label' => esc_html__( 'Card Per Row', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'options' => [
                    '1' => esc_html__( '1', 'md-fiery-addon' ),
                    '2' => esc_html__( '2', 'md-fiery-addon' ),
                    '3' => esc_html__( '3', 'md-fiery-addon' ),
                    '4' => esc_html__( '4', 'md-fiery-addon' ),
                ],
                'default' => '3',
                'selectors' => [
                    '{{WRAPPER}} .card__item__wrapper' => 'width: calc(100% / {{VALUE}} - 20px)',
                ],
            ]
        );

        // Card Padding.

        $this->add_responsive_control(
            'card_padding',
            [
                'label' => esc_html__( 'Card Padding', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .card__item__wrapper' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
                ],
            ]
        );

        // Card Border control.

        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'card_border',
                'label' => esc_html__( 'Card Border', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .card__item',
            ]
        );

        // Card Title Typography and Color.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'card_title_typography',
                'label' => esc_html__( 'Card Title Typography', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .card__title',
            ]
        );

        $this->add_control(
            'card_title_color',
            [
                'label' => esc_html__( 'Card Title Color', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .card__title' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Card Link Typography and Color.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'card_link_typography',
                'label' => esc_html__( 'Card Link Typography', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .card__link',
            ]
        );

        $this->add_control(
            'card_link_color',
            [
                'label' => esc_html__( 'Card Link Color', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .card__link' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->end_controls_section();
	}

	/**
	 * Render list widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <div class="hero-card-banner">
            <div class="hero-card-banner__inner">
                <h2 class="heading"><?php echo esc_html( $settings['heading'] ); ?></h2>
                <div class="content"><?php echo wp_kses_post( $settings['content'] ); ?></div>
                <div class="card">
                    <?php
                    foreach ( $settings['card_list'] as $card ) {
                        ?>
                        <div class="card__item__wrapper">
                            <?php if ( ! empty( $card['card_background_image']['url'] ) ) { ?>
                                <div class="card__item__wrapper__background">
                                    <img src="<?php echo esc_url( $card['card_background_image']['url'] ); ?>" alt="<?php echo esc_attr( $card['title'] ); ?>">
                                </div>
                            <?php
                            }
                            if ( ! empty( $card['card_link']['url'] ) ) {
                                ?>
                                <a href="<?php echo esc_url( $card['card_link']['url'] ); ?>" class="card__item">
                                <?php
                            }
                            ?>
                            </a>
                            <div class="card__item__inner">
                                <div class="card_item__inner_content">
                                    <h3 class="card__title"><?php echo esc_html( $card['title'] ); ?></h3>
                                    <a href="<?php echo esc_url( $card['link_url']['url'] ); ?>" class="card__link">
                                        <?php echo esc_html( $card['link_text'] ); ?>
                                    </a>
                                </div>
                                <?php if ( ! empty( $card['icon']['value'] ) ) { ?>
                                    <div class="card_item__inner_icon">
                                        <?php 
                                        if ( $card['icon']['library'] === 'svg' ) {
                                            ?>
                                            <img src="<?php echo esc_url( $card['icon']['value']['url'] ); ?>" alt="<?php echo esc_attr( $card['title'] ); ?>">
                                            <?php
                                        } else {
                                            ?>
                                            <i class="<?php echo esc_attr( $card['icon']['value'] ); ?>"></i>
                                            <?php
                                        }
                                        ?>
                                    </div>
                                <?php } ?>
                            </div>
                            <div class="card__item__background_color" style="<?php echo 'background-color: ' . esc_attr( $card['card_background'] ); ?>"></div>
                        </div>
                        <?php
                    }
                    ?>
                </div>
            </div>
        </div>
        <?php
	}

	/**
	 * Render list widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function content_template() {
        ?>
        <div class="hero-card-banner">
            <div class="hero-card-banner__inner">
                <h2 class="heading">{{{ settings.heading }}}</h2>
                <div class="content">{{{ settings.content }}}</div>
                <div class="card">
                    <# _.each( settings.card_list, function( card ) { #>
                        <div class="card__item__wrapper">
                            <# if ( card.card_background_image.url ) { #>
                                <div class="card__item__wrapper__background">
                                    <img src="{{ card.card_background_image.url }}" alt="{{ card.title }}">
                                </div>
                            <# } #>
                            <# if ( card.card_link.url ) { #>
                                <a href="{{ card.card_link.url }}" class="card__item">
                            <# } #>
                            </a>
                            <div class="card__item__inner">
                                <div class="card_item__inner_content">
                                    <h3 class="card__title">{{ card.title }}</h3>
                                    <a href="{{ card.link_url.url }}" class="card__link">
                                        {{ card.link_text }}
                                    </a>
                                </div>
                                <# if ( card.icon.value ) { #>
                                    <div class="card_item__inner_icon">
                                        <# if ( card.icon.library === 'svg' ) { #>
                                            <img src="{{ card.icon.value.url }}" alt="{{ card.title }}">
                                        <# } else { #>
                                            <i class="{{ card.icon.value }}"></i>
                                        <# } #>
                                    </div>
                                <# } #>
                            </div>
                            <div class="card__item__background_color" style="background-color: {{ card.card_background }}"></div>
                        </div>
                    <# }); #>
                </div>
            </div>
        </div>
        <?php
	}

}