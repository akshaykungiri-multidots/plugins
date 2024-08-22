<?php
/**
 * Title: Post Sidebar
 * Slug: md-foursquare/post-sidebar
 * Categories: sidebar
 * Block Types: core/template-part/post-sidebar
 *
 * @package md-foursquare
 */

?>
<!-- wp:group -->
<div class="wp-block-group md-foursquare-post-sidebar"><!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:heading -->
<h2>
	<?php esc_html_e( 'More On', 'md-foursquare' ); ?>
	<?php echo get_the_term_list( get_the_ID(), 'category', '', ', ', '' ); ?>
</h2>
<!-- /wp:heading -->
</div>
<!-- /wp:group -->

<!-- wp:group -->
<div class="wp-block-group">
	<?php
	$args = array(
		'posts_per_page' => 3,
		'post__not_in'   => array( get_the_ID() ),
		'category__in'   => wp_get_post_categories( get_the_ID() ),
	);
	$related_posts = new WP_Query( $args );
	if ( $related_posts->have_posts() ) :
		while ( $related_posts->have_posts() ) :
			$related_posts->the_post();
			?>
			<!-- wp:group -->
			<div class="wp-block-group">
				<div class="wp-block-categories">
					<?php
					// Display the post categories.
					the_category( ', ' );
					?>
				</div>
				<div class="wp-block-post-date">
					<?php
					// Display the post date.
					echo get_the_date();
					?>
				</div>
				<?php 
				// Display the post title.
				the_title( '<h3>', '</h3>' );
				?>
				<div class="wp-block-post-readmore">
					<a href="<?php the_permalink(); ?>">
						<?php esc_html_e( 'Learn More >', 'md-foursquare' ); ?>
					</a>
				</div>
			</div>
			<!-- /wp:group -->
			<?php
		endwhile;
	endif;
	?>
</div>
<!-- /wp:group -->

<!-- wp:spacer {"height":"var(\u002d\u002dwp\u002d\u002dpreset\u002d\u002dspacing\u002d\u002d20)"} -->
<div style="height:var(--wp--preset--spacing--20)" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:group -->