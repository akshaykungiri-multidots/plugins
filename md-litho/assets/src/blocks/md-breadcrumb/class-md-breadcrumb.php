<?php
/**
 * Registers the md-litho/md-breadcrumb block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-litho
 */

namespace MD_LITHO\Blocks;

use MD_LITHO\Includes\Block_Base;
use WP_Block;

/**
 *  Class for the md-litho/md-breadcrumb block.
 */
class MD_Breadcrumb extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-breadcrumb';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {
		add_filter( 'md_litho_gutenberg_blocks_config', array( $this, 'localize_block_data' ) );
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

		global $post;

		// Define the breadcrumb separator
		$separator = ' <i class="fa fa-circle" aria-hidden="true"></i> ';

		// Start the breadcrumb trail with a link to the home page
		$breadcrumb = '<nav class="breadcrumb-block"><a href="' . esc_url( home_url() ) . '">Home</a>' . $separator;
	
		// If it's a category or single post
		if ( is_home() ) {
			$breadcrumb .= '<span>Blog</span>';
		} else if ( is_category() ) {
			$category = get_queried_object();
	
			if ( $category && ! is_wp_error( $category ) ) {
				// Add the category name to the breadcrumb
				$breadcrumb .= '<span>' . esc_html( $category->name ) . '</span>';
			}
	
		// If it's a single post page
		} else if ( is_single() ) {
			$category = get_the_category();
			if ( ! empty( $category ) ) {
				$breadcrumb .= '<a href="' . esc_url( get_category_link( $category[0]->term_id ) ) . '">' . esc_html( $category[0]->name ) . '</a>' . $separator;
			}
	
			if ( is_single() ) {
				$breadcrumb .= '<span>' . esc_html( get_the_title() ) . '</span>';
			}
	
		// If it's a page
		} elseif ( is_page() ) {
			if ( $post->post_parent ) {
				$parent = get_post( $post->post_parent );
				$breadcrumb .= '<a href="' . esc_url( get_permalink( $parent ) ) . '">' . esc_html( $parent->post_title ) . '</a>' . $separator;
			}
			$breadcrumb .= '<span>' . esc_html( get_the_title() ) . '</span>';
	
		// If it's the homepage or front page
		} elseif ( is_home() || is_front_page() ) {
			$breadcrumb .= '<span>Home</span>';
	
		// If it's an archive page
		} elseif ( is_archive() ) {
			$breadcrumb .= '<span>' . esc_html( post_type_archive_title( '', false ) ) . '</span>';
	
		// If it's a search results page
		} elseif ( is_search() ) {
			$breadcrumb .= '<span>Search results for: ' . get_search_query() . '</span>';
	
		// If it's a 404 page
		} elseif ( is_404() ) {
			$breadcrumb .= '<span>Page Not Found</span>';
		}
	
		// Close the breadcrumb
		$breadcrumb .= '</nav>';

		$html = "";
		ob_start();
		?>
		<div class="md-breadcrumb">
			<div class="md-breadcrumb__page-title">
				<?php echo wp_kses_post( get_the_title() ); ?>
			</div>
			<div class="md-breadcrumb__breadcrumb">
				<?php echo wp_kses_post( $breadcrumb ); ?>
			</div>
		</div>
		<?php
		$html .= ob_get_clean();
	
		// Return the breadcrumb
		return $html;
	}
}
