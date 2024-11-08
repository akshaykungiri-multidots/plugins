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
    cardBlockStyle,
    cardBlockList,
    subTitleFontColor,
    titleFontColor,
    headingContentFontColor,
    cardTitleFontColor,
    cardContentFontColor,
    cardLearnMoreFontColor,
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
    <div {...useBlockProps.save({ className: "md_anitian_card_block" })}>
      <div className={`md_anitian_card_block ${cardBlockStyle}`}>
        <div className="md_anitian_card_block__head">
          <div className="container">
            <div className="md_anitian_card_block__heading">
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
        <div className="container">
          <div className="md_anitian_card_block__content" style={{ gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }}>
            {cardBlockList &&
              cardBlockList.map((postObj, index) => (
                <div className="md_anitian_card_block__item  show-items-hover-wrap" key={index}>
                  {showImage && (
                  <div className="md_anitian_card_block__item__image">
                    {postObj.card_image && (
                      <img src={postObj.card_image} alt={postObj.card_title} />
                    )}
                  </div>
                  )}
                  <div className="md_anitian_card_block__item__content">
                    {showTitle && (
                    <RichText.Content
                      tagName="h3"
                      className="column-item-title"
                      value={postObj.card_title}
                      style={{
                        color: cardTitleFontColor,
                      }}
                    />
                    )}
                    <div className="md_anitian_card_block__item__content__link">
                      {showContent && (
                      <RichText.Content
                        tagName="p"
                        className="column-item-desc"
                        value={postObj.card_description}
                        style={{
                          color: cardContentFontColor,
                        }}
                      />
                      )}
                      {showLink && (
                      <RichText.Content
                        tagName="p"
                        className="md_anitian_card_block__item__link"
                        value={postObj.learn_more_link}
                        style={{
                          color: cardLearnMoreFontColor,
                        }}
                      />
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
