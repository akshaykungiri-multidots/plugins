<?php
$i = 0;
$step = 2;
while ($query->have_posts()) :
    $query->the_post();
    $post_date = get_the_date('F j, Y');
    if ($step === 2 && $i === 2) { 
        $step = 3;
        $i = 0;
    }
    if ($step === 3 && $i === 3) { 
        $step = 2;
        $i = 0;
    }
?>
    <div class="md-posts__grid-item step_<?php echo esc_attr($step); ?>">
        <div class="md-posts__grid-item-inner">
            <div class="md-posts__grid-item-meta">
                <span><?php esc_html_e('Service', 'md-sutherlandglobal'); ?></span>
                <span class="md-posts__grid-item-date"><?php echo esc_html($post_date); ?></span>
            </div>
            <?php
            if (has_post_thumbnail()) {
            ?>
                <div class="md-posts__grid-item-thumbnail">
                    <?php the_post_thumbnail('medium'); ?>
                </div>
            <?php
            }
            ?>
            <h3 class="md-posts__grid-item-title">
                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
            </h3>
        </div>
    </div>
<?php
$i++;
endwhile;

if ($query->max_num_pages > 1) : 
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
?>