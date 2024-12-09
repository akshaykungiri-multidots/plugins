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

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
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
  return (
    <div {...useBlockProps.save({ className: "md_crafto_pricing_table_section" })}>
      <div className="md_crafto_pricing_table_section_wrap">
        <div className="md_crafto_pricing_table_heading">
          {showSubHeading && (
            <RichText.Content
              tagName="h4"
              value={subHeading}
              placeholder={__("Enter Sub Heading", "md-prime")}
              style={{ color: subHeadingColor }}
            />
          )}
          {showHeading && (
            <RichText.Content
              tagName="h2"
              value={heading}
              placeholder={__("Enter Heading", "md-prime")}
              style={{ color: headingColor }}
            />
          )}
        </div>
        <div className="md_crafto_pricing_table_wrap">
          {pricingTable &&
            pricingTable.map((postObj) => (
              <div
                key={postObj.id}
                className="md_crafto_pricing_table_item show-items-hover-wrap"
              >
                <div
                  className={`md_crafto_pricing_table_item_inner ${
                    postObj.isHighlighted ? "highlighted" : ""
                  }`}
                >
                  <div className="md_crafto_pricing_table_item_highlighted">
                    {postObj.isHighlighted && (
                      <RichText.Content
                        tagName="div"
                        className="md_crafto_pricing_table_item_highlighted_text"
                        value={postObj.highLightedText}
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
                      <RichText.Content
                        tagName="h4"
                        className="md_crafto_pricing_table_item_sub_title"
                        value={postObj.subTitle}
                        placeholder={__("Enter Sub Title", "md-prime")}
                        style={{
                          color: postObj.isHighlighted
                            ? highlightedPricingTableSubTitleColor
                            : pricingTableSubTitleColor,
                        }}
                      />
                    )}
                    {showPricingTableTitle && (
                      <RichText.Content
                        tagName="h3"
                        className="md_crafto_pricing_table_item_title"
                        value={postObj.title}
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
                              (feature) => (
                                <li
                                  key={feature.id}
                                  className="md_crafto_pricing_table_item_feature show-items-hover-wrap"
                                >
                                  <i
                                    className={
                                      feature.isIncluded
                                        ? "bi bi-check"
                                        : "bi bi-x"
                                    }
                                  ></i>
                                  <RichText.Content
                                    tagName="span"
                                    value={feature.feature}
                                    placeholder={__(
                                      "Enter Feature",
                                      "md-prime"
                                    )}
                                  />
                                </li>
                              )
                            )}
                          </ul>
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
                        <RichText.Content
                          tagName="span"
                          className="md_crafto_pricing_table_item_price"
                          value={postObj.price}
                          placeholder={__("Enter Price", "md-prime")}
                          style={{
                            color: postObj.isHighlighted
                              ? highlightedPricingTablePriceColor
                              : pricingTablePriceColor,
                          }}
                        />
                      )}
                      {showPricingTablePrice && (
                        <RichText.Content
                          tagName="span"
                          className="md_crafto_pricing_table_item_price_term"
                          value={postObj.priceTerm}
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
                        <RichText.Content
                          tagName="p"
                          className="md_crafto_pricing_table_item_button"
                          value={postObj.buttonText}
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
                        <RichText.Content
                          className="md_crafto_pricing_table_item_footer_text"
                          tagName="p"
                          value={postObj.footerText}
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
      </div>
      <div className="md_crafto_features_list_wrap">
        {showFeaturesList && (
          <div className="md_crafto_features_list">
            {featuresList &&
              featuresList.map((feature) => (
                <div
                  key={feature.id}
                  className="md_crafto_features_list_item show-items-hover-wrap"
                >
                  <div className="md_crafto_features_list_item_inner">
                    <i className={"fa " + feature.icon}></i>
                    <RichText.Content
                      tagName="p"
                      value={feature.feature}
                      placeholder={__("Enter Feature", "md-prime")}
                      style={{ color: featuresListColor }}
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
