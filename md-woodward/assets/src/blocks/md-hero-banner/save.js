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
    heading,
    description,
    headingColor,
    descriptionColor,
    backgroundColor,
    mediaImage,
    showDescription,
    showMedia,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_hero_banner" })}>
      <div
        className="md_hero_banner__inner"
        style={{ background: backgroundColor }}
      >
        <div className="md_hero_banner__content">
          <div className="container">
            <div className="md_hero_banner__content__inner">
              <RichText.Content
                tagName="h1"
                className="md_hero_banner__heading"
                value={heading}
                style={{ color: headingColor }}
                placeholder={__("Enter Heading")}
              />
              {showDescription && (
                <RichText.Content
                  className="md_hero_banner__description"
                  tagName="p"
                  value={description}
                  style={{ color: descriptionColor }}
                  placeholder={__("Enter Description")}
                />
              )}
            </div>
          </div>
        </div>
          <div className="md_hero_banner__media">
        	{showMedia && (
            <div className="md-prime-block-control image-preview image-controle-visible-hover">
              <img
                src={mediaImage}
                alt={"slider"}
              />
            </div>
        	)}	
          </div>
      </div>
    </div>
  );
}
