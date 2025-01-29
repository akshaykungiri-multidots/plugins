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
    <div {...useBlockProps.save({ className: "md_healthstream_card_block" })}>
      <div className={`md_healthstream_card_block ${cardBlockStyle}`}>
        <div className="md_healthstream_card_block__head">
          <div className="wrapper-inner">
            <div className="md_healthstream_card_block__heading">
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
            className="md_healthstream_card_block__content"
            style={{ gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }}
          >
            {cardBlockList &&
              cardBlockList.map((postObj, index) => (
                <div
                  className="md_healthstream_card_block__item  show-items-hover-wrap"
                  key={index}
                >
                  {showImage && (
                    <div className="md_healthstream_card_block__item__image">
                      {postObj.card_image && (
                        <img
                          src={postObj.card_image}
                          alt={postObj.card_title}
                        />
                      )}
                    </div>
                  )}
                  <div className="md_healthstream_card_block__item__content">
                    {showTitle && (
                      <h3
                        className="column-item-title"
                        style={{ color: cardTitleFontColor }}
                      >
                        {cardBlockStyle === "style4" && (
                          <i className="fa fa-check-circle"></i>
                        )}
                        <RichText.Content
                          tagName="span"
                          value={postObj.card_title}
                        />
                      </h3>
                    )}
                    <div className="md_healthstream_card_block__item__content__link">
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
                    </div>
                  </div>
                  {showLink && (
                    <a href={postObj.learn_more_link} className="learn-more">
                      <span className="fa fa-chevron-right"></span>
                    </a>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
