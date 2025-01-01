<?php
/**
 * Enqueue theme assets
 *
 * @package md-ageofunion
 */

declare( strict_types = 1 );

namespace MD_AGEOFUNION\Includes;

use MD_AGEOFUNION\Includes\Traits\Singleton;

/**
 * Class Assets
 */
class Assets {
	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	protected function setup_hooks(): void {

		/**
		 * Actions.
		 */
		add_action( 'init', array( $this, 'remove_wp_emoji' ) );
		add_action( 'init', array( $this, 'move_scripts_to_footer' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'register_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );
		/**
		 * The 'enqueue_block_assets' hook includes styles and scripts both in editor and frontend,
		 * except when is_admin() is used to include them conditionally
		 */
		add_action( 'enqueue_block_assets', array( $this, 'enqueue_editor_assets' ) );
		add_action( 'wp_footer', array( $this, 'enqueue_editor_assets' ) );
		add_action( 'upload_mimes', array( $this, 'add_file_types_to_uploads' ) ); //phpcs:ignore WordPressVIPMinimum.Hooks.RestrictedHooks.upload_mimes

		add_filter( 'script_loader_tag', array( $this, 'script_additional_attrs' ), 10, 2 );
		add_action( 'wp_print_footer_scripts', array( $this, 'lazy_load_scripts' ) );
		add_filter( 'should_load_separate_core_block_assets', '__return_true' );
		add_action( 'wp_enqueue_scripts', array( $this, 'load_view_js_in_footer' ), 999 );
	}

	/**
	 * Remove Emoji from the page.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function remove_wp_emoji(): void {

		remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
		remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
		remove_action( 'wp_print_styles', 'print_emoji_styles' );
		remove_action( 'admin_print_styles', 'print_emoji_styles' );
	}

	/**
	 * Move render blocking JS to the footer.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function move_scripts_to_footer(): void {
		// Remove default jQuery registration through WordPress.
		// wp_dequeue_script( 'jquery-core' );
		// wp_dequeue_script( 'jquery-migrate' );
		wp_dequeue_script( 'wp-embed' );
		// wp_deregister_script( 'jquery-core' );
		// wp_deregister_script( 'jquery-migrate' );
		wp_deregister_script( 'wp-embed' );

		wp_enqueue_script( 'jquery-core', '/wp-includes/js/jquery/jquery.min.js', array(), MD_AGEOFUNION_THEME_VERSION, true );
	}

	/**
	 * Load critical CSS.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function hook_critical_css(): void {

		$response = wp_remote_get( MD_AGEOFUNION_BUILD_URI . '/inline.css' );   // load template output in buffer.

		if ( ! is_wp_error( $response ) ) {
			$css = wp_remote_retrieve_body( $response );
			wp_register_style( 'md-ageofunion-inline-css', false, array(), true, true );
			wp_add_inline_style( 'md-ageofunion-inline-css', $css );
			wp_enqueue_style( 'md-ageofunion-inline-css' );
		}
	}

	/**
	 * Register and Enqueue styles.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_styles(): void {

		$this->hook_critical_css();

		// Register styles.
		wp_register_style( 'main-css', MD_AGEOFUNION_BUILD_URI . '/main.css', array(), filemtime( MD_AGEOFUNION_BUILD_PATH . '/main.css' ), 'all' );

		// Enqueue Styles.
		wp_enqueue_style( 'main-css' );

		// Enduque fontawesome 4.7.
		wp_enqueue_style( 'font-awesome-4.7', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' );

		// Fancybox CSS.
		wp_enqueue_style( 'fancybox', 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css', array(), false, 'all' );
	}

	/**
	 * Register and Enqueue Scripts.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_scripts(): void {

		// FancyBox JS.
		wp_enqueue_script( 'fancybox', 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js', array( 'jquery' ), false, false );
		
		// Register scripts.
		wp_register_script( 'main-js', MD_AGEOFUNION_BUILD_URI . '/main.js', array( 'jquery-core' ), filemtime( MD_AGEOFUNION_BUILD_PATH . '/main.js' ), true );

		// Enqueue Scripts.
		wp_enqueue_script( 'main-js' );

		wp_localize_script(
			'main-js',
			'siteConfig',
			array(
				'ajaxUrl'    => admin_url( 'admin-ajax.php' ),
				'ajax_nonce' => wp_create_nonce( 'loadmore_post_nonce' ),
			)
		);
	}

	/**
	 * Enqueue editor scripts and styles.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function enqueue_editor_assets(): void {

		// Editor CSS.
		if ( is_admin() ) {
			wp_enqueue_style(
				'md-ageofunion-editor-css',
				MD_AGEOFUNION_BUILD_URI . '/geditor.css',
				array(),
				filemtime( MD_AGEOFUNION_BUILD_PATH . '/geditor.css' ),
				'all'
			);
		}

		// Change block Priority to head.
		$blocks = \WP_Block_Type_Registry::get_instance()->get_all_registered();
		foreach ( $blocks as $block ) {
			if ( has_block( $block->name ) ) {
				wp_enqueue_style( $block->style );
			}
		}

		wp_enqueue_style( 'dashicons' );
		// Enduque fontawesome 4.7.
		wp_enqueue_style( 'font-awesome-4.7', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' );
	}

	/**
	 * Action Function to add SVG support in file uploads.
	 *
	 * @param array $file_types Supported file types.
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public function add_file_types_to_uploads( array $file_types ): array {
		if ( is_user_logged_in() && current_user_can( 'administrator' ) ) {
			$new_filetypes        = array();
			$new_filetypes['svg'] = 'image/svg+xml';
			$file_types           = array_merge( $file_types, $new_filetypes );
		}

		return $file_types;
	}

	/**
	 * Lazy load script code.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function lazy_load_scripts(): void {
		$timeout = '5';
		?>
		<script type="text/javascript" id="flying-scripts">const loadScriptsTimer = setTimeout(loadScripts,<?php echo esc_html( $timeout ); ?>* 1000
			)
			;const userInteractionEvents = ["mouseover", "keydown", "touchstart", "touchmove", "wheel"];
			userInteractionEvents.forEach(function (event) {
				window.addEventListener(event, triggerScriptLoader, {passive: !0})
			});

			function triggerScriptLoader() {
				loadScripts();
				clearTimeout(loadScriptsTimer);
				userInteractionEvents.forEach(function (event) {
					window.removeEventListener(event, triggerScriptLoader, {passive: !0})
				})
			}

			function loadScripts() {
				document.querySelectorAll("script[data-type='lazy']").forEach(function (elem) {
					elem.setAttribute("src", elem.getAttribute("data-src"))
				})
			}</script>
		<?php
	}


	/**
	 * Identify script and do the lazy load.
	 *
	 * @param string $tag Tags string.
	 * @param string $handle Handle name.
	 *
	 * @return string
	 * @since 1.0.0
	 */
	public function script_additional_attrs( string $tag, string $handle ): string {
		if ( 'grs-ad' === $handle ) {
			return str_replace( ' src', ' data-type="lazy" data-src', $tag );
		}

		return $tag;
	}

	/**
	 * Loads block's view.js scripts in the footer.
	 */
	public function load_view_js_in_footer() {
		// Get all enqueued scripts.
		$scripts = wp_scripts();

		// Loop through all enqueued scripts.
		foreach ( $scripts->queue as $handle ) {
			// Check if the script is a view.js script.
			if ( strpos( $handle, 'view-script' ) !== false ) {
				// Change the 'group' property to true.
				$scripts->add_data( $handle, 'group', 1 );
			}
		}
	}
}
