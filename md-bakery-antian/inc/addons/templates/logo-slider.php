<?php
// Template for image banner.
$slides = [];
if (isset($atts['slides']) && !empty($atts['slides'])){
    $slides = vc_param_group_parse_atts($atts['slides']);
}
$view_more_link = vc_build_link($atts['view_more_link']);
$image_border_enable = $atts['image_border_enable'] == 'yes' ? 'image-border-enable' : '';
?>
<div class="bakery_antian__logo_slider">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="bakery_antian__logo_slider--heading">
                    <h2><?php echo esc_html($atts['heading']); ?></h2>
                    <?php if (!empty($view_more_link['url'])) : ?>
                        <a href="<?php echo esc_url($view_more_link['url']); ?>" class="bakery_anitian__logo_slider--link"><?php echo esc_html($view_more_link['title']); ?></a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="bakery_antian__slider md-slick-slider <?php echo esc_attr($image_border_enable); ?>" data-slides-to-show="<?php echo esc_attr($atts['slides_to_show']); ?>" data-slides-to-scroll="<?php echo esc_attr($atts['slides_to_scroll']); ?>" data-autoplay="<?php echo esc_attr($atts['autoplay']); ?>" data-autoplay-speed="<?php echo esc_attr($atts['autoplay_speed']); ?>" data-infinite-scroll="<?php echo esc_attr($atts['infinite_scroll']); ?>" data-dots="<?php echo esc_attr($atts['dots']); ?>" data-arrows="<?php echo esc_attr($atts['arrows']); ?>">
                    <?php 
                    foreach ($slides as $slide) : 
                        if (!empty($slide)) {
                        $slider_logo = wp_get_attachment_image_url($slide['slider_logo'], 'full');
                    ?>
                        <div class="bakery_antian__slider-item">
                            <div class="bakery_antian__slider-image">
                                <img src="<?php echo esc_url($slider_logo); ?>" alt="Slider Image">
                            </div>
                            <?php if (!empty($slide['slider_logo_title'])) : ?>
                                <div class="bakery_antiab__slider-title">
                                    <h6><?php echo esc_html($slide['slider_logo_title']); ?></h6>
                                </div>
                            <?php endif; ?>
                        </div>
                    <?php 
                        }
                    endforeach; 
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
