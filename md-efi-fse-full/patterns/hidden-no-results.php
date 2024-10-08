<?php
/**
 * Title: Hidden No Results Content
 * Slug: md-efi-fse-full/hidden-no-results-content
 * Inserter: no
 *
 * @package md-efi-fse-full
 */

?>
<!-- wp:paragraph -->
<p>
<?php echo esc_html_x( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'Message explaining that there are no results returned from a search', 'md-efi-fse-full' ); ?>
</p>
<!-- /wp:paragraph -->

<!-- wp:search {"label":"<?php echo esc_html_x( 'Search', 'label', 'md-efi-fse-full' ); ?>","placeholder":"<?php echo esc_attr_x( 'Search...', 'placeholder for search field', 'md-efi-fse-full' ); ?>","showLabel":false,"buttonText":"<?php esc_attr_e( 'Search', 'md-efi-fse-full' ); ?>","buttonUseIcon":true} /-->
