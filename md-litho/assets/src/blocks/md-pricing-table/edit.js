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

import {
  PanelBody,
  ToggleControl,
  Tooltip,
  SelectControl,
  GradientPicker,
} from "@wordpress/components";

import fontIcons from "./fontIcons";

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
    subHeading,
    heading,
    showSubHeading,
    showHeading,
    headingColor,
    subHeadingColor,
    showTermFilter,
    termBackgroundColor,
    termActiveBackgroundColor,
    termColor,
    termActiveColor,
    pricingTable,
    showPricingTableSubTitle,
    showPricingTableTitle,
    showPricingTableIcon,
    showPricingTablePrice,
    showPricingTableTermText,
    showPricingTableFeatures,
    showPricingTableButton,
    showPricingTableFooterText,
    pricingTableHeaderBackgroundColor,
    pricingTableBackgroundColor,
    pricingTableSubTitleColor,
    pricingTableTitleColor,
    pricingTableIconColor,
    pricingTablePriceColor,
    pricingTableTermTextColor,
    pricingTableFeaturesColor,
    pricingTableButtonColor,
    pricingTableButtonBackgroundColor,
    pricingTableButtonHoverColor,
    pricingTableButtonHoverBackgroundColor,
    pricingTableFooterTextColor,
    highlightedPricingTableHeaderBackgroundColor,
    highlightedpricingTableBackgroundColor,
    highlightedPricingTableSubTitleColor,
    highlightedPricingTableTitleColor,
    highlightedPricingTableIconColor,
    highlightedPricingTablePriceColor,
    highlightedPricingTableTermTextColor,
    highlightedPricingTableFeaturesColor,
    highlightedPricingTableButtonColor,
    highlightedPricingTableButtonBackgroundColor,
    highlightedPricingTableButtonHoverColor,
    highlightedPricingTableButtonHoverBackgroundColor,
    highlightedPricingTableFooterTextColor,
  } = attributes;

  const [activeTerm, setActiveTerm] = useState("monthly");

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...pricingTable,
      {
        id: pricingTable.length + 1,
        subTitle: "",
        title: "",
        planIcon: "",
        price: "",
        priceTerm: activeTerm,
        planFeatures: [
          {
            id: 1,
            feature: "",
          },
        ],
        buttonText: "",
        footerText: "",
        isHighlighted: false,
      },
    ];
    setAttributes({ pricingTable: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...pricingTable];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ pricingTable: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...pricingTable];
    arrayCopy[oldIndex] = pricingTable[newIndex];
    arrayCopy[newIndex] = pricingTable[oldIndex];

    setAttributes({
      pricingTable: arrayCopy,
    });
  };

  const addStaticPostFeature = (index) => {
    const updatedStaticPostObj = [...pricingTable];
    updatedStaticPostObj[index].planFeatures.push({
      id: updatedStaticPostObj[index].planFeatures.length + 1,
      feature: "",
    });
    setAttributes({ pricingTable: updatedStaticPostObj });
  };
  const updateStaticPostFeature = (index, featureIndex, value) => {
    const updatedStaticPostObj = [...pricingTable];
    updatedStaticPostObj[index].planFeatures[featureIndex].feature = value;
    setAttributes({ pricingTable: updatedStaticPostObj });
  };

  return (
    <div {...useBlockProps({ className: "md_litho_pricing_table_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings")} initialOpen={true}>
          <ToggleControl
            label="Show Sub Heading"
            checked={showSubHeading}
            onChange={(value) => setAttributes({ showSubHeading: value })}
          />
          <ToggleControl
            label="Show Heading"
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label="Show Term Filter"
            checked={showTermFilter}
            onChange={(value) => setAttributes({ showTermFilter: value })}
          />
          <ToggleControl
            label="Show Pricing Table Sub Title"
            checked={showPricingTableSubTitle}
            onChange={(value) =>
              setAttributes({ showPricingTableSubTitle: value })
            }
          />
          <ToggleControl
            label="Show Pricing Table Title"
            checked={showPricingTableTitle}
            onChange={(value) =>
              setAttributes({ showPricingTableTitle: value })
            }
          />
          <ToggleControl
            label="Show Pricing Table Icon"
            checked={showPricingTableIcon}
            onChange={(value) => setAttributes({ showPricingTableIcon: value })}
          />
          <ToggleControl
            label="Show Pricing Table Price"
            checked={showPricingTablePrice}
            onChange={(value) =>
              setAttributes({ showPricingTablePrice: value })
            }
          />
          <ToggleControl
            label="Show Pricing Table Term Text"
            checked={showPricingTableTermText}
            onChange={(value) =>
              setAttributes({ showPricingTableTermText: value })
            }
          />
          <ToggleControl
            label="Show Pricing Table Features"
            checked={showPricingTableFeatures}
            onChange={(value) =>
              setAttributes({ showPricingTableFeatures: value })
            }
          />
          <ToggleControl
            label="Show Pricing Table Button"
            checked={showPricingTableButton}
            onChange={(value) =>
              setAttributes({ showPricingTableButton: value })
            }
          />
          <ToggleControl
            label="Show Pricing Table Footer"
            checked={showPricingTableFooterText}
            onChange={(value) =>
              setAttributes({ showPricingTableFooterText: value })
            }
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
                value: subHeadingColor,
                onChange: (value) => setAttributes({ subHeadingColor: value }),
                label: __("Sub Heading Color"),
              },
              {
                value: termBackgroundColor,
                onChange: (value) =>
                  setAttributes({ termBackgroundColor: value }),
                label: __("Term Background Color"),
              },
              {
                value: termActiveBackgroundColor,
                onChange: (value) =>
                  setAttributes({ termActiveBackgroundColor: value }),
                label: __("Term Active Background Color"),
              },
              {
                value: termColor,
                onChange: (value) => setAttributes({ termColor: value }),
                label: __("Term Color"),
              },
              {
                value: termActiveColor,
                onChange: (value) => setAttributes({ termActiveColor: value }),
                label: __("Term Active Color"),
              },
              {
                value: pricingTableHeaderBackgroundColor,
                onChange: (value) =>
                  setAttributes({ pricingTableHeaderBackgroundColor: value }),
                label: __("Header Background Color"),
              },
              {
                value: pricingTableSubTitleColor,
                onChange: (value) =>
                  setAttributes({ pricingTableSubTitleColor: value }),
                label: __("Sub Title Color"),
              },
              {
                value: pricingTableTitleColor,
                onChange: (value) =>
                  setAttributes({ pricingTableTitleColor: value }),
                label: __("Title Color"),
              },
              {
                value: pricingTableIconColor,
                onChange: (value) =>
                  setAttributes({ pricingTableIconColor: value }),
                label: __("Icon Color"),
              },
              {
                value: pricingTablePriceColor,
                onChange: (value) =>
                  setAttributes({ pricingTablePriceColor: value }),
                label: __("Price Color"),
              },
              {
                value: pricingTableTermTextColor,
                onChange: (value) =>
                  setAttributes({ pricingTableTermTextColor: value }),
                label: __("Price Term Color"),
              },
              {
                value: pricingTableFeaturesColor,
                onChange: (value) =>
                  setAttributes({ pricingTableFeaturesColor: value }),
                label: __("Features Color"),
              },
              {
                value: pricingTableButtonColor,
                onChange: (value) =>
                  setAttributes({ pricingTableButtonColor: value }),
                label: __("Button Color"),
              },
              {
                value: pricingTableButtonBackgroundColor,
                onChange: (value) =>
                  setAttributes({ pricingTableButtonBackgroundColor: value }),
                label: __("Button Background Color"),
              },
              {
                value: pricingTableButtonHoverColor,
                onChange: (value) =>
                  setAttributes({ pricingTableButtonHoverColor: value }),
                label: __("Button Hover Color"),
              },
              {
                value: pricingTableButtonHoverBackgroundColor,
                onChange: (value) =>
                  setAttributes({
                    pricingTableButtonHoverBackgroundColor: value,
                  }),
                label: __("Button Hover Background Color"),
              },
              {
                value: pricingTableFooterTextColor,
                onChange: (value) =>
                  setAttributes({ pricingTableFooterTextColor: value }),
                label: __("Footer Color"),
              },
            ]}
          />
          <div className="settings-row">
            <label htmlFor="pricingTableBackgroundColor">
              {__("Table Background Color")}
            </label>
            <GradientPicker
              id="pricingTableBackgroundColor"
              label={__("Table Background Color")}
              value={
                pricingTableBackgroundColor ? pricingTableBackgroundColor : null
              }
              onChange={(value) =>
                setAttributes({ pricingTableBackgroundColor: value })
              }
              gradients={[
                {
                  name: "Gradient 1",
                  gradient: "linear-gradient(70deg, #0039E3 0%, #8600D4 89%)",
                },
                {
                  name: "Gradient 2",
                  gradient: "linear-gradient(45deg, #f3ec78, #af4261)",
                },
                {
                  name: "Gradient 3",
                  gradient: "linear-gradient(45deg, #f3ec78, #af4261)",
                },
              ]}
            />
          </div>
          <PanelColorSettings
            title={__("Highlighted Pricing Table Colors")}
            colorSettings={[
              {
                value: highlightedPricingTableHeaderBackgroundColor,
                onChange: (value) =>
                  setAttributes({
                    highlightedPricingTableHeaderBackgroundColor: value,
                  }),
                label: __("Header Background Color"),
              },
              {
                value: highlightedPricingTableSubTitleColor,
                onChange: (value) =>
                  setAttributes({
                    highlightedPricingTableSubTitleColor: value,
                  }),
                label: __("Sub Title Color"),
              },
              {
                value: highlightedPricingTableTitleColor,
                onChange: (value) =>
                  setAttributes({ highlightedPricingTableTitleColor: value }),
                label: __("Title Color"),
              },
              {
                value: highlightedPricingTableIconColor,
                onChange: (value) =>
                  setAttributes({ highlightedPricingTableIconColor: value }),
                label: __("Icon Color"),
              },
              {
                value: highlightedPricingTablePriceColor,
                onChange: (value) =>
                  setAttributes({ highlightedPricingTablePriceColor: value }),
                label: __("Price Color"),
              },
              {
                value: highlightedPricingTableTermTextColor,
                onChange: (value) =>
                  setAttributes({
                    highlightedPricingTableTermTextColor: value,
                  }),
                label: __("Price Term Color"),
              },
              {
                value: highlightedPricingTableFeaturesColor,
                onChange: (value) =>
                  setAttributes({
                    highlightedPricingTableFeaturesColor: value,
                  }),
                label: __("Features Color"),
              },
              {
                value: highlightedPricingTableButtonColor,
                onChange: (value) =>
                  setAttributes({ highlightedPricingTableButtonColor: value }),
                label: __("Button Color"),
              },
              {
                value: highlightedPricingTableButtonBackgroundColor,
                onChange: (value) =>
                  setAttributes({
                    highlightedPricingTableButtonBackgroundColor: value,
                  }),
                label: __("Button Background Color"),
              },
              {
                value: highlightedPricingTableButtonHoverColor,
                onChange: (value) =>
                  setAttributes({
                    highlightedPricingTableButtonHoverColor: value,
                  }),
                label: __("Button Hover Color"),
              },
              {
                value: highlightedPricingTableButtonHoverBackgroundColor,
                onChange: (value) =>
                  setAttributes({
                    highlightedPricingTableButtonHoverBackgroundColor: value,
                  }),
                label: __("Button Hover Background Color"),
              },
              {
                value: highlightedPricingTableFooterTextColor,
                onChange: (value) =>
                  setAttributes({
                    highlightedPricingTableFooterTextColor: value,
                  }),
                label: __("Footer Color"),
              },
            ]}
          />
          <div className="settings-row">
            <label htmlFor="highlightedpricingTableBackgroundColor">
              {__("Highlighted Table Background Color")}
            </label>
            <GradientPicker
              id="highlightedpricingTableBackgroundColor"
              label={__("Highlighted Table Background Color")}
              value={
                highlightedpricingTableBackgroundColor
                  ? highlightedpricingTableBackgroundColor
                  : null
              }
              onChange={(value) =>
                setAttributes({ highlightedpricingTableBackgroundColor: value })
              }
              gradients={[
                {
                  name: "Gradient 1",
                  gradient: "linear-gradient(70deg, #0039E3 0%, #8600D4 89%)",
                },
                {
                  name: "Gradient 2",
                  gradient: "linear-gradient(45deg, #f3ec78, #af4261)",
                },
                {
                  name: "Gradient 3",
                  gradient: "linear-gradient(45deg, #f3ec78, #af4261)",
                },
              ]}
            />
          </div>
        </PanelBody>
      </InspectorControls>
      <style>
        {`
          .md_litho_pricing_table_terms_wrap ul li.active button {
            background-color: ${termActiveBackgroundColor} !important;
            color: ${termActiveColor} !important;
          }
            .md_litho_pricing_table_terms_wrap ul li button {
            background-color: ${termBackgroundColor} !important;
            color: ${termColor} !important;
          }
          .md_litho_pricing_table_item_button_wrap .md_litho_pricing_table_item_button {
            color: ${pricingTableButtonColor};
            background-color: ${pricingTableButtonBackgroundColor};
          }
          .md_litho_pricing_table_item_button_wrap .md_litho_pricing_table_item_button:hover {
            color: ${pricingTableButtonHoverColor} !important;
            background-color: ${pricingTableButtonHoverBackgroundColor} !important;
          }
          .md_litho_pricing_table_item_inner.highlighted .md_litho_pricing_table_item_button_wrap .md_litho_pricing_table_item_button {
            color: ${highlightedPricingTableButtonColor};
            background-color: ${highlightedPricingTableButtonBackgroundColor};
          }
          .md_litho_pricing_table_item_inner.highlighted .md_litho_pricing_table_item_button_wrap .md_litho_pricing_table_item_button:hover {
            color: ${highlightedPricingTableButtonHoverColor} !important;
            background-color: ${highlightedPricingTableButtonHoverBackgroundColor} !important;
          }
        `}
      </style>
      <div className="md_litho_pricing_table_section_wrap">
        <div className="md_litho_pricing_table_heading">
          {showSubHeading && (
            <RichText
              tagName="h4"
              value={subHeading}
              onChange={(value) => setAttributes({ subHeading: value })}
              placeholder={__("Enter Sub Heading", "md-prime")}
              style={{ color: subHeadingColor }}
            />
          )}
          {showHeading && (
            <RichText
              tagName="h2"
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
              placeholder={__("Enter Heading", "md-prime")}
              style={{ color: headingColor }}
            />
          )}
        </div>
        <div className="md_litho_pricing_table_terms">
          {showTermFilter && (
            <div className="md_litho_pricing_table_terms_wrap">
              <ul className="md_litho_pricing_table_terms_list">
                <li className={activeTerm === "monthly" ? "active" : ""}>
                  <button onClick={() => setActiveTerm("monthly")}>
                    {__("Monthly", "md-prime")}
                  </button>
                </li>
                <li className={activeTerm === "annually" ? "active" : ""}>
                  <button onClick={() => setActiveTerm("annually")}>
                    {__("Annually", "md-prime")}
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="md_litho_pricing_table_wrap">
          {pricingTable &&
            pricingTable.map((postObj, index) => (
              <div
                key={postObj.id}
                className={
                  "md_litho_pricing_table_item show-items-hover-wrap" +
                  (postObj.priceTerm === activeTerm ? " active" : "")
                }
                style={{
                  background: postObj.isHighlighted
                    ? highlightedpricingTableBackgroundColor
                    : pricingTableBackgroundColor,
                }}
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
                    {index + 1 < pricingTable.length && (
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
                  {1 < pricingTable.length && (
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
                            const updatedArray = pricingTable.filter(
                              (item, itemIndex) => itemIndex !== index
                            );
                            setAttributes({
                              pricingTable: updatedArray,
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
                              const updatedArray = pricingTable.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                pricingTable: updatedArray,
                              });
                            }
                          }
                        }}
                        aria-label="Delete item"
                      ></i>
                    </Tooltip>
                  )}
                </div>
                <div
                  className={`md_litho_pricing_table_item_inner ${
                    postObj.isHighlighted ? "highlighted" : ""
                  }`}
                >
                  <div className="md_litho_pricing_table_item_highlighted">
                    <ToggleControl
                      label="Highlight"
                      checked={postObj.isHighlighted}
                      onChange={(value) => {
                        const updatedStaticPostObj = [...pricingTable];
                        updatedStaticPostObj[index].isHighlighted = value;
                        setAttributes({ pricingTable: updatedStaticPostObj });
                      }}
                    />
                  </div>
                  <div
                    className="md_litho_pricing_table_item_header"
                    style={{
                      background: postObj.isHighlighted
                        ? highlightedPricingTableHeaderBackgroundColor
                        : pricingTableHeaderBackgroundColor,
                    }}
                  >
                    {showPricingTableSubTitle && (
                      <RichText
                        tagName="h4"
                        className="md_litho_pricing_table_item_sub_title"
                        value={postObj.subTitle}
                        onChange={(value) =>
                          updateStaticPostObj(index, "subTitle", value)
                        }
                        placeholder={__("Enter Sub Title", "md-prime")}
                        style={{
                          color: postObj.isHighlighted
                            ? highlightedPricingTableSubTitleColor
                            : pricingTableSubTitleColor,
                        }}
                      />
                    )}
                    {showPricingTableTitle && (
                      <RichText
                        tagName="h3"
                        className="md_litho_pricing_table_item_title"
                        value={postObj.title}
                        onChange={(value) =>
                          updateStaticPostObj(index, "title", value)
                        }
                        placeholder={__("Enter Title", "md-prime")}
                        style={{
                          color: postObj.isHighlighted
                            ? highlightedPricingTableTitleColor
                            : pricingTableTitleColor,
                        }}
                      />
                    )}
                  </div>
                  <div className="md_litho_pricing_table_item_body">
                    <div className="md_litho_pricing_table_item_price_wrap">
                      {showPricingTableIcon && (
                        <div className="md_litho_pricing_table_item_icon_wrap">
                          <label htmlFor={`select-icon-${index}`}>
                            {__("Select Icon")}
                          </label>
                          <SelectControl
                            id={`select-icon-${index}`}
                            closeMenuOnSelect={false}
                            value={postObj.planIcon}
                            options={fontIcons}
                            onChange={(value) =>
                              updateStaticPostObj(index, "planIcon", value)
                            }
                          />
                          <i
                            className={"fa " + postObj.planIcon}
                            style={{
                              color: postObj.isHighlighted
                                ? highlightedPricingTableIconColor
                                : pricingTableIconColor,
                            }}
                          ></i>
                        </div>
                      )}
                      {showPricingTablePrice && (
                        <RichText
                          tagName="span"
                          className="md_litho_pricing_table_item_price"
                          value={postObj.price}
                          onChange={(value) =>
                            updateStaticPostObj(index, "price", value)
                          }
                          placeholder={__("$0", "md-prime")}
                          style={{
                            color: postObj.isHighlighted
                              ? highlightedPricingTablePriceColor
                              : pricingTablePriceColor,
                          }}
                        />
                      )}
                      {showPricingTableTermText && (
                        <span className="md_litho_pricing_table_item_price_term">
                          {postObj.priceTerm === "monthly"
                            ? __("per month", "md-prime")
                            : __("per year", "md-prime")}
                        </span>
                      )}
                      <SelectControl
                        label={__("Select Term")}
                        value={postObj.priceTerm}
                        options={[
                          { value: "monthly", label: __("Monthly") },
                          { value: "annually", label: __("Annually") },
                        ]}
                        onChange={(value) =>
                          updateStaticPostObj(index, "priceTerm", value)
                        }
                      />
                    </div>
                    <div className="md_litho_pricing_table_item_features">
                      {showPricingTableFeatures && (
                        <div className="md_litho_pricing_table_item_features_inner">
                          <ul
                            style={{
                              color: postObj.isHighlighted
                                ? highlightedPricingTableFeaturesColor
                                : pricingTableFeaturesColor,
                            }}
                          >
                            {postObj.planFeatures.map(
                              (feature, featureIndex) => (
                                <li
                                  key={feature.id}
                                  className="md_litho_pricing_table_item_feature show-items-hover-wrap"
                                >
                                  <div className="item-action-wrap show-items-hover small-icons">
                                    {1 < pricingTable.length && (
                                      <Tooltip
                                        text={__("Remove Item", "md-prime")}
                                      >
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
                                              const updatedStaticPostObj = [
                                                ...pricingTable,
                                              ];
                                              updatedStaticPostObj[
                                                index
                                              ].planFeatures =
                                                updatedStaticPostObj[
                                                  index
                                                ].planFeatures.filter(
                                                  (item, itemIndex) =>
                                                    itemIndex !== featureIndex
                                                );
                                              setAttributes({
                                                pricingTable:
                                                  updatedStaticPostObj,
                                              });
                                            }
                                          }}
                                          onKeyDown={(e) => {
                                            if (
                                              e.key === "Enter" ||
                                              e.key === " "
                                            ) {
                                              const toDelete =
                                                // eslint-disable-next-line no-alert
                                                confirm(
                                                  __(
                                                    "Are you sure you want to delete this item?",
                                                    "md-prime"
                                                  )
                                                );
                                              if (toDelete) {
                                                const updatedStaticPostObj = [
                                                  ...pricingTable,
                                                ];
                                                updatedStaticPostObj[
                                                  index
                                                ].planFeatures =
                                                  updatedStaticPostObj[
                                                    index
                                                  ].planFeatures.filter(
                                                    (item, itemIndex) =>
                                                      itemIndex !== featureIndex
                                                  );
                                                setAttributes({
                                                  pricingTable:
                                                    updatedStaticPostObj,
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
                                    value={feature.feature}
                                    onChange={(value) =>
                                      updateStaticPostFeature(
                                        index,
                                        featureIndex,
                                        value
                                      )
                                    }
                                    style={{ color: pricingTableFeaturesColor }}
                                    placeholder={__(
                                      "Enter Feature",
                                      "md-prime"
                                    )}
                                  />
                                </li>
                              )
                            )}
                          </ul>
                          <div
                            className="add-item-wrap"
                            onClick={() => addStaticPostFeature(index)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault(); // Prevent default action for space key
                                addStaticPostFeature(index); // Trigger the click handler
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
                      )}
                    </div>
                    <div className="md_litho_pricing_table_item_button_wrap">
                      {showPricingTableButton && (
                        <RichText
                          tagName="p"
                          className="md_litho_pricing_table_item_button"
                          value={postObj.buttonText}
                          onChange={(value) =>
                            updateStaticPostObj(index, "buttonText", value)
                          }
                          placeholder={__("Enter Button Text", "md-prime")}
                          style={{
                            color: postObj.isHighlighted
                              ? highlightedPricingTableButtonColor
                              : pricingTableButtonColor,
                            backgroundColor: postObj.isHighlighted
                              ? highlightedPricingTableButtonBackgroundColor
                              : pricingTableButtonBackgroundColor,
                          }}
                        />
                      )}
                      {showPricingTableFooterText && (
                        <RichText
                          className="md_litho_pricing_table_item_footer_text"
                          tagName="p"
                          value={postObj.footerText}
                          onChange={(value) =>
                            updateStaticPostObj(index, "footerText", value)
                          }
                          placeholder={__("Enter Footer Text", "md-prime")}
                          style={{
                            color: postObj.isHighlighted
                              ? highlightedPricingTableFooterTextColor
                              : pricingTableFooterTextColor,
                          }}
                        />
                      )}
                    </div>
                  </div>
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
  );
}
