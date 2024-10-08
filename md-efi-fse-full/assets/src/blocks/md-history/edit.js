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

import { Button } from "@wordpress/components";

import { useState } from "@wordpress/element";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const { heading, historyTimeline } = attributes;
  const [currentSlide, setCurrentSlide] = useState(0);
  const addStaticPostObj = () => {
    const staticPostObj = [
      ...historyTimeline,
      {
        id: historyTimeline.length + 1,
        year: "",
        description: "",
      },
    ];
    setAttributes({ historyTimeline: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...historyTimeline];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ historyTimeline: updatedStaticPostObj });
  };
  const removeStaticPostObj = (index) => {
    const updatedStaticPostObj = [...historyTimeline];
    updatedStaticPostObj.splice(index, 1);
    setAttributes({ historyTimeline: updatedStaticPostObj });
    setCurrentSlide(-1);
  };
  return (
    <div {...useBlockProps({ className: "md_history_timeline history-list" })}>
      <div className="history-list__inner">
        <div className="history-list__head">
          <RichText
            tagName="h2"
            className="history-list__title"
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
            placeholder={__("Add Heading", "md-blocks")}
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
                  <div className="history-list__year-item">
                    <RichText
                      tagName="p"
                      className="history-list__year history-list__year-title"
                      value={postObj.year}
                      onChange={(value) =>
                        updateStaticPostObj(index, "year", value)
                      }
                      onClick={() => setCurrentSlide(index)}
                      placeholder={__("Add Year", "md-blocks")}
                    />
                  </div>
                ))}
              <div className="add-item-wrap">
                <Button variant="primary" onClick={addStaticPostObj}>
                  {__("Add New Slide")}
                </Button>
              </div>
            </div>
          </div>
          <div className="history-list__year-detail">
            {currentSlide > -1 && (
              <div className="history-list__year-detail-item">
                <div className="history-list__cnt">
                  <h3 className="history-list__year-title">{historyTimeline[currentSlide].year}</h3>
                  <RichText
                    tagName="p"
                    className="history-list__year-description"
                    value={historyTimeline[currentSlide].description}
                    onChange={(value) =>
                      updateStaticPostObj(currentSlide, "description", value)
                    }
                    placeholder={__("Add Description", "md-blocks")}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
