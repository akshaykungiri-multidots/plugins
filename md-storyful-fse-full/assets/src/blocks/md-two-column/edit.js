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
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";

import { PanelBody, Button } from "@wordpress/components";

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
    title,
    description,
    background_image,
    titleFontColor,
    descriptionFontColor,
  } = attributes;
  return (
    <>
      <InspectorControls>
        <PanelBody title={__("Background Settings", "md-prime")}>
          <div className="setting-row">
            <label htmlFor="background-image">
              {__("Background Image", "md-prime")}
            </label>
            <div>
              {!background_image ? (
                <MediaUpload
                  onSelect={(selectedImage) => {
                    setAttributes({
                      background_image: selectedImage.url,
                    });
                  }}
                  allowedTypes={["image"]}
                  value={background_image}
                  render={({ open }) => (
                    <Button onClick={open} className="button button-large">
                      {__("Upload Image", "md-prime")}
                    </Button>
                  )}
                />
              ) : (
                <>
                  <div className="image-preview">
                    <img src={background_image} alt="Background-image-preview" />
                  </div>
                  <Button
                    onClick={() => {
                      setAttributes({
                        background_image: "",
                      });
                    }}
                    className="is-link is-destructive"
                  >
                    {__("Remove Image", "md-prime")}
                  </Button>
                </>
              )}
            </div>
          </div>
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
      <div {...useBlockProps({ className: "md_two_column" })}>
        <div
          className="storyful-two-column"
          style={{ background_image: `url(${background_image})` }}
        >
          <div class="container">
            <div class="two-columns__title">
              <RichText
                tagName="h2"
                value={title}
                onChange={(title) => setAttributes({ title })}
                placeholder={__("Enter Title", "md-storyful-fse-full")}
                style={{ color: titleFontColor }}
              />
            </div>
            <div class="two-columns__description wow fadeInRight">
              <RichText
                tagName="p"
                value={description}
                onChange={(description) => setAttributes({ description })}
                placeholder={__("Enter Description", "md-storyful-fse-full")}
                style={{
                  color: descriptionFontColor,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
