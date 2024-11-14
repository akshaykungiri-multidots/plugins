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
  InspectorControls,
  MediaUploadCheck,
  MediaUpload,
} from "@wordpress/block-editor";

import {
  PanelBody,
  Button,
  RangeControl,
  ToggleControl,
  Tooltip,
} from "@wordpress/components";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    logos,
    slidesToShow,
    slidesToScroll,
    autoplay,
    infinite,
    showDots,
    showArrows,
  } = attributes;
  const blockProps = useBlockProps();

  const siteURL = window.location.origin;

  // Slider settings
  const settings = {
    dots: showDots,
    slidesToShow,
    slidesToScroll,
    autoplaySpeed: 3000,
    arrows: showArrows,
    infinite,
    autoplay,
  };

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...logos,
      {
        id: logos.length + 1,
        image: "",
        imageLink: "",
      },
    ];
    setAttributes({ logos: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...logos];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ logos: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...logos];
    arrayCopy[oldIndex] = logos[newIndex];
    arrayCopy[newIndex] = logos[oldIndex];

    setAttributes({
      logos: arrayCopy,
    });
  };

  return (
    <div {...blockProps}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-logo-slider")}>
          <RangeControl
            label={__("Slides to Show", "md-logo-slider")}
            value={slidesToShow}
            onChange={(value) => setAttributes({ slidesToShow: value })}
            min={1}
            max={10}
          />
          <RangeControl
            label={__("Slides to Scroll", "md-logo-slider")}
            value={slidesToScroll}
            onChange={(value) => setAttributes({ slidesToScroll: value })}
            min={1}
            max={10}
          />
          <ToggleControl
            label={__("Autoplay", "md-logo-slider")}
            checked={autoplay}
            onChange={(value) => setAttributes({ autoplay: value })}
          />
          <ToggleControl
            label={__("Infinite", "md-logo-slider")}
            checked={infinite}
            onChange={(value) => setAttributes({ infinite: value })}
          />
          <ToggleControl
            label={__("Show Dots", "md-logo-slider")}
            checked={showDots}
            onChange={(value) => setAttributes({ showDots: value })}
          />
          <ToggleControl
            label={__("Show Arrows", "md-logo-slider")}
            checked={showArrows}
            onChange={(value) => setAttributes({ showArrows: value })}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_logo_slider">
        <Slider {...settings} className="md_logo_slider__slider">
          {logos &&
            logos.map((postObj, index) => (
              <div key={postObj.id} className="logo-slide">
                <div className="item-action-wrap show-items-hover small-icons">
                  <div className="move-item">
                    {0 < index && (
                      <Tooltip text={__("Move Left", "md-prime")}>
                        <span
                          className="dashicons dashicons-arrow-left-alt move-left"
                          onClick={() => moveItem(index, index - 1)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              moveItem(index, index - 1);
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          aria-label="Move item left"
                        ></span>
                      </Tooltip>
                    )}
                    {index + 1 < logos.length && (
                      <Tooltip text={__("Move Right", "md-prime")}>
                        <span
                          className="dashicons dashicons-arrow-right-alt move-right"
                          role="button"
                          tabIndex="0"
                          onClick={() => moveItem(index, index + 1)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              moveItem(index, index + 1);
                            }
                          }}
                          aria-label="Move item right"
                        ></span>
                      </Tooltip>
                    )}
                  </div>
                  {1 < logos.length && (
                    <Tooltip text={__("Remove Item", "md-prime")}>
                      <i
                        className="remove-item dashicons dashicons-no-alt"
                        role="button"
                        tabIndex="0"
                        onClick={() => {
                          const toDelete =
                            // eslint-disable-next-line no-alert
                            confirm(
                              __(
                                "Are you sure you want to delete this item?",
                                "md-prime"
                              )
                            );
                          if (toDelete) {
                            const updatedArray = logos.filter(
                              (item, itemIndex) => itemIndex !== index
                            );
                            setAttributes({
                              logos: updatedArray,
                            });
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            const toDelete =
                              // eslint-disable-next-line no-alert
                              confirm(
                                __(
                                  "Are you sure you want to delete this item?",
                                  "md-prime"
                                )
                              );
                            if (toDelete) {
                              const updatedArray = logos.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                logos: updatedArray,
                              });
                            }
                          }
                        }}
                        aria-label="Delete item"
                      ></i>
                    </Tooltip>
                  )}
                </div>
                <div className="pointcentral-press-listing__item-image">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover">
                    <div
                      className={`image-controls small-icons icon-center-fixed`}
                    >
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={(media) =>
                            updateStaticPostObj(index, "image", media.url)
                          }
                          allowedTypes={["image"]}
                          value={postObj.image}
                          render={({ open }) => (
                            <>
                              {postObj.image ? (
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
                                          updateStaticPostObj(
                                            index,
                                            "image",
                                            ""
                                          );
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
                                            "image",
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
                    {postObj.image ? (
                      <img src={postObj.image} alt={"slider"} />
                    ) : (
                      <img src={siteURL + placeholder} alt={"slider"} />
                    )}
                  </div>
                </div>
              </div>
            ))}
        </Slider>
        <div className="md_logo_slider__slider__controls">
          <Button
            className="button secondary stop"
            onClick={() => setAttributes({ autoplay: !autoplay })}
          >
            {autoplay
              ? <i className="dashicons dashicons-controls-pause"></i>
              : <i className="dashicons dashicons-controls-play"></i>
            }
          </Button>
        </div>
        <div
          className="add-item-wrap"
          onClick={addStaticPostObj}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault(); // Prevent default action for space key
              addStaticPostObj(); // Trigger the click handler
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={__("Add new item", "md-prime")}
        >
          <Tooltip text={__("Add New Item", "md-prime")}>
            <i className="add-new-item dashicons dashicons-plus"></i>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}