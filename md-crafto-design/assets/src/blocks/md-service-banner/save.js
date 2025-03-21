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
    mediaPosition,
    mediaImage,
    mediaImage2,
    showBrands,
    brands,
    brandHeading,
    brandHeadingColor,
  } = attributes;

  const displayReviewStars = () => {
    const stars = [];
    for (let i = 0; i < reviewStars; i++) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    return stars;
  };

  return (
    <div
      {...useBlockProps.save({
        className: "md_crafto_design_service_banner_section",
      })}
    >
      <div className={`md_crafto_design_service_banner_wrap`}>
        <div
          className="md_crafto_design_service_banner"
          style={{ backgroundColor }}
        >
          <div
            className="container"
            style={{
              flexDirection: mediaPosition === "right" ? "row-reverse" : "row",
            }}
          >
            <div className="md_crafto_design_service_banner__inner">
              <div className="md_crafto_design_service_banner__heading">
                {showSubTitle && (
                  <RichText.Content
                    tagName="h4"
                    value={subTitle}
                    placeholder={__("Enter Sub Title", "md-crafto-design")}
                    style={{
                      color: subTitleColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    placeholder={__("Enter Title", "md-crafto-design")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText.Content
                    tagName="p"
                    className="md_crafto_design_service_banner__content"
                    value={headingContent}
                    placeholder={__("Enter Content", "md-crafto-design")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
              </div>
              {showHighlightedText && (
                <div
                  className="md_crafto_design_service_banner__highlighted_text"
                  style={{
                    color: highlightedTextColor,
                    background: highlightedTextBackgroundColor,
                  }}
                >
                  {highlightedTextImage && (
                    <img src={highlightedTextImage} alt="Highlighted Text" />
                  )}
                  <RichText.Content
                    tagName="p"
                    value={highlightedText}
                    placeholder={__(
                      "Enter Highlighted Text",
                      "md-crafto-design"
                    )}
                  />
                </div>
              )}
              <div className="md_crafto_design_service_banner__footer">
                <div className="md_crafto_design_service_banner__footer_left">
                  {showCounterNumber && (
                    <div
                      className="md_crafto_design_service_banner__counter"
                      style={{ color: counterNumberColor }}
                    >
                      <RichText.Content
                        tagName="p"
                        value={counterNumber}
                        placeholder={__(
                          "Enter Counter Number",
                          "md-crafto-design"
                        )}
                      />
                    </div>
                  )}
                  {showReviewStars && (
                    <div
                      className="md_crafto_design_service_banner__review_stars"
                      style={{
                        color: reviewStarsColor,
                        backgroundColor: reviewStarsBackgroundColor,
                      }}
                    >
                      {displayReviewStars()}
                    </div>
                  )}
                </div>
                <div className="md_crafto_design_service_banner__footer_right">
                  {showReviewText && (
                    <div
                      className="md_crafto_design_service_banner__review_text"
                      style={{ color: reviewTextColor }}
                    >
                      <RichText.Content
                        tagName="p"
                        value={reviewText}
                        placeholder={__(
                          "Enter Review Text",
                          "md-crafto-design"
                        )}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="md_crafto_design_service_banner__media">
              {mediaImage && (
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_crafto_design_image_banner__media">
                  <img src={mediaImage} alt={"slider"} />
                </div>
              )}
              {mediaImage2 && (
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_crafto_design_image_banner__media2">
                  <img src={mediaImage2} alt={"slider"} />
                </div>
              )}
            </div>
          </div>
          {showBrands && (
            <div className="md_crafto_design_service_banner__brands">
              <div className="container">
                <div className="md_crafto_design_service_banner__brands_inner">
                  <div className="md_crafto_design_service_banner__brands_heading">
                    <RichText.Content
                      tagName="h3"
                      value={brandHeading}
                      placeholder={__("Heading", "md-crafto-design")}
                      style={{ color: brandHeadingColor }}
                    />
                    <i className="bi bi-heart-fill heart-icon"></i>
                  </div>
                  <div className="md_brands_items">
                    <div className="md_brands_item__inner">
                      {brands.map((item, index) => (
                        <div
                          key={index}
                          className={"md_brands_item show-items-hover-wrap"}
                        >
                          <div className="md_brands_item_inner">
                            <div className="md-prime-block-control image-preview image-controle-visible-hover md_brands_item_inner__media">
                              <img src={item.portfolioImage} alt={"slider"} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
