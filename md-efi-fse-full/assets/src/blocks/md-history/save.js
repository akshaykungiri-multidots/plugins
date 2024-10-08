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
  const { heading, historyTimeline } = attributes;
  return (
    <div
      {...useBlockProps.save({ className: "md_history_timeline history-list" })}
    >
      <div className="history-list__inner">
        <div className="history-list__head">
          <RichText.Content
            tagName="h2"
            className="history-list__title"
            value={heading}
          />
        </div>
        <div className="history-list__row">
          <div className="history-list__years-wrap">
            <div className="history-list__years-bar">
              <div className="history-list__years-barinnner"></div>
            </div>
            <div className="history-list__years-list">
              {historyTimeline &&
                historyTimeline.map((postObj, index) => (
                  <div className="history-list__year-item" key={index} data-getyear={postObj.year}>
                    <RichText.Content
                      tagName="p"
                      className="history-list__year history-list__year-title"
                      value={postObj.year}
                      onClick={() => setCurrentSlide(index)}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="history-list__year-detail">
		  	{historyTimeline &&
                historyTimeline.map((postObj, currentSlide) => (
              <div className="history-list__year-detail-item" data-year={historyTimeline[currentSlide].year}>
                <div className="history-list__cnt">
                  <h3 className="history-list__year-title">
                    {historyTimeline[currentSlide].year}
                  </h3>
                  <RichText.Content
                    tagName="p"
                    className="history-list__year-description"
                    value={historyTimeline[currentSlide].description}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
