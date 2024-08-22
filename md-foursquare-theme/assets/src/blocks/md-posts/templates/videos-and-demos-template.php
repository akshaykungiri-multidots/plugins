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
                    <?php
                        // Display report-type taxonomies.
                    $report_type_terms = get_the_terms(get_the_ID(), 'videos-and-demos-topic');
                    if ($report_type_terms) {
                        foreach ($report_type_terms as $report_type_term) {
                        ?>
                            <span class="md-posts__grid-item-taxonomy"><?php echo esc_html($report_type_term->name); ?></span>
                        <?php
                        }
                    }
                    ?>
                    <h3 class="md-posts__grid-item-title">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h3>
                </div>
            </div>
        </div>
    </div>
<?php
endwhile;
?>