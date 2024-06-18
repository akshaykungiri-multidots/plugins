<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Plus
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Plus\Inc\Elementors;


/**
 * FAQ_Plus class
 * 
 * @since 1.0.0
 */
class FAQ_Plus extends \Elementor\Widget_Base {

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
		return 'faq-plus';
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
		return esc_html__( 'FAQ Plus', 'md-circle-plus' );
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
		return [ 'faq', 'question', 'plus' ];
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

		// Start content tab
		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'md-circle-plus' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		// Heading
		$this->add_control(
			'heading',
			[
				'label'       => esc_html__( 'Heading', 'md-circle-plus' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter heading', 'md-circle-plus' ),
				'default'     => esc_html__( 'FAQs', 'md-circle-plus' ),
			]
		);

		// FAQs as repeater
		$faqs_repeater = new \Elementor\Repeater();

		// Question
		$faqs_repeater->add_control(
			'question',
			[
				'label'       => esc_html__( 'Question', 'md-circle-plus' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter question', 'md-circle-plus' ),
				'default'     => esc_html__( 'What is the return policy?', 'md-circle-plus' ),
			]
		);

		// Answer
		$faqs_repeater->add_control(
			'answer',
			[
				'label'       => esc_html__( 'Answer', 'md-circle-plus' ),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__( 'Enter answer', 'md-circle-plus' ),
				'default'     => esc_html__( 'We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.', 'md-circle-plus' ),
			]
		);

		// Add FAQs repeater
		$this->add_control(
			'faqs',
			[
				'label'  => esc_html__( 'FAQs', 'md-circle-plus' ),
				'type'   => \Elementor\Controls_Manager::REPEATER,
				'fields' => $faqs_repeater->get_controls(),
				'title_field' => '{{{ question }}}',
			]
		);

		// End content tab
		$this->end_controls_section();

		// Start style tab
		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'md-circle-plus' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Heading Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'heading_typography',
				'label'    => esc_html__( 'Heading Typography', 'md-circle-plus' ),
				'selector' => '{{WRAPPER}} .faq-heading',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label'     => esc_html__( 'Heading Color', 'md-circle-plus' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .faq-heading' => 'color: {{VALUE}}',
				],
			]
		);

		// Question Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'question_typography',
				'label'    => esc_html__( 'Question Typography', 'md-circle-plus' ),
				'selector' => '{{WRAPPER}} .faq-question',
			]
		);

		$this->add_control(
			'question_color',
			[
				'label'     => esc_html__( 'Question Color', 'md-circle-plus' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .faq-question' => 'color: {{VALUE}}',
				],
			]
		);

		// Answer Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'answer_typography',
				'label'    => esc_html__( 'Answer Typography', 'md-circle-plus' ),
				'selector' => '{{WRAPPER}} .faq-answer',
			]
		);

		$this->add_control(
			'answer_color',
			[
				'label'     => esc_html__( 'Answer Color', 'md-circle-plus' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .faq-answer' => 'color: {{VALUE}}',
				],
			]
		);

		// End style tab
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

		<div class="faq-plus">
			<h2 class="faq-heading"><?php echo esc_html( $settings['heading'] ); ?></h2>
			<?php if ( $settings['faqs'] ) : ?>
				<div class="faq-accordion">
					<?php foreach ( $settings['faqs'] as $faq ) : ?>
						<div class="faq-item">
							<div class="faq-question">
								<span class="faq-question-text"><?php echo esc_html( $faq['question'] ); ?></span>
								<i class="fas fa-plus"></i>
							</div>
							<div class="faq-answer"><?php echo wp_kses_post( $faq['answer'] ); ?></div>
						</div>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
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

		<div class="faq-plus">
			<h2 class="faq-heading">{{{ settings.heading }}}</h2>
			<# if ( settings.faqs ) { #>
				<div class="faq-accordion">
					<# _.each( settings.faqs, function( faq ) { #>
						<div class="faq-item">
							<div class="faq-question">
								<span class="faq-question-text">{{{ faq.question }}}</span>
								<span class="faq-icon">+</span>
							</div>
							<div class="faq-answer">{{{ faq.answer }}}</div>
						</div>
					<# }); #>
				</div>
			<# } #>
		</div>

        <?php
	}

}