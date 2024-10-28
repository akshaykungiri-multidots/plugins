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
  RichText,
  InspectorControls,
  MediaUpload,
  PanelColorSettings,
} from "@wordpress/block-editor";

import { Fragment } from "@wordpress/element";

import { PanelBody, Button, FontSizePicker } from "@wordpress/components";

import { useState } from "@wordpress/element";

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
    sub_title,
    title,
    heading_content,
    button_link,
    cover_video,
    background_image,
    background_color,
    sub_title_font_size,
    title_font_size,
    heading_content_font_size,
    button_font_size,
    sub_title_color,
    title_color,
    heading_content_color,
    button_color,
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
    <div {...useBlockProps({ className: "md_anitian_video_header_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-anitian-fse-full")}>
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
                <Fragment>
                  <div className="image-preview">
                    <img
                      src={background_image}
                      alt="Background-image-preview"
                    />
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
                </Fragment>
              )}
            </div>
          </div>
          <div className="setting-row">
            <label>{__("Cover Video")}</label>
            <input
              type="url"
              className="components-text-control__input is-next-40px-default-size"
              value={cover_video}
              onChange={(e) => setAttributes({ cover_video: e.target.value })}
              placeholder={__("Enter Youtube Video URL", "md-anitian-fse-full")}
            />
          </div>
        </PanelBody>
        <PanelBody title={__("Typography", "md-anitian-fse-full")}>
          <label> {__("Sub Title Font Size")}</label>
          <FontSizePicker
            value={sub_title_font_size}
            onChange={(value) => setAttributes({ sub_title_font_size: value })}
            fontSizes={fontSizes}
          />
          <label> {__("Title Font Size")}</label>
          <FontSizePicker
            value={title_font_size}
            onChange={(value) => setAttributes({ title_font_size: value })}
            fontSizes={fontSizes}
          />
          <label> {__("Heading Content Font Size")}</label>
          <FontSizePicker
            value={heading_content_font_size}
            onChange={(value) =>
              setAttributes({ heading_content_font_size: value })
            }
            fontSizes={fontSizes}
          />
          <label> {__("Button Font Size")}</label>
          <FontSizePicker
            value={button_font_size}
            onChange={(value) => setAttributes({ button_font_size: value })}
            fontSizes={fontSizes}
          />
        </PanelBody>
        <PanelColorSettings
          title={__("Typography Colors", "md-anitian-fse-full")}
          initialOpen={false}
          colorSettings={[
            {
              value: sub_title_color,
              onChange: (colorValue) =>
                setAttributes({ sub_title_color: colorValue }),
              label: __("Sub Title Color", "md-anitian-fse-full"),
            },
            {
              value: title_color,
              onChange: (colorValue) =>
                setAttributes({ title_color: colorValue }),
              label: __("Title Color", "md-anitian-fse-full"),
            },
            {
              value: heading_content_color,
              onChange: (colorValue) =>
                setAttributes({ heading_content_color: colorValue }),
              label: __("Heading Content Color", "md-anitian-fse-full"),
            },
            {
              value: button_color,
              onChange: (colorValue) =>
                setAttributes({ button_color: colorValue }),
              label: __("Button Color", "md-anitian-fse-full"),
            },
            {
              value: background_color,
              onChange: (colorValue) =>
                setAttributes({ background_color: colorValue }),
              label: __("Background Color", "md-anitian-fse-full"),
            },
          ]}
        />
      </InspectorControls>
      <div className="md_anitian_text_video_wrap">
        <div
          className="md_anitian_text_video"
          style={{
            background: `${background_color} url(${background_image}) no-repeat center center / cover`,
          }}
        >
          <div className="container">
            <div className="md_anitian_text_video__inner">
              <div className="md_anitian_text_video__heading">
                <RichText
                  tagName="h4"
                  value={sub_title}
                  onChange={(value) => setAttributes({ sub_title: value })}
                  placeholder={__("Enter Sub Title", "md-anitian-fse-full")}
                  style={{
                    fontSize: sub_title_font_size,
                    color: sub_title_color,
                  }}
                />
                <RichText
                  tagName="h2"
                  value={title}
                  onChange={(value) => setAttributes({ title: value })}
                  placeholder={__("Enter Title", "md-anitian-fse-full")}
                  style={{ fontSize: title_font_size, color: title_color }}
                />
                <RichText
                  tagName="p"
                  value={heading_content}
                  onChange={(value) =>
                    setAttributes({ heading_content: value })
                  }
                  placeholder={__("Enter Content", "md-anitian-fse-full")}
                  style={{
                    fontSize: heading_content_font_size,
                    color: heading_content_color,
                  }}
                />
                <div className="md_anitian_text_video__btn">
                  <RichText
                    className="btn-anitian md_anitian_text_video__btn"
                    tagName="p"
                    value={button_link}
                    onChange={(value) => setAttributes({ button_link: value })}
                    placeholder={__("Enter Button Text", "md-anitian-fse-full")}
                    style={{ fontSize: button_font_size, color: button_color }}
                  />
                </div>
              </div>
              {cover_video && (
                <div className="md_anitian_text_video__youtube">
                  <div className="text_video__youtube">
                    <div className="video_section_wrapper" id="MdYTplayer">
                      <iframe
                        src={cover_video}
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
