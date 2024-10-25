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

import { PanelBody, FontSizePicker, Button } from "@wordpress/components";

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
    titleFontSize,
    titleFontColor,
    descriptionFontSize,
    descriptionFontColor,
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
    <>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
          <label>{__("Background Image")}</label>
          <MediaUpload
            title={__("Background Image")}
            onSelect={(media) =>
              setAttributes({
                background_image: media.url,
              })
            }
            multiple={false}
            render={({ open }) => (
              <>
                <Button className="md_bg_image_upload" onClick={open}>
                  {background_image == "" ? (
                    <i className="dashicons dashicons-format-image"> </i>
                  ) : (
                    <img src={background_image} alt="background" />
                  )}
                </Button>
              </>
            )}
          />
        </PanelBody>
        <PanelBody title={__("Typography", "md-storyful-fse-full")}>
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
      <div {...useBlockProps({ className: "md_two_column" })}>
        <div
          className="storyful-two-column"
          style={{ backgroundImage: `url(${background_image})` }}
        >
          <div class="container">
            <div class="two-columns__title">
              <RichText
                tagName="h2"
                value={title}
                onChange={(title) => setAttributes({ title })}
                placeholder={__("Enter Title", "md-storyful-fse-full")}
				style={{ fontSize: titleFontSize, color: titleFontColor }}
              />
            </div>
            <div class="two-columns__description wow fadeInRight">
              <RichText
                tagName="p"
                value={description}
                onChange={(description) => setAttributes({ description })}
                placeholder={__("Enter Description", "md-storyful-fse-full")}
				style={{ fontSize: descriptionFontSize, color: descriptionFontColor }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
