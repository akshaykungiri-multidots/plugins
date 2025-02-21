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
  GradientPicker,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

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
    subTitle,
    title,
    headingContent,
    buttonLink,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showButton,
    buttonColor,
    buttonBackgroundColor,
    buttonHoverColor,
    buttonHoverBackgroundColor,
    joinUsText,
    joinUsTextColor,
    showJoinUs,
    showTestimonials,
    testimonials,
    showSlideAuthorImage,
    showSlideAuthorName,
    showSlideAuthorDesignation,
    showSlideTestimonialText,
    showSlideRating,
    showSlideDateOfTestimonial,
    slideAuthorNameColor,
    slideAuthorDesignationColor,
    slideTestimonialTextColor,
    slideRatingTextColor,
    slideDateOfTestimonialColor,
  } = attributes;

  const siteURL = window.location.origin;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...testimonials,
      {
        id: testimonials.length + 1,
        authorImage: "",
        authorName: "",
        authorDesignation: "",
        testimonialText: "",
        rating: "",
        dateOfTestimonial: "",
      },
    ];
    setAttributes({ testimonials: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...testimonials];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ testimonials: updatedStaticPostObj });
  };
  const removeStaticPostObj = (index) => {
    const updatedStaticPostObj = [...testimonials];
    updatedStaticPostObj.splice(index, 1);
    setAttributes({ testimonials: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...testimonials];
    arrayCopy[oldIndex] = testimonials[newIndex];
    arrayCopy[newIndex] = testimonials[oldIndex];

    setAttributes({
      testimonials: arrayCopy,
    });
  };

  const displaySlideReviewStars = (rating) => {
    const stars = [];
    if (isNaN(rating)) {
      rating = 0;
    }
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="fa fa-star"></i>);
    }
    return stars;
  };

  return (
    <div {...useBlockProps({ className: "md_porto_testimonials_section" })}>
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
            label={__("Show Heading Content", "md-porto")}
            checked={showHeadingContent}
            onChange={(value) => setAttributes({ showHeadingContent: value })}
          />
          <ToggleControl
            label={__("Show Join Us", "md-porto")}
            checked={showJoinUs}
            onChange={(value) => setAttributes({ showJoinUs: value })}
          />
        </PanelBody>
        <PanelBody title={__("Testimonials Settings", "md-porto")}>
          <ToggleControl
            label={__("Show Testimonials", "md-porto")}
            checked={showTestimonials}
            onChange={(value) => setAttributes({ showTestimonials: value })}
          />
          {showTestimonials && (
            <div className="settings-row">
              <ToggleControl
                label={__("Show Slide Author Image", "md-porto")}
                checked={showSlideAuthorImage}
                onChange={(value) =>
                  setAttributes({ showSlideAuthorImage: value })
                }
              />
              <ToggleControl
                label={__("Show Slide Author Name", "md-porto")}
                checked={showSlideAuthorName}
                onChange={(value) =>
                  setAttributes({ showSlideAuthorName: value })
                }
              />
              <ToggleControl
                label={__("Show Slide Author Designation", "md-porto")}
                checked={showSlideAuthorDesignation}
                onChange={(value) =>
                  setAttributes({ showSlideAuthorDesignation: value })
                }
              />
              <ToggleControl
                label={__("Show Slide Testimonial Text", "md-porto")}
                checked={showSlideTestimonialText}
                onChange={(value) =>
                  setAttributes({ showSlideTestimonialText: value })
                }
              />
              <ToggleControl
                label={__("Show Slide Rating", "md-porto")}
                checked={showSlideRating}
                onChange={(value) => setAttributes({ showSlideRating: value })}
              />
              <ToggleControl
                label={__("Show Slide Date Of Testimonial", "md-porto")}
                checked={showSlideDateOfTestimonial}
                onChange={(value) =>
                  setAttributes({ showSlideDateOfTestimonial: value })
                }
              />
              <PanelColorSettings
                title={__("Color Settings", "md-porto")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: slideAuthorNameColor,
                    onChange: (value) =>
                      setAttributes({ slideAuthorNameColor: value }),
                    label: __("Slide Author Name Color", "md-porto"),
                  },
                  {
                    value: slideAuthorDesignationColor,
                    onChange: (value) =>
                      setAttributes({ slideAuthorDesignationColor: value }),
                    label: __("Slide Author Designation Color", "md-porto"),
                  },
                  {
                    value: slideTestimonialTextColor,
                    onChange: (value) =>
                      setAttributes({ slideTestimonialTextColor: value }),
                    label: __("Slide Testimonial Text Color", "md-porto"),
                  },
                  {
                    value: slideRatingTextColor,
                    onChange: (value) =>
                      setAttributes({ slideRatingTextColor: value }),
                    label: __("Slide Rating Text Color", "md-porto"),
                  },
                  {
                    value: slideDateOfTestimonialColor,
                    onChange: (value) =>
                      setAttributes({ slideDateOfTestimonialColor: value }),
                    label: __("Slide Date Of Testimonial Color", "md-porto"),
                  },
                ]}
              />
            </div>
          )}
        </PanelBody>
        <PanelBody title={__("Button Settings")} initialOpen={false}>
          <ToggleControl
            label={__("Show Button", "md-porto")}
            checked={showButton}
            onChange={(value) => setAttributes({ showButton: value })}
          />
          {showButton && (
            <div className="settings-row">
              <PanelColorSettings
                title={__("Button Color Settings", "md-porto")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: buttonColor,
                    onChange: (newColor) =>
                      setAttributes({ buttonColor: newColor }),
                    label: __("Button Font Color"),
                  },
                  {
                    value: buttonHoverColor,
                    onChange: (newColor) =>
                      setAttributes({ buttonHoverColor: newColor }),
                    label: __("Button Hover Font Color"),
                  },
                ]}
              />
              <div className="settings-row">
                <label htmlFor="buttonBackgroundColor">
                  {__("Button Background Color")}
                </label>
                <GradientPicker
                  id="buttonBackgroundColor"
                  label={__("Button Background Color")}
                  value={buttonBackgroundColor ? buttonBackgroundColor : null}
                  onChange={(value) =>
                    setAttributes({ buttonBackgroundColor: value })
                  }
                  gradients={[
                    {
                      name: "Gradient 1",
                      gradient:
                        "linear-gradient(90deg, #C73727 0%, #E76A24 100.28%)",
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
              <div className="settings-row">
                <label htmlFor="buttonHoverBackgroundColor">
                  {__("Button Hover Background Color")}
                </label>
                <GradientPicker
                  id="buttonHoverBackgroundColor"
                  label={__("Button Hover Background Color")}
                  value={
                    buttonHoverBackgroundColor
                      ? buttonHoverBackgroundColor
                      : null
                  }
                  onChange={(value) =>
                    setAttributes({ buttonHoverBackgroundColor: value })
                  }
                  gradients={[
                    {
                      name: "Gradient 1",
                      gradient:
                        "linear-gradient(90deg, #C73727 0%, #E76A24 100.28%)",
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
            </div>
          )}
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
                value: titleColor,
                onChange: (colorValue) =>
                  setAttributes({ titleColor: colorValue }),
                label: __("Title Color", "md-porto"),
              },
              {
                value: headingContentColor,
                onChange: (colorValue) =>
                  setAttributes({ headingContentColor: colorValue }),
                label: __("Heading Content Color", "md-porto"),
              },
              {
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color", "md-porto"),
              },
              {
                value: joinUsTextColor,
                onChange: (colorValue) =>
                  setAttributes({ joinUsTextColor: colorValue }),
                label: __("Join Us Text Color", "md-porto"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`md_porto_testimonials_wrap`}>
        <style>
          {`
            .md_porto_testimonials__btn .md_btn {
              color: ${buttonColor};
              background: ${buttonBackgroundColor};
              &:before {
                background: ${buttonBackgroundColor};
              }
            }
            .md_porto_testimonials__btn .md_btn:hover {
              color: ${buttonHoverColor} !important;
              background: ${buttonHoverBackgroundColor};
              &:before {
                background: ${buttonHoverBackgroundColor};
              }
            }
          `}
        </style>
        <div className="md_porto_testimonials" style={{ backgroundColor }}>
          <div className="container">
            <div className="md_porto_testimonials__inner">
              <div className="md_porto_testimonials__heading">
                {showSubTitle && (
                  <RichText
                    tagName="h4"
                    value={subTitle}
                    onChange={(value) => setAttributes({ subTitle: value })}
                    placeholder={__("Enter Sub Title", "md-porto")}
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
                    placeholder={__("Enter Title", "md-porto")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText
                    tagName="p"
                    className="md_porto_testimonials__content"
                    value={headingContent}
                    onChange={(value) =>
                      setAttributes({ headingContent: value })
                    }
                    placeholder={__("Enter Content", "md-porto")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                {showJoinUs && (
                  <div className="md_porto_testimonials__join_us">
                    <i className="fa fa-users"></i>
                    <RichText
                      tagName="p"
                      className=""
                      value={joinUsText}
                      onChange={(value) => setAttributes({ joinUsText: value })}
                      placeholder={__("Enter Join Us Text", "md-porto")}
                      style={{
                        color: joinUsTextColor,
                      }}
                    />
                  </div>
                )}
                <div className="md_btn__wrapper md_porto_testimonials__btn">
                  {showButton && (
                    <RichText
                      className="md_btn md_btn__arrow"
                      tagName="p"
                      value={buttonLink}
                      onChange={(value) => setAttributes({ buttonLink: value })}
                      placeholder={__("Enter Button Text", "md-porto")}
                    />
                  )}
                </div>
              </div>
              {showTestimonials && (
                <div className="md_porto_testimonials__slider">
                  {testimonials.map((item, index) => (
                    <div
                      className={`md_customer_stories_grid_item show-items-hover-wrap"`}
                      key={index}
                    >
                      <div
                        className={`item-action-wrap show-items-hover pos-abs`}
                      >
                        <div className="move-item">
                          {0 < index && (
                            <Tooltip text={__("Move Left", "md-crafto")}>
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
                          {index + 1 < testimonials.length && (
                            <Tooltip text={__("Move Right", "md-crafto")}>
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
                        {1 < testimonials.length && (
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
                              aria-label={__("Remove this item", "md-prime")}
                            ></i>
                          </Tooltip>
                        )}
                      </div>
                      <div className="md_customer_stories_grid_item__inner">
                        <div className="md_customer_stories_grid_item__authorHeading">
                          {showSlideAuthorImage && (
                            <div className="md-prime-block-control image-preview image-controle-visible-hover md_customer_stories_grid_item__authoImage">
                              <div
                                className={`image-controls small-icons icon-center-fixed`}
                              >
                                <MediaUploadCheck>
                                  <MediaUpload
                                    onSelect={(media) =>
                                      updateStaticPostObj(
                                        index,
                                        "authorImage",
                                        media.url
                                      )
                                    }
                                    allowedTypes={["image"]}
                                    value={item.authorImage}
                                    render={({ open }) => (
                                      <>
                                        {item.authorImage ? (
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
                                                    "authorImage",
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
                                                      "authorImage",
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
                                  item.authorImage
                                    ? item.authorImage
                                    : siteURL + placeholder
                                }
                                alt={"slider"}
                              />
                            </div>
                          )}
                          <div className="md_customer_stories_grid_item__authorDetails">
                            {showSlideAuthorName && (
                              <RichText
                                tagName="h3"
                                className="md_customer_stories_grid_item__authorName"
                                value={item.authorName}
                                onChange={(value) =>
                                  updateStaticPostObj(
                                    index,
                                    "authorName",
                                    value
                                  )
                                }
                                placeholder={__("Author Name", "md-prime")}
                                style={{ color: slideAuthorNameColor }}
                              />
                            )}
                            {showSlideAuthorDesignation && (
                              <RichText
                                tagName="p"
                                className="md_customer_stories_grid_item__authorDesignation"
                                value={item.authorDesignation}
                                onChange={(value) =>
                                  updateStaticPostObj(
                                    index,
                                    "authorDesignation",
                                    value
                                  )
                                }
                                placeholder={__(
                                  "Author Designation",
                                  "md-prime"
                                )}
                                style={{ color: slideAuthorDesignationColor }}
                              />
                            )}
                          </div>
                        </div>
                        <div className="md_customer_stories_grid_item__content">
                          {showSlideTestimonialText && (
                            <RichText
                              tagName="p"
                              className="md_customer_stories_grid_item__testimonialText"
                              value={item.testimonialText}
                              onChange={(value) =>
                                updateStaticPostObj(
                                  index,
                                  "testimonialText",
                                  value
                                )
                              }
                              placeholder={__("Testimonial Text", "md-prime")}
                              style={{ color: slideTestimonialTextColor }}
                            />
                          )}
                        </div>
                        <div className="md_customer_stories_grid_item__rating">
                          {showSlideRating && (
                            <div className="md_customer_stories_grid_item__ratingStars">
                              <RichText
                                tagName="p"
                                value={item.rating}
                                onChange={(value) =>
                                  updateStaticPostObj(index, "rating", value)
                                }
                                placeholder={__("Rating", "md-prime")}
                                style={{ color: slideRatingTextColor }}
                              />
                              <div className="md_customer_stories_grid_item__ratingStars__stars">
                                {displaySlideReviewStars(item.rating)}
                              </div>
                            </div>
                          )}
                          {showSlideDateOfTestimonial && (
                            <div className="md_customer_stories_grid_item__dateOfTestimonial">
                              <RichText
                                tagName="p"
                                value={item.dateOfTestimonial}
                                onChange={(value) =>
                                  updateStaticPostObj(
                                    index,
                                    "dateOfTestimonial",
                                    value
                                  )
                                }
                                placeholder={__(
                                  "Date Of Testimonial",
                                  "md-prime"
                                )}
                                style={{ color: slideDateOfTestimonialColor }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
