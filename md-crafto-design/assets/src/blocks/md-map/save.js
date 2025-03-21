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
    heading,
    showHeading,
    headingColor,
    shopName,
    shopAddress,
    shopPhone,
    shopEmail,
    showShopName,
    showShopAddress,
    showShopPhone,
    showShopEmail,
    shopNameColor,
    shopAddressColor,
    shopPhoneColor,
    shopEmailColor,
    googleMapLinkText,
    showGoogleMapLink,
    googleMapLinkTextColor,
    boxBackgroundColor,
    mapIframeUrl,
  } = attributes;
  return (
    <div {...useBlockProps.save()}>
      <div className="md_map">
        <div className="md_map__wrapper">
          {mapIframeUrl && (
            <div className="md_map__iframe_wrapper">
              <iframe
                title={__("Google Map", "md-logo-slider")}
                src={mapIframeUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          )}
          <div className="md_map__content container">
            <div
              className="md_map__heading_wrapper"
              style={{ backgroundColor: boxBackgroundColor }}
            >
              <div className="md_map__content_inner">
                {showHeading && (
                  <RichText.Content
                    tagName="h2"
                    className="md_map__heading"
                    value={heading}
                    placeholder={__("Heading", "md-logo-slider")}
                    style={{ color: headingColor }}
                  />
                )}
                {showShopName && (
                  <RichText.Content
                    tagName="p"
                    className="md_map__shop_name"
                    value={shopName}
                    placeholder={__("Shop Name", "md-logo-slider")}
                    style={{ color: shopNameColor }}
                  />
                )}
                {showShopAddress && (
                  <RichText.Content
                    tagName="p"
                    className="md_map__shop_address"
                    value={shopAddress}
                    placeholder={__("Shop Address", "md-logo-slider")}
                    style={{ color: shopAddressColor }}
                  />
                )}
                {showShopPhone && (
                  <div className="md_map__shop_phone">
                    <span className="md_map__shop_phone_title">
                      {__("Phone: ", "md-logo-slider")}
                    </span>
                    <RichText.Content
                      tagName="span"
                      value={shopPhone}
                      placeholder={__("Shop Phone", "md-logo-slider")}
                      style={{ color: shopPhoneColor }}
                    />
                  </div>
                )}
                {showShopEmail && (
                  <div className="md_map__shop_email">
                    <span className="md_map__shop_email_title">
                      {__("Email: ", "md-logo-slider")}
                    </span>
                    <RichText.Content
                      tagName="span"
                      value={shopEmail}
                      placeholder={__("Shop Email", "md-logo-slider")}
                      style={{ color: shopEmailColor }}
                    />
                  </div>
                )}
              </div>
              {showGoogleMapLink && (
                <div className="md_map__google_map_link">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <RichText.Content
                    tagName="span"
                    className="md_map__google_map_link_text"
                    value={googleMapLinkText}
                    placeholder={__("Google Map Link Text", "md-logo-slider")}
                    style={{ color: googleMapLinkTextColor }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
