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
  PanelColorSettings,
  InspectorControls,
} from "@wordpress/block-editor";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import { PanelBody, ToggleControl } from "@wordpress/components";

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
    heading,
    content,
    enableHeading,
    enableContent,
    enableTopBorder,
    headingColor,
    contentColor,
    topBorderColor,
  } = attributes;

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Typography Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Enable Heading")}
            checked={enableHeading}
            onChange={() => setAttributes({ enableHeading: !enableHeading })}
          />
          <ToggleControl
            label={__("Enable Content")}
            checked={enableContent}
            onChange={() => setAttributes({ enableContent: !enableContent })}
          />
          <ToggleControl
            label={__("Enable Top Border")}
            checked={enableTopBorder}
            onChange={() =>
              setAttributes({ enableTopBorder: !enableTopBorder })
            }
          />
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: headingColor,
                onChange: (value) => setAttributes({ headingColor: value }),
                label: __("Heading Color"),
              },
              {
                value: contentColor,
                onChange: (value) => setAttributes({ contentColor: value }),
                label: __("Content Color"),
              },
              {
                value: topBorderColor,
                onChange: (value) => setAttributes({ topBorderColor: value }),
                label: __("Top Border Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_real_facts_item">
        <div className="container">
          {enableTopBorder && (
            <div className="md_real_facts_line" style={{ borderColor: topBorderColor }}></div>
          )}
          {enableHeading && (
            <RichText
              style={{
                color: headingColor,
              }}
              tagName="h2"
              className="md_real_facts_heading"
              name="heading"
              placeholder={__("Enter Title")}
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
            />
          )}
          {enableContent && (
            <RichText
              style={{
                color: contentColor,
              }}
              tagName="h4"
              className="md_real_facts_desc"
              name="content"
              placeholder={__("Enter Paragraph…")}
              value={content}
              onChange={(value) => setAttributes({ content: value })}
            />
          )}
        </div>
      </div>
    </div>
  );
}
