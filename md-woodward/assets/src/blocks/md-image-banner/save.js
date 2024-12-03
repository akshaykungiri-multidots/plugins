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
    buttonLink,
    mediaPosition,
    cardBackgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    mediaImage,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor
  } = attributes;

  return (
    <div {...useBlockProps.save({ className: "md_woodward_video_header_section" })}>
      <div className={`md_woodward_image_banner_wrap`}>
        <style>
          {`
            .md_woodward_image_banner__btn {
              color: ${buttonColor};
              background: ${buttonBackgroundColor};
            }
            .md_woodward_image_banner__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor};
            }
          `}
        </style>
        <div
          className="md_woodward_image_banner"
        >
          <div className="container">
            <div className="md_woodward_image_banner__inner" style={{ flexDirection: mediaPosition === "left" ? "row-reverse" : "row" }}>
              <div className="md_woodward_image_banner__heading" style={{ backgroundColor: cardBackgroundColor }}>
                {showSubTitle && (
                  <RichText.Content
                    tagName="h4"
                    value={subTitle}
                    placeholder={__("Enter Sub Title", "md-woodward")}
                    style={{
                      color: subTitleColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    placeholder={__("Enter Title", "md-woodward")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText.Content
                    tagName="p"
                    value={headingContent}
                    placeholder={__("Enter Content", "md-woodward")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                {showButton && (
                  <div className="md_woodward_image_banner__btn_wrapper">
                    <RichText.Content
                      className="btn-anitian md_woodward_image_banner__btn md-btn-main has-right-arrow"
                      tagName="p"
                      value={buttonLink}
                      placeholder={__("Enter Button Text", "md-woodward")}
                    />
                  </div>
                )}
              </div>
              <div className="md_woodward_image_banner__media">
                <div className="md-prime-block-control image-preview image-controle-visible-hover">
                  <img
                    src={mediaImage}
                    alt={"slider"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
