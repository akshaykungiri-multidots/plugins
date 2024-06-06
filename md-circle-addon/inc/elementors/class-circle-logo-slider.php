<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Addon
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Addon\Inc\Elementors;


/**
 * Circle_Logo_Slider class
 * 
 * @since 1.0.0
 */
class Circle_Logo_Slider extends \Elementor\Widget_Base {

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
		return 'circle_logo_slider';
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
		return esc_html__( 'Circle Logo Slider', 'circle-addon' );
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
		return [ 'circle', 'logo', 'slider' ];
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

        $this->start_controls_section(
            'section_logo_slider',
            [
                'label' => esc_html__( 'Logo Slider', 'circle-addon' ),
            ]
        );

        $this->add_control(
            'logo_slider',
            [
                'label'       => esc_html__( 'Logo Slider', 'circle-addon' ),
                'type'        => \Elementor\Controls_Manager::GALLERY,
                'label_block' => true,
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
        <div class="circle-logo-slider">
			<marquee behavior="scroll" direction="left" scrollamount="5" >
				<div class="circle-logo-slider__inner">
					<?php foreach ( $settings['logo_slider'] as $image ) : ?>
						<div class="circle-logo-slider__item">
							<img src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo (isset($image['alt']) ? esc_attr($image['alt']) : ''); ?>">
						</div>
					<?php endforeach; ?>
				</div>
			</marquee>
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
        <div class="circle-logo-slider">
            <div class="circle-logo-slider__inner">
                <# _.each( settings.logo_slider, function( image ) { #>
                    <div class="circle-logo-slider__item">
                        <img src="{{ image.url }}" alt="{{ image.alt }}">
                    </div>
                <# } ); #>
            </div>
        </div>
        <?php
	}

}