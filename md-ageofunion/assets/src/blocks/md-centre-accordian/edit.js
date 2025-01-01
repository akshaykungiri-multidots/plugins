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

/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { WPElement, useState } from "@wordpress/element";

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
    showHeading,
    headingColor,
    centreAddress,
    centrePhone,
    showCentreAddress,
    showCentrePhone,
    centreAddressColor,
    centrePhoneColor,
    backgroundColour,
    accordianItems,
    accordianTitleColor,
    accordianContentColor,
  } = attributes;

  const [activeFaqItem, setActiveFaqItem] = useState(0);

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...accordianItems,
      {
        id: accordianItems.length + 1,
        title: "",
        content: "",
      },
    ];
    setAttributes({ accordianItems: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...accordianItems];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ accordianItems: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...accordianItems];
    arrayCopy[oldIndex] = accordianItems[newIndex];
    arrayCopy[newIndex] = accordianItems[oldIndex];

    setAttributes({
      accordianItems: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps({ className: "md_centre_accordian_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings")} initialOpen={true}>
          <ToggleControl
            label={__("Show Heading")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Address")}
            checked={showCentreAddress}
            onChange={(value) => setAttributes({ showCentreAddress: value })}
          />
          <ToggleControl
            label={__("Show Phone")}
            checked={showCentrePhone}
            onChange={(value) => setAttributes({ showCentrePhone: value })}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: headingColor,
                onChange: (value) => setAttributes({ headingColor: value }),
                label: __("Heading Color"),
              },
              {
                value: accordianTitleColor,
                onChange: (value) =>
                  setAttributes({ accordianTitleColor: value }),
                label: __("Team Member Name Color"),
              },
              {
                value: accordianContentColor,
                onChange: (value) =>
                  setAttributes({ accordianContentColor: value }),
                label: __("Team Member Position Color"),
              },
              {
                value: centreAddressColor,
                onChange: (value) =>
                  setAttributes({ centreAddressColor: value }),
                label: __("Centre Address Color"),
              },
              {
                value: centrePhoneColor,
                onChange: (value) => setAttributes({ centrePhoneColor: value }),
                label: __("Centre Phone Color"),
              },
              {
                value: backgroundColour,
                onChange: (value) => setAttributes({ backgroundColour: value }),
                label: __("Background Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className="md_centre_accordian_section__inner"
        style={{ backgroundColor: backgroundColour }}
      >
        <div className="container">
          <div className="md_centre_accordian_section__header">
            {showHeading && (
              <RichText
                tagName="h2"
                className="md_centre_accordian_section__heading"
                value={heading}
                onChange={(value) => setAttributes({ heading: value })}
                placeholder={__("Heading")}
                style={{ color: headingColor }}
              />
            )}
            <div className="md_centre_accordian_section__contact_info">
              {showCentreAddress && (
                <RichText
                  tagName="p"
                  className="md_centre_accordian_section__contact_info__address"
                  value={centreAddress}
                  onChange={(value) => setAttributes({ centreAddress: value })}
                  placeholder={__("Address")}
                  style={{ color: centreAddressColor }}
                />
              )}
              {showCentrePhone && (
                <RichText
                  tagName="p"
                  className="md_centre_accordian_section__contact_info__phone"
                  value={centrePhone}
                  onChange={(value) => setAttributes({ centrePhone: value })}
                  placeholder={__("Phone")}
                  style={{ color: centrePhoneColor }}
                />
              )}
            </div>
          </div>
          <div className="md_centre_accordian_grid">
            <div className="md_centre_accordian_grid__inner">
              <div className="md_centre_accordian_grid__list">
                {accordianItems &&
                  accordianItems.map((postObj, index) => (
                    <div
                      key={postObj.id}
                      className={
                        activeFaqItem === index
                          ? "md_centre_accordian__list__item show-items-hover-wrap active"
                          : "md_centre_accordian__list__item show-items-hover-wrap"
                      }
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
                          {index + 1 < accordianItems.length && (
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
                        {1 < accordianItems.length && (
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
                                  const updatedArray = accordianItems.filter(
                                    (item, itemIndex) => itemIndex !== index
                                  );
                                  setAttributes({
                                    accordianItems: updatedArray,
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
                                    const updatedArray = accordianItems.filter(
                                      (item, itemIndex) => itemIndex !== index
                                    );
                                    setAttributes({
                                      accordianItems: updatedArray,
                                    });
                                  }
                                }
                              }}
                              aria-label="Delete item"
                            ></i>
                          </Tooltip>
                        )}
                      </div>
                      <div className="md_centre_accordian__list__item__inner">
                        <div
                          className="md_centre_accordian__list__item__heading"
                          role="button"
                          tabIndex={0}
                          aria-label={__("Toggle item", "md-prime")}
                          onClick={() => {
                            setActiveFaqItem(index);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              setActiveFaqItem(index);
                            }
                          }}
                        >
                          <RichText
                            tagName="h3"
                            className="md_centre_accordian__list__item__content__name"
                            value={postObj.name}
                            onChange={(value) =>
                              updateStaticPostObj(index, "name", value)
                            }
                            placeholder={__("Name")}
                            style={{ color: accordianTitleColor }}
                          />
                          <i
                            className={
                              activeFaqItem === index
                                ? "dashicons dashicons-minus"
                                : "dashicons dashicons-plus"
                            }
                            role="button"
                            tabIndex={0}
                            aria-label={
                              activeFaqItem === index
                                ? __("Collapse item", "md-prime")
                                : __("Expand item", "md-prime")
                            }
                          ></i>
                        </div>
                        <div className="md_centre_accordian__list__item__content">
                          <RichText
                            tagName="p"
                            className="md_centre_accordian__list__item__content__position"
                            value={postObj.position}
                            onChange={(value) =>
                              updateStaticPostObj(index, "position", value)
                            }
                            placeholder={__("Position")}
                            style={{ color: accordianContentColor }}
                          />
                        </div>
                      </div>
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
      </div>
    </div>
  );
}
