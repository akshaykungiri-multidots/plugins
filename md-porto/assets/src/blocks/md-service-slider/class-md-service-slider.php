<?php

/**
 * Registers the md-porto/md-service-slider block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-porto
 */

namespace MD_PORTO\Blocks;

use MD_PORTO\Includes\Block_Base;
use WP_Block;

/**
 *  Class for the md-porto/md-service-slider block.
 */
class MD_Service_Slider extends Block_Base
{

  /**
   * Constructor.
   */
  public function __construct()
  {
    $this->_block = 'md-service-slider';
    $this->setup_hooks();
  }

  /**
   * To register action/filter.
   *
   * @return void
   */
  protected function setup_hooks()
  {
    add_filter('md_porto_gutenberg_blocks_config', array($this, 'localize_block_data'));

    // register end point to get service posts using rest api.
    add_action('rest_api_init', array($this, 'register_service_posts_endpoint'));
  }

  /**
   * Localize template data.
   *
   * @param array $blocks_config Block configuration.
   * @return array Updated block configuration.
   */
  public function localize_block_data(array $blocks_config): array
  {
    // Merge your block data into blocks_config.
    return array_merge(
      $blocks_config,
      array(
        'sample_dynamic_block_config' => array(
          'data_key' => 'data_value',
        ),
      )
    );
  }

  /**
   * Render block.
   *
   * @param array    $attributes   Block attributes.
   * @param string   $content      Block content.
   * @param WP_Block $block        Block object.
   * @return string
   */
  public function render_callback(
    // phpcs:disable VariableAnalysis.CodeAnalysis.VariableAnalysis.UnusedVariable
    array $attributes,
    string $content,
    WP_Block $block
    // phpcs:enable
  ): string {

    // get string of attributes of the features that the block supports.
    $wrapper_attributes = get_block_wrapper_attributes();

    // attributes.
    $heading = isset($attributes['heading']) ? $attributes['heading'] : '';
    $subHeading = isset($attributes['subHeading']) ? $attributes['subHeading'] : '';
    $headingContent = isset($attributes['headingContent']) ? $attributes['headingContent'] : '';
    $autoplay = isset($attributes['autoplay']) ? $attributes['autoplay'] : '';
    $arrows = isset($attributes['arrows']) ? $attributes['arrows'] : '';
    $dots = isset($attributes['dots']) ? $attributes['dots'] : '';
    $slideInfinite = isset($attributes['slideInfinite']) ? $attributes['slideInfinite'] : '';
    $slideSlidesToShow = isset($attributes['slideSlidesToShow']) ? $attributes['slideSlidesToShow'] : '';
    $slideSlidesToScroll = isset($attributes['slideSlidesToScroll']) ? $attributes['slideSlidesToScroll'] : '';
    $showHeading = isset($attributes['showHeading']) ? $attributes['showHeading'] : '';
    $showSubHeading = isset($attributes['showSubHeading']) ? $attributes['showSubHeading'] : '';
    $showContent = isset($attributes['showContent']) ? $attributes['showContent'] : '';
    $subHeadingColor = isset($attributes['subHeadingColor']) ? $attributes['subHeadingColor'] : '';
    $headingColor = isset($attributes['headingColor']) ? $attributes['headingColor'] : '';
    $contentColor = isset($attributes['contentColor']) ? $attributes['contentColor'] : '';
    $serviceTitleColor = isset($attributes['serviceTitleColor']) ? $attributes['serviceTitleColor'] : '';
    $serviceCategoryColor = isset($attributes['serviceCategoryColor']) ? $attributes['serviceCategoryColor'] : '';
    $serviceCategoryBgColor = isset($attributes['serviceCategoryBgColor']) ? $attributes['serviceCategoryBgColor'] : '';
    $footerText = isset($attributes['footerText']) ? $attributes['footerText'] : '';
    $footerTextColor = isset($attributes['footerTextColor']) ? $attributes['footerTextColor'] : '';
    $showFooter = isset($attributes['showFooter']) ? $attributes['showFooter'] : '';

    // Get service posts using WP_Query.
    $service_posts = new \WP_Query(
      array(
        'post_type' => 'service',
        'posts_per_page' => -1,
      )
    );

    ob_start();
?>
    <div <?php echo wp_kses_post($wrapper_attributes); ?>>
      <div class="service-slider">
        <div class="service-slider__inner">
          <div class="service-slider__content">
            <div class="service-slider__heading_wrapper">
              <?php if ($showSubHeading) : ?>
                <h4 class="service-slider__sub-heading" style="color: <?php echo esc_attr($subHeadingColor); ?>"><?php echo esc_html($subHeading); ?></h4>
              <?php endif; ?>
              <?php if ($showHeading) : ?>
                <h2 class="service-slider__heading" style="color: <?php echo esc_attr($headingColor); ?>"><?php echo esc_html($heading); ?></h2>
              <?php endif; ?>
              <?php if ($showContent) : ?>
                <div class="service-slider__heading-content" style="color: <?php echo esc_attr($contentColor); ?>"><?php echo wp_kses_post($headingContent); ?></div>
              <?php endif; ?>
            </div>
          </div>
          <div class="service-slider__slider">
            <div class="service-slider__slider-inner md_slider" data-autoplay="<?php echo esc_attr($autoplay); ?>" data-arrows="false" data-dots="<?php echo esc_attr($dots); ?>" data-infinite="<?php echo esc_attr($slideInfinite); ?>" data-slides-to-show="<?php echo esc_attr($slideSlidesToShow); ?>" data-slides-to-scroll="<?php echo esc_attr($slideSlidesToScroll); ?>">
              <?php
              if ($service_posts->have_posts()) :
                while ($service_posts->have_posts()) :
                  $service_posts->the_post();
                  $service_category = get_the_terms(get_the_ID(), 'service_category');
                  $service_excerpt = get_the_excerpt();
                  $max_excerpt_length = 100;
                  if (strlen($service_excerpt) > $max_excerpt_length) {
                    $service_excerpt = substr($service_excerpt, 0, $max_excerpt_length) . '...';
                  }
              ?>
                  <div class="service-slider__slide">
                    <div class="service-slider__slide-image">
                      <img src="<?php echo esc_url(get_the_post_thumbnail_url()); ?>" alt="<?php echo esc_attr(get_the_title()); ?>" />
                    </div>
                    <div class="service-slider__slide-content">
                      <div class="service-slider__slide-text">
                        <h3 class="service-slider__slide-title" style="color: <?php echo esc_attr($serviceTitleColor); ?>"><?php echo esc_html(get_the_title()); ?></h3>
                        <?php if ($service_category) : ?>
                          <div class="service-slider__slide-category">
                            <?php
                            foreach ($service_category as $category) {
                              echo "<span class='service-slider__slide-category-item' style='color: " . esc_attr($serviceCategoryColor) . "; background-color: " . esc_attr($serviceCategoryBgColor) . "'>" . esc_html($category->name) . "</span>";
                            }
                            ?>
                          </div>
                        <?php endif; ?>
                        <div class="service-slider__slide-excerpt">
                          <?php echo wp_kses_post($service_excerpt); ?>
                        </div>
                        <div class="service-slider__slide-readmore__wrapper">
                          <div class="service-slider__slide-readmore">
                            <a href="<?php echo esc_url(get_the_permalink()); ?>" class="md_view_details">
                              <?php esc_html_e('View Details', 'md-porto'); ?>
                            </a>
                            <a href="<?php echo esc_url(get_the_permalink()); ?>" class="btn btn-primary">
                              <i class="fa fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              <?php
                endwhile;
              endif;
              wp_reset_postdata();
              ?>
            </div>
          </div>
          <?php if ($arrows) : ?>
            <div class="service-slider__slick_arrows">
              <button type="button" class="slick-prev">
                <i class="fa fa-angle-left"></i>
              </button>
              <button type="button" class="slick-next">
                <i class="fa fa-angle-right"></i>
              </button>
            </div>
          <?php endif; ?>
        </div>
        <?php if ($showFooter) : ?>
          <div class="service-slider__footer">
            <i class="fa fa-envelope"></i>
            <div class="service-slider__footer-text" style="color: <?php echo esc_attr($footerTextColor); ?>">
              <?php echo wp_kses_post($footerText); ?>
            </div>
          </div>
        <?php endif; ?>
      </div>
    </div>
<?php
    return ob_get_clean();
  }

