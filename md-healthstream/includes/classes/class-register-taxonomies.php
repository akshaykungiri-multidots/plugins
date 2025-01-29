<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-healthstream
 */

declare( strict_types = 1 );

namespace MD_HEALTHSTREAM\Includes;

use MD_HEALTHSTREAM\Includes\Traits\Singleton;

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
	protected function setup_hooks(): void {

		/**
		 * Actions.
		 */
		add_action( 'init', array( $this, 'register_resource_taxonomy' ) );

		// Add custom image field to taxonomy.
		add_action( 'resource-type_add_form_fields', array( $this, 'add_image_field_to_taxonomy' ), 10, 2 );

		// Save custom image field to taxonomy.
		add_action( 'created_resource-type', array( $this, 'save_taxonomy_image' ), 10, 2 );

		// Edit custom image field to taxonomy.
		add_action( 'resource-type_edit_form_fields', array( $this, 'edit_taxonomy_image' ), 10, 2 );

		// Update custom image field to taxonomy.
		add_action( 'edited_resource-type', array( $this, 'update_taxonomy_image' ), 10, 2 );

		// Enqueue media.
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_media' ) );
	}

	/**
	 * Register Taxonomy Resource Type.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_resource_taxonomy(): void {

		$labels = array(
			'name'              => _x( 'Resource Types', 'taxonomy general name', 'md-healthstream' ),
			'singular_name'     => _x( 'Resource Type', 'taxonomy singular name', 'md-healthstream' ),
			'search_items'      => __( 'Search Resource Types', 'md-healthstream' ),
			'all_items'         => __( 'All Resource Types', 'md-healthstream' ),
			'parent_item'       => __( 'Parent Resource Type', 'md-healthstream' ),
			'parent_item_colon' => __( 'Parent Resource Type:', 'md-healthstream' ),
			'edit_item'         => __( 'Edit Resource Type', 'md-healthstream' ),
			'update_item'       => __( 'Update Resource Type', 'md-healthstream' ),
			'add_new_item'      => __( 'Add New Resource Type', 'md-healthstream' ),
			'new_item_name'     => __( 'New Resource Type Name', 'md-healthstream' ),
			'menu_name'         => __( 'Resource Type', 'md-healthstream' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Resource Type', 'md-healthstream' ),
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
		register_taxonomy( 'resource-type', array( 'resources' ), $args );

		// Register Taxonomy Solution.
		$labels = array(
			'name'              => _x( 'Solutions', 'taxonomy general name', 'md-healthstream' ),
			'singular_name'     => _x( 'Solution', 'taxonomy singular name', 'md-healthstream' ),
			'search_items'      => __( 'Search Solutions', 'md-healthstream' ),
			'all_items'         => __( 'All Solutions', 'md-healthstream' ),
			'parent_item'       => __( 'Parent Solution', 'md-healthstream' ),
			'parent_item_colon' => __( 'Parent Solution:', 'md-healthstream' ),
			'edit_item'         => __( 'Edit Solution', 'md-healthstream' ),
			'update_item'       => __( 'Update Solution', 'md-healthstream' ),
			'add_new_item'      => __( 'Add New Solution', 'md-healthstream' ),
			'new_item_name'     => __( 'New Solution Name', 'md-healthstream' ),
			'menu_name'         => __( 'Solution', 'md-healthstream' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Solution', 'md-healthstream' ),
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

		register_taxonomy( 'solution', array( 'resources' ), $args );

		// Register Taxonomy Topic.
		$labels = array(
			'name'              => _x( 'Topics', 'taxonomy general name', 'md-healthstream' ),
			'singular_name'     => _x( 'Topic', 'taxonomy singular name', 'md-healthstream' ),
			'search_items'      => __( 'Search Topics', 'md-healthstream' ),
			'all_items'         => __( 'All Topics', 'md-healthstream' ),
			'parent_item'       => __( 'Parent Topic', 'md-healthstream' ),
			'parent_item_colon' => __( 'Parent Topic:', 'md-healthstream' ),
			'edit_item'         => __( 'Edit Topic', 'md-healthstream' ),
			'update_item'       => __( 'Update Topic', 'md-healthstream' ),
			'add_new_item'      => __( 'Add New Topic', 'md-healthstream' ),
			'new_item_name'     => __( 'New Topic Name', 'md-healthstream' ),
			'menu_name'         => __( 'Topic', 'md-healthstream' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Topic', 'md-healthstream' ),
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

		register_taxonomy( 'topic', array( 'resources' ), $args );
	}

	/**
	 * Add Image Field to Taxonomy.
	 *
	 * @param string $taxonomy Taxonomy.
	 * @return void
	 * @since 1.0.0
	 */
	public function add_image_field_to_taxonomy( $taxonomy ): void {
		?>
		<div class="form-field term-group">
			<label for="resource-type-image-id"><?php esc_html_e( 'Image', 'md-healthstream' ); ?></label>
			<input type="hidden" id="resource-type-image-id" name="resource-type-image-id" class="custom_media_url" value="">
			<div id="resource-type-image-wrapper"></div>
			<p>
				<input type="button" class="button button-secondary resource-type-image-upload" id="resource-type-image-upload" name="resource-type-image-upload" value="<?php esc_html_e( 'Add Image', 'md-healthstream' ); ?>" />
				<input type="button" class="button button-secondary resource-type-image-remove" id="resource-type-image-remove" name="resource-type-image-remove" value="<?php esc_html_e( 'Remove Image', 'md-healthstream' ); ?>" />
			</p>
		</div>
		<script>
			jQuery(document).ready(function($) {
				// Upload Image.
				$('#resource-type-image-upload').click(function() {
					var send_attachment_bkp = wp.media.editor.send.attachment;
					var button = $(this);
					wp.media.editor.send.attachment = function(props, attachment) {
						$('.custom_media_url').val(attachment.id);
						$('#resource-type-image-wrapper').html('<img src="' + attachment.url + '" style="max-width:100%;"/>');
						wp.media.editor.send.attachment = send_attachment_bkp;
					}
					wp.media.editor.open(button);
					return false;
				});

				// Remove Image.
				$('#resource-type-image-remove').click(function() {
					$('.custom_media_url').val('');
					$('#resource-type-image-wrapper').html('');
				});
			});
		</script>
		<?php
	}

	/**
	 * Save Taxonomy Image.
	 *
	 * @param int $term_id Term ID.
	 * @return void
	 * @since 1.0.0
	 */
	public function save_taxonomy_image( $term_id ): void {
		if ( isset( $_POST['resource-type-image-id'] ) && '' !== $_POST['resource-type-image-id'] ) {
			$image = $_POST['resource-type-image-id'];
			add_term_meta( $term_id, 'resource-type-image-id', $image, true );
		}
	}

	/**
	 * Edit Taxonomy Image.
	 *
	 * @param object $term Term.
	 * @return void
	 * @since 1.0.0
	 */
	public function edit_taxonomy_image( $term ): void {
		$image_id = get_term_meta( $term->term_id, 'resource-type-image-id', true );
		?>
		<tr class="form-field term-group-wrap">
			<th scope="row">
				<label for="resource-type-image-id"><?php esc_html_e( 'Image', 'md-healthstream' ); ?></label>
			</th>
			<td>
				<input type="hidden" id="resource-type-image-id" name="resource-type-image-id" class="custom_media_url" value="<?php echo esc_attr( $image_id ); ?>">
				<div id="resource-type-image-wrapper">
					<?php if ( $image_id ) : ?>
						<img src="<?php echo esc_url( wp_get_attachment_url( $image_id ) ); ?>" style="max-width:100%;" />
					<?php endif; ?>
				</div>
				<p>
					<input type="button" class="button button-secondary resource-type-image-upload" id="resource-type-image-upload" name="resource-type-image-upload" value="<?php echo ( $image_id ) ? esc_attr( 'Change Image', 'md-healthstream' ) : esc_attr( 'Add Image', 'md-healthstream' ); ?>" />
					<input type="button" class="button button-secondary resource-type-image-remove" id="resource-type-image-remove" name="resource-type-image-remove" value="<?php echo esc_attr( 'Remove Image', 'md-healthstream' ); ?>" />
				</p>
			</td>
		</tr>
		<script>
			jQuery(document).ready(function($) {
				// Upload Image.
				$('#resource-type-image-upload').click(function() {
					var send_attachment_bkp = wp.media.editor.send.attachment;
					var button = $(this);
					wp.media.editor.send.attachment = function(props, attachment) {
						$('.custom_media_url').val(attachment.id);
						$('#resource-type-image-wrapper').html('<img src="' + attachment.url + '" style="max-width:100%;"/>');
						wp.media.editor.send.attachment = send_attachment_bkp;
					}
					wp.media.editor.open(button);
					return false;
				});

				// Remove Image.
				$('#resource-type-image-remove').click(function() {
					$('.custom_media_url').val('');
					$('#resource-type-image-wrapper').html('');
				});
			});
		</script>
		<?php
	}

	/**
	 * Update Taxonomy Image.
	 *
	 * @param int $term_id Term ID.
	 * @return void
	 * @since 1.0.0
	 */
	public function update_taxonomy_image( $term_id ): void {
		if ( isset( $_POST['resource-type-image-id'] ) && '' !== $_POST['resource-type-image-id'] ) {
			$image = $_POST['resource-type-image-id'];
			update_term_meta( $term_id, 'resource-type-image-id', $image );
		} else {
			update_term_meta( $term_id, 'resource-type-image-id', '' );
		}
	}

	/**
	 * Enqueue Media.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function enqueue_media(): void {
		wp_enqueue_media();
	}
}
