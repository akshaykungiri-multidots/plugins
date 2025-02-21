/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

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
    imageBlockStyle,
    imageBlockList,
    subTitleFontColor,
    titleFontColor,
    headingContentFontColor,
    imageTitleFontColor,
    imageContentFontColor,
    imageLearnMoreFontColor,
    numberOfColumns,
    showImage,
    showTitle,
    showContent,
    showLink,
    showSubHeading,
    showHeadingContent,
    showHeading,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_porto_image_block" })}>
      <div className={`md_porto_image_block ${imageBlockStyle}`}>
        <div className="md_porto_image_block__head">
          <div className="wrapper-inner">
            <div className="md_porto_image_block__heading">
              {showSubHeading && (
                <RichText.Content
                  tagName="h3"
                  value={subTitle}
                  style={{
                    color: subTitleFontColor,
                  }}
                />
              )}
              {showHeading && (
                <RichText.Content
                  tagName="h2"
                  value={title}
                  style={{ color: titleFontColor }}
                />
              )}
              {showHeadingContent && (
                <RichText.Content
                  tagName="p"
                  value={headingContent}
                  style={{
                    color: headingContentFontColor,
                  }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="wrapper-inner">
          <div
            className="md_porto_image_block__content"
            style={{ gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }}
          >
            {imageBlockList &&
              imageBlockList.map((postObj, index) => (
                <div
                  className="md_porto_image_block__item  show-items-hover-wrap"
                  key={index}
                >
                  {showImage && (
                    <div className="md_porto_image_block__item__image">
                      {postObj.image_image && (
                        <img
                          src={postObj.image_image}
                          alt={postObj.image_title}
                        />
                      )}
                    </div>
                  )}
                  <div className="md_porto_image_block__item__content">
                    {showTitle && (
                      <h3
                        className="column-item-title"
                        style={{ color: imageTitleFontColor }}
                      >
                        {imageBlockStyle === "style4" && (
                          <i className="fa fa-check-circle"></i>
                        )}
                        <RichText.Content
                          tagName="span"
                          value={postObj.image_title}
                        />
                      </h3>
                    )}
                    <div className="md_porto_image_block__item__content__link">
                      {showContent && (
                        <RichText.Content
                          tagName="p"
                          className="column-item-desc"
                          value={postObj.image_description}
                          style={{
                            color: imageContentFontColor,
                          }}
                        />
                      )}
                    </div>
                  </div>
                  {showLink && (
                    <RichText.Content
                      tagName="p"
                      className="learn-more-link"
                      value={postObj.learn_more_link}
                      style={{
                        color: imageLearnMoreFontColor,
                      }}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
