<?php
$i = 0;
$showPostTitle = isset($attributes['showPostTitle']) ? $attributes['showPostTitle'] : true;
$showExcerpt = isset($attributes['showExcerpt']) ? $attributes['showExcerpt'] : true;
$showPostDate = isset($attributes['showPostDate']) ? $attributes['showPostDate'] : true;
$postTitleColor = isset($attributes['postTitleColor']) ? $attributes['postTitleColor'] : true;
$postExcerptColor = isset($attributes['postExcerptColor']) ? $attributes['postExcerptColor'] : true;
$postDateColor = isset($attributes['postDateColor']) ? $attributes['postDateColor'] : true;
$enablePagination = isset($attributes['enablePagination']) ? $attributes['enablePagination'] : true;
$enableViewAll = isset($attributes['enableViewAll']) ? $attributes['enableViewAll'] : true;
$showFeaturedImage = isset($attributes['showFeaturedImage']) ? $attributes['showFeaturedImage'] : true;
$postType = isset($attributes['postType']) ? $attributes['postType'] : 'post';
// get number of posts

while ($query->have_posts()) :
    $query->the_post();
    $post_date = get_the_date('F j, Y');
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
                <?php if ($showPostDate) : ?>
                    <div class="md-posts__grid-item-date" style="color: <?php echo esc_attr($postDateColor); ?>">
                        <?php echo esc_html($post_date); ?>
                    </div>
                <?php endif; ?>
                <?php if ($showPostTitle) : ?>
                    <h3 class="md-posts__grid-item-title" style="color: <?php echo esc_attr($postTitleColor); ?>">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h3>
                <?php endif; ?>
                <?php if ($showExcerpt) : ?>
                    <div class="md-posts__grid-item-excerpt" style="color: <?php echo esc_attr($postExcerptColor); ?>">
                        <?php the_excerpt(); ?>
                    </div>
                <?php endif; ?>
                <a href="<?php the_permalink(); ?>" class="md-posts__grid-item-link md-btn-main btn-link-right-arrow"><?php esc_html_e('Learn More', 'md-woodward'); ?></a>
            </div>
        </div>
    </div>
    <?php
    $i++;
endwhile;

if ($query->max_num_pages > 1 && $enablePagination) :
    // Display Pagination.
    echo wp_kses_post(paginate_links(
        array(
            'base'     => esc_url(add_query_arg('paged', '%#%')),
            'format'   => '?paged=%#%',
            'current'  => $current_page,
            'total'    => $query->max_num_pages,
            'type'     => 'list',
            'prev_text' => __('<'),
            'next_text' => __('>'),
        )
    ));
endif;

if ($enableViewAll) :
    // Display View All Button.
    $view_all_link = get_post_type_archive_link($postType);
    if ($view_all_link) { ?>
        <a href="<?php echo esc_url($view_all_link); ?>" class="md-posts__view-all-link md-btn-main btn-link-right-arrow"><?php esc_html_e('View All', 'md-woodward'); ?></a>
    <?php }
endif;
?>