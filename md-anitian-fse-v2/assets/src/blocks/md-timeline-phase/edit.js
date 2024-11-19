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
  MediaUploadCheck,
  MediaUpload,
  PanelColorSettings,
  InspectorControls,
} from "@wordpress/block-editor";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */
import {
  PanelBody,
  ToggleControl,
  Tooltip,
  Button,
} from "@wordpress/components";

import "./editor.scss";

import placeholder from "./placeholder-image.png";

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
export default function Edit({ attributes, setAttributes }) {
  const {
    phaseIcon,
    aheadHeading,
    enableAheadContent,
    aheadContent,
    behindHeading,
    enableBehindContent,
    behindContent,
    enableAheadPhaseImage,
    aheadPhaseImage,
    enableBehindPhaseImage,
    behindPhaseImage,
    aheadHeadingColor,
    aheadContentColor,
    behindHeadingColor,
    behindContentColor,
    aheadPhaseImageBGColor,
    behindPhaseImageBGColor,
  } = attributes;

  const siteURL = window.location.origin;

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-anitian")}>
          <ToggleControl
            label={__("Enable Ahead Phase Image", "md-anitian")}
            checked={enableAheadPhaseImage}
            onChange={(value) =>
              setAttributes({ enableAheadPhaseImage: value })
            }
          />
          <ToggleControl
            label={__("Enable Behind Phase Image", "md-anitian")}
            checked={enableBehindPhaseImage}
            onChange={(value) =>
              setAttributes({ enableBehindPhaseImage: value })
            }
          />
          <ToggleControl
            label={__("Enable Ahead Content", "md-anitian")}
            checked={enableAheadContent}
            onChange={(value) => setAttributes({ enableAheadContent: value })}
          />
          <ToggleControl
            label={__("Enable Behind Content", "md-anitian")}
            checked={enableBehindContent}
            onChange={(value) => setAttributes({ enableBehindContent: value })}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings", "md-anitian")}
            colorSettings={[
              {
                value: aheadHeadingColor,
                onChange: (value) =>
                  setAttributes({ aheadHeadingColor: value }),
                label: __("Ahead Heading Color", "md-anitian"),
              },
              {
                value: aheadContentColor,
                onChange: (value) =>
                  setAttributes({ aheadContentColor: value }),
                label: __("Ahead Content Color", "md-anitian"),
              },
              {
                value: aheadPhaseImageBGColor,
                onChange: (value) =>
                  setAttributes({ aheadPhaseImageBGColor: value }),
                label: __("Ahead Phase Image BG Color", "md-anitian"),
              },
              {
                value: behindHeadingColor,
                onChange: (value) =>
                  setAttributes({ behindHeadingColor: value }),
                label: __("Behind Heading Color", "md-anitian"),
              },
              {
                value: behindContentColor,
                onChange: (value) =>
                  setAttributes({ behindContentColor: value }),
                label: __("Behind Content Color", "md-anitian"),
              },
              {
                value: behindPhaseImageBGColor,
                onChange: (value) =>
                  setAttributes({ behindPhaseImageBGColor: value }),
                label: __("Behind Phase Image BG Color", "md-anitian"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_timeline_phase">
        <div className="md_timeline_phase_block ahead">
          <div className="md_timeline_phase_wrapper">
            <div className="md_timeline_phase_icon">
              <div className="md-prime-block-control image-preview image-controle-visible-hover">
                <div className={`image-controls small-icons icon-center-fixed`}>
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={(media) =>
                        setAttributes({
                          phaseIcon: media.url,
                        })
                      }
                      allowedTypes={["image"]}
                      value={phaseIcon}
                      render={({ open }) => (
                        <>
                          {phaseIcon ? (
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
                                  onClick={() => {
                                    const toDelete =
                                      // eslint-disable-next-line no-alert
                                      confirm(
                                        __(
                                          "Are you sure you want to delete this image?",
                                          "md-prime"
                                        )
                                      );
                                    if (toDelete) {
                                      setAttributes({
                                        phaseIcon: "",
                                      });
                                    }
                                  }}
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      setAttributes({ phaseIcon: "" });
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
                {phaseIcon ? (
                  <img src={phaseIcon} alt={"Slider Icon"} />
                ) : (
                  <img src={siteURL + placeholder} alt={"Slider Icon"} />
                )}
              </div>
            </div>
            <div className="md_timeline_phase_content">
              <div
                className="timeline__phase-card"
                style={
                  enableAheadPhaseImage
                    ? {
                        background: `linear-gradient(90deg, #f7f7f7 75%, ${aheadPhaseImageBGColor} 25%)`,
                      }
                    : {
                        background: "#f7f7f7",
                      }
                }
              >
                <RichText
                  style={{ color: aheadHeadingColor }}
                  tagName="h4"
                  className="heading"
                  name="heading"
                  placeholder={__("Enter Title")}
                  value={aheadHeading}
                  onChange={(value) => setAttributes({ aheadHeading: value })}
                />
                {enableAheadPhaseImage && (
                  <div className="timeline__phase-image">
                    <div className="md-prime-block-control image-preview image-controle-visible-hover">
                      <div
                        className={`image-controls small-icons icon-center-fixed`}
                      >
                        <MediaUploadCheck>
                          <MediaUpload
                            onSelect={(media) =>
                              setAttributes({
                                aheadPhaseImage: media.url,
                              })
                            }
                            allowedTypes={["image"]}
                            value={aheadPhaseImage}
                            render={({ open }) => (
                              <>
                                {aheadPhaseImage ? (
                                  <>
                                    <Tooltip
                                      text={__("Edit Image", "md-prime")}
                                    >
                                      <i
                                        className="dashicons dashicons-edit edit-image"
                                        onClick={open}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                          if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                          ) {
                                            e.preventDefault(); // Prevent default action for space key
                                            open(); // Trigger the click handler
                                          }
                                        }}
                                        aria-label={__(
                                          "Edit image",
                                          "md-prime"
                                        )}
                                      ></i>
                                    </Tooltip>
                                    <Tooltip
                                      text={__("Remove Image", "md-prime")}
                                    >
                                      <i
                                        className="dashicons dashicons-no-alt remove-image"
                                        onClick={() => {
                                          const toDelete =
                                            // eslint-disable-next-line no-alert
                                            confirm(
                                              __(
                                                "Are you sure you want to delete this image?",
                                                "md-prime"
                                              )
                                            );
                                          if (toDelete) {
                                            setAttributes({
                                              aheadPhaseImage: "",
                                            });
                                          }
                                        }}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                          if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                          ) {
                                            e.preventDefault();
                                            setAttributes({
                                              aheadPhaseImage: "",
                                            });
                                          }
                                        }}
                                        aria-label={__(
                                          "Remove image",
                                          "md-prime"
                                        )}
                                      ></i>
                                    </Tooltip>
                                  </>
                                ) : (
                                  <div className="upload-wrap">
                                    <Button
                                      onClick={open}
                                      className="button media_and_text__upload_btn"
                                    >
                                      <Tooltip
                                        text={__("Upload Image", "md-prime")}
                                      >
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
                      {aheadPhaseImage ? (
                        <img src={aheadPhaseImage} alt={"Slider Icon"} />
                      ) : (
                        <img src={siteURL + placeholder} alt={"Slider Icon"} />
                      )}
                    </div>
                  </div>
                )}
              </div>
              {enableAheadContent && (
              <RichText
                style={{ color: aheadContentColor }}
                tagName="p"
                className="content"
                name="content"
                placeholder={__("Enter Paragraph…")}
                value={aheadContent}
                onChange={(value) => setAttributes({ aheadContent: value })}
              />
              )}
            </div>
          </div>
        </div>
        <div className="md_timeline_phase_block behind">
          <div className="md_timeline_phase_wrapper">
            <div className="md_timeline_phase_icon">
              <div className="md_timeline__phase-caution">
                <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
              </div>
            </div>
            <div className="md_timeline_phase_content">
              <div className="timeline__phase-card"
                style={
                  enableBehindPhaseImage
                    ? {
                        background: `linear-gradient(270deg, #f7f7f7 75%, ${behindPhaseImageBGColor} 25%)`,
                      }
                    : {
                        background: "#f7f7f7",
                      }
                }
              >
                <RichText
                  style={{
                    color: behindHeadingColor,
                  }}
                  tagName="h4"
                  className="heading"
                  name="behindHeading"
                  placeholder={__("Enter Title")}
                  value={behindHeading}
                  onChange={(value) => setAttributes({ behindHeading: value })}
                />
                {enableBehindPhaseImage && (
                  <div className="timeline__phase-image">
                    <div className="md-prime-block-control image-preview image-controle-visible-hover">
                      <div
                        className={`image-controls small-icons icon-center-fixed`}
                      >
                        <MediaUploadCheck>
                          <MediaUpload
                            onSelect={(media) =>
                              setAttributes({
                                behindPhaseImage: media.url,
                              })
                            }
                            allowedTypes={["image"]}
                            value={behindPhaseImage}
                            render={({ open }) => (
                              <>
                                {behindPhaseImage ? (
                                  <>
                                    <Tooltip
                                      text={__("Edit Image", "md-prime")}
                                    >
                                      <i
                                        className="dashicons dashicons-edit edit-image"
                                        onClick={open}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                          if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                          ) {
                                            e.preventDefault(); // Prevent default action for space key
                                            open(); // Trigger the click handler
                                          }
                                        }}
                                        aria-label={__(
                                          "Edit image",
                                          "md-prime"
                                        )}
                                      ></i>
                                    </Tooltip>
                                    <Tooltip
                                      text={__("Remove Image", "md-prime")}
                                    >
                                      <i
                                        className="dashicons dashicons-no-alt remove-image"
                                        onClick={() => {
                                          const toDelete =
                                            // eslint-disable-next-line no-alert
                                            confirm(
                                              __(
                                                "Are you sure you want to delete this image?",
                                                "md-prime"
                                              )
                                            );
                                          if (toDelete) {
                                            setAttributes({
                                              behindPhaseImage: "",
                                            });
                                          }
                                        }}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                          if (
                                            e.key === "Enter" ||
                                            e.key === " "
                                          ) {
                                            e.preventDefault();
                                            setAttributes({
                                              behindPhaseImage: "",
                                            });
                                          }
                                        }}
                                        aria-label={__(
                                          "Remove image",
                                          "md-prime"
                                        )}
                                      ></i>
                                    </Tooltip>
                                  </>
                                ) : (
                                  <div className="upload-wrap">
                                    <Button
                                      onClick={open}
                                      className="button media_and_text__upload_btn"
                                    >
                                      <Tooltip
                                        text={__("Upload Image", "md-prime")}
                                      >
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
                      {behindPhaseImage ? (
                        <img src={behindPhaseImage} alt={"Slider Icon"} />
                      ) : (
                        <img src={siteURL + placeholder} alt={"Slider Icon"} />
                      )}
                    </div>
                  </div>
                )}
              </div>
              {enableBehindContent && (
              <RichText
                style={{
                  color: behindContentColor,
                }}
                tagName="p"
                className="content"
                name="behindContent"
                placeholder={__("Enter Paragraph…")}
                value={behindContent}
                onChange={(value) => setAttributes({ behindContent: value })}
              />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
