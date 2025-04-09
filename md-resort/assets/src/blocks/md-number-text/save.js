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
 * @param  root0
 * @param  root0.attributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
  const {
    columnList,
    columnTitleFontColor,
    columnDescriptionFontColor,
    borderColor,
    backgroundColor,
    columns,
    enableBorder,
  } = attributes;
  const displayStarRating = (title) => {
    // check title must be number
    if (isNaN(title)) {
      return null;
    }
    const starRating = [];
    for (let i = 0; i < title; i++) {
      starRating.push(<span key={i} className="bi bi-star-fill"></span>);
    }
    return starRating;
  };
  return (
    <div
      {...useBlockProps.save({
        className: "md-counter_block",
      })}
    >
      <style>
        {`
          .resort-stat-number__inner__item:last-child {
            border-right: none !important;
          }
        `}
      </style>
      <div className={`resort-stat-number ${enableBorder ? "none" : "top"}`}>
        <div className="container">
          <div
            className="resort-stat-number__inner"
            style={{
              backgroundColor,
            }}
          >
            {columnList &&
              columnList.map((postObj, index) => (
                <div
                  className="resort-stat-number__inner__item fadeInUp show-items-hover-wrap"
                  key={index}
                  style={{
                    width: `${100 / columns}%`,
                    borderColor
                  }}
                >
                  <div className="item-content-wrap">
                    <RichText.Content
                      tagName="h3"
                      value={postObj.title}
                      style={{
                        color: columnTitleFontColor,
                      }}
                      placeholder={__("0+")}
                    />
                    <div className="column-item-desc">
                      { postObj.enableStar && (
                        <div className="review-star-rating">
                          {displayStarRating(postObj.title)}
                        </div>
                      )}
                      <RichText.Content
                        tagName="p"
                        style={{
                          color: columnDescriptionFontColor,
                        }}
                        value={postObj.description}
                        placeholder={__("Enter Description")}
                      />
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
