<?php
/**
 * Title: Hidden No Results Content
 * Slug: md-anitian-fse-full/hidden-no-results-content
 * Inserter: no
 *
 * @package md-anitian-fse-full
 */

?>
<!-- wp:paragraph -->
<p>
<?php echo esc_html_x( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'Message explaining that there are no results returned from a search', 'md-anitian-fse-full' ); ?>
</p>
<!-- /wp:paragraph -->

<!-- wp:search {"label":"<?php echo esc_html_x( 'Search', 'label', 'md-anitian-fse-full' ); ?>","placeholder":"<?php echo esc_attr_x( 'Search...', 'placeholder for search field', 'md-anitian-fse-full' ); ?>","showLabel":false,"buttonText":"<?php esc_attr_e( 'Search', 'md-anitian-fse-full' ); ?>","buttonUseIcon":true} /-->
