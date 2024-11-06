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

import {
  PanelBody,
  Button,
  Tooltip,
  ToggleControl,
} from "@wordpress/components";

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
    headingFontColor,
    columnTitleFontColor,
    columnDescriptionFontColor,
    showHeading,
    showColumnTitle,
    showColumnDescription,
    showColumnImage,
    showButton,
  } = attributes;

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
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...columnList];
    arrayCopy[oldIndex] = columnList[newIndex];
    arrayCopy[newIndex] = columnList[oldIndex];

    setAttributes({
      columnList: arrayCopy,
    });
  };

  return (
    <div
      {...useBlockProps({
        className: "md_three_column_block",
      })}
    >
      <InspectorControls>
        <PanelBody
          title={__("Background Settings", "md-prime")}
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
        </PanelBody>
        <PanelBody
          title={__("Toggle Settings", "md-storyful-fse-full")}
          initialOpen={false}
        >
          <ToggleControl
            label={__("Show Heading", "md-storyful-fse-full")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Column Title", "md-storyful-fse-full")}
            checked={showColumnTitle}
            onChange={(value) => setAttributes({ showColumnTitle: value })}
          />
          <ToggleControl
            label={__("Show Column Description", "md-storyful-fse-full")}
            checked={showColumnDescription}
            onChange={(value) =>
              setAttributes({ showColumnDescription: value })
            }
          />
          <ToggleControl
            label={__("Show Column Image", "md-storyful-fse-full")}
            checked={showColumnImage}
            onChange={(value) => setAttributes({ showColumnImage: value })}
          />
          <ToggleControl
            label={__("Show Button", "md-storyful-fse-full")}
            checked={showButton}
            onChange={(value) => setAttributes({ showButton: value })}
          />
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
        </PanelBody>
      </InspectorControls>
      <section
        class="storyful-three-col-list"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div class="container">
          {showHeading && (
            <div class="storyful-three-col-list__title">
              <RichText
                tagName="h2"
                value={heading}
                onChange={(value) => setAttributes({ heading: value })}
                placeholder={__("Enter Title")}
                style={{
                  color: headingFontColor,
                }}
              />
            </div>
          )}
          <div class="threecol-wrap">
            <div class="threecol-list-items">
              {columnList &&
                columnList.map((postObj, index) => (
                  <div className="threecol-list-items__item stats-block-bottom__item fadeInUp show-items-hover-wrap">
                    <div className="item-action-wrap show-items-hover pos-abs">
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
                        {index + 1 < columnList.length && (
                          <Tooltip text={__("Move Right", "md-prime")}>
                            <span
                              className="dashicons dashicons-arrow-right-alt move-right"
                              onClick={() => moveItem(index, index + 1)}
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  moveItem(index, index + 1);
                                }
                              }}
                              role="button"
                              aria-label="Move item right"
                            ></span>
                          </Tooltip>
                        )}
                      </div>
                      {1 < columnList.length && (
                        <Tooltip text={__("Remove Item", "md-prime")}>
                          <i
                            className="remove-item dashicons dashicons-no-alt"
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
                                const updatedArray = columnList.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  columnList: updatedArray,
                                });
                              }
                            }}
                            tabIndex={0}
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
                                  const updatedArray = columnList.filter(
                                    (item, itemIndex) => itemIndex !== index
                                  );
                                  setAttributes({
                                    columnList: updatedArray,
                                  });
                                }
                              }
                            }}
                            role="button"
                            aria-label="Remove item"
                          ></i>
                        </Tooltip>
                      )}
                    </div>
                    {showColumnImage && (
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
                    )}
                    {showColumnTitle && (
                      <RichText
                        tagName="h3"
                        className="column-item-title"
                        value={postObj.title}
                        onChange={(value) =>
                          updateStaticPostObj(index, "title", value)
                        }
                        placeholder={__("Enter Title")}
                        style={{
                          color: columnTitleFontColor,
                        }}
                      />
                    )}
                    {showColumnDescription && (
                      <RichText
                        tagName="p"
                        className="column-item-desc"
                        value={postObj.description}
                        onChange={(value) =>
                          updateStaticPostObj(index, "description", value)
                        }
                        placeholder={__("Enter Description")}
                        style={{
                          color: columnDescriptionFontColor,
                        }}
                      />
                    )}
                  </div>
                ))}
              <div className="add-item-wrap">
                <Button variant="primary" onClick={addStaticPostObj}>
                  {__("Add New Slide")}
                </Button>
              </div>
            </div>
            {showButton && (
              <div class="sbtn sbtn-arrow-primary-v2 wow fadeInLeft">
                <div class="storyful-three-col-list__button">
                  <RichText
                    tagName="a"
                    value={buttonText}
                    onChange={(value) => setAttributes({ buttonText: value })}
                    placeholder={__("Enter Button Text")}
                    className="btn btn-primary"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
