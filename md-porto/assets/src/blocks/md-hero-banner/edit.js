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

import { Fragment } from "@wordpress/element";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

import polygonSVG from "./polygon.svg";

import maskImage from "./mask-image.png";

import wavesSVG from "./waves.svg";

import { leftAlign, rightAlign } from "../icons";

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
    subTitle,
    title,
    mediaPosition,
    backgroundColor,
    subTitleColor,
    subTitleBackgroundColor,
    titleColor,
    showSubTitle,
    showTitle,
    showMedia,
    mediaImage,
    showBreadcrumb,
  } = attributes;

  const siteURL = window.location.origin;

  return (
    <div {...useBlockProps({ className: "md_porto_video_header_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-porto")}>
          <ToggleControl
            label={__("Show Sub Title", "md-porto")}
            checked={showSubTitle}
            onChange={(value) => setAttributes({ showSubTitle: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-porto")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Media", "md-porto")}
            checked={showMedia}
            onChange={(value) => setAttributes({ showMedia: value })}
          />
          <ToggleControl
            label={__("Show Breadcrumb", "md-porto")}
            checked={showBreadcrumb}
            onChange={(value) => setAttributes({ showBreadcrumb: value })}
          />
          <div className="setting-row inspector-field inspector-field-alignment">
            <label htmlFor="alignment" className="inspector-mb-0">
              {__("Media Position")}
            </label>
            <div className="inspector-field-button-list inspector-field-button-list-fluid">
              <button
                className={
                  "left" === mediaPosition
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ mediaPosition: "left" })}
              >
                {leftAlign}
              </button>
              <button
                className={
                  "right" === mediaPosition
                    ? "active inspector-button"
                    : " inspector-button"
                }
                onClick={() => setAttributes({ mediaPosition: "right" })}
              >
                {rightAlign}
              </button>
            </div>
          </div>
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-porto")} initialOpen={false}>
          <PanelColorSettings
            title={__("Typography Colors", "md-porto")}
            initialOpen={false}
            colorSettings={[
              {
                value: subTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ subTitleColor: colorValue }),
                label: __("Sub Title Color", "md-porto"),
              },
              {
                value: subTitleBackgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ subTitleBackgroundColor: colorValue }),
                label: __("Sub Title Background Color", "md-porto"),
              },
              {
                value: titleColor,
                onChange: (colorValue) =>
                  setAttributes({ titleColor: colorValue }),
                label: __("Title Color", "md-porto"),
              },
              {
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color", "md-porto"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <style>
        {`
        .md_porto_hero_banner__media1 {
          mask-image: url(${siteURL + maskImage});
        }
      `}
      </style>
      <div className={`md_porto_hero_banner_wrap`}>
        <div className="md_porto_hero_banner" style={{ backgroundColor }}>
          <div className="container">
            <div className="md_porto_hero_banner__background__cover">
              <img src={wavesSVG} alt="waves" />
            </div>
            <div
              className="md_porto_hero_banner__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_porto_hero_banner__heading">
                {showSubTitle && (
                  <RichText
                    tagName="h4"
                    value={subTitle}
                    onChange={(value) => setAttributes({ subTitle: value })}
                    placeholder={__("Enter Sub Title", "md-porto")}
                    style={{
                      color: subTitleColor,
                      backgroundColor: subTitleBackgroundColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText
                    tagName="h2"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__("Enter Title", "md-porto")}
                    style={{ color: titleColor }}
                  />
                )}
              </div>
              {showMedia && (
                <div className="md_porto_hero_banner__media">
                  <div className="md_porto_hero_banner__background">
                    <img src={polygonSVG} alt="polygon" />
                  </div>
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_porto_hero_banner__media1">
                    <div
                      className={`image-controls small-icons icon-center-fixed`}
                    >
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={(media) =>
                            setAttributes({ mediaImage: media.url })
                          }
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
                                        if (
                                          e.key === "Enter" ||
                                          e.key === " "
                                        ) {
                                          e.preventDefault(); // Prevent default action for space key
                                          open(); // Trigger the click handler
                                        }
                                      }}
                                      aria-label={__("Edit image", "md-prime")}
                                    ></i>
                                  </Tooltip>
                                  <Tooltip
                                    text={__("Remove Image", "md-prime")}
                                  >
                                    <i
                                      className="dashicons dashicons-no-alt remove-image"
                                      onClick={() =>
                                        setAttributes({ mediaImage: "" })
                                      }
                                      role="button"
                                      tabIndex={0}
                                      onKeyDown={(e) => {
                                        if (
                                          e.key === "Enter" ||
                                          e.key === " "
                                        ) {
                                          e.preventDefault();
                                          setAttributes({ mediaImage: "" });
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
                    <img
                      src={mediaImage ? mediaImage : siteURL + placeholder}
                      alt={"slider"}
                    />
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
