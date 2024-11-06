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
    backgroundImage,
    columnList,
    buttonText,
    headingFontColor,
    columnTitleFontColor,
    columnDescriptionFontColor,
    showHeading,
    showColumnTitle,
    showColumnDescription,
    showColumnImage,
    showButton,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "md_three_column_block" })}>
      <section
        class="storyful-three-col-list"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div class="container">
          {showHeading && (
            <div class="storyful-three-col-list__title">
              <RichText.Content
                tagName="h2"
                value={heading}
                style={{
                  color: headingFontColor,
                }}
              />
            </div>
          )}
          <div class="threecol-wrap">
            <div class="threecol-list-items">
              {columnList &&
                columnList.map((postObj, index) => (
                  <div class="threecol-list-items__item">
                    {showColumnImage && (
                      <div class="column-item-img">
                        {postObj.image && <img src={postObj.image} />}
                      </div>
                    )}
                    {showColumnTitle && (
                      <RichText.Content
                        tagName="h3"
                        className="column-item-title"
                        value={postObj.title}
                        style={{
                          color: columnTitleFontColor,
                        }}
                      />
                    )}
                    {showColumnDescription && (
                      <RichText.Content
                        tagName="p"
                        className="column-item-desc"
                        value={postObj.description}
                        style={{
                          color: columnDescriptionFontColor,
                        }}
                      />
                    )}
                  </div>
                ))}
            </div>
			{showButton && (
            <div class="sbtn sbtn-arrow-primary-v2 wow fadeInLeft">
              <div class="storyful-three-col-list__button">
                <RichText.Content
                  tagName="a"
                  value={buttonText}
                  className="btn btn-primary"
                />
              </div>
            </div>
			)}
          </div>
        </div>
      </section>
    </div>
  );
}
