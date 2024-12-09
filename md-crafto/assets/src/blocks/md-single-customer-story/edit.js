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

import { Fragment } from "@wordpress/element";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
  SelectControl,
  RangeControl,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

import fontIcons from "./fontIcons";

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
    companyLogo,
    title,
    headingContent,
    socialIcon,
    authorName,
    authorPosition,
    authorImage,
    mediaPosition,
    authorRating,
    authorRatingStars,
    authorRatingDescription,
    titleColor,
    headingContentColor,
    authorNameColor,
    authorPositionColor,
    authorRatingColor,
    authorRatingDescriptionColor,
    showCompanyLogo,
    showTitle,
    showHeadingContent,
    showSocialIcon,
    showAuthorName,
    showAuthorPosition,
    showAuthorImage,
    showAuthorRating,
    showAuthorRatingStars,
    showAuthorRatingDescription,
  } = attributes;

  const siteURL = window.location.origin;

  return (
    <div
      {...useBlockProps({
        className: "md_crafto_single_customer_story_section",
      })}
    >
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-crafto")}>
          <ToggleControl
            label={__("Show Company Logo", "md-crafto")}
            checked={showCompanyLogo}
            onChange={(value) => setAttributes({ showCompanyLogo: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-crafto")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Heading Content", "md-crafto")}
            checked={showHeadingContent}
            onChange={(value) => setAttributes({ showHeadingContent: value })}
          />
          <ToggleControl
            label={__("Show Author Name", "md-crafto")}
            checked={showAuthorName}
            onChange={(value) => setAttributes({ showAuthorName: value })}
          />
          <ToggleControl
            label={__("Show Author Position", "md-crafto")}
            checked={showAuthorPosition}
            onChange={(value) => setAttributes({ showAuthorPosition: value })}
          />
          <ToggleControl
            label={__("Show Author Image", "md-crafto")}
            checked={showAuthorImage}
            onChange={(value) => setAttributes({ showAuthorImage: value })}
          />
          <ToggleControl
            label={__("Show Author Rating", "md-crafto")}
            checked={showAuthorRating}
            onChange={(value) => setAttributes({ showAuthorRating: value })}
          />
          <ToggleControl
            label={__("Show Author Rating Stars", "md-crafto")}
            checked={showAuthorRatingStars}
            onChange={(value) =>
              setAttributes({ showAuthorRatingStars: value })
            }
          />
          <ToggleControl
            label={__("Show Author Rating Description", "md-crafto")}
            checked={showAuthorRatingDescription}
            onChange={(value) =>
              setAttributes({ showAuthorRatingDescription: value })
            }
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
        <PanelBody title={__("Social Icon Settings", "md-crafto")}>
          <ToggleControl
            label={__("Show Social Icon", "md-crafto")}
            checked={showSocialIcon}
            onChange={(value) => setAttributes({ showSocialIcon: value })}
          />
          {showSocialIcon && (
            <div className="md_crafto_features_list_item_icon">
              <label htmlFor={`select-icon`}>{__("Select Icon")}</label>
              <SelectControl
                id={`select-icon`}
                closeMenuOnSelect={false}
                value={socialIcon}
                options={fontIcons}
                onChange={(value) => setAttributes({ socialIcon: value })}
              />
              <div className="md_crafto_features_list_item_inner">
                <i className={"fa " + socialIcon}></i>
              </div>
            </div>
          )}
        </PanelBody>
        <PanelBody title={__("Rating Settings", "md-crafto")}>
          <ToggleControl
            label={__("Show Author Rating Stars", "md-crafto")}
            checked={showAuthorRatingStars}
            onChange={(value) =>
              setAttributes({ showAuthorRatingStars: value })
            }
          />
          {showAuthorRatingStars && (
            <RangeControl
              label={__("Rating", "md-crafto")}
              value={authorRatingStars}
              onChange={(value) => setAttributes({ authorRatingStars: value })}
              min={0}
              max={5}
            />
          )}
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-crafto")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Typography Colors", "md-crafto")}
            initialOpen={false}
            colorSettings={[
              {
                value: titleColor,
                onChange: (colorValue) =>
                  setAttributes({ titleColor: colorValue }),
                label: __("Title Color", "md-crafto"),
              },
              {
                value: headingContentColor,
                onChange: (colorValue) =>
                  setAttributes({ headingContentColor: colorValue }),
                label: __("Heading Content Color", "md-crafto"),
              },
              {
                value: authorNameColor,
                onChange: (colorValue) =>
                  setAttributes({ authorNameColor: colorValue }),
                label: __("Author Name Color", "md-crafto"),
              },
              {
                value: authorPositionColor,
                onChange: (colorValue) =>
                  setAttributes({ authorPositionColor: colorValue }),
                label: __("Author Position Color", "md-crafto"),
              },
              {
                value: authorRatingColor,
                onChange: (colorValue) =>
                  setAttributes({ authorRatingColor: colorValue }),
                label: __("Author Rating Color", "md-crafto"),
              },
              {
                value: authorRatingDescriptionColor,
                onChange: (colorValue) =>
                  setAttributes({ authorRatingDescriptionColor: colorValue }),
                label: __("Author Rating Description Color", "md-crafto"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`md_crafto_single_customer_story_wrap`}>
        <div className="md_crafto_single_customer_story">
          <div className="container">
            <div
              className="md_crafto_single_customer_story__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_crafto_single_customer_story__heading">
                {showCompanyLogo && (
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_crafto_single_customer_story__company_logo">
                    <div
                      className={`image-controls small-icons icon-center-fixed`}
                    >
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={(media) =>
                            setAttributes({ companyLogo: media.url })
                          }
                          allowedTypes={["image"]}
                          value={companyLogo}
                          render={({ open }) => (
                            <>
                              {companyLogo ? (
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
                                      onClick={() =>
                                        setAttributes({ companyLogo: "" })
                                      }
                                      role="button"
                                      tabIndex={0}
                                      onKeyDown={(e) => {
                                        if (
                                          e.key === "Enter" ||
                                          e.key === " "
                                        ) {
                                          e.preventDefault();
                                          setAttributes({ companyLogo: "" });
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
                    <img
                      src={companyLogo ? companyLogo : siteURL + placeholder}
                      alt={"slider"}
                    />
                  </div>
                )}
                {showTitle && (
                  <RichText
                    tagName="h2"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__("Enter Title", "md-crafto")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText
                    tagName="p"
                    className="md_crafto_single_customer_story__content"
                    value={headingContent}
                    onChange={(value) =>
                      setAttributes({ headingContent: value })
                    }
                    placeholder={__("Enter Content", "md-crafto")}
                    style={{
                      color: headingContentColor,
                    }}
                  />
                )}
                <div className="md_crafto_single_customer_story__author_info">
                  {showSocialIcon && (
                    <div className="md_crafto_single_customer_story__social_icon">
                      <i className={"fa " + socialIcon}></i>
                    </div>
                  )}
                  <div className="md_crafto_single_customer_story__author_name">
                    {showAuthorName && (
                      <RichText
                        tagName="h3"
                        value={authorName}
                        onChange={(value) => setAttributes({ authorName: value })}
                        placeholder={__("Enter Author Name", "md-crafto")}
                        style={{
                          color: authorNameColor,
                        }}
                      />
                    )}
                    {showAuthorPosition && (
                      <RichText
                        tagName="p"
                        value={authorPosition}
                        onChange={(value) =>
                          setAttributes({ authorPosition: value })
                        }
                        placeholder={__("Enter Author Position", "md-crafto")}
                        style={{
                          color: authorPositionColor,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="md_crafto_single_customer_story__media">
                {showAuthorImage && (
                  <div className="md-prime-block-control image-preview image-controle-visible-hover md_crafto_single_customer_story__author_image">
                    <div
                      className={`image-controls small-icons icon-center-fixed`}
                    >
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={(media) =>
                            setAttributes({ authorImage: media.url })
                          }
                          allowedTypes={["image"]}
                          value={authorImage}
                          render={({ open }) => (
                            <>
                              {authorImage ? (
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
                                      onClick={() =>
                                        setAttributes({ authorImage: "" })
                                      }
                                      role="button"
                                      tabIndex={0}
                                      onKeyDown={(e) => {
                                        if (
                                          e.key === "Enter" ||
                                          e.key === " "
                                        ) {
                                          e.preventDefault();
                                          setAttributes({ authorImage: "" });
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
                    <img
                      src={authorImage ? authorImage : siteURL + placeholder}
                      alt={"slider"}
                    />
                  </div>
                )}
                <div className="md_crafto_single_customer_story__rating">
                  {showAuthorRating && (
                    <RichText
                      tagName="p"
                      className="md_crafto_single_customer_story__rating_value"
                      value={authorRating}
                      onChange={(value) =>
                        setAttributes({ authorRating: value })
                      }
                      placeholder={__("Enter Rating", "md-crafto")}
                      style={{
                        color: authorRatingColor,
                      }}
                    />
                  )}
                  <div className="md_crafto_single_customer_story__rating_stars_wrap">
                    {showAuthorRatingStars && (
                      <div className="md_crafto_single_customer_story__rating_stars">
                        {Array.from({ length: authorRatingStars }, (_, i) => (
                          <i className="fa fa-star" key={i}></i>
                        ))}
                      </div>
                    )}
                    {showAuthorRatingDescription && (
                      <RichText
                        tagName="p"
                        value={authorRatingDescription}
                        onChange={(value) =>
                          setAttributes({ authorRatingDescription: value })
                        }
                        placeholder={__("Enter Rating Description", "md-crafto")}
                        style={{
                          color: authorRatingDescriptionColor,
                        }}
                      />
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
