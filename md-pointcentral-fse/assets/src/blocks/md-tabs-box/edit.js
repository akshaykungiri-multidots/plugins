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
  MediaUploadCheck,
  MediaUpload,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

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
    tabItems,
    tabBackgroundColor,
    tabTextColor,
    tabActiveBackgroundColor,
    tabActiveTextColor,
    tabContentTitleColor,
    tabContentTextColor,
    tabContentButtonColor,
    showTabContentTitle,
    showTabContentText,
    showTabContentButton,
    showTabContentImage,
  } = attributes;

  const [selectedTab, setSelectedTab] = useState(0);

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...tabItems,
      {
        id: tabItems.length + 1,
        icon: "",
        title: "",
        tabInnerTitle: "",
        tabInnerContent: "",
        tabInnerButton: "",
        tabInnerImage: "",
      },
    ];
    setAttributes({ tabItems: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...tabItems];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ tabItems: updatedStaticPostObj });
  };
  const removeStaticPostObj = (index) => {
    const updatedStaticPostObj = [...tabItems];
    updatedStaticPostObj.splice(index, 1);
    if (selectedTab >= updatedStaticPostObj.length) {
      setSelectedTab(updatedStaticPostObj.length - 1); // Set to last slide if current is out of bounds
    }
    setAttributes({ tabItems: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...tabItems];
    arrayCopy[oldIndex] = tabItems[newIndex];
    arrayCopy[newIndex] = tabItems[oldIndex];

    setAttributes({
      tabItems: arrayCopy,
    });
  };
  const siteURL = window.location.origin;
  const activeTabStyle = {
    backgroundColor: tabActiveBackgroundColor,
    color: tabActiveTextColor,
  };
  const inactiveTabStyle = {
    backgroundColor: tabBackgroundColor,
    color: tabTextColor,
  };

  return (
    <div {...useBlockProps({ className: "MD_Pointcentral_TabsBox" })}>
      <InspectorControls>
        <PanelBody title={__("Toggle Settings", "md-prime")} initialOpen={true}>
          <ToggleControl
            label={__("Show Tab Content Title", "md-prime")}
            checked={showTabContentTitle}
            onChange={(value) => setAttributes({ showTabContentTitle: value })}
          />
          <ToggleControl
            label={__("Show Tab Content Text", "md-prime")}
            checked={showTabContentText}
            onChange={(value) => setAttributes({ showTabContentText: value })}
          />
          <ToggleControl
            label={__("Show Tab Content Button", "md-prime")}
            checked={showTabContentButton}
            onChange={(value) => setAttributes({ showTabContentButton: value })}
          />
          <ToggleControl
            label={__("Show Tab Content Image", "md-prime")}
            checked={showTabContentImage}
            onChange={(value) => setAttributes({ showTabContentImage: value })}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-prime")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings", "md-prime")}
            initialOpen={true}
            colorSettings={[
              {
                value: tabBackgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ tabBackgroundColor: colorValue }),
                label: __("Tab Background Color", "md-prime"),
              },
              {
                value: tabTextColor,
                onChange: (colorValue) =>
                  setAttributes({ tabTextColor: colorValue }),
                label: __("Tab Text Color", "md-prime"),
              },
              {
                value: tabActiveBackgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ tabActiveBackgroundColor: colorValue }),
                label: __("Tab Active Background Color", "md-prime"),
              },
              {
                value: tabActiveTextColor,
                onChange: (colorValue) =>
                  setAttributes({ tabActiveTextColor: colorValue }),
                label: __("Tab Active Text Color", "md-prime"),
              },
              {
                value: tabContentTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ tabContentTitleColor: colorValue }),
                label: __("Tab Content Title Color", "md-prime"),
              },
              {
                value: tabContentTextColor,
                onChange: (colorValue) =>
                  setAttributes({ tabContentTextColor: colorValue }),
                label: __("Tab Content Text Color", "md-prime"),
              },
              {
                value: tabContentButtonColor,
                onChange: (colorValue) =>
                  setAttributes({ tabContentButtonColor: colorValue }),
                label: __("Tab Content Button Color", "md-prime"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="pointcentral-tab-banner">
        <div className="md_container">
          <div className="tab-list" style={{ backgroundColor: "#0f5aa8" }}>
            <div className="tab-list-inner">
              {tabItems.length &&
                tabItems.map((postObj, index) => (
                  <div
                    className={`tab-list-item show-items-hover-wrap ${
                      index === selectedTab ? "active" : ""
                    }`}
                    data-tab={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-label={`Tab ${index + 1}`}
                  >
                    <div className="item-action-wrap show-items-hover small-icons">
                      <div className="move-item">
                        {0 < index && (
                          <Tooltip text={__("Move Left", "md-prime")}>
                            <span
                              className="dashicons dashicons-arrow-left-alt move-left"
                              onClick={() => moveItem(index, index - 1)}
                              onKeyDown={(event) => {
                                if (
                                  event.key === "Enter" ||
                                  event.key === " "
                                ) {
                                  moveItem(index, index - 1);
                                }
                              }}
                              role="button"
                              tabIndex={0}
                              aria-label="Move item left"
                            ></span>
                          </Tooltip>
                        )}
                        {index + 1 < tabItems.length && (
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
                      {1 < tabItems.length && (
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
                                removeStaticPostObj(index);
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
                                  removeStaticPostObj(index);
                                }
                              }
                            }}
                            aria-label="Delete item"
                          ></i>
                        </Tooltip>
                      )}
                    </div>
                    <div
                      className="md-tab-icon md-prime-block-control image-preview image-controle-visible-hover"
                      style={
                        index === selectedTab
                          ? activeTabStyle
                          : inactiveTabStyle
                      }
                      role="tab"
                      tabIndex={0}
                      aria-selected={index === selectedTab}
                      onClick={() => setSelectedTab(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault(); // Prevent default action for space key
                          setSelectedTab(index); // Trigger the click handler
                        }
                      }}
                    >
                      <div
                        className={`image-controls small-icons icon-center-fixed`}
                      >
                        <MediaUploadCheck>
                          <MediaUpload
                            onSelect={(media) =>
                              updateStaticPostObj(index, "icon", media.url)
                            }
                            allowedTypes={["image"]}
                            value={postObj.icon}
                            render={({ open }) => (
                              <>
                                {postObj.icon ? (
                                  <>
                                    <Tooltip
                                      text={__("Edit Image", "md-prime")}
                                    >
                                      <i
                                        className="dashicons dashicons-edit edit-image"
                                        onClick={open}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                          if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                          ) {
                                            e.preventDefault(); // Prevent default action for space key
                                            open(); // Trigger the click handler
                                          }
                                        }}
                                        aria-label={__(
                                          "Edit image",
                                          "md-prime"
                                        )}
                                      ></i>
                                    </Tooltip>
                                    <Tooltip
                                      text={__("Remove Image", "md-prime")}
                                    >
                                      <i
                                        className="dashicons dashicons-no-alt remove-image"
                                        onClick={() => {
                                          const toDelete =
                                            // eslint-disable-next-line no-alert
                                            confirm(
                                              __(
                                                "Are you sure you want to delete this image?",
                                                "md-prime"
                                              )
                                            );
                                          if (toDelete) {
                                            updateStaticPostObj(
                                              index,
                                              "icon",
                                              ""
                                            );
                                          }
                                        }}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                          if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                          ) {
                                            e.preventDefault();
                                            updateStaticPostObj(
                                              index,
                                              "icon",
                                              ""
                                            );
                                          }
                                        }}
                                        aria-label={__(
                                          "Remove image",
                                          "md-prime"
                                        )}
                                      ></i>
                                    </Tooltip>
                                  </>
                                ) : (
                                  <div className="upload-wrap">
                                    <Button
                                      onClick={open}
                                      className="button media_and_text__upload_btn"
                                    >
                                      <Tooltip
                                        text={__("Upload Image", "md-prime")}
                                      >
                                        <i className="dashicons dashicons-upload"></i>
                                      </Tooltip>
                                    </Button>
                                  </div>
                                )}
                              </>
                            )}
                          />
                        </MediaUploadCheck>
                      </div>
                      {postObj.icon ? (
                        <img src={postObj.icon} alt={"slider"} />
                      ) : (
                        <img src={siteURL + placeholder} alt={"slider"} />
                      )}
                    </div>
                    <RichText
                      tagName="span"
                      className="tab-title"
                      value={postObj.title}
                      onChange={(value) =>
                        updateStaticPostObj(index, "title", value)
                      }
                      placeholder="Tab Title"
                    />
                  </div>
                ))}
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
          <div className="tab-content" style={{ backgroundColor: "#f5f5f5" }}>
            {selectedTab > -1 && (
              <div className="tab-content-item active" data-tab="0">
                <div className="tab-content-inner">
                  <div className="tab-content-left">
                    <div className="tab-content-left-inner">
                      {showTabContentTitle && (
                        <RichText
                          tagName="h2"
                          value={tabItems[selectedTab].tabInnerTitle}
                          onChange={(value) =>
                            updateStaticPostObj(
                              selectedTab,
                              "tabInnerTitle",
                              value
                            )
                          }
                          placeholder="Tab Content Title"
                          style={{ color: tabContentTitleColor }}
                        />
                      )}
                      {showTabContentText && (
                        <RichText
                          tagName="p"
                          value={tabItems[selectedTab].tabInnerContent}
                          onChange={(value) =>
                            updateStaticPostObj(
                              selectedTab,
                              "tabInnerContent",
                              value
                            )
                          }
                          placeholder="Tab Content Description"
                          style={{ color: tabContentTextColor }}
                        />
                      )}
                      {showTabContentButton && (
                        <RichText
                          tagName="span"
                          className="tab-content-button"
                          value={tabItems[selectedTab].tabInnerButton}
                          onChange={(value) =>
                            updateStaticPostObj(
                              selectedTab,
                              "tabInnerButton",
                              value
                            )
                          }
                          placeholder="Button Text"
                          style={{ backgroundColor: tabContentButtonColor }}
                        />
                      )}
                    </div>
                  </div>
                  {showTabContentImage && (
                    <div className="tab-content-right">
                      <div className="md-prime-block-control image-preview image-controle-visible-hover">
                        <div
                          className={`image-controls small-icons icon-center-fixed`}
                        >
                          <MediaUploadCheck>
                            <MediaUpload
                              onSelect={(media) =>
                                updateStaticPostObj(
                                  selectedTab,
                                  "tabInnerImage",
                                  media.url
                                )
                              }
                              allowedTypes={["image"]}
                              value={tabItems[selectedTab].tabInnerImage}
                              render={({ open }) => (
                                <>
                                  {tabItems[selectedTab].tabInnerImage ? (
                                    <>
                                      <Tooltip
                                        text={__("Edit Image", "md-prime")}
                                      >
                                        <i
                                          className="dashicons dashicons-edit edit-image"
                                          onClick={open}
                                          role="button"
                                          tabIndex={0}
                                          onKeyDown={(e) => {
                                            if (
                                              e.key === "Enter" ||
                                              e.key === " "
                                            ) {
                                              e.preventDefault(); // Prevent default action for space key
                                              open(); // Trigger the click handler
                                            }
                                          }}
                                          aria-label={__(
                                            "Edit image",
                                            "md-prime"
                                          )}
                                        ></i>
                                      </Tooltip>
                                      <Tooltip
                                        text={__("Remove Image", "md-prime")}
                                      >
                                        <i
                                          className="dashicons dashicons-no-alt remove-image"
                                          onClick={() => {
                                            const toDelete =
                                              // eslint-disable-next-line no-alert
                                              confirm(
                                                __(
                                                  "Are you sure you want to delete this image?",
                                                  "md-prime"
                                                )
                                              );
                                            if (toDelete) {
                                              updateStaticPostObj(
                                                selectedTab,
                                                "tabInnerImage",
                                                ""
                                              );
                                            }
                                          }}
                                          role="button"
                                          tabIndex={0}
                                          onKeyDown={(e) => {
                                            if (
                                              e.key === "Enter" ||
                                              e.key === " "
                                            ) {
                                              e.preventDefault();
                                              updateStaticPostObj(
                                                selectedTab,
                                                "tabInnerImage",
                                                ""
                                              );
                                            }
                                          }}
                                          aria-label={__(
                                            "Remove image",
                                            "md-prime"
                                          )}
                                        ></i>
                                      </Tooltip>
                                    </>
                                  ) : (
                                    <div className="upload-wrap">
                                      <Button
                                        onClick={open}
                                        className="button media_and_text__upload_btn"
                                      >
                                        <Tooltip
                                          text={__("Upload Image", "md-prime")}
                                        >
                                          <i className="dashicons dashicons-upload"></i>
                                        </Tooltip>
                                      </Button>
                                    </div>
                                  )}
                                </>
                              )}
                            />
                          </MediaUploadCheck>
                        </div>
                        {tabItems[selectedTab].tabInnerImage ? (
                          <img
                            src={tabItems[selectedTab].tabInnerImage}
                            alt={"slider"}
                          />
                        ) : (
                          <img src={siteURL + placeholder} alt={"slider"} />
                        )}
                      </div>
                    </div>
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
