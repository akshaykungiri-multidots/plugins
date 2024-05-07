<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    MD_Promotion_Manager
 * @subpackage MD_Promotion_Manager/admin
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Promotion_Manager\Inc;

use MD_Promotion_Manager\Inc\Traits\Singleton;

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
		if ( defined( 'MD_PROMOTION_MANAGER_VERSION' ) ) {
			$this->version = MD_PROMOTION_MANAGER_VERSION;
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
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_styles' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );

		// Create metabox for promotion.
		add_action( 'add_meta_boxes', array( $this, 'md_add_promotion_metabox' ) );
		add_action( 'save_post', array( $this, 'md_save_promotion_metabox' ) );
	}


	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( 'md-promotion-manager', MD_PROMOTION_MANAGER_URL . 'assets/build/admin.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( 'md-promotion-manager', MD_PROMOTION_MANAGER_URL . 'assets/build/admin.js', array( 'jquery' ), $this->version, false );

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
	 * Function is used to add metabox for promotion.
	 *
	 * @since   1.0.0
	 */
	public function md_add_promotion_metabox() {
		add_meta_box(
			'md-promotion-edior',
			__( 'Promotion Editor', 'md-promotion-manager' ),
			array( $this, 'md_promotion_editor_metabox_callback' ),
			'product',
			'side',
			'high'
		);
	}

	/**
	 * Function is used to display promotion editor metabox.
	 *
	 * @since   1.0.0
	 */
	public function md_promotion_editor_metabox_callback() {

		global $post;

		// create field for enable and disable promotion.
		$promotion_enable = get_post_meta( $post->ID, 'promotion_enable', true );
		?>
		<p class="md-promotion-editor form-field">
			<label for="promotion_enable">
				<input type="checkbox" name="promotion_enable" id="promotion_enable" value="1" <?php checked( $promotion_enable, 1 ); ?>>
				<?php esc_html_e( 'Enable Promotion', 'md-promotion-manager' ); ?>
			</label>
		</p>
		<?php

		// create field for promotion type ( free gift, extra saving and coupon code ).
		$promotion_type = get_post_meta( $post->ID, 'promotion_type', true );
		$display		= '';
		if ( '1' !== $promotion_enable ) {
			$display = "style=display:none;";
		}
		?>
		<p class="md-promotion-editor form-field" <?php echo esc_attr( $display ); ?> >
			<label for="promotion_type">
				<?php esc_html_e( 'Promotion Type', 'md-promotion-manager' ); ?>
				<select name="promotion_type" id="promotion_type">
					<option value=""><?php esc_html_e( 'Select Promotion Type', 'md-promotion-manager' ); ?></option>
					<option value="free_gift" <?php selected( $promotion_type, 'free_gift' ); ?>><?php esc_html_e( 'Free Gift', 'md-promotion-manager' ); ?></option>
					<option value="extra_saving" <?php selected( $promotion_type, 'extra_saving' ); ?>><?php esc_html_e( 'Extra Saving', 'md-promotion-manager' ); ?></option>
					<option value="coupon_code" <?php selected( $promotion_type, 'coupon_code' ); ?>><?php esc_html_e( 'Coupon Code', 'md-promotion-manager' ); ?></option>
				</select>
			</label>
		</p>
		<?php

		// create field for coupon code textbox. Hide if promotion type is not coupon code.
		$coupon_code = get_post_meta( $post->ID, 'coupon_code', true );
		if ( '1' !== $promotion_enable ) {
			$display = "style=display:none;";
		} else if ( 'coupon_code' === $promotion_type ) {
			$display = "style=display:block;";
		} else {
			$display = "style=display:none;";
		}
		?>
		<p class="md-promotion-editor form-field" <?php echo esc_attr( $display ); ?> >
			<label for="coupon_code">
				<?php esc_html_e( 'Coupon Code', 'md-promotion-manager' ); ?>
				<input type="text" name="coupon_code" id="coupon_code" value="<?php echo esc_attr( $coupon_code ); ?>">
			</label>
		</p>
		<?php

		// create field for promotion value ( fixed , percentage ). Hide if promotion type is free gift.
		$promotion_value = get_post_meta( $post->ID, 'promotion_value', true );
		if ( '1' !== $promotion_enable ) {
			$display = "style=display:none;";
		} else if ( 'free_gift' !== $promotion_type ) {
			$display = "style=display:block";
		} else {
			$display = "style=display:none";
		}
		?>
		<p class="md-promotion-editor form-field" <?php echo esc_attr( $display ); ?> >
			<label for="promotion_value">
				<?php esc_html_e( 'Promotion Value', 'md-promotion-manager' ); ?>
				<select name="promotion_value" id="promotion_value">
					<option value=""><?php esc_html_e( 'Select Promotion Value', 'md-promotion-manager' ); ?></option>
					<option value="fixed" <?php selected( $promotion_value, 'fixed' ); ?>><?php esc_html_e( 'Fixed', 'md-promotion-manager' ); ?></option>
					<option value="percentage" <?php selected( $promotion_value, 'percentage' ); ?>><?php esc_html_e( 'Percentage', 'md-promotion-manager' ); ?></option>
				</select>
			</label>
		</p>
		<?php

		// create field for amount off textbox. Hide if promotion type is free gift.
		$amount_off = get_post_meta( $post->ID, 'amount_off', true );
		if ( '1' !== $promotion_enable ) {
			$display = "style=display:none;";
		} else if ( 'free_gift' !== $promotion_type ) {
			$display = "style=display:block";
		} else {
			$display = "style=display:none";
		}
		?>
		<p class="md-promotion-editor form-field" <?php echo esc_attr( $display ); ?> >
			<label for="amount_off">
				<?php esc_html_e( 'Amount Off', 'md-promotion-manager' ); ?>
				<input type="text" name="amount_off" id="amount_off" value="<?php echo esc_attr( $amount_off ); ?>">
			</label>
		</p>
		<?php

		// create field for ( for what ) textbox.
		$for_what = get_post_meta( $post->ID, 'for_what', true );
		$display		= '';
		if ( '1' !== $promotion_enable ) {
			$display = "style=display:none;";
		}
		?>
		<p class="md-promotion-editor form-field" <?php echo esc_attr( $display ); ?> >
			<label for="for_what">
				<?php esc_html_e( 'For What', 'md-promotion-manager' ); ?>
				<input type="text" name="for_what" id="for_what" value="<?php echo esc_attr( $for_what ); ?>">
			</label>
		</p>
		<?php

		// create field for start date as datepicker.
		$start_date = get_post_meta( $post->ID, 'start_date', true );
		$display		= '';
		if ( '1' !== $promotion_enable ) {
			$display = "style=display:none;";
		}
		?>
		<p class="md-promotion-editor form-field" <?php echo esc_attr( $display ); ?> >
			<label for="start_date">
				<?php esc_html_e( 'Start Date', 'md-promotion-manager' ); ?>
				<input type="date" name="start_date" id="start_date" value="<?php echo esc_attr( $start_date ); ?>" class="datepicker">
			</label>
		</p>
		<?php

		// create field for end date as datepicker.
		$end_date = get_post_meta( $post->ID, 'end_date', true );
		$display		= '';
		if ( '1' !== $promotion_enable ) {
			$display = "style=display:none;";
		}
		?>
		<p class="md-promotion-editor form-field" <?php echo esc_attr( $display ); ?> >
			<label for="end_date">
				<?php esc_html_e( 'End Date', 'md-promotion-manager' ); ?>
				<input type="date" name="end_date" id="end_date" value="<?php echo esc_attr( $end_date ); ?>" class="datepicker">
			</label>
		</p>
		<?php

		// add nonce field.
		wp_nonce_field( 'md_promotion_editor_metabox', 'md_promotion_editor_metabox_nonce' );

	}

	/**
	 * Function is used to save promotion metabox data.
	 *
	 * @since   1.0.0
	 */
	function md_save_promotion_metabox( $post_id ) {
		
		// verify nonce.
		if ( ! isset( $_POST['md_promotion_editor_metabox_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['md_promotion_editor_metabox_nonce'] ) ), 'md_promotion_editor_metabox' ) ) {
			return;
		}

		if ( isset( $_POST['promotion_enable'] ) ) {
			// save promotion enable and disable.
			$promotion_enable = sanitize_text_field( wp_unslash( $_POST['promotion_enable'] ) );
			update_post_meta( $post_id, 'promotion_enable', $promotion_enable );
		} else {
			update_post_meta( $post_id, 'promotion_enable', '0' );
			return;
		}


		// save promotion type.
		if (isset($_POST['promotion_type'])) {
			$promotion_type = sanitize_text_field(wp_unslash($_POST['promotion_type']));
		}
		update_post_meta( $post_id, 'promotion_type', $promotion_type );

		// save coupon code.
		if (isset($_POST['coupon_code'])) {
			$coupon_code = sanitize_text_field(wp_unslash($_POST['coupon_code']));
		}
		update_post_meta( $post_id, 'coupon_code', $coupon_code );

		// save promotion value.
		$promotion_value = "";
		if (isset($_POST['promotion_value'])) {
			$promotion_value = sanitize_text_field(wp_unslash($_POST['promotion_value']));
		}
		update_post_meta( $post_id, 'promotion_value', $promotion_value );

		// save amount off.
		$amount_off = "";
		if (isset($_POST['amount_off'])) {
			$amount_off = sanitize_text_field(wp_unslash($_POST['amount_off']));
		} else {
			$amount_off = '';
		}
		update_post_meta( $post_id, 'amount_off', $amount_off );

		if ( !empty($promotion_value) && !empty($amount_off) && 'extra_saving' === $promotion_type ) {
			// Get product object.
			$product = wc_get_product( $post_id );

			// Get regular price.
			$regular_price = $product->get_regular_price();

			// Calculate sale price.
			if ( 'fixed' === $promotion_value ) {
				$sale_price = $regular_price - $amount_off;
			} else {
				$sale_price = $regular_price - ( $regular_price * $amount_off / 100 );
			}

			// Update sale price.
			$product->set_sale_price( $sale_price );
			$product->save();
		}

		// save for what.
		if (isset($_POST['for_what'])) {
			$for_what = sanitize_text_field(wp_unslash($_POST['for_what']));
		} else {
			$for_what = '';
		}
		update_post_meta( $post_id, 'for_what', $for_what );

		// save start date.
		if (isset($_POST['start_date'])) {
			$start_date = sanitize_text_field(wp_unslash($_POST['start_date']));
		} else {
			$start_date = '';
		}
		update_post_meta( $post_id, 'start_date', $start_date );

		// save end date.
		if (isset($_POST['end_date'])) {
			$end_date = sanitize_text_field(wp_unslash($_POST['end_date']));
		} else {
			$end_date = '';
		}
		update_post_meta( $post_id, 'end_date', $end_date );
	}
}
