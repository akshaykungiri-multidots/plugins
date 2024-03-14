<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    MD_Addblock
 * @subpackage MD_Addblock/admin
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Addblock\Inc;

use MD_Addblock\Inc\Traits\Singleton;

/**
 * Main class file.
 */
class Admin {

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
		if ( defined( 'MD_ADDBLOCK_VERSION' ) ) {
			$this->version = MD_ADDBLOCK_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->setup_admin_hooks();
	}
	/**
	 * Function is used to define admin hooks.
	 *
	 * @since   1.0.0
	 */
	public function setup_admin_hooks() {
		add_action( 'admin_menu', array( $this, 'md_addblock_add_plugin_page' ) );
		add_action( 'admin_init', array( $this, 'md_addblock_page_init' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_styles' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );

		// AJAX action for syncing posts
		add_action( 'wp_ajax_md_addblock_sync_posts', array( $this, 'md_addblock_sync_posts_callback' ) );
	}


	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( 'md-addblock', MD_ADDBLOCK_URL . 'assets/build/admin.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( 'md-addblock', MD_ADDBLOCK_URL . 'assets/build/admin.js', array( 'jquery' ), $this->version, false );

		wp_localize_script(
			'md-addblock',
			'siteConfig',
			array(
				'ajaxUrl'    => admin_url( 'admin-ajax.php' ),
				'ajax_nonce' => wp_create_nonce( 'loadmore_post_nonce' ),
			)
		);
	}

	/**
	 * Function is used to create plugin page
	 */
	public function md_addblock_add_plugin_page() {
		add_menu_page(
			__( 'MD Addblock', 'md-addblock' ), // page_title
			__( 'MD Addblock', 'md-addblock' ), // menu_title
			'manage_options', // capability
			'md-addblock', // menu_slug
			array( $this, 'md_addblock_create_admin_page' ), // function
			'dashicons-admin-generic', // icon_url
			2 // position
		);
	}

	/**
	 * Function is used to create admin page
	 */
	public function md_addblock_create_admin_page() {
		$this->md_addblock_options = get_option( 'md_addblock_option_name' ); ?>

		<div class="wrap">
			<h2><?php esc_html_e( 'MD Addblock', 'md-addblock' ); ?></h2>
			<p></p>
			<?php settings_errors(); ?>

			<form method="post" action="options.php">
				<?php
					settings_fields( 'md_addblock_option_group' );
					do_settings_sections( 'md-addblock-admin' );
					submit_button();
				?>
			</form>
		</div>
		<?php
	}

	/**
	 * Function is used register settings.
	 */
	public function md_addblock_page_init() {
		register_setting(
			'md_addblock_option_group', // option_group
			'md_addblock_option_name', // option_name
			array( $this, 'md_addblock_sanitize' ) // sanitize_callback
		);

		add_settings_section(
			'md_addblock_setting_section', // id
			__( 'Settings', 'md-addblock' ), // title
			array( $this, 'md_addblock_section_info' ), // callback
			'md-addblock-admin' // page
		);

		// Add option fields
		add_settings_field(
			'post_type', // id
			__( 'Post Type', 'md-addblock' ), // title
			array( $this, 'post_type_callback' ), // callback
			'md-addblock-admin', // page
			'md_addblock_setting_section' // section
		);
	
		add_settings_field(
			'block_content', // id
			__( 'Block Content', 'md-addblock' ), // title
			array( $this, 'block_content_callback' ), // callback
			'md-addblock-admin', // page
			'md_addblock_setting_section' // section
		);
	
		add_settings_field(
			'search_content', // id
			__( 'Content to Search', 'md-addblock' ), // title
			array( $this, 'search_content_callback' ), // callback
			'md-addblock-admin', // page
			'md_addblock_setting_section' // section
		);

		// Add Sync button
		add_settings_field(
			'sync_button', // id
			__( 'Sync Posts', 'md-addblock' ), // title
			array( $this, 'sync_button_callback' ), // callback
			'md-addblock-admin', // page
			'md_addblock_setting_section' // section
		);
	}

	/**
	 * Settings field callback function for Sync button.
	 */
	public function sync_button_callback() {
		echo '<button id="sync-posts" class="button button-primary">' . __( 'Sync Posts', 'md-addblock' ) . '</button>';
	}

	/**
	 * Function is used to sanitise inputs.
	 */
	public function md_addblock_sanitize( $input ) {
		$sanitary_values = array();
		// Sanitize each input field
		$sanitary_values['post_type'] = isset( $input['post_type'] ) ? sanitize_text_field( $input['post_type'] ) : '';
		$sanitary_values['block_content'] = isset( $input['block_content'] ) ? wp_kses_post( $input['block_content'] ) : '';
		$sanitary_values['search_content'] = isset( $input['search_content'] ) ? wp_kses_post( $input['search_content'] ) : '';
	

		return $sanitary_values;
	}

	/**
	 * Used to show section info.
	 */
	public function md_addblock_section_info() {
		echo '<p>' . esc_html__( 'Customize options for adding content to posts.', 'md-addblock' ) . '</p>';
	}

	/**
	 * Settings field callback function for Post Type.
	 */
	public function post_type_callback() {
		$post_types = get_post_types( array( 'public' => true ), 'names' );
		unset( $post_types['attachment'] );

		$current_post_type = isset( $this->md_addblock_options['post_type'] ) ? esc_attr( $this->md_addblock_options['post_type'] ) : 'post';

		echo '<select id="md_post_type" name="md_addblock_option_name[post_type]">';
		foreach ( $post_types as $post_type ) {
			echo '<option value="' . esc_attr( $post_type ) . '" ' . selected( $current_post_type, $post_type, false ) . '>' . esc_html( ucfirst( $post_type ) ) . '</option>';
		}
		echo '</select>';
	}

	/**
	 * Settings field callback function for Block Content.
	 */
	public function block_content_callback() {
		$current_block_content = isset( $this->md_addblock_options['block_content'] ) ? esc_textarea( $this->md_addblock_options['block_content'] ) : '';

		echo '<textarea class="large-text" name="md_addblock_option_name[block_content]" rows="5" id="block_content">' . $current_block_content . '</textarea>';
	}

	/**
	 * Settings field callback function for Content to Search.
	 */
	public function search_content_callback() {
		printf(
			'<textarea class="large-text" name="md_addblock_option_name[search_content]" rows="5" id="search_content">%s</textarea>',
			isset( $this->md_addblock_options['search_content'] ) ? esc_textarea( $this->md_addblock_options['search_content'] ) : ''
		);
	}

	/**
	 * AJAX handler for syncing posts.
	 */
	public function md_addblock_sync_posts_callback() {

		$post_type = isset( $_POST['post_type'] ) ? sanitize_text_field( $_POST['post_type'] ) : 'post';
		$search_content = isset( $_POST['search_content'] ) ? stripslashes( $_POST['search_content'] ) : '';
		$block_content = isset( $_POST['block_content'] ) ? stripslashes( $_POST['block_content'] ) : '';
		$offset = isset( $_POST['offset'] ) ? intval( $_POST['offset'] ) : 0;
		$batch_size = isset( $_POST['batch_size'] ) ? intval( $_POST['batch_size'] ) : 20;

		$args = array(
			'post_type'      => $post_type,
			'posts_per_page' => $batch_size,
			'offset'         => $offset,
			// 'post__in'		 => array(959),
		);

		$query = new \WP_Query( $args );

		$response = array();

		if ( $query->have_posts() ) {
			$data = array();
			while ( $query->have_posts() ) {
				$query->the_post();
				// Get the post content
				$post_content = get_the_content();

				$search_position = strpos( $post_content, $search_content );
				
				// var_dump(strpos( $post_content, $search_content . $block_content ));
				// var_dump($search_content . $block_content);
				// var_dump($post_content);
				// exit();
				// Check if block content already exists after search content
				if ( strpos( $post_content, $search_content . $block_content ) === false ) {
					// If block content doesn't exist, add it after search content
					$search_position = strpos( $post_content, $search_content );
					if ( $search_position !== false ) {
						$post_content = substr_replace( $post_content, $block_content, $search_position + strlen( $search_content ), 0 );
						// Update post content
						$post_data = array(
							'ID'           => get_the_ID(),
							'post_content' => $post_content,
						);
						wp_update_post( $post_data );
		
						$data[] = array(
							'post_id' => get_the_ID(),
							'message' => __( 'Post synced successfully.', 'md-addblock' ),
						);
					}
				} else {
					$data[] = array(
						'post_id' => get_the_ID(),
						'message' => __( 'Search content not found.', 'md-addblock' ),
					);
				}
			}
			$response['success'] = true;
			$response['data'] = $data;
			wp_reset_postdata();
		} else {
			$response = array(
				'success' => false,
				'data'    => array(),
				'message' => __( 'No more posts to sync.', 'md-addblock' ),
			);
		}

		wp_send_json( $response );
	}
}
