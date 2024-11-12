<?php
/**
 * Title: Post Sidebar
 * Slug: md-pointcentral-fse/post-sidebar
 * Categories: sidebar
 * Block Types: core/template-part/post-sidebar
 *
 * @package md-pointcentral-fse
 */

?>
<!-- wp:group -->
<div class="wp-block-group">
	<!-- wp:search {"label":"","showLabel":false,"placeholder":" Search","width":100,"widthUnit":"%","buttonText":"Search","buttonUseIcon":true,"backgroundColor":"primary","textColor":"light"} /-->

	<!-- wp:spacer {"height":"var(--wp--preset--spacing--10)"} -->
	<div style="height:var(--wp--preset--spacing--10)" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->
</div>
<!-- /wp:group -->

<!-- wp:group -->
<div class="wp-block-group">
	<!-- wp:group {"layout":{"inherit":true,"type":"constrained"}} -->
	<div class="wp-block-group">
		<!-- wp:heading -->
		<h2 class="wp-block-heading"><?php echo esc_html__( 'Recent Posts', 'md-pointcentral-fse' ); ?></h2>
		<!-- /wp:heading -->
	</div>
	<!-- /wp:group -->

	<!-- wp:group -->
	<div class="wp-block-group">
		<!-- wp:latest-posts {"displayPostDate":true,"displayFeaturedImage":true,"featuredImageAlign":"left","featuredImageSizeWidth":75,"featuredImageSizeHeight":75} /-->
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
		<h2 class="wp-block-heading"><?php echo esc_html__( 'Recent Comments', 'md-pointcentral-fse' ); ?></h2>
		<!-- /wp:heading -->
	</div>
	<!-- /wp:group -->

	<!-- wp:group -->
	<div class="wp-block-group">
		<!-- wp:latest-comments {"displayAvatar":false,"displayDate":false,"displayExcerpt":false} /-->
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
		<h2 class="wp-block-heading"><?php echo esc_html__( 'Categorise', 'md-pointcentral-fse' ); ?></h2>
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
		<h2 class="wp-block-heading"><?php echo esc_html__( 'Archive', 'md-pointcentral-fse' ); ?></h2>
		<!-- /wp:heading -->
	</div>
	<!-- /wp:group -->

	<!-- wp:group -->
	<div class="wp-block-group">
		<!-- wp:archives /-->
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
		<h2 class="wp-block-heading"><?php echo esc_html__( 'Tags', 'md-pointcentral-fse' ); ?></h2>
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
