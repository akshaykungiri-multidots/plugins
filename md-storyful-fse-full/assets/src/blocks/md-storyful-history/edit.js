/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the server side render element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-server-side-render/
 */
import ServerSideRender from "@wordpress/server-side-render";

/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 */
import {
  useBlockProps,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";

import metadata from "./block.json";
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
export default function Edit({ attributes, setAttributes, className }) {
  const {
    heading,
    heading_font_color,
    titleFontColor,
    descriptionFontColor,
    displayHeading,
    displayDescription,
    displayImage,
  } = attributes;
  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Toggle Settings", "md-storyful-fse-full")}>
          <ToggleControl
            label={__("Display Heading", "md-storyful-fse-full")}
            checked={displayHeading}
            onChange={(value) => setAttributes({ displayHeading: value })}
          />
          {displayHeading && (
            <TextControl
              label={__("Heading", "md-storyful-fse-full")}
              placeholder={__("Enter Heading", "md-storyful-fse-full")}
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
            />
          )}
          <ToggleControl
            label={__("Display Description", "md-storyful-fse-full")}
            checked={displayDescription}
            onChange={(value) => setAttributes({ displayDescription: value })}
          />
          <ToggleControl
            label={__("Display Image", "md-storyful-fse-full")}
            checked={displayImage}
            onChange={(value) => setAttributes({ displayImage: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: heading_font_color,
                onChange: (newColor) =>
                  setAttributes({ heading_font_color: newColor }),
                label: __("Heading Font Color"),
              },
              {
                value: titleFontColor,
                onChange: (newColor) =>
                  setAttributes({ titleFontColor: newColor }),
                label: __("Title Font Color"),
              },
              {
                value: descriptionFontColor,
                onChange: (newColor) =>
                  setAttributes({ descriptionFontColor: newColor }),
                label: __("Description Font Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <ServerSideRender
        block={metadata.name}
        className={className}
        attributes={{
          heading,
          heading_font_color,
          titleFontColor,
          descriptionFontColor,
          displayHeading,
          displayDescription,
          displayImage,
        }}
      />
    </div>
  );
}
