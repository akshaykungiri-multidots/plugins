<?php

// Get post category taxonomy terms.
$post_category_terms = get_terms(array(
    'taxonomy' => 'category',
    'hide_empty' => false,
));

// Get Date like Januray 2021 only for which has posts.
$date_query = new \WP_Query(array(
    'post_type' => 'post',
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

$number_of_rows = (isset($atts['number_of_rows']) && !empty($atts['number_of_rows'])) ? (int) $atts['number_of_rows'] : 1;
$number_of_columns = (isset($atts['number_of_columns']) && !empty($atts['number_of_columns'])) ? (int) $atts['number_of_columns'] : 1;
$post_per_page = $number_of_rows * $number_of_columns;
$enable_subscribe_box = (isset($atts['enable_subscribe_box']) && !empty($atts['enable_subscribe_box'])) ? $atts['enable_subscribe_box'] : '';

$tax_query = array();

if (!empty($post_cat)) {
    array_push($tax_query, array(
        'taxonomy' => 'category',
        'field'    => 'slug',
        'terms'    => array($post_cat),
    ));
}

$tax_query['relation'] = 'AND';

// Get Posts using WP_Query and based on the parameters.
$args = array(
    'post_type' => 'post',
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
    'post_type' => 'post',
    'posts_per_page' => 2,
    'orderby' => 'date',
    'order' => 'DESC',
    'meta_key' => 'post_is_popular',
    'meta_value' => 'yes',
);
$popular_posts_query = new \WP_Query($popular_post_args);
?>

<div class="container">
    <div class="resources-listing-main">
        <div class="browse-filters with-custom-select">
            <div class="search-box">
                <input id="browse-search" class="search" type="text" placeholder="<?php esc_attr_e('Search blog...', 'md-bakery-antian'); ?>" value="<?php echo esc_attr($search_val); ?>">
                <div class="search-icon"></div>
            </div>
            <?php if ( $atts['enable_filter_by_category'] === 'yes' ) { ?>
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
            <?php } ?>
            <?php if ( $atts['enable_filter_by_date'] === 'yes' ) { ?>
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
        <div class="resources-listing-main__layout">
            <?php 
            if ( $post_query->have_posts() ) : 
                $current_post = 0;
            ?>
                <?php while ( $post_query->have_posts() ) : $post_query->the_post(); ?>
                    <?php if ($current_post === $number_of_columns && $enable_subscribe_box === 'yes') : ?>
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
                    <div class="item">
                        <div class="item__image-wrapper">
                            <a href="<?php echo esc_url(get_permalink()); ?>">
                                <img src="<?php echo esc_url(get_the_post_thumbnail_url()); ?>" alt="<?php echo esc_attr(get_the_title()); ?>">
                            </a>
                        </div>
                        <div class="item__title-and-date-wrapper">
                            <p class="item-date"><?php echo esc_html(get_the_date('F j, Y')); ?></p>
                            <h3><a href="<?php echo esc_url(get_permalink()); ?>"><?php echo esc_html(get_the_title()); ?></a></h3>
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
                // Display like 1, 2, 3, ... last page.
                echo wp_kses_post(paginate_links(array(
                    'total' => $post_query->max_num_pages,
                    'next_text' => '<i class="fa fa-angle-right"></i>',
                    'prev_text' => '<i class="fa fa-angle-left"></i>',
                    'current' => $page_number,
                )));
                ?>
            </div>
        </div>
        <div class="resources-listing-main__most-popular-posts">
            <?php if (!empty($atts['enable_most_popular_post'])) : ?>
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
                                <h3><a href="<?php echo esc_url(get_permalink($resPost->ID)); ?>"><?php echo esc_html(get_the_title($resPost->ID)); ?></a></h3>
                                <p><a href="<?php echo esc_url(get_permalink($resPost->ID)); ?>"><?php echo esc_html(get_the_excerpt($resPost->ID)); ?></a></p>
                                <a class="readmore-link" href="<?php echo esc_url(get_permalink($resPost->ID)); ?>" class="read-more"><?php esc_html_e('Read the full resource', 'md-bakery-antian'); ?></a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            <?php endif; ?>
        </div>
    </div>
</div>
