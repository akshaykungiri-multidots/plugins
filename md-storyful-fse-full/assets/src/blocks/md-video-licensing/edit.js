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
import { PanelBody, ToggleControl } from "@wordpress/components";

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
    buyButtonText,
    sellButtonText,
    licenseText,
    learnMoreText,
    headingFontColor,
    buyButtonFontColor,
    sellButtonFontColor,
    licenseFontColor,
    showBuyButton,
    showSellButton,
    showLicenseText,
    showLearnMore,
  } = attributes;
  return (
    <div {...useBlockProps({ className: "md_video_licensing" })}>
      <InspectorControls>
        <PanelBody title={__("Toggle Settings", "md-storyful-fse-full")}>
          <ToggleControl
            label={__("Show Buy Button", "md-storyful-fse-full")}
            checked={showBuyButton}
            onChange={(value) => setAttributes({ showBuyButton: value })}
          />
          <ToggleControl
            label={__("Show Sell Button", "md-storyful-fse-full")}
            checked={showSellButton}
            onChange={(value) => setAttributes({ showSellButton: value })}
          />
          <ToggleControl
            label={__("Show License Text", "md-storyful-fse-full")}
            checked={showLicenseText}
            onChange={(value) => setAttributes({ showLicenseText: value })}
          />
          <ToggleControl
            label={__("Show Learn More Button", "md-storyful-fse-full")}
            checked={showLearnMore}
            onChange={(value) => setAttributes({ showLearnMore: value })}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-storyful-fse-full")} initialOpen={false}>
          <PanelColorSettings
            title={__("Typography Colors", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: headingFontColor,
                onChange: (value) => setAttributes({ headingFontColor: value }),
                label: __("Heading Color"),
              },
              {
                value: buyButtonFontColor,
                onChange: (value) => setAttributes({ buyButtonFontColor: value }),
                label: __("Buy Button Color"),
              },
              {
                value: sellButtonFontColor,
                onChange: (value) =>
                  setAttributes({ sellButtonFontColor: value }),
                label: __("Sell Button Color"),
              },
              {
                value: licenseFontColor,
                onChange: (value) => setAttributes({ licenseFontColor: value }),
                label: __("License Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div class="storyful-video-licensing">
        <div class="container">
          <div class="video-licensing-wrap">
            <div class="video-licensing-wrap__left">
              <RichText
                tagName="h1"
                className="section-title h1 wow fadeInLeft"
                value={heading}
                onChange={(value) => setAttributes({ heading: value })}
                placeholder={__("Enter title...", "md-blocks")}
                style={{ color: headingFontColor }}
              />
              <div class="bye-sell-button wow fadeInLeft">
                {showBuyButton && (
                <RichText
                  tagName="span"
                  className="link"
                  value={buyButtonText}
                  onChange={(value) => setAttributes({ buyButtonText: value })}
                  placeholder={__("Enter buy button text...", "md-blocks")}
                  style={{
                    color: buyButtonFontColor,
                  }}
                />
                )}
                {showSellButton && (
                <RichText
                  tagName="span"
                  className="link"
                  value={sellButtonText}
                  onChange={(value) => setAttributes({ sellButtonText: value })}
                  placeholder={__("Enter sell button text...", "md-blocks")}
                  style={{
                    color: sellButtonFontColor,
                  }}
                />
                )}
              </div>
            </div>
            <div class="video-licensing-wrap__right">
              <div class="licensing-description-and-button">
                {showLicenseText && (
                <RichText
                  tagName="h2"
                  className="licensing-description"
                  value={licenseText}
                  onChange={(value) => setAttributes({ licenseText: value })}
                  placeholder={__("Enter description...", "md-blocks")}
                  style={{ color: licenseFontColor }}
                />
                )}
                {showLearnMore && (
                <div class="sbtn sbtn-arrow-primary">
                  <span class="btn-text">
                    <RichText
                      tagName="a"
                      value={learnMoreText}
                      onChange={(value) =>
                        setAttributes({ learnMoreText: value })
                      }
                      placeholder={__(
                        "Enter learn more button text...",
                        "md-blocks"
                      )}
                    />
                  </span>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
