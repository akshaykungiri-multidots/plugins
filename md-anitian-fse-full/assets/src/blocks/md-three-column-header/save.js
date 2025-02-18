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
    bannerTitle,
    backgroundMediaImage,
    columnList,
    bannerTitleColor,
    columnTitleColor,
    columnContentColor,
    columnLinkColor,
    showBannerTitle,
    showColumnImage,
    showColumnTitle,
    showColumnContent,
    showColumnLink,
  } = attributes;
  return (
    <div
      {...useBlockProps.save({
        className: "md_anitian_three_column_header_section",
      })}
    >
      <div className="md_anitian_three_column_header">
        <div
          className="md_anitian_three_column_header__bg_image"
          style={{ backgroundImage: `url(${backgroundMediaImage})` }}
        >
          <div className="container">
            {showBannerTitle && (
            <div className="md_anitian_three_column_header__heading">
              <RichText.Content
                tagName="h2"
                value={bannerTitle}
                style={{
                  color: bannerTitleColor,
                }}
              />
            </div>
            )}
          </div>
        </div>
        <div className="container">
          <div className="md_anitian_three_column_header__content">
            {columnList &&
              columnList.map((postObj, index) => (
                <div className="md_anitian_three_column_header__item  show-items-hover-wrap" key={index}>
                  {showColumnImage && (
                  <div className="md_anitian_three_column_header__item__image">
                    {postObj.image && (
                      <img src={postObj.image} alt={"postImage"} />
                    )}
                  </div>
                  )}
                  <div className="md_anitian_three_column_header__item__content">
                    {showColumnTitle && (
                    <RichText.Content
                      tagName="h5"
                      value={postObj.column_title}
                      style={{
                        color: columnTitleColor,
                      }}
                    />
                    )}
                    {showColumnContent && (
                    <RichText.Content
                      tagName="p"
                      value={postObj.column_description}
                      style={{
                        color: columnContentColor,
                      }}
                    />
                    )}
                    {showColumnLink && (
                    <RichText.Content
                      tagName="a"
                      className="md_anitian_three_column_header__item__link"
                      value={postObj.column_link}
                      style={{
                        color: columnLinkColor,
                      }}
                    />
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
