<?php
$number_of_rows = (isset($attributes['numberOfRows']) && !empty($attributes['numberOfRows'])) ? (int) $attributes['numberOfRows'] : 1;
$number_of_columns = (isset($attributes['numberOfPostsPerRow']) && !empty($attributes['numberOfPostsPerRow'])) ? (int) $attributes['numberOfPostsPerRow'] : 1;
$post_per_page = $number_of_rows * $number_of_columns;
$enableNewsLetter = isset($attributes['enableNewsLetter']) ? $attributes['enableNewsLetter'] : false;
$displayNewsLetterAfterRow = (isset($attributes['displayNewsLetterAfterRow']) && !empty($attributes['displayNewsLetterAfterRow'])) ? (int) $attributes['displayNewsLetterAfterRow'] : 0;

$postTitleFontSize = isset($attributes['postTitleFontSize']) ? $attributes['postTitleFontSize'] : '';
$postTitleColor = isset($attributes['postTitleColor']) ? $attributes['postTitleColor'] : '';
$postDateFontSize = isset($attributes['postDateFontSize']) ? $attributes['postDateFontSize'] : '';
$postDateColor = isset($attributes['postDateColor']) ? $attributes['postDateColor'] : '';
$mostPopularTitleFontSize = isset($attributes['mostPopularTitleFontSize']) ? $attributes['mostPopularTitleFontSize'] : '';
$mostPopularTitleColor = isset($attributes['mostPopularTitleColor']) ? $attributes['mostPopularTitleColor'] : '';
$mostPopularDescriptionFontSize = isset($attributes['mostPopularDescriptionFontSize']) ? $attributes['mostPopularDescriptionFontSize'] : '';
$mostPopularDescriptionColor = isset($attributes['mostPopularDescriptionColor']) ? $attributes['mostPopularDescriptionColor'] : '';

$post_category_slug = "category";
if ($postType === "resource") {
    $post_category_slug = "resource_category";
}
$post_category_terms = get_terms(array(
    'taxonomy' => $post_category_slug,
    'hide_empty' => false,
));

// Get Date like Januray 2021 only for which has posts.
$date_query = new \WP_Query(array(
    'post_type' => $postType,
    'posts_per_page' => -1,
    'orderby' => 'date',
    'order' => 'DESC',
    'fields' => 'ids',
));
$dates = array();
if (!empty($date_query->posts)) {
    foreach ($date_query->posts as $date_post_id) {
        $date = get_the_date('F Y', $date_post_id);
        if (!in_array($date, $dates)) {
            $dates[] = $date;
        }
    }
}


$tax_query = array();

if (!empty($post_cat)) {
    array_push($tax_query, array(
        'taxonomy' => $post_category_slug,
        'field'    => 'slug',
        'terms'    => array($post_cat),
    ));
}

if (!empty($resource_type)) {
    array_push($tax_query, array(
        'taxonomy' => 'resource-type',
        'field'    => 'slug',
        'terms'    => array($resource_type),
    ));
}

$tax_query['relation'] = 'AND';

// Get Posts using WP_Query and based on the parameters.
$args = array(
    'post_type' => $postType,
    'posts_per_page' => $post_per_page,
    'orderby' => 'date',
    'order' => 'DESC',
    'tax_query' => $tax_query,
    'paged' => $page_number,
);
if (!empty($filter_by_date)) {
    $date = explode(' ', $filter_by_date);
    $args['year'] = $date[1];
    $args['monthnum'] = gmdate('m', strtotime($date[0]));
}
if (!empty($search_val)) {
    $args['s'] = $search_val;
}
$post_query = new \WP_Query($args);

