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
  ColorPicker
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
    sub_title,
    title,
    heading_content,
    button_link,
    cover_video,
    background_image,
    background_color
  } = attributes;

  return (
    <div {...useBlockProps({className: "md_anitian_video_header_section"})}>
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
          <label>{__("Background Color")}</label>
          <ColorPicker
            color={background_color}
            onChange={(color) => setAttributes({ background_color: color })}
            enableAlpha
            defaultValue="#000"
          />
          <label>{__("Cover Video")}</label>
          <input
            type="url"
            value={cover_video}
            onChange={(e) => setAttributes({ cover_video: e.target.value })}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_anitian_text_video_wrap">
          <div className="md_anitian_text_video" style={{background: `${background_color} url(${background_image}) no-repeat center center / cover`}}>
              <div className="container">
                  <div className="md_anitian_text_video__inner">
                      <div className="md_anitian_text_video__heading">
                          <RichText
                            tagName="h4"
                            value={sub_title}
                            onChange={(value) => setAttributes({ sub_title: value })}
                            placeholder={__("Enter Sub Title", "md-anitian-fse-full")}
                          />
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
                          <div className="md_anitian_text_video__btn">
                            <RichText
                              className="btn-anitian md_anitian_text_video__btn"
                              tagName="p"
                              value={button_link}
                              onChange={(value) => setAttributes({ button_link: value })}
                              placeholder={__("Enter Button Text", "md-anitian-fse-full")}
                            />
                          </div>
                      </div>
                      {cover_video && (
                          <div className="md_anitian_text_video__youtube">
                              <div className="text_video__youtube">
                                  <div className="video_section_wrapper" id="MdYTplayer">
                                      <iframe src={cover_video} frameborder="0" allowfullscreen></iframe>
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
