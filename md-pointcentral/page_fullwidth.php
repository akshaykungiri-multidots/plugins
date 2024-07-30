<?php
/**
 * Template Name: Full Width Page
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package md-pointcentral
 */

get_header();
?>

	<main id="primary" class="site-main md-pointcentral-main u-padding-t80">
		<div class="full_width">
			<div class="u-flex-columns">
				<div class="u-flex-column">
					<?php
					while ( have_posts() ) :
						the_post();

						the_content();

					endwhile; // End of the loop.
					?>
				</div>
			</div>
		</div>	
	</main><!-- #main -->

<?php
get_footer();
