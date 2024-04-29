<?php

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    MD_Wallet
 * @subpackage MD_Wallet/public
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Wallet\Inc;

use MD_Wallet\Inc\Traits\Singleton;
use WP_REST_Request;

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
		if (defined('MD_WALLET_VERSION')) {
			$this->version = MD_WALLET_VERSION;
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

		add_action('enqueue_block_assets', array($this, 'enqueue_editor_assets'));
		add_filter('script_loader_tag', array($this, 'script_additional_attrs'), 10, 2);
		add_filter('should_load_separate_core_block_assets', '__return_true');

		add_filter('woocommerce_account_menu_items', array($this, 'md_add_wallet_menu_item'));
		add_action('woocommerce_account_wallet_endpoint', array($this, 'md_display_add_money_form'));
		add_action('woocommerce_account_wallet-success_endpoint', array($this, 'md_display_wallet_success'));
		add_action('init', array($this, 'md_custom_rewrite_rule'));
		add_action('rest_api_init', array($this, 'md_register_routes'));

		// Filter order query to hide wallet transactions orders
		add_filter('woocommerce_shop_order_query', array($this, 'md_hide_specific_orders'), 99, 1);
		add_filter('woocommerce_my_account_my_orders_query', array($this, 'md_hide_specific_orders'), 99, 1);
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles()
	{
		wp_enqueue_style('md-wallet-front', MD_WALLET_URL . 'assets/build/main.css', array(), $this->version, 'all');
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts()
	{

		wp_enqueue_script('stripejs', 'https://js.stripe.com/v3/');
		wp_enqueue_script('md-wallet', MD_WALLET_URL . 'assets/build/main.js', array('jquery'), $this->version, false);

		// Get an instance of MD_Wallet_Payment_Gateway
		$md_wallet_payment_gateway = new MD_Wallet_Payment_Gateway();

		// Get the publishable key
		$publishable_key = $md_wallet_payment_gateway->get_option('publishable_key');

		// Create WP nonce.
		$md_wallet_nonce = wp_create_nonce('md_wallet_nonce');

		wp_localize_script(
			'md-wallet',
			'siteConfig',
			array(
				'ajaxUrl'    => admin_url('admin-ajax.php'),
				'ajax_nonce' => wp_create_nonce('loadmore_post_nonce'),
				'publishableKey' => $publishable_key,
				'md_wallet_nonce' => $md_wallet_nonce,
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
	 * Add wallet menu item.
	 *
	 * @param array $items Menu items.
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public function md_add_wallet_menu_item($items)
	{
		$items['wallet'] = __('Wallet', 'md-wallet');
		return $items;
	}

	/**
	 * Display add money form.
	 */
	public function md_display_add_money_form()
	{
		$customer = WC()->customer;

		// Display wallet balance.
		$wallet_balance = get_user_meta($customer->get_id(), 'wallet_balance', true);

		if (empty($wallet_balance)) {
			$wallet_balance = 0;
		}
		// Get currency symbol.
		$currency_symbol = get_woocommerce_currency_symbol();
?>
		<h3><?php echo esc_html__("Your Wallet Balance: ", 'md-wallet') . esc_html($currency_symbol . $wallet_balance); ?></h3>
		<form id="payment-form" action="" method="post">
			<p class="form-row form-row-wide">
				<label for="md_wallet_amount"><?php echo esc_html__('Enter Amount', 'md-wallet'); ?></label>
				<input required="" class="input-text" type="text" id="md_wallet_amount" name="amount" placeholder="Enter Amount">
			</p>
			<input type="hidden" id="md_wallet_customer_id" name="customer_id" value="<?php echo esc_attr($customer->get_id()); ?>">
			<input type="hidden" id="md_wallet_customer_email" name="customer_email" value="<?php echo esc_attr($customer->get_email()); ?>">
			<input type="hidden" id="md_wallet_customer_name" name="customer_name" value="<?php echo esc_attr($customer->get_billing_first_name() . ' ' . $customer->get_billing_last_name()); ?>">
			<input type="hidden" id="md_wallet_customer_billing_address" name="customer_address" value="<?php echo esc_attr($customer->get_billing_address_1()); ?>">
			<input type="hidden" id="md_wallet_customer_billing_address_2" name="customer_address2" value="<?php echo esc_attr($customer->get_billing_address_2()); ?>">
			<input type="hidden" id="md_wallet_customer_city" name="customer_city" value="<?php echo esc_attr($customer->get_billing_city()); ?>">
			<input type="hidden" id="md_wallet_customer_state" name="customer_state" value="<?php echo esc_attr($customer->get_billing_state()); ?>">
			<input type="hidden" id="md_wallet_customer_postal_code" name="customer_postcode" value="<?php echo esc_attr($customer->get_billing_postcode()); ?>">
			<input type="hidden" id="md_wallet_customer_country" name="customer_country" value="<?php echo esc_attr($customer->get_billing_country()); ?>">
			<button type="submit" class="button wp-element-button" id="submit">Submit Payment</button>
		</form>
		<div class="md_display_wallet_orders">
			<?php
			// Get the wallet orders
			$wallet_orders = wc_get_orders(array(
				'customer' => $customer->get_id(),
				'meta_query' => array(
					array(
						'key' => 'order_transaction_type',
						'value' => array('Top up', 'Withdraw'),
						'compare' => 'IN'
					),
				),
			));
			if (!empty($wallet_orders)) {
			?>
				<h3>Wallet Transactions</h3>
				<table class="woocommerce-orders-table woocommerce-MyAccount-orders shop_table shop_table_responsive my_account_orders account-orders-table">
					<thead>
						<tr>
							<th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-number"><span class="nobr"><?php echo esc_html__('Order', 'md-wallet'); ?></span></th>
							<th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-date"><span class="nobr"><?php echo esc_html__('Date', 'md-wallet'); ?></span></th>
							<th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-transaction_type"><span class="nobr"><?php echo esc_html__('Type', 'md-wallet'); ?></span></th>
							<th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-status"><span class="nobr"><?php echo esc_html__('Status', 'md-wallet'); ?></span></th>
							<th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-total"><span class="nobr"><?php echo esc_html__('Total', 'md-wallet'); ?></span></th>
							<th class="woocommerce-orders-table__header woocommerce-orders-table__header-order-actions">&nbsp;</th>
						</tr>
					</thead>
					<tbody>
						<?php
						foreach ($wallet_orders as $wallet_order) {
							$order = wc_get_order($wallet_order->ID);
						?>
							<tr class="woocommerce-orders-table__row woocommerce-orders-table__row--status-<?php echo esc_attr($order->get_status()); ?> order">
								<td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-number" data-title="Order">
									<a href="<?php echo esc_url($order->get_view_order_url()); ?>">
										<?php echo esc_html($order->get_order_number()); ?>
									</a>
								</td>
								<td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-date" data-title="Date">
									<time datetime="<?php echo esc_attr($order->get_date_created()->date('c')); ?>"><?php echo esc_html(wc_format_datetime($order->get_date_created())); ?></time>
								</td>
								<td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-transaction_type" data-title="Transaction Type">
									<?php echo esc_html($order->get_meta('order_transaction_type')); ?>
								</td>
								<td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-status" data-title="Status">
									<?php echo esc_html(wc_get_order_status_name($order->get_status())); ?>
								</td>
								<td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-total" data-title="Total">
									<?php echo wp_kses_post($order->get_formatted_order_total()); ?>
								</td>
								<td class="woocommerce-orders-table__cell woocommerce-orders-table__cell-order-actions" data-title="Actions">
									<?php
									$actions = wc_get_account_orders_actions($order);
									if (!empty($actions)) {
										foreach ($actions as $key => $action) {
											$url = $action['url'];
											if ($key === 'pay') {
												$url = "javascript:void(0);";
											}
											echo '<a href="' . esc_url($url) . '" ' . ($key === 'pay' ? "data-order_id='" . esc_attr($order->get_id()) . 	"' data-amount='" . esc_attr($order->get_total()) . "'" : "") . ' class="woocommerce-button md-wallet_action wp-element-button button ' . sanitize_html_class($key) . '">' . esc_html($action['name']) . '</a>';
										}
									}
									?>
								</td>
							</tr>
						<?php
						}
						?>
					</tbody>
				</table>
			<?php
			}
			?>
		</div>
	<?php
	}

	/**
	 * Display wallet success message.
	 */
	public function md_display_wallet_success()
	{

		// Check wp_verify_nonce
		if (isset($_GET['md_wallet_nonce']) && !wp_verify_nonce(sanitize_text_field($_GET['md_wallet_nonce']), 'md_wallet_nonce')) {
			return;
		}

		// Check if the wallet_success query var is set
		if (isset($_GET['session_id'])) {
			$session_id = sanitize_text_field($_GET['session_id']);
		}

		$existing_orders = get_posts(array(
			'post_type' => get_post_types(),
			'post_status' => 'any',
			'meta_query' => array(
				array(
					'key' => 'session_id',
					'value' => $session_id,
					'compare' => 'LIKE'
				),
			),
		));

		$current_user = wp_get_current_user();
		// Update Wallet Balance.
		$wallet_balance = get_user_meta($current_user->ID, 'wallet_balance', true);
		if (empty($wallet_balance)) {
			$wallet_balance = 0;
		}

		if (!empty($existing_orders)) {
			// Get the order
			$order = wc_get_order($existing_orders[0]->ID);
			// Check if the order status is 'in-progress'
			if ($order->get_status() === 'pending') {
				// Update the order status to 'completed'
				$order->update_status('completed', 'Payment successful:', true);
				$wallet_balance += (float) $order->get_total();
				// Update the wallet balance
				update_user_meta($current_user->ID, 'wallet_balance', $wallet_balance);
			}
		}
	?>
		<h3><?php echo esc_html__('You have made successfully payment. We have added fund in your wallet.', 'md-wallet'); ?></h3>
		<a class="woocommerce-Button button wp-element-button" href="<?php echo esc_url(home_url('my-account/wallet')); ?>"><?php echo esc_html__('Back to Wallet', 'md-wallet'); ?></a>
<?php
	}

	/**
	 * Custom rewrite rule.
	 */
	public function md_custom_rewrite_rule()
	{
		add_rewrite_endpoint('wallet', EP_PAGES);
		add_rewrite_endpoint('wallet-success', EP_PAGES);
	}

	public function md_register_routes()
	{
		register_rest_route('md-wallet/v1', '/create-checkout-session/', array(
			'methods' => 'POST',
			'callback' => array($this, 'md_create_checkout_session'),
			'permission_callback' => '__return_true',
		));
	}

	public function get_wallet_recharge_product()
	{
		$product_id = wc_get_product_id_by_sku('wallet_recharge');

		if (!$product_id) {
			// Product doesn't exist, create it
			$product = wc_get_product();

			$product_data = array(
				'name' => 'Wallet Recharge',
				'type' => 'virtual',
				'regular_price' => 0, // Price can be updated dynamically during order creation
				'sku' => 'wallet_recharge',
				'manage_stock' => false,
				'stock_status' => 'instock',
			);
			// Create product
			$product = new \WC_Product_Simple();
			$product->set_props($product_data);
			$product->save();
			$product_id = $product->get_id();
		}

		return $product_id;
	}

	public function md_create_checkout_session(WP_REST_Request $request)
	{

		$data = $request->get_json_params();
		$customer_id = $data['customer_id'];
		$wallet_amount = $data['amount'];
		$order_id = $data['order_id'];
		$customer_email = $data['customer_email'];
		$customer_name = $data['customer_name'];
		$customer_address = $data['customer_billing_address'];
		$customer_address2 = $data['customer_billing_address_2'];
		$customer_city = $data['customer_city'];
		$customer_state = $data['customer_state'];
		$customer_postcode = $data['customer_postal_code'];
		$customer_country = $data['customer_country'];

		if (empty($order_id)) {
			// Create a new product
			$product_id = $this->get_wallet_recharge_product();
			$product = wc_get_product($product_id);

			// Create a new order
			$order = wc_create_order();
			// Set the customer
			$order->set_customer_id($customer_id);

			// Add product to order
			$item = new \WC_Order_Item_Product();
			$item->set_props(array(
				'product' => $product,
				'quantity' => 1,
				'subtotal' => $wallet_amount,
				'total' => $wallet_amount,
			));
			$order->add_item($item);
			// Calculate totals
			$order->calculate_totals();

			$order->update_status('pending', 'Order created and now in progress:', true);
		} else {
			$order = wc_get_order($order_id);
		}

		// Get an instance of MD_Wallet_Payment_Gateway
		$md_wallet_payment_gateway = new MD_Wallet_Payment_Gateway();

		// Get the publishable key
		$secret_key = $md_wallet_payment_gateway->get_option('secret_key');

		\Stripe\Stripe::setApiKey($secret_key); // Replace with your secret key

		$checkout_session = \Stripe\Checkout\Session::create([
			'payment_method_types' => ['card'],
			'line_items' => [[
				'price_data' => [
					'currency' => 'usd',
					'product_data' => [
						'name' => 'Wallet Topup',
					],
					'unit_amount' => (float) $wallet_amount * 100,
				],
				'quantity' => 1,
			]],
			'mode' => 'payment',
			'success_url' => home_url('my-account/wallet-success') . '?session_id={CHECKOUT_SESSION_ID}',
			'cancel_url' => home_url('my-account/wallet'),
			'payment_intent_data' => [
				'shipping' => [
					'name' => $customer_name,
					'address' => [
						'line1' => $customer_address,
						'line2' => $customer_address2,
						'city' => $customer_city,
						'state' => $customer_state,
						'postal_code' => $customer_postcode,
						'country' => $customer_country,
					],
				],
				'receipt_email' => $customer_email,
			],
		]);

		// Save the session_id as order meta data
		update_post_meta($order->get_id(), 'session_id', $checkout_session->id);
		// Set the order type to 'wallet_transaction'
		$order->update_meta_data('order_type', 'wallet_transaction', $order->get_id());
		$order->update_meta_data('order_transaction_type', 'Top up',  $order->get_id());

		$order->save();

		return new \WP_REST_Response(['id' => $checkout_session->id], 200);
	}

	public function md_hide_specific_orders($query)
	{
		// hide orders with order_type = wallet_transaction
		$query['meta_query'] = array(
			array(
				'key' => 'order_type',
				'compare' => 'NOT EXISTS'
			),
		);
		return $query;
	}
}
