<?php

/**
 * Registers the md-resort/md-posts block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-resort
 */

namespace MD_RESORT\Blocks;

use MD_RESORT\Includes\Block_Base;
use WP_Block;

/**
 *  Class for the md-resort/md-posts block.
 */
class MD_Posts extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-posts';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks()
	{
		add_filter('md_resort_gutenberg_blocks_config', array($this, 'localize_block_data'));

		// Ajax hooks.
		add_action('wp_ajax_md_resort_load_more', array($this, 'md_resort_load_more'));
		add_action('wp_ajax_nopriv_md_resort_load_more', array($this, 'md_resort_load_more'));
	}

	/**
	 * Localize template data.
	 *
	 * @param array $blocks_config Block configuration.
	 * @return array Updated block configuration.
	 */
	public function localize_block_data(array $blocks_config): array
	{
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
		$postType = isset($attributes['postType']) ? sanitize_text_field($attributes['postType']) : 'post';
		$postsToShow = isset($attributes['postsToShow']) ? sanitize_text_field($attributes['postsToShow']) : 10;
		$enableFilter = isset($attributes['enableFilter']) ? sanitize_text_field($attributes['enableFilter']) : true;
		$current_page = 1;

		if ($postType === 'post') {
			$postsToShow -= 1;
		}

		// Get all texonomies of the post type.
		$taxonomies = get_object_taxonomies($postType, 'names');

		$exclude_taxonomies = array('post_tag', 'post_format');

		$taxonomies = array_diff($taxonomies, $exclude_taxonomies);

		$post_taxonomies = array();
		foreach ($taxonomies as $taxonomy) {
			$terms = get_terms(
				array(
					'taxonomy'   => $taxonomy,
					'hide_empty' => false,
				)
			);
			$post_taxonomies[$taxonomy] = $terms;
		}

		// Get the posts.
		$args = array(
			'post_type'      => $postType,
			'posts_per_page' => $postsToShow,
			'orderby'        => 'date',
			'order'          => 'DESC',
			'post_status'    => 'publish',
		);
		$query = new \WP_Query($args);
		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<div class="md-posts insights-filter-main <?php echo esc_attr($postType); ?>">
				<?php if ($enableFilter) : ?>
				<div class="products-list__search-container">
					<div class="products-list__search-text-wrapper">
						<input type="text" id="products-list__search-text" class="search-input products-list__search-input" placeholder="<?php esc_attr_e('Search', 'md-resort'); ?>">
						<button class="clear-btn products-list__search-text-reset-button" style="display: none;" ><?php esc_html_e('Close', 'md-resort'); ?></button>
					</div>
					<button class="search-btn products-list__search-button"><?php esc_html_e('Search', 'md-resort'); ?></button>
				</div>
				<div class="insights-filter-dropbox-main">
					<div class="insights-filter-dropbox">
						<?php
						// Display Taxonomies.
						foreach ($post_taxonomies as $taxonomy => $terms) {
						?>
							<div class="category-filter-wrapper">
								<select class="category-filter" name="<?php echo esc_attr($taxonomy); ?>">
									<option value=""><?php echo esc_html('Select ' . get_taxonomy($taxonomy)->label); ?></option>
									<?php
									foreach ($terms as $term) {
									?>
										<option value="<?php echo esc_attr($term->term_id); ?>"><?php echo esc_html($term->name); ?></option>
									<?php
									}
									?>
								</select>
							</div>
						<?php
						}
						?>
						<button class="md-reset-filter products-list__reset-button"><?php esc_html_e('Reset Filter', 'md-resort'); ?></button>
					</div>
				</div>
				<?php endif; ?>
				<div class="insights-results-main">
					<?php if ($query->have_posts()) : ?>
						<div class="md-posts__grid">
							<?php 
							if ($postType === 'service') {
								include get_stylesheet_directory() . '/assets/src/blocks/md-posts/templates/service-template.php';
							} else {
								include get_stylesheet_directory() . '/assets/src/blocks/md-posts/templates/post-template.php'; 
							}
							?>
						</div>
						<?php // Display Load More button. 
						?>
						<input type="hidden" name="md-posts__loadmore-attributes" value='<?php echo wp_json_encode($attributes); ?>'>
					<?php else : ?>
						<p><?php esc_html_e('No posts found.', 'md-resort'); ?></p>
					<?php endif; ?>
				</div>
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
	public function md_resort_load_more()
	{
		// Check nonce.
		if (! isset($_POST['ajax_nonce']) || ! wp_verify_nonce(sanitize_key($_POST['ajax_nonce']), 'loadmore_post_nonce')) {
			wp_send_json_error('Invalid Nonce');
		}

		$attributes = isset($_POST['post_attributes']) ? json_decode(wp_unslash($_POST['post_attributes']), true) : array();
		$post_type = isset($attributes['postType']) ? sanitize_text_field(wp_unslash($attributes['postType'])) : 'post';
		$posts_per_page = isset($attributes['postsToShow']) ? sanitize_text_field(wp_unslash($attributes['postsToShow'])) : 10;
		$current_page = isset($_POST['current_page']) ? sanitize_text_field(wp_unslash($_POST['current_page'])) : 0;
		$taxonomies = isset($_POST['taxonomies']) ? wp_unslash($_POST['taxonomies']) : array();
		$searchVal = isset($_POST['search']) ? sanitize_text_field(wp_unslash($_POST['search'])) : '';

		// Get the posts.
		$args = array(
			'post_type'      => $post_type,
			'posts_per_page' => $posts_per_page,
			'orderby'        => 'date',
			'order'          => 'DESC',
			'post_status'    => 'publish',
			'paged'          => $current_page,
			's'              => $searchVal,
		);

		$taxonomies_cond = array();
		if (! empty($taxonomies) && is_array($taxonomies)) {
			foreach ($taxonomies as $value) {
				if (empty($value['term'])) {
					continue;
				}
				$taxonomies_val = $value['taxonomy'];
				if (! isset($taxonomies_cond[$taxonomies_val])) {
					$taxonomies_cond[$taxonomies_val] = array();
				}
				$taxonomies_cond[$taxonomies_val][] = $value['term'];
			}
		}

		if (! empty($taxonomies_cond)) {
			$args['tax_query'] = array(
				'relation' => 'AND',
			);
			foreach ($taxonomies_cond as $taxonomy => $terms) {
				$args['tax_query'][] = array(
					'taxonomy' => $taxonomy,
					'field'    => 'term_id',
					'terms'    => $terms,
				);
			}
		}

		$query = new \WP_Query($args);

		ob_start();

		if ($post_type === 'service') {
			include get_stylesheet_directory() . '/assets/src/blocks/md-posts/templates/service-template.php';
		} else {
			include get_stylesheet_directory() . '/assets/src/blocks/md-posts/templates/post-template.php'; 
		}

		$data = ob_get_clean();
		if ($query->max_num_pages > $current_page) {
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
