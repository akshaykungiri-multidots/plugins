<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Migrate_Resources
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Migrate_Resources\Inc;

use MD_Migrate_Resources\Inc\Traits\Singleton;

/**
 * I18 class file.
 */
class I18 {

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
		$this->setup_local_hooks();
	}

	/**
	 * Function is used to setup local hooks.
	 */
	public function setup_local_hooks() {
		add_action( 'plugins_loaded', array( $this, 'set_locale' ) );
	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the MD_Migrate_Resources_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	public function set_locale() {

		$locale = apply_filters( 'plugin_locale', get_locale(), 'md-migrate-resources' );
		load_textdomain( 'md-migrate-resources', plugin_dir_path( dirname( __FILE__ ) ) . '/languages/' . $locale . '.mo' );
		load_plugin_textdomain(
			'md-migrate-resources',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);
	}

}
