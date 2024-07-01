<?php
// Template for image banner.
$media_contents_list = vc_param_group_parse_atts($atts['media_contents_list']);
?>
<div class="bakery_antian__media_content">
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
                    foreach ($media_contents_list as $slide) : 
                        $box_image = wp_get_attachment_image_url($slide['box_image'], 'full');
                    ?>
                        <div class="bakery_antian__box-item">
                            <div class="bakery_antian__box-image">
                                <img src="<?php echo esc_url($box_image); ?>" alt="box Image">
                            </div>
                            <div class="bakery_antiab__box-content">
                                <h4><?php echo esc_html($slide['box_title']); ?></h4>
                                <?php 
                                $box_link = vc_build_link($slide['box_link']);
                                if (!empty($box_link['url'])) {
                                    echo '<a href="'.esc_url($box_link['url']).'">'.esc_html($box_link['title']).'</a>';
                                }
                                ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</div>
