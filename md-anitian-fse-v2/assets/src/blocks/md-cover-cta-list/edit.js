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
    subTitle,
    title,
    headingContent,
    buttonLink,
    coverImage,
    backgroundImage,
    enableOverlay,
    backgroundImageOverlay,
    backgroundColor,
    coverCtaStyle,
    titleFontColor,
    headingContentFontColor,
    enablrArc,
    showTitle,
    showHeadingContent,
    showButton,
    showSubTitle,
    subTitleColor,
    ctaListingHeading,
    ctaListing,
    ctaListingIcon,
    showCtaListing,
    ctaListingHeadingColor,
    ctaListingFontColor,
  } = attributes;

  const siteURL = window.location.origin;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...ctaListing,
      {
        id: ctaListing.length + 1,
        ctaListingTitle: "",
      },
    ];
    setAttributes({ ctaListing: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...ctaListing];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ ctaListing: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...ctaListing];
    arrayCopy[oldIndex] = ctaListing[newIndex];
    arrayCopy[newIndex] = ctaListing[oldIndex];

    setAttributes({
      ctaListing: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps({ className: "md_anitian_cover_cta_list_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
          <SelectControl
            label={__("Cover CTA Style", "md-anitian-fse-v2")}
            value={coverCtaStyle}
            options={[
              { label: "Style 1", value: "style1" },
              { label: "Style 2", value: "style2" },
            ]}
            onChange={(value) => setAttributes({ coverCtaStyle: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Toggle Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Enable Arc", "md-anitian-fse-v2")}
            checked={enablrArc}
            onChange={(value) => setAttributes({ enablrArc: value })}
          />
          <ToggleControl
            label={__("Show Subt Title", "md-anitian-fse-v2")}
            checked={showSubTitle}
            onChange={(value) => setAttributes({ showSubTitle: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-anitian-fse-v2")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Heading Content", "md-anitian-fse-v2")}
            checked={showHeadingContent}
            onChange={(value) => setAttributes({ showHeadingContent: value })}
          />
          <ToggleControl
            label={__("Show Button", "md-anitian-fse-v2")}
            checked={showButton}
            onChange={(value) => setAttributes({ showButton: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("CTA Listing Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show CTA Listing", "md-anitian-fse-v2")}
            checked={showCtaListing}
            onChange={(value) => setAttributes({ showCtaListing: value })}
          />
          {showCtaListing && (
            <div className="setting-row">
              <label htmlFor="background-image">
                {__("CTA Listing Icon", "md-prime")}
              </label>
              <div>
                {!ctaListingIcon ? (
                  <MediaUpload
                    onSelect={(selectedImage) => {
                      setAttributes({
                        ctaListingIcon: selectedImage.url,
                      });
                    }}
                    allowedTypes={["image"]}
                    value={ctaListingIcon}
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
                        src={ctaListingIcon}
                        alt="Background-image-preview"
                      />
                    </div>
                    <Button
                      onClick={() => {
                        setAttributes({
                          ctaListingIcon: "",
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
          )}
          {showCtaListing && (
            <PanelColorSettings
              title={__("CTA Listing Color Settings", "md-storyful-fse-full")}
              initialOpen={false}
              colorSettings={[
                {
                  value: ctaListingHeadingColor,
                  onChange: (value) =>
                    setAttributes({ ctaListingHeadingColor: value }),
                  label: __("Heading Color", "md-storyful-fse-full"),
                },
                {
                  value: ctaListingFontColor,
                  onChange: (value) =>
                    setAttributes({ ctaListingFontColor: value }),
                  label: __("Font Color", "md-storyful-fse-full"),
                },
              ]}
            />
          )}
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
              {!backgroundImage ? (
                <MediaUpload
                  onSelect={(selectedImage) => {
                    setAttributes({
                      backgroundImage: selectedImage.url,
                    });
                  }}
                  allowedTypes={["image"]}
                  value={backgroundImage}
                  render={({ open }) => (
                    <Button onClick={open} className="button button-large">
                      {__("Upload Image", "md-prime")}
                    </Button>
                  )}
                />
              ) : (
                <>
                  <div className="image-preview">
                    <img src={backgroundImage} alt="Background-image-preview" />
                  </div>
                  <Button
                    onClick={() => {
                      setAttributes({
                        backgroundImage: "",
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
          <div className="setting-row">
            <ToggleControl
              label={__("Enable Overlay", "md-anitian-fse-v2")}
              checked={enableOverlay}
              onChange={(value) => setAttributes({ enableOverlay: value })}
            />
            {enableOverlay && (
              <PanelColorSettings
                title={__("Overlay Color Settings", "md-storyful-fse-full")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: backgroundImageOverlay,
                    onChange: (value) =>
                      setAttributes({ backgroundImageOverlay: value }),
                    label: __("Overlay Color", "md-storyful-fse-full"),
                  },
                ]}
              />
            )}
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
                value: titleFontColor,
                onChange: (value) => setAttributes({ titleFontColor: value }),
                label: __("Title Color", "md-storyful-fse-full"),
              },
              {
                value: subTitleColor,
                onChange: (value) => setAttributes({ subTitleColor: value }),
                label: __("Sub Title Color", "md-storyful-fse-full"),
              },
              {
                value: headingContentFontColor,
                onChange: (value) =>
                  setAttributes({ headingContentFontColor: value }),
                label: __("Heading Content Color", "md-storyful-fse-full"),
              },
              {
                value: backgroundColor,
                onChange: (value) => setAttributes({ backgroundColor: value }),
                label: __("Background Color", "md-storyful-fse-full"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className={`md_anitian_cover_cta_list_wrap ${coverCtaStyle}`}
        style={{
          backgroundColor: `${enableOverlay ? backgroundImageOverlay : ""}`,
        }}
      >
        {enablrArc && <div className="md_anitian_cover_cta_list_arc"></div>}
        <div
          className="md_anitian_cover_cta_list"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {backgroundColor && (
            <div
              className="background_overlay"
              style={{
                background: `linear-gradient(180deg, ${backgroundColor} 0%, ${backgroundColor} 100%)`,
              }}
            ></div>
          )}
          <div className="container">
            <div className="md_anitian_cover_cta_list__inner">
              <div className="md_anitian_cover_cta_list__heading">
                {showSubTitle && (
                  <RichText
                    tagName="h4"
                    className="header-page-title__sub-heading"
                    value={subTitle}
                    onChange={(value) => setAttributes({ subTitle: value })}
                    placeholder={__("Enter Sub Title", "md-anitian-fse-v2")}
                    style={{ color: subTitleColor }}
                  />
                )}
                {showTitle && (
                  <RichText
                    tagName="h1"
                    className="header-page-title__heading"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__("Enter Title", "md-anitian-fse-v2")}
                    style={{ color: titleFontColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText
                    tagName="p"
                    value={headingContent}
                    onChange={(value) =>
                      setAttributes({ headingContent: value })
                    }
                    placeholder={__("Enter Content", "md-anitian-fse-v2")}
                    style={{
                      color: headingContentFontColor,
                    }}
                  />
                )}
                {showButton && (
                  <div className="md_anitian_btn_wrap">
                    <RichText
                      tagName="div"
                      className="md_anitian_cover_cta_list__btn btn-anitian"
                      value={buttonLink}
                      onChange={(value) => setAttributes({ buttonLink: value })}
                      placeholder={__("Enter Button Link", "md-anitian-fse-v2")}
                    />
                  </div>
                )}
                {showCtaListing && (
                  <div className="md_anitian_cover_cta_list__cta_listing">
                    <div className="md_anitian_cover_cta_list__cta_listing__heading">
                      <RichText
                        tagName="h2"
                        className="md_anitian_cover_cta_list__cta_listing__heading__title"
                        value={ctaListingHeading}
                        onChange={(value) =>
                          setAttributes({ ctaListingHeading: value })
                        }
                        placeholder={__(
                          "Enter CTA Listing Heading",
                          "md-anitian-fse-v2"
                        )}
                        style={{ color: ctaListingHeadingColor }}
                      />
                    </div>
                    <div className="md_anitian_cover_cta_list__cta_listing__list">
                      {ctaListing &&
                        ctaListing.map((item, index) => (
                          <div
                            className="md_anitian_cover_cta_list__cta_listing__list__item show-items-hover-wrap"
                            key={index}
                          >
                            <div
                              className={`item-action-wrap show-items-hover pos-abs`}
                            >
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
                                {index + 1 < ctaListing.length && (
                                  <Tooltip text={__("Move Right", "md-prime")}>
                                    <span
                                      className="dashicons dashicons-arrow-right-alt move-right"
                                      role="button"
                                      tabIndex={0}
                                      onClick={() => moveItem(index, index + 1)}
                                      onKeyDown={(e) => {
                                        if (
                                          e.key === "Enter" ||
                                          e.key === " "
                                        ) {
                                          moveItem(index, index + 1);
                                        }
                                      }}
                                      aria-label="Move item right"
                                    ></span>
                                  </Tooltip>
                                )}
                              </div>
                              {1 < ctaListing.length && (
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
                                        const updatedArray =
                                          ctaListing.filter(
                                            (itemObj, itemIndex) =>
                                              itemIndex !== index
                                          );
                                        setAttributes({
                                          ctaListing: updatedArray,
                                        });
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
                                          const updatedArray =
                                            ctaListing.filter(
                                              (itemObj, itemIndex) =>
                                                itemIndex !== index
                                            );
                                          setAttributes({
                                            ctaListing: updatedArray,
                                          });
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
                            {ctaListingIcon ? (
                              <div className="md_anitian_cover_cta_list__cta_listing__list__item__image">
                                <img src={ctaListingIcon} alt="icon" />
                              </div>
                            ) : (
                              <div className="md_anitian_cover_cta_list__cta_listing__list__item__icon">
                                <i className="fa fa-check-circle"></i>
                              </div>
                            )}
                            <RichText
                              tagName="p"
                              className="md_anitian_cover_cta_list__cta_listing__list__item__title"
                              value={item.ctaListingTitle}
                              onChange={(value) =>
                                updateStaticPostObj(
                                  index,
                                  "ctaListingTitle",
                                  value
                                )
                              }
                              placeholder={__(
                                "Enter CTA Listing Title",
                                "md-anitian-fse-v2"
                              )}
                              style={{ color: ctaListingFontColor }}
                            />
                          </div>
                        ))}
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
              </div>
              <div className="md_anitian_cover_cta_list__image">
                <div className="cover_cta__image">
                  <div className="md-prime-block-control image-preview image-controle-visible-hover">
                    <div
                      className={`image-controls small-icons icon-center-fixed`}
                    >
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={(media) =>
                            setAttributes({
                              coverImage: media.url,
                            })
                          }
                          allowedTypes={["image"]}
                          value={coverImage}
                          render={({ open }) => (
                            <>
                              {coverImage ? (
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
                                            coverImage: "",
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
                                          setAttributes({ coverImage: "" });
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
                    {coverImage ? (
                      <img src={coverImage} alt={title} />
                    ) : (
                      <img src={siteURL + placeholder} alt={title} />
                    )}
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
