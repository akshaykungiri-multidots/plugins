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

import placeholder from "./placeholder-image.png";

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
    logosTitleColor,
    logosDescriptionColor,
    logos,
  } = attributes;
  const siteURL = window.location.origin;
  return (
    <div {...useBlockProps.save()}>
      <div className="md_icon_text">
        <div className="md_icon_text__heading_wrapper">
          <div className="md_icon_text__heading_wrapper__left">
          {showSubHeading && (
            <RichText.Content
              className="md_icon_text__sub_heading"
              tagName="p"
              value={subHeading}
              placeholder={__("Sub Heading", "md-logo-slider")}
              style={{ color: subHeadingColor }}
            />
          )}
          {showHeading && (
            <RichText.Content
              tagName="h2"
              className="md_icon_text__heading"
              value={heading}
              placeholder={__("Heading", "md-logo-slider")}
              style={{ color: headingColor }}
            />
          )}
          </div>
          <div className="md_icon_text__heading_wrapper__right">
          {showDescription && (
            <RichText.Content
              tagName="p"
              className="md_icon_text__description"
              value={description}
              placeholder={__("Description", "md-logo-slider")}
              style={{ color: descriptionColor }}
            />
          )}
          </div>
        </div>
        <div  className="md_icon_text__slider">
          {logos &&
            logos.map((postObj) => (
              <div key={postObj.id} className="logo-slide show-items-hover-wrap">
                <div className="md_icon_text__item-image">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover">
                    {postObj.image ? (
                      <img src={postObj.image} alt={"slider"} />
                    ) : (
                      <img src={siteURL + placeholder} alt={"slider"} />
                    )}
                  </div>
                  <RichText.Content
                    tagName="h4"
                    className="image-title"
                    value={postObj.imageTitle}
                    placeholder={__("Image Title", "md-prime")}
                    style={{ color: logosTitleColor }}
                  />
                  <RichText.Content
                    tagName="p"
                    className="image-text"
                    value={postObj.imageText}
                    placeholder={__("Image Text", "md-prime")}
                    style={{ color: logosDescriptionColor }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
