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
    headingColor,
    leaderTitleFontColor,
    leaderDesignationFontColor,
    leaderDescriptionFontColor,
    showHeading,
    showLeaderTitle,
    showLeaderDesignation,
    showLeaderDescription,
  } = attributes;
  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Toggle Settings", "md-anitian-fse-full")}>
          <ToggleControl
            label={__("Show Heading", "md-anitian-fse-full")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          {showHeading && (
            <TextControl
              label={__("Heading", "md-anitian-fse-full")}
              placeholder={__("Enter Heading", "md-anitian-fse-full")}
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
            />
          )}
          <ToggleControl
            label={__("Show Leader Title", "md-anitian-fse-full")}
            checked={showLeaderTitle}
            onChange={(value) => setAttributes({ showLeaderTitle: value })}
          />
          <ToggleControl
            label={__("Show Leader Designation", "md-anitian-fse-full")}
            checked={showLeaderDesignation}
            onChange={(value) => setAttributes({ showLeaderDesignation: value })}
          />
          <ToggleControl
            label={__("Show Leader Description", "md-anitian-fse-full")}
            checked={showLeaderDescription}
            onChange={(value) => setAttributes({ showLeaderDescription: value })}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-anitian-fse-full")} initialOpen={false}>
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
        </PanelBody>
      </InspectorControls>
      <ServerSideRender
        block={metadata.name}
        className={className}
        attributes={{
          heading,
          headingColor,
          leaderTitleFontColor,
          leaderDesignationFontColor,
          leaderDescriptionFontColor,
          showHeading,
          showLeaderTitle,
          showLeaderDesignation,
          showLeaderDescription,
        }}
      />
    </div>
  );
}
