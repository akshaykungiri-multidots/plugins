/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
  const {
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    slideItems,
    sliderSubTitleFontColor,
    sliderTitleFontColor,
    sliderDescriptionFontColor,
    showSubTitle,
    showTitle,
    showDescription,
    mediaImage,
    mediaImage2,
    mediaImage3,
  } = attributes;
  return (
    <div
      {...useBlockProps.save({
        className: "md_about_slider_section",
      })}
    >
      <div className="md_about_banner_slider__wrap">
        <div className="md_about_banner_slider__wrap__left">
          <div className="md_about_banner_slider md_about_slider_grid">
            <div
            className="md_about_slider"
            data-autoplay={autoplay}
            data-arrows={arrows}
            data-dots={dots}
            data-infinite={slideInfinite}
            data-slidesToShow={slideSlidesToShow}
            data-slidesToScroll={slideSlidesToScroll}
            >
              {slideItems.map((item, index) => (
                <div
                  className={`md_about_slider_grid_item active"`}
                  key={index}
                >
                  <div className={`md_about_slider__item`}>
                    <div className="md_about_slider__item__content">
                      {showSubTitle && (
                        <RichText.Content
                          tagName="h4"
                          className="md_about_slider__item__content__subtitle"
                          value={item.subtitle}
                          placeholder={__("Enter Subtitle", "md-prime")}
                          style={{
                            color: sliderSubTitleFontColor,
                          }}
                        />
                      )}
                      {showTitle && (
                        <RichText.Content
                          tagName="h1"
                          className="md_about_slider__item__content__title"
                          value={item.title}
                          placeholder={__("Enter Title", "md-prime")}
                          style={{
                            color: sliderTitleFontColor,
                          }}
                        />
                      )}
                      {showDescription && (
                        <RichText.Content
                          tagName="p"
                          className="md_about_slider__item__content__description"
                          value={item.description}
                          placeholder={__("Enter Description", "md-prime")}
                          style={{
                            color: sliderDescriptionFontColor,
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md_about_banner_slider__wrap__right">
          <div className="md_resort_image_banner_v2__media">
            <div className="md-prime-block-control image-preview image-controle-visible-hover md_resort_image_banner_v2__media1">
              <img
                src={mediaImage}
                alt={"slider"}
              />
            </div>
            <div className="md-prime-block-control image-preview image-controle-visible-hover md_resort_image_banner_v2__media2">
              <img
                src={mediaImage2}
                alt={"slider"}
              />
            </div>
            <div className="md-prime-block-control image-preview image-controle-visible-hover md_resort_image_banner_v2__media3">
              <img
                src={mediaImage3}
                alt={"slider"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
