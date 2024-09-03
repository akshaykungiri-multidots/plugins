<?php
/**
 * Title: Sidebar
 * Slug: md-shockerhitch/default-sidebar
 * Categories: sidebar
 * Block Types: core/template-part/sidebar
 *
 * @package md-shockerhitch
 */

?>
<!-- wp:group -->
<div class="wp-block-group">
	<!-- wp:search {"label":"","showLabel":false,"placeholder":" Search","width":100,"widthUnit":"%","buttonText":"Search","buttonUseIcon":true,"backgroundColor":"primary","textColor":"light"} /-->

	<!-- wp:spacer {"height":"var(--wp--preset--spacing--20)"} -->
	<div style="height:var(--wp--preset--spacing--20)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->
</div>
<!-- /wp:group -->

<!-- wp:group -->
<div class="wp-block-group">
	<!-- wp:group {"layout":{"inherit":true,"type":"constrained"}} -->
	<div class="wp-block-group">
		<!-- wp:heading -->
		<h2 class="wp-block-heading"><?php echo esc_html__( 'Categorise', 'md-shockerhitch' ); ?></h2>
		<!-- /wp:heading -->
	</div>
	<!-- /wp:group -->

	<!-- wp:group -->
	<div class="wp-block-group">
		<!-- wp:categories /-->
	</div>
	<!-- /wp:group -->

	<!-- wp:spacer {"height":"var(--wp--preset--spacing--20)"} -->
	<div style="height:var(--wp--preset--spacing--20)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->
</div>
<!-- /wp:group -->

<!-- wp:group -->
<div class="wp-block-group">
	<!-- wp:group {"layout":{"inherit":true,"type":"constrained"}} -->
	<div class="wp-block-group">
		<!-- wp:heading -->
		<h2 class="wp-block-heading"><?php echo esc_html__( 'Tags', 'md-shockerhitch' ); ?></h2>
		<!-- /wp:heading -->
	</div>
	<!-- /wp:group -->

	<!-- wp:group -->
	<div class="wp-block-group">
		<!-- wp:tag-cloud /-->
	</div>
	<!-- /wp:group -->

	<!-- wp:spacer {"height":"var(--wp--preset--spacing--20)"} -->
	<div style="height:var(--wp--preset--spacing--20)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->
</div>
<!-- /wp:group -->