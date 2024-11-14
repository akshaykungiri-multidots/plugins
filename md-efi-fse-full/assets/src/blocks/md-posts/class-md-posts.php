<?php
/**
 * Registers the md-efi-fse-full/md-posts block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-efi-fse-full
 */

namespace MD_EFI_FSE_FULL\Blocks;

use MD_EFI_FSE_FULL\Includes\Block_Base;
use WP_Block;

/**
 *  Class for the md-efi-fse-full/md-posts block.
 */
class MD_Posts extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-posts';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {
		add_filter( 'md_efi_fse_full_gutenberg_blocks_config', array( $this, 'localize_block_data' ) );

		// Ajax hooks.
		add_action( 'wp_ajax_md_efi_fse_full_load_more', array( $this, 'md_efi_fse_full_load_more' ) );
		add_action( 'wp_ajax_nopriv_md_efi_fse_full_load_more', array( $this, 'md_efi_fse_full_load_more' ) );
	}

	/**
	 * Localize template data.
	 *
	 * @param array $blocks_config Block configuration.
	 * @return array Updated block configuration.
	 */
	public function localize_block_data( array $blocks_config ): array {
		// Merge your block data into blocks_config.
		return array_merge(
			$blocks_config,
			array(
				'sample_dynamic_block_config' => array(
					'data_key' => 'data_value',
				),
			)
		);
	}

	/**
	 * Render block.
	 *
	 * @param array    $attributes   Block attributes.
	 * @param string   $content      Block content.
	 * @param WP_Block $block        Block object.
	 * @return string
	 */
	public function render_callback(
		// phpcs:disable VariableAnalysis.CodeAnalysis.VariableAnalysis.UnusedVariable
		array $attributes,
		string $content,
		WP_Block $block
		// phpcs:enable
	): string {

		// get string of attributes of the features that the block supports.
		$wrapper_attributes = get_block_wrapper_attributes();

		// attributes.
		$postType = isset( $attributes['postType'] ) ? $attributes['postType'] : 'post';
		$postsToShow = isset( $attributes['postsToShow'] ) ? $attributes['postsToShow'] : '';
		$postInRow = isset( $attributes['postInRow'] ) ? $attributes['postInRow'] : '';
		$showLoadMore = isset( $attributes['showLoadMore'] ) ? $attributes['showLoadMore'] : ''; 
		
		// Get all texonomies of the post type.
		$taxonomies = get_object_taxonomies( $postType, 'names' );

		$exclude_taxonomies = array( 'post_tag', 'post_format' );

		$taxonomies = array_diff( $taxonomies, $exclude_taxonomies );

		$post_taxonomies = array();
		foreach ( $taxonomies as $taxonomy ) {
			$terms = get_terms(
				array(
					'taxonomy'   => $taxonomy,
					'hide_empty' => false,
				)
			);
			$post_taxonomies[ $taxonomy ] = $terms;
		}

		// Get the posts.
		$args = array(
			'post_type'      => $postType,
			'posts_per_page' => $postsToShow,
			'orderby'        => 'date',
			'order'          => 'DESC',
			'post_status'    => 'publish',
		);
		$query = new \WP_Query( $args );
		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="md-posts <?php echo esc_attr( $postType ); ?>">
				<div class="md-posts__filter">
					<?php 
					foreach ( $post_taxonomies as $taxonomy => $terms ) {
						?>
						<select class="md-posts__filter-select" name="<?php echo esc_attr( $taxonomy ); ?>">
							<option value=""><?php echo esc_html( get_taxonomy( $taxonomy )->label ); ?></option>
							<?php
							foreach ( $terms as $term ) {
								?>
								<option value="<?php echo esc_attr( $term->term_id ); ?>"><?php echo esc_html( $term->name ); ?></option>
								<?php
							}
							?>
						</select>
						<?php
					}
					?>
				</div>
				<?php if ( $query->have_posts() ) : ?>
					<div class="md-posts__grid" style="grid-template-columns: repeat(<?php echo esc_attr( $postInRow ); ?>, 1fr);">
						<?php include get_stylesheet_directory() . '/assets/src/blocks/md-posts/templates/post-template.php'; ?>
					</div>
					<?php // Display Load More button. ?>
					<input type="hidden" name="md-posts__loadmore-post_attributes" value="<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>">
					<input type="hidden" name="md-posts__loadmore-current_page" value="1">
					<?php if ( $query->max_num_pages > 1 && $showLoadMore ) : ?>
						<div class="md-posts__loadmore">
							<a href="javascript:void(0);" class="md-posts__loadmore-button btn-main" data-page="1" data-post-type="<?php echo esc_attr( $postType ); ?>" data-posts-per-page="<?php echo esc_attr( $postsToShow ); ?>" data-post-in-row="<?php echo esc_attr( $postInRow ); ?>">
								<?php esc_html_e( 'Load More', 'md-efi-fse-full' ); ?>
							</a>
						</div>
					<?php endif; ?>
				<?php else : ?>
					<p><?php esc_html_e( 'No posts found.', 'md-efi-fse-full' ); ?></p>
				<?php endif; ?>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}

	/**
	 * Load more post.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function md_efi_fse_full_load_more() {
		// Check nonce.
		if ( ! isset( $_POST['ajax_nonce'] ) || ! wp_verify_nonce( sanitize_key( $_POST['ajax_nonce'] ), 'loadmore_post_nonce' ) ) {
			wp_send_json_error( 'Invalid Nonce' );
		}

		$post_attributes = isset( $_POST['post_attributes'] ) ? sanitize_text_field( wp_unslash( $_POST['post_attributes'] ) ) : '';
		$attributes = json_decode( $post_attributes, true );
		$post_type = isset( $attributes['postType'] ) ? $attributes['postType'] : 'post';
		$posts_per_page = isset( $attributes['postsToShow'] ) ? $attributes['postsToShow'] : '';
		
		$current_page = isset( $_POST['current_page'] ) ? sanitize_text_field( wp_unslash( $_POST['current_page'] ) ) : 0;
		$taxonomies = isset( $_POST['taxonomies'] ) ? wp_unslash( $_POST['taxonomies'] ) : array();
		$current_page++;

		// Get the posts.
		$args = array(
			'post_type'      => $post_type,
			'posts_per_page' => $posts_per_page,
			'orderby'        => 'date',
			'order'          => 'DESC',
			'post_status'    => 'publish',
			'paged'          => $current_page,
		);

		if ( ! empty( $taxonomies ) && is_array( $taxonomies ) ) {
			foreach ( $taxonomies as $value ) {
				if ( empty( $value['term'] ) ) {
					continue;
				}
				$args['tax_query'][] = array(
					'taxonomy' => $value['taxonomy'],
					'field'    => 'term_id',
					'terms'    => $value['term'],
				);
			}
		}

		$query = new \WP_Query( $args );

		ob_start();
		
		include get_stylesheet_directory() . '/assets/src/blocks/md-posts/templates/post-template.php';
		
		$data = ob_get_clean();
		

		// Check to display more button.
		if ( $query->max_num_pages > $current_page ) {
			$more = true;
		} else {
			$more = false;
		}

		wp_send_json_success(
			array(
				'data'         => $data,
				'current_page' => $current_page,
				'more'         => $more,
			)
		);

	}
}
