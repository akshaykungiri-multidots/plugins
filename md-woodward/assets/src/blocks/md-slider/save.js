/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

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
    sliderTitleFontColor,
    sliderDescriptionFontColor,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_slider_section" })}>
      <style>
        {`
          .md_slider__item__content__button {
            color: ${buttonColor};
            background: ${buttonBackgroundColor};
          }
          .md_slider__item__content__button:hover {
            color: ${buttonHoverColor};
            background: ${buttonHoverBackgroundColor};
          }
        `}
      </style>
      <div className="md_hero_banner_slider md_slider_grid">
        <div
          className="md_slider"
          data-autoplay={autoplay}
          data-arrows={arrows}
          data-dots={dots}
          data-infinite={slideInfinite}
          data-slidesToShow={slideSlidesToShow}
          data-slidesToScroll={slideSlidesToScroll}
        >
          {slideItems.map((item, index) => (
            <div className={`md_slider_grid_item active"`} key={index}>
              <div className={`md_slider__item`}>
                <div className="text_video__youtube">
                  <div className="video_section_wrapper" id="MdYTplayer">
                    <div className="wrapper__box-inner">
                      <div
                        className="video-details-wrapper"
                        style={{ textAlign: "center" }}
                      >
                        <div className="video-data-edit">
                          {item.videotype === "youtube" && (
                            <>
                              {item.youtubeurl && (
                                <iframe
                                  src={
                                    item.youtubeurl.replace(
                                      "watch?v=",
                                      "embed/"
                                    ) + "?controls=0"
                                  }
                                  data-src={
                                    item.youtubeurl +
                                    "?enablejsapi=1&controls=0&rel=0"
                                  }
                                  title="video"
                                ></iframe>
                              )}
                            </>
                          )}
                        </div>

                        {item.videotype === "media-upload" && item.mediaurl && (
                          <div className="image-preview image-controle-visible-hover">
                            <video
                              autoPlay=""
                              muted=""
                              loop=""
                              className="self-media"
                            >
                              <source src={item.mediaurl} type="video/mp4" />
                            </video>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="md_slider__item__overlay"
                  style={{
                    backgroundColor: item.overlayColor,
                    opacity: item.overlayOpacity,
                  }}
                ></div>
                <div className="md_slider__item__content">
                  <RichText.Content
                    tagName="h1"
                    className="md_slider__item__content__title"
                    value={item.title}
                    style={{
                      color: sliderTitleFontColor,
                    }}
                  />
                  <RichText.Content
                    tagName="p"
                    className="md_slider__item__content__description"
                    value={item.description}
                    style={{
                      color: sliderDescriptionFontColor,
                    }}
                  />
                  <div className="md_slider__item__content__button-wrap">
                    <RichText.Content
                      tagName="p"
                      className="md_slider__item__content__button md-btn-main has-right-arrow"
                      value={item.buttonText}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
