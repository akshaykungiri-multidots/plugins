<?php
/**
 * The Storyful Our Story functionality of the plugin.
 *
 * @package    MD_STORYFUL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_STORYFUL\Includes\Addons;


/**
 * Storyful_Our_Story class
 * 
 * @since 1.0.0
 */
class Storyful_Our_Story {

    // Create Storyful Our Story Custom Elements for Bakery.

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     */
    public function __construct() {
        add_action('vc_before_init', array($this, 'storyful_our_story'));
        add_shortcode('storyful_our_story', array($this, 'storyful_our_story_html'));
    }

    /**
     * Function is used to create Storyful Our Story custom element.
     */
    public function storyful_our_story() {

        // Storyful Our Story.
        vc_map(array(
            'name' => __('Storyful Our Story', 'md-bakery-antian'),
            'base' => 'storyful_our_story',
            'params' => array(
                // Our Story Text
                array(
                    'type' => 'textarea',
                    'heading' => __('Our Story Text', 'md-bakery-antian'),
                    'param_name' => 'our_story_text',
                    'value' => '',
                    'description' => __('Enter Our Story text.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Our Story Title
                array(
                    'type' => 'textfield',
                    'heading' => __('Our Story Title', 'md-bakery-antian'),
                    'param_name' => 'our_story_title',
                    'value' => '',
                    'description' => __('Enter Our Story title.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Our Story Video Image
                array(
                    'type' => 'attach_image',
                    'heading' => __('Our Story Video Image', 'md-bakery-antian'),
                    'param_name' => 'our_story_video_image',
                    'value' => '',
                    'description' => __('Upload Our Story video image.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
                // Our Story Video Link
                array(
                    'type' => 'textfield',
                    'heading' => __('Our Story Video Link', 'md-bakery-antian'),
                    'param_name' => 'our_story_video_link',
                    'value' => '',
                    'description' => __('Enter Our Story video link.', 'md-bakery-antian'),
                    'admin_label' => true,
                ),
            ),
            'category' => __('Storyful', 'md-bakery-antian'),
            'icon' => 'icon-wpb-film-youtube',
        ));
    }

    /**
     * Function is used to display Storyful Our Story html.
     */
    public function storyful_our_story_html($atts) {

        $atts = shortcode_atts(
            array(
                'our_story_text' => '',
                'our_story_title' => '',
                'our_story_video_image' => '',
                'our_story_video_link' => '',
            ),
            $atts
        );
        ob_start();
        ?>
        <div class="our-story-section">
            <div class="container">
                <div class="our-story-section__left">
                    <div class="text-section">
                        <div class="text-section__para wow fadeInLeft">
                            <?php echo wp_kses_post($atts['our_story_text']); ?>
                        </div>

                    </div>
                </div>
                <div class="our-story-section__right">
                    <div class="media-section">
                        <div class="our-story-text-wrapper wow bounceIn">
                            <h3>
                                <?php echo wp_kses_post($atts['our_story_title']); ?>
                            </h3>
                        </div>
                        <div class="media-video-wrapper">
                            <div class="media-video wow fadeInRight">
                                <button class="media-video__playbtn">
                                    <img src="<?php echo esc_url(get_template_directory_uri().'/assets/src/images/playbtn.svg'); ?>" alt="play button">
                                </button>
                                <img class="self-media" src="<?php echo esc_url(wp_get_attachment_url($atts['our_story_video_image'])); ?>" alt="video image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="video-popups-wrap">
                <div class="video-popup">
                    <div class="close-popup-section">
                        <div class="close-btn">
                            <?php esc_html_e('Close', 'md-bakery-antian'); ?>
                        </div>
                        <video controls="" autoplay="" muted="" loop="" class="video-one hidden video-div">
                            <source src="<?php echo esc_url($atts['our_story_video_link']); ?>" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
        </div>
        <?php
        return ob_get_clean();
    }

}