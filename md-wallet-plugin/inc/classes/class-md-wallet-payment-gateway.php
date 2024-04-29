<?php

/**
 * The activation functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    MD_Wallet
 * @subpackage MD_Wallet/admin
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Wallet\Inc;

use MD_Wallet\Inc\Traits\Singleton;
use WC_Payment_Gateway;

/**
 * Activator class file.
 */
class MD_Wallet_Payment_Gateway extends WC_Payment_Gateway
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
		$this->id                 = 'md_wallet_payment_gateway'; // Unique identifier for your gateway
		$this->icon 			  = '';
		$this->title			  = __('Woo Wallet', 'md-wallet'); // Title of the payment method shown on the admin page
		$this->method_title       = __('MD Wallet Payment Gateway', 'md-wallet'); // Title of the payment method shown on the admin page
		$this->method_description = __('Wallet Payment Gateway for WooCommerce', 'md-wallet'); // Description of the payment method shown on the admin page
		$this->has_fields         = true;
		$this->supports           = array('products'); // List of features supported by your gateway

		// Load the settings
		$this->init_form_fields();

		$this->init_settings();
		$this->enabled 			= $this->get_option( 'enabled' );
		$this->enabled          = $this->get_option( 'enabled' );
		$this->publishable_key 	= $this->get_option( 'publishable_key' );
		$this->secret_key 		= $this->get_option( 'secret_key' );

		// This action hook saves the settings
		add_action( 'woocommerce_update_options_payment_gateways_' . $this->id, array( $this, 'process_admin_options' ) );
	}

	/**
	 * Define gateway settings
	 */
	public function init_form_fields()
	{
		$this->form_fields = array(
			'enabled' => array(
				'title'       => 'Enable/Disable',
				'label'       => __('Enable Wallet Payment Gateway', 'md-wallet'),
				'type'        => 'checkbox',
				'description' => '',
				'default'     => 'no'
			),
			'publishable_key' => array(
				'title'       => __('Publishable Key', 'md-wallet'),
				'type'        => 'text'
			),
			'secret_key' => array(
				'title'       => __('Secret Key', 'md-wallet'),
				'type'        => 'password'
			)  
		);
	}

	/**
	 * Process payment (replace with your actual payment processing logic)
	 */
	public function process_payment($order_id)
	{
		$order = wc_get_order($order_id);

		// Diduct order total from wallet balance
		$wallet_balance = get_user_meta($order->get_user_id(), 'wallet_balance', true);
		$order_total    = $order->get_total();

		if ($wallet_balance >= $order_total) {
			// Deduct order total from wallet balance
			$wallet_balance -= $order_total;

			// Update wallet balance
			update_user_meta($order->get_user_id(), 'wallet_balance', $wallet_balance);
			$order->update_meta_data( 'order_transaction_type', 'Withdraw' );

			// Mark order as complete
			$order->payment_complete();
			$order->update_status('completed');

			// Reduce stock levels
			wc_reduce_stock_levels($order);

			// Remove cart
			WC()->cart->empty_cart();

			// Return thankyou redirect
			return array(
				'result'   => 'success',
				'redirect' => $this->get_return_url($order)
			);
		} else {
			// Add error message
			wc_add_notice(__('Insufficient wallet balance.', 'md-wallet'), 'error');
		}
	}

	public function payment_fields()
	{
		// Display wallet balance
		$customer = WC()->customer;
		$wallet_balance = get_user_meta($customer->get_id(), 'wallet_balance', true);

		if (empty($wallet_balance)) {
			$wallet_balance = 0;
		}
		// Get currency symbol.
		$currency_symbol = get_woocommerce_currency_symbol();

		echo '<div id="custom_input">
			<p>This is the wallet payment gateway. Your current balance is '. esc_html($currency_symbol . $wallet_balance) .'.</p>
		</div>';
	}

	public function get_payment_request_data($order = null) {
        return [
            'type' => $this->id,
            'gateway' => $this,
            'order' => $order,
            'needs_shipping' => WC()->cart && WC()->cart->needs_shipping(),
            'totals' => WC()->cart && WC()->cart->get_totals(),
        ];
    }
}
