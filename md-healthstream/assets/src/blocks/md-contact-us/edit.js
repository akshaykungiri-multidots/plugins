/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
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
  TextControl,
  GradientPicker,
} from "@wordpress/components";

import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param root0
 * @param root0.attributes
 * @param root0.attributes.heading
 * @param root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const {
    backgroundImage,
    enableOverlay,
    overlayColor,
    showForm,
    formTitle,
    formShortcode,
    formSubtitle,
    formBgColor,
    showFormTitle,
    showFormSubtitle,
    formTitleColor,
    formSubtitleColor,
    heading,
    description,
    showHeading,
    showDescription,
    headingColor,
    descriptionColor,
  } = attributes;

  return (
    <div
      {...useBlockProps({ className: "md_healthstream_contact_us_section" })}
    >
      <InspectorControls>
        <PanelBody
          title={__("Background Settings", "md-healthstream")}
          initialOpen={false}
        >
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
                <Fragment>
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
                </Fragment>
              )}
            </div>
          </div>
          <ToggleControl
            label={__("Enable Overlay", "md-healthstream")}
            checked={enableOverlay}
            onChange={(value) => setAttributes({ enableOverlay: value })}
          />
          {enableOverlay && (
            <div className="settings-row">
              <label htmlFor="overlay-color">
                {__("Overlay Color", "md-healthstream")}
              </label>
              <GradientPicker
                id="overlay-color"
                label={__("Button Background Color")}
                value={overlayColor ? overlayColor : null}
                onChange={(value) => setAttributes({ overlayColor: value })}
                gradients={[
                  {
                    name: "Gradient 1",
                    gradient: "linear-gradient(45deg, #0039E3 0%, #741BD9 65%)",
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
          )}
        </PanelBody>
        <PanelBody
          title={__("Toggle Settings", "md-healthstream")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Form", "md-healthstream")}
            checked={showForm}
            onChange={(value) => setAttributes({ showForm: value })}
          />
          <ToggleControl
            label={__("Show Form Title", "md-healthstream")}
            checked={showFormTitle}
            onChange={(value) => setAttributes({ showFormTitle: value })}
          />
          <ToggleControl
            label={__("Show Form Subtitle", "md-healthstream")}
            checked={showFormSubtitle}
            onChange={(value) => setAttributes({ showFormSubtitle: value })}
          />
          <ToggleControl
            label={__("Show Heading", "md-healthstream")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Description", "md-healthstream")}
            checked={showDescription}
            onChange={(value) => setAttributes({ showDescription: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-healthstream")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-healthstream")}
            initialOpen={false}
            colorSettings={[
              {
                value: formTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ formTitleColor: colorValue }),
                label: __("Form Title Color", "md-healthstream"),
              },
              {
                value: formSubtitleColor,
                onChange: (colorValue) =>
                  setAttributes({ formSubtitleColor: colorValue }),
                label: __("Form Subtitle Color", "md-healthstream"),
              },
              {
                value: formBgColor,
                onChange: (colorValue) =>
                  setAttributes({ formBgColor: colorValue }),
                label: __("Form Background Color", "md-healthstream"),
              },
              {
                value: headingColor,
                onChange: (colorValue) =>
                  setAttributes({ headingColor: colorValue }),
                label: __("Heading Color", "md-healthstream"),
              },
              {
                value: descriptionColor,
                onChange: (colorValue) =>
                  setAttributes({ descriptionColor: colorValue }),
                label: __("Description Color", "md-healthstream"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className="md_healthstream_contact_us_wrap"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {enableOverlay && (
          <div
            className="md_healthstream_contact_us_overlay"
            style={{
              background: overlayColor,
              opacity: 0.8,
            }}
          ></div>
        )}
        <div className="container">
          <div className="wrapper-inner">
            <div className="md_healthstream_contact_us_inner">
              <div className="md_healthstream_contact_us__heading">
                {showHeading && (
                  <RichText
                    tagName="h2"
                    value={heading}
                    onChange={(value) => setAttributes({ heading: value })}
                    placeholder={__("Enter Heading", "md-healthstream")}
                    style={{ color: headingColor }}
                  />
                )}
                {showDescription && (
                  <RichText
                    tagName="p"
                    value={description}
                    onChange={(value) => setAttributes({ description: value })}
                    placeholder={__("Enter Description", "md-healthstream")}
                    style={{ color: descriptionColor }}
                  />
                )}
              </div>
              {showForm && (
                <div
                  className="md_healthstream_contact_form"
                  style={{ backgroundColor: formBgColor }}
                >
                  <div className="md_healthstream_contact_form__inner">
                    {showFormSubtitle && (
                      <RichText
                        tagName="p"
                        className="md_healthstream_contact_form__subtitle"
                        value={formSubtitle}
                        onChange={(value) => setAttributes({ formSubtitle: value })}
                        placeholder={__("Enter Subtitle", "md-healthstream")}
                        style={{ color: formSubtitleColor }}
                      />
                    )}
                    {showFormTitle && (
                      <RichText
                        tagName="h2"
                        className="md_healthstream_contact_form__title"
                        value={formTitle}
                        onChange={(value) => setAttributes({ formTitle: value })}
                        placeholder={__("Enter Title", "md-healthstream")}
                        style={{ color: formTitleColor }}
                      />
                    )}
                    <div className="md_healthstream_contact_form__shortcode">
                      <div className="md_healthstream_contact_form__form_shortcode">
                        <TextControl
                          label={__("Form Shortcode", "md-healthstream")}
                          value={formShortcode}
                          onChange={(value) =>
                            setAttributes({ formShortcode: value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
