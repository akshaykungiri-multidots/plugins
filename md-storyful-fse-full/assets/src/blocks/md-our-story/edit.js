/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the server side render element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-server-side-render/
 */
import playBtn from "./playbtn.svg";
import defaultImage from "./placeholder-image.jpg";

/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 */
import {
  useBlockProps,
  InspectorControls,
  PanelColorSettings,
  MediaUpload,
  RichText,
} from "@wordpress/block-editor";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
  PanelBody,
  TextControl,
  Button,
  RadioControl,
  PanelRow
} from "@wordpress/components";

import "./editor.scss";

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
export default function Edit({ attributes, setAttributes, className }) {
  const {
    our_story_title,
    our_story_video_image,
    vidType,
    youtubeLink,
    video,
    our_story_title_font_color,
  } = attributes;
  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
          <RadioControl
            label="Select Video Type"
            options={[
              {
                label: "Upload Video",
                value: "media-upload",
              },
              { label: "Youtube Video", value: "youtube" },
            ]}
            selected={vidType}
            onChange={(vidType) => setAttributes({ vidType })}
          />
          {vidType && vidType === "media-upload" && (
            <>
              {video && (
                <>
                  <video
                    src={video}
                    autoPlay=""
                    muted=""
                    loop=""
                    className="self-media"
                  />
                  <div className="md-prime-block-sidebar">
                    <div className="setting-row">
                      <Button
                        onClick={() => {
                          setAttributes({
                            video: "",
                          });
                        }}
                        className="components-button components-button button button-large"
                      >
                        Remove Video
                      </Button>
                    </div>
                  </div>
                </>
              )}
              {!video && (
                <>
                  <MediaUpload
                    onSelect={(video) =>
                      setAttributes({
                        video: video.url ? video.url : "",
                      })
                    }
                    allowedTypes={["video"]}
                    type="video"
                    value={video}
                    render={({ open }) => (
                      <Button
                        onClick={open}
                        className="components-button button button-large"
                      >
                        Upload Video
                      </Button>
                    )}
                  />
                </>
              )}
            </>
          )}
          {vidType && vidType === "youtube" && (
            <PanelRow>
              <TextControl
                label="Enter youtube video link"
                value={youtubeLink.replace("watch?v=", "embed/")}
                onChange={(youtubeLink) => setAttributes({ youtubeLink })}
              />
            </PanelRow>
          )}
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-storyful-fse-full")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: our_story_title_font_color,
                onChange: (newColor) =>
                  setAttributes({ our_story_title_font_color: newColor }),
                label: __("Our Story Title Font Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="our-story-section">
        <div className="our-story-section__right">
          <div className="media-section">
            <div className="our-story-text-wrapper wow bounceIn">
              <RichText
                tagName="h3"
                className="our-story-title"
                style={{ color: our_story_title_font_color }}
                value={our_story_title}
                onChange={(newText) =>
                  setAttributes({ our_story_title: newText })
                }
                placeholder="Our Story Title"
              />
            </div>
            <div className="media-video-wrapper">
              <div className="media-video md-prime-block-control image-preview image-controle-visible-hover">
                <button className="media-video__playbtn">
                  <img src={playBtn} alt="play" />
                </button>
                <MediaUpload
                  title={__("Feature Image")}
                  onSelect={(media) =>
                    setAttributes({ our_story_video_image: media.url })
                  }
                  multiple={false}
                  render={({ open }) => (
                    <>
                      {our_story_video_image == "" ? (
                        <>
                          { vidType && vidType === "media-upload" ? (
                            <>
                              <video src={video} className="self-media" />
                            </>
                          ) : (
                            <figure>
                              <img
                                src={defaultImage}
                                className="self-media"
                                alt=""
                              />
                            </figure>
                          )}
                          <div className="item-action-wrap image-controls small-icons icon-center-fixed">
                            <Button onClick={open} variant="primary">
                              {__("Upload")}
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="item-action-wrap image-controls small-icons icon-center-fixed">
                            <i
                              onClick={open}
                              className="dashicons dashicons-edit edit-image"
                            ></i>
                            <i
                              onClick={() =>
                                setAttributes({ our_story_video_image: "" })
                              }
                              className="dashicons dashicons-no-alt remove-image"
                            ></i>
                          </div>
                          <figure>
                            <img src={our_story_video_image} className="self-media" />
                          </figure>
                        </>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
