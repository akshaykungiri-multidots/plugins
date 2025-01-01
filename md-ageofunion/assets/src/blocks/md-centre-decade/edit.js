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

import { Fragment, WPElement } from "@wordpress/element";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
  RangeControl,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */

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
    decadeSlider,
    slidesToShow,
    slidesToScroll,
    autoplay,
    infinite,
    showDots,
    showArrows,
    decadeHeading,
    decadeIntroHeading,
    decadeFigureImage,
    decadeFigureText,
    decadeContent,
    showDecadeHeading,
    showDecadeSlider,
    showDecadeIntroHeading,
    showDecadeFigureImage,
    showDecadeFigureText,
    showDecadeContent,
    decadeHeadingColor,
    decadeIntroHeadingColor,
    decadeFigureTextColor,
    decadeContentColor,
    backgroundColor,
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...decadeSlider,
      {
        id: decadeSlider.length + 1,
        image: "",
        imageLink: "",
      },
    ];
    setAttributes({ decadeSlider: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...decadeSlider];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ decadeSlider: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...decadeSlider];
    arrayCopy[oldIndex] = decadeSlider[newIndex];
    arrayCopy[newIndex] = decadeSlider[oldIndex];

    setAttributes({
      decadeSlider: arrayCopy,
    });
  };

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

  return (
    <div {...useBlockProps({ className: "md_centre_decade_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings")} initialOpen={true}>
          <ToggleControl
            label={__("Show decade heading")}
            checked={showDecadeHeading}
            onChange={(value) => setAttributes({ showDecadeHeading: value })}
          />
          <ToggleControl
            label={__("Show decade intro heading")}
            checked={showDecadeIntroHeading}
            onChange={(value) =>
              setAttributes({ showDecadeIntroHeading: value })
            }
          />
          <ToggleControl
            label={__("Show decade figure image")}
            checked={showDecadeFigureImage}
            onChange={(value) =>
              setAttributes({ showDecadeFigureImage: value })
            }
          />
          <ToggleControl
            label={__("Show decade figure text")}
            checked={showDecadeFigureText}
            onChange={(value) => setAttributes({ showDecadeFigureText: value })}
          />
          <ToggleControl
            label={__("Show decade content")}
            checked={showDecadeContent}
            onChange={(value) => setAttributes({ showDecadeContent: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Slider Settings", "md-logo-slider")}
          initialOpen={true}
        >
          <ToggleControl
            label={__("Show Decade Slider", "md-logo-slider")}
            checked={showDecadeSlider}
            onChange={(value) => setAttributes({ showDecadeSlider: value })}
          />
          {showDecadeSlider && (
            <Fragment>
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
            </Fragment>
          )}
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: decadeHeadingColor,
                onChange: (value) =>
                  setAttributes({ decadeHeadingColor: value }),
                label: __("Decade Heading Color"),
              },
              {
                value: decadeIntroHeadingColor,
                onChange: (value) =>
                  setAttributes({ decadeIntroHeadingColor: value }),
                label: __("Decade Intro Heading Color"),
              },
              {
                value: decadeFigureTextColor,
                onChange: (value) =>
                  setAttributes({ decadeFigureTextColor: value }),
                label: __("Decade Figure Text Color"),
              },
              {
                value: decadeContentColor,
                onChange: (value) =>
                  setAttributes({ decadeContentColor: value }),
                label: __("Decade Content Color"),
              },
              {
                value: backgroundColor,
                onChange: (value) => setAttributes({ backgroundColor: value }),
                label: __("Background Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_centre_decade__inner" style={{ backgroundColor }}>
        <div className="md_centre_decade__heading">
          {showDecadeHeading && (
            <RichText
              tagName="div"
              className="md_centre_decade__poster_content__heading"
              value={decadeHeading}
              placeholder={__("Decade Heading", "md-ageofunion")}
              onChange={(value) =>
                setAttributes({ decadeHeading: value })
              }
              style={{ color: decadeHeadingColor }}
            />
          )}
        </div>
        {showDecadeSlider && (
          <div className="md_centre_decade__slider">
            <div className="md_centre_decade__slider__inner">
              <Slider {...settings} className="md_logo_slider__slider">
                {decadeSlider &&
                  decadeSlider.map((postObj, index) => (
                    <div
                      key={postObj.id}
                      className="logo-slide show-items-hover-wrap"
                    >
                      <div className="item-action-wrap show-items-hover small-icons">
                        <div className="move-item">
                          {0 < index && (
                            <Tooltip text={__("Move Left", "md-prime")}>
                              <span
                                className="dashicons dashicons-arrow-left-alt move-left"
                                onClick={() => moveItem(index, index - 1)}
                                onKeyDown={(event) => {
                                  if (
                                    event.key === "Enter" ||
                                    event.key === " "
                                  ) {
                                    moveItem(index, index - 1);
                                  }
                                }}
                                role="button"
                                tabIndex={0}
                                aria-label="Move item left"
                              ></span>
                            </Tooltip>
                          )}
                          {index + 1 < decadeSlider.length && (
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
                        {1 < decadeSlider.length && (
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
                                  const updatedArray = decadeSlider.filter(
                                    (item, itemIndex) => itemIndex !== index
                                  );
                                  setAttributes({
                                    decadeSlider: updatedArray,
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
                                    const updatedArray = decadeSlider.filter(
                                      (item, itemIndex) => itemIndex !== index
                                    );
                                    setAttributes({
                                      decadeSlider: updatedArray,
                                    });
                                  }
                                }
                              }}
                              aria-label="Delete item"
                            ></i>
                          </Tooltip>
                        )}
                      </div>
                      <div className="md_centre_decade__slider__item">
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
                                            text={__(
                                              "Upload Image",
                                              "md-prime"
                                            )}
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
        )}
        <div className="container">
          <div className="md_centre_decade__intro">
            <div className="md_centre_decade__intro__inner">
              {showDecadeIntroHeading && (
                <RichText
                  tagName="h2"
                  className="md_centre_decade__intro__heading"
                  value={decadeIntroHeading}
                  placeholder={__("Decade Intro Heading", "md-ageofunion")}
                  onChange={(value) =>
                    setAttributes({ decadeIntroHeading: value })
                  }
                  style={{ color: decadeIntroHeadingColor }}
                />
              )}
            </div>
          </div>
          <div className="md_centre_decade__grid">
            <figure className="md_centre_decade__grid__figure">
              {showDecadeFigureImage && (
                <div className="md-prime-block-control image-preview image-controle-visible-hover md_centre_decade__centre_decade_image">
                  <div
                    className={`image-controls small-icons icon-center-fixed`}
                  >
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={(media) =>
                          setAttributes({
                            decadeFigureImage: media.url,
                          })
                        }
                        allowedTypes={["image"]}
                        value={decadeFigureImage}
                        render={({ open }) => (
                          <>
                            {decadeFigureImage ? (
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
                                    onClick={() =>
                                      setAttributes({
                                        decadeFigureImage: "",
                                      })
                                    }
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setAttributes({
                                          decadeFigureImage: "",
                                        });
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
                    src={
                      decadeFigureImage
                        ? decadeFigureImage
                        : siteURL + placeholder
                    }
                    alt={"slider"}
                  />
                </div>
              )}
              {showDecadeFigureText && (
                <figcaption className="md_centre_decade__grid__figure__caption">
                  <RichText
                    tagName="p"
                    className="md_centre_decade__grid__figure__caption__text"
                    value={decadeFigureText}
                    placeholder={__("Decade Figure Text", "md-ageofunion")}
                    onChange={(value) =>
                      setAttributes({ decadeFigureText: value })
                    }
                    style={{ color: decadeFigureTextColor }}
                  />
                </figcaption>
              )}
            </figure>
            {showDecadeContent && (
              <div className="md_centre_decade__content">
                <RichText
                  tagName="div"
                  className="md_centre_decade__content__text"
                  value={decadeContent}
                  placeholder={__("Decade Content", "md-ageofunion")}
                  onChange={(value) => setAttributes({ decadeContent: value })}
                  style={{ color: decadeContentColor }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
