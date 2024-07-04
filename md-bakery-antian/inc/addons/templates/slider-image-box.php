<?php
// Template for image banner.
$slides = [];
if (isset($atts['slides']) && !empty($atts['slides'])){
    $slides = vc_param_group_parse_atts($atts['slides']);
}
?>
<div class="bakery_antian__slider-image-box">
    <div class="bakery_antian__slider-image-box__inner">
        <div class="text-video-slider__video-and-text">
            <div class="container">
                <div class="bakery_antian__heading">
                    <h6><?php echo esc_html($atts['sub_heading']); ?></h6>
                    <h2><?php echo esc_html($atts['heading']); ?></h2>
                </div>
            </div>
        </div>
        <div class="text-video-slider__slider">
            <div class="container">
                <div class="bakery_antian__slider md-slick-slider" data-slides-to-show="<?php echo esc_attr($atts['slides_to_show']); ?>" data-slides-to-scroll="<?php echo esc_attr($atts['slides_to_scroll']); ?>" data-autoplay="<?php echo esc_attr($atts['autoplay']); ?>" data-autoplay-speed="<?php echo esc_attr($atts['autoplay_speed']); ?>" data-infinite-scroll="<?php echo esc_attr($atts['infinite_scroll']); ?>" data-dots="<?php echo esc_attr($atts['dots']); ?>" data-arrows="<?php echo esc_attr($atts['arrows']); ?>">
                    <?php 
                    foreach ($slides as $slide) : 
                        if (!empty($slide)) {
                        $slider_button = vc_build_link($slide['slider_button']);
                        $slider_image = wp_get_attachment_image_url($slide['slider_image'], 'full');
                    ?>
                        <div class="bakery_antian__slider-item">
                            <div class="bakery_antian__slider-image">
                                <img src="<?php echo esc_url($slider_image); ?>" alt="Slider Image">
                            </div>
                            <div class="bakery_antiab__slider-content">
                                <p><?php echo esc_html($slide['slider_content']); ?></p>
                                <div class="bakery_antian__slider-button btn-main">
                                    <a href="<?php echo esc_url($slider_button['url']); ?>" class="btn"><?php echo esc_html($slider_button['title']); ?></a>
                                </div>
                            </div>
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
