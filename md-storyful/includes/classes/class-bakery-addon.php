<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes;

use MD_STORYFUL\Includes\Traits\Singleton;

/**
 * Bakery_ADDON class file.
 */
class Bakery_ADDON {

	use Singleton;

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		$this->setup_bakery_hooks();
	}

	/**
	 * Function is used to setup bakery hooks.
	 */
	public function setup_bakery_hooks() {
		new Addons\Storyful_Hero_Banner();
		new Addons\Storyful_Resources();
		new Addons\Storyful_CTA_Banner();
		new Addons\Storyful_Posts();
		new Addons\Storyful_Case_Studies();
		new Addons\Storyful_Client_Testimonials();
		new Addons\Storyful_Stat_Number();
		new Addons\Storyful_Video_Licensing();
		new Addons\Storyful_Video_Slider();
		new Addons\Storyful_Newswire();
		new Addons\Storyful_Hero_Banner_Video();
		new Addons\Storyful_Threecol_list();
		new Addons\Storyful_Hero_Banner2();
		new Addons\Storyful_Two_Column();
		new Addons\Storyful_Media_Text();
		new Addons\Storyful_Our_Story();
		new Addons\Storyful_Cover_Bg();
		new Addons\Storyful_Our_Mission();
		new Addons\Storyful_Divider();
		new Addons\Storyful_CTA_Section();
		new Addons\Storyful_Timeline();
		new Addons\Storyful_Leadership_Author_Box();

		// Register ajax hooks.
		add_action( 'wp_ajax_storyful_get_resources', array( $this, 'storyful_get_resources' ) );
		add_action( 'wp_ajax_nopriv_storyful_get_resources', array( $this, 'storyful_get_resources' ) );
		
	}

	/**
	 * Function is used to get resources.
	 */
	public function storyful_get_resources() {
		// Check if nonce is set.
		if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['nonce'] ) ), 'storyful_get_resources' ) ) {
			wp_send_json_error( array( 'message' => 'Invalid nonce' ) );
		}
		$atts = array();
		$post_type = isset( $_POST['post_type'] ) ? sanitize_text_field( wp_unslash( $_POST['post_type'] ) ) : 'post';
		if ( isset( $_POST['resources_atts'] ) && !empty( $_POST['resources_atts'] ) ) {
			$atts = json_decode( stripslashes( sanitize_text_field( wp_unslash( $_POST['resources_atts'] ) ) ), true );
		}

		if ( $post_type === 'post' ) {
			$post_cat = isset( $_POST['resources_cat'] ) ? sanitize_text_field( wp_unslash( $_POST['resources_cat'] ) ) : '';
			$filter_by_date = isset( $_POST['filter_by_date'] ) ? sanitize_text_field( wp_unslash( $_POST['filter_by_date'] ) ) : '';
			$page_number = isset( $_POST['page_number'] ) ? sanitize_text_field( wp_unslash( $_POST['page_number'] ) ) : 1;
			$search_val = isset( $_POST['search_val'] ) ? sanitize_text_field( wp_unslash( $_POST['search_val'] ) ) : '';
			require_once get_template_directory() . '/includes/addons/templates/storyful-posts-template.php';
		} else {
			$resource_type = isset( $_POST['resource_type'] ) ? sanitize_text_field( wp_unslash( $_POST['resource_type'] ) ) : '';
			$resources_cat = isset( $_POST['resources_cat'] ) ? sanitize_text_field( wp_unslash( $_POST['resources_cat'] ) ) : '';
			$filter_by_date = isset( $_POST['filter_by_date'] ) ? sanitize_text_field( wp_unslash( $_POST['filter_by_date'] ) ) : '';
			$page_number = isset( $_POST['page_number'] ) ? sanitize_text_field( wp_unslash( $_POST['page_number'] ) ) : 1;
			require_once get_template_directory() . '/includes/addons/templates/storyful-resources.php';
		}

		
		die();
	}
}
