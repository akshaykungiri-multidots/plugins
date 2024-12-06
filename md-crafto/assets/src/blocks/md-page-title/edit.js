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
  RichText,
  MediaUpload,
  PanelColorSettings,
} from "@wordpress/block-editor";

import {
  PanelBody,
  RangeControl,
  ToggleControl,
  Button,
  SelectControl,
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
    heading,
    backgroundImage,
    enableOverlay,
    overlayColor,
    overlayOpacity,
    backgroundPosition,
    backgroundSize,
    backgroundRepeat,
    backgroundAttachment,
    headingColor,
  } = attributes;
  return (
    <dv {...useBlockProps({ className: "md_page_title" })}>
      <InspectorControls>
        <PanelBody title={__("Background Settings")} initialOpen={false}>
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
            <SelectControl
              label={__("Background Position", "md-prime")}
              value={backgroundPosition}
              options={[
                { label: "Left Top", value: "left top" },
                { label: "Left Center", value: "left center" },
                { label: "Left Bottom", value: "left bottom" },
                { label: "Right Top", value: "right top" },
                { label: "Right Center", value: "right center" },
                { label: "Right Bottom", value: "right bottom" },
                { label: "Center Top", value: "center top" },
                { label: "Center Center", value: "center center" },
                { label: "Center Bottom", value: "center bottom" },
              ]}
              onChange={(value) => setAttributes({ backgroundPosition: value })}
            />
            <SelectControl
              label={__("Background Size", "md-prime")}
              value={backgroundSize}
              options={[
                { label: "Auto", value: "auto" },
                { label: "Cover", value: "cover" },
                { label: "Contain", value: "contain" },
              ]}
              onChange={(value) => setAttributes({ backgroundSize: value })}
            />
            <SelectControl
              label={__("Background Repeat", "md-prime")}
              value={backgroundRepeat}
              options={[
                { label: "No Repeat", value: "no-repeat" },
                { label: "Repeat", value: "repeat" },
                { label: "Repeat X", value: "repeat-x" },
                { label: "Repeat Y", value: "repeat-y" },
              ]}
              onChange={(value) => setAttributes({ backgroundRepeat: value })}
            />
            <SelectControl
              label={__("Background Attachment", "md-prime")}
              value={backgroundAttachment}
              options={[
                { label: "Scroll", value: "scroll" },
                { label: "Fixed", value: "fixed" },
                { label: "Local", value: "local" },
                { label: "Initial", value: "initial" },
                { label: "Inherit", value: "inherit" },
              ]}
              onChange={(value) =>
                setAttributes({ backgroundAttachment: value })
              }
            />
          </div>
          <div className="md_slider__background_settings">
            <ToggleControl
              label={__("Enable Overlay", "md-prime")}
              checked={enableOverlay}
              onChange={(value) => setAttributes({ enableOverlay: value })}
            />
            {enableOverlay && (
              <>
                <PanelColorSettings
                  title={__("Overlay Color Settings", "md-storyful-fse-full")}
                  initialOpen={false}
                  colorSettings={[
                    {
                      value: overlayColor,
                      onChange: (newColor) =>
                        setAttributes({ overlayColor: newColor }),
                      label: __("Overlay Color"),
                    },
                  ]}
                />
                <RangeControl
                  label={__("Overlay Opacity")}
                  value={overlayOpacity}
                  min={0}
                  max={1}
                  step={0.05}
                  onChange={(value) => setAttributes({ overlayOpacity: value })}
                />
              </>
            )}
          </div>
        </PanelBody>
        <PanelBody title={__("Heading Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Heading Color Settings", "md-prime")}
            initialOpen={false}
            colorSettings={[
              {
                value: headingColor,
                onChange: (newColor) =>
                  setAttributes({ headingColor: newColor }),
                label: __("Heading Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className="md_page_title__inner"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition,
          backgroundSize,
          backgroundRepeat,
          backgroundAttachment,
        }}
      >
        {enableOverlay && (
          <div
            className="md_page_title__overlay"
            style={{
              backgroundColor: overlayColor,
              opacity: overlayOpacity,
            }}
          ></div>
        )}
        <div className="container">
          <RichText
            tagName="h1"
            value={heading}
            placeholder={__("Enter Heading", "md-prime")}
            style={{ color: headingColor }}
            onChange={(value) => setAttributes({ heading: value })}
          />
        </div>
        <div className="md_page_title__go_down">
          <i className="fa fa-angle-down"></i>
        </div>
      </div>
    </dv>
  );
}
