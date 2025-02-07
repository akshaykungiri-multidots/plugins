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

/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { WPElement } from "@wordpress/element";

import placeholder from "./placeholder-image.png";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
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
    subHeading,
    mediaImage,
    mediaImage1,
    mediaContent,
    ourApproachHeading,
    ourApproachContent,
    ourMissionHeading,
    ourMissionContent,
    showHeading,
    showSubHeading,
    showMediaContent,
    showOurApproach,
    showOurMission,
    showMediaImage,
    showMediaImage1,
    headingColor,
    subHeadingColor,
    mediaContentColor,
    ourApproachHeadingColor,
    ourApproachContentColor,
    ourMissionHeadingColor,
    ourMissionContentColor,
  } = attributes;

  const siteURL = window.location.origin;

  return (
    <div {...useBlockProps({ className: "md_mission_block" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-pofo")}>
          <ToggleControl
            label={__("Show Heading", "md-pofo")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Sub Heading", "md-pofo")}
            checked={showSubHeading}
            onChange={(value) => setAttributes({ showSubHeading: value })}
          />
          <ToggleControl
            label={__("Show Media Content", "md-pofo")}
            checked={showMediaContent}
            onChange={(value) => setAttributes({ showMediaContent: value })}
          />
          <ToggleControl
            label={__("Show Our Approach", "md-pofo")}
            checked={showOurApproach}
            onChange={(value) => setAttributes({ showOurApproach: value })}
          />
          <ToggleControl
            label={__("Show Our Mission", "md-pofo")}
            checked={showOurMission}
            onChange={(value) => setAttributes({ showOurMission: value })}
          />
          <ToggleControl
            label={__("Show Media Image", "md-pofo")}
            checked={showMediaImage}
            onChange={(value) => setAttributes({ showMediaImage: value })}
          />
          <ToggleControl
            label={__("Show Media Image 1", "md-pofo")}
            checked={showMediaImage1}
            onChange={(value) => setAttributes({ showMediaImage1: value })}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-pofo")} initialOpen={false}>
          <PanelColorSettings
            title={__("Typography Colors", "md-pofo")}
            initialOpen={false}
            colorSettings={[
              {
                value: headingColor,
                onChange: (value) => setAttributes({ headingColor: value }),
                label: __("Heading Color", "md-pofo"),
              },
              {
                value: subHeadingColor,
                onChange: (value) => setAttributes({ subHeadingColor: value }),
                label: __("Sub Heading Color", "md-pofo"),
              },
              {
                value: mediaContentColor,
                onChange: (value) =>
                  setAttributes({ mediaContentColor: value }),
                label: __("Media Content Color", "md-pofo"),
              },
              {
                value: ourApproachHeadingColor,
                onChange: (value) =>
                  setAttributes({ ourApproachHeadingColor: value }),
                label: __("Our Approach Heading Color", "md-pofo"),
              },
              {
                value: ourApproachContentColor,
                onChange: (value) =>
                  setAttributes({ ourApproachContentColor: value }),
                label: __("Our Approach Content Color", "md-pofo"),
              },
              {
                value: ourMissionHeadingColor,
                onChange: (value) =>
                  setAttributes({ ourMissionHeadingColor: value }),
                label: __("Our Mission Heading Color", "md-pofo"),
              },
              {
                value: ourMissionContentColor,
                onChange: (value) =>
                  setAttributes({ ourMissionContentColor: value }),
                label: __("Our Mission Content Color", "md-pofo"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_mission_block__heading">
        {showSubHeading && (
          <RichText
            tagName="p"
            value={subHeading}
            onChange={(value) => setAttributes({ subHeading: value })}
            placeholder={__("Sub Heading", "md-pofo")}
            style={{ color: subHeadingColor }}
          />
        )}
        {showHeading && (
          <RichText
            tagName="h2"
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
            placeholder={__("Heading", "md-pofo")}
            style={{ color: headingColor }}
          />
        )}
      </div>
      <div className="md_mission_block__media">
        {showMediaImage && (
          <div className="md-prime-block-control md_media_image image-preview image-controle-visible-hover">
            <div className={`image-controls small-icons icon-center-fixed`}>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => setAttributes({ mediaImage: media.url })}
                  allowedTypes={["image"]}
                  value={mediaImage}
                  render={({ open }) => (
                    <>
                      {mediaImage ? (
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
                              onClick={() => setAttributes({ mediaImage: "" })}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  setAttributes({ mediaImage: "" });
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
              src={mediaImage || siteURL + placeholder}
              alt={__("Media Image", "md-pofo")}
            />
          </div>
        )}
        {showMediaImage1 && (
          <div className="md-prime-block-control md_media_image1 image-preview image-controle-visible-hover">
            <div className={`image-controls small-icons icon-center-fixed`}>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={(media) => setAttributes({ mediaImage1: media.url })}
                  allowedTypes={["image"]}
                  value={mediaImage1}
                  render={({ open }) => (
                    <>
                      {mediaImage1 ? (
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
                              onClick={() => setAttributes({ mediaImage1: "" })}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  setAttributes({ mediaImage1: "" });
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
              src={mediaImage1 || siteURL + placeholder}
              alt={__("Media Image", "md-pofo")}
            />
          </div>
        )}
      </div>
      <div className="md_mission_block__content">
        {showMediaContent && (
          <div className="md_mission_block__media_content">
            <RichText
              tagName="div"
              value={mediaContent}
              onChange={(value) => setAttributes({ mediaContent: value })}
              placeholder={__("Media Content", "md-pofo")}
              style={{ color: mediaContentColor }}
            />
          </div>
        )}
        {showOurApproach && (
          <div className="md_mission_block__our_approach">
            <RichText
              tagName="h3"
              value={ourApproachHeading}
              onChange={(value) => setAttributes({ ourApproachHeading: value })}
              placeholder={__("Our Approach Heading", "md-pofo")}
              style={{ color: ourApproachHeadingColor }}
            />
            <RichText
              tagName="div"
              value={ourApproachContent}
              onChange={(value) => setAttributes({ ourApproachContent: value })}
              placeholder={__("Our Approach Content", "md-pofo")}
              style={{ color: ourApproachContentColor }}
            />
          </div>
        )}
        {showOurMission && (
          <div className="md_mission_block__our_mission">
            <RichText
              tagName="h3"
              value={ourMissionHeading}
              onChange={(value) => setAttributes({ ourMissionHeading: value })}
              placeholder={__("Our Mission Heading", "md-pofo")}
              style={{ color: ourMissionHeadingColor }}
            />
            <RichText
              tagName="div"
              value={ourMissionContent}
              onChange={(value) => setAttributes({ ourMissionContent: value })}
              placeholder={__("Our Mission Content", "md-pofo")}
              style={{ color: ourMissionContentColor }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
