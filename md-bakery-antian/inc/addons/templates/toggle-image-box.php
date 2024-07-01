<?php
$toggle_image_box_items = vc_param_group_parse_atts($atts['image_box_items']);
?>
<div class="bakery_antian__toggle-image-box">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="bakery_antian__heading">
                    <h2><?php echo esc_html($atts['heading']); ?></h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="bakery_antian__toggle-box-image">
                    <?php 
                    foreach ($toggle_image_box_items as $toggle_image_box_item) : 
                        $toggle_image_box_image = wp_get_attachment_image_url($toggle_image_box_item['toggle_image_box_image'], 'full');
                    ?>
                        <div class="bakery_antian__toggle-box-image-item">
                            <div class="bakery_antian__toggle-box-image-image">
                                <img src="<?php echo esc_url($toggle_image_box_image); ?>" alt="toggle-box-image">
                            </div>
                            <div class="bakery_antiab__toggle-box-image-content">
                                <div class="bakery_antian__toggle-box">
                                    <i class="bakery_antian__toggle-box__icon fa fa-angle-right"></i>
                                    <h4><?php echo esc_html($toggle_image_box_item['toggle_image_box_title']); ?></h4>
                                </div>
                                <div class="bakery_antian__toggle-box-content">
                                    <p><?php echo esc_html($toggle_image_box_item['toggle_image_box_content']); ?></p>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</div>
