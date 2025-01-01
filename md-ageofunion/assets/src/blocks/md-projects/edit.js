/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 */
import {
  useBlockProps,
  RichText,
  InspectorControls,
  MediaUpload,
  PanelColorSettings,
} from "@wordpress/block-editor";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
  PanelBody,
  Button,
  ToggleControl,
  SelectControl,
  TextControl,
  Tooltip,
  RangeControl,
} from "@wordpress/components";

/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { WPElement, Fragment, useState, useEffect } from "@wordpress/element";

import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object}   root0                    - The root object.
 * @param {Object}   root0.attributes         - The attributes of the root object.
 * @param {string}   root0.attributes.heading - The heading attribute of the block.
 * @param {Function} root0.setAttributes      - Function to set the attributes.
 * @param {string}   root0.className          - The class name.
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const {
    heading,
    enableBackgroundVideo,
    mediaurl,
    youtubeurl,
    videotype,
    projectHeading,
    numberOfProjects,
    showHeading,
    showProjectHeading,
    headingColor,
    projectHeadingColor,
    showProjectFeatureImage,
    showProjectRegion,
    showViewMoreButton,
    viewMoreButtonText,
    projectTitleColor,
    projectRegionColor,
    viewMoreButtonColor,
    viewMoreButtonBackgroundColor,
    viewMoreButtonHoverColor,
    viewMoreButtonHoverBackgroundColor,
  } = attributes;

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`/wp-json/wp/v2/projects?per_page=${numberOfProjects}`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, [numberOfProjects]);

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-ageofunion")}>
          <ToggleControl
            label={__("Show Heading", "md-ageofunion")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Project Heading", "md-ageofunion")}
            checked={showProjectHeading}
            onChange={(value) => setAttributes({ showProjectHeading: value })}
          />
          <ToggleControl
            label={__("Show Project Feature Image", "md-ageofunion")}
            checked={showProjectFeatureImage}
            onChange={(value) =>
              setAttributes({ showProjectFeatureImage: value })
            }
          />
          <ToggleControl
            label={__("Show Project Region", "md-ageofunion")}
            checked={showProjectRegion}
            onChange={(value) => setAttributes({ showProjectRegion: value })}
          />
          <ToggleControl
            label={__("Show View More Button", "md-ageofunion")}
            checked={showViewMoreButton}
            onChange={(value) => setAttributes({ showViewMoreButton: value })}
          />
          <RangeControl
            label={__("Number of Projects", "md-ageofunion")}
            value={numberOfProjects}
            onChange={(value) => setAttributes({ numberOfProjects: value })}
            min={1}
            max={100}
          />
        </PanelBody>
        <PanelBody
          title={__("Video Settings", "md-ageofunion")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Enable Background Video", "md-ageofunion")}
            checked={enableBackgroundVideo}
            onChange={(value) =>
              setAttributes({ enableBackgroundVideo: value })
            }
          />
          {enableBackgroundVideo && (
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
                              <i className="upload"></i> {__("Upload Video")}
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
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-ageofunion")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Color Settings", "md-ageofunion")}
            colorSettings={[
              {
                value: headingColor,
                onChange: (value) => setAttributes({ headingColor: value }),
                label: __("Heading Color", "md-ageofunion"),
              },
              {
                value: projectHeadingColor,
                onChange: (value) =>
                  setAttributes({ projectHeadingColor: value }),
                label: __("Project Heading Color", "md-ageofunion"),
              },
              {
                value: projectTitleColor,
                onChange: (value) =>
                  setAttributes({ projectTitleColor: value }),
                label: __("Project Title Color", "md-ageofunion"),
              },
              {
                value: projectRegionColor,
                onChange: (value) =>
                  setAttributes({ projectRegionColor: value }),
                label: __("Project Region Color", "md-ageofunion"),
              },
              {
                value: viewMoreButtonColor,
                onChange: (value) =>
                  setAttributes({ viewMoreButtonColor: value }),
                label: __("View More Button Color", "md-ageofunion"),
              },
              {
                value: viewMoreButtonBackgroundColor,
                onChange: (value) =>
                  setAttributes({ viewMoreButtonBackgroundColor: value }),
                label: __("View More Button Background Color", "md-ageofunion"),
              },
              {
                value: viewMoreButtonHoverColor,
                onChange: (value) =>
                  setAttributes({ viewMoreButtonHoverColor: value }),
                label: __("View More Button Hover Color", "md-ageofunion"),
              },
              {
                value: viewMoreButtonHoverBackgroundColor,
                onChange: (value) =>
                  setAttributes({ viewMoreButtonHoverBackgroundColor: value }),
                label: __(
                  "View More Button Hover Background Color",
                  "md-ageofunion"
                ),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <style>
        {`
        .md_projects__listing__button span {
          color: ${viewMoreButtonColor};
          background-color: ${viewMoreButtonBackgroundColor};
        }
        .md_projects__listing__button span:hover {
          color: ${viewMoreButtonHoverColor} !important;
          background-color: ${viewMoreButtonHoverBackgroundColor} !important;
        }
      `}
      </style>
      <div className="md_projects">
        <section>
          <figure className="md_projects__video_box">
            {enableBackgroundVideo && (
              <div className="text_video__youtube">
                <div className="video_section_wrapper" id="MdYTplayer">
                  <div className="wrapper__box-inner">
                    <div
                      className="video-details-wrapper"
                      style={{ textAlign: "center" }}
                    >
                      <div className="video-data-edit">
                        {videotype === "youtube" && (
                          <>
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
                            autoPlay
                          >
                            <source src={mediaurl} type="video/mp4" />
                          </video>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showHeading && (
              <RichText
                tagName="h2"
                placeholder={__("Add Heading", "md-ageofunion")}
                className="md_projects__video_heading"
                value={heading}
                onChange={(value) => setAttributes({ heading: value })}
                style={{ color: headingColor }}
              />
            )}
          </figure>
        </section>
        <section>
          <div className="md_projects__listing container">
            {showProjectHeading && (
              <RichText
                tagName="h2"
                placeholder={__("Add Project Heading", "md-ageofunion")}
                className="md_projects__project_heading"
                value={projectHeading}
                onChange={(value) => setAttributes({ projectHeading: value })}
                style={{ color: projectHeadingColor }}
              />
            )}
            <div className="md_projects__listing__grid">
              <div className="md_projects__listing__grid__item -no-border">
                <div className="md_projects__listing__grid__item__tile md_projects__listing__grid__item__tile__heading">
                  <div className="md_projects__listing__grid__header">
                    {__("Name", "md-ageofunion")}
                  </div>
                  {showProjectRegion && (
                    <div className="md_projects__listing__grid__header">
                      {__("Region", "md-ageofunion")}
                    </div>
                  )}
                  <div className="md_projects__listing__grid__header"></div>
                </div>
              </div>
              {projects.map((project) => (
                <div
                  className="md_projects__listing__grid__item"
                  key={project.id}
                >
                  <div className="md_projects__listing__grid__item__tile">
                    <h2
                      className="md_projects__listing__grid__item__tile__title"
                      style={{ color: projectTitleColor }}
                    >
                      {project.title.rendered}
                    </h2>
                    {showProjectFeatureImage && project.featured_image_url && (
                      <figure className="md_projects__listing__grid__item__tile__image">
                        <div className="md_projects__listing__grid__item__tile__image__lazy">
                          <img
                            src={project.featured_image_url}
                            alt={project.title.rendered}
                          />
                        </div>
                      </figure>
                    )}
                    {showProjectRegion && project.region && (
                      <div className="md_projects__listing__grid__item__tile__region">
                        {project.regions.join(", ")}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {showViewMoreButton && (
              <div className="md_projects__listing__button">
                <RichText
                  tagName="span"
                  placeholder={__("View More", "md-ageofunion")}
                  className="md_projects__listing__button__text"
                  value={viewMoreButtonText}
                  onChange={(value) => setAttributes({ viewMoreButtonText: value })}
                  style={{ color: viewMoreButtonColor, backgroundColor: viewMoreButtonBackgroundColor }}
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
