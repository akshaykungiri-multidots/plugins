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

import { PanelBody, Button, ToggleControl, SelectControl, TextControl } from "@wordpress/components";

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
    background_image,
    background_color,
    sub_title_color,
    title_color,
    heading_content_color,
    button_color,
    show_sub_title,
    show_title,
    show_heading_content,
    show_button,
    mediaurl,
    youtubeurl,
    videotype,
  } = attributes;

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
        </PanelBody>
        <PanelBody
          title={__("Show/Hide", "md-anitian-fse-full")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Sub Title", "md-anitian-fse-full")}
            checked={show_sub_title}
            onChange={(value) => setAttributes({ show_sub_title: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-anitian-fse-full")}
            checked={show_title}
            onChange={(value) => setAttributes({ show_title: value })}
          />
          <ToggleControl
            label={__("Show Heading Content", "md-anitian-fse-full")}
            checked={show_heading_content}
            onChange={(value) => setAttributes({ show_heading_content: value })}
          />
          <ToggleControl
            label={__("Show Button", "md-anitian-fse-full")}
            checked={show_button}
            onChange={(value) => setAttributes({ show_button: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-anitian-fse-full")}
          initialOpen={false}
        >
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
        </PanelBody>
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
                {show_sub_title && (
                  <RichText
                    tagName="h4"
                    value={sub_title}
                    onChange={(value) => setAttributes({ sub_title: value })}
                    placeholder={__("Enter Sub Title", "md-anitian-fse-full")}
                    style={{
                      color: sub_title_color,
                    }}
                  />
                )}
                {show_title && (
                  <RichText
                    tagName="h2"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__("Enter Title", "md-anitian-fse-full")}
                    style={{ color: title_color }}
                  />
                )}
                {show_heading_content && (
                  <RichText
                    tagName="p"
                    value={heading_content}
                    onChange={(value) =>
                      setAttributes({ heading_content: value })
                    }
                    placeholder={__("Enter Content", "md-anitian-fse-full")}
                    style={{
                      color: heading_content_color,
                    }}
                  />
                )}
                {show_button && (
                  <div className="md_anitian_text_video__btn">
                    <RichText
                      className="btn-anitian md_anitian_text_video__btn"
                      tagName="p"
                      value={button_link}
                      onChange={(value) =>
                        setAttributes({ button_link: value })
                      }
                      placeholder={__(
                        "Enter Button Text",
                        "md-anitian-fse-full"
                      )}
                      style={{ color: button_color }}
                    />
                  </div>
                )}
              </div>
              <div className="md_anitian_text_video__youtube">
                <div className="text_video__youtube">
                  <div className="video_section_wrapper" id="MdYTplayer">
                    <div className="wrapper__box-inner">
                      <div
                        className="video-details-wrapper"
                        style={{ textAlign: "center" }}
                      >
                        <div className="video-data-edit">
                          <SelectControl
                            label={__("Select Video Type", "storyful")}
                            value={videotype}
                            options={[
                              {
                                label: "Media Upload Video",
                                value: "media-upload",
                              },
                              {
                                label: "Youtube Video",
                                value: "youtube",
                              },
                            ]}
                            onChange={(videotype) => {
                              setAttributes({ videotype });
                            }}
                          />
                          {videotype === "youtube" && (
                            <>
                              <TextControl
                                placeholder="Enter youtube video URL"
                                value={youtubeurl}
                                className="video-item-url"
                                onChange={(youtubeurl) => {
                                  setAttributes({ youtubeurl });
                                }}
                              />
                              {youtubeurl && (
                                <iframe
                                  src={
                                    youtubeurl.replace("watch?v=", "embed/") +
                                    "?controls=0"
                                  }
                                  data-src={
                                    youtubeurl + "?enablejsapi=1&controls=0&rel=0"
                                  }
                                  title="video"
                                ></iframe>
                              )}
                            </>
                          )}
                        </div>

                        {videotype === "media-upload" && mediaurl && (
                          <div className="image-preview image-controle-visible-hover">
                            <video
                              autoPlay=""
                              muted=""
                              loop=""
                              className="self-media"
                            >
                              <source src={mediaurl} type="video/mp4" />
                            </video>

                            <div className="item-action-wrap image-controls small-icons icon-center-fixed">
                              <Tooltip text={__("Remove Video")}>
                                <i
                                  className="dashicons dashicons-no-alt remove-image"
                                  role="button"
                                  tabIndex={0}
                                  onClick={() => {
                                    setAttributes({ mediaurl: "" });
                                  }}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      setAttributes({ mediaurl: "" });
                                    }
                                  }}
                                  aria-label="Remove image"
                                ></i>
                              </Tooltip>
                            </div>
                          </div>
                        )}
                        {videotype === "media-upload" && !mediaurl && (
                          <>
                            <MediaUpload
                              onSelect={(newmedia) => {
                                setAttributes({ mediaurl: newmedia.url });
                              }}
                              allowedTypes={["video"]}
                              value={mediaurl}
                              render={({ open }) => (
                                <Button
                                  onClick={open}
                                  className="components-button button button-large"
                                >
                                  <i className="upload"></i> Upload video
                                </Button>
                              )}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
