<?php
/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    MD_Promotion_Manager
 * @subpackage MD_Promotion_Manager/public
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Promotion_Manager\Inc;

use MD_Promotion_Manager\Inc\Traits\Singleton;

/**
 * Frontend main class.
 */
class Front {


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
		if ( defined( 'MD_PROMOTION_MANAGER_VERSION' ) ) {
			$this->version = MD_PROMOTION_MANAGER_VERSION;
		} else {
			$this->version = '1.1.0';
		}
		$this->setup_front_hooks();
	}

	/**
	 * All public facing hook will be placed under this function.
	 */
	public function setup_front_hooks() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );

		add_action( 'enqueue_block_assets', array( $this, 'enqueue_editor_assets' ) );
		add_filter( 'script_loader_tag', array( $this, 'script_additional_attrs' ), 10, 2 );
		add_filter( 'should_load_separate_core_block_assets', '__return_true' );

		// create a badge before product image.
		add_action( 'woocommerce_before_shop_loop_item_title', array( $this, 'md_add_badge' ), 10 );
		// display message in single product page.
		add_action( 'woocommerce_single_product_summary', array( $this, 'md_display_promotion_message' ), 15 );
		// Add discount in calculate total if coupon code applied and promotion_type is coupon_code.
		add_action( 'woocommerce_cart_calculate_fees', array( $this, 'md_add_discount' ), 10, 1 );
		
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( 'md-promotion-manager-front', MD_PROMOTION_MANAGER_URL . 'assets/build/main.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( 'md-promotion-manager', MD_PROMOTION_MANAGER_URL . 'assets/build/main.js', array( 'jquery' ), $this->version, false );

		wp_localize_script(
			'md-promotion-manager',
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
	public function enqueue_editor_assets() {
		// Change block Priority to head.
		$blocks = \WP_Block_Type_Registry::get_instance()->get_all_registered();
		foreach ( $blocks as $block ) {
			if ( has_block( $block->name ) ) {
				wp_enqueue_style( $block->style );
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
	public function script_additional_attrs( $tag, $handle ) {
		if ( 'grs-ad' === $handle ) {
			return str_replace( ' src', ' data-type="lazy" data-src', $tag );
		}

		return $tag;
	}

	/**
	 * Add badge in top left product in shop loop.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function md_add_badge() {
		global $product;

		// Get promotion_enable.
		$promotion_enable = get_post_meta( $product->get_id(), 'promotion_enable', true );

		// Based on promotion_type display badge.
		$promotion_type = get_post_meta( $product->get_id(), 'promotion_type', true );

		// Get start_date and end_date
		$start_date = get_post_meta( $product->get_id(), 'start_date', true );
		$end_date   = get_post_meta( $product->get_id(), 'end_date', true );
		
		// Get current date
		$current_date = gmdate( 'Y-m-d' );

		if ( $promotion_enable !== '1') {
			return;
		} else if ( 'free_gift' === $promotion_type && $start_date <= $current_date && $end_date >= $current_date ) {
			echo '<span class="md-promotion-badge">' . esc_html__( 'Free Gift', 'md-promotion-manager' ) . '</span>';
		} else if ( 'extra_saving' === $promotion_type && $start_date <= $current_date && $end_date >= $current_date ) {
			echo '<span class="md-promotion-badge">' . esc_html__( 'Extra Saving', 'md-promotion-manager' ) . '</span>';
		} else if ( 'coupon_code' === $promotion_type && $start_date <= $current_date && $end_date >= $current_date ) {
			$promotion_value = get_post_meta( $product->get_id(), 'promotion_value', true );
			$amount_off = get_post_meta( $product->get_id(), 'amount_off', true );
			$currency_symbol = get_woocommerce_currency_symbol();
			$discount = ( $promotion_value === "fixed" ) ? $currency_symbol . $amount_off : $amount_off . "%";
			echo '<span class="md-promotion-badge">' . esc_html__( 'Extra ', 'md-promotion-manager' ) . esc_html( $discount ) . esc_html__( ' OFF', 'md-promotion-manager' ) . '</span>';
		}
	}

	/**
	 * Display promotion message in single product page.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function md_display_promotion_message() {
		global $product;

		// Get promotion_enable.
		$promotion_enable = get_post_meta( $product->get_id(), 'promotion_enable', true );

		// Based on promotion_type display message.
		$promotion_type = get_post_meta( $product->get_id(), 'promotion_type', true );

		// Get start_date and end_date
		$start_date = get_post_meta( $product->get_id(), 'start_date', true );
		$end_date   = get_post_meta( $product->get_id(), 'end_date', true );

		// Get current date
		$current_date = gmdate( 'Y-m-d' );

		if ( $promotion_enable !== '1') {
			return;
		} else if ( 'free_gift' === $promotion_type && $start_date <= $current_date && $end_date >= $current_date ) {
			$for_what = get_post_meta( $product->get_id(), 'for_what', true );
			if ( $for_what ) {
				echo '<div class="md-promotion-message">' . esc_html( $for_what ) . '</div>';
			}
		} else if ( 'extra_saving' === $promotion_type && $start_date <= $current_date && $end_date >= $current_date ) {
			$promotion_value = get_post_meta( $product->get_id(), 'promotion_value', true );
			$amount_off = get_post_meta( $product->get_id(), 'amount_off', true );
			$currency_symbol = get_woocommerce_currency_symbol();
			$discount = ( $promotion_value === "fixed" ) ? $currency_symbol . $amount_off : $amount_off . "%";
			echo '<div class="md-promotion-message">' . esc_html( $discount ) . esc_html__( " Extra saving w/d this product. hurry limited time offer.",  'md-promotion-manager' ) . '</div>';
		} else if ( 'coupon_code' === $promotion_type && $start_date <= $current_date && $end_date >= $current_date ) {
			$coupon_code = get_post_meta( $product->get_id(), 'coupon_code', true );
			$promotion_value = get_post_meta( $product->get_id(), 'promotion_value', true );
			$amount_off = get_post_meta( $product->get_id(), 'amount_off', true );
			$currency_symbol = get_woocommerce_currency_symbol();
			$discount = ( $promotion_value === "fixed" ) ? $currency_symbol . $amount_off : $amount_off . "%";
			echo '<div class="md-promotion-message">' . esc_html__( 'Use coupon code ', 'md-promotion-manager' ) . esc_html( $coupon_code ) . esc_html__( ' and get ', 'md-promotion-manager' ) . esc_html( $discount ) . esc_html__( ' OFF on this product.', 'md-promotion-manager' ) . '</div>';
		}
	}

	/**
	 * Add discount in calculate total if coupon code applied and promotion_type is coupon_code.
	 *
	 * @param object $cart Cart object.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function md_add_discount( $cart ) {
		if ( is_admin() && ! defined( 'DOING_AJAX' ) ) {
			return;
		}

		if ( did_action( 'woocommerce_before_calculate_totals' ) >= 2 ) {
			return;
		}

		// retrive applied coupon code.
		$applied_coupon_code = $cart->get_applied_coupons();
		// Get items in cart.
		$product_items = $cart->get_cart();

		// Apply discount from sub total amount.
		$cart_total = $cart->get_subtotal();
		$cart_discount = 0;
		$is_apply_discount = 0;
		if ( ! empty( $product_items ) ) {
			foreach ( $product_items as $product_item ) {
				$product_id = $product_item['product_id'];
				$promotion_type = get_post_meta( $product_id, 'promotion_type', true );
				// Get promotion_enable.
				$promotion_enable = get_post_meta( $product_id, 'promotion_enable', true );
				if ( 'coupon_code' === $promotion_type && $promotion_enable === '1' ) {
					// Get start_date and end_date
					$start_date = get_post_meta( $product_id, 'start_date', true );
					$end_date   = get_post_meta( $product_id, 'end_date', true );
					// Get current date
					$current_date = gmdate( 'Y-m-d' );

					$coupon_code = get_post_meta( $product_id, 'coupon_code', true );
					$amount_off = get_post_meta( $product_id, 'amount_off', true );
					$promotion_value = get_post_meta( $product_id, 'promotion_value', true );
					
					if ( in_array( strtolower($coupon_code), $applied_coupon_code, true ) && $start_date <= $current_date && $end_date >= $current_date) {
						$is_apply_discount = 1;
					}
				}
			}
		}
		// Apply discount on sub total amount.
		if ( $is_apply_discount ) {
			if ($promotion_value === "fixed") {
				$cart_discount = $amount_off;
			} else {
				$cart_discount = $cart_total * $amount_off / 100;
			}
			$cart->add_fee( __('Spacial Coupon Discount', 'woocommerce'), -$cart_discount );
		}
	}
}
