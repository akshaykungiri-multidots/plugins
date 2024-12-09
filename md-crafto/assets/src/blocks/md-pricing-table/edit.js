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
  GradientPicker,
  SelectControl,
} from "@wordpress/components";

import fontIcons from "./fontIcons";

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
    pricingTable,
    featuresList,
    showPricingTableSubTitle,
    showPricingTableTitle,
    showPricingTableFeatures,
    showPricingTablePrice,
    showPricingTableButton,
    showPricingTableFooter,
    showFeaturesList,
    pricingTableHeaderBackgroundColor,
    pricingTableFooterBackgroundColor,
    pricingTableSubTitleColor,
    pricingTableTitleColor,
    pricingTableFeaturesColor,
    pricingTablePriceColor,
    pricingTableButtonColor,
    pricingTableButtonBackgroundColor,
    pricingTableFooterColor,
    featuresListColor,
    highlitedTextBackgroundColor,
    highlightedPricingTableHeaderBackgroundColor,
    highlightedPricingTableFooterBackgroundColor,
    highlightedPricingTableSubTitleColor,
    highlightedPricingTableTitleColor,
    highlightedPricingTableFeaturesColor,
    highlightedPricingTablePriceColor,
    highlightedPricingTableButtonColor,
    highlightedPricingTableButtonBackgroundColor,
    highlightedPricingTableFooterColor,
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...pricingTable,
      {
        id: pricingTable.length + 1,
        subTitle: "",
        title: "",
        planFeatures: [
          {
            id: 1,
            feature: "",
            isIncluded: false,
          },
        ],
        price: "",
        priceTerm: "",
        buttonText: "",
        footerText: "",
        isHighlighted: false,
        highLightedText: "",
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

  const addFeaturesList = () => {
    const featuresListCopy = [
      ...featuresList,
      {
        id: featuresList.length + 1,
        feature: "",
        icon: "fa-address-book",
      },
    ];
    setAttributes({ featuresList: featuresListCopy });
  };
  const updateFeaturesList = (index, key, value) => {
    const updatedFeaturesList = [...featuresList];
    updatedFeaturesList[index][key] = value;
    setAttributes({ featuresList: updatedFeaturesList });
  };

  return (
    <div {...useBlockProps({ className: "md_crafto_pricing_table_section" })}>
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
            label="Show Pricing Table Features"
            checked={showPricingTableFeatures}
            onChange={(value) =>
              setAttributes({ showPricingTableFeatures: value })
            }
          />
          <ToggleControl
            label="Show Pricing Table Price"
            checked={showPricingTablePrice}
            onChange={(value) =>
              setAttributes({ showPricingTablePrice: value })
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
            checked={showPricingTableFooter}
            onChange={(value) =>
              setAttributes({ showPricingTableFooter: value })
            }
          />
          <ToggleControl
            label="Show Features List"
            checked={showFeaturesList}
            onChange={(value) => setAttributes({ showFeaturesList: value })}
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
                value: pricingTableHeaderBackgroundColor,
                onChange: (value) =>
                  setAttributes({ pricingTableHeaderBackgroundColor: value }),
                label: __("Header Background Color"),
              },
              {
                value: pricingTableFooterBackgroundColor,
                onChange: (value) =>
                  setAttributes({ pricingTableFooterBackgroundColor: value }),
                label: __("Footer Background Color"),
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
                value: pricingTableFeaturesColor,
                onChange: (value) =>
                  setAttributes({ pricingTableFeaturesColor: value }),
                label: __("Features Color"),
              },
              {
                value: pricingTablePriceColor,
                onChange: (value) =>
                  setAttributes({ pricingTablePriceColor: value }),
                label: __("Price Color"),
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
                value: pricingTableFooterColor,
                onChange: (value) =>
                  setAttributes({ pricingTableFooterColor: value }),
                label: __("Footer Color"),
              },
              {
                value: featuresListColor,
                onChange: (value) =>
                  setAttributes({ featuresListColor: value }),
                label: __("Features List Color"),
              },
            ]}
          />
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
                value: highlightedPricingTableFooterBackgroundColor,
                onChange: (value) =>
                  setAttributes({
                    highlightedPricingTableFooterBackgroundColor: value,
                  }),
                label: __("Footer Background Color"),
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
                value: highlightedPricingTableFeaturesColor,
                onChange: (value) =>
                  setAttributes({
                    highlightedPricingTableFeaturesColor: value,
                  }),
                label: __("Features Color"),
              },
              {
                value: highlightedPricingTablePriceColor,
                onChange: (value) =>
                  setAttributes({ highlightedPricingTablePriceColor: value }),
                label: __("Price Color"),
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
                value: highlightedPricingTableFooterColor,
                onChange: (value) =>
                  setAttributes({ highlightedPricingTableFooterColor: value }),
                label: __("Footer Color"),
              },
            ]}
          />
          <div className="settings-row">
            <label htmlFor="highlighted-text-background-color">
              {__("Highlighted Text background color")}
            </label>
            <GradientPicker
              id="highlighted-text-background-color"
              value={
                highlitedTextBackgroundColor
                  ? highlitedTextBackgroundColor
                  : null
              }
              onChange={(value) =>
                setAttributes({ highlitedTextBackgroundColor: value })
              }
              gradients={[
                {
                  name: "vivid-cyan-to-vivid-purple",
                  gradient: "linear-gradient(135deg, #00D4FF 0%, #FF00E0 100%)",
                },
                {
                  name: "vivid-green-cyan-to-vivid-cyan",
                  gradient:
                    "linear-gradient(to right, #f7693c, #c74e45, #7d3785, #582d9f, #3928af)",
                },
              ]}
            />
          </div>
        </PanelBody>
      </InspectorControls>
      <div className="md_crafto_pricing_table_section_wrap">
        <div className="md_crafto_pricing_table_heading">
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
        <div className="md_crafto_pricing_table_wrap">
          {pricingTable &&
            pricingTable.map((postObj, index) => (
              <div
                key={postObj.id}
                className="md_crafto_pricing_table_item show-items-hover-wrap"
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
                  className={`md_crafto_pricing_table_item_inner ${
                    postObj.isHighlighted ? "highlighted" : ""
                  }`}
                >
                  <div className="md_crafto_pricing_table_item_highlighted">
                    <ToggleControl
                      label="Highlight"
                      checked={postObj.isHighlighted}
                      onChange={(value) => {
                        const updatedStaticPostObj = [...pricingTable];
                        updatedStaticPostObj[index].isHighlighted = value;
                        setAttributes({ pricingTable: updatedStaticPostObj });
                      }}
                    />
                    {postObj.isHighlighted && (
                      <RichText
                        tagName="div"
                        className="md_crafto_pricing_table_item_highlighted_text"
                        value={postObj.highLightedText}
                        onChange={(value) =>
                          updateStaticPostObj(index, "highLightedText", value)
                        }
                        placeholder={__("Enter Highlighted Text", "md-prime")}
                        style={{
                          background: highlitedTextBackgroundColor,
                        }}
                      />
                    )}
                  </div>
                  <div
                    className="md_crafto_pricing_table_item_header"
                    style={{
                      backgroundColor: postObj.isHighlighted
                        ? highlightedPricingTableHeaderBackgroundColor
                        : pricingTableHeaderBackgroundColor,
                    }}
                  >
                    {showPricingTableSubTitle && (
                      <RichText
                        tagName="h4"
                        className="md_crafto_pricing_table_item_sub_title"
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
                        className="md_crafto_pricing_table_item_title"
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
                    <div className="md_crafto_pricing_table_item_features">
                      {showPricingTableFeatures && (
                        <div className="md_crafto_pricing_table_item_features_inner">
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
                                  className="md_crafto_pricing_table_item_feature show-items-hover-wrap"
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
                                  <ToggleControl
                                    label={__("Included", "md-prime")}
                                    checked={feature.isIncluded}
                                    onChange={(value) => {
                                      const updatedStaticPostObj = [
                                        ...pricingTable,
                                      ];
                                      updatedStaticPostObj[index].planFeatures[
                                        featureIndex
                                      ].isIncluded = value;
                                      setAttributes({
                                        pricingTable: updatedStaticPostObj,
                                      });
                                    }}
                                  />
                                  <i
                                    className={
                                      feature.isIncluded
                                        ? "bi bi-check"
                                        : "bi bi-x"
                                    }
                                  ></i>
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
                  </div>
                  <div
                    className="md_crafto_pricing_table_item_footer"
                    style={{
                      backgroundColor: postObj.isHighlighted
                        ? highlightedPricingTableFooterBackgroundColor
                        : pricingTableFooterBackgroundColor,
                    }}
                  >
                    <div className="md_crafto_pricing_table_item_price_wrap">
                      {showPricingTablePrice && (
                        <RichText
                          tagName="span"
                          className="md_crafto_pricing_table_item_price"
                          value={postObj.price}
                          onChange={(value) =>
                            updateStaticPostObj(index, "price", value)
                          }
                          placeholder={__("Enter Price", "md-prime")}
                          style={{
                            color: postObj.isHighlighted
                              ? highlightedPricingTablePriceColor
                              : pricingTablePriceColor,
                          }}
                        />
                      )}
                      {showPricingTablePrice && (
                        <RichText
                          tagName="span"
                          className="md_crafto_pricing_table_item_price_term"
                          value={postObj.priceTerm}
                          onChange={(value) =>
                            updateStaticPostObj(index, "priceTerm", value)
                          }
                          placeholder={__("Enter Price Term", "md-prime")}
                          style={{
                            color: postObj.isHighlighted
                              ? highlightedPricingTablePriceColor
                              : pricingTablePriceColor,
                          }}
                        />
                      )}
                    </div>
                    <div className="md_crafto_pricing_table_item_button_wrap">
                      {showPricingTableButton && (
                        <RichText
                          tagName="p"
                          className="md_crafto_pricing_table_item_button"
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
                      {showPricingTableFooter && (
                        <RichText
                          className="md_crafto_pricing_table_item_footer_text"
                          tagName="p"
                          value={postObj.footerText}
                          onChange={(value) =>
                            updateStaticPostObj(index, "footerText", value)
                          }
                          placeholder={__("Enter Footer Text", "md-prime")}
                          style={{
                            color: postObj.isHighlighted
                              ? highlightedPricingTableFooterColor
                              : pricingTableFooterColor,
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
      <div className="md_crafto_features_list_wrap">
        {showFeaturesList && (
          <div className="md_crafto_features_list">
            {featuresList &&
              featuresList.map((feature, index) => (
                <div
                  key={feature.id}
                  className="md_crafto_features_list_item show-items-hover-wrap"
                >
                  <div className="item-action-wrap show-items-hover small-icons">
                    {1 < featuresList.length && (
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
                              const updatedArray = featuresList.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                featuresList: updatedArray,
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
                                const updatedArray = featuresList.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  featuresList: updatedArray,
                                });
                              }
                            }
                          }}
                          aria-label="Delete item"
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  <div className="md_crafto_features_list_item_icon">
                    <label htmlFor={`select-icon-${index}`}>
                      {__("Select Icon")}
                    </label>
                    <SelectControl
                      id={`select-icon-${index}`}
                      closeMenuOnSelect={false}
                      value={feature.icon}
                      options={fontIcons}
                      onChange={(value) =>
                        updateFeaturesList(index, "icon", value)
                      }
                    />
                  </div>
                  <div className="md_crafto_features_list_item_inner">
                    <i className={"fa " + feature.icon}></i>
                    <RichText
                      tagName="p"
                      value={feature.feature}
                      onChange={(value) =>
                        updateFeaturesList(index, "feature", value)
                      }
                      placeholder={__("Enter Feature", "md-prime")}
                      style={{ color: featuresListColor }}
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
        <div
          className="add-item-wrap"
          onClick={addFeaturesList}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault(); // Prevent default action for space key
              addFeaturesList(); // Trigger the click handler
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
