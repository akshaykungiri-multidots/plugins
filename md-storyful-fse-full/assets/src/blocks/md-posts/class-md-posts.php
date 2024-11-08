<?php
/**
 * Registers the md-storyful-fse-full/md-posts block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-storyful-fse-full
 */

namespace MD_STORYFUL_FSE_FULL\Blocks;

use MD_STORYFUL_FSE_FULL\Includes\Block_Base;
use WP_Block;

/**
 *  Class for the md-storyful-fse-full/md-posts block.
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
		add_filter( 'md_storyful_fse_full_gutenberg_blocks_config', array( $this, 'localize_block_data' ) );

		add_action( 'wp_ajax_storyful_get_resources', array( $this, 'storyful_get_resources' ) );
		add_action( 'wp_ajax_nopriv_storyful_get_resources', array( $this, 'storyful_get_resources' ) );
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

		$postType = ( isset( $attributes['postType'] ) ) ? $attributes['postType'] : 'post';
		$post_cat = "";
        $filter_by_date = "";
        $page_number = 1;
        $search_val = "";
		$resource_type = "";
		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="storyful-resources storyful-posts">
				<div class="storyful-resources__container">
					<?php require_once get_template_directory() . '/assets/src/blocks/md-posts/templates/post-template.php'; ?>
				</div>
				<input type="hidden" class="resources-attributes" value='<?php echo wp_json_encode($attributes); ?>'>
				<input type="hidden" class="storyful_post_type" value="<?php echo esc_attr( $postType ); ?>" />
			</div>
		</div>
		<?php
		return ob_get_clean();
	}

	/**
	 * Function is used to get resources.
	 */
	public function storyful_get_resources() {
		// Check if nonce is set.
		if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['nonce'] ) ), 'storyful_get_resources' ) ) {
			wp_send_json_error( array( 'message' => 'Invalid nonce' ) );
		}
		$attributes = array();
		$postType = isset( $_POST['postType'] ) ? sanitize_text_field( wp_unslash( $_POST['postType'] ) ) : 'post';
		if ( isset( $_POST['resourcesAtts'] ) && !empty( $_POST['resourcesAtts'] ) ) {
			$attributes = json_decode( stripslashes( sanitize_text_field( wp_unslash( $_POST['resourcesAtts'] ) ) ), true );
		}
		$post_cat = isset( $_POST['resourcesCat'] ) ? sanitize_text_field( wp_unslash( $_POST['resourcesCat'] ) ) : '';
		$filter_by_date = isset( $_POST['filterByDate'] ) ? sanitize_text_field( wp_unslash( $_POST['filterByDate'] ) ) : '';
		$page_number = isset( $_POST['pageNumber'] ) ? sanitize_text_field( wp_unslash( $_POST['pageNumber'] ) ) : 1;
		$search_val = isset( $_POST['searchVal'] ) ? sanitize_text_field( wp_unslash( $_POST['searchVal'] ) ) : '';
		$resource_type = '';
		if ( $postType === 'resources' ) {
			$resource_type = isset( $_POST['resourceType'] ) ? sanitize_text_field( wp_unslash( $_POST['resourceType'] ) ) : '';
		}
		require_once get_template_directory() . '/assets/src/blocks/md-posts/templates/post-template.php';
		die();
	}
}
