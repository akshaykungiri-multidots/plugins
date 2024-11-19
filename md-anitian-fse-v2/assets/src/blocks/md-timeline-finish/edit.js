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
    timelineFinishIcon,
    heading,
    content,
    headingColor,
    contentColor,
    enableContent,
    enableBottomLine,
  } = attributes;

  const siteURL = window.location.origin;

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Block Settings")} initialOpen={true}>
          <ToggleControl
            label={__("Enable Content")}
            checked={enableContent}
            onChange={(value) => setAttributes({ enableContent: value })}
          />
          <ToggleControl
            label={__("Enable Bottom Line")}
            checked={enableBottomLine}
            onChange={(value) => setAttributes({ enableBottomLine: value })}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: headingColor,
                onChange: (newColor) =>
                  setAttributes({ headingColor: newColor }),
                label: __("Heading Color"),
              },
              {
                value: contentColor,
                onChange: (newColor) =>
                  setAttributes({ contentColor: newColor }),
                label: __("Content Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_timeline_finish">
        <div className="md_timeline_finish_block ahead">
          <div className="md_timeline_finish_wrapper">
            <div className="md_timeline_finish_icon">
              <div className="md-prime-block-control image-preview image-controle-visible-hover">
                <div className={`image-controls small-icons icon-center-fixed`}>
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={(media) =>
                        setAttributes({
                          timelineFinishIcon: media.url,
                        })
                      }
                      allowedTypes={["image"]}
                      value={timelineFinishIcon}
                      render={({ open }) => (
                        <>
                          {timelineFinishIcon ? (
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
                                        timelineFinishIcon: "",
                                      });
                                    }
                                  }}
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      setAttributes({ timelineFinishIcon: "" });
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
                {timelineFinishIcon ? (
                  <img src={timelineFinishIcon} alt={"Slider Icon"} />
                ) : (
                  <img src={siteURL + placeholder} alt={"Slider Icon"} />
                )}
              </div>
            </div>
            <div className="md_timeline_finish_content">
              <div className={`timeline__finish-card ${enableBottomLine ? 'has_bottom_line' : ''}`}>
                <RichText
                  style={{
                    color: headingColor,
                  }}
                  tagName="h4"
                  className="heading"
                  name="heading"
                  placeholder={__("Enter Title")}
                  value={heading}
                  onChange={(value) => setAttributes({ heading: value })}
                />
                {enableContent && (
                <RichText
                  style={{
                    color: contentColor,
                  }}
                  tagName="h2"
                  className="content"
                  name="content"
                  placeholder={__("Enter Paragraph")}
                  value={content}
                  onChange={(value) => setAttributes({ content: value })}
                />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
