<?php
/**
 * Registers the md-efi/md-search-results-counter block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-efi
 */

namespace MD_EFI\Blocks;

use MD_EFI\Includes\Block_Base;
use WP_Block;
use WP_Query;

/**
 *  Class for the md-efi/md-search-results-counter block.
 */
class MD_Search_Results_Counter extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-search-results-counter';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {
		add_filter( 'md_fiery_shop_gutenberg_blocks_config', array( $this, 'localize_block_data' ) );

		add_action( 'pre_get_posts', array( $this, 'search_results_counter' ) );
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
		$heading = isset( $attributes['heading'] ) ? $attributes['heading'] : '';

		$post_type_counts = get_query_var('post_type_counts', []);

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="md-search-results-counter">
				<?php if ( ! empty( $heading ) ) : ?>
					<h3><?php echo esc_html( $heading ); ?></h3>
				<?php endif; ?>
				<?php 
				if ($post_type_counts) {
					echo '<ul class="search-result-counts">';
					foreach ($post_type_counts as $post_type => $count) {
						if ($post_type === 'all') {
							$post_type_name = 'All Results';
							$activeClass = ( !isset( $_GET['post_type'] ) ) ? 'active' : '';
							echo '<li class="' . esc_html($activeClass) . '"> <a href="' . esc_url( site_url() . '/?s=' . get_search_query() ) . '">' . esc_html($post_type_name) . " (" . esc_html($count) . ')</a></li>';
						} else {
							$post_type_name = ucfirst($post_type); // Adjust the name display if necessary
							echo '<li class="' . ( isset( $_GET['post_type'] ) && $_GET['post_type'] === $post_type ? 'active' : '' ) . '"> <a href="' . esc_url( site_url() . '/?s=' . get_search_query() . '&post_type=' . $post_type ) . '">' . esc_html($post_type_name) . " (" . esc_html($count) . ')</a></li>';
						}
					}
					echo '</ul>';
				}
				?>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}

	/**
	 * Search results counter.
	 *
	 * @param WP_Query $query Query object.
	 * @return void
	 */
	public function search_results_counter( $query ) {
		if ($query->is_search() && $query->is_main_query()) {
			// Array to store post type counts
			$post_type_counts = [];
	
			// Define the post types you want to count
			$post_types = ['all', 'post', 'page', 'resources']; // Add more if needed
	
			foreach ($post_types as $post_type) {
				if ($post_type === 'all') {
					$args = [
						'post_type'      => ['post', 'page', 'resources'],
						'posts_per_page' => -1, // Get all results
						's'             => $query->query_vars['s'], // The search term
					];
		
					$post_type_query = new WP_Query($args);
					$post_type_counts['all'] = $post_type_query->found_posts;
					continue;
				}

				$args = [
					'post_type'      => $post_type,
					'posts_per_page' => -1, // Get all results
					's'             => $query->query_vars['s'], // The search term
				];
	
				$post_type_query = new WP_Query($args);
				$post_type_counts[$post_type] = $post_type_query->found_posts;
			}
	
			// Store the result counts in a global variable or use a custom function to return them
			set_query_var('post_type_counts', $post_type_counts);
		}
	}
}
