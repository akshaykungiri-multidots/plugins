<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Addon
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Addon\Inc\Elementors;


/**
 * Circle_FAQ_Widget class
 * 
 * @since 1.0.0
 */
class Circle_FAQ_Widget extends \Elementor\Widget_Base {

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
		return 'circle_faq';
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
		return esc_html__( 'FAQ Widget', 'circle-addon' );
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
		return 'eicon-info-circle';
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
		return [ 'circle', 'faq', 'widget' ];
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

        // Create Heading Section including sub title and title.

        $this->start_controls_section(
            'section_heading',
            [
                'label' => esc_html__( 'Heading', 'circle-addon' ),
            ]
        );

        $this->add_control(
            'title',
            [
                'label' => esc_html__( 'Title', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'FAQ', 'circle-addon' ),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'sub_title',
            [
                'label' => esc_html__( 'Sub Title', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Frequently Asked Questions', 'circle-addon' ),
                'label_block' => true,
            ]
        );

        $this->end_controls_section();

        // Create FAQ Section including faq items as repeater fields like title, content and image.

        $this->start_controls_section(
            'section_faq',
            [
                'label' => esc_html__( 'FAQ', 'circle-addon' ),
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'title',
            [
                'label' => esc_html__( 'Title', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'FAQ Title', 'circle-addon' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'content',
            [
                'label' => esc_html__( 'Content', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::WYSIWYG,
                'default' => esc_html__( 'FAQ Content', 'circle-addon' ),
                'show_label' => false,
            ]
        );

        $repeater->add_control(
            'image',
            [
                'label' => esc_html__( 'Image', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'show_label' => false,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->add_control(
            'faqs',
            [
                'label' => esc_html__( 'FAQs', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'title' => esc_html__( 'FAQ Title #1', 'circle-addon' ),
                        'content' => esc_html__( 'FAQ Content #1', 'circle-addon' ),
                    ],
                    [
                        'title' => esc_html__( 'FAQ Title #2', 'circle-addon' ),
                        'content' => esc_html__( 'FAQ Content #2', 'circle-addon' ),
                    ],
                ],
                'title_field' => '{{{ title }}}',
            ]
        );

        $this->end_controls_section();

        // Heading style section.

        $this->start_controls_section(
            'section_heading_style',
            [
                'label' => esc_html__( 'Heading', 'circle-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'heading_typography',
                'label' => esc_html__( 'Title Typography', 'circle-addon' ),
                'selector' => '{{WRAPPER}} .circle-faq-heading',
            ]
        );

        $this->add_control(
            'heading_color',
            [
                'label' => esc_html__( 'Title Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-faq-heading' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'sub_heading_typography',
                'label' => esc_html__( 'Sub Title Typography', 'circle-addon' ),
                'selector' => '{{WRAPPER}} .circle-faq-sub-heading',
            ]
        );

        $this->add_control(
            'sub_heading_color',
            [
                'label' => esc_html__( 'Sub Title Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-faq-sub-heading' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->end_controls_section();

        // FAQ style section.

        $this->start_controls_section(
            'section_faq_style',
            [
                'label' => esc_html__( 'FAQ', 'circle-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'faq_title_typography',
                'label' => esc_html__( 'Title Typography', 'circle-addon' ),
                'selector' => '{{WRAPPER}} .circle-faq-title',
            ]
        );

        $this->add_control(
            'faq_title_color',
            [
                'label' => esc_html__( 'Title Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-faq-title' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'faq_content_typography',
                'label' => esc_html__( 'Content Typography', 'circle-addon' ),
                'selector' => '{{WRAPPER}} .circle-faq-content',
            ]
        );

        $this->add_control(
            'faq_content_color',
            [
                'label' => esc_html__( 'Content Color', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .circle-faq-content' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Image Width and Height.

        $this->add_responsive_control(
            'faq_image_width',
            [
                'label' => esc_html__( 'Image Width', 'circle-addon' ),
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
                    '{{WRAPPER}} .circle-faq-item-image img' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'faq_image_height',
            [
                'label' => esc_html__( 'Image Height', 'circle-addon' ),
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
                    '{{WRAPPER}} .circle-faq-item-image img' => 'height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        // Image Border Radius.

        $this->add_responsive_control(
            'faq_image_border_radius',
            [
                'label' => esc_html__( 'Image Border Radius', 'circle-addon' ),
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
                    '{{WRAPPER}} .circle-faq-item-image img' => 'border-radius: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        // Image Position Left or Right.

        $this->add_control(
            'faq_image_position',
            [
                'label' => esc_html__( 'Image Position', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'left',
                'options' => [
                    'left' => esc_html__( 'Left', 'circle-addon' ),
                    'right' => esc_html__( 'Right', 'circle-addon' ),
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

        // Get Image Position.
        $faq_image_position = $settings['faq_image_position'];
        $flex_direction = ( $faq_image_position === 'left' ) ? 'row' : 'row-reverse';
        ?>
        <div class="circle-faq">
            <div class="circle-faq-heading-div">
                <p class="circle-faq-sub-heading"><?php echo esc_html( $settings['sub_title'] ); ?></p>
                <h2 class="circle-faq-heading"><?php echo esc_html( $settings['title'] ); ?></h2>
            </div>
            <div class="circle-faq-content-div" style="flex-direction: <?php echo esc_attr( $flex_direction ); ?>">
                <div class="circle-faq-items-left">
                    <?php
                    if ( $settings['faqs'] ) {
                        $i = 0;
                        foreach ( $settings['faqs'] as $faq ) {
                            ?>
                            <div class="circle-faq-item">
                                <div class="circle-faq-title">
                                    <span><?php echo esc_html( $faq['title'] ); ?></span>
                                    <?php if ( $i === 0 ) { ?>
                                        <i class="fas fa-minus"></i>
                                    <?php } else { ?>
                                        <i class="fas fa-plus"></i>
                                    <?php } ?>
                                </div>
                                <div class="circle-faq-content">
                                    <?php echo wp_kses_post( $faq['content'] ); ?>
                                </div>
                                <?php
                                if ( ! empty( $faq['image']['url'] ) ) {
                                    ?>
                                    <div class="circle-faq-image" data-faq-image="<?php echo esc_url( $faq['image']['url'] ); ?>"></div>
                                    <?php
                                }
                                ?>
                            </div>
                            <?php
                            $i++;
                        }
                    }
                    ?>
                </div>
                <div class="circle-faq-items-right">
                    <?php
                    if ( isset ( $settings['faqs'] )  && !empty( $settings['faqs'] ) ) {
                    ?>
                    <div class="circle-faq-item-image">
                        <img src="<?php echo esc_url( $settings['faqs'][0]['image']['url'] ); ?>" alt="FAQ Image">
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
	 * Render faq widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function content_template() {
        
        ?>
        <#
        var flex_direction = ( settings.faq_image_position === 'left' ) ? 'row' : 'row-reverse';
        #>
        <div class="circle-faq">
            <div class="circle-faq-heading-div">
                <p class="circle-faq-sub-heading">{{{ settings.sub_title }}}</p>
                <h2 class="circle-faq-heading">{{{ settings.title }}}</h2>
            </div>
            <div class="circle-faq-content-div" style="flex-direction: {{ flex_direction }}">
                <div class="circle-faq-items-left">
                    <# if ( settings.faqs ) { #>
                        <# _.each( settings.faqs, function( item, index ) { #>
                            <div class="circle-faq-item">
                                <div class="circle-faq-title">
                                    <span>{{{ item.title }}}</span>
                                    <# if ( index === 0 ) { #>
                                        <i class="fas fa-minus"></i>
                                    <# } else { #>
                                        <i class="fas fa-plus"></i>
                                    <# } #>
                                </div>
                                <div class="circle-faq-content">
                                    {{{ item.content }}}
                                </div>
                                <# if ( item.image.url ) { #>
                                    <div class="circle-faq-image" data-faq-image="{{{ item.image.url }}}"></div>
                                <# } #>
                            </div>
                        <# }); #>
                    <# } #>
                </div>
                <div class="circle-faq-items-right">
                    <# if ( settings.faqs && settings.faqs[0].image.url ) { #>
                        <div class="circle-faq-item-image">
                            <img src="{{ settings.faqs[0].image.url }}" alt="FAQ Image">
                        </div>
                    <# } #>
                </div>
            </div>
        </div>
        <?php
	}

}