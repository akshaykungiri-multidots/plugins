<?php
// Template for image banner.
$image_boxes = [];
if (isset($atts['image_boxes']) && !empty($atts['image_boxes'])){
    $image_boxes = vc_param_group_parse_atts($atts['image_boxes']);
}
?>
<div class="bakery_antian__box-image-box">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="bakery_antian__heading">
                    <h6><?php echo esc_html($atts['sub_heading']); ?></h6>
                    <h2><?php echo esc_html($atts['heading']); ?></h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="bakery_antian__box" >
                    <?php 
                    foreach ($image_boxes as $slide) : 
                        if (!empty($slide)) {
                        $box_image = wp_get_attachment_image_url($slide['box_image'], 'full');
                    ?>
                        <div class="bakery_antian__box-item">
                            <div class="bakery_antian__box-image">
                                <img src="<?php echo esc_url($box_image); ?>" alt="box Image">
                            </div>
                            <div class="bakery_antiab__box-content">
                                <h4><?php echo esc_html($slide['box_title']); ?></h4>
                                <p><?php echo esc_html($slide['box_content']); ?></p>
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
