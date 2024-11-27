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
    layout,
    autoplay,
    autoplaySpeed,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    heading,
    content,
    buttonText,
    mediaGallery,
    staicImage,
    showContent,
    showStaticImage,
    showButton,
    headingColor,
    contentColor,
    contentBackgroundColor,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_media_text_slideshow" })}>
      <style>
        {`
          .md-media-text-slideshow-button {
            color: ${buttonColor};
            background: ${buttonBackgroundColor};
          }
          .md-media-text-slideshow-button:hover {
            color: ${buttonHoverColor};
            background: ${buttonHoverBackgroundColor};
          }
        `}
      </style>
      <div className={`md_media_text_slideshow_wrapper ${layout}`}>
        <div className="md_media_text_slideshow_content" style={{ background: contentBackgroundColor }}>
          <div className="md_media_text_slideshow_content_inner">
            <RichText.Content
              tagName="h2"
              value={heading}
              style={{ color: headingColor }}
              placeholder={__("Enter Heading")}
              className="md-media-text-slideshow-heading"
            />
            {showContent && (
              <RichText.Content
                tagName="p"
                value={content}
                style={{ color: contentColor }}
                placeholder={__("Enter Content")}
                className="md-media-text-slideshow-content"
              />
            )}
            {showButton && (
              <div className="md-media-text-slideshow-button_wrapper">
                <RichText.Content
                  tagName="p"
                  value={buttonText}
                  placeholder={__("Enter Button Text")}
                  className="md-media-text-slideshow-button md-btn-main has-right-arrow"
                />
              </div>
            )}
          </div>
        </div>
        <div className="md_media_text_slideshow_media">
          <div className="md_media_text_slideshow_media__wrapper">
            <div
              className="md_slider"
              data-autoplay={autoplay}
              data-arrows={arrows}
              data-dots={dots}
              data-infinite={slideInfinite}
              data-slidesToShow={slideSlidesToShow}
              data-slidesToScroll={slideSlidesToScroll}
              data-autoplaySpeed={autoplaySpeed}
            >
              {mediaGallery.map((postObj, index) => (
                <div className={`md_slider_grid_item active"`} key={index}>
                  <div className={`md_slider__item`}>
                    <div className="md-prime-block-control image-preview image-controle-visible-hover">
                      {postObj.mediaImage && (
                        <img src={postObj.mediaImage} alt={"slider"} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md_media_text_slideshow_media__static">
            {showStaticImage && (
              <div className="md_media_text_slideshow_media__static__wrapper">
                <div className="md-prime-block-control image-preview image-controle-visible-hover">
                  <img src={staicImage} alt={"slider"} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
