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
  return (
    <div {...useBlockProps.save({ className: "md_litho_pricing_table_section" })}>
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
        <div className="md_litho_pricing_table_terms">
          {showTermFilter && (
            <div className="md_litho_pricing_table_terms_wrap">
              <ul className="md_litho_pricing_table_terms_list">
                <li className="active">
                  <button data-term="monthly">
                    {__("Monthly", "md-prime")}
                  </button>
                </li>
                <li>
                  <button data-term="annually">
                    {__("Annually", "md-prime")}
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="md_litho_pricing_table_wrap">
          {pricingTable &&
            pricingTable.map((postObj) => (
              <div
                key={postObj.id}
                className={ "md_litho_pricing_table_item show-items-hover-wrap" + (postObj.priceTerm === "monthly" ? " active" : "") }
                style={{
                  background: postObj.isHighlighted
                    ? highlightedpricingTableBackgroundColor
                    : pricingTableBackgroundColor,
                }}
                data-term={postObj.priceTerm}
              >
                <div
                  className={`md_litho_pricing_table_item_inner ${
                    postObj.isHighlighted ? "highlighted" : ""
                  }`}
                >
                  <div
                    className="md_litho_pricing_table_item_header"
                    style={{
                      background: postObj.isHighlighted
                        ? highlightedPricingTableHeaderBackgroundColor
                        : pricingTableHeaderBackgroundColor,
                    }}
                  >
                    {showPricingTableSubTitle && (
                      <RichText.Content
                        tagName="h4"
                        className="md_litho_pricing_table_item_sub_title"
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
                        className="md_litho_pricing_table_item_title"
                        value={postObj.title}
                        placeholder={__("Enter Title", "md-prime")}
                        style={{
                          color: postObj.isHighlighted
                            ? highlightedPricingTableTitleColor
                            : pricingTableTitleColor,
                        }}
                      />
                    )}
                  </div>
                  <div
                    className="md_litho_pricing_table_item_body"
                  >
                    <div className="md_litho_pricing_table_item_price_wrap">
                      {showPricingTableIcon && (
                        <div className="md_litho_pricing_table_item_icon_wrap">
                          <i className={"fa " + postObj.planIcon} style={{ color: postObj.isHighlighted ? highlightedPricingTableIconColor : pricingTableIconColor }}></i>
                        </div>
                      )}
                      {showPricingTablePrice && (
                        <RichText.Content
                          tagName="span"
                          className="md_litho_pricing_table_item_price"
                          value={postObj.price}
                          placeholder={__("$0", "md-prime")}
                          style={{
                            color: postObj.isHighlighted
                              ? highlightedPricingTablePriceColor
                              : pricingTablePriceColor,
                          }}
                        />
                      )}
                      {showPricingTableTermText && (
                        <RichText.Content
                          tagName="span"
                          className="md_litho_pricing_table_item_price_term"
                          value={postObj.priceTerm}
                          placeholder={__("Enter Price Term", "md-prime")}
                          style={{
                            color: postObj.isHighlighted
                              ? highlightedPricingTableTermTextColor
                              : pricingTableTermTextColor,
                          }}
                        />
                      )}
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
                              (feature) => (
                                <li
                                  key={feature.id}
                                  className="md_litho_pricing_table_item_feature show-items-hover-wrap"
                                >
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
                    <div className="md_litho_pricing_table_item_button_wrap">
                      {showPricingTableButton && (
                        <RichText.Content
                          tagName="p"
                          className="md_litho_pricing_table_item_button"
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
                      {showPricingTableFooterText && (
                        <RichText.Content
                          className="md_litho_pricing_table_item_footer_text"
                          tagName="p"
                          value={postObj.footerText}
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
      </div>
    </div>
  );
}
