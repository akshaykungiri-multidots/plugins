<?php
/**
 * Title: Hidden No Results Content
 * Slug: md-fiery/hidden-no-results-content
 * Inserter: no
 *
 * @package md-fiery
 */

?>
<!-- wp:paragraph -->
<p>
<?php echo esc_html_x( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'Message explaining that there are no results returned from a search', 'md-fiery' ); ?>
</p>
<!-- /wp:paragraph -->

<!-- wp:search {"label":"<?php echo esc_html_x( 'Search', 'label', 'md-fiery' ); ?>","placeholder":"<?php echo esc_attr_x( 'Search...', 'placeholder for search field', 'md-fiery' ); ?>","showLabel":false,"buttonText":"<?php esc_attr_e( 'Search', 'md-fiery' ); ?>","buttonUseIcon":true} /-->