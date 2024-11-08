<?php
/**
 * Registers the md-efi-fse-full/press-release-date block.
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
 *  Class for the md-efi-fse-full/press-release-date block.
 */
class Press_Release_Date extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'press-release-date';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {
		add_filter( 'md_efi_fse_full_gutenberg_blocks_config', array( $this, 'localize_block_data' ) );
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

		// get string of attributes of the features that the block supports.
		$wrapper_attributes = get_block_wrapper_attributes();

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="press-release-date">
				<?php
				// Check if in editor or not
				if ( is_admin() ) {
					// Set default values.
					$press_release_date = '1st August 2021';
				} else {
					// Retrieve an existing value from the database.
					$press_release_date = get_post_meta( $post->ID, 'press_release_date', true );

					if ( !empty( $press_release_date ) ) {
						// get the date format from the settings.
						$press_release_date = gmdate( get_option( 'date_format' ), strtotime( $press_release_date ) );
					}
				}

				?>
				<p><?php echo esc_html( $press_release_date ); ?></p>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}
}
