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
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { WPElement } from "@wordpress/element";

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
  return (
    <div {...useBlockProps.save({ className: "md_centre_accordian_section" })}>
      
      <div
        className="md_centre_accordian_section__inner"
        style={{ backgroundColor: backgroundColour }}
      >
        <div className="container">
          <div className="md_centre_accordian_section__header">
            {showHeading && (
              <RichText.Content
                tagName="h2"
                className="md_centre_accordian_section__heading"
                value={heading}
                placeholder={__("Heading")}
                style={{ color: headingColor }}
              />
            )}
            <div className="md_centre_accordian_section__contact_info">
              {showCentreAddress && (
                <RichText.Content
                  tagName="p"
                  className="md_centre_accordian_section__contact_info__address"
                  value={centreAddress}
                  placeholder={__("Address")}
                  style={{ color: centreAddressColor }}
                />
              )}
              {showCentrePhone && (
                <RichText.Content
                  tagName="p"
                  className="md_centre_accordian_section__contact_info__phone"
                  value={centrePhone}
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
                        0 === index
                          ? "md_centre_accordian__list__item show-items-hover-wrap active"
                          : "md_centre_accordian__list__item show-items-hover-wrap"
                      }
                    >
                      <div className="md_centre_accordian__list__item__inner">
                        <div
                          className="md_centre_accordian__list__item__heading"
                          role="button"
                          tabIndex={0}
                          aria-label={__("Toggle item", "md-prime")}
                        >
                          <RichText.Content
                            tagName="h3"
                            className="md_centre_accordian__list__item__content__name"
                            value={postObj.name}
                            placeholder={__("Name")}
                            style={{ color: accordianTitleColor }}
                          />
                          <i
                            className={
                              0 === index
                                ? "dashicons dashicons-minus"
                                : "dashicons dashicons-plus"
                            }
                            role="button"
                            tabIndex={0}
                            aria-label={
                              0 === index
                                ? __("Collapse item", "md-prime")
                                : __("Expand item", "md-prime")
                            }
                          ></i>
                        </div>
                        <div className="md_centre_accordian__list__item__content">
                          <RichText.Content
                            tagName="p"
                            className="md_centre_accordian__list__item__content__position"
                            value={postObj.position}
                            placeholder={__("Position")}
                            style={{ color: accordianContentColor }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
