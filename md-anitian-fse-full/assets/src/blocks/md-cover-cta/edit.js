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
} from "@wordpress/block-editor";

import {
  PanelBody,
  Button,
  ColorPicker,
  SelectControl
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
    cover_cta_style
  } = attributes;

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
          <label>{__("Background Color")}</label>
          <ColorPicker
            color={background_color}
            onChange={(color) => setAttributes({ background_color: color })}
            enableAlpha
            defaultValue="#000"
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
                        />
                        <RichText
                          tagName="p"
                          value={heading_content}
                          onChange={(value) => setAttributes({ heading_content: value })}
                          placeholder={__("Enter Content", "md-anitian-fse-full")}
                        />
                        <div className="md_anitian_cover_cta__btn">
                            <RichText
                              tagName="p"
                              className="btn-anitian md_anitian_cover_cta__btn"
                              value={button_link}
                              onChange={(value) => setAttributes({ button_link: value })}
                              placeholder={__("Enter Button Link", "md-anitian-fse-full")}
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
