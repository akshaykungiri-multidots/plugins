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
    tabs,
    tabItemColor,
    tabItemActiveColor,
    tabItemBackgroundColor,
    tabItemActiveBackgroundColor,
    tabBackgroundColor,
  } = attributes;
  const addStaticPostObj = () => {
    const staticPostObj = [
      ...tabs,
      {
        tabId: tabs.length + 1,
        tabTitle: "",
      },
    ];
    setAttributes({ tabs: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...tabs];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ tabs: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...tabs];
    arrayCopy[oldIndex] = tabs[newIndex];
    arrayCopy[newIndex] = tabs[oldIndex];

    setAttributes({
      tabs: arrayCopy,
    });
  };
  return (
    <div {...useBlockProps({ className: "md_tab_navigations" })}>
      <InspectorControls>
        <PanelBody title={__("Color Settings")}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: tabItemColor,
                onChange: (value) => setAttributes({ tabItemColor: value }),
                label: __("Tab Item Color"),
              },
              {
                value: tabItemActiveColor,
                onChange: (value) =>
                  setAttributes({ tabItemActiveColor: value }),
                label: __("Tab Item Active Color"),
              },
              {
                value: tabItemBackgroundColor,
                onChange: (value) =>
                  setAttributes({ tabItemBackgroundColor: value }),
                label: __("Tab Item Background Color"),
              },
              {
                value: tabItemActiveBackgroundColor,
                onChange: (value) =>
                  setAttributes({ tabItemActiveBackgroundColor: value }),
                label: __("Tab Item Active Background Color"),
              },
              {
                value: tabBackgroundColor,
                onChange: (value) =>
                  setAttributes({ tabBackgroundColor: value }),
                label: __("Tab Background Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <style>
        {`
			.md_tab_navigation_inner ul {
				background-color: ${tabBackgroundColor};
			}
			.md_tab_navigation_list .md_tab_navigation_item .tabTitle {
				color: ${tabItemColor} !important;
			}
			.md_tab_navigation_list .md_tab_navigation_item.active .tabTitle {
				color: ${tabItemActiveColor} !important;
			}
			.md_tab_navigation_list .md_tab_navigation_item .tabTitle {
				background-color: ${tabItemBackgroundColor} !important;
			}
			.md_tab_navigation_list .md_tab_navigation_item.active .tabTitle {
				background-color: ${tabItemActiveBackgroundColor} !important;
			}
		`}
      </style>
      <div
        className="md_tab_navigation_inner"
      >
        <ul className="md_tab_navigation_list">
          {tabs.map((tab, index) => {
            return (
              <li
                className={`md_tab_navigation_item show-items-hover-wrap ${index === 0 ? "active" : ""}`}
                key={tab.tabId}
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
                    {index + 1 < tabs.length && (
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
                  {1 < tabs.length && (
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
                            const updatedArray = tabs.filter(
                              (item, itemIndex) => itemIndex !== index
                            );
                            setAttributes({
                              tabs: updatedArray,
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
                              const updatedArray = tabs.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                tabs: updatedArray,
                              });
                            }
                          }
                        }}
                        aria-label="Delete item"
                      ></i>
                    </Tooltip>
                  )}
                </div>
                <RichText
                  tagName="span"
				  className="tabTitle"
                  value={tab.tabTitle}
                  onChange={(value) =>
                    updateStaticPostObj(index, "tabTitle", value)
                  }
                  placeholder="Tab Title"
                  style={{
                    color: tabItemColor,
                  }}
                />
              </li>
            );
          })}
        </ul>
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
