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
    description,
    mediaPosition,
    backgroundColor,
    subTitleColor,
    titleColor,
    descriptionColor,
    showSubTitle,
    showTitle,
    showDescription,
    mediaImage,
    showMediaImage,
    buttonText,
    buttonTextColor,
    buttonBackgroundColor,
    buttonTextHoverColor,
    buttonBackgroundHoverColor,
    showButton,
  } = attributes;

  return (
    <div {...useBlockProps.save({ className: "md_litho_image_banner_section" })}>
      <style>
        {`
          .md_litho_image_banner__button {
            background: ${buttonBackgroundColor};
            color: ${buttonTextColor};
          }
          .md_litho_image_banner__button:hover {
            background: ${buttonBackgroundHoverColor} !important;
            color: ${buttonTextHoverColor} !important;
          }
        `}
      </style>
      <div className={`md_litho_image_banner_wrap`}>
        <div className="md_litho_image_banner" style={{ backgroundColor }}>
          <div className="container">
            <div
              className="md_litho_image_banner__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_litho_image_banner__heading">
                {showSubTitle && (
                  <RichText.Content
                    tagName="h4"
                    className="md_litho_image_banner__sub_title"
                    value={subTitle}
                    placeholder={__("Enter Sub Title", "md-litho")}
                    style={{
                      color: subTitleColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText.Content
                    tagName="h2"
                    className="md_litho_image_banner__title"
                    value={title}
                    placeholder={__("Enter Title", "md-litho")}
                    style={{ color: titleColor }}
                  />
                )}
                {showDescription && (
                  <RichText.Content
                    tagName="p"
                    className="md_litho_image_banner__description"
                    value={description}
                    placeholder={__("Enter Description", "md-litho")}
                    style={{ color: descriptionColor }}
                  />
                )}
                {showButton && (
                  <div className="md_litho_image_banner__button_wrap">
                    <RichText.Content
                      tagName="p"
                      className="md_litho_image_banner__button md-btn-main has-right-arrow"
                      value={buttonText}
                      placeholder={__("Enter Button Text", "md-litho")}
                      style={{
                        color: buttonTextColor,
                        backgroundColor: buttonBackgroundColor,
                      }}
                    />
                  </div>
                )}
              </div>
              {showMediaImage && (
              <div className="md_litho_image_banner__media">
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_litho_image_banner__media1">
                  <img
                    src={mediaImage}
                    alt={"slider"}
                  />
                  <span className="image-overlay"></span>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
