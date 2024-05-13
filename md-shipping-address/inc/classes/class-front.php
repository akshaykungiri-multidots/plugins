<?php
/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    MD_Shipping_Address
 * @subpackage MD_Shipping_Address/public
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Shipping_Address\Inc;

use MD_Shipping_Address\Inc\Traits\Singleton;

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
		if ( defined( 'MD_SHIPPING_ADDRESS_VERSION' ) ) {
			$this->version = MD_SHIPPING_ADDRESS_VERSION;
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

		// Add custom fileds in checkout page after billing form.
		add_action( 'woocommerce_after_checkout_billing_form', array( $this, 'md_add_custom_fields_after_billing_form' ) );

		// Save shipping address in product meta.
		// add_action( 'woocommerce_checkout_update_order_meta', array( $this, 'md_save_shipping_address' ) );

		// Display shipping address in order details.
		add_action( 'woocommerce_order_details_after_order_table', array( $this, 'md_display_shipping_address_in_order_details' ) );

		// Display shipping address in backend order details.
		add_action( 'woocommerce_admin_order_data_after_shipping_address', array( $this, 'md_display_shipping_address_in_order_details' ) );

		// wp ajax action to get state based on country.
		add_action( 'wp_ajax_md_get_states_by_country', array( $this, 'md_get_states_by_country' ) );

		// Display error message.
		add_action( 'woocommerce_checkout_process', array( $this, 'md_save_shipping_address' ) );
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( 'md-shipping-address-front', MD_SHIPPING_ADDRESS_URL . 'assets/build/main.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( 'md-shipping-address', MD_SHIPPING_ADDRESS_URL . 'assets/build/main.js', array( 'jquery' ), $this->version, false );

		wp_localize_script(
			'md-shipping-address',
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
	 * Add custom fields after billing form.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function md_add_custom_fields_after_billing_form() {
		// Add checkbox to display shipping address.
		woocommerce_form_field(
			'md_display_shipping_address',
			array(
				'type'    => 'checkbox',
				'label'   => esc_html__( 'Display Shipping Address', 'md-shipping-address' ),
				'class'   => array( 'form-row-wide' ),
				'default' => 0,
			),
			wc()->checkout->get_value( 'md_display_shipping_address' )
		);
		// display form fields like first name, last name, shipping_address1 etc. for each products and each quantity in cart.
		$cart_items = WC()->cart->get_cart();
		?>
		<div class="md-shipping-address" style="display: none;">
			<?php
			// create nonce field.
			wp_nonce_field( 'md_shipping_address_nonce', 'md_shipping_address_nonce' );
			foreach ( $cart_items as $cart_item ) {

				// loop quantity and display form fields.
				$quantity = $cart_item['quantity'];
				for ( $i = 0; $i < $quantity; $i++ ) {
					$product_id = $cart_item['product_id'];
					?>
					<div class="md-shipping-address-form">
						<h3><?php echo esc_html( get_the_title( $product_id ) . " " . ( $i + 1 ) ); ?></h3>
						<?php
						woocommerce_form_field(
							'md_shipping_address[' . $product_id . '][' . $i . '][first_name]',
							array(
								'type'        => 'text',
								'label'       => esc_html__( 'First Name', 'md-shipping-address' ),
								'class'       => array( 'form-row-wide' ),
								'required'    => true,
								'placeholder' => esc_html__( 'First Name', 'md-shipping-address' ),
							)
						);
						woocommerce_form_field(
							'md_shipping_address[' . $product_id . '][' . $i . '][last_name]',
							array(
								'type'        => 'text',
								'label'       => esc_html__( 'Last Name', 'md-shipping-address' ),
								'class'       => array( 'form-row-wide' ),
								'required'    => true,
								'placeholder' => esc_html__( 'Last Name', 'md-shipping-address' ),
							)
						);
						woocommerce_form_field(
							'md_shipping_address[' . $product_id . '][' . $i . '][shipping_address1]',
							array(
								'type'        => 'text',
								'label'       => esc_html__( 'Shipping Address 1', 'md-shipping-address' ),
								'class'       => array( 'form-row-wide' ),
								'required'    => true,
								'placeholder' => esc_html__( 'Shipping Address 1', 'md-shipping-address' ),
							)
						);
						woocommerce_form_field(
							'md_shipping_address[' . $product_id . '][' . $i . '][shipping_address2]',
							array(
								'type'        => 'text',
								'label'       => esc_html__( 'Shipping Address 2', 'md-shipping-address' ),
								'class'       => array( 'form-row-wide' ),
								'required'    => false,
								'placeholder' => esc_html__( 'Shipping Address 2', 'md-shipping-address' ),
							)
						);
						// Output country and state dropdowns
						woocommerce_form_field(
							'md_shipping_address[' . $product_id . '][' . $i . '][country]',
							array(
								'type'        => 'country',
								'label'       => esc_html__( 'Country', 'md-shipping-address' ),
								'class'       => array( 'form-row-wide', 'md-country-dropdown' ),
								'required'    => true,
								'placeholder' => esc_html__( 'Country', 'md-shipping-address' ),
							)
						);
						woocommerce_form_field(
							'md_shipping_address[' . $product_id . '][' . $i . '][state]',
							array(
								'type'        => 'state',
								'label'       => esc_html__( 'State', 'md-shipping-address' ),
								'class'       => array( 'form-row-wide', 'md-state-dropdown' ),
								'required'    => true,
								'placeholder' => esc_html__( 'State', 'md-shipping-address' ),
							),
							'' // Leave the value empty
						);
						woocommerce_form_field(
							'md_shipping_address[' . $product_id . '][' . $i . '][city]',
							array(
								'type'        => 'text',
								'label'       => esc_html__( 'City', 'md-shipping-address' ),
								'class'       => array( 'form-row-wide' ),
								'required'    => true,
								'placeholder' => esc_html__( 'City', 'md-shipping-address' ),
							)
						);
						woocommerce_form_field(
							'md_shipping_address[' . $product_id . '][' . $i . '][postcode]',
							array(
								'type'        => 'text',
								'label'       => esc_html__( 'Postcode', 'md-shipping-address' ),
								'class'       => array( 'form-row-wide' ),
								'required'    => true,
								'placeholder' => esc_html__( 'Postcode', 'md-shipping-address' ),
							)
						);
						?>
					</div>
					<?php
				}
			}
			?>
		</div>
		<?php
	}

	/**
	 * Save shipping address in product items.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function md_save_shipping_address() {

		// check wp_validate_nonce.
		if ( ! isset( $_POST['md_shipping_address_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['md_shipping_address_nonce'] ) ), 'md_shipping_address_nonce' ) ) {
			return;
		}

		// check if display shipping address is checked.
		if ( ! isset( $_POST['md_display_shipping_address'] ) || empty( $_POST['md_display_shipping_address'] ) ) {
			return;
		}

		$cart_items = WC()->cart->get_cart();
		foreach ( $cart_items as $cart_item ) {
			$product_id = $cart_item['product_id'];
			$quantity = $cart_item['quantity'];
			$shipping_address = array();
			for ( $i = 0; $i < $quantity; $i++ ) {

				// validate all required fields.
				if ( empty( $_POST['md_shipping_address'][ $product_id ][ $i ]['first_name'] ) ) {
					wc_add_notice( esc_html__( 'Please enter first name.', 'md-shipping-address' ), 'error' );
					return;
				}
				if ( empty( $_POST['md_shipping_address'][ $product_id ][ $i ]['last_name'] ) ) {
					wc_add_notice( esc_html__( 'Please enter last name.', 'md-shipping-address' ), 'error' );
					return;
				}
				if ( empty( $_POST['md_shipping_address'][ $product_id ][ $i ]['shipping_address1'] ) ) {
					wc_add_notice( esc_html__( 'Please enter shipping address 1.', 'md-shipping-address' ), 'error' );
					return;
				}
				if ( empty( $_POST['md_shipping_address'][ $product_id ][ $i ]['city'] ) ) {
					wc_add_notice( esc_html__( 'Please enter city.', 'md-shipping-address' ), 'error' );
					return;
				}
				if ( empty( $_POST['md_shipping_address'][ $product_id ][ $i ]['postcode'] ) ) {
					wc_add_notice( esc_html__( 'Please enter zip code.', 'md-shipping-address' ), 'error' );
					return;
				}
				
				if ( empty( $_POST['md_shipping_address'][ $product_id ][ $i ]['country'] ) ) {
					wc_add_notice( esc_html__( 'Please select country.', 'md-shipping-address' ), 'error' );
					return;
				} else {
					// Also validate post code using woocommerce built in function.
					$postcode = sanitize_text_field( $_POST['md_shipping_address'][ $product_id ][ $i ]['postcode'] );
					$country = sanitize_text_field( $_POST['md_shipping_address'][ $product_id ][ $i ]['country'] );
					if ( ! \WC_Validation::is_postcode( $postcode, $country ) ) {
						wc_add_notice( esc_html__( 'Please enter a valid zip code.', 'md-shipping-address' ), 'error' );
						return;
					}
				}
				if ( empty( $_POST['md_shipping_address'][ $product_id ][ $i ]['state'] ) ) {
					wc_add_notice( esc_html__( 'Please select state.', 'md-shipping-address' ), 'error' );
					return;
				}

				// save shipping address in product meta.
				$shipping_address[ $i ]['first_name'] = isset( $_POST['md_shipping_address'][ $product_id ][ $i ]['first_name'] ) ? sanitize_text_field( $_POST['md_shipping_address'][ $product_id ][ $i ]['first_name'] ) : '';
				$shipping_address[ $i ]['last_name'] = isset( $_POST['md_shipping_address'][ $product_id ][ $i ]['last_name'] ) ? sanitize_text_field( $_POST['md_shipping_address'][ $product_id ][ $i ]['last_name'] ) : '';
				$shipping_address[ $i ]['shipping_address1'] = isset( $_POST['md_shipping_address'][ $product_id ][ $i ]['shipping_address1'] ) ? sanitize_text_field( $_POST['md_shipping_address'][ $product_id ][ $i ]['shipping_address1'] ) : '';
				$shipping_address[ $i ]['shipping_address2'] = isset( $_POST['md_shipping_address'][ $product_id ][ $i ]['shipping_address2'] ) ? sanitize_text_field( $_POST['md_shipping_address'][ $product_id ][ $i ]['shipping_address2'] ) : '';
				$shipping_address[ $i ]['city'] = isset( $_POST['md_shipping_address'][ $product_id ][ $i ]['city'] ) ? sanitize_text_field( $_POST['md_shipping_address'][ $product_id ][ $i ]['city'] ) : '';
				$shipping_address[ $i ]['postcode'] = isset( $_POST['md_shipping_address'][ $product_id ][ $i ]['postcode'] ) ? sanitize_text_field( $_POST['md_shipping_address'][ $product_id ][ $i ]['postcode'] ) : '';
				$shipping_address[ $i ]['country'] = isset( $_POST['md_shipping_address'][ $product_id ][ $i ]['country'] ) ? sanitize_text_field( $_POST['md_shipping_address'][ $product_id ][ $i ]['country'] ) : '';
				$shipping_address[ $i ]['state'] = isset( $_POST['md_shipping_address'][ $product_id ][ $i ]['state'] ) ? sanitize_text_field( $_POST['md_shipping_address'][ $product_id ][ $i ]['state'] ) : '';
			}
			update_post_meta( $product_id, '_shipping_address', $shipping_address );
		}
	}

	/**
	 * Display shipping address in order details for each product item and quantity.
	 *
	 * @param object $order Order ID.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function md_display_shipping_address_in_order_details( $order ) {

		$order_id = $order->get_id();
		$order = wc_get_order( $order_id );
		$items = $order->get_items();
		foreach ( $items as $item ) {
			$product_id = $item->get_product_id();
			$shipping_address = get_post_meta( $product_id, '_shipping_address', true );
			if ( ! $shipping_address ) {
				continue;
			}
			?>
			<div class="md-shipping-address">
				<?php
				if ( ! empty( $shipping_address ) ) {
					foreach ( $shipping_address as $key => $address ) {
						$product_title = get_the_title( $product_id ) . ' ' . ( $key + 1 );
						?>
						<h3><?php echo esc_html( $product_title ); ?></h3>
						<p>
							<?php
							echo esc_html( $address['first_name'] . ' ' . $address['last_name'] );
							echo '<br>';
							echo esc_html( $address['shipping_address1'] );
							echo '<br>';
							echo esc_html( $address['shipping_address2'] );
							echo '<br>';
							echo esc_html( $address['city'] . ' ' . $address['postcode'] );
							if (isset($address['country']) && isset($address['state']) && ! empty( $address['country'] ) && ! empty( $address['state'] ) ) {
								echo '<br>';
								$country_name = WC()->countries->countries[ $address['country'] ];
								$state_name = WC()->countries->get_states( $address['country'] )[ $address['state'] ];
								echo esc_html( $state_name . ', ' . $country_name );
							}
							?>
						</p>
						<?php
					}
				}
				?>
			</div>
			<?php
		}
	}

	/**
	 * Display shipping address in backend order details.
	 *
	 * @param object $order Order ID.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function md_display_shipping_address_in_order_details_backend( $order ) {
		$items = $order->get_items();
		foreach ( $items as $item ) {
			$product_id = $item->get_product_id();
			$shipping_address = get_post_meta( $product_id, '_shipping_address', true );
			if ( ! $shipping_address ) {
				continue;
			}
			?>
			<div class="md-shipping-address">
				<?php
				if ( ! empty( $shipping_address ) ) {
					foreach ( $shipping_address as $key => $address ) {
						$product_title = get_the_title( $product_id ) . ' ' . ( $key + 1 );
						?>
						<h3><?php echo esc_html( $product_title ); ?></h3>
						<p>
							<?php
							echo esc_html( $address['first_name'] . ' ' . $address['last_name'] );
							echo '<br>';
							echo esc_html( $address['shipping_address1'] );
							echo '<br>';
							echo esc_html( $address['shipping_address2'] );
							echo '<br>';
							echo esc_html( $address['city'] . ' ' . $address['postcode'] );
							if (isset($address['country']) && isset($address['state'])) {
								echo '<br>';
								$country_name = WC()->countries->countries[ $address['country'] ];
								$state_name = WC()->countries->get_states( $address['country'] )[ $address['state'] ];
								echo esc_html( $state_name . ', ' . $country_name );
							}
							?>
						</p>
						<?php
					}
				}
				?>
			</div>
			<?php
		}
	}

	/**
	 * Get states by country.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function md_get_states_by_country() {

		// check wp_validate_nonce.
		if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['nonce'] ) ), 'loadmore_post_nonce' ) ) {
			wp_send_json_error( esc_html__( 'Nonce verification failed.', 'md-shipping-address' ) );
		}

		if ( isset( $_POST['country'] ) ) {
			$country = sanitize_text_field( $_POST['country'] );
			$states = WC()->countries->get_states( $country );
			if ( ! empty( $states ) ) {
				$state_options = '<option value="">' . esc_html__( 'Select State', 'md-shipping-address' ) . '</option>';
				foreach ( $states as $key => $state ) {
					$state_options .= '<option value="' . esc_attr( $key ) . '">' . esc_html( $state ) . '</option>';
				}
				wp_send_json_success( $state_options );
			} else {
				wp_send_json_error( esc_html__( 'No states found for this country.', 'md-shipping-address' ) );
			}
		} else {
			wp_send_json_error( esc_html__( 'Country not found.', 'md-shipping-address' ) );
		}
	}
}
