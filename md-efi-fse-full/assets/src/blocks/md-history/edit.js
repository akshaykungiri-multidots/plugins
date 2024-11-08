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
import {
  useBlockProps,
  RichText,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";

import { PanelBody, Tooltip, ToggleControl } from "@wordpress/components";

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
    headingFontColor,
    yearFontColor,
    titleFontColor,
    descriptionFontColor,
    showHeading,
    showYear,
    showDescription,
  } = attributes;

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
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...historyTimeline];
    arrayCopy[oldIndex] = historyTimeline[newIndex];
    arrayCopy[newIndex] = historyTimeline[oldIndex];

    setAttributes({
      historyTimeline: arrayCopy,
    });
  };
  return (
    <div {...useBlockProps({ className: "md_history_timeline history-list" })}>
      <InspectorControls>
      <PanelBody title={__("Toggle Settings", "md-efi-fse-full")}>
          <ToggleControl
            label={__("Show Heading", "md-efi-fse-full")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show year", "md-efi-fse-full")}
            checked={showYear}
            onChange={(value) => setAttributes({ showYear: value })}
          />
          <ToggleControl
            label={__("Show Content", "md-efi-fse-full")}
            checked={showDescription}
            onChange={(value) => setAttributes({ showDescription: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-efi-fse-full")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-efi-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: headingFontColor,
                onChange: (newColor) =>
                  setAttributes({ headingFontColor: newColor }),
                label: __("Heading Color", "md-efi-fse-full"),
              },
              {
                value: yearFontColor,
                onChange: (newColor) =>
                  setAttributes({ yearFontColor: newColor }),
                label: __("Year Color", "md-efi-fse-full"),
              },
              {
                value: titleFontColor,
                onChange: (newColor) =>
                  setAttributes({ titleFontColor: newColor }),
                label: __("Title Color", "md-efi-fse-full"),
              },
              {
                value: descriptionFontColor,
                onChange: (newColor) =>
                  setAttributes({ descriptionFontColor: newColor }),
                label: __("Description Color", "md-efi-fse-full"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="history-list__inner">
        {showHeading && (
          <div className="history-list__head">
            <RichText
              tagName="h2"
              className="history-list__title"
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
              placeholder={__("Add Heading", "md-blocks")}
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
                  <div className="history-list__year-item" key={index}>
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
                        color: yearFontColor,
                      }}
                    />
                  </div>
                ))}
              <div
                className="add-item-wrap"
                onClick={addStaticPostObj}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    addStaticPostObj();
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={__("Add new item", "md-efi-fse-full")}
              >
                <Tooltip text={__("Add New Item", "md-efi-fse-full")}>
                  <i className="add-new-item dashicons dashicons-plus"></i>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="history-list__year-detail">
            {currentSlide > -1 && (
              <div className="history-list__year-detail-item show-items-hover-wrap">
                <div className={`item-action-wrap show-items-hover pos-abs`}>
                  <div className="move-item">
                    {0 < currentSlide && (
                      <Tooltip text={__("Move Left", "md-efi-fse-full")}>
                        <span
                          className="dashicons dashicons-arrow-left-alt move-left"
                          onClick={() => moveItem(currentSlide, currentSlide - 1)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              moveItem(currentSlide, currentSlide - 1);
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          aria-label="Move item left"
                        ></span>
                      </Tooltip>
                    )}
                    {currentSlide + 1 < historyTimeline.length && (
                      <Tooltip text={__("Move Right", "md-efi-fse-full")}>
                        <span
                          className="dashicons dashicons-arrow-right-alt move-right"
                          role="button"
                          tabIndex={0}
                          onClick={() => moveItem(currentSlide, currentSlide + 1)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              moveItem(currentSlide, currentSlide + 1);
                            }
                          }}
                          aria-label="Move item right"
                        ></span>
                      </Tooltip>
                    )}
                  </div>
                  {1 < historyTimeline.length && (
                    <Tooltip text={__("Remove Item", "md-efi-fse-full")}>
                      <i
                        className="remove-item dashicons dashicons-no-alt"
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          const toDelete =
                            // eslint-disable-next-line no-alert
                            confirm(
                              __(
                                "Are you sure you want to delete this item?",
                                "md-efi-fse-full"
                              )
                            );
                          if (toDelete === true) {
                            const updatedArray = historyTimeline.filter(
                              (item, itemIndex) => itemIndex !== currentSlide
                            );
                            setAttributes({
                              historyTimeline: updatedArray,
                            });
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            // Simulate click behavior for keyboard users
                            e.preventDefault(); // Prevent default action for space key
                            const toDelete =
                              // eslint-disable-next-line no-alert
                              confirm(
                                __(
                                  "Are you sure you want to delete this item?",
                                  "md-efi-fse-full"
                                )
                              );
                            if (toDelete === true) {
                              const updatedArray = historyTimeline.filter(
                                (item, itemIndex) => itemIndex !== currentSlide
                              );
                              setAttributes({
                                historyTimeline: updatedArray,
                              });
                            }
                          }
                        }}
                        aria-label={__("Remove this item", "md-efi-fse-full")}
                      ></i>
                    </Tooltip>
                  )}
                </div>
                <div className="history-list__cnt">
                  {showYear && (
                    <h3
                      className="history-list__year-title"
                      style={{ color: titleFontColor }}
                    >
                      {historyTimeline[currentSlide].year}
                    </h3>
                  )}
                  {showDescription && (
                    <RichText
                      tagName="p"
                      className="history-list__year-description"
                      value={historyTimeline[currentSlide].description}
                      onChange={(value) =>
                        updateStaticPostObj(currentSlide, "description", value)
                      }
                      placeholder={__("Add Description", "md-blocks")}
                      style={{
                        color: descriptionFontColor,
                      }}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
