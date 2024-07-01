<?php
// Template for image banner.

$banner_image = wp_get_attachment_image_url($atts['banner_image'], 'full');
$banner_image_position = $atts['image_position'];
$flex_direction = ($banner_image_position === 'right') ? 'row' : 'row-reverse';
$image_size = $atts['image_size'];
?>
<div class="bakery_antian__image-banner">
    <div class="container">
        <div class="image-banner__inner" style="flex-direction: <?php echo esc_attr($flex_direction); ?>">
            <div class="image-banner-content">
                <?php if (!empty($atts['subtitle'])) : ?>
                    <h4 class="image-banner__subtitle"><?php echo wp_kses_post($atts['subtitle']); ?></h4>
                <?php endif; ?> 
                <h2 class="image-banner__title"><?php echo wp_kses_post($atts['title']); ?></h2>
                <div class="image-banner__desc"><?php echo wp_kses_post($atts['description']); ?></div>
            </div>
            <div class="image-banner-image <?php echo esc_attr($image_size); ?>">
                <img src="<?php echo esc_url($banner_image); ?>" alt="Banner Image">
            </div>
        </div>
    </div>
</div>
