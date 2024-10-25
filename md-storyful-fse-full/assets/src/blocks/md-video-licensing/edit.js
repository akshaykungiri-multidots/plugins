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
import { PanelBody, FontSizePicker } from "@wordpress/components";

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
    headingFontSize,
    headingFontColor,
    buyButtonFontSize,
    buyButtonFontColor,
    sellButtonFontSize,
    sellButtonFontColor,
    licenseFontSize,
    licenseFontColor,
    learnMoreFontSize,
  } = attributes;
  const fontSizes = [
    {
      name: __("S"),
      slug: "small",
      size: "12px",
    },
    {
      name: __("M"),
      slug: "medium",
      size: "18px",
    },
    {
      name: __("L"),
      slug: "large",
      size: "26px",
    },
    {
      name: __("XL"),
      slug: "xtra-large",
      size: "48px",
    },
  ];
  return (
    <div {...useBlockProps({ className: "md_video_licensing" })}>
      <InspectorControls>
        <PanelBody title={__("Typography", "md-storyful-fse-full")}>
			<label>{__("Heading Font Size")}</label>
			<FontSizePicker
				value={headingFontSize}
				onChange={(value) => setAttributes({ headingFontSize: value })}
				fontSizes={fontSizes}
			/>
			<label>{__("Buy Button Font Size")}</label>
			<FontSizePicker
				value={buyButtonFontSize}
				onChange={(value) => setAttributes({ buyButtonFontSize: value })}
				fontSizes={fontSizes}
			/>
			<label>{__("Sell Button Font Size")}</label>
			<FontSizePicker
				value={sellButtonFontSize}
				onChange={(value) => setAttributes({ sellButtonFontSize: value })}
				fontSizes={fontSizes}
			/>
			<label>{__("License Font Size")}</label>
			<FontSizePicker
				value={licenseFontSize}
				onChange={(value) => setAttributes({ licenseFontSize: value })}
				fontSizes={fontSizes}
			/>
			<label>{__("Learn More Font Size")}</label>
			<FontSizePicker
				value={learnMoreFontSize}
				onChange={(value) => setAttributes({ learnMoreFontSize: value })}
				fontSizes={fontSizes}
			/>
        </PanelBody>
        <PanelColorSettings
          title={__("Typography Colors", "md-storyful-fse-full")}
          initialOpen={false}
		  colorSettings={[
			{
			  value: headingFontColor,
			  onChange: (value) =>
				setAttributes({ headingFontColor: value }),
			  label: __("Heading Color"),
			},
			{
			  value: buyButtonFontColor,
			  onChange: (value) =>
				setAttributes({ buyButtonFontColor: value }),
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
			  onChange: (value) =>
				setAttributes({ licenseFontColor: value }),
			  label: __("License Color"),
			},
		  ]}
        />
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
				style={{ fontSize: headingFontSize, color: headingFontColor }}
              />
              <div class="bye-sell-button wow fadeInLeft">
                <RichText
                  tagName="span"
                  className="link"
                  value={buyButtonText}
                  onChange={(value) => setAttributes({ buyButtonText: value })}
                  placeholder={__("Enter buy button text...", "md-blocks")}
				  style={{ fontSize: buyButtonFontSize, color: buyButtonFontColor }}
                />
                <RichText
                  tagName="span"
                  className="link"
                  value={sellButtonText}
                  onChange={(value) => setAttributes({ sellButtonText: value })}
                  placeholder={__("Enter sell button text...", "md-blocks")}
				  style={{ fontSize: sellButtonFontSize, color: sellButtonFontColor }}
                />
              </div>
            </div>
            <div class="video-licensing-wrap__right">
              <div class="licensing-description-and-button">
                <RichText
                  tagName="h2"
                  className="licensing-description"
                  value={licenseText}
                  onChange={(value) => setAttributes({ licenseText: value })}
                  placeholder={__("Enter description...", "md-blocks")}
				  style={{ fontSize: licenseFontSize, color: licenseFontColor }}
                />
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
					  style={{ fontSize: learnMoreFontSize }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
