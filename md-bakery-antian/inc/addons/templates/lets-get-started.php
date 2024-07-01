<?php
// Template for hero banner.

$background_image = wp_get_attachment_image_url($atts['background_image'], 'full');
$button1 = vc_build_link($atts['button1']);
$button2 = vc_build_link($atts['button2']);
?>
<div class="bakery_antian__hero-banner lets-get-started" style="background-image: url(<?php echo esc_url($background_image); ?>);">
    <div class="container">
        <div class="hero-banner-content">
            <h2 class="hero-banner__title"><?php echo wp_kses_post($atts['title']); ?></h2>
            <p class="hero-banner__desc"><?php echo wp_kses_post($atts['description']); ?></p>
            <div class="hero-banner-buttons">
                <?php if (!empty($button1['url']) && !empty($button1['title'])) : ?>
                    <div class="hero-banner__button button_orange">
                        <a href="<?php echo esc_url($button1['url']); ?>" class="btn"><?php echo esc_html($button1['title']); ?></a>
                    </div>
                <?php endif; ?>
                <?php if (!empty($button2['url']) && !empty($button2['title'])) : ?>
                    <div class="hero-banner__button button_white">
                        <a href="<?php echo esc_url($button2['url']); ?>" class="btn"><?php echo esc_html($button2['title']); ?></a>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>
