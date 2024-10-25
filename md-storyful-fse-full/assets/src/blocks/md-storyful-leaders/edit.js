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
import { PanelBody, FontSizePicker } from "@wordpress/components";

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
    titleFontSize,
    titleColor,
    descriptionFontSize,
    descriptionColor,
    socialIconBackgroundColor,
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
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Typography Settings")}>
          <label>{__("Title Font Size")}</label>
          <FontSizePicker
            fontSizes={fontSizes}
            value={titleFontSize}
            onChange={(value) => setAttributes({ titleFontSize: value })}
          />
          <label>{__("Description Font Size")}</label>
          <FontSizePicker
            fontSizes={fontSizes}
            value={descriptionFontSize}
            onChange={(value) => setAttributes({ descriptionFontSize: value })}
          />
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: titleColor,
                onChange: (value) => setAttributes({ titleColor: value }),
                label: __("Title Color"),
              },
              {
                value: descriptionColor,
                onChange: (value) => setAttributes({ descriptionColor: value }),
                label: __("Description Color"),
              },
              {
                value: socialIconBackgroundColor,
                onChange: (value) =>
                  setAttributes({ socialIconBackgroundColor: value }),
                label: __("Social Icon Background Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <ServerSideRender
        block={metadata.name}
        className={className}
        attributes={{
          titleFontSize,
          titleColor,
          descriptionFontSize,
          descriptionColor,
          socialIconBackgroundColor,
        }}
      />
    </div>
  );
}
