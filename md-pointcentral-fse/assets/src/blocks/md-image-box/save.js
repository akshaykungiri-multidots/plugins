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
    title,
    themeStyle,
    numberOfColumns,
    imageItems,
    buttonLink,
    titleColor,
    imageItemTitleColor,
    buttonColor,
    buttonTextColor,
    showHeading,
    showImageTitle,
    showButton,
  } = attributes;
  return (
    <div {...useBlockProps.save({ className: "MD_Pointcentral_Image_Box" })}>
      <div className={`pointcentral-press-listing ${themeStyle}`}>
        <div className="md_container">
          {showHeading && (
            <div className="pointcentral-press-listing__header">
              <RichText.Content
                tagName="h2"
                className="pointcentral-press-listing__title"
                value={title}
                style={{ color: titleColor }}
              />
            </div>
          )}
          <div className="pointcentral-press-listing__items">
            {imageItems &&
              imageItems.map((postObj, index) => (
                <div
                  className="pointcentral-press-listing__item show-items-hover-wrap"
                  style={{ width: `calc(100% / ${numberOfColumns} - 30px)` }}
                  key={index}
                >
                  <div className="pointcentral-press-listing__item-image">
                    <div className="md-prime-block-control image-preview image-controle-visible-hover">
                      <div
                        className={`image-controls small-icons icon-center-fixed`}
                      >
                        {postObj.image && (
                          <img src={postObj.image} alt={"slider"} />
                        )}
                      </div>
                    </div>
                  </div>
                  {showImageTitle && (
                    <div className="pointcentral-press-listing__item-title">
                      <RichText.Content
                        tagName="div"
                        className="pointcentral-press-listing__item-link"
                        style={{ color: imageItemTitleColor }}
                        value={postObj.title}
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>
          {showButton && (
            <div className="pointcentral-press-listing__button">
              <RichText.Content
                tagName="span"
                style={{ backgroundColor: buttonColor, color: buttonTextColor }}
                className="pointcentral-press-listing__button"
                value={buttonLink}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
