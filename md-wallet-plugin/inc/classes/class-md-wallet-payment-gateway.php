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
		$this->title			  = 'Woo Wallet'; // Title of the payment method shown on the admin page
		$this->method_title       = 'MD Wallet Payment Gateway'; // Title shown in admin
		$this->method_description = 'Wallet Payment Gateway for WooCommerce'; // Description shown in admin
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
				'label'       => 'Enable Wallet Payment Gateway',
				'type'        => 'checkbox',
				'description' => '',
				'default'     => 'no'
			),
			'publishable_key' => array(
				'title'       => 'Publishable Key',
				'type'        => 'text'
			),
			'secret_key' => array(
				'title'       => 'Secret Key',
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
			update_post_meta($order->get_id(), '_order_type', 'wallet_transaction');
			update_post_meta($order->get_id(), '_order_transaction_type', 'Withdraw');

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
		echo '<div id="custom_input">
			<p>This is the wallet payment gateway. Your current balance is $100.</p>
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
