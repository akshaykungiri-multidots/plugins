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
import { PanelBody, TextControl, FontSizePicker } from "@wordpress/components";

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
    heading_font_size,
    heading_font_color,
    titleFontColor,
    titleFontSize,
    descriptionFontColor,
    descriptionFontSize,
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
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
          <TextControl
            label={__("Heading", "md-storyful-fse-full")}
            placeholder={__("Enter Heading", "md-storyful-fse-full")}
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
          />
        </PanelBody>
        <PanelBody title={__("Typography", "md-storyful-fse-full")}>
          <label> {__("Our Story Title Font Size")} </label>
          <FontSizePicker
            fontSizes={fontSizes}
            value={heading_font_size}
            onChange={(newFontSize) =>
              setAttributes({ heading_font_size: newFontSize })
            }
          />
		  <label> {__("Title Font Size")} </label>
          <FontSizePicker
            fontSizes={fontSizes}
            value={titleFontSize}
            onChange={(newFontSize) =>
              setAttributes({ titleFontSize: newFontSize })
            }
          />
		  <label> {__("Description Font Size")} </label>
          <FontSizePicker
            fontSizes={fontSizes}
            value={descriptionFontSize}
            onChange={(newFontSize) =>
              setAttributes({ descriptionFontSize: newFontSize })
            }
          />
        </PanelBody>
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
      </InspectorControls>
      <ServerSideRender
        block={metadata.name}
        className={className}
        attributes={{
          heading,
		  heading_font_size,
		  heading_font_color,
		  titleFontColor,
		  titleFontSize,
		  descriptionFontColor,
		  descriptionFontSize,
        }}
      />
    </div>
  );
}
