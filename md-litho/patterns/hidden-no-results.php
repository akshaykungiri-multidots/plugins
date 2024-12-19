<?php
/**
 * Title: Hidden No Results Content
 * Slug: md-litho/hidden-no-results-content
 * Inserter: no
 *
 * @package md-litho
 */

?>
<!-- wp:paragraph -->
<p>
<?php echo esc_html_x( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'Message explaining that there are no results returned from a search', 'md-litho' ); ?>
</p>
<!-- /wp:paragraph -->

<!-- wp:search {"label":"<?php echo esc_html_x( 'Search', 'label', 'md-litho' ); ?>","placeholder":"<?php echo esc_attr_x( 'Search...', 'placeholder for search field', 'md-litho' ); ?>","showLabel":false,"buttonText":"<?php esc_attr_e( 'Search', 'md-litho' ); ?>","buttonUseIcon":true} /-->
