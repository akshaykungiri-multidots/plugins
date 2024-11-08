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
    heading,
    historyTimeline,
    headingFontColor,
    yearFontColor,
    titleFontColor,
    descriptionFontColor,
    showHeading,
    showYear,
    showDescription,
  } = attributes;
  return (
    <div
      {...useBlockProps.save({ className: "md_history_timeline history-list" })}
    >
      <div className="history-list__inner">
        {showHeading && (
          <div className="history-list__head">
            <RichText.Content
              tagName="h2"
              className="history-list__title"
              value={heading}
              style={{
                color: headingFontColor,
              }}
            />
          </div>
        )}
        <div className="history-list__row">
          <div className="history-list__years-wrap">
            <div className="history-list__years-bar">
              <div className="history-list__years-barinnner"></div>
            </div>
            <div className="history-list__years-list">
              {historyTimeline &&
                historyTimeline.map((postObj, index) => (
                  <div
                    className="history-list__year-item"
                    key={index}
                    data-getyear={"year-" + index}
                  >
                    <RichText.Content
                      tagName="p"
                      className="history-list__year history-list__year-title"
                      value={postObj.year}
                      style={{
                        color: yearFontColor,
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="history-list__year-detail">
            {historyTimeline &&
              historyTimeline.map((postObj, currentSlide) => (
                <div
                  key={currentSlide}
                  className="history-list__year-detail-item"
                  data-year={"year-" + currentSlide}
                >
                  <div className="history-list__cnt">
                    {showYear && (
                      <h3 className="history-list__year-title" style={{ color: titleFontColor }}>
                        {historyTimeline[currentSlide].year}
                      </h3>
                    )}
                    {showDescription && (
                      <RichText.Content
                        tagName="p"
                        className="history-list__year-description"
                        value={historyTimeline[currentSlide].description}
                        style={{
                          color: descriptionFontColor,
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
