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
                    <div class="md-posts__grid-item-taxonomies">
                        <?php
                        // Display report-type taxonomies.
                        $report_type_terms = get_the_terms(get_the_ID(), 'report-type');
                        if ($report_type_terms) {
                            foreach ($report_type_terms as $report_type_term) {
                            ?>
                                <span class="md-posts__grid-item-taxonomy"><?php echo esc_html($report_type_term->name); ?></span>
                            <?php
                            }
                        }
                        ?>
                    </div>
                    <h3 class="md-posts__grid-item-title">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h3>
                    <span class="md-posts__grid-item-date"><?php echo esc_html($post_date); ?></span>
                    <div class="md-posts__grid-item-excerpt">
                        <p>
                            <?php echo wp_kses_post(wp_trim_words(get_the_excerpt(), 20, '...')); ?>
                        </p>
                    </div>
                    <div class="md-posts__grid-item-readmore">
                        <a href="<?php the_permalink(); ?>" class="btn-main btn-border"><?php esc_html_e('Read More', 'md-foursquare'); ?></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php
endwhile;
?>