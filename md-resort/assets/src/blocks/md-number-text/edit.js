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
  InspectorControls,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";

import {
  PanelBody,
  ToggleControl,
  RangeControl,
  Tooltip,
} from "@wordpress/components";

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
    columnList,
    columnTitleFontColor,
    columnDescriptionFontColor,
    borderColor,
    backgroundColor,
    columns,
    enableBorder,
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...columnList,
      {
        id: columnList.length + 1,
        title: "",
        description: "",
        enableStar: false,
      },
    ];
    setAttributes({ columnList: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...columnList];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ columnList: updatedStaticPostObj });
  };

  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...columnList];
    arrayCopy[oldIndex] = columnList[newIndex];
    arrayCopy[newIndex] = columnList[oldIndex];

    setAttributes({
      columnList: arrayCopy,
    });
  };

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
      {...useBlockProps({
        className: "md-counter_block",
      })}
    >
      <InspectorControls>
        <PanelBody title={__("Settings", "md-prime")} initialOpen={true}>
          <RangeControl
            label={__("Columns", "md-prime")}
            value={columns}
            onChange={(value) => setAttributes({ columns: value })}
            min={1}
            max={4}
          />
          <div className="setting-row inspector-field inspector-field-alignment">
            <ToggleControl
              label={__("Enable Border", "md-prime")}
              checked={enableBorder}
              onChange={(value) => setAttributes({ enableBorder: value })}
            />
          </div>
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-resort-fse-full")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Color Settings", "md-resort-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: backgroundColor,
                onChange: (newColor) =>
                  setAttributes({
                    backgroundColor: newColor,
                  }),
                label: __("Background Color"),
              },
              {
                value: borderColor,
                onChange: (newColor) =>
                  setAttributes({ borderColor: newColor }),
                label: __("Border Color"),
              },
              {
                value: columnTitleFontColor,
                onChange: (newColor) =>
                  setAttributes({
                    columnTitleFontColor: newColor,
                  }),
                label: __("Column Title Font Color"),
              },
              {
                value: columnDescriptionFontColor,
                onChange: (newColor) =>
                  setAttributes({
                    columnDescriptionFontColor: newColor,
                  }),
                label: __("Column Description Font Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
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
                    borderColor,
                  }}
                >
                  <div className="item-action-wrap show-items-hover pos-abs">
                    <div className="move-item">
                      {0 < index && (
                        <Tooltip text={__("Move Left", "md-prime")}>
                          <span
                            className="dashicons dashicons-arrow-left-alt move-left"
                            onClick={() => moveItem(index, index - 1)}
                            onKeyDown={(event) => {
                              if (event.key === "Enter" || event.key === " ") {
                                moveItem(index, index - 1);
                              }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-label="Move item left"
                          ></span>
                        </Tooltip>
                      )}
                      {index + 1 < columnList.length && (
                        <Tooltip text={__("Move Right", "md-prime")}>
                          <span
                            className="dashicons dashicons-arrow-right-alt move-right"
                            onClick={() => moveItem(index, index + 1)}
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                moveItem(index, index + 1);
                              }
                            }}
                            role="button"
                            aria-label="Move item right"
                          ></span>
                        </Tooltip>
                      )}
                    </div>
                    {1 < columnList.length && (
                      <Tooltip text={__("Remove Item", "md-prime")}>
                        <i
                          className="remove-item dashicons dashicons-no-alt"
                          onClick={() => {
                            const toDelete =
                              // eslint-disable-next-line no-alert
                              confirm(
                                __(
                                  "Are you sure you want to delete this item?",
                                  "md-prime"
                                )
                              );
                            if (toDelete) {
                              const updatedArray = columnList.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                columnList: updatedArray,
                              });
                            }
                          }}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              const toDelete =
                                // eslint-disable-next-line no-alert
                                confirm(
                                  __(
                                    "Are you sure you want to delete this item?",
                                    "md-prime"
                                  )
                                );
                              if (toDelete) {
                                const updatedArray = columnList.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  columnList: updatedArray,
                                });
                              }
                            }
                          }}
                          role="button"
                          aria-label="Remove item"
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  <div className="item-content-wrap">
                    <RichText
                      tagName="h3"
                      value={postObj.title}
                      style={{
                        color: columnTitleFontColor,
                      }}
                      onChange={(value) =>
                        updateStaticPostObj(index, "title", value)
                      }
                      placeholder={__("0+")}
                    />
                    <div className="column-item-desc">
                      { postObj.enableStar && (
                        <div className="review-star-rating">
                          {displayStarRating(postObj.title)}
                        </div>
                      )}
                      <RichText
                        tagName="p"
                        style={{
                          color: columnDescriptionFontColor,
                        }}
                        value={postObj.description}
                        onChange={(value) =>
                          updateStaticPostObj(index, "description", value)
                        }
                        placeholder={__("Enter Description")}
                      />
                    </div>
                  </div>
                  <ToggleControl
                    label={__("Enable Star", "md-prime")}
                    checked={postObj.enableStar}
                    onChange={(value) =>
                      updateStaticPostObj(index, "enableStar", value)
                    }
                  />
                </div>
              ))}
          </div>
        </div>
        <div
          className="add-item-wrap"
          onClick={addStaticPostObj}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault(); // Prevent default action for space key
              addStaticPostObj(); // Trigger the click handler
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={__("Add new item", "md-prime")}
        >
          <Tooltip text={__("Add New Item", "md-prime")}>
            <i className="add-new-item dashicons dashicons-plus"></i>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
