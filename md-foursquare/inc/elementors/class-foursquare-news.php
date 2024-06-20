<?php
/**
 * Elementor Widgets.
 *
 * @package    MD_Foursquare
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Foursquare\Inc\Elementors;


/**
 * Foursquare_News class
 * 
 * @since 1.0.0
 */
class Foursquare_News extends \Elementor\Widget_Base {

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
		return 'foursquare-news';
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
		return esc_html__( 'Foursquare News', 'md-foursquare' );
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
		return [ 'foursquare', 'news', 'slider' ];
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

		// News as Repeater including title, content, link text and link URL.
		
		$repeaters = new \Elementor\Repeater();

		$repeaters->add_control(
			'news_title',
			[
				'label'       => esc_html__( 'Title', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Title', 'md-foursquare' ),
				'default'     => esc_html__( 'Title', 'md-foursquare' ),
			],
		);

		$repeaters->add_control(
			'news_content',
			[
				'label'       => esc_html__( 'Content', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::TEXTAREA,
				'placeholder' => esc_html__( 'Content', 'md-foursquare' ),
				'default'     => esc_html__( 'Content', 'md-foursquare' ),
			],
		);

		$repeaters->add_control(
			'news_link_text',
			[
				'label'       => esc_html__( 'Link Text', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Link Text', 'md-foursquare' ),
				'default'     => esc_html__( 'Link Text', 'md-foursquare' ),
			],
		);

		$repeaters->add_control(
			'news_link_url',
			[
				'label'       => esc_html__( 'Link URL', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::URL,
				'placeholder' => esc_html__( 'https://your-link.com', 'md-foursquare' ),
				'default'     => [
					'url' => 'https://your-link.com',
				],
			],
		);

		$this->add_control(
			'news',
			[
				'label'       => esc_html__( 'News', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::REPEATER,
				'fields'      => $repeaters->get_controls(),
				'title_field' => '{{{ news_title }}}',
			],
		);
		
		$this->end_controls_section();

		// Slider Settings Section
		
        $this->start_controls_section(
            'section_slider_settings',
            [
                'label' => esc_html__( 'Slider Settings', 'md-fiery-addon' ),
            ]
        );

        $this->add_control(
            'slides_to_show',
            [
                'label' => esc_html__( 'Slides to Show', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 3,
            ]
        );

        $this->add_control(
            'slides_to_scroll',
            [
                'label' => esc_html__( 'Slides to Scroll', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 1,
            ]
        );

        $this->add_control(
            'autoplay',
            [
                'label' => esc_html__( 'Autoplay', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
                'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $this->add_control(
            'autoplay_speed',
            [
                'label' => esc_html__( 'Autoplay Speed', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 5000,
                'condition' => [
                    'autoplay' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'infinite',
            [
                'label' => esc_html__( 'Infinite Loop', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
                'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'arrows',
            [
                'label' => esc_html__( 'Arrows', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
                'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $this->add_control(
            'dots',
            [
                'label' => esc_html__( 'Dots', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
                'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'pause_on_hover',
            [
                'label' => esc_html__( 'Pause on Hover', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
                'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'adaptive_height',
            [
                'label' => esc_html__( 'Adaptive Height', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
                'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

		// Center Mode
		$this->add_control(
			'center_mode',
			[
				'label' => esc_html__( 'Center Mode', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
				'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
				'return_value' => 'yes',
				'default' => 'yes',
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

		// Heading Typography
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'heading_typography',
				'label'    => esc_html__( 'Heading Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-news-heading',
			]
		);

		// Heading Color
		$this->add_control(
			'heading_color',
			[
				'label'     => esc_html__( 'Heading Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-news-heading' => 'color: {{VALUE}}',
				],
			]
		);

		// News Title Typography
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'news_title_typography',
				'label'    => esc_html__( 'News Title Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-news-title',
			]
		);

		// News Title Color
		$this->add_control(
			'news_title_color',
			[
				'label'     => esc_html__( 'News Title Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-news-title' => 'color: {{VALUE}}',
				],
			]
		);

		// News Content Typography
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'news_content_typography',
				'label'    => esc_html__( 'News Content Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-news-content',
			]
		);

		// News Content Color
		$this->add_control(
			'news_content_color',
			[
				'label'     => esc_html__( 'News Content Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-news-content' => 'color: {{VALUE}}',
				],
			]
		);

		// News Link Typography
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'news_link_typography',
				'label'    => esc_html__( 'News Link Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-news-link',
			]
		);

		// News Link Color
		$this->add_control(
			'news_link_color',
			[
				'label'     => esc_html__( 'News Link Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-news-link' => 'color: {{VALUE}}',
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

		<div class="foursquare-news">
			<div class="foursquare-news-heading">
				<div class="foursquare-news-heading__inner">
					<?php echo esc_html( $settings['heading'] ); ?>
				</div>
			</div>
			<div class="foursquare-news-slider foursquare_slick_slider" data-slide-to-show="<?php echo esc_attr( $settings['slides_to_show'] ); ?>" data-slide-to-scroll="<?php echo esc_attr( $settings['slides_to_scroll'] ); ?>" data-autoplay="<?php echo esc_attr( $settings['autoplay'] ); ?>" data-autoplay-speed="<?php echo esc_attr( $settings['autoplay_speed'] ); ?>" data-infinite="<?php echo esc_attr( $settings['infinite'] ); ?>" data-arrows="<?php echo esc_attr( $settings['arrows'] ); ?>" data-dots="<?php echo esc_attr( $settings['dots'] ); ?>" data-pause-on-hover="<?php echo esc_attr( $settings['pause_on_hover'] ); ?>" data-adaptive-height="<?php echo esc_attr( $settings['adaptive_height'] ); ?>" data-center-mode="<?php echo esc_attr( $settings['center_mode'] ); ?>">
				<?php foreach ( $settings['news'] as $news ) : ?>
					<div class="foursquare-news-slide">
						<div class="foursquare-news-slide__inner">
							<div class="foursquare-news-title"><?php echo esc_html( $news['news_title'] ); ?></div>
							<div class="foursquare-news-content"><?php echo esc_html( $news['news_content'] ); ?></div>
							<div class="foursquare-news-link">
								<a href="<?php echo esc_url( $news['news_link_url']['url'] ); ?>"> <?php echo esc_html( $news['news_link_text'] ); ?> </a>
							</div>
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

		<div class="foursquare-news">
			<div class="foursquare-news-heading">
				<div class="foursquare-news-heading__inner">{{{ settings.heading }}}</div>
			</div>
			<div class="foursquare-news-slider foursquare_slick_slider" data-slide-to-show="{{{ settings.slides_to_show }}}" data-slide-to-scroll="{{{ settings.slides_to_scroll }}}" data-autoplay="{{{ settings.autoplay }}}" data-autoplay-speed="{{{ settings.autoplay_speed }}}" data-infinite="{{{ settings.infinite }}}" data-arrows="{{{ settings.arrows }}}" data-dots="{{{ settings.dots }}}" data-pause-on-hover="{{{ settings.pause_on_hover }}}" data-adaptive-height="{{{ settings.adaptive_height }}}" data-center-mode="{{{ settings.center_mode }}}">
				<# _.each( settings.news, function( news ) { #>
					<div class="foursquare-news-slide">
						<div class="foursquare-news-slide__inner">
							<div class="foursquare-news-title">{{{ news.news_title }}}</div>
							<div class="foursquare-news-content">{{{ news.news_content }}}</div>
							<div class="foursquare-news-link">
								<a href="{{{ news.news_link_url.url }}}"> {{{ news.news_link_text }}} </a>
							</div>
						</div>
					</div>
				<# }); #>
			</div>
		</div>

        <?php
	}

}