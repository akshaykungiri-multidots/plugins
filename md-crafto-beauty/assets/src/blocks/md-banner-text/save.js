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
    subHeading,
    heading,
    description,
    showHeading,
    showSubHeading,
    showDescription,
    subHeadingColor,
    headingColor,
    descriptionColor,
    buttonLink,
    showButton,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
  } = attributes;
  return (
    <div {...useBlockProps.save()}>
      <style>
        {`
          .md_crafto_beauty_icon_block__btn {
            color: ${buttonColor};
            background: ${buttonBackgroundColor};
          }
          .md_crafto_beauty_icon_block__btn:hover {
            color: ${buttonHoverColor} !important;
            background: ${buttonHoverBackgroundColor};
          }
        `}
      </style>
      <div className="md_banner_text">
        <div className="md_banner_text__wrapper">
          <div className="md_banner_text__heading_wrapper">
            {showSubHeading && (
              <RichText.Content
                className="md_banner_text__sub_heading"
                tagName="p"
                value={subHeading}
                placeholder={__("Sub Heading", "md-logo-slider")}
                style={{ color: subHeadingColor }}
              />
            )}
            {showHeading && (
              <RichText.Content
                tagName="h2"
                className="md_banner_text__heading"
                value={heading}
                placeholder={__("Heading", "md-logo-slider")}
                style={{ color: headingColor }}
              />
            )}
            {showDescription && (
              <RichText.Content
                tagName="p"
                className="md_banner_text__description"
                value={description}
                placeholder={__("Description", "md-logo-slider")}
                style={{ color: descriptionColor }}
              />
            )}
            <div className="md_crafto_beauty_icon_block__btn_wrapper">
              {showButton && (
                <div className="btn-anitian md_crafto_beauty_icon_block__btn md-btn-main btn-extra-large has-right-arrow">
                  <RichText.Content
                    tagName="span"
                    value={buttonLink}
                    placeholder={__("Enter Button Text", "md-crafto-beauty")}
                  />
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