// Get Popular Resources Posts using WP_Query and based on the parameters.
$popular_post_args = array(
    'post_type' => $postType,
    'posts_per_page' => 2,
    'orderby' => 'date',
    'order' => 'DESC',
    'meta_key' => 'post_is_popular',
    'meta_value' => 'yes',
);
if ($postType === "resources") {
    $popular_post_args['tax_query'] = $tax_query;
}
$popular_posts_query = new \WP_Query($popular_post_args);
?>
<div class="resources-listing-main">
    <?php if ( $postType === "resources" ) : 
    // Get resource-type taxonomy terms.
    $resource_type_terms = get_terms(array(
        'taxonomy' => 'resource-type',
        'hide_empty' => false,
    ));
    ?>
        <div class="browse-tab-filters">
            <ul class="browse-tab-filters__list">
                <?php if (!empty($resource_type_terms)) : ?>
                    <li class="browse-tab-filters__item <?php if ( empty($resource_type) ) { echo "active"; } ?>" data-value="">
                        <?php esc_html_e('All', 'md-bakery-antian'); ?>
                    </li>
                    <?php foreach ($resource_type_terms as $resource_type_term) : ?>
                        <li class="browse-tab-filters__item <?php if ( $resource_type === $resource_type_term->slug ) { echo "active"; } ?>" data-value="<?php echo esc_attr($resource_type_term->slug); ?>">
                            <?php echo esc_html($resource_type_term->name); ?>
                        </li>
                    <?php endforeach; ?>
                <?php endif; ?>
            </ul>
        </div>
    <?php endif; ?>
    <div class="browse-filters with-custom-select">
        <div class="search-box">
            <?php if ( $attributes['enableSearch'] ) { ?>
                <input id="browse-search" class="search" type="text" placeholder="<?php esc_attr_e('Search blog...', 'md-bakery-antian'); ?>" value="<?php echo esc_attr($search_val); ?>">
                <div class="search-icon"></div>
            <?php } else if ( isset( $attributes['displayMostPopularAboveOrBelow'] ) && $attributes['displayMostPopularAboveOrBelow'] === 'above' ) { ?>
                <div class="most-popular-headin above">
                    <h2><?php esc_html_e('Most Popular', 'md-bakery-antian'); ?></h2>
                </div>
            <?php } ?>
        </div>
        <?php if ( $attributes['enableFilter'] ) { ?>
            <div class="custom-select-filter-wrapper">
                <div class="custom-select-filter-label term-listings-selected-data">
                    <?php 
                    if ( !empty($post_cat) ) {
                        foreach ($post_category_terms as $resource_category_term) {
                            if ( $post_cat === $resource_category_term->slug ) {
                                echo esc_html($resource_category_term->name);
                            }
                        }
                    } else {
                        esc_html_e('All Categories', 'md-bakery-antian');
                    }
                    ?>
                </div>
                <ul class="custom-select-filter custom-select-data term-listings-filter resource_cat_listing">
                    <?php if (!empty($post_category_terms)) : ?>
                        <li class="custom-select-filter__item <?php if ( empty($post_cat) ) { echo "active"; } ?>" data-value="">
                            <?php esc_html_e('All Categories', 'md-bakery-antian'); ?>
                        </li>
                        <?php foreach ($post_category_terms as $resource_category_term) : ?>
                            <li class="custom-select-filter__item <?php if ( $post_cat === $resource_category_term->slug ) { echo "active"; } ?>" data-value="<?php echo esc_attr($resource_category_term->slug); ?>">
                                <?php echo esc_html($resource_category_term->name); ?>
                            </li>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </ul>
            </div>
            <div class="custom-select-filter-wrapper">
                <div class="custom-select-filter-label select-date-selected-data">
                    <?php 
                    if ( !empty($filter_by_date) ) {
                        echo esc_html($filter_by_date);
                    } else {
                        esc_html_e('Filter by Date', 'md-bakery-antian'); 
                    }
                    ?>
                </div>
                <ul class="custom-select-filter custom-select-data select-date-filter">
                    <?php if (!empty($dates)) : ?>
                        <li class="custom-select-filter__item <?php if ( empty($filter_by_date) ) { echo "active"; } ?>" data-value="">
                            <?php esc_html_e('All Dates', 'md-bakery-antian'); ?>
                        </li>
                        <?php foreach ($dates as $date) : ?>
                            <li class="custom-select-filter__item <?php if ( $filter_by_date === $date ) { echo "active"; } ?>" data-value="<?php echo esc_attr($date); ?>">
                                <?php echo esc_html($date); ?>
                            </li>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </ul>
            </div>
        <?php } ?>
    </div>
    <?php if ( isset( $attributes['displayMostPopularAboveOrBelow'] ) && $attributes['displayMostPopularAboveOrBelow'] === 'above' ) : ?>
        <div class="resources-listing-main__most-popular-posts">
            <?php if (!empty($attributes['enableMostPopular'])) : ?>
                <?php if (!empty($popular_posts_query->posts)) : ?>
                    <?php if ( $attributes['enableSearch'] ) { ?>
                        <div class="most-popular-heading">
                            <h2><?php esc_html_e( "Most Popular", 'md-bakery-antian' ); ?></h2>
                        </div>
                    <?php } ?>
                    <?php foreach ($popular_posts_query->posts as $resPost) : ?>
                        <div class="item">
                            <div class="item__image-wrapper">
                                <a href="<?php echo esc_url(get_permalink($resPost->ID)); ?>">
                                    <img src="<?php echo esc_url(get_the_post_thumbnail_url($resPost->ID)); ?>" alt="<?php echo esc_attr(get_the_title($resPost->ID)); ?>">
                                </a>
                            </div>
                            <div class="item__details">
                                <?php if ( $postType === "resources" ) : ?>
                                    <?php
                                    // Get categories.
                                    $categories = get_the_terms($resPost->ID, 'resource-type');
                                    ?>
                                    <?php if (!empty($categories)) : ?>
                                        <span class="cat-name">
                                            <?php foreach ($categories as $category) : ?>
                                                <?php
                                                $term_link = get_term_link($category->term_id);
                                                if ($term_link) {
                                                    ?>
                                                    <a href="<?php echo esc_url($term_link); ?>"><?php echo esc_html($category->name); ?></a>
                                                    <?php
                                                }
                                                ?>
                                            <?php endforeach; ?>
                                        </span>
                                    <?php endif; ?>
                                <?php endif; ?>
                                <h3 style="<?php echo esc_attr('font-size: ' . $mostPopularTitleFontSize . '; color: ' . $mostPopularTitleColor); ?>"><a href="<?php echo esc_url(get_permalink($resPost->ID)); ?>"><?php echo esc_html(get_the_title($resPost->ID)); ?></a></h3>
                                <p style="<?php echo esc_attr('font-size: ' . $mostPopularDescriptionFontSize . '; color: ' . $mostPopularDescriptionColor); ?>"><a href="<?php echo esc_url(get_permalink($resPost->ID)); ?>"><?php echo esc_html(get_the_excerpt($resPost->ID)); ?></a></p>
                                <a class="readmore-link" href="<?php echo esc_url(get_permalink($resPost->ID)); ?>" class="read-more"><?php esc_html_e('Read the full resource', 'md-bakery-antian'); ?></a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            <?php endif; ?>
        </div>
    <?php endif; ?>
    <div class="resources-listing-main__layout">
        <?php 
        if ( $post_query->have_posts() ) : 
            $current_post = 0;
        ?>
            <?php while ( $post_query->have_posts() ) : $post_query->the_post(); ?>
                <?php if ($current_post === ( $number_of_columns * $displayNewsLetterAfterRow ) && $enableNewsLetter ) : ?>
                    <div class="blog-listing-newsletter-form">
                        <form class="form-inline">
                            <label><?php esc_html_e('Subscribe to get our best content in your inbox.', 'md-bakery-antian'); ?></label>
                            <div class="form-type-options">
                                <?php foreach ($post_category_terms as $post_category_term) : ?>
                                    <div class="custom-radio">
                                        <input type="radio" id="resource-type-<?php echo esc_attr($post_category_term->slug); ?>" name="resource-type" value="<?php echo esc_attr($post_category_term->slug); ?>">
                                        <lable for="resource-type-<?php echo esc_attr($post_category_term->slug); ?>"><?php echo esc_html($post_category_term->name); ?></lable>
                                    </div>
                                <?php endforeach; ?>
                                <div class="custom-radio">
                                    <input type="radio" id="resource-type-both" name="resource-type" value="both">
                                    <lable for="resource-type-both"><?php esc_html_e('Both', 'md-bakery-antian'); ?></lable>
                                </div>
                            </div>
                            <div class="input-and-button">
                                <div class="form-field">
                                    <input type="email" name="email" required placeholder="<?php esc_attr_e('Email Address', 'md-bakery-antian'); ?>">
                                    <button type="submit"><?php esc_html_e('Sign up', 'md-bakery-antian'); ?></button>
                                </div>
                            </div>
                        </form>
                        <div class="image-section">
                            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/src/images/stockimage.webp'); ?>" alt="<?php esc_attr_e('Stock Image', 'md-bakery-antian'); ?>">
                        </div>
                    </div>
                <?php endif; ?>
                <div class="item" style="flex: 0 0 calc( ( 100% / <?php echo esc_attr($number_of_columns); ?> ) - 55px);">
                    <div class="item__image-wrapper">
                        <a href="<?php echo esc_url(get_permalink()); ?>">
                            <img src="<?php echo esc_url(get_the_post_thumbnail_url()); ?>" alt="<?php echo esc_attr(get_the_title()); ?>">
                        </a>
                    </div>
                    <div class="item__title-and-date-wrapper">
                        <?php
                        if ($postType === "resources") :
                        // Get categories.
                        $categories = get_the_terms(get_the_ID(), 'resource-type');
                        ?>
                        <div class="categories-wrap">
                            <?php if (!empty($categories)) : ?>
                                <span class="cat-name">
                                    <?php foreach ($categories as $category) : ?>
                                        <?php
                                        $term_link = get_term_link($category->term_id);
                                        if ($term_link) {
                                            ?>
                                            <a href="<?php echo esc_url($term_link); ?>"><?php echo esc_html($category->name); ?></a>
                                            <?php
                                        }
                                        ?>
                                    <?php endforeach; ?>
                                </span>
                            <?php endif; ?>
                        </div>
                        <?php endif; ?>
                        <p class="item-date" style="<?php echo esc_attr('font-size: ' . $postDateFontSize . '; color: ' . $postDateColor); ?>"><?php echo esc_html(get_the_date('F j, Y')); ?></p>
                        <h3 style="<?php echo esc_attr('font-size: ' . $postTitleFontSize . '; color: ' . $postTitleColor); ?>"><a href="<?php echo esc_url(get_permalink()); ?>"><?php echo esc_html(get_the_title()); ?></a></h3>
                    </div>
                    <a class="readmore-link" href="<?php echo esc_url(get_permalink()); ?>" class="read-more"><?php esc_html_e('Read the full resource', 'md-bakery-antian'); ?></a>
                </div>
            <?php 
            $current_post++;
            endwhile; 
            ?>
        <?php else : ?>
            <div class="no-posts-found">
                <p><?php esc_html_e('No posts found.', 'md-bakery-antian'); ?></p>
            </div>
        <?php endif; ?>
    </div>
    <div class="resources-listing-main__pagination-section">
        <div class="pagination">
            <?php
            if ( $post_query->max_num_pages > 1 ) :
            // Display like 1, 2, 3, ... last page.
                echo wp_kses_post(paginate_links(array(
                    'total' => $post_query->max_num_pages,
                    'next_text' => '<i class="fa fa-angle-right"></i>',
                    'prev_text' => '<i class="fa fa-angle-left"></i>',
                    'current' => $page_number,
                )));
            endif;
            ?>
        </div>
    </div>
    <?php if ( isset( $attributes['displayMostPopularAboveOrBelow'] ) && $attributes['displayMostPopularAboveOrBelow'] === 'below' ) : ?>
        <div class="resources-listing-main__most-popular-posts">
            <?php if (!empty($attributes['enableMostPopular'])) : ?>
                <?php if (!empty($popular_posts_query->posts)) : ?>
                    <div class="most-popular-heading">
                        <h2><?php esc_html_e( "Most Popular", 'md-bakery-antian' ); ?></h2>
                    </div>
                    <?php foreach ($popular_posts_query->posts as $resPost) : ?>
                        <div class="item">
                            <div class="item__image-wrapper">
                                <a href="<?php echo esc_url(get_permalink($resPost->ID)); ?>">
                                    <img src="<?php echo esc_url(get_the_post_thumbnail_url($resPost->ID)); ?>" alt="<?php echo esc_attr(get_the_title($resPost->ID)); ?>">
                                </a>
                            </div>
                            <div class="item__details">
                                <?php if ( $postType === "resources" ) : ?>
                                    <?php
                                    // Get categories.
                                    $categories = get_the_terms($resPost->ID, 'resource-type');
                                    ?>
                                    <?php if (!empty($categories)) : ?>
                                        <span class="cat-name">
                                            <?php foreach ($categories as $category) : ?>
                                                <?php
                                                $term_link = get_term_link($category->term_id);
                                                if ($term_link) {
                                                    ?>
                                                    <a href="<?php echo esc_url($term_link); ?>"><?php echo esc_html($category->name); ?></a>
                                                    <?php
                                                }
                                                ?>
                                            <?php endforeach; ?>
                                        </span>
                                    <?php endif; ?>
                                <?php endif; ?>
                                <h3 style="<?php echo esc_attr('font-size: ' . $mostPopularTitleFontSize . '; color: ' . $mostPopularTitleColor); ?>"><a href="<?php echo esc_url(get_permalink($resPost->ID)); ?>"><?php echo esc_html(get_the_title($resPost->ID)); ?></a></h3>
                                <p style="<?php echo esc_attr('font-size: ' . $mostPopularDescriptionFontSize . '; color: ' . $mostPopularDescriptionColor); ?>"><a href="<?php echo esc_url(get_permalink($resPost->ID)); ?>"><?php echo esc_html(get_the_excerpt($resPost->ID)); ?></a></p>
                                <a class="readmore-link" href="<?php echo esc_url(get_permalink($resPost->ID)); ?>" class="read-more"><?php esc_html_e('Read the full resource', 'md-bakery-antian'); ?></a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            <?php endif; ?>
        </div>
    <?php endif; ?>
</div>