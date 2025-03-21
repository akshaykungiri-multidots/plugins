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

import {
  PanelBody,
  ToggleControl,
  GradientPicker,
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
    subHeading,
    heading,
    description,
    showHeading,
    showSubHeading,
    showDescription,
    subHeadingColor,
    headingColor,
    descriptionColor,
    buttonLink,
    showButton,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
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
            label={__("Show Sub Heading", "md-logo-slider")}
            checked={showSubHeading}
            onChange={(value) => setAttributes({ showSubHeading: value })}
          />
          <ToggleControl
            label={__("Show Description", "md-logo-slider")}
            checked={showDescription}
            onChange={(value) => setAttributes({ showDescription: value })}
          />
        </PanelBody>
        <PanelBody title={__("Button Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Show Button", "md-crafto-design")}
            checked={showButton}
            onChange={(value) => setAttributes({ showButton: value })}
          />
          {showButton && (
            <div className="settings-row">
              <PanelColorSettings
                title={__("Button Color Settings", "md-storyful-fse-full")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: buttonColor,
                    onChange: (newColor) =>
                      setAttributes({ buttonColor: newColor }),
                    label: __("Button Font Color"),
                  },
                  {
                    value: buttonHoverColor,
                    onChange: (newColor) =>
                      setAttributes({ buttonHoverColor: newColor }),
                    label: __("Button Hover Font Color"),
                  },
                ]}
              />
              <div className="settings-row">
                <label htmlFor="buttonBackgroundColor">
                  {__("Button Background Color")}
                </label>
                <GradientPicker
                  id="buttonBackgroundColor"
                  label={__("Button Background Color")}
                  value={buttonBackgroundColor ? buttonBackgroundColor : null}
                  onChange={(value) =>
                    setAttributes({ buttonBackgroundColor: value })
                  }
                  gradients={[
                    {
                      name: "Gradient 1",
                      gradient:
                        "linear-gradient(90deg, #C73727 0%, #E76A24 100.28%)",
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
              <div className="settings-row">
                <label htmlFor="buttonHoverBackgroundColor">
                  {__("Button Hover Background Color")}
                </label>
                <GradientPicker
                  id="buttonHoverBackgroundColor"
                  label={__("Button Hover Background Color")}
                  value={
                    buttonHoverBackgroundColor
                      ? buttonHoverBackgroundColor
                      : null
                  }
                  onChange={(value) =>
                    setAttributes({ buttonHoverBackgroundColor: value })
                  }
                  gradients={[
                    {
                      name: "Gradient 1",
                      gradient:
                        "linear-gradient(90deg, #C73727 0%, #E76A24 100.28%)",
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
            </div>
          )}
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
                value: subHeadingColor,
                onChange: (newColor) =>
                  setAttributes({ subHeadingColor: newColor }),
                label: __("Sub Heading Color", "md-logo-slider"),
              },
              {
                value: descriptionColor,
                onChange: (newColor) =>
                  setAttributes({ descriptionColor: newColor }),
                label: __("Description Color", "md-logo-slider"),
              }
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <style>
        {`
          .md_crafto_design_icon_block__btn {
            color: ${buttonColor};
            background: ${buttonBackgroundColor};
          }
          .md_crafto_design_icon_block__btn:hover {
            color: ${buttonHoverColor} !important;
            background: ${buttonHoverBackgroundColor};
          }
        `}
      </style>
      <div className="md_banner_text">
        <div className="md_banner_text__wrapper">
          <div className="md_banner_text__heading_wrapper">
            {showSubHeading && (
              <RichText
                className="md_banner_text__sub_heading"
                tagName="p"
                value={subHeading}
                onChange={(value) => setAttributes({ subHeading: value })}
                placeholder={__("Sub Heading", "md-logo-slider")}
                style={{ color: subHeadingColor }}
              />
            )}
            {showHeading && (
              <RichText
                tagName="h2"
                className="md_banner_text__heading"
                value={heading}
                onChange={(value) => setAttributes({ heading: value })}
                placeholder={__("Heading", "md-logo-slider")}
                style={{ color: headingColor }}
              />
            )}
            {showDescription && (
              <RichText
                tagName="p"
                className="md_banner_text__description"
                value={description}
                onChange={(value) => setAttributes({ description: value })}
                placeholder={__("Description", "md-logo-slider")}
                style={{ color: descriptionColor }}
              />
            )}
            <div className="md_crafto_design_icon_block__btn_wrapper">
              {showButton && (
                <div className="btn-anitian md_crafto_design_icon_block__btn md-btn-main btn-extra-large has-right-arrow">
                  <RichText
                    tagName="span"
                    value={buttonLink}
                    onChange={(value) => setAttributes({ buttonLink: value })}
                    placeholder={__("Enter Button Text", "md-crafto-design")}
                  />
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
