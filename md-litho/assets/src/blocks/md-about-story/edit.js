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
  PanelColorSettings,
  RichText,
} from "@wordpress/block-editor";

import {
  PanelBody,
  ToggleControl,
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
    heading,
    storyList,
    awardList,
    showHeading,
    showStory,
    showAward,
    headingColor,
    storyListTitleColor,
    storyListContentColor,
    awardListYearColor,
    awardListTitleColor,
    awardListContentColor,
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...storyList,
      {
        id: storyList.length + 1,
        title: "",
        content: "",
      },
    ];
    setAttributes({ storyList: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...storyList];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ storyList: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...storyList];
    arrayCopy[oldIndex] = storyList[newIndex];
    arrayCopy[newIndex] = storyList[oldIndex];

    setAttributes({
      storyList: arrayCopy,
    });
  };

  const addStaticAwardObj = () => {
    const staticAwardObj = [
      ...awardList,
      {
        id: awardList.length + 1,
        year: "",
        title: "",
        content: "",
      },
    ];
    setAttributes({ awardList: staticAwardObj });
  };
  const updateStaticAwardObj = (index, key, value) => {
    const updatedStaticAwardObj = [...awardList];
    updatedStaticAwardObj[index][key] = value;
    setAttributes({ awardList: updatedStaticAwardObj });
  };
  const moveAwardItem = (oldIndex, newIndex) => {
    const arrayCopy = [...awardList];
    arrayCopy[oldIndex] = awardList[newIndex];
    arrayCopy[newIndex] = awardList[oldIndex];

    setAttributes({
      awardList: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps({ className: "md_about_story" })}>
      <InspectorControls>
        <PanelBody title={__("Toggle Settings")} initialOpen={true}>
          <ToggleControl
            label={__("Show Heading")}
            checked={showHeading}
            onChange={() => setAttributes({ showHeading: !showHeading })}
          />
          <ToggleControl
            label={__("Show Story")}
            checked={showStory}
            onChange={() => setAttributes({ showStory: !showStory })}
          />
          <ToggleControl
            label={__("Show Award")}
            checked={showAward}
            onChange={() => setAttributes({ showAward: !showAward })}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: headingColor,
                onChange: (colorValue) =>
                  setAttributes({ headingColor: colorValue }),
                label: __("Heading Color"),
              },
              {
                value: storyListTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ storyListTitleColor: colorValue }),
                label: __("Story List Title Color"),
              },
              {
                value: storyListContentColor,
                onChange: (colorValue) =>
                  setAttributes({ storyListContentColor: colorValue }),
                label: __("Story List Content Color"),
              },
              {
                value: awardListYearColor,
                onChange: (colorValue) =>
                  setAttributes({ awardListYearColor: colorValue }),
                label: __("Award List Year Color"),
              },
              {
                value: awardListTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ awardListTitleColor: colorValue }),
                label: __("Award List Title Color"),
              },
              {
                value: awardListContentColor,
                onChange: (colorValue) =>
                  setAttributes({ awardListContentColor: colorValue }),
                label: __("Award List Content Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_about_story__inner">
        <div className="md_about_story__award">
          <div className="md_about_story__award__inner">
            {awardList &&
              awardList.map((postObj, index) => (
                <div
                  key={postObj.id}
                  className="md_about_story__award_item show-items-hover-wrap"
                >
                  <div className="item-action-wrap show-items-hover small-icons">
                    <div className="move-item">
                      {0 < index && (
                        <Tooltip text={__("Move Left", "md-prime")}>
                          <span
                            className="dashicons dashicons-arrow-left-alt move-left"
                            onClick={() => moveAwardItem(index, index - 1)}
                            onKeyDown={(event) => {
                              if (event.key === "Enter" || event.key === " ") {
                                moveAwardItem(index, index - 1);
                              }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-label="Move item left"
                          ></span>
                        </Tooltip>
                      )}
                      {index + 1 < awardList.length && (
                        <Tooltip text={__("Move Right", "md-prime")}>
                          <span
                            className="dashicons dashicons-arrow-right-alt move-right"
                            role="button"
                            tabIndex="0"
                            onClick={() => moveAwardItem(index, index + 1)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                moveAwardItem(index, index + 1);
                              }
                            }}
                            aria-label="Move item right"
                          ></span>
                        </Tooltip>
                      )}
                    </div>
                    {1 < awardList.length && (
                      <Tooltip text={__("Remove Item", "md-prime")}>
                        <i
                          className="remove-item dashicons dashicons-no-alt"
                          role="button"
                          tabIndex="0"
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
                              const updatedArray = awardList.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                awardList: updatedArray,
                              });
                            }
                          }}
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
                                const updatedArray = awardList.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  awardList: updatedArray,
                                });
                              }
                            }
                          }}
                          aria-label="Delete item"
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  <div className="md_about_story__award_item_wrap">
                    <RichText
                      tagName="span"
                      className="award-year"
                      placeholder={__("Year", "md-prime")}
                      value={postObj.year}
                      onChange={(value) =>
                        updateStaticAwardObj(index, "year", value)
                      }
                      style={{ color: awardListYearColor }}
                    />
                    <div className="md_about_story__award_item_content">
                      <RichText
                        tagName="h4"
                        placeholder={__("Title", "md-prime")}
                        value={postObj.title}
                        onChange={(value) =>
                          updateStaticAwardObj(index, "title", value)
                        }
                        style={{ color: awardListTitleColor }}
                      />
                      <RichText
                        tagName="p"
                        placeholder={__("Content", "md-prime")}
                        value={postObj.content}
                        onChange={(value) =>
                          updateStaticAwardObj(index, "content", value)
                        }
                        style={{ color: awardListContentColor }}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div
            className="add-item-wrap"
            onClick={addStaticAwardObj}
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
        <div className="md_about_story__storylist">
          <div className="md_about_story__storylist__heading">
            <RichText
              tagName="h2"
              placeholder={__("Heading", "md-prime")}
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
              style={{ color: headingColor }}
            />
          </div>
          <div className="md_about_story__storylist__inner">
            {storyList &&
              storyList.map((postObj, index) => (
                <div
                  key={postObj.id}
                  className="md_about_story__story_item show-items-hover-wrap"
                >
                  <div className="item-action-wrap show-items-hover small-icons">
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
                      {index + 1 < storyList.length && (
                        <Tooltip text={__("Move Right", "md-prime")}>
                          <span
                            className="dashicons dashicons-arrow-right-alt move-right"
                            role="button"
                            tabIndex="0"
                            onClick={() => moveItem(index, index + 1)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                moveItem(index, index + 1);
                              }
                            }}
                            aria-label="Move item right"
                          ></span>
                        </Tooltip>
                      )}
                    </div>
                    {1 < storyList.length && (
                      <Tooltip text={__("Remove Item", "md-prime")}>
                        <i
                          className="remove-item dashicons dashicons-no-alt"
                          role="button"
                          tabIndex="0"
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
                              const updatedArray = storyList.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                storyList: updatedArray,
                              });
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              const toDelete = confirm(
                                "Are you sure you want to delete this item?"
                              );
                              if (toDelete) {
                                const updatedArray = storyList.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  storyList: updatedArray,
                                });
                              }
                            }
                          }}
                          aria-label="Delete item"
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  <div className="md_about_story__story_item_content">
                    <RichText
                      tagName="h4"
                      placeholder={__("Title", "md-prime")}
                      value={postObj.title}
                      onChange={(value) =>
                        updateStaticPostObj(index, "title", value)
                      }
                      style={{ color: storyListTitleColor }}
                    />
                    <RichText
                      tagName="p"
                      placeholder={__("Content", "md-prime")}
                      value={postObj.content}
                      onChange={(value) =>
                        updateStaticPostObj(index, "content", value)
                      }
                      style={{ color: storyListContentColor }}
                    />
                  </div>
                </div>
              ))}
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
    </div>
  );
}
