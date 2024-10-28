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
  PanelColorSettings
} from "@wordpress/block-editor";

import {
  PanelBody,
  Button,
  SelectControl,
  FontSizePicker
} from "@wordpress/components";

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
    title,
    heading_content,
    button_link,
    cover_image,
    background_image,
    background_color,
    cover_cta_style,
    title_font_size,
    title_font_color,
    heading_content_font_size,
    heading_content_font_color,
    button_font_size
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
    <div {...useBlockProps({className: "md_anitian_cover_cta_section"})}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
          <label>{__("Background Image")}</label>
          <div className="md_bg_image_remove">
            <Button
              onClick={() => setAttributes({ background_image: "" })}
            >
              {__("Remove Image", "md-anitian-fse-full")}
            </Button>
          </div>
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
          <SelectControl 
            label={__("Cover CTA Style", "md-anitian-fse-full")}
            value={cover_cta_style}
            options={[
              { label: "Style 1", value: "style1" },
              { label: "Style 2", value: "style2" },
              { label: "Style 3", value: "style3" },
            ]}
            onChange={(value) => setAttributes({ cover_cta_style: value })}
          />
        </PanelBody>
        <PanelBody title={__("Typography", "md-storyful-fse-full")}>
          <label>{__("Title Font Size")}</label>
          <FontSizePicker
            fontSizes={fontSizes}
            value={title_font_size}
            onChange={(value) => setAttributes({ title_font_size: value })}
          />
          <label>{__("Heading Content Font Size")}</label>
          <FontSizePicker
            fontSizes={fontSizes}
            value={heading_content_font_size}
            onChange={(value) => setAttributes({ heading_content_font_size: value })}
          />
          <label>{__("Button Font Size")}</label>
          <FontSizePicker
            fontSizes={fontSizes}
            value={button_font_size}
            onChange={(value) => setAttributes({ button_font_size: value })}
          />
        </PanelBody>
        <PanelColorSettings
          title={__("Typography Colors", "md-storyful-fse-full")}
          initialOpen={false}
          colorSettings={[
            {
              value: title_font_color,
              onChange: (value) => setAttributes({ title_font_color: value }),
              label: __("Title Color", "md-storyful-fse-full"),
            },
            {
              value: heading_content_font_color,
              onChange: (value) => setAttributes({ heading_content_font_color: value }),
              label: __("Heading Content Color", "md-storyful-fse-full"),
            },
            {
              value: background_color,
              onChange: (value) => setAttributes({ background_color: value }),
              label: __("Background Color", "md-storyful-fse-full"),
            }
          ]}
        />
      </InspectorControls>
      <div className={`md_anitian_cover_cta_wrap ${cover_cta_style}`} style={{backgroundColor: background_color}}>
        {cover_cta_style !== "style1" && (
          <div className="md_anitian_cover_cta_arc"></div>
        )}
          <div className="md_anitian_cover_cta" style={{backgroundImage: `url(${background_image})`}}>
            {cover_cta_style === "style1" && (
              <div className="background_overlay" style={{background: `linear-gradient(180deg, ${background_color} 0%, ${background_color} 100%)`}}>
              </div>
            )}
              <div className="container">
                  <div className="md_anitian_cover_cta__inner">
                      <div className="md_anitian_cover_cta__heading">
                        <RichText
                          tagName="h2"
                          value={title}
                          onChange={(value) => setAttributes({ title: value })}
                          placeholder={__("Enter Title", "md-anitian-fse-full")}
                          style={{fontSize: title_font_size, color: title_font_color}}
                        />
                        <RichText
                          tagName="p"
                          value={heading_content}
                          onChange={(value) => setAttributes({ heading_content: value })}
                          placeholder={__("Enter Content", "md-anitian-fse-full")}
                          style={{fontSize: heading_content_font_size, color: heading_content_font_color}}
                        />
                        <div className="md_anitian_cover_cta__btn">
                            <RichText
                              tagName="p"
                              className="btn-anitian md_anitian_cover_cta__btn"
                              value={button_link}
                              onChange={(value) => setAttributes({ button_link: value })}
                              placeholder={__("Enter Button Link", "md-anitian-fse-full")}
                              style={{fontSize: button_font_size}}
                            />
                        </div>
                      </div>
                      <div className="md_anitian_cover_cta__image">
                          <div className="cover_cta__image">
                            <MediaUpload
                              title={__("Cover Image")}
                              onSelect={(media) =>
                                setAttributes({
                                  cover_image: media.url,
                                })
                              }
                              multiple={false}
                              render={({ open }) => (
                                <>
                                  <Button className="md_cover_image_upload" onClick={open}>
                                    {cover_image == "" ? (
                                      <i className="dashicons dashicons-format-image"> </i>
                                    ) : (
                                      <img src={cover_image} alt="cover" />
                                    )}
                                  </Button>
                                </>
                              )}
                            />
                            <Button className="md_cover_image_remove" onClick={() => setAttributes({ cover_image: "" })}>
                              {__("Remove Image", "md-anitian-fse-full")}
                            </Button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
