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
  PanelColorSettings,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";

import { Fragment } from "@wordpress/element";

import {
  PanelBody,
  ToggleControl,
  RangeControl,
  GradientPicker,
  Button,
  Tooltip,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

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
    headingContent,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    highlightedText,
    highlightedTextImage,
    showHighlightedText,
    highlightedTextColor,
    highlightedTextBackgroundColor,
    counterNumber,
    counterNumberColor,
    showCounterNumber,
    reviewStars,
    showReviewStars,
    reviewStarsColor,
    reviewStarsBackgroundColor,
    reviewText,
    showReviewText,
    reviewTextColor,
    mediaPosition,
    mediaImage,
    mediaImage2,
    showBrands,
    brands,
    brandHeading,
    brandHeadingColor,
  } = attributes;

  const siteURL = window.location.origin;

  const displayReviewStars = () => {
    const stars = [];
    for (let i = 0; i < reviewStars; i++) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    return stars;
  };

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...brands,
      {
        portfolioImage: "",
      },
    ];
    setAttributes({ brands: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...brands];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ brands: updatedStaticPostObj });
  };
  const removeStaticPostObj = (index) => {
    const updatedStaticPostObj = [...brands];
    updatedStaticPostObj.splice(index, 1);
    setAttributes({ brands: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...brands];
    arrayCopy[oldIndex] = brands[newIndex];
    arrayCopy[newIndex] = brands[oldIndex];

    setAttributes({
      brands: arrayCopy,
    });
  };

  return (
    <div
      {...useBlockProps({
        className: "md_crafto_design_service_banner_section",
      })}
    >
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-crafto-design")}>
          <ToggleControl
            label={__("Show Sub Title", "md-crafto-design")}
            checked={showSubTitle}
            onChange={(value) => setAttributes({ showSubTitle: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-crafto-design")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Heading Content", "md-crafto-design")}
            checked={showHeadingContent}
            onChange={(value) => setAttributes({ showHeadingContent: value })}
          />
          <ToggleControl
            label={__("Show Counter Number", "md-crafto-design")}
            checked={showCounterNumber}
            onChange={(value) => setAttributes({ showCounterNumber: value })}
          />
          <ToggleControl
            label={__("Show Review Text", "md-crafto-design")}
            checked={showReviewText}
            onChange={(value) => setAttributes({ showReviewText: value })}
          />
          <ToggleControl
            label={__("Show Brands", "md-crafto-design")}
            checked={showBrands}
            onChange={(value) => setAttributes({ showBrands: value })}
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
        <PanelBody
          title={__("Highlighted Text Settings", "md-crafto-design")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Highlighted Text", "md-crafto-design")}
            checked={showHighlightedText}
            onChange={(value) => setAttributes({ showHighlightedText: value })}
          />
          {showHighlightedText && (
            <Fragment>
              <div className="setting-row">
                <label htmlFor="background-image">
                  {__("Background Image", "md-prime")}
                </label>
                <div>
                  {!highlightedTextImage ? (
                    <MediaUpload
                      onSelect={(selectedImage) => {
                        setAttributes({
                          highlightedTextImage: selectedImage.url,
                        });
                      }}
                      allowedTypes={["image"]}
                      value={highlightedTextImage}
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
                          src={highlightedTextImage}
                          alt="Background-image-preview"
                        />
                      </div>
                      <Button
                        onClick={() => {
                          setAttributes({ highlightedTextImage: "" });
                        }}
                        className="is-link is-destructive"
                      >
                        {__("Remove Image", "md-prime")}
                      </Button>
                    </>
                  )}
                </div>
              </div>
              <PanelColorSettings
                title={__("Highlighted Text Colors", "md-crafto-design")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: highlightedTextColor,
                    onChange: (colorValue) =>
                      setAttributes({ highlightedTextColor: colorValue }),
                    label: __("Text Color", "md-crafto-design"),
                  },
                ]}
              />
              <div className="settings-row">
                <label htmlFor="highlightedTextColor">
                  {__("Highlighted Text Background Color", "md-crafto-design")}
                </label>
                <GradientPicker
                  id="highlightedTextColor"
                  value={
                    highlightedTextBackgroundColor
                      ? highlightedTextBackgroundColor
                      : null
                  }
                  onChange={(value) =>
                    setAttributes({ highlightedTextBackgroundColor: value })
                  }
                  gradients={[
                    {
                      name: "Gradient 1",
                      gradient:
                        "linear-gradient(to right, #f7693c, #c74e45, #7d3785, #582d9f, #3928af)",
                    },
                    {
                      name: "Gradient 2",
                      gradient: "linear-gradient(45deg, #f3ec78, #af4261)",
                    },
                    {
                      name: "Gradient 3",
                      gradient: "linear-gradient(45deg, #f3ec78, #af4261)",
                    },
                  ]}
                />
              </div>
            </Fragment>
          )}
        </PanelBody>
        <PanelBody
          title={__("Review Stars Settings", "md-crafto-design")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Review Stars", "md-crafto-design")}
            checked={showReviewStars}
            onChange={(value) => setAttributes({ showReviewStars: value })}
          />
          {showReviewStars && (
            <Fragment>
              <RangeControl
                label={__("Number of Stars", "md-crafto-design")}
                value={reviewStars}
                onChange={(value) => setAttributes({ reviewStars: value })}
                min={1}
                max={5}
              />
              <PanelColorSettings
                title={__("Review Stars Colors", "md-crafto-design")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: reviewStarsColor,
                    onChange: (colorValue) =>
                      setAttributes({ reviewStarsColor: colorValue }),
                    label: __("Stars Color", "md-crafto-design"),
                  },
                  {
                    value: reviewStarsBackgroundColor,
                    onChange: (colorValue) =>
                      setAttributes({ reviewStarsBackgroundColor: colorValue }),
                    label: __("Background Color", "md-crafto-design"),
                  },
                ]}
              />
            </Fragment>
          )}
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-crafto-design")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-crafto-design")}
            initialOpen={false}
            colorSettings={[
              {
                value: subTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ subTitleColor: colorValue }),
                label: __("Sub Title Color", "md-crafto-design"),
              },
              {
                value: titleColor,
                onChange: (colorValue) =>
                  setAttributes({ titleColor: colorValue }),
                label: __("Title Color", "md-crafto-design"),
              },
              {
                value: headingContentColor,
                onChange: (colorValue) =>
                  setAttributes({ headingContentColor: colorValue }),
                label: __("Heading Content Color", "md-crafto-design"),
              },
              {
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color", "md-crafto-design"),
              },
              {
                value: counterNumberColor,
                onChange: (colorValue) =>
                  setAttributes({ counterNumberColor: colorValue }),
                label: __("Counter Number Color", "md-crafto-design"),
              },
              {
                value: reviewTextColor,
                onChange: (colorValue) =>
                  setAttributes({ reviewTextColor: colorValue }),
                label: __("Review Text Color", "md-crafto-design"),
              },
              {
                value: brandHeadingColor,
                onChange: (colorValue) =>
                  setAttributes({ brandHeadingColor: colorValue }),
                label: __("Brand Heading Color", "md-crafto-design"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`md_crafto_design_service_banner_wrap`}>
        <div
          className="md_crafto_design_service_banner"
          style={{ backgroundColor }}
        >
          <div
            className="container"
            style={{
              flexDirection: mediaPosition === "right" ? "row-reverse" : "row",
            }}
          >
            <div className="md_crafto_design_service_banner__inner">
              <div className="md_crafto_design_service_banner__heading">
                {showSubTitle && (
                  <RichText
                    tagName="h4"
                    value={subTitle}
                    onChange={(value) => setAttributes({ subTitle: value })}
                    placeholder={__("Enter Sub Title", "md-crafto-design")}
                    style={{
                      color: subTitleColor,
                    }}
                  />
                )}
                {showTitle && (
                  <RichText
                    tagName="h2"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__("Enter Title", "md-crafto-design")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText
                    tagName="p"
                    className="md_crafto_design_service_banner__content"
                    value={headingContent}
                    onChange={(value) =>
                      setAttributes({ headingContent: value })
                    }
                    placeholder={__("Enter Content", "md-crafto-design")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
              </div>
              {showHighlightedText && (
                <div
                  className="md_crafto_design_service_banner__highlighted_text"
                  style={{
                    color: highlightedTextColor,
                    background: highlightedTextBackgroundColor,
                  }}
                >
                  {highlightedTextImage && (
                    <img src={highlightedTextImage} alt="Highlighted Text" />
                  )}
                  <RichText
                    tagName="p"
                    value={highlightedText}
                    onChange={(value) =>
                      setAttributes({ highlightedText: value })
                    }
                    placeholder={__(
                      "Enter Highlighted Text",
                      "md-crafto-design"
                    )}
                  />
                </div>
              )}
              <div className="md_crafto_design_service_banner__footer">
                <div className="md_crafto_design_service_banner__footer_left">
                  {showCounterNumber && (
                    <div
                      className="md_crafto_design_service_banner__counter"
                      style={{ color: counterNumberColor }}
                    >
                      <RichText
                        tagName="p"
                        value={counterNumber}
                        onChange={(value) =>
                          setAttributes({ counterNumber: value })
                        }
                        placeholder={__(
                          "Enter Counter Number",
                          "md-crafto-design"
                        )}
                      />
                    </div>
                  )}
                  {showReviewStars && (
                    <div
                      className="md_crafto_design_service_banner__review_stars"
                      style={{
                        color: reviewStarsColor,
                        backgroundColor: reviewStarsBackgroundColor,
                      }}
                    >
                      {displayReviewStars()}
                    </div>
                  )}
                </div>
                <div className="md_crafto_design_service_banner__footer_right">
                  {showReviewText && (
                    <div
                      className="md_crafto_design_service_banner__review_text"
                      style={{ color: reviewTextColor }}
                    >
                      <RichText
                        tagName="p"
                        value={reviewText}
                        onChange={(value) =>
                          setAttributes({ reviewText: value })
                        }
                        placeholder={__(
                          "Enter Review Text",
                          "md-crafto-design"
                        )}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="md_crafto_design_service_banner__media">
              <div className="md-prime-block-control image-preview image-controle-visible-hover md_crafto_design_image_banner__media">
                <div className={`image-controls small-icons icon-center-fixed`}>
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
                                    setAttributes({ mediaImage: "" })
                                  }
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      setAttributes({ mediaImage: "" });
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
                <img
                  src={mediaImage ? mediaImage : siteURL + placeholder}
                  alt={"slider"}
                />
              </div>
              <div className="md-prime-block-control image-preview image-controle-visible-hover md_crafto_design_image_banner__media2">
                <div className={`image-controls small-icons icon-center-fixed`}>
                  <MediaUploadCheck>
                    <MediaUpload
                      onSelect={(media) =>
                        setAttributes({ mediaImage2: media.url })
                      }
                      allowedTypes={["image"]}
                      value={mediaImage2}
                      render={({ open }) => (
                        <>
                          {mediaImage2 ? (
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
                                    setAttributes({ mediaImage2: "" })
                                  }
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      setAttributes({ mediaImage2: "" });
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
                <img
                  src={mediaImage2 ? mediaImage2 : siteURL + placeholder}
                  alt={"slider"}
                />
              </div>
            </div>
          </div>
          {showBrands && (
            <div className="md_crafto_design_service_banner__brands">
              <div className="container">
                <div className="md_crafto_design_service_banner__brands_inner">
                  <div className="md_crafto_design_service_banner__brands_heading">
                    <RichText
                      tagName="h3"
                      value={brandHeading}
                      onChange={(value) =>
                        setAttributes({ brandHeading: value })
                      }
                      placeholder={__(
                        "Heading",
                        "md-crafto-design"
                      )}
                      style={{ color: brandHeadingColor }}
                    />
                    <i className="bi bi-heart-fill heart-icon"></i>
                  </div>
                  <div className="md_brands_items">
                    <div className="md_brands_item__inner">
                      {brands.map((item, index) => (
                        <div
                          key={index}
                          className={"md_brands_item show-items-hover-wrap"}
                        >
                          <div
                            className={`item-action-wrap show-items-hover pos-abs`}
                          >
                            <div className="move-item">
                              {0 < index && (
                                <Tooltip
                                  text={__("Move Left", "md-crafto-design")}
                                >
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
                              {index + 1 < brands.length && (
                                <Tooltip
                                  text={__("Move Right", "md-crafto-design")}
                                >
                                  <span
                                    className="dashicons dashicons-arrow-right-alt move-right"
                                    role="button"
                                    tabIndex={0}
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
                            {1 < brands.length && (
                              <Tooltip text={__("Remove Item", "md-prime")}>
                                <i
                                  className="remove-item dashicons dashicons-no-alt"
                                  role="button"
                                  tabIndex={0}
                                  onClick={() => {
                                    const toDelete =
                                      // eslint-disable-next-line no-alert
                                      confirm(
                                        __(
                                          "Are you sure you want to delete this item?",
                                          "md-prime"
                                        )
                                      );
                                    if (toDelete === true) {
                                      removeStaticPostObj(index);
                                    }
                                  }}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      // Simulate click behavior for keyboard users
                                      e.preventDefault(); // Prevent default action for space key
                                      const toDelete =
                                        // eslint-disable-next-line no-alert
                                        confirm(
                                          __(
                                            "Are you sure you want to delete this item?",
                                            "md-prime"
                                          )
                                        );
                                      if (toDelete === true) {
                                        removeStaticPostObj(index);
                                      }
                                    }
                                  }}
                                  aria-label={__(
                                    "Remove this item",
                                    "md-prime"
                                  )}
                                ></i>
                              </Tooltip>
                            )}
                          </div>
                          <div className="md_brands_item_inner">
                            <div className="md-prime-block-control image-preview image-controle-visible-hover md_brands_item_inner__media">
                              <div
                                className={`image-controls small-icons icon-center-fixed`}
                              >
                                <MediaUploadCheck>
                                  <MediaUpload
                                    onSelect={(media) =>
                                      updateStaticPostObj(
                                        index,
                                        "portfolioImage",
                                        media.url
                                      )
                                    }
                                    allowedTypes={["image"]}
                                    value={item.portfolioImage}
                                    render={({ open }) => (
                                      <>
                                        {item.portfolioImage ? (
                                          <>
                                            <Tooltip
                                              text={__(
                                                "Edit Image",
                                                "md-prime"
                                              )}
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
                                              text={__(
                                                "Remove Image",
                                                "md-prime"
                                              )}
                                            >
                                              <i
                                                className="dashicons dashicons-no-alt remove-image"
                                                onClick={() =>
                                                  updateStaticPostObj(
                                                    index,
                                                    "portfolioImage",
                                                    ""
                                                  )
                                                }
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
                                                      "portfolioImage",
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
                              <img
                                src={
                                  item.portfolioImage
                                    ? item.portfolioImage
                                    : siteURL + placeholder
                                }
                                alt={"slider"}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className="add-item-wrap"
                      onClick={addStaticPostObj}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          addStaticPostObj();
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
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
