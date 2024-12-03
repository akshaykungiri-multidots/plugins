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
  MediaUpload,
  PanelColorSettings,
} from "@wordpress/block-editor";

import { Fragment } from "@wordpress/element";

import {
  PanelBody,
  Button,
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
    backgroundImage,
    headingContent,
    buttonLink,
    headingContentColor,
    showButton,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
  } = attributes;

  return (
    <div {...useBlockProps({ className: "md_woodward_cta" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings")} initialOpen={true}>
          <div className="setting-row">
            <label htmlFor="background-image">
              {__("Background Image", "md-prime")}
            </label>
            <div>
              {!backgroundImage ? (
                <MediaUpload
                  onSelect={(selectedImage) => {
                    setAttributes({
                      backgroundImage: selectedImage.url,
                    });
                  }}
                  allowedTypes={["image"]}
                  value={backgroundImage}
                  render={({ open }) => (
                    <Button onClick={open} className="button button-large">
                      {__("Upload Image", "md-prime")}
                    </Button>
                  )}
                />
              ) : (
                <>
                  <div className="image-preview">
                    <img src={backgroundImage} alt="Background-image-preview" />
                  </div>
                  <Button
                    onClick={() => {
                      setAttributes({
                        backgroundImage: "",
                      });
                    }}
                    className="is-link is-destructive"
                  >
                    {__("Remove Image", "md-prime")}
                  </Button>
                </>
              )}
            </div>
          </div>
          <ToggleControl
            label={__("Show Button", "md-woodward")}
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
          title={__("Color Settings", "md-woodward")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-woodward")}
            initialOpen={false}
            colorSettings={[
              {
                value: headingContentColor,
                onChange: (colorValue) =>
                  setAttributes({ headingContentColor: colorValue }),
                label: __("Heading Content Color", "md-woodward"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`md_woodward_cta_text_wrap`} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <style>
          {`
            .md_woodward_cta_text__btn {
              color: ${buttonColor} !important;
              background: ${buttonBackgroundColor} !important;
            }
            .md_woodward_cta_text__btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor} !important;
            }
          `}
        </style>
        <div className="md_woodward_cta_text">
          <div className="container">
            <div className="md_woodward_cta_text__inner">
              <div className="md_woodward_cta_text__heading">
                <RichText
                  tagName="p"
                  className="md_woodward_cta_text__content"
                  value={headingContent}
                  onChange={(value) => setAttributes({ headingContent: value })}
                  placeholder={__("Enter Content", "md-woodward")}
                  style={{
                    color: headingContentColor,
                  }}
                />
                {showButton && (
                  <div className="md_woodward_cta_text__btn_wrapper">
                    <RichText
                      className="btn-anitian md_woodward_cta_text__btn "
                      tagName="p"
                      value={buttonLink}
                      onChange={(value) => setAttributes({ buttonLink: value })}
                      placeholder={__("Enter Button Text", "md-woodward")}
                    />
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
