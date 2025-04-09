<?php
/**
 * Title: Hidden No Results Content
 * Slug: md-resort/hidden-no-results-content
 * Inserter: no
 *
 * @package md-resort
 */

?>
<!-- wp:paragraph -->
<p>
<?php echo esc_html_x( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'Message explaining that there are no results returned from a search', 'md-resort' ); ?>
</p>
<!-- /wp:paragraph -->

<!-- wp:search {"label":"<?php echo esc_html_x( 'Search', 'label', 'md-resort' ); ?>","placeholder":"<?php echo esc_attr_x( 'Search...', 'placeholder for search field', 'md-resort' ); ?>","showLabel":false,"buttonText":"<?php esc_attr_e( 'Search', 'md-resort' ); ?>","buttonUseIcon":true} /-->
