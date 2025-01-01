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
  MediaUploadCheck,
  PanelColorSettings,
} from "@wordpress/block-editor";

import {
  Fragment,
  WPElement,
} from "@wordpress/element";

import {
  PanelBody,
  Button,
  ToggleControl,
  SelectControl,
  TextControl,
  Tooltip,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */

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
    ctaLabel,
    mediaurl,
    youtubeurl,
    videotype,
    enablePosterVideo,
    posterMediaUrl,
    posterYoutubeUrl,
    posterVideoType,
    ctaProjectImage,
    ctaProjectContent,
    ctaProjectSmallText,
    ctaProjectButtonText,
    showHeading,
    showCtaLabel,
    showVideo,
    showCtaProjectImage,
    showCtaProjectContent,
    showCtaProjectSmallText,
    showCtaProjectButtonText,
    headingColor,
    ctaLabelColor,
    ctaProjectContentColor,
    ctaProjectSmallTextColor,
    ctaProjectButtonTextColor,
    ctaProjectButtonBackgroundColor,
    ctaProjectButtonHoverTextColor,
    ctaProjectButtonHoverBackgroundColor,
  } = attributes;

  const siteURL = window.location.origin;

  return (
    <div {...useBlockProps({ className: "md_manifesto_section" })}>
      <InspectorControls>
        <PanelBody title={__("Manifesto Settings")} initialOpen={true}>
          <ToggleControl
            label={__("Show Heading")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show CTA Label")}
            checked={showCtaLabel}
            onChange={(value) => setAttributes({ showCtaLabel: value })}
          />
          <ToggleControl
            label={__("Show CTA Project Image")}
            checked={showCtaProjectImage}
            onChange={(value) => setAttributes({ showCtaProjectImage: value })}
          />
          <ToggleControl
            label={__("Show CTA Project Content")}
            checked={showCtaProjectContent}
            onChange={(value) =>
              setAttributes({ showCtaProjectContent: value })
            }
          />
          <ToggleControl
            label={__("Show CTA Project Small Text")}
            checked={showCtaProjectSmallText}
            onChange={(value) =>
              setAttributes({ showCtaProjectSmallText: value })
            }
          />
          <ToggleControl
            label={__("Show CTA Project Button Text")}
            checked={showCtaProjectButtonText}
            onChange={(value) =>
              setAttributes({ showCtaProjectButtonText: value })
            }
          />
        </PanelBody>
        <PanelBody title={__("Video Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Show Video")}
            checked={showVideo}
            onChange={(value) => setAttributes({ showVideo: value })}
          />
          {showVideo && (
            <div className="text_video__youtube_section">
              <div className="text_video__youtube">
                <div className="video_section_wrapper" id="MdYTplayer">
                  <div className="wrapper__box-inner">
                    <div
                      className="video-details-wrapper"
                      style={{ textAlign: "left" }}
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
                            muted=""
                            loop=""
                            className="self-media"
                            id="video"
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
              <ToggleControl
                label={__("Enable Poster Video")}
                checked={enablePosterVideo}
                onChange={(value) =>
                  setAttributes({ enablePosterVideo: value })
                }
              />
              {enablePosterVideo && (
                <div className="text_video__youtube">
                  <div className="video_section_wrapper" id="MdYTplayer">
                    <div className="wrapper__box-inner">
                      <div
                        className="video-details-wrapper"
                        style={{ textAlign: "left" }}
                      >
                        <div className="video-data-edit">
                          <SelectControl
                            label={__("Select Poster Video Type", "storyful")}
                            value={posterVideoType}
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
                              setAttributes({ posterVideoType: value });
                            }}
                          />
                          {posterVideoType === "youtube" && (
                            <>
                              <TextControl
                                placeholder="Enter youtube video URL"
                                value={posterYoutubeUrl}
                                className="video-item-url"
                                onChange={(value) => {
                                  setAttributes({ posterYoutubeUrl: value });
                                }}
                              />
                              {posterYoutubeUrl && (
                                <iframe
                                  src={
                                    posterYoutubeUrl.replace(
                                      "watch?v=",
                                      "embed/"
                                    ) + "?controls=0"
                                  }
                                  data-src={
                                    posterYoutubeUrl +
                                    "?enablejsapi=1&controls=0&rel=0"
                                  }
                                  title="video"
                                ></iframe>
                              )}
                            </>
                          )}
                        </div>

                        {posterVideoType === "media-upload" &&
                          posterMediaUrl && (
                            <div className="image-preview image-controle-visible-hover">
                              <video
                                muted=""
                                loop=""
                                className="self-media"
                                id="video"
                              >
                                <source src={posterMediaUrl} type="video/mp4" />
                              </video>
                              <div className="item-action-wrap image-controls small-icons icon-center-fixed">
                                <Tooltip text={__("Remove Video")}>
                                  <i
                                    className="dashicons dashicons-no-alt remove-image"
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => {
                                      setAttributes({ posterMediaUrl: "" });
                                    }}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setAttributes({ posterMediaUrl: "" });
                                      }
                                    }}
                                    aria-label="Remove image"
                                  ></i>
                                </Tooltip>
                              </div>
                            </div>
                          )}
                        {posterVideoType === "media-upload" &&
                          !posterMediaUrl && (
                            <>
                              <MediaUpload
                                onSelect={(newmedia) => {
                                  setAttributes({
                                    posterMediaUrl: newmedia.url,
                                  });
                                }}
                                allowedTypes={["video"]}
                                value={posterMediaUrl}
                                render={({ open }) => (
                                  <Button
                                    onClick={open}
                                    className="components-button button button-large"
                                  >
                                    <i className="upload"></i>{" "}
                                    {__("Upload Video")}
                                  </Button>
                                )}
                              />
                            </>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: headingColor,
                onChange: (value) => setAttributes({ headingColor: value }),
                label: __("Heading Color"),
              },
              {
                value: ctaLabelColor,
                onChange: (value) => setAttributes({ ctaLabelColor: value }),
                label: __("CTA Label Color"),
              },
              {
                value: ctaProjectContentColor,
                onChange: (value) =>
                  setAttributes({ ctaProjectContentColor: value }),
                label: __("CTA Project Content Color"),
              },
              {
                value: ctaProjectSmallTextColor,
                onChange: (value) =>
                  setAttributes({ ctaProjectSmallTextColor: value }),
                label: __("CTA Project Small Text Color"),
              },
              {
                value: ctaProjectButtonTextColor,
                onChange: (value) =>
                  setAttributes({ ctaProjectButtonTextColor: value }),
                label: __("CTA Project Button Text Color"),
              },
              {
                value: ctaProjectButtonBackgroundColor,
                onChange: (value) =>
                  setAttributes({ ctaProjectButtonBackgroundColor: value }),
                label: __("CTA Project Button Background Color"),
              },
              {
                value: ctaProjectButtonHoverTextColor,
                onChange: (value) =>
                  setAttributes({ ctaProjectButtonHoverTextColor: value }),
                label: __("CTA Project Button Hover Text Color"),
              },
              {
                value: ctaProjectButtonHoverBackgroundColor,
                onChange: (value) =>
                  setAttributes({
                    ctaProjectButtonHoverBackgroundColor: value,
                  }),
                label: __("CTA Project Button Hover Background Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <style>
        {`
        .md_manifesto__cta_project_text__button span {
          color: ${ctaProjectButtonTextColor};
          background-color: ${ctaProjectButtonBackgroundColor};
        }
        .md_manifesto__cta_project_text__button span:hover {
          color: ${ctaProjectButtonHoverTextColor} !important;
          background-color: ${ctaProjectButtonHoverBackgroundColor} !important;
        }
      `}
      </style>
      <div className="md_manifesto__inner">
        {showVideo && (
          <div className="md_manifesto__video_item">
            <figure className="md_manifesto__video_item__figure">
              <a
                className="md_manifesto__video_item__figure__box__video"
                href={videotype === "youtube" ? youtubeurl : mediaurl}
                data-fancybox="video"
              >
                <span className="md_manifesto__video_item__figure__box__video__rendered_text">
                  {__("Play Video", "md-ageofunion")}
                </span>
                <span className="md_manifesto__video_item__figure__box__video__button">
                  <span className="md_manifesto__video_item__figure__box__video__button__circle"></span>
                </span>
              </a>
              {enablePosterVideo && (
                <div className="text_video__youtube">
                  <div className="video_section_wrapper" id="MdYTplayer">
                    <div className="wrapper__box-inner">
                      <div
                        className="video-details-wrapper"
                        style={{ textAlign: "center" }}
                      >
                        <div className="video-data-edit">
                          {posterVideoType === "youtube" && (
                            <>
                              {posterYoutubeUrl && (
                                <iframe
                                  src={
                                    posterYoutubeUrl.replace(
                                      "watch?v=",
                                      "embed/"
                                    ) + "?controls=0"
                                  }
                                  data-src={
                                    posterYoutubeUrl +
                                    "?enablejsapi=1&controls=0&rel=0"
                                  }
                                  title="video"
                                ></iframe>
                              )}
                            </>
                          )}
                        </div>
                        {posterVideoType === "media-upload" &&
                          posterMediaUrl && (
                            <div className="image-preview image-controle-visible-hover">
                              <video
                                muted=""
                                loop=""
                                className="self-media"
                                id="video"
                                controls
                                autoPlay
                              >
                                <source src={posterMediaUrl} type="video/mp4" />
                              </video>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </figure>
          </div>
        )}
        <div className="md_manifesto__cta_project_intro">
          <div className="md_manifesto__cta_project_intro__inner">
            <RichText
              tagName="div"
              className="md_manifesto__cta_project_intro__cta_label"
              value={ctaLabel}
              placeholder={__("CTA Label", "md-ageofunion")}
              onChange={(value) => setAttributes({ ctaLabel: value })}
              style={{ color: ctaLabelColor }}
            />
            <RichText
              tagName="h2"
              className="md_manifesto__cta_project_intro__heading"
              value={heading}
              placeholder={__("Heading", "md-ageofunion")}
              onChange={(value) => setAttributes({ heading: value })}
              style={{ color: headingColor }}
            />
          </div>
        </div>
        <div className="md_manifesto__cta_project_grid">
          {showCtaProjectImage && (
            <div className="md-prime-block-control image-preview image-controle-visible-hover md_manifesto__cta_project_image">
              <div className={`image-controls small-icons icon-center-fixed`}>
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={(media) =>
                      setAttributes({ ctaProjectImage: media.url })
                    }
                    allowedTypes={["image"]}
                    value={ctaProjectImage}
                    render={({ open }) => (
                      <>
                        {ctaProjectImage ? (
                          <>
                            <Tooltip text={__("Edit Image", "md-prime")}>
                              <i
                                className="dashicons dashicons-edit edit-image"
                                onClick={open}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault(); // Prevent default action for space key
                                    open(); // Trigger the click handler
                                  }
                                }}
                                aria-label={__("Edit image", "md-prime")}
                              ></i>
                            </Tooltip>
                            <Tooltip text={__("Remove Image", "md-prime")}>
                              <i
                                className="dashicons dashicons-no-alt remove-image"
                                onClick={() =>
                                  setAttributes({ ctaProjectImage: "" })
                                }
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setAttributes({ ctaProjectImage: "" });
                                  }
                                }}
                                aria-label={__("Remove image", "md-prime")}
                              ></i>
                            </Tooltip>
                          </>
                        ) : (
                          <div className="upload-wrap">
                            <Button
                              onClick={open}
                              className="button media_and_text__upload_btn"
                            >
                              <Tooltip text={__("Upload Image", "md-prime")}>
                                <i className="dashicons dashicons-upload"></i>
                              </Tooltip>
                            </Button>
                          </div>
                        )}
                      </>
                    )}
                  />
                </MediaUploadCheck>
              </div>
              <img
                src={ctaProjectImage ? ctaProjectImage : siteURL + placeholder}
                alt={"slider"}
              />
            </div>
          )}
          {showCtaProjectContent && (
            <div className="md_manifesto__cta_project_content">
              <RichText
                tagName="div"
                className="md_manifesto__cta_project_content__text"
                value={ctaProjectContent}
                placeholder={__("CTA Project Content", "md-ageofunion")}
                onChange={(value) =>
                  setAttributes({ ctaProjectContent: value })
                }
                style={{ color: ctaProjectContentColor }}
              />
            </div>
          )}
          <div className="md_manifesto__cta_project_text">
            {showCtaProjectSmallText && (
              <RichText
                tagName="div"
                className="md_manifesto__cta_project_text__small_text"
                value={ctaProjectSmallText}
                placeholder={__("CTA Project Small Text", "md-ageofunion")}
                onChange={(value) =>
                  setAttributes({ ctaProjectSmallText: value })
                }
                style={{ color: ctaProjectSmallTextColor }}
              />
            )}
            {showCtaProjectButtonText && (
              <div className="md_manifesto__cta_project_text__button">
                <RichText
                  tagName="span"
                  value={ctaProjectButtonText}
                  placeholder={__("CTA Project Button Text", "md-ageofunion")}
                  onChange={(value) =>
                    setAttributes({ ctaProjectButtonText: value })
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
