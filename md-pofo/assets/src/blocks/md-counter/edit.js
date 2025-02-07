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
  InspectorControls,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";

import { PanelBody, ToggleControl } from "@wordpress/components";

import { leftAlign, centerAlign, rightAlign } from "../icons";

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
    counterNumber,
    counterSign,
    alignText,
    isSignBefore,
    counterText,
    counterNumberColor,
    counterTextColor,
    showCounterSign,
    showCounterText,
  } = attributes;

  return (
    <div {...useBlockProps({ className: "md_counter_block" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings")} initialOpen={true}>
          <div className="setting-row inspector-field inspector-field-alignment">
            <label htmlFor="alignment" className="inspector-mb-0">
              Alignment
            </label>
            <div className="inspector-field-button-list inspector-field-button-list-fluid">
              <button
                className={
                  "left" === alignText
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ alignText: "left" })}
              >
                {leftAlign}
              </button>
              <button
                className={
                  "center" === alignText
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ alignText: "center" })}
              >
                {centerAlign}
              </button>
              <button
                className={
                  "right" === alignText
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ alignText: "right" })}
              >
                {rightAlign}
              </button>
            </div>
          </div>
          <ToggleControl
            label={__("Show Counter Text")}
            checked={showCounterText}
            onChange={(value) => setAttributes({ showCounterText: value })}
          />
          <ToggleControl
            label={__("Show Counter Sign")}
            checked={showCounterSign}
            onChange={(value) => setAttributes({ showCounterSign: value })}
          />
          {showCounterSign && (
            <div className="md_counter_sign_settings">
              <ToggleControl
                label={__("Sign Before")}
                checked={isSignBefore}
                onChange={(value) => setAttributes({ isSignBefore: value })}
              />
            </div>
          )}
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={true}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: counterNumberColor,
                onChange: (value) =>
                  setAttributes({ counterNumberColor: value }),
                label: __("Counter Number Color"),
              },
              {
                value: counterTextColor,
                onChange: (value) => setAttributes({ counterTextColor: value }),
                label: __("Counter Text Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_counter_wrapper" style={{ textAlign: alignText }}>
        <div
          className={`md_counter_item ${alignText}`}
          style={{ color: counterNumberColor }}
        >
          <RichText
            tagName="span"
            className="md_counter_number"
            value={counterNumber}
            onChange={(value) => setAttributes({ counterNumber: value })}
            placeholder={__("Enter Counter Number")}
          />
          {showCounterSign && (
            <RichText
              tagName="span"
              className="md_counter_sign"
              value={counterSign}
              onChange={(value) => setAttributes({ counterSign: value })}
              placeholder={__("Enter Counter Sign")}
              style={{ order: isSignBefore ? -1 : 1 }}
            />
          )}
        </div>
        {showCounterText && (
          <div
            className={`md_counter_text`}
            style={{ color: counterTextColor }}
          >
            <RichText
              tagName="div"
              value={counterText}
              onChange={(value) => setAttributes({ counterText: value })}
              placeholder={__("Enter Counter Text")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
