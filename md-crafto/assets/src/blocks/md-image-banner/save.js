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
    linkText,
    mediaPosition,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    showLink,
    mediaImage,
    mediaImage2,
    backgroundImage,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    yearsText,
    yearsSubText,
    yearsTextColor,
    yearsSubTextColor,
    linkTextColor,
  } = attributes;

  return (
    <div {...useBlockProps.save({ className: "md_crafto_video_header_section" })}>
      <div className={`md_crafto_image_banner_wrap`}>
        <style>
          {`
            .md_crafto_image_banner__btn {
              color: ${buttonColor};
              background: ${buttonBackgroundColor};
            }
            .md_crafto_image_banner__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor};
            }
          `}
        </style>
        <div className="md_crafto_image_banner" style={{ backgroundColor }}>
          <div className="container">
            <div
              className="md_crafto_image_banner__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_crafto_image_banner__heading">
                {showSubTitle && (
                  <RichText.Content
                    tagName="h4"
                    value={subTitle}
                    placeholder={__("Enter Sub Title", "md-crafto")}
                    style={{
                      color: subTitleColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    value={title}
                    placeholder={__("Enter Title", "md-crafto")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText.Content
                    tagName="p"
                    className="md_crafto_image_banner__content"
                    value={headingContent}
                    placeholder={__("Enter Content", "md-crafto")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                <div className="md_crafto_image_banner__btn_wrapper">
                  {showButton && (
                    <RichText.Content
                      className="btn-anitian md_crafto_image_banner__btn md-btn-main has-right-arrow"
                      tagName="p"
                      value={buttonLink}
                      placeholder={__("Enter Button Text", "md-crafto")}
                    />
                  )}
                  {showLink && (
                  <div className="md_crafto_image_banner__link_wrapper">
                    <i className="bi bi-telephone"></i>
                    <RichText.Content
                      tagName="span"
                      className="md_crafto_image_banner__link"
                      value={linkText}
                      placeholder={__("Link", "md-crafto")}
                      style={{
                        color: linkTextColor,
                      }}
                    />
                  </div>
                  )}
                </div>
              </div>
              <div className="md_crafto_image_banner__media">
                <div className="md_primer_image_banner__year">
                  <RichText.Content
                    tagName="span"
                    className="md_crafto_image_banner__year"
                    value={yearsText}
                    placeholder={__("Enter Year", "md-crafto")}
                    style={{
                      color: yearsTextColor,
                    }}
                  />
                  <RichText.Content
                    tagName="span"
                    className="md_crafto_image_banner__year_sub"
                    value={yearsSubText}
                    placeholder={__("Enter Sub Year", "md-crafto")}
                    style={{
                      color: yearsSubTextColor,
                    }}
                  />
                </div>
                {backgroundImage && (
                  <img
                    src={backgroundImage}
                    alt={"slider"}
                    className="md_crafto_image_banner__background"
                  />
                )}
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_crafto_image_banner__media">
                  <img
                    src={mediaImage}
                    alt={"slider"}
                  />
                </div>
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_crafto_image_banner__media2">
                  <img
                    src={mediaImage2}
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
