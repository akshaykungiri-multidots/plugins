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
import { InspectorControls, PanelColorSettings, useBlockProps } from "@wordpress/block-editor";

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
    headingFontSize,
    headingColor,
    leaderTitleFontSize,
    leaderTitleFontColor,
    leaderDesignationFontSize,
    leaderDesignationFontColor,
    leaderDescriptionFontSize,
    leaderDescriptionFontColor,
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
        <PanelBody title={__("Block Settings", "md-anitian-fse-full")}>
          <TextControl
            label={__("Heading", "md-anitian-fse-full")}
            placeholder={__("Enter Heading", "md-anitian-fse-full")}
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
          />
        </PanelBody>
        <PanelBody title={__("Typography", "md-anitian-fse-full")}>
          <label>{__("Heading Font Size", "md-anitian-fse-full")}</label>
          <FontSizePicker
            fontSizes={fontSizes}
            value={headingFontSize}
            onChange={(value) =>
              setAttributes({ headingFontSize: value })
            }
          />
          <label> {__("Leader Title Font Size", "md-anitian-fse-full")}</label>
          <FontSizePicker
            fontSizes={fontSizes}
            value={leaderTitleFontSize}
            onChange={(value) =>
              setAttributes({ leaderTitleFontSize: value })
            }
          />
          <label>{__("Leader Designation Font Size", "md-anitian-fse-full")}</label>
          <FontSizePicker
            fontSizes={fontSizes}
            value={leaderDesignationFontSize}
            onChange={(value) =>
              setAttributes({ leaderDesignationFontSize: value })
            }
          />
          <label>{__("Leader Description Font Size", "md-anitian-fse-full")}</label>
          <FontSizePicker
            fontSizes={fontSizes}
            value={leaderDescriptionFontSize}
            onChange={(value) =>
              setAttributes({ leaderDescriptionFontSize: value })
            }
          />
        </PanelBody>
        <PanelColorSettings
          title={__("Typography Colors", "md-anitian-fse-full")}
          initialOpen={false}
          colorSettings={[
            {
              value: headingColor,
              onChange: (value) => setAttributes({ headingColor: value }),
              label: __("Heading Font Color", "md-anitian-fse-full"),
            },
            {
              value: leaderTitleFontColor,
              onChange: (value) =>
                setAttributes({ leaderTitleFontColor: value }),
              label: __("Leader Title Font Color", "md-anitian-fse-full"),
            },
            {
              value: leaderDesignationFontColor,
              onChange: (value) =>
                setAttributes({ leaderDesignationFontColor: value }),
              label: __("Leader Designation Font Color", "md-anitian-fse-full"),
            },
            {
              value: leaderDescriptionFontColor,
              onChange: (value) =>
                setAttributes({ leaderDescriptionFontColor: value }),
              label: __("Leader Description Font Color", "md-anitian-fse-full"),
            },
          ]}
        />
      </InspectorControls>
      <ServerSideRender
        block={metadata.name}
        className={className}
        attributes={{
          heading,
          headingFontSize,
          headingColor,
          leaderTitleFontSize,
          leaderTitleFontColor,
          leaderDesignationFontSize,
          leaderDesignationFontColor,
          leaderDescriptionFontSize,
          leaderDescriptionFontColor,
        }}
      />
    </div>
  );
}
