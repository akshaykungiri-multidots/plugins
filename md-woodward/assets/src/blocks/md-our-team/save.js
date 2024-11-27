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
    subHeading,
    heading,
    content,
    buttonText,
    bannerLink,
    mediaGallery,
    showSubHeading,
    showContent,
    showButton,
    showBannerLink,
    subHeadingColor,
    headingColor,
    contentColor,
    contentBackgroundColor,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    bannerLinkColor,
    autoplay,
    autoplaySpeed,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_our_team" })}>
      <style>
        {`
          .md-our-team-button {
            color: ${buttonColor};
            background: ${buttonBackgroundColor};
          }
          .md-our-team-button:hover {
            color: ${buttonHoverColor};
            background: ${buttonHoverBackgroundColor};
          }
        `}
      </style>
      <div className={`md_our_team_wrapper ${layout}`}>
        <div
          className="md_our_team_content"
          style={{ background: contentBackgroundColor }}
        >
          <div className="md_our_team_content_inner">
            {showSubHeading && (
              <RichText.Content
                tagName="span"
                value={subHeading}
                style={{ color: subHeadingColor }}
                placeholder={__("Enter Sub Heading")}
                className="md-our-team-subheading"
              />
            )}
            <RichText.Content
              tagName="h2"
              value={heading}
              style={{ color: headingColor }}
              placeholder={__("Enter Heading")}
              className="md-our-team-heading"
            />
            {showContent && (
              <RichText.Content
                tagName="p"
                value={content}
                style={{ color: contentColor }}
                placeholder={__("Enter Content")}
                className="md-our-team-content"
              />
            )}
            <div className="md-our-team-button_wrapper">
              {showButton && (
                <RichText.Content
                  tagName="p"
                  value={buttonText}
                  placeholder={__("Enter Button Text")}
                  className="md-our-team-button md-btn-main has-right-arrow"
                />
              )}
              {showBannerLink && (
                <RichText.Content
                  tagName="p"
                  value={bannerLink}
                  placeholder={__("Enter Button Link")}
                  className="md-our-team-button-link md-btn-main btn-link-right-arrow animated-arrow"
                  style={{ color: bannerLinkColor }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="md_our_team_media">
          <div className="md_our_team_media__wrapper">
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
        </div>
      </div>
    </div>
  );
}
