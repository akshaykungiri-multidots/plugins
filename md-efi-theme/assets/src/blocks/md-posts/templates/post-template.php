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
                    <div class="md-posts__grid-item-heading">
                        <h3 class="md-posts__grid-item-title">
                            <?php the_title(); ?>
                        </h3>
                        <div class="md-posts__grid-item-resource_type">
                            <?php
                            $post_terms = get_the_terms(get_the_ID(), 'resource_type');
                            if ($post_terms) {
                                foreach ($post_terms as $post_term) {
                                    echo '<span class="md-posts__grid-item-resource_type-item">' . esc_html($post_term->name) . '</span>';
                                }
                            }
                            ?>
                        </div>
                    </div>
                    <div class="md-posts__grid-item-excerpt">
                        <p>
                            <?php the_content(); ?>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php
endwhile;
?>