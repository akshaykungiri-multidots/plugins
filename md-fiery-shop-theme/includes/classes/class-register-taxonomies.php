<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-fiery-shop
 */

namespace MD_FIERY_SHOP\Includes;

use MD_FIERY_SHOP\Includes\Traits\Singleton;

/**
 * Class for register taxonomies.
 */
class Register_Taxonomies {
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
	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'init', array( $this, 'register_event_category_taxonomy' ) );

		// Custom fields for brands.
		add_action( 'brands_add_form_fields', array( $this, 'add_brand_fields' ) );

		// Edit custom fields for brands.
		add_action( 'brands_edit_form_fields', array( $this, 'add_brand_fields' ) );

		// Save custom fields for brands.
		add_action( 'created_brands', array( $this, 'save_brand_fields' ) );
		add_action( 'edited_brands', array( $this, 'save_brand_fields' ) );
	}

	/**
	 * Register Taxonomy Event Categories.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_event_category_taxonomy() {

		$labels = array(
			'name'              => _x( 'Event Categories', 'taxonomy general name', 'md-fiery-shop' ),
			'singular_name'     => _x( 'Event Category', 'taxonomy singular name', 'md-fiery-shop' ),
			'search_items'      => __( 'Search Event Categories', 'md-fiery-shop' ),
			'all_items'         => __( 'All Event Categories', 'md-fiery-shop' ),
			'parent_item'       => __( 'Parent Event Category', 'md-fiery-shop' ),
			'parent_item_colon' => __( 'Parent Event Category:', 'md-fiery-shop' ),
			'edit_item'         => __( 'Edit Event Category', 'md-fiery-shop' ),
			'update_item'       => __( 'Update Event Category', 'md-fiery-shop' ),
			'add_new_item'      => __( 'Add New Event Category', 'md-fiery-shop' ),
			'new_item_name'     => __( 'New Event Category Name', 'md-fiery-shop' ),
			'menu_name'         => __( 'Event Category', 'md-fiery-shop' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Event Category', 'md-fiery-shop' ),
			'hierarchical'       => true,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_nav_menus'  => true,
			'show_tagcloud'      => true,
			'show_in_quick_edit' => true,
			'show_admin_column'  => true,
			'show_in_rest'       => true,
		);
		register_taxonomy( 'event-category', array( 'events' ), $args );

		// Brands.
		$labels = array(
			'name'              => _x( 'Brands', 'taxonomy general name', 'md-fiery-shop' ),
			'singular_name'     => _x( 'Brand', 'taxonomy singular name', 'md-fiery-shop' ),
			'search_items'      => __( 'Search Brands', 'md-fiery-shop' ),
			'all_items'         => __( 'All Brands', 'md-fiery-shop' ),
			'parent_item'       => __( 'Parent Brand', 'md-fiery-shop' ),
			'parent_item_colon' => __( 'Parent Brand:', 'md-fiery-shop' ),
			'edit_item'         => __( 'Edit Brand', 'md-fiery-shop' ),
			'update_item'       => __( 'Update Brand', 'md-fiery-shop' ),
			'add_new_item'      => __( 'Add New Brand', 'md-fiery-shop' ),
			'new_item_name'     => __( 'New Brand Name', 'md-fiery-shop' ),
			'menu_name'         => __( 'Brands', 'md-fiery-shop' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Brands', 'md-fiery-shop' ),
			'hierarchical'       => true,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_nav_menus'  => true,
			'show_tagcloud'      => true,
			'show_in_quick_edit' => true,
			'show_admin_column'  => true,
			'show_in_rest'       => true,
			'has_archive'        => true,
			'rewrite'            => array( 'slug' => 'brands' ),
		);
		register_taxonomy( 'brands', array( 'products' ), $args );
	}

	/**
	 * Add Brand Fields.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function add_brand_fields() {
		// Brand Image Field as media uploader.
		$brand_image_id = isset( $_GET['tag_ID'] ) ? get_term_meta( $_GET['tag_ID'], 'brand-image-id', true ) : '';
		?>
		<tr class="form-field">
			<th scope="row" valign="top">
				<label for="brand-image-id"><?php esc_html_e( 'Brand Image', 'md-fiery-shop' ); ?></label>
			</th>
			<td>
				<input type="hidden" id="brand-image-id" name="brand-image-id" value="<?php echo esc_attr( $brand_image_id ); ?>">
				<div id="brand-image-wrapper">
					<?php
					if ( $brand_image_id ) {
						echo wp_get_attachment_image( $brand_image_id, 'thumbnail' );
					}
					?>
				</div>
				<button id="ct_tax_media_button" class="button"><?php esc_html_e( 'Add Image', 'md-fiery-shop' ); ?></button>
				<button id="ct_tax_media_remove" class="button"><?php esc_html_e( 'Remove Image', 'md-fiery-shop' ); ?></button>
			</td>
		</tr>
		<?php
		echo '<script>
			jQuery(document).ready(function(){
				jQuery("#ct_tax_media_button").click(function(e) {
					e.preventDefault();
					var custom_uploader = wp.media({
						title: "Insert image",
						library : {
							uploadedTo : wp.media.view.settings.post.id, // attach to the current post?
							type : "image"
						},
						button: {
							text: "Use this image"
						},
						multiple: false
					}).on("select", function() {
						var attachment = custom_uploader.state().get("selection").first().toJSON();
						jQuery("#brand-image-id").val(attachment.id);
						jQuery("#brand-image-wrapper").html("<img src=\'"+attachment.url+"\' style=\'max-width:100%;display:block;\'>");
					}).open();
				});
				jQuery("#ct_tax_media_remove").click(function(){
					jQuery("#brand-image-id").val("");
					jQuery("#brand-image-wrapper").html("");
				});
			});
		</script>';
	}

	/**
	 * Save Brand Fields.
	 *
	 * @param int $term_id Term ID.
	 * @return void
	 * @since 1.0.0
	 */
	public function save_brand_fields( $term_id ) {
		if ( isset( $_POST['brand-image-id'] ) ) {
			update_term_meta( $term_id, 'brand-image-id', absint( $_POST['brand-image-id'] ) );
		}
	}

}
