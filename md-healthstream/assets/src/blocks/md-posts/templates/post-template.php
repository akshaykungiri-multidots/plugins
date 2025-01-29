<?php

$postTitleColor = isset( $attributes['postTitleColor'] ) ? $attributes['postTitleColor'] : ''; 
$postContentColor = isset( $attributes['postContentColor'] ) ? $attributes['postContentColor'] : '';
$showFeaturedImage = isset( $attributes['showFeaturedImage'] ) ? $attributes['showFeaturedImage'] : '';
$showPostTitle = isset( $attributes['showPostTitle'] ) ? $attributes['showPostTitle'] : '';
$showExcerpt = isset( $attributes['showExcerpt'] ) ? $attributes['showExcerpt'] : '';

if ( $query->have_posts() ) {
    while ($query->have_posts()) :
        $query->the_post();
    ?>
        <div class="md-posts__grid-item">
            <div class="md-posts__grid-item-inner">
                <?php
                if (has_post_thumbnail() && $showFeaturedImage) {
                ?>
                    <div class="md-posts__grid-item-thumbnail">
                        <?php the_post_thumbnail('medium'); ?>
                    </div>
                <?php
                }
                ?>
                <div class="md-posts__grid-item-content">
                    <div class="md-posts__grid-item-content__inner">
                        <div class="md-posts__grid-item-heading">
                            <div class="md-posts__grid-item-resource_type">
                                <?php
                                $post_terms = get_the_terms(get_the_ID(), 'resource-type');
                                if ($post_terms) {
                                    foreach ($post_terms as $post_term) {
                                        $image_id = get_term_meta( $post_term->term_id, 'resource-type-image-id', true );
                                        if ( $image_id ) : ?>
                                            <img src="<?php echo esc_url( wp_get_attachment_url( $image_id ) ); ?>" style="max-width:100%;" />
                                        <?php endif;
                                        echo '<span class="md-posts__grid-item-resource_type-item">' . esc_html($post_term->name) . '</span>';
                                    }
                                }
                                ?>
                            </div>
                            <div class="md-posts__grid-item-date">
                                <?php echo get_the_date(); ?>
                            </div>
                            <?php if ($showPostTitle) { ?>
                                <h3 class="md-posts__grid-item-title" style="color: <?php echo esc_attr($postTitleColor); ?>">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h3>
                            <?php } ?>
                        </div>
                        <?php if ($showExcerpt) { ?>
                        <div class="md-posts__grid-item-excerpt">
                            <div style="color: <?php echo esc_attr($postContentColor); ?>">
                                <?php the_excerpt(); ?>
                            </div>
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </div>
        </div>
    <?php
    endwhile;
} else {
    esc_html_e('No posts found', 'md-healthstream');
}
?>