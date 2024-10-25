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
  MediaUpload,
  RichText,
  PanelColorSettings,
} from "@wordpress/block-editor";

import { PanelBody, Button, FontSizePicker } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

import { useState } from "@wordpress/element";

export default function Edit({ attributes, setAttributes }) {
  const {
    heading,
    backgroundImage,
    columnList,
    buttonText,
    headingFontSize,
    headingFontColor,
    columnTitleFontSize,
    columnTitleFontColor,
    columnDescriptionFontSize,
    columnDescriptionFontColor,
    buttonFontSize,
  } = attributes;

  const fontSizes = [
    {
      name: __("S"),
      slug: "small",
      size: "12px",
    },
    {
      name: __("M"),
      slug: "medium",
      size: "18px",
    },
    {
      name: __("L"),
      slug: "large",
      size: "26px",
    },
    {
      name: __("XL"),
      slug: "xtra-large",
      size: "48px",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...columnList,
      {
        id: columnList.length + 1,
        title: "",
        description: "",
        image: "",
      },
    ];
    setAttributes({ columnList: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...columnList];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ columnList: updatedStaticPostObj });
  };
  const removeStaticPostObj = (index) => {
    const updatedStaticPostObj = [...columnList];
    updatedStaticPostObj.splice(index, 1);
    setAttributes({ columnList: updatedStaticPostObj });
    setCurrentSlide(-1);
  };

  return (
    <div
      {...useBlockProps({
        className: "md_three_column_block",
      })}
    >
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
          <label>{__("Background Image")}</label>
          <MediaUpload
            title={__("Background Image")}
            onSelect={(media) =>
              setAttributes({
                backgroundImage: media.url,
              })
            }
            multiple={false}
            render={({ open }) => (
              <>
                <Button className="md_bg_image_upload" onClick={open}>
                  {backgroundImage == "" ? (
                    <i className="dashicons dashicons-format-image"> </i>
                  ) : (
                    <img src={backgroundImage} alt="background" />
                  )}
                </Button>
              </>
            )}
          />
        </PanelBody>

        <PanelBody title={__("Typography", "md-storyful-fse-full")}>
          <label> {__("Heading Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={headingFontSize}
            fallbackFontSize={headingFontSize}
            onChange={(newFontSize) =>
              setAttributes({ headingFontSize: newFontSize })
            }
          />
          <label> {__("Column Title Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={columnTitleFontSize}
            fallbackFontSize={columnTitleFontSize}
            onChange={(newFontSize) =>
              setAttributes({ columnTitleFontSize: newFontSize })
            }
          />
          <label> {__("Column Description Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={columnDescriptionFontSize}
            fallbackFontSize={columnDescriptionFontSize}
            onChange={(newFontSize) =>
              setAttributes({ columnDescriptionFontSize: newFontSize })
            }
          />
          <label> {__("Button Font Size")} </label>
          <FontSizePicker
            __nextHasNoMarginBottom
            fontSizes={fontSizes}
            value={buttonFontSize}
            fallbackFontSize={buttonFontSize}
            onChange={(newFontSize) =>
              setAttributes({ buttonFontSize: newFontSize })
            }
          />
        </PanelBody>
        <PanelColorSettings
          title={__("Typography Colors", "md-storyful-fse-full")}
          initialOpen={false}
          colorSettings={[
            {
              value: headingFontColor,
              onChange: (newColor) =>
                setAttributes({ headingFontColor: newColor }),
              label: __("Heading Font Color"),
            },
            {
              value: columnTitleFontColor,
              onChange: (newColor) =>
                setAttributes({ columnTitleFontColor: newColor }),
              label: __("Column Title Font Color"),
            },
            {
              value: columnDescriptionFontColor,
              onChange: (newColor) =>
                setAttributes({ columnDescriptionFontColor: newColor }),
              label: __("Column Description Font Color"),
            },
          ]}
        />
      </InspectorControls>
      <section
        class="storyful-three-col-list"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div class="container">
          <div class="storyful-three-col-list__title">
            <RichText
              tagName="h2"
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
              placeholder={__("Enter Title")}
              style={{
                fontSize: headingFontSize,
                color: headingFontColor,
              }}
            />
          </div>
          <div class="threecol-wrap">
            <div class="threecol-list-items">
              {columnList &&
                columnList.map((postObj, index) => (
                  <div class="threecol-list-items__item">
                    <div className="item-action-wrap show-items-hover small-icons">
                      <div className="move-item">
                        {/* <span className="dashicons dashicons-arrow-right-alt move-down"></span> */}
                        <span
                          onClick={() => setCurrentSlide(index)}
                          className="move-down dashicons dashicons-admin-generic"
                        ></span>
                      </div>
                      <i
                        onClick={() => removeStaticPostObj(index)}
                        className="remove-item dashicons dashicons-no-alt"
                      ></i>
                    </div>
                    <div class="column-item-img">
                      <MediaUpload
                        title={__("Image")}
                        onSelect={(media) =>
                          updateStaticPostObj(index, "image", media.url)
                        }
                        multiple={false}
                        render={({ open }) => (
                          <>
                            {columnList[index].image == "" ? (
                              <Button variant="primary" onClick={open}>
                                {__("Upload")}
                              </Button>
                            ) : (
                              <img
                                onClick={open}
                                src={columnList[index].image}
                              />
                            )}
                          </>
                        )}
                      />
                    </div>
                    <RichText
                      tagName="h3"
                      className="column-item-title"
                      value={postObj.title}
                      onChange={(value) =>
                        updateStaticPostObj(index, "title", value)
                      }
                      placeholder={__("Enter Title")}
                      style={{
                        fontSize: columnTitleFontSize,
                        color: columnTitleFontColor,
                      }}
                    />
                    <RichText
                      tagName="p"
                      className="column-item-desc"
                      value={postObj.description}
                      onChange={(value) =>
                        updateStaticPostObj(index, "description", value)
                      }
                      placeholder={__("Enter Description")}
                      style={{
                        fontSize: columnDescriptionFontSize,
                        color: columnDescriptionFontColor,
                      }}
                    />
                  </div>
                ))}
              <div className="add-item-wrap">
                <Button variant="primary" onClick={addStaticPostObj}>
                  {__("Add New Slide")}
                </Button>
              </div>
            </div>
            <div class="sbtn sbtn-arrow-primary-v2 wow fadeInLeft">
              <div class="storyful-three-col-list__button">
                <RichText
                  tagName="a"
                  value={buttonText}
                  onChange={(value) => setAttributes({ buttonText: value })}
                  placeholder={__("Enter Button Text")}
                  className="btn btn-primary"
                  style={{
                    fontSize: buttonFontSize,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
