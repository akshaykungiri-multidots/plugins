<?php
// Template for image banner.
$customer_stories_slides = [];
if (isset($atts['customer_stories_slides']) && !empty($atts['customer_stories_slides'])){
    $customer_stories_slides = vc_param_group_parse_atts($atts['customer_stories_slides']);
}
$background_image = wp_get_attachment_image_url($atts['background_image'], 'full');
$background_color = $atts['background_color'];
$view_more_link = vc_build_link($atts['view_more_link']);
?>
<div class="bakery_antian__customer_stories" style="background-image: url(<?php echo esc_url($background_image); ?>); background-color: <?php echo esc_attr($background_color); ?>">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="bakery_antiann__customer_stories__inner">
                    <div class="bakery_antian__heading">
                        <h2><?php echo esc_html($atts['heading']); ?></h2>
                        <p><?php echo esc_html($atts['description']); ?></p>
                    </div>
                    <?php if ( !empty( $customer_stories_slides ) ) : ?>
                    <div class="bakery_antian__customer_stories_slider md-slick-slider" data-slides-to-show="<?php echo esc_attr($atts['slides_to_show']); ?>" data-slides-to-scroll="<?php echo esc_attr($atts['slides_to_scroll']); ?>" data-autoplay="<?php echo esc_attr($atts['autoplay']); ?>" data-autoplay-speed="<?php echo esc_attr($atts['autoplay_speed']); ?>" data-infinite-scroll="<?php echo esc_attr($atts['infinite_scroll']); ?>" data-dots="<?php echo esc_attr($atts['dots']); ?>" data-arrows="<?php echo esc_attr($atts['arrows']); ?>">
                        <?php 
                        foreach ($customer_stories_slides as $slide) : 
                            if (!empty($slide)) {
                            $author_image = wp_get_attachment_image_url($slide['author_image'], 'full');
                        ?>
                            <div class="bakery_antian__slider-item">
                                <div class="bakery_antian__customer_stories_review">
                                    <div class="bakery_antian__customer_stories_review__content">
                                        <p><?php echo esc_html($slide['customer_reviews']); ?></p>
                                    </div>
                                    <div class="bakery_antiann__customer_stories_review__author">
                                        <div class="bakery_antiann__customer_stories_review__author__image">
                                            <img src="<?php echo esc_url($author_image); ?>" alt="<?php echo esc_attr($slide['author_name']); ?>">
                                        </div>
                                        <div class="bakery_antiann__customer_stories_review__author__name">
                                            <h4><?php echo esc_html($slide['author_name']); ?></h4>
                                            <p><?php echo esc_html($slide['author_designation']); ?></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php 
                            }
                        endforeach; 
                        ?>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 bakery_antiann__customer_stories__bottom">
                <div class="bakery_antiann__customer_stories__view_more">
                    <?php if (!empty($view_more_link['url'])) : ?>
                        <a href="<?php echo esc_url($view_more_link['url']); ?>" class="bakery_antian__button"><?php echo esc_html($view_more_link['title']); ?></a>
                    <?php endif; ?>
                </div>
                <?php if ( !empty( $customer_stories_slides ) ) : ?>
                    <div class="slick-arrows">
                        <button type="button" class="slick-prev"></button>
                        <button type="button" class="slick-next"></button>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>
