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
  MediaUpload,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";

import { PanelBody, Button, ToggleControl } from "@wordpress/components";

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
    section_left_title,
    section_left_description,
    section_left_button_link,
    section_left_image,
    section_right_title,
    section_right_description,
    section_right_button_link,
    section_right_image,
    section_left_title_font_color,
    section_left_description_font_color,
    section_right_title_font_color,
    section_right_description_font_color,
    show_section_left_title,
    show_section_left_description,
    show_section_left_button,
    show_section_right_title,
    show_section_right_description,
    show_section_right_button,
  } = attributes;

  return (
    <div {...useBlockProps({ className: "md_two_column_banner" })}>
      <InspectorControls>
        <PanelBody title={__("Toggle Settings", "md-storyful-fse-full")}>
          <ToggleControl
            label={__("Show Left Title", "md-storyful-fse-full")}
            checked={show_section_left_title}
            onChange={(value) =>
              setAttributes({ show_section_left_title: value })
            }
          />
          <ToggleControl
            label={__("Show Left Description", "md-storyful-fse-full")}
            checked={show_section_left_description}
            onChange={(value) =>
              setAttributes({ show_section_left_description: value })
            }
          />
          <ToggleControl
            label={__("Show Left Button", "md-storyful-fse-full")}
            checked={show_section_left_button}
            onChange={(value) =>
              setAttributes({ show_section_left_button: value })
            }
          />
          <ToggleControl
            label={__("Show Right Title", "md-storyful-fse-full")}
            checked={show_section_right_title}
            onChange={(value) =>
              setAttributes({ show_section_right_title: value })
            }
          />
          <ToggleControl
            label={__("Show Right Description", "md-storyful-fse-full")}
            checked={show_section_right_description}
            onChange={(value) =>
              setAttributes({ show_section_right_description: value })
            }
          />
          <ToggleControl
            label={__("Show Right Button", "md-storyful-fse-full")}
            checked={show_section_right_button}
            onChange={(value) =>
              setAttributes({ show_section_right_button: value })
            }
          />
        </PanelBody>
        <PanelBody title={__("Color Settings", "md-storyful-fse-full")} initialOpen={false}>
          <PanelColorSettings
            title={__("Typography Colors", "md-storyful-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: section_left_title_font_color,
                onChange: (value) =>
                  setAttributes({ section_left_title_font_color: value }),
                label: __("Left Title Font Color"),
              },
              {
                value: section_left_description_font_color,
                onChange: (value) =>
                  setAttributes({ section_left_description_font_color: value }),
                label: __("Left Description Font Color"),
              },
              {
                value: section_right_title_font_color,
                onChange: (value) =>
                  setAttributes({ section_right_title_font_color: value }),
                label: __("Right Title Font Color"),
              },
              {
                value: section_right_description_font_color,
                onChange: (value) =>
                  setAttributes({ section_right_description_font_color: value }),
                label: __("Right Description Font Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="cta-section">
        <div className="container-fluid">
          <div className="cta-section__right">
            <div className="intelligence-section">
              <div className="intelligence-section__details wow fadeInLeft">
                {show_section_left_title && (
                <RichText
                  tagName="h2"
                  className="section-title h1 with-darkbg"
                  value={section_left_title}
                  onChange={(value) =>
                    setAttributes({ section_left_title: value })
                  }
                  placeholder={__("Enter title...", "md-blocks")}
                  style={{
                    color: section_left_title_font_color,
                  }}
                />
                )}
                {show_section_left_description && (
                <RichText
                  tagName="p"
                  className="cta-section-desc"
                  value={section_left_description}
                  onChange={(value) =>
                    setAttributes({ section_left_description: value })
                  }
                  placeholder={__("Enter description...", "md-blocks")}
                  style={{
                    color: section_left_description_font_color,
                  }}
                />
                )}
                {show_section_left_button && (
                <div className="sbtn sbtn-arrow-primary-v2">
                  <span className="btn-text">
                    <RichText
                      tagName="a"
                      value={section_left_button_link}
                      onChange={(value) =>
                        setAttributes({ section_left_button_link: value })
                      }
                      placeholder={__("Enter button text...", "md-blocks")}
                    />
                  </span>
                </div>
                )}
              </div>
              <div class="intelligence-section__media wow bounceIn">
                <div class="media-image-wrapper">
                  <figure id="img-two">
                    <MediaUpload
                      title={__("Feature Image")}
                      onSelect={(media) =>
                        setAttributes({ section_left_image: media.url })
                      }
                      multiple={false}
                      render={({ open }) => (
                        <>
                          {section_left_image == "" ? (
                            <Button onClick={open} variant="primary">
                              {__("Upload")}
                            </Button>
                          ) : (
                            <div className="md-prime-image image-preview image-controle-visible-hover">
                              <div className="item-action-wrap image-controls small-icons icon-center-fixed">
                                <i
                                  onClick={open}
                                  className="dashicons dashicons-edit edit-image"
                                ></i>
                                <i
                                  onClick={() =>
                                    setAttributes({ section_left_image: "" })
                                  }
                                  className="dashicons dashicons-no-alt remove-image"
                                ></i>
                              </div>
                              <img src={section_left_image} />
                            </div>
                          )}
                        </>
                      )}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="cta-section__left">
            <div className="cta-news-section">
              <div className="cta-news-section__details wow fadeInLeft">
                {show_section_right_title && (
                <RichText
                  tagName="h2"
                  className="section-title h1"
                  value={section_right_title}
                  onChange={(value) =>
                    setAttributes({ section_right_title: value })
                  }
                  placeholder={__("Enter title...", "md-blocks")}
                  style={{
                    color: section_right_title_font_color,
                  }}
                />
                )}
                {show_section_right_description && (
                <RichText
                  tagName="p"
                  className="cta-section-desc"
                  value={section_right_description}
                  onChange={(value) =>
                    setAttributes({ section_right_description: value })
                  }
                  placeholder={__("Enter description...", "md-blocks")}
                  style={{
                    color: section_right_description_font_color,
                  }}
                />
                )}
                {show_section_right_button && (
                <div className="sbtn sbtn-arrow-primary-v2">
                  <span className="btn-text">
                    <RichText
                      tagName="a"
                      value={section_right_button_link}
                      onChange={(value) =>
                        setAttributes({ section_right_button_link: value })
                      }
                      placeholder={__("Enter button text...", "md-blocks")}
                    />
                  </span>
                </div>
                )}
              </div>
              <div class="cta-news-section__media wow bounceIn">
                <div class="media-image-wrapper">
                  <figure id="img-one">
                    <MediaUpload
                      title={__("Feature Image")}
                      onSelect={(media) =>
                        setAttributes({ section_right_image: media.url })
                      }
                      multiple={false}
                      render={({ open }) => (
                        <>
                          {section_right_image == "" ? (
                            <Button onClick={open} variant="primary">
                              {__("Upload")}
                            </Button>
                          ) : (
                            <div className="md-prime-image image-preview image-controle-visible-hover">
                              <div className="item-action-wrap image-controls small-icons icon-center-fixed">
                                <i
                                  onClick={open}
                                  className="dashicons dashicons-edit edit-image"
                                ></i>
                                <i
                                  onClick={() =>
                                    setAttributes({ section_right_image: "" })
                                  }
                                  className="dashicons dashicons-no-alt remove-image"
                                ></i>
                              </div>
                              <img src={section_right_image} />
                            </div>
                          )}
                        </>
                      )}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
