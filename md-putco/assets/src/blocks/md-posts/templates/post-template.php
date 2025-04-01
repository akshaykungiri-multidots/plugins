<?php
$i = 0;
$showPostTitle = isset($attributes['showPostTitle']) ? $attributes['showPostTitle'] : true;
$showExcerpt = isset($attributes['showExcerpt']) ? $attributes['showExcerpt'] : true;
$showPostDate = isset($attributes['showPostDate']) ? $attributes['showPostDate'] : true;
$showPostAuthor = isset($attributes['showPostAuthor']) ? $attributes['showPostAuthor'] : true;
$showPostCategory = isset($attributes['showPostCategory']) ? $attributes['showPostCategory'] : true;
$postTitleColor = isset($attributes['postTitleColor']) ? $attributes['postTitleColor'] : true;
$postExcerptColor = isset($attributes['postExcerptColor']) ? $attributes['postExcerptColor'] : true;
$postDateColor = isset($attributes['postDateColor']) ? $attributes['postDateColor'] : true;
$postAuthorColor = isset($attributes['postAuthorColor']) ? $attributes['postAuthorColor'] : true;
$postCategoryColor = isset($attributes['postCategoryColor']) ? $attributes['postCategoryColor'] : true;
$enablePagination = isset($attributes['enablePagination']) ? $attributes['enablePagination'] : true;
$enableViewAll = isset($attributes['enableViewAll']) ? $attributes['enableViewAll'] : true;
$showFeaturedImage = isset($attributes['showFeaturedImage']) ? $attributes['showFeaturedImage'] : true;
$postType = isset($attributes['postType']) ? $attributes['postType'] : 'post';
// get number of posts

while ($query->have_posts()) :
    $query->the_post();
    $post_date = get_the_date('F j, Y');
    $post_author = get_the_author();
    $post_categories = get_the_category();
    $number_of_likes = get_post_meta(get_the_ID(), 'likes', true);
    // display excerpt in 20 words
    $excerpt = get_the_excerpt();
    $excerpt = wp_trim_words($excerpt, 20, '...');
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
                <?php if ($showPostCategory) : ?>
                    <div class="md-posts__grid-item-category" style="color: <?php echo esc_attr($postCategoryColor); ?>">
                        <?php
                        if ($post_categories) {
                            foreach ($post_categories as $category) {
                                echo '<a href="' . esc_url(get_category_link($category->term_id)) . '">' . esc_html($category->name) . '</a>';
                            }
                        }
                        ?>
                    </div>
                <?php endif; ?>
                <?php if ($showPostTitle) : ?>
                    <h3 class="md-posts__grid-item-title" style="color: <?php echo esc_attr($postTitleColor); ?>">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h3>
                <?php endif; ?>
                <?php if ($showExcerpt) : ?>
                    <div class="md-posts__grid-item-excerpt" style="color: <?php echo esc_attr($postExcerptColor); ?>">
                        <?php echo esc_html($excerpt); ?>
                    </div>
                <?php endif; ?>
                <div class="md-posts__grid-item-footer">
                    <div class="md-posts__grid-item-footer-left">
                        <?php if ($showPostDate) : ?>
                            <div class="md-posts__grid-item-date" style="color: <?php echo esc_attr($postDateColor); ?>">
                                <?php echo esc_html($post_date); ?>
                            </div>
                        <?php endif; ?>
                        <?php if ($showPostAuthor) : ?>
                            <div class="md-posts__grid-item-author" style="color: <?php echo esc_attr($postAuthorColor); ?>">
                                <?php echo esc_html($post_author); ?>
                            </div>
                        <?php endif; ?>
                    </div>
                    <?php if ($number_of_likes) : ?>
                        <div class="md-posts__grid-item-footer-right">
                            <div class="md-posts__grid-item-likes">
                                <span class="md-posts__grid-item-likes-icon">
                                    <i class="fa fa-heart"></i>
                                </span>
                                <span class="md-posts__grid-item-likes-count">
                                    <?php echo esc_html($number_of_likes); ?>
                                </span>
                            </div>
                        </div>
                    <?php endif; ?>
                </div>
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
        <a href="<?php echo esc_url($view_all_link); ?>" class="md-posts__view-all-link md-btn-main btn-link-right-arrow"><?php esc_html_e('View All', 'md-putco'); ?></a>
    <?php }
endif;
?>