<?php
/**
 * Title: Hidden No Results Content
 * Slug: md-pointcentral-fse/hidden-no-results-content
 * Inserter: no
 *
 * @package md-pointcentral-fse
 */

?>
<!-- wp:paragraph -->
<p>
<?php echo esc_html_x( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'Message explaining that there are no results returned from a search', 'md-pointcentral-fse' ); ?>
</p>
<!-- /wp:paragraph -->

<!-- wp:search {"label":"<?php echo esc_html_x( 'Search', 'label', 'md-pointcentral-fse' ); ?>","placeholder":"<?php echo esc_attr_x( 'Search...', 'placeholder for search field', 'md-pointcentral-fse' ); ?>","showLabel":false,"buttonText":"<?php esc_attr_e( 'Search', 'md-pointcentral-fse' ); ?>","buttonUseIcon":true} /-->
