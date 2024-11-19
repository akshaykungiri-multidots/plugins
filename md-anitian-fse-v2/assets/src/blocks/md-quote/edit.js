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
  MediaUpload,
  PanelColorSettings,
  RichText
} from "@wordpress/block-editor";

import { Fragment } from "@wordpress/element";

import {
  PanelBody,
  Button,
  ToggleControl
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
    quoteIcon,
    quoteText,
    quoteBackgroundColor,
    quoteTextColor,
    showQuoteIcon
  } = attributes;

  return (
    <div {...useBlockProps({ className: "md_quote_block" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-anitian-fse-v2")}>
          <ToggleControl
            label={__("Show Quote Icon", "md-anitian-fse-v2")}
            checked={showQuoteIcon}
            onChange={(value) => setAttributes({ showQuoteIcon: value })}
          />
          {showQuoteIcon && (
            <div className="setting-row">
              <label htmlFor="play-button-image">
                {__("Play Button Image", "md-prime")}
              </label>
              <div>
                {!quoteIcon ? (
                  <MediaUpload
                    onSelect={(selectedImage) => {
                      setAttributes({
                        quoteIcon: selectedImage.url,
                      });
                    }}
                    allowedTypes={["image"]}
                    value={quoteIcon}
                    render={({ open }) => (
                      <Button onClick={open} className="button button-large">
                        {__("Upload Image", "md-prime")}
                      </Button>
                    )}
                  />
                ) : (
                  <Fragment>
                    <div className="image-preview">
                      <img src={quoteIcon} alt="Play-button-image-preview" />
                    </div>
                    <Button
                      onClick={() => {
                        setAttributes({
                          quoteIcon: "",
                        });
                      }}
                      className="is-link is-destructive"
                    >
                      {__("Remove Image", "md-prime")}
                    </Button>
                  </Fragment>
                )}
              </div>
            </div>
          )}
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-anitian-fse-v2")}>
          <PanelColorSettings
            title={__("Color Settings", "md-anitian-fse-v2")}
            colorSettings={[
              {
                value: quoteBackgroundColor,
                onChange: (value) =>
                  setAttributes({ quoteBackgroundColor: value }),
                label: __("Background Color", "md-anitian-fse-v2"),
              },
              {
                value: quoteTextColor,
                onChange: (value) =>
                  setAttributes({ quoteTextColor: value }),
                label: __("Text Color", "md-anitian-fse-v2"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_quote_inner" style={{ backgroundColor: quoteBackgroundColor }}>
        {showQuoteIcon && quoteIcon && (
          <img src={quoteIcon} alt="quote-icon" className="quote-icon" />
        )}
        <RichText
          tagName="p"
          placeholder={__("Write Quote Here", "md-anitian-fse-v2")}
          value={quoteText}
          onChange={(value) => setAttributes({ quoteText: value })}
          style={{
            color: quoteTextColor,
          }}
        />
      </div>
    </div>
  );
}
