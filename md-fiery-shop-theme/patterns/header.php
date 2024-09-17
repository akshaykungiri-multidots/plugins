<?php
/**
 * Title: Header
 * Slug: md-fiery-shop/header
 * Categories: header
 * Block Types: core/template-part/header
 *
 * @package md-fiery-shop
 */

?>
<!-- wp:group {"className":"has-global-padding md-fiery-shop-header","style":{"spacing":{"padding":{"top":"0","bottom":"0"}},"elements":{"link":{"color":{"text":"var:preset|color|contrast"}}}},"backgroundColor":"dark-blue","textColor":"contrast","layout":{"type":"constrained"}} -->
<div class="wp-block-group has-global-padding md-fiery-shop-header has-contrast-color has-dark-blue-background-color has-text-color has-background has-link-color" style="padding-top:0;padding-bottom:0"><!-- wp:columns {"verticalAlignment":"center","align":"full","style":{"spacing":{"padding":{"top":"var:preset|spacing|20","bottom":"var:preset|spacing|20","left":"var:preset|spacing|30","right":"var:preset|spacing|30"}}}} -->
<div class="wp-block-columns alignfull are-vertically-aligned-center" style="padding-top:var(--wp--preset--spacing--20);padding-right:var(--wp--preset--spacing--30);padding-bottom:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--30)"><!-- wp:column {"verticalAlignment":"center","width":"7%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:7%"><!-- wp:group {"style":{"spacing":{"blockGap":"24px"}},"layout":{"type":"flex"}} -->
<div class="wp-block-group"><!-- wp:site-logo {"width":65} /--></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"%"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:navigation {"ref":6773,"textColor":"base","style":{"spacing":{"blockGap":"24px"}},"fontSize":"small","layout":{"type":"flex","setCascadingProperties":true,"justifyContent":"left"}} /--></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"55%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:55%"><!-- wp:md-fiery-shop/md-search /--></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"10%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:10%"><!-- wp:woocommerce/mini-cart {"priceColor":{"color":"#ffffff","name":"Base","slug":"base","class":"has-base-product-count-color"},"iconColor":{"color":"#ffffff","name":"Base","slug":"base","class":"has-base-product-count-color"},"productCountColor":{"color":"#ffffff","name":"Base","slug":"base","class":"has-base-product-count-color"},"productCountVisibility":"always"} /--></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->