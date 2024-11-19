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
  InnerBlocks,
  Inserter,
} from "@wordpress/block-editor";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import { PanelBody, Button, ToggleControl } from "@wordpress/components";

import "./editor.scss";

import { useState } from "@wordpress/element";

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
            {__("Add Realfact Block")}
          </Button>
        )}
        isAppender
      />
    );
  }

  const {
    heading,
    headingColor,
    content,
    contentColor,
    buttonText,
    buttonColor,
    buttonBGColor,
    showContent
  } = attributes;

  const ALLOWED_BLOCKS = [
    "md-anitian-fse-v2/md-video",
    "md-anitian-fse-v2/md-slider",
    "md-anitian-fse-v2/md-realfact-item",
    "md-anitian-fse-v2/md-timeline-card",
    "core/columns",
  ];

  const [showMore, setShowMore] = useState(false);

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Block Settings")} initialOpen={true}>
          <ToggleControl
            label={__("Show Content")}
            checked={showContent}
            onChange={() => setAttributes({ showContent: !showContent })}
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
                value: buttonColor,
                onChange: (value) => setAttributes({ buttonColor: value }),
                label: __("Button Text Color"),
              },
              {
                value: buttonBGColor,
                onChange: (value) => setAttributes({ buttonBGColor: value }),
                label: __("Button Background Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_real_facts">
        <div className="container">
          <div className="md_real_facts_line"></div>
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
          {showContent && (
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
          <Button
            className="md_real_facts_btn"
            style={{
              backgroundColor: buttonBGColor,
            }}
            onClick={() => setShowMore(!showMore)}
          >
            <RichText
              style={{
                color: buttonColor,
              }}
              name="buttonText"
              placeholder={__("Text")}
              value={buttonText}
              onChange={(value) => setAttributes({ buttonText: value })}
            />
          </Button>
        </div>
      </div>
      {showMore && (
        <div className="container">
          <div className="md_block_inserter">
            <InnerBlocks
              allowedBlocks={ALLOWED_BLOCKS}
              renderAppender={() => (
                <MyButtonBlockAppender rootClientId={clientId} />
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
}