  /**
   * Register service posts endpoint.
   *
   * @return void
   */
  public function register_service_posts_endpoint()
  {
    register_rest_route(
      'md-porto/v1',
      '/service-posts',
      array(
        'methods' => 'GET',
        'callback' => array($this, 'get_service_posts'),
        'permission_callback' => '__return_true',
      ),
    );
  }

  /**
   * Get service posts.
   *
   * @param \WP_REST_Request $request Request object.
   * @return \WP_REST_Response
   */
  public function get_service_posts(\WP_REST_Request $request): \WP_REST_Response // phpcs:ignore
  {
    $service_posts = new \WP_Query(
      array(
        'post_type' => 'service',
        'posts_per_page' => -1,
      )
    );

    $posts = array();
    if ($service_posts->have_posts()) {
      while ($service_posts->have_posts()) {
        $service_posts->the_post();
        $service_icon = get_post_meta(get_the_ID(), 'service_icon', true);
        $service_subtitle = get_post_meta(get_the_ID(), 'service_subtitle', true);
        $service_category = get_the_terms(get_the_ID(), 'service_category');
        $service_excerpt = get_the_excerpt();
        $max_excerpt_length = 100;
        if (strlen($service_excerpt) > $max_excerpt_length) {
          $service_excerpt = substr($service_excerpt, 0, $max_excerpt_length) . '...';
        }
        $posts[] = array(
          'id' => get_the_ID(),
          'title' => get_the_title(),
          'excerpt' => $service_excerpt,
          'thumbnail' => get_the_post_thumbnail_url(),
          'icon' => $service_icon,
          'subtitle' => $service_subtitle,
          'category' => $service_category,
          'permalink' => get_the_permalink(),
        );
      }
    }

    wp_reset_postdata();

    return rest_ensure_response($posts);
  }
}
