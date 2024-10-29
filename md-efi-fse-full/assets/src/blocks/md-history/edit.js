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
import { useBlockProps, RichText, InspectorControls, PanelColorSettings } from "@wordpress/block-editor";

import { Button, PanelBody, FontSizePicker } from "@wordpress/components";

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
  const {
    heading,
    historyTimeline,
    headingFontSize,
    headingFontColor,
    yearFontSize,
    yearFontColor,
    titleFontSize,
    titleFontColor,
    descriptionFontSize,
    descriptionFontColor,
  } = attributes;

  const fontSizes = [
    {
      name: __("S"),
      slug: "small",
      size: "12px",
    },
    {
      name: __("M"),
      slug: "medium",
      size: "18px",
    },
    {
      name: __("L"),
      slug: "large",
      size: "26px",
    },
    {
      name: __("XL"),
      slug: "xtra-large",
      size: "48px",
    },
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const addStaticPostObj = () => {
    const staticPostObj = [
      ...historyTimeline,
      {
        id: historyTimeline.length + 1,
        year: "xxxx",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
      <InspectorControls>
        <PanelBody title={__("Typography", "md-storyful-fse-full")}>
          <label> {__("Heading Font Size", "md-storyful-fse-full")}</label>
          <FontSizePicker
            value={headingFontSize}
            onChange={(newFontSize) =>
              setAttributes({ headingFontSize: newFontSize })
            }
            fontSizes={fontSizes}
          />
          <label> {__("Year Font Size", "md-storyful-fse-full")}</label>
          <FontSizePicker
            value={yearFontSize}
            onChange={(newFontSize) =>
              setAttributes({ yearFontSize: newFontSize })
            }
            fontSizes={fontSizes}
          />
          <label> {__("Title Font Size", "md-storyful-fse-full")}</label>
          <FontSizePicker
            value={titleFontSize}
            onChange={(newFontSize) =>
              setAttributes({ titleFontSize: newFontSize })
            }
            fontSizes={fontSizes}
          />
          <label> {__("Description Font Size", "md-storyful-fse-full")}</label>
          <FontSizePicker
            value={descriptionFontSize}
            onChange={(newFontSize) =>
              setAttributes({ descriptionFontSize: newFontSize })
            }
            fontSizes={fontSizes}
          />
        </PanelBody>
        <PanelColorSettings
          title={__("Typography Colors", "md-storyful-fse-full")}
          initialOpen={false}
          colorSettings={[
            {
              value: headingFontColor,
              onChange: (newColor) =>
                setAttributes({ headingFontColor: newColor }),
              label: __("Heading Color", "md-storyful-fse-full"),
            },
            {
              value: yearFontColor,
              onChange: (newColor) =>
                setAttributes({ yearFontColor: newColor }),
              label: __("Year Color", "md-storyful-fse-full"),
            },
            {
              value: titleFontColor,
              onChange: (newColor) =>
                setAttributes({ titleFontColor: newColor }),
              label: __("Title Color", "md-storyful-fse-full"),
            },
            {
              value: descriptionFontColor,
              onChange: (newColor) =>
                setAttributes({ descriptionFontColor: newColor }),
              label: __("Description Color", "md-storyful-fse-full"),
            },
          ]}
        />
      </InspectorControls>
      <div className="history-list__inner">
        <div className="history-list__head">
          <RichText
            tagName="h2"
            className="history-list__title"
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
            placeholder={__("Add Heading", "md-blocks")}
            style={{
              fontSize: headingFontSize,
              color: headingFontColor,
            }}
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
                      style={{
                        fontSize: yearFontSize,
                        color: yearFontColor,
                      }}
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
                  <h3 className="history-list__year-title" style={{ fontSize: titleFontSize, color: titleFontColor }}>
                    {historyTimeline[currentSlide].year}
                  </h3>
                  <RichText
                    tagName="p"
                    className="history-list__year-description"
                    value={historyTimeline[currentSlide].description}
                    onChange={(value) =>
                      updateStaticPostObj(currentSlide, "description", value)
                    }
                    placeholder={__("Add Description", "md-blocks")}
                    style={{
                      fontSize: descriptionFontSize,
                      color: descriptionFontColor,
                    }}
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
