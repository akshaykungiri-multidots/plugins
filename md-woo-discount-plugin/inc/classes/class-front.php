<?php

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    MD_Woo_Discount
 * @subpackage MD_Woo_Discount/public
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Woo_Discount\Inc;

use MD_Woo_Discount\Inc\Traits\Singleton;
use WC_Coupon;

/**
 * Frontend main class.
 */
class Front
{


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
	public function __construct()
	{
		if (defined('MD_WOO_DISCOUNT_VERSION')) {
			$this->version = MD_WOO_DISCOUNT_VERSION;
		} else {
			$this->version = '1.1.0';
		}
		$this->setup_front_hooks();
	}

	/**
	 * All public facing hook will be placed under this function.
	 */
	public function setup_front_hooks()
	{
		add_action('wp_enqueue_scripts', array($this, 'enqueue_styles'));
		add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
		add_action('woocommerce_add_cart_item', array($this, 'md_woocommerce_add_cart_item_callback'), 10, 1);
		add_action('woocommerce_before_calculate_totals', array($this, 'md_woocommerce_before_calculate_totals'));
		add_action("woocommerce_before_checkout_form", array($this, "md_woocommerce_display_cart_notices"), 11);

		add_action('enqueue_block_assets', array($this, 'enqueue_editor_assets'));
		add_filter('script_loader_tag', array($this, 'script_additional_attrs'), 10, 2);
		add_filter('should_load_separate_core_block_assets', '__return_true');
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles()
	{
		wp_enqueue_style('md-woo-discount-front', MD_WOO_DISCOUNT_URL . 'assets/build/main.css', array(), $this->version, 'all');
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts()
	{
		wp_enqueue_script('md-woo-discount', MD_WOO_DISCOUNT_URL . 'assets/build/main.js', array('jquery'), $this->version, false);

		wp_localize_script(
			'md-woo-discount',
			'siteConfig',
			array(
				'ajaxUrl'    => admin_url('admin-ajax.php'),
				'ajax_nonce' => wp_create_nonce('loadmore_post_nonce'),
			)
		);
	}

	/**
	 * Enqueue editor scripts and styles.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function enqueue_editor_assets()
	{
		// Change block Priority to head.
		$blocks = \WP_Block_Type_Registry::get_instance()->get_all_registered();
		foreach ($blocks as $block) {
			if (has_block($block->name)) {
				wp_enqueue_style($block->style);
			}
		}
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
	public function script_additional_attrs($tag, $handle)
	{
		if ('grs-ad' === $handle) {
			return str_replace(' src', ' data-type="lazy" data-src', $tag);
		}

		return $tag;
	}

	/**
	 * Automatically create a coupon with a 5% discount for first-time orders.
	 *
	 * @param string $order_id.
	 *
	 * @return string
	 * @since 1.0.0
	 */
	public function md_woocommerce_add_cart_item_callback($cart_item_data)
	{
		$user_id = get_current_user_id();
		$flag = 0;
		// Check if user is logged in
		if ($user_id) {
			$args = array(
				'customer_id' => $user_id,
				'limit' => 2, // Limit to 1 order
			);

			$orders = wc_get_orders($args);

			// Apply discount for first-time logged-in users
			if (count($orders) === 0 || count($orders) === 1 && ($orders[0]->get_status() === 'draft' || $orders[0]->get_status() === 'checkout-draft')) {
				$flag = 1;
			}
		} else {
			$flag = 1;
		}
		if ($flag) {
			$coupon_code = 'FIRSTORDER' . uniqid(); // Generate unique coupon code
			$coupon = new WC_Coupon($coupon_code);

			// Create coupon if it doesn't exist
			if (!$coupon->get_id()) {
				$coupon = new WC_Coupon();
				$coupon->set_code($coupon_code);
				$coupon->set_discount_type('percent');
				$coupon->set_amount(5); // Set 5% discount
				$coupon->set_usage_limit( 1 ); // Limit to one-time use
				$coupon->set_individual_use( true ); // Individual use only
				$coupon->set_date_created(gmdate('Y-m-d')); // Set creation date
				$coupon->save();
			}

			WC()->cart->add_discount($coupon_code);
		}
		return $cart_item_data;
	}

	public function md_woocommerce_before_calculate_totals()
	{
		if (is_user_logged_in()) {
			$user_id = get_current_user_id();
			$coupon_code = 'FIRSTORDER' . uniqid(); // Generate unique coupon code

			$args = array(
				'customer_id' => $user_id,
				'limit' => 2, // Limit to 1 order
			);
			$orders = wc_get_orders($args);

			// Apply discount if user has 0 or 1 draft order
			if (count($orders) === 0 || count($orders) === 1 && ($orders[0]->get_status() === 'draft' || $orders[0]->get_status() === 'checkout-draft')) {
				// Ensure coupon exists beforehand (create it manually if needed)
				if (!WC()->cart->has_discount($coupon_code)) {
					WC()->cart->add_discount($coupon_code);
				}
			} else {
				// Remove discount and display message for logged-in users who aren't eligible
				$applied_coupons = WC()->cart->get_applied_coupons();
				foreach ($applied_coupons as $c_value) {
					if (strpos(strtoupper($c_value), 'FIRSTORDER') !== false) {
						WC()->cart->remove_coupon($c_value);
						wc_add_notice('(FIRSTORDER) discount is only applicable for first-time orders.', 'notice');
					}
				}
			}
		}
	}

	public function md_woocommerce_display_cart_notices()
	{
		wc_print_notices();
	}
}
