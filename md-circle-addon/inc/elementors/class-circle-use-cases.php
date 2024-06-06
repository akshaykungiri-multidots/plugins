<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Addon
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Addon\Inc\Elementors;


/**
 * Circle_Use_Cases class
 * 
 * @since 1.0.0
 */
class Circle_Use_Cases extends \Elementor\Widget_Base {

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
		return 'circle_use_cases';
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
		return esc_html__( 'Circle Use Cases', 'circle-addon' );
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
		return 'eicon-slider-album';
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
		return [ 'circle', 'use', 'cases' ];
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
        // Heading Section
        $this->start_controls_section(
            'heading_section',
            [
                'label' => esc_html__( 'Heading', 'circle-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'heading',
            [
                'label' => esc_html__( 'Heading', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Use Cases', 'circle-addon' ),
                'label_block' => true,
            ]
        );

        $this->end_controls_section();

        // Use Cases Section as repeater include image, title, description
        $this->start_controls_section(
            'use_cases_section',
            [
                'label' => esc_html__( 'Use Cases', 'circle-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'image',
            [
                'label' => esc_html__( 'Image', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'title',
            [
                'label' => esc_html__( 'Title', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Title', 'circle-addon' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'description',
            [
                'label' => esc_html__( 'Description', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__( 'Description', 'circle-addon' ),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'use_cases',
            [
                'label' => esc_html__( 'Use Cases', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'image' => '',
                        'title' => esc_html__( 'Title', 'circle-addon' ),
                        'description' => esc_html__( 'Description', 'circle-addon' ),
                    ],
                ],
                'title_field' => '{{{ title }}}',
            ]
        );

        $this->end_controls_section();

        // Heading Style Section

        $this->start_controls_section(
            'heading_style_section',
            [
                'label' => esc_html__( 'Heading', 'circle-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'heading_typography',
                'label' => esc_html__( 'Heading Typography', 'circle-addon' ),
                'selector' => '{{WRAPPER}} .circle-use-cases .heading',
            ]
        );

        $this->add_control(
            'heading_color',
            [
                'label' => esc_html__( 'Heading Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-use-cases .heading' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->end_controls_section();

        // Use Cases Style Section

        $this->start_controls_section(
            'use_cases_style_section',
            [
                'label' => esc_html__( 'Use Cases', 'circle-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        // Use Case per row.

        $this->add_responsive_control(
            'use_cases_per_row',
            [
                'label' => esc_html__( 'Use Cases Per Row', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => '3',
                'options' => [
                    '1' => esc_html__( '1', 'circle-addon' ),
                    '2' => esc_html__( '2', 'circle-addon' ),
                    '3' => esc_html__( '3', 'circle-addon' ),
                    '4' => esc_html__( '4', 'circle-addon' ),
                    '5' => esc_html__( '5', 'circle-addon' ),
                    '6' => esc_html__( '6', 'circle-addon' ),
                ],
                'selectors' => [
                    '{{WRAPPER}} .circle-use-cases .use-cases' => 'grid-template-columns: repeat({{VALUE}}, 1fr)',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'use_cases_title_typography',
                'label' => esc_html__( 'Use Case Title Typography', 'circle-addon' ),
                'selector' => '{{WRAPPER}} .circle-use-cases .use-cases .title',
            ]
        );

        $this->add_control(
            'use_cases_title_color',
            [
                'label' => esc_html__( 'Use Case Title Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-use-cases .use-cases .title' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'use_cases_description_typography',
                'label' => esc_html__( 'Use Case Description Typography', 'circle-addon' ),
                'selector' => '{{WRAPPER}} .circle-use-cases .use-cases .description',
            ]
        );

        $this->add_control(
            'use_cases_description_color',
            [
                'label' => esc_html__( 'Use Case Description Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-use-cases .use-cases .description' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Use Cases image position, size, repeat, attachment

        $this->add_control(
            'use_cases_image_size',
            [
                'label' => esc_html__( 'Use Case Image Size', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'cover',
                'options' => [
                    'auto' => esc_html__( 'Auto', 'circle-addon' ),
                    'cover' => esc_html__( 'Cover', 'circle-addon' ),
                    'contain' => esc_html__( 'Contain', 'circle-addon' ),
                ],
                'selectors' => [
                    '{{WRAPPER}} .circle-use-cases .use-cases .image' => 'background-size: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'use_cases_image_position',
            [
                'label' => esc_html__( 'Use Case Image Position', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'center center',
                'options' => [
                    'center center' => esc_html__( 'Center Center', 'circle-addon' ),
                    'center top' => esc_html__( 'Center Top', 'circle-addon' ),
                    'center bottom' => esc_html__( 'Center Bottom', 'circle-addon' ),
                    'left top' => esc_html__( 'Left Top', 'circle-addon' ),
                    'left center' => esc_html__( 'Left Center', 'circle-addon' ),
                    'left bottom' => esc_html__( 'Left Bottom', 'circle-addon' ),
                    'right top' => esc_html__( 'Right Top', 'circle-addon' ),
                    'right center' => esc_html__( 'Right Center', 'circle-addon' ),
                    'right bottom' => esc_html__( 'Right Bottom', 'circle-addon' ),
                ],
                'selectors' => [
                    '{{WRAPPER}} .circle-use-cases .use-cases .image' => 'background-position: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'use_cases_image_repeat',
            [
                'label' => esc_html__( 'Use Case Image Repeat', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'no-repeat',
                'options' => [
                    'no-repeat' => esc_html__( 'No Repeat', 'circle-addon' ),
                    'repeat' => esc_html__( 'Repeat', 'circle-addon' ),
                    'repeat-x' => esc_html__( 'Repeat Horizontally', 'circle-addon' ),
                    'repeat-y' => esc_html__( 'Repeat Vertically', 'circle-addon' ),
                ],
                'selectors' => [
                    '{{WRAPPER}} .circle-use-cases .use-cases .image' => 'background-repeat: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'use_cases_image_attachment',
            [
                'label' => esc_html__( 'Use Case Image Attachment', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'scroll',
                'options' => [
                    'scroll' => esc_html__( 'Scroll', 'circle-addon' ),
                    'fixed' => esc_html__( 'Fixed', 'circle-addon' ),
                ],
                'selectors' => [
                    '{{WRAPPER}} .circle-use-cases .use-cases .image' => 'background-attachment: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'use_cases_bg_color',
            [
                'label' => esc_html__( 'Background Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-use-cases .use-cases .use-case-back' => 'background-color: {{VALUE}}',
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

        <div class="circle-use-cases">
            <div class="heading"><?php echo esc_html( $settings['heading'] ); ?></div>
            <div class="use-cases">
                <?php
                foreach ( $settings['use_cases'] as $use_case ) {
                    ?>
                    <div class="use-case">
                        <div class="use-case-front">
                            <div class="image" style="background-image: url(<?php echo esc_url( $use_case['image']['url'] ); ?>)"></div>
                            <div class="title"><?php echo esc_html( $use_case['title'] ); ?></div>
                        </div>
                        <div class="use-case-back">
                            <div class="title"><?php echo esc_html( $use_case['title'] ); ?></div>
                            <div class="description"><?php echo esc_html( $use_case['description'] ); ?></div>
                        </div>
                    </div>
                    <?php
                }
                ?>
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

        <div class="circle-use-cases">
            <div class="heading">{{{ settings.heading }}}</div>
            <div class="use-cases">
                <# _.each( settings.use_cases, function( use_case ) { #>
                    <div class="use-case">
                        <div class="use-case-front">
                            <div class="image" style="background-image: url({{ use_case.image.url }})"></div>
                            <div class="title">{{ use_case.title }}</div>
                        </div>
                        <div class="use-case-back">
                            <div class="title">{{ use_case.title }}</div>
                            <div class="description">{{ use_case.description }}</div>
                        </div>
                    </div>
                <# } ); #>
            </div>
        </div>

        <?php
	}

}