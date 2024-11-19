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
  InspectorControls,
  RichText,
  InnerBlocks,
  Inserter,
  PanelColorSettings,
} from "@wordpress/block-editor";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import { PanelBody, Button, ToggleControl } from "@wordpress/components";

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
export default function Edit({ attributes, setAttributes, clientId }) {
  const {
    heading,
    enableHeading,
    enableTimelineBorder,
    TimelineBorderColor,
    headingColor,
  } = attributes;

  function MyButtonBlockAppender({ rootClientId }) {
    return (
      <Inserter
        rootClientId={rootClientId}
        renderToggle={({ onToggle, disabled }) => (
          <Button
            className="my-button-block-appender"
            onClick={onToggle}
            disabled={disabled}
            icon="plus"
          >
            {__("Add Timeline Block")}
          </Button>
        )}
        isAppender
      />
    );
  }

  const ALLOWED_BLOCKS = [
    "md-anitian-fse-v2/md-timeline-card",
    "md-anitian-fse-v2/md-timeline-phase",
    "md-anitian-fse-v2/md-timeline-finish",
  ];

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-anitian-fse-v2")}>
          <ToggleControl
            label={__("Enable Heading", "md-anitian-fse-v2")}
            checked={enableHeading}
            onChange={(value) => setAttributes({ enableHeading: value })}
          />
          <ToggleControl
            label={__("Enable Timeline Border", "md-anitian-fse-v2")}
            checked={enableTimelineBorder}
            onChange={(value) => setAttributes({ enableTimelineBorder: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-anitian-fse-v2")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Heading Color", "md-anitian-fse-v2")}
            colorSettings={[
              {
                value: headingColor,
                onChange: (value) => setAttributes({ headingColor: value }),
                label: __("Heading Color", "md-anitian-fse-v2"),
              },
              {
                value: TimelineBorderColor,
                onChange: (value) =>
                  setAttributes({ TimelineBorderColor: value }),
                label: __("Timeline Border Color", "md-anitian-fse-v2"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className="md_timeline_block"
        style={{
          borderTop: enableTimelineBorder
            ? `20px solid ${TimelineBorderColor}`
            : "none",
        }}
      >
        <div className="container">
          <div className="md_timeline__line">
            <div className="md_timeline__line-inner"></div>
          </div>
          {enableHeading && (
            <div className="timeline_heading_div">
              <RichText
                className="md_timeline_heading"
                name="heading"
                placeholder={__("Enter Title")}
                value={heading}
                onChange={(value) => setAttributes({ heading: value })}
                style={{ color: headingColor }}
              />
            </div>
          )}
          <div className="md_block_inserter">
            <InnerBlocks
              allowedBlocks={ALLOWED_BLOCKS}
              renderAppender={() => (
                <MyButtonBlockAppender rootClientId={clientId} />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
