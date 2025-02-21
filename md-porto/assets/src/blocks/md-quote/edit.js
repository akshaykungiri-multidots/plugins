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
  GradientPicker,
  TextControl
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
    phoneText,
    phoneHeadingText,
    emailText,
    emailHeadingText,
    mediaPosition,
    backgroundColor,
    subTitleColor,
    titleColor,
    headingContentColor,
    showSubTitle,
    showTitle,
    showHeadingContent,
    showPhone,
    showEmail,
    phoneTextColor,
    phoneHeadingTextColor,
    emailTextColor,
    emailHeadingTextColor,
    workinHoursTitle,
    workinHoursContent,
    showWorkinHours,
    workinHoursTitleColor,
    workinHoursContentColor,
    workinHoursTitleBackgroundColor,
    privacyText,
    showPrivacy,
    privacyTextColor,
    contactForm,
    showContactForm,
  } = attributes;

  return (
    <div {...useBlockProps({ className: "md_porto_video_header_section" })}>
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
            label={__("Show Phone", "md-porto")}
            checked={showPhone}
            onChange={(value) => setAttributes({ showPhone: value })}
          />
          <ToggleControl
            label={__("Show Email", "md-porto")}
            checked={showEmail}
            onChange={(value) => setAttributes({ showEmail: value })}
          />
          <ToggleControl
            label={__("Show Working Hours", "md-porto")}
            checked={showWorkinHours}
            onChange={(value) => setAttributes({ showWorkinHours: value })}
          />
          <ToggleControl
            label={__("Show Privacy", "md-porto")}
            checked={showPrivacy}
            onChange={(value) => setAttributes({ showPrivacy: value })}
          />
          <ToggleControl
            label={__("Show Contact Form", "md-porto")}
            checked={showContactForm}
            onChange={(value) => setAttributes({ showContactForm: value })}
          />
          <div className="setting-row inspector-field inspector-field-alignment">
            <label htmlFor="alignment" className="inspector-mb-0">
              {__("Align Position")}
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
                value: phoneTextColor,
                onChange: (colorValue) =>
                  setAttributes({ phoneTextColor: colorValue }),
                label: __("Link Text Color", "md-porto"),
              },
              {
                value: phoneHeadingTextColor,
                onChange: (colorValue) =>
                  setAttributes({ phoneHeadingTextColor: colorValue }),
                label: __("Link Heading Text Color", "md-porto"),
              },
              {
                value: emailTextColor,
                onChange: (colorValue) =>
                  setAttributes({ emailTextColor: colorValue }),
                label: __("Email Text Color", "md-porto"),
              },
              {
                value: emailHeadingTextColor,
                onChange: (colorValue) =>
                  setAttributes({ emailHeadingTextColor: colorValue }),
                label: __("Email Heading Text Color", "md-porto"),
              },
              {
                value: workinHoursTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ workinHoursTitleColor: colorValue }),
                label: __("Working Hours Title Color", "md-porto"),
              },
              {
                value: workinHoursContentColor,
                onChange: (colorValue) =>
                  setAttributes({ workinHoursContentColor: colorValue }),
                label: __("Working Hours Content Color", "md-porto"),
              },
              {
                value: workinHoursTitleBackgroundColor,
                onChange: (colorValue) =>
                  setAttributes({
                    workinHoursTitleBackgroundColor: colorValue,
                  }),
                label: __("Working Hours Title Background Color", "md-porto"),
              },
              {
                value: privacyTextColor,
                onChange: (colorValue) =>
                  setAttributes({ privacyTextColor: colorValue }),
                label: __("Privacy Text Color", "md-porto"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`md_porto_quote_wrap`}>
        <div className="md_porto_quote" style={{ backgroundColor }}>
          <div className="container">
            <div
              className="md_porto_quote__inner"
              style={{
                flexDirection: mediaPosition === "left" ? "row-reverse" : "row",
              }}
            >
              <div className="md_porto_quote__heading">
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
                    className="md_porto_quote__content"
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
                {showWorkinHours && (
                  <div className="md_porto_quote__working_hours">
                    <RichText
                      tagName="h5"
                      value={workinHoursTitle}
                      onChange={(value) =>
                        setAttributes({ workinHoursTitle: value })
                      }
                      placeholder={__("Working Hours", "md-porto")}
                      style={{
                        color: workinHoursTitleColor,
                        backgroundColor: workinHoursTitleBackgroundColor,
                      }}
                    />
                    <RichText
                      tagName="p"
                      value={workinHoursContent}
                      onChange={(value) =>
                        setAttributes({ workinHoursContent: value })
                      }
                      placeholder={__("Working Hours Content", "md-porto")}
                      style={{
                        color: workinHoursContentColor,
                      }}
                    />
                  </div>
                )}
                <div className="md_btn__wrapper md_porto_quote__btn">
                  {showPhone && (
                    <div className="md_porto_quote__link_wrapper">
                      <i className="fa fa-phone"></i>
                      <div className="md_porto_quote__link_heading">
                        <RichText
                          tagName="h5"
                          value={phoneHeadingText}
                          onChange={(value) =>
                            setAttributes({ phoneHeadingText: value })
                          }
                          placeholder={__("Phone", "md-porto")}
                          style={{
                            color: phoneHeadingTextColor,
                          }}
                        />
                        <RichText
                          tagName="span"
                          className="md_porto_quote__link"
                          value={phoneText}
                          onChange={(value) =>
                            setAttributes({ phoneText: value })
                          }
                          placeholder={__("Link", "md-porto")}
                          style={{
                            color: phoneTextColor,
                          }}
                        />
                      </div>
                    </div>
                  )}
                  {showEmail && (
                    <div className="md_porto_quote__link_wrapper">
                      <i className="fa fa-envelope"></i>
                      <div className="md_porto_quote__link_heading">
                        <RichText
                          tagName="h5"
                          value={emailHeadingText}
                          onChange={(value) =>
                            setAttributes({ emailHeadingText: value })
                          }
                          placeholder={__("Email", "md-porto")}
                          style={{
                            color: emailHeadingTextColor,
                          }}
                        />
                        <RichText
                          tagName="span"
                          className="md_porto_quote__link"
                          value={emailText}
                          onChange={(value) =>
                            setAttributes({ emailText: value })
                          }
                          placeholder={__("Link", "md-porto")}
                          style={{
                            color: emailTextColor,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                {showPrivacy && (
                  <RichText
                    tagName="p"
                    className="md_porto_quote__privacy"
                    value={privacyText}
                    onChange={(value) => setAttributes({ privacyText: value })}
                    placeholder={__("Privacy Text", "md-porto")}
                    style={{
                      color: privacyTextColor,
                    }}
                  />
                )}
              </div>
              <div className="md_porto_quote__contact_form">
                {showContactForm && (
                  <TextControl
                    label={__("Contact Form Shortcode", "md-porto")}
                    value={contactForm}
                    onChange={(value) => setAttributes({ contactForm: value })}
                  />
                )}
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
