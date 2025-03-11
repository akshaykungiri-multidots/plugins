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
    subTitle,
    title,
    headingContent,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    highlightedText,
    highlightedTextImage,
    showHighlightedText,
    highlightedTextColor,
    highlightedTextBackgroundColor,
    counterNumber,
    counterNumberColor,
    showCounterNumber,
    reviewStars,
    showReviewStars,
    reviewStarsColor,
    reviewStarsBackgroundColor,
    reviewText,
    showReviewText,
    reviewTextColor,
  } = attributes;

  const displayReviewStars = () => {
    const stars = [];
    for (let i = 0; i < reviewStars; i++) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    return stars;
  };

  return (
    <div {...useBlockProps.save({ className: "md_crafto_beauty_service_banner_section" })}>
      <div className={`md_crafto_beauty_service_banner_wrap`}>
        <div className="md_crafto_beauty_service_banner" style={{ backgroundColor }}>
          <div className="container">
            <div className="md_crafto_beauty_service_banner__inner">
              <div className="md_crafto_beauty_service_banner__heading">
                {showSubTitle && (
                  <RichText.Content
                    tagName="h4"
                    value={subTitle}
                    placeholder={__("Enter Sub Title", "md-crafto-beauty")}
                    style={{
                      color: subTitleColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    placeholder={__("Enter Title", "md-crafto-beauty")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText.Content
                    tagName="p"
                    className="md_crafto_beauty_service_banner__content"
                    value={headingContent}
                    placeholder={__("Enter Content", "md-crafto-beauty")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
              </div>
              {showHighlightedText && (
                <div
                  className="md_crafto_beauty_service_banner__highlighted_text"
                  style={{
                    color: highlightedTextColor,
                    background: highlightedTextBackgroundColor,
                  }}
                >
                  {highlightedTextImage && (
                    <img
                      src={highlightedTextImage}
                      alt="Highlighted Text"
                    />
                  )}
                  <RichText.Content
                    tagName="p"
                    value={highlightedText}
                    placeholder={__("Enter Highlighted Text", "md-crafto-beauty")}
                  />
                </div>
              )}
              <div className="md_crafto_beauty_service_banner__footer">
                <div className="md_crafto_beauty_service_banner__footer_left">
                  {showCounterNumber && (
                    <div
                      className="md_crafto_beauty_service_banner__counter"
                      style={{ color: counterNumberColor }}
                    >
                      <RichText.Content
                        tagName="p"
                        value={counterNumber}
                        placeholder={__("Enter Counter Number", "md-crafto-beauty")}
                      />
                    </div>
                  )}
                  {showReviewStars && (
                    <div
                      className="md_crafto_beauty_service_banner__review_stars"
                      style={{
                        color: reviewStarsColor,
                        backgroundColor: reviewStarsBackgroundColor,
                      }}
                    >
                      {displayReviewStars()}
                    </div>
                  )}
                </div>
                <div className="md_crafto_beauty_service_banner__footer_right">
                  {showReviewText && (
                    <div
                      className="md_crafto_beauty_service_banner__review_text"
                      style={{ color: reviewTextColor }}
                    >
                      <RichText.Content
                        tagName="p"
                        value={reviewText}
                        placeholder={__("Enter Review Text", "md-crafto-beauty")}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
