<?php
/**
 * Register Dynamic Sample Block.
 *
 * @package md-prime
 */


namespace MD_Prime\Inc\Blocks;

use MD_Prime\Inc\Traits\Singleton;

/**
 * Class for register blocks.
 */
class Block_Sample_Dynamic {

	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct() {
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
		 *  Action to register block.
		 */
		add_action( 'init', array( $this, 'register_block' ) );
	}

	/**
	 * Register block.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_block() {
		register_block_type( MD_PRIME_PATH . '/assets/build/js/blocks/sample' );
			register_block_type(
				MD_PRIME_PATH . '/assets/build/js/blocks/sample-dynamic',
				array(
					'render_callback' => array( $this, 'render_callback' ),
				)
			);

	}

	/**
	 * Render Callback
	 *
	 * @param attributes $attributes block attributes.
	 *
	 * @return string $html
	 * @since 1.0.0
	 */
	public function render_callback( $attributes ) {

		$class_name = 'wp-block-sample-dynamic';
		$heading    = ! empty( $attributes['heading'] ) ? $attributes['heading'] : '';

		ob_start();
		?>
		<div class="<?php echo esc_attr( $class_name ); ?>">
			<?php if ( ! empty( $heading ) ) : ?>
				<h2><?php echo esc_html( $heading ); ?></h2>
			<?php endif; ?>
		</div>
		<?php
		$html = ob_get_clean();
		return $html;
	}
}
