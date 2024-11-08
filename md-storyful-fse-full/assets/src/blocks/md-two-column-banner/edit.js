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
 * @param  root0
 * @param  root0.attributes
 * @param  root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const {
    sectionLeftTitle,
    sectionLeftDescription,
    sectionLeftButtonLink,
    sectionLeftImage,
    sectionRightTitle,
    sectionRightDescription,
    sectionRightButtonLink,
    sectionRightImage,
    sectionLeftTitleFontColor,
    sectionLeftDescriptionFontColor,
    sectionRightTitleFontColor,
    sectionRightDescriptionFontColor,
    showSectionLeftTitle,
    showSectionLeftDescription,
    showSectionLeftButton,
    showSectionRightTitle,
    showSectionRightDescription,
    showSectionRightButton,
  } = attributes;

  return (
    <div {...useBlockProps({ className: "md_two_column_banner" })}>
      <InspectorControls>
        <PanelBody title={__("Toggle Settings", "md-storyful-fse-full")}>
          <ToggleControl
            label={__("Show Left Title", "md-storyful-fse-full")}
            checked={showSectionLeftTitle}
            onChange={(value) => setAttributes({ showSectionLeftTitle: value })}
          />
          <ToggleControl
            label={__("Show Left Description", "md-storyful-fse-full")}
            checked={showSectionLeftDescription}
            onChange={(value) =>
              setAttributes({
                showSectionLeftDescription: value,
              })
            }
          />
          <ToggleControl
            label={__("Show Left Button", "md-storyful-fse-full")}
            checked={showSectionLeftButton}
            onChange={(value) =>
              setAttributes({ showSectionLeftButton: value })
            }
          />
          <ToggleControl
            label={__("Show Right Title", "md-storyful-fse-full")}
            checked={showSectionRightTitle}
            onChange={(value) =>
              setAttributes({ showSectionRightTitle: value })
            }
          />
          <ToggleControl
            label={__("Show Right Description", "md-storyful-fse-full")}
            checked={showSectionRightDescription}
            onChange={(value) =>
              setAttributes({
                showSectionRightDescription: value,
              })
            }
          />
          <ToggleControl
            label={__("Show Right Button", "md-storyful-fse-full")}
            checked={showSectionRightButton}
            onChange={(value) =>
              setAttributes({ showSectionRightButton: value })
            }
          />
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
                value: sectionLeftTitleFontColor,
                onChange: (value) =>
                  setAttributes({
                    sectionLeftTitleFontColor: value,
                  }),
                label: __("Left Title Font Color"),
              },
              {
                value: sectionLeftDescriptionFontColor,
                onChange: (value) =>
                  setAttributes({
                    sectionLeftDescriptionFontColor: value,
                  }),
                label: __("Left Description Font Color"),
              },
              {
                value: sectionRightTitleFontColor,
                onChange: (value) =>
                  setAttributes({
                    sectionRightTitleFontColor: value,
                  }),
                label: __("Right Title Font Color"),
              },
              {
                value: sectionRightDescriptionFontColor,
                onChange: (value) =>
                  setAttributes({
                    sectionRightDescriptionFontColor: value,
                  }),
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
                {showSectionLeftTitle && (
                  <RichText
                    tagName="h2"
                    className="section-title h1 with-darkbg"
                    value={sectionLeftTitle}
                    onChange={(value) =>
                      setAttributes({
                        sectionLeftTitle: value,
                      })
                    }
                    placeholder={__("Enter title…", "md-blocks")}
                    style={{
                      color: sectionLeftTitleFontColor,
                    }}
                  />
                )}
                {showSectionLeftDescription && (
                  <RichText
                    tagName="p"
                    className="cta-section-desc"
                    value={sectionLeftDescription}
                    onChange={(value) =>
                      setAttributes({
                        sectionLeftDescription: value,
                      })
                    }
                    placeholder={__("Enter description…", "md-blocks")}
                    style={{
                      color: sectionLeftDescriptionFontColor,
                    }}
                  />
                )}
                {showSectionLeftButton && (
                  <div className="sbtn sbtn-arrow-primary-v2">
                    <span className="btn-text">
                      <RichText
                        tagName="a"
                        value={sectionLeftButtonLink}
                        onChange={(value) =>
                          setAttributes({
                            sectionLeftButtonLink: value,
                          })
                        }
                        placeholder={__("Enter button text…", "md-blocks")}
                      />
                    </span>
                  </div>
                )}
              </div>
              <div className="intelligence-section__media wow bounceIn">
                <div className="media-image-wrapper">
                  <figure id="img-two">
                    <MediaUpload
                      title={__("Feature Image")}
                      onSelect={(media) =>
                        setAttributes({
                          sectionLeftImage: media.url,
                        })
                      }
                      multiple={false}
                      render={({ open }) => (
                        <>
                          {sectionLeftImage === "" ? (
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
                                    setAttributes({
                                      sectionLeftImage: "",
                                    })
                                  }
                                  className="dashicons dashicons-no-alt remove-image"
                                ></i>
                              </div>
                              <img src={sectionLeftImage} alt={sectionLeftTitle} />
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
                {showSectionRightTitle && (
                  <RichText
                    tagName="h2"
                    className="section-title h1"
                    value={sectionRightTitle}
                    onChange={(value) =>
                      setAttributes({
                        sectionRightTitle: value,
                      })
                    }
                    placeholder={__("Enter title…", "md-blocks")}
                    style={{
                      color: sectionRightTitleFontColor,
                    }}
                  />
                )}
                {showSectionRightDescription && (
                  <RichText
                    tagName="p"
                    className="cta-section-desc"
                    value={sectionRightDescription}
                    onChange={(value) =>
                      setAttributes({
                        sectionRightDescription: value,
                      })
                    }
                    placeholder={__("Enter description…", "md-blocks")}
                    style={{
                      color: sectionRightDescriptionFontColor,
                    }}
                  />
                )}
                {showSectionRightButton && (
                  <div className="sbtn sbtn-arrow-primary-v2">
                    <span className="btn-text">
                      <RichText
                        tagName="a"
                        value={sectionRightButtonLink}
                        onChange={(value) =>
                          setAttributes({
                            sectionRightButtonLink: value,
                          })
                        }
                        placeholder={__("Enter button text…", "md-blocks")}
                      />
                    </span>
                  </div>
                )}
              </div>
              <div className="cta-news-section__media wow bounceIn">
                <div className="media-image-wrapper">
                  <figure id="img-one">
                    <MediaUpload
                      title={__("Feature Image")}
                      onSelect={(media) =>
                        setAttributes({
                          sectionRightImage: media.url,
                        })
                      }
                      multiple={false}
                      render={({ open }) => (
                        <>
                          {sectionRightImage === "" ? (
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
                                    setAttributes({
                                      sectionRightImage: "",
                                    })
                                  }
                                  className="dashicons dashicons-no-alt remove-image"
                                ></i>
                              </div>
                              <img src={sectionRightImage} alt={sectionRightTitle} />
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
