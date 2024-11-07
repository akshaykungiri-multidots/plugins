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
  MediaUploadCheck,
  MediaUpload,
  PanelColorSettings,
} from "@wordpress/block-editor";

import {
  PanelBody,
  Button,
  SelectControl,
  ToggleControl,
  Tooltip,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

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
    title,
    heading_content,
    button_link,
    cover_image,
    background_image,
    background_color,
    cover_cta_style,
    title_font_color,
    heading_content_font_color,
    show_title,
    show_heading_content,
    show_button,
  } = attributes;

  const siteURL = window.location.origin;

  return (
    <div {...useBlockProps({ className: "md_anitian_cover_cta_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
          <SelectControl
            label={__("Cover CTA Style", "md-anitian-fse-full")}
            value={cover_cta_style}
            options={[
              { label: "Style 1", value: "style1" },
              { label: "Style 2", value: "style2" },
              { label: "Style 3", value: "style3" },
            ]}
            onChange={(value) => setAttributes({ cover_cta_style: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Toggle Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
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
          title={__("Background Settings", "md-prime")}
          initialOpen={false}
        >
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
                <>
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
                </>
              )}
            </div>
          </div>
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: title_font_color,
                onChange: (value) => setAttributes({ title_font_color: value }),
                label: __("Title Color", "md-storyful-fse-full"),
              },
              {
                value: heading_content_font_color,
                onChange: (value) =>
                  setAttributes({ heading_content_font_color: value }),
                label: __("Heading Content Color", "md-storyful-fse-full"),
              },
              {
                value: background_color,
                onChange: (value) => setAttributes({ background_color: value }),
                label: __("Background Color", "md-storyful-fse-full"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className={`md_anitian_cover_cta_wrap ${cover_cta_style}`}
        style={{ backgroundColor: background_color }}
      >
        {cover_cta_style !== "style1" && (
          <div className="md_anitian_cover_cta_arc"></div>
        )}
        <div
          className="md_anitian_cover_cta"
          style={{ backgroundImage: `url(${background_image})` }}
        >
          {cover_cta_style === "style1" && (
            <div
              className="background_overlay"
              style={{
                background: `linear-gradient(180deg, ${background_color} 0%, ${background_color} 100%)`,
              }}
            ></div>
          )}
          <div className="container">
            <div className="md_anitian_cover_cta__inner">
              <div className="md_anitian_cover_cta__heading">
                {show_title && (
                  <RichText
                    tagName="h2"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__("Enter Title", "md-anitian-fse-full")}
                    style={{ color: title_font_color }}
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
                      color: heading_content_font_color,
                    }}
                  />
                )}
                {show_button && (
                  <div className="md_anitian_cover_cta__btn">
                    <RichText
                      tagName="p"
                      className="btn-anitian md_anitian_cover_cta__btn"
                      value={button_link}
                      onChange={(value) =>
                        setAttributes({ button_link: value })
                      }
                      placeholder={__(
                        "Enter Button Link",
                        "md-anitian-fse-full"
                      )}
                    />
                  </div>
                )}
              </div>
              <div className="md_anitian_cover_cta__image">
                <div className="cover_cta__image">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover">
                    <div
                      className={`image-controls small-icons icon-center-fixed`}
                    >
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={(media) =>
                            setAttributes({
                              cover_image: media.url,
                            })
                          }
                          allowedTypes={["image"]}
                          value={cover_image}
                          render={({ open }) => (
                            <>
                              {cover_image ? (
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
                                            cover_image: "",
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
                                          updateStaticPostObj(
                                            index,
                                            "card_image",
                                            ""
                                          );
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
                    {cover_image ? <img src={cover_image} /> : <img src={siteURL + placeholder} />}
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
