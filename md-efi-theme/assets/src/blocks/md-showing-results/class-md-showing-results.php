<?php
/**
 * Registers the md-efi/md-showing-results block.
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

/**
 *  Class for the md-efi/md-showing-results block.
 */
class MD_Showing_Results extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-showing-results';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {
		add_filter( 'md_efi_gutenberg_blocks_config', array( $this, 'localize_block_data' ) );
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

		global $wp_query;

		ob_start();
		?>
		<div class="md-showing-results" >
			<?php
			if ($wp_query->found_posts > 0) {
				$paged = max(1, get_query_var('paged'));
				$posts_per_page = $wp_query->get('posts_per_page');
				$total_results = $wp_query->found_posts;
				$start = ($paged - 1) * $posts_per_page + 1;
				$end = min($paged * $posts_per_page, $total_results);

				echo sprintf(
					'<div class="showing-results">Showing %d&ndash;%d of %d results</div>',
					esc_html($start),
					esc_html($end),
					esc_html($total_results)
				);
			} else {
				echo '<div class="showing-results">No results found</div>';
			}
			?>
		</div>
		<?php
		return ob_get_clean();
	}
}
