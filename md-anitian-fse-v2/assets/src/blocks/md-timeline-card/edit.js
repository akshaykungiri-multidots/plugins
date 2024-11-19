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
  InnerBlocks,
  Inserter,
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
  GradientPicker,
  Tooltip,
} from "@wordpress/components";

import { useState } from "@wordpress/element";

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
export default function Edit({ attributes, setAttributes, clientId }) {
  const {
    heading,
    headingColor,
    backHeadingColor,
    content,
    contentColor,
    backContentColor,
    enableSliderImage,
    sliderImage,
    sliderImageBGColor,
    sliderBorderColor,
    enableClickHere,
    backgroundMediaType,
    backgroundMediaColor,
    backgroundMediaImage,
    innerHeading,
    innerContent,
    showCardTitle,
    showCardContent,
    showInnerCardTitle,
    showInnerCardContent,
  } = attributes;

  const siteURL = window.location.origin;

  function MyButtonBlockAppender({ rootClientId }) {
    return (
      <Inserter
        rootClientId={rootClientId}
        renderToggle={({ onToggle, disabled }) => (
          <Button
            className="my-button-block-appender"
            onClick={onToggle}
            disabled={disabled}
            icon="plus"
          >
            {__("Add More Block")}
          </Button>
        )}
        isAppender
      />
    );
  }

  const ALLOWED_BLOCKS = ["core/paragraph", "core/heading", "md-anitian-fse-v2/md-quote" ];

  const [innerCard, setInnerCard] = useState(0);

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-anitian")}>
          <ToggleControl
            label={__("Enable Card Image")}
            checked={enableSliderImage}
            onChange={(value) => setAttributes({ enableSliderImage: value })}
          />
          <ToggleControl
            label={__("Display Click Here Icon")}
            checked={enableClickHere}
            onChange={(value) => setAttributes({ enableClickHere: value })}
          />
          <ToggleControl
            label={__("Show Card Title")}
            checked={showCardTitle}
            onChange={(value) => setAttributes({ showCardTitle: value })}
          />
          <ToggleControl
            label={__("Show Card Content")}
            checked={showCardContent}
            onChange={(value) => setAttributes({ showCardContent: value })}
          />
          <ToggleControl
            label={__("Show Inner Card Title")}
            checked={showInnerCardTitle}
            onChange={(value) => setAttributes({ showInnerCardTitle: value })}
          />
          <ToggleControl
            label={__("Show Inner Card Content")}
            checked={showInnerCardContent}
            onChange={(value) => setAttributes({ showInnerCardContent: value })}
          />
        </PanelBody>
        <PanelBody title={__("Background Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Background Type")}
            help={backgroundMediaType ? __("Media") : __("Color")}
            checked={backgroundMediaType}
            onChange={() =>
              setAttributes({
                backgroundMediaType: !backgroundMediaType,
              })
            }
          />
          {backgroundMediaType ? (
            <div className="setting-row">
              <label htmlFor="background-image">
                {__("Background Image", "md-prime")}
              </label>
              <div>
                {!backgroundMediaImage ? (
                  <MediaUpload
                    onSelect={(selectedImage) => {
                      setAttributes({
                        backgroundMediaImage: selectedImage.url,
                      });
                    }}
                    allowedTypes={["image"]}
                    value={backgroundMediaImage}
                    render={({ open }) => (
                      <Button onClick={open} className="button button-large">
                        {__("Upload Image", "md-prime")}
                      </Button>
                    )}
                  />
                ) : (
                  <>
                    <div className="image-preview">
                      <img
                        src={backgroundMediaImage}
                        alt="Background-image-preview"
                      />
                    </div>
                    <Button
                      onClick={() => {
                        setAttributes({
                          backgroundMediaImage: "",
                        });
                      }}
                      className="is-link is-destructive"
                    >
                      {__("Remove Image", "md-prime")}
                    </Button>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="setting-row">
              <label htmlFor="background-gradient">
                {__("Background Gradient", "md-prime")}
              </label>
              <GradientPicker
                __nextHasNoMargin
                value={backgroundMediaColor}
                onChange={(currentGradient) =>
                  setAttributes({ backgroundMediaColor: currentGradient })
                }
                gradients={[
                  {
                    name: "JShine",
                    gradient:
                      "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
                    slug: "jshine",
                  },
                  {
                    name: "Moonlit Asteroid",
                    gradient:
                      "linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
                    slug: "moonlit-asteroid",
                  },
                  {
                    name: "Rastafarie",
                    gradient:
                      "linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
                    slug: "rastafari",
                  },
                ]}
              />
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
                value: contentColor,
                onChange: (value) => setAttributes({ contentColor: value }),
                label: __("Content Color"),
              },
              {
                value: backHeadingColor,
                onChange: (value) => setAttributes({ backHeadingColor: value }),
                label: __("Inner Heading Color"),
              },
              {
                value: backContentColor,
                onChange: (value) => setAttributes({ backContentColor: value }),
                label: __("Inner Content Color"),
              },
              {
                value: sliderImageBGColor,
                onChange: (value) =>
                  setAttributes({ sliderImageBGColor: value }),
                label: __("Image Background Color"),
              },
              {
                value: sliderBorderColor,
                onChange: (value) =>
                  setAttributes({ sliderBorderColor: value }),
                label: __("Slider Border Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_timeline_slider_wrapper">
        <div className="md_timeline_slider_inner">
          {innerCard === 0 ? (
            <div
              className="md_slider_card"
              style={{
                background: backgroundMediaType
                  ? backgroundMediaImage
                  : backgroundMediaColor,
              }}
            >
              {enableSliderImage && (
                <div
                  className="md_timeline_slider_image"
                  style={{
                    backgroundColor: sliderImageBGColor,
                  }}
                >
                  <div className="md-prime-block-control image-preview image-controle-visible-hover">
                    <div
                      className={`image-controls small-icons icon-center-fixed`}
                    >
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={(media) =>
                            setAttributes({
                              sliderImage: media.url,
                            })
                          }
                          allowedTypes={["image"]}
                          value={sliderImage}
                          render={({ open }) => (
                            <>
                              {sliderImage ? (
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
                                            sliderImage: "",
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
                                          setAttributes({ sliderImage: "" });
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
                    {sliderImage ? (
                      <img src={sliderImage} alt={"Slider Icon"} />
                    ) : (
                      <img src={siteURL + placeholder} alt={"Slider Icon"} />
                    )}
                  </div>
                </div>
              )}
              <div className="md_timeline_slider_content">
                {showCardTitle && (
                <RichText
                  style={{
                    color: headingColor
                  }}
                  tagName="h2"
                  className="heading"
                  name="heading"
                  placeholder={__("Enter Title")}
                  value={heading}
                  onChange={(value) => setAttributes({ heading: value })}
                />
                )}
                {showCardContent && (
                <RichText
                  style={{
                    color: contentColor
                  }}
                  tagName="p"
                  className="content"
                  name="content"
                  placeholder={__("Enter Paragraph…")}
                  value={content}
                  onChange={(value) => setAttributes({ content: value })}
                />
                )}
              </div>
              <div className="click-here">
                {enableClickHere && (
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="137px"
                    height="64px"
                    viewBox="0 0 305.000000 144.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,144.000000) scale(0.100000,-0.100000)"
                      fill="currentColor"
                      stroke="none"
                    >
                      <path d="M1251 1097 c-5 -12 -15 -58 -22 -102 -7 -44 -19 -90 -26 -102 -8 -12 -12 -30 -9 -41 5 -15 -5 -22 -55 -40 -47 -17 -65 -19 -75 -11 -23 19 -16 47 21 75 40 30 45 54 12 54 -52 0 -108 -98 -86 -152 15 -36 48 -42 111 -18 63 24 68 24 68 6 0 -18 30 -29 35 -13 2 6 6 24 9 40 4 15 11 27 16 27 6 0 38 -14 71 -31 48 -24 64 -28 75 -18 21 17 9 28 -74 66 -87 39 -86 50 11 77 55 16 71 31 44 42 -8 3 -35 -2 -61 -11 -26 -9 -50 -14 -53 -11 -3 2 0 28 6 56 14 64 14 130 1 130 -6 0 -14 -10 -19 -23z"></path>
                      <path d="M594 1086 c-72 -32 -154 -130 -169 -202 -9 -45 16 -99 57 -120 72 -39 183 -15 281 60 l47 36 0 -49 c0 -30 5 -53 14 -60 23 -19 36 17 36 96 0 37 7 103 15 145 14 74 12 108 -5 108 -17 0 -30 -30 -41 -98 -12 -72 -12 -73 -73 -121 -84 -66 -116 -81 -179 -81 -44 0 -59 5 -81 25 -31 29 -32 44 -6 95 24 47 66 81 144 115 42 19 57 30 54 43 -4 22 -53 26 -94 8z"></path>
                      <path d="M1674 1054 c-17 -41 -54 -228 -54 -275 0 -15 6 -29 14 -32 16 -6 32 10 67 68 l24 40 7 -43 c9 -55 14 -62 44 -62 27 0 29 3 12 33 -6 12 -14 51 -17 87 -5 56 -9 65 -26 65 -13 0 -28 -15 -45 -45 -34 -62 -38 -33 -10 87 16 68 19 98 11 106 -7 7 -15 -1 -27 -29z"></path>
                      <path d="M953 1023 c-23 -9 -15 -35 10 -31 12 2 22 9 22 17 0 16 -14 22 -32 14z"></path>
                      <path d="M937 933 c-12 -21 -30 -174 -21 -183 18 -18 35 7 44 66 14 86 13 124 -4 124 -8 0 -17 -3 -19 -7z"></path>
                      <path d="M1873 930 c-29 -12 -43 -40 -43 -87 0 -51 44 -97 93 -97 39 0 91 34 117 77 l18 30 7 -46 c11 -74 29 -78 60 -13 15 31 45 72 71 94 24 22 44 42 44 46 0 3 -12 6 -27 6 -18 0 -38 -13 -64 -40 l-39 -40 -6 25 c-8 31 -30 33 -38 3 -9 -30 -104 -108 -132 -108 -12 0 -27 6 -33 14 -10 12 -7 18 18 30 35 19 46 47 30 78 -20 38 -36 44 -76 28z m43 -45 c7 -18 -12 -45 -32 -45 -14 0 -20 41 -7 53 11 12 33 7 39 -8z"></path>
                      <path d="M2293 930 c-29 -12 -43 -40 -43 -87 0 -52 44 -97 94 -97 40 0 99 41 121 85 21 39 12 37 -42 -11 -48 -42 -82 -50 -102 -26 -10 12 -7 18 18 30 35 19 46 47 30 78 -20 38 -36 44 -76 28z m43 -45 c7 -18 -12 -45 -32 -45 -14 0 -20 41 -7 53 11 12 33 7 39 -8z"></path>
                      <path d="M2088 609 c-14 -6 -29 -16 -32 -24 -10 -27 21 -42 101 -49 91 -7 142 -19 126 -29 -18 -11 -250 -64 -343 -79 -113 -17 -526 -17 -640 0 -141 22 -307 61 -454 108 -141 45 -184 47 -131 6 60 -47 310 -124 530 -163 301 -53 768 -28 1028 54 42 14 77 23 77 21 0 -14 -355 -204 -381 -204 -23 0 -31 -26 -13 -41 22 -18 70 -6 177 44 123 58 357 196 364 215 10 24 -10 45 -71 75 -104 51 -284 86 -338 66z"></path>
                    </g>
                  </svg>
                )}
                <i
                  role="button"
                  tabIndex={0}
                  onClick={() => setInnerCard(1)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setInnerCard(1);
                    }
                  }}
                  className="dashicons dashicons-plus-alt"
                  aria-label={__("Add inner card", "md-prime")}
                ></i>
              </div>
            </div>
          ) : (
            <div className="md_slider_card md_no_image md_back_card" style={{borderTopColor: sliderBorderColor}}>
              <div className="md_timeline_slider_content">
                {showInnerCardTitle && (
                <RichText
                  style={{
                    color: backHeadingColor
                  }}
                  tagName="h2"
                  className="heading"
                  name="innerHeading"
                  placeholder={__("Enter Title")}
                  value={innerHeading}
                  onChange={(value) => setAttributes({ innerHeading: value })}
                />
                )}
                {showInnerCardContent && (
                <RichText
                  style={{
                    color: backContentColor
                  }}
                  tagName="p"
                  className="innerContent"
                  name="innerContent"
                  placeholder={__("Enter Paragraph…")}
                  value={innerContent}
                  onChange={(value) => setAttributes({ innerContent: value })}
                />
                )}
                <div className="md_block_inserter">
                  <InnerBlocks
                    allowedBlocks={ALLOWED_BLOCKS}
                    renderAppender={() => (
                      <MyButtonBlockAppender rootClientId={clientId} />
                    )}
                  />
                </div>
              </div>
              <div className="click-here">
                <i
                  role="button"
                  tabIndex={0}
                  onClick={() => setInnerCard(0)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setInnerCard(0);
                    }
                  }}
                  className="dashicons dashicons-plus-alt"
                  aria-label={__("Add inner card", "md-prime")}
                ></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
