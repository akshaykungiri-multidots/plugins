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
} from "@wordpress/block-editor";

import { Fragment } from "@wordpress/element";

import {
  PanelBody,
  ToggleControl,
  RangeControl,
  GradientPicker,
  Button
} from "@wordpress/components";

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
  } = attributes;

  const displayReviewStars = () => {
    const stars = [];
    for (let i = 0; i < reviewStars; i++) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    return stars;
  };

  return (
    <div {...useBlockProps({ className: "md_crafto_service_banner_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-crafto")}>
          <ToggleControl
            label={__("Show Sub Title", "md-crafto")}
            checked={showSubTitle}
            onChange={(value) => setAttributes({ showSubTitle: value })}
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
            label={__("Show Counter Number", "md-crafto")}
            checked={showCounterNumber}
            onChange={(value) => setAttributes({ showCounterNumber: value })}
          />
          <ToggleControl
            label={__("Show Review Text", "md-crafto")}
            checked={showReviewText}
            onChange={(value) => setAttributes({ showReviewText: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Highlighted Text Settings", "md-crafto")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Highlighted Text", "md-crafto")}
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
                        setAttributes({ highlightedTextImage: selectedImage.url });
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
                title={__("Highlighted Text Colors", "md-crafto")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: highlightedTextColor,
                    onChange: (colorValue) =>
                      setAttributes({ highlightedTextColor: colorValue }),
                    label: __("Text Color", "md-crafto"),
                  },
                ]}
              />
              <div className="settings-row">
                <label htmlFor="highlightedTextColor">
                  {__("Highlighted Text Background Color", "md-crafto")}
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
          title={__("Review Stars Settings", "md-crafto")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Review Stars", "md-crafto")}
            checked={showReviewStars}
            onChange={(value) => setAttributes({ showReviewStars: value })}
          />
          {showReviewStars && (
            <Fragment>
              <RangeControl
                label={__("Number of Stars", "md-crafto")}
                value={reviewStars}
                onChange={(value) => setAttributes({ reviewStars: value })}
                min={1}
                max={5}
              />
              <PanelColorSettings
                title={__("Review Stars Colors", "md-crafto")}
                initialOpen={false}
                colorSettings={[
                  {
                    value: reviewStarsColor,
                    onChange: (colorValue) =>
                      setAttributes({ reviewStarsColor: colorValue }),
                    label: __("Stars Color", "md-crafto"),
                  },
                  {
                    value: reviewStarsBackgroundColor,
                    onChange: (colorValue) =>
                      setAttributes({ reviewStarsBackgroundColor: colorValue }),
                    label: __("Background Color", "md-crafto"),
                  },
                ]}
              />
            </Fragment>
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
                value: subTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ subTitleColor: colorValue }),
                label: __("Sub Title Color", "md-crafto"),
              },
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
                value: backgroundColor,
                onChange: (colorValue) =>
                  setAttributes({ backgroundColor: colorValue }),
                label: __("Background Color", "md-crafto"),
              },
              {
                value: counterNumberColor,
                onChange: (colorValue) =>
                  setAttributes({ counterNumberColor: colorValue }),
                label: __("Counter Number Color", "md-crafto"),
              },
              {
                value: reviewTextColor,
                onChange: (colorValue) =>
                  setAttributes({ reviewTextColor: colorValue }),
                label: __("Review Text Color", "md-crafto"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`md_crafto_service_banner_wrap`}>
        <div className="md_crafto_service_banner" style={{ backgroundColor }}>
          <div className="container">
            <div className="md_crafto_service_banner__inner">
              <div className="md_crafto_service_banner__heading">
                {showSubTitle && (
                  <RichText
                    tagName="h4"
                    value={subTitle}
                    onChange={(value) => setAttributes({ subTitle: value })}
                    placeholder={__("Enter Sub Title", "md-crafto")}
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
                    placeholder={__("Enter Title", "md-crafto")}
                    style={{ color: titleColor }}
                  />
                )}
                {showHeadingContent && (
                  <RichText
                    tagName="p"
                    className="md_crafto_service_banner__content"
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
              </div>
              {showHighlightedText && (
                <div
                  className="md_crafto_service_banner__highlighted_text"
                  style={{
                    color: highlightedTextColor,
                    background: highlightedTextBackgroundColor,
                  }}
                >
                  {highlightedTextImage && (
                    <img
                      src={highlightedTextImage}
                      alt="Highlighted Text"
                    />
                  )}
                  <RichText
                    tagName="p"
                    value={highlightedText}
                    onChange={(value) =>
                      setAttributes({ highlightedText: value })
                    }
                    placeholder={__("Enter Highlighted Text", "md-crafto")}
                  />
                </div>
              )}
              <div className="md_crafto_service_banner__footer">
                <div className="md_crafto_service_banner__footer_left">
                  {showCounterNumber && (
                    <div
                      className="md_crafto_service_banner__counter"
                      style={{ color: counterNumberColor }}
                    >
                      <RichText
                        tagName="p"
                        value={counterNumber}
                        onChange={(value) =>
                          setAttributes({ counterNumber: value })
                        }
                        placeholder={__("Enter Counter Number", "md-crafto")}
                      />
                    </div>
                  )}
                  {showReviewStars && (
                    <div
                      className="md_crafto_service_banner__review_stars"
                      style={{
                        color: reviewStarsColor,
                        backgroundColor: reviewStarsBackgroundColor,
                      }}
                    >
                      {displayReviewStars()}
                    </div>
                  )}
                </div>
                <div className="md_crafto_service_banner__footer_right">
                  {showReviewText && (
                    <div
                      className="md_crafto_service_banner__review_text"
                      style={{ color: reviewTextColor }}
                    >
                      <RichText
                        tagName="p"
                        value={reviewText}
                        onChange={(value) =>
                          setAttributes({ reviewText: value })
                        }
                        placeholder={__("Enter Review Text", "md-crafto")}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
