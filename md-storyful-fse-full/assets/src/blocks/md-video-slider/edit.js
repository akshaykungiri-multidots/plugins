/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the server side render element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-server-side-render/
 */
import ServerSideRender from "@wordpress/server-side-render";

/**
 * React hook that is used to mark the block wrapper element.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/
 */
import { useBlockProps, InspectorControls, MediaUpload, } from "@wordpress/block-editor";

import {
  PanelBody,
  RangeControl,
  ToggleControl,
  Button,
  Tooltip,
  SelectControl,
  TextControl
} from "@wordpress/components";

/**
 * React hook that is used to mark the components element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/components/
 */

import metadata from "./block.json";
import "./editor.scss";

import { useState } from "@wordpress/element";

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
export default function Edit({ attributes, setAttributes, className }) {
  const {
    autoplay,
    arrows,
    dots,
    slideInfinite,
    slideSlidesToShow,
    slideSlidesToScroll,
    slideItems,
  } = attributes;

  const [currentSlide, setCurrentSlide] = useState(0);

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...slideItems,
      {
        id: slideItems.length + 1,
        mediaurl: "",
        youtubeurl: "",
        videotype: "media-upload",
        media: "",
        mediaId: "",
        mediaAlt: "",
      },
    ];
    setAttributes({ slideItems: staticPostObj });
    setCurrentSlide(staticPostObj.length - 1);
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...slideItems];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ slideItems: updatedStaticPostObj });
  };
  const removeStaticPostObj = (index) => {
    const updatedStaticPostObj = [...slideItems];
    updatedStaticPostObj.splice(index, 1);
    setAttributes({ slideItems: updatedStaticPostObj });
    setCurrentSlide(-1);
  };

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody
          title={__("General Settings", "md-prime")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Autoplay", "md-prime")}
            checked={autoplay}
            onChange={(autoplay) => setAttributes({ autoplay })}
          />
          <ToggleControl
            label={__("Hide/Show Arrows", "md-prime")}
            checked={arrows}
            onChange={(arrows) => setAttributes({ arrows })}
          />
          <ToggleControl
            label={__("Hide/Show Dots", "md-prime")}
            checked={dots}
            onChange={(dots) => setAttributes({ dots })}
          />
          <ToggleControl
            label={__("Infinite Loop", "md-prime")}
            checked={slideInfinite}
            onChange={(slideInfinite) => setAttributes({ slideInfinite })}
          />
          <RangeControl
            label={__("Slides To Show")}
            value={slideSlidesToShow}
            min={1}
            max={10}
            step={1}
            onChange={(slideSlidesToShow) =>
              setAttributes({ slideSlidesToShow })
            }
          />
          <RangeControl
            label={__("Slides To Scroll")}
            value={slideSlidesToScroll}
            min={1}
            max={10}
            step={1}
            onChange={(slideSlidesToScroll) =>
              setAttributes({ slideSlidesToScroll })
            }
          />
        </PanelBody>
      </InspectorControls>
      <div className="storyful-video-slider video-section">
        <div className="video-container">
          <div className="video-wrapper">
            {currentSlide > -1 && (
              <div className="wrapper__item mdprime-sidebar show-items-hover-wrap">
                {slideItems.length > 0 && (
                  <div className={`item-action-wrap show-items-hover`}>
                    <Tooltip text={__("Remove Item", "md-prime")}>
                      <i
                        className="remove-item dashicons dashicons-no-alt"
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                          // eslint-disable-next-line no-alert
                          const toDelete = confirm(
                            __(
                              "Are you sure you want to delete this item?",
                              "md-prime"
                            )
                          );
                          if (toDelete) {
                            removeStaticPostObj(currentSlide);
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            // eslint-disable-next-line no-alert
                            const toDelete = confirm(
                              __(
                                "Are you sure you want to delete this item?",
                                "md-prime"
                              )
                            );
                            if (toDelete) {
                              removeStaticPostObj(currentSlide);
                            }
                          }
                        }}
                        aria-label="Remove item"
                      ></i>
                    </Tooltip>
                  </div>
                )}
                <div className="wrapper__box-inner">
                  <div
                    className="video-details-wrapper"
                    style={{ textAlign: "center" }}
                  >
                    <div className="video-data-edit">
                      <SelectControl
                        label={__("Select Video Type", "storyful")}
                        value={slideItems[currentSlide].videotype}
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
                        onChange={(videotype) => {
                          updateStaticPostObj(currentSlide, "videotype", videotype);
                        }}
                      />
                      {slideItems[currentSlide].videotype === "youtube" && (
                        <>
                          <TextControl
                            placeholder="Enter youtube video URL"
                            value={slideItems[currentSlide].youtubeurl}
                            className="video-item-url"
                            onChange={(youtubeurl) => {
                              updateStaticPostObj(currentSlide, "youtubeurl", youtubeurl);
                            }}
                          />
                          {slideItems[currentSlide].youtubeurl && (
                            <iframe
                              src={
                                slideItems[currentSlide].youtubeurl.replace(
                                  "watch?v=",
                                  "embed/"
                                ) + "?controls=0"
                              }
                              data-src={
                                slideItems[currentSlide].youtubeurl +
                                "?enablejsapi=1&controls=0&rel=0"
                              }
                              title="video"
                            ></iframe>
                          )}
                        </>
                      )}
                    </div>

                    {slideItems[currentSlide].videotype === "media-upload" &&
                      slideItems[currentSlide].mediaurl && (
                        <div className="image-preview image-controle-visible-hover">
                          <video
                            autoPlay=""
                            muted=""
                            loop=""
                            className="self-media"
                          >
                            <source src={slideItems[currentSlide].mediaurl} type="video/mp4" />
                          </video>

                          <div className="item-action-wrap image-controls small-icons icon-center-fixed">
                            <Tooltip text={__("Remove Video")}>
                              <i
                                className="dashicons dashicons-no-alt remove-image"
                                role="button"
                                tabIndex={0}
                                onClick={() => {
                                  updateStaticPostObj(currentSlide, "mediaurl", "");
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    updateStaticPostObj(currentSlide, "mediaurl", "");
                                  }
                                }}
                                aria-label="Remove image"
                              ></i>
                            </Tooltip>
                          </div>
                        </div>
                      )}
                    {slideItems[currentSlide].videotype === "media-upload" &&
                      !slideItems[currentSlide].mediaurl && (
                        <>
                          <MediaUpload
                            onSelect={(newmedia) => {
                              updateStaticPostObj(currentSlide, "mediaurl", newmedia.url);
                            }}
                            allowedTypes={["video"]}
                            value={slideItems[currentSlide].mediaurl}
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
            )}
          </div>
          {/* Display Slides as Button */}
          <div className="slide-buttons">
            {slideItems.map((item, index) => (
              <button
                key={index}
                className={`slide-button ${currentSlide === index ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="add-item-wrap">
            <Button variant="primary" onClick={addStaticPostObj}>
              {__("Add New Slide")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
