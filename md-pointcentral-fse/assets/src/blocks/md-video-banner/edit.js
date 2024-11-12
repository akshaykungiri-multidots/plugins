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

import {
  PanelBody,
  SelectControl,
  TextControl,
  Tooltip,
  Button,
  ToggleControl,
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
    heading,
    subheading,
    contentText,
    overlayColor,
    buttonText,
    mediaurl,
    youtubeurl,
    videotype,
    headingColor,
    subheadingColor,
    contentColor,
    buttonColor,
    showSubheading,
    showHeading,
    showContent,
    showButton,
  } = attributes;
  return (
    <div {...useBlockProps({ className: "md_video_banner" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-pointcentral-fse")}>
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
                      onChange={(value) => {
                        setAttributes({ videotype: value });
                      }}
                    />
                    {videotype === "youtube" && (
                      <>
                        <TextControl
                          placeholder="Enter youtube video URL"
                          value={youtubeurl}
                          className="video-item-url"
                          onChange={(value) => {
                            setAttributes({ youtubeurl: value });
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
        </PanelBody>
        <PanelBody
          title={__("Toggle Settings", "md-pointcentral-fse-full")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Subheading", "md-pointcentral-fse-full")}
            checked={showSubheading}
            onChange={(value) => setAttributes({ showSubheading: value })}
          />
          <ToggleControl
            label={__("Show Heading", "md-pointcentral-fse-full")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Content", "md-pointcentral-fse-full")}
            checked={showContent}
            onChange={(value) => setAttributes({ showContent: value })}
          />
          <ToggleControl
            label={__("Show Button", "md-pointcentral-fse-full")}
            checked={showButton}
            onChange={(value) => setAttributes({ showButton: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-pointcentral-fse-full")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-pointcentral-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: headingColor,
                onChange: (newColor) => {
                  setAttributes({ headingColor: newColor });
                },
                label: __("Heading Color", "md-pointcentral-fse-full"),
              },
              {
                value: subheadingColor,
                onChange: (newColor) => {
                  setAttributes({ subheadingColor: newColor });
                },
                label: __("Subheading Color", "md-pointcentral-fse-full"),
              },
              {
                value: contentColor,
                onChange: (newColor) => {
                  setAttributes({ contentColor: newColor });
                },
                label: __("Content Color", "md-pointcentral-fse-full"),
              },
              {
                value: buttonColor,
                onChange: (newColor) => {
                  setAttributes({ buttonColor: newColor });
                },
                label: __("Button Color", "md-pointcentral-fse-full"),
              },
              {
                value: overlayColor,
                onChange: (newColor) => {
                  setAttributes({ overlayColor: newColor });
                },
                label: __("Overlay Color", "md-pointcentral-fse-full"),
              }
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="pointcentral-video-banner">
        <div className="pointcentral-video-banner__video">
          <div className="pointcentral-video-banner__video__inner">
            {videotype === "youtube" && youtubeurl && (
              <iframe
                src={youtubeurl.replace("watch?v=", "embed/") + "?controls=0"}
                data-src={youtubeurl + "?enablejsapi=1&controls=0&rel=0"}
                title="video"
              ></iframe>
            )}
            {videotype === "media-upload" && mediaurl && (
              <video autoPlay="" muted="" loop="" className="self-media">
                <source src={mediaurl} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
        <div
          className="pointcentral-video-banner__overlay"
          style={{ backgroundColor: overlayColor }}
        ></div>
        <div className="container">
          <div className="pointcentral-video-banner__content">
            {showSubheading && (
              <RichText
                tagName="h3"
                className="pointcentral-video-banner__sub-title"
                style={{ color: subheadingColor }}
                value={subheading}
                onChange={(value) => setAttributes({ subheading: value })}
                placeholder={__("Add Subheading")}
              />
            )}
            {showHeading && (
              <RichText
                tagName="h2"
                className="pointcentral-video-banner__title"
                style={{ color: headingColor }}
                value={heading}
                onChange={(value) => setAttributes({ heading: value })}
                placeholder={__("Add Heading")}
              />
            )}
            {showContent && (
              <RichText
                tagName="p"
                className="pointcentral-video-banner__description"
                style={{ color: contentColor }}
                value={contentText}
                onChange={(value) => setAttributes({ contentText: value })}
                placeholder={__("Add Description")}
              />
            )}
            {showButton && (
              <div className="pointcentral-video-banner__button">
                <RichText
                  tagName="p"
                  className="pointcentral-video-banner__button"
                  style={{ color: buttonColor }}
                  value={buttonText}
                  onChange={(value) => setAttributes({ buttonText: value })}
                  placeholder={__("Add Button Text")}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
