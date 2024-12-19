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

import {
  PanelBody,
  ToggleControl,
  TextControl,
  SelectControl
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
    heading,
    subheading,
    emailPlaceholder,
    buttonText,
    subscribeUrl,
    successMessage,
    errorMessage,
    showHeading,
    showSubheading,
    headingColor,
    subheadingColor,
    formStyle
  } = attributes;
  return (
    <div {...useBlockProps({ className: "md-subscribe" })}>
      <InspectorControls>
        <PanelBody title={__("Subscribe Settings")}>
          <ToggleControl
            label={__("Show Heading")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Subheading")}
            checked={showSubheading}
            onChange={(value) => setAttributes({ showSubheading: value })}
          />
          <TextControl
            label={__("Email Placeholder")}
            value={emailPlaceholder}
            onChange={(value) => setAttributes({ emailPlaceholder: value })}
          />
          <TextControl
            label={__("Subscribe URL")}
            value={subscribeUrl}
            onChange={(value) => setAttributes({ subscribeUrl: value })}
          />
          <TextControl
            label={__("Success Message")}
            value={successMessage}
            onChange={(value) => setAttributes({ successMessage: value })}
          />
          <TextControl
            label={__("Error Message")}
            value={errorMessage}
            onChange={(value) => setAttributes({ errorMessage: value })}
          />
          <SelectControl
            label={__("Form Style")}
            value={formStyle}
            options={[
              { value: "style1", label: "Style 1" },
              { value: "style2", label: "Style 2" },
            ]}
            onChange={(value) => setAttributes({ formStyle: value })}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: headingColor,
                onChange: (colorValue) => setAttributes({ headingColor: colorValue }),
                label: __("Heading Color"),
              },
              {
                value: subheadingColor,
                onChange: (colorValue) => setAttributes({ subheadingColor: colorValue }),
                label: __("Subheading Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={ "md-subscribe__inner " + formStyle }>
        <div className="md-subscribe__heading">
          {showSubheading && (
            <RichText
              tagName="p"
              value={subheading}
              onChange={(value) => setAttributes({ subheading: value })}
              placeholder={__("Subheading")}
              style={{ color: subheadingColor }}
            />
          )}
          {showHeading && (
            <RichText
              tagName="h2"
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
              placeholder={__("Heading")}
              style={{ color: headingColor }}
            />
          )}
        </div>
        <div className="md-subscribe__form">
          <div className="md-subscribe__message">
            <p className="md-subscribe__success-message">{successMessage}</p>
            <p className="md-subscribe__error-message">{errorMessage}</p>
          </div>
          <form action={subscribeUrl} method="post">
            <input type="email" name="email" placeholder={emailPlaceholder} />
            <button type="submit">{buttonText}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
