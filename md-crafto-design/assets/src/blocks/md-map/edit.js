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

import { PanelBody, ToggleControl, TextControl } from "@wordpress/components";

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
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody
          title={__("Toggle Settings", "md-logo-slider")}
          initialOpen={true}
        >
          <ToggleControl
            label={__("Show Heading", "md-logo-slider")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Shop Name", "md-logo-slider")}
            checked={showShopName}
            onChange={(value) => setAttributes({ showShopName: value })}
          />
          <ToggleControl
            label={__("Show Shop Address", "md-logo-slider")}
            checked={showShopAddress}
            onChange={(value) => setAttributes({ showShopAddress: value })}
          />
          <ToggleControl
            label={__("Show Shop Phone", "md-logo-slider")}
            checked={showShopPhone}
            onChange={(value) => setAttributes({ showShopPhone: value })}
          />
          <ToggleControl
            label={__("Show Shop Email", "md-logo-slider")}
            checked={showShopEmail}
            onChange={(value) => setAttributes({ showShopEmail: value })}
          />
          <ToggleControl
            label={__("Show Google Map Link", "md-logo-slider")}
            checked={showGoogleMapLink}
            onChange={(value) => setAttributes({ showGoogleMapLink: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Map Settings", "md-logo-slider")}
          initialOpen={false}
        >
          <TextControl
            label={__("Map Iframe URL", "md-logo-slider")}
            value={mapIframeUrl}
            onChange={(value) => setAttributes({ mapIframeUrl: value })}
            type="url"
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-logo-slider")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Color Settings", "md-logo-slider")}
            colorSettings={[
              {
                value: headingColor,
                onChange: (newColor) =>
                  setAttributes({ headingColor: newColor }),
                label: __("Heading Color", "md-logo-slider"),
              },
              {
                value: shopNameColor,
                onChange: (newColor) =>
                  setAttributes({ shopNameColor: newColor }),
                label: __("Shop Name Color", "md-logo-slider"),
              },
              {
                value: shopAddressColor,
                onChange: (newColor) =>
                  setAttributes({ shopAddressColor: newColor }),
                label: __("Shop Address Color", "md-logo-slider"),
              },
              {
                value: shopPhoneColor,
                onChange: (newColor) =>
                  setAttributes({ shopPhoneColor: newColor }),
                label: __("Shop Phone Color", "md-logo-slider"),
              },
              {
                value: shopEmailColor,
                onChange: (newColor) =>
                  setAttributes({ shopEmailColor: newColor }),
                label: __("Shop Email Color", "md-logo-slider"),
              },
              {
                value: googleMapLinkTextColor,
                onChange: (newColor) =>
                  setAttributes({ googleMapLinkTextColor: newColor }),
                label: __("Google Map Link Text Color", "md-logo-slider"),
              },
              {
                value: boxBackgroundColor,
                onChange: (newColor) =>
                  setAttributes({ boxBackgroundColor: newColor }),
                label: __("Box Background Color", "md-logo-slider"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
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
                  <RichText
                    tagName="h2"
                    className="md_map__heading"
                    value={heading}
                    onChange={(value) => setAttributes({ heading: value })}
                    placeholder={__("Heading", "md-logo-slider")}
                    style={{ color: headingColor }}
                  />
                )}
                {showShopName && (
                  <RichText
                    tagName="p"
                    className="md_map__shop_name"
                    value={shopName}
                    onChange={(value) => setAttributes({ shopName: value })}
                    placeholder={__("Shop Name", "md-logo-slider")}
                    style={{ color: shopNameColor }}
                  />
                )}
                {showShopAddress && (
                  <RichText
                    tagName="p"
                    className="md_map__shop_address"
                    value={shopAddress}
                    onChange={(value) => setAttributes({ shopAddress: value })}
                    placeholder={__("Shop Address", "md-logo-slider")}
                    style={{ color: shopAddressColor }}
                  />
                )}
                {showShopPhone && (
                  <div className="md_map__shop_phone">
                    <span className="md_map__shop_phone_title">
                      {__("Phone: ", "md-logo-slider")}
                    </span>
                    <RichText
                      tagName="span"
                      value={shopPhone}
                      onChange={(value) => setAttributes({ shopPhone: value })}
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
                    <RichText
                      tagName="span"
                      value={shopEmail}
                      onChange={(value) => setAttributes({ shopEmail: value })}
                      placeholder={__("Shop Email", "md-logo-slider")}
                      style={{ color: shopEmailColor }}
                    />
                  </div>
                )}
              </div>
              {showGoogleMapLink && (
                <div className="md_map__google_map_link">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <RichText
                    tagName="span"
                    className="md_map__google_map_link_text"
                    value={googleMapLinkText}
                    onChange={(value) =>
                      setAttributes({ googleMapLinkText: value })
                    }
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
