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
    mediaContent,
    mediaURL,
    featureTitle,
    featureList,
    showHeading,
    showDescription,
    showMediaContent,
    showMedia,
    showFeatureList,
    mediaPosition,
    headingColor,
    descriptionColor,
    mediaContentColor,
    featureTitleColor,
    featureListColor,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_media_text_block" })}>
      <div className="md_media_text_block__inner">
        {showHeading && (
          <RichText.Content
            tagName="h2"
            className="md_media_text_block__heading"
            value={heading}
            style={{ color: headingColor }}
            placeholder={__("Enter Heading")}
          />
        )}
        {showDescription && (
          <RichText.Content
            className="md_media_text_block__description"
            tagName="p"
            value={description}
            style={{ color: descriptionColor }}
            placeholder={__("Enter Description")}
          />
        )}
        <div className={`md_media_text_block__content__wrapper ${mediaPosition}`}>
          <div className="md_media_text_block__content">
            {showMediaContent && (
              <RichText.Content
                className="md_media_text_block__media_content"
                tagName="p"
                value={mediaContent}
                style={{ color: mediaContentColor }}
                placeholder={__("Enter Media Content")}
              />
            )}
          </div>
          <div className="md_media_text_block__media">
            {showMedia && (
              <div className="md-prime-block-control image-preview image-controle-visible-hover">
                <img
                  src={mediaURL}
                  alt={"slider"}
                />
              </div>
            )}
          </div>
        </div>
        {showFeatureList && (
          <div className="md_media_text_block__feature_list">
            <RichText.Content
              tagName="h3"
              className="md_media_text_block__feature_title"
              value={featureTitle}
              style={{ color: featureTitleColor }}
              placeholder={__("Enter Feature Title")}
            />
            <ul className="md_media_text_block__feature_list__list">
              {featureList.map((item) => (
                <li key={item.id} className="show-items-hover-wrap">
                  <RichText.Content
                    tagName="span"
                    key={item.id}
                    value={item.featureTitle}
                    style={{ color: featureListColor }}
                    placeholder={__("Enter Feature")}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
