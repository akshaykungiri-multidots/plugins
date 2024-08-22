<?php
while ($query->have_posts()) :
    $query->the_post();
    $post_date = get_the_date('F j, Y');
?>
    <div class="md-posts__grid-item">
        <div class="md-posts__grid-item-inner">
            <?php
            if (has_post_thumbnail()) {
            ?>
                <div class="md-posts__grid-item-thumbnail">
                    <?php the_post_thumbnail('medium'); ?>
                </div>
            <?php
            }
            ?>
            <div class="md-posts__grid-item-content">
                <div class="md-posts__grid-item-content__inner">
                    <h3 class="md-posts__grid-item-title">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h3>
                    <span class="md-posts__grid-item-date"><?php echo esc_html($post_date); ?></span>
                    <div class="md-posts__grid-item-excerpt">
                        <p>
                            <?php the_content(); ?>
                        </p>
                    </div>
                    <div class="md-posts__grid-item-case-studies_readmore">
                        <a href="<?php the_permalink(); ?>" class="md-posts__grid-item-readmore-link btn-main"><?php esc_html_e('Read', 'md-foursquare'); ?></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php
endwhile;
?>