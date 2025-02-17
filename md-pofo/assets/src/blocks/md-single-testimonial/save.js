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
    signatureImage,
    authorName,
    authorPosition,
    buttonLink,
    mediaPosition,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    authorNameColor,
    authorPositionColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showSignatureImage,
    showAuthorName,
    showAuthorPosition,
    showButton,
    mediaImage,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    contentBackgroundColor,
  } = attributes;

  return (
    <div {...useBlockProps.save({ className: "md_pofo_video_header_section" })}>
      <div className={`md_pofo_image_banner_wrap`}>
        <style>
          {`
            .md_pofo_image_banner__btn {
              color: ${buttonColor};
              background: ${buttonBackgroundColor};
            }
            .md_pofo_image_banner__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor};
            }
          `}
        </style>
        <div className="md_pofo_image_banner" style={{ backgroundColor }}>
          <div
            className="md_pofo_image_banner__inner"
            style={{
              flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
            }}
          >
            <div
              className="md_pofo_image_banner__heading"
              style={{ backgroundColor: contentBackgroundColor }}
            >
              {showSubTitle && (
                <RichText.Content
                  tagName="h4"
                  value={subTitle}
                  placeholder={__("Enter Sub Title", "md-pofo")}
                  style={{
                    color: subTitleColor,
                  }}
                />
              )}
              {showTitle && (
                <div className="md_pofo_image_banner__title">
                  <span className="md_pofo_image_banner__quote">“</span>
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    placeholder={__("Enter Title", "md-pofo")}
                    style={{ color: titleColor }}
                  />
                </div>
              )}
              {showHeadingContent && (
                <RichText.Content
                  tagName="p"
                  className="md_pofo_image_banner__content"
                  value={headingContent}
                  placeholder={__("Enter Content", "md-pofo")}
                  style={{
                    color: headingContentColor,
                  }}
                />
              )}
              {showSignatureImage && signatureImage && (
                <div className="md_pofo_image_banner__signature">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover">
                    <img src={signatureImage} alt="" />
                  </div>
                </div>
              )}
              <div className="md_pofo_image_banner__author">
                {showAuthorName && (
                  <RichText.Content
                    tagName="h5"
                    value={authorName}
                    placeholder={__("Enter Author Name", "md-pofo")}
                    style={{
                      color: authorNameColor,
                    }}
                  />
                )}
                {showAuthorPosition && (
                  <RichText.Content
                    tagName="p"
                    value={authorPosition}
                    placeholder={__("Enter Author Position", "md-pofo")}
                    style={{
                      color: authorPositionColor,
                    }}
                  />
                )}
              </div>
              <div className="md_pofo_image_banner__btn_wrapper">
                {showButton && (
                  <RichText.Content
                    className="md_pofo_image_banner__btn md_btn md_btn-transparent-white md_btn-medium xs-margin-two-all border-radius-4 first-btn"
                    tagName="span"
                    value={buttonLink}
                    placeholder={__("Enter Button Text", "md-pofo")}
                  />
                )}
              </div>
            </div>
            <div
              className="md_pofo_image_banner__media"
              style={{
                backgroundImage: `url(${mediaImage})`,
              }}
            >
              <div className="md-prime-block-control image-preview image-controle-visible-hover"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
