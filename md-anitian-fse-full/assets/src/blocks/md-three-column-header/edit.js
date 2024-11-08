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
export default function Edit({ attributes, setAttributes }) {
  const {
    bannerTitle,
    backgroundMediaImage,
    columnList,
    bannerTitleColor,
    columnTitleColor,
    columnContentColor,
    columnLinkColor,
    showBannerTitle,
    showColumnImage,
    showColumnTitle,
    showColumnContent,
    showColumnLink,
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...columnList,
      {
        id: columnList.length + 1,
        column_title: "",
        column_description: "",
        column_link: "",
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
        className: "md_anitian_three_column_header_section",
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
              {!backgroundMediaImage ? (
                <MediaUpload
                  onSelect={(selectedImage) => {
                    setAttributes({
                      backgroundMediaImage: selectedImage.url,
                    });
                  }}
                  allowedTypes={["image"]}
                  value={backgroundMediaImage}
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
                      src={backgroundMediaImage}
                      alt="Background-image-preview"
                    />
                  </div>
                  <Button
                    onClick={() => {
                      setAttributes({
                        backgroundMediaImage: "",
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
        <PanelBody title={__("Toggle Settings", "md-storyful-fse-full")} initialOpen={false}>
          <ToggleControl
            label={__("Show Banner Title", "md-storyful-fse-full")}
            checked={showBannerTitle}
            onChange={(value) => setAttributes({ showBannerTitle: value })}
          />
          <ToggleControl
            label={__("Show Column Image", "md-storyful-fse-full")}
            checked={showColumnImage}
            onChange={(value) => setAttributes({ showColumnImage: value })}
          />
          <ToggleControl
            label={__("Show Column Title", "md-storyful-fse-full")}
            checked={showColumnTitle}
            onChange={(value) => setAttributes({ showColumnTitle: value })}
          />
          <ToggleControl
            label={__("Show Column Content", "md-storyful-fse-full")}
            checked={showColumnContent}
            onChange={(value) => setAttributes({ showColumnContent: value })}
          />
          <ToggleControl
            label={__("Show Column Link", "md-storyful-fse-full")}
            checked={showColumnLink}
            onChange={(value) => setAttributes({ showColumnLink: value })}
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
                value: bannerTitleColor,
                onChange: (newColor) =>
                  setAttributes({ bannerTitleColor: newColor }),
                label: __("Banner Title Color"),
              },
              {
                value: columnTitleColor,
                onChange: (newColor) =>
                  setAttributes({ columnTitleColor: newColor }),
                label: __("Column Title Color"),
              },
              {
                value: columnContentColor,
                onChange: (newColor) =>
                  setAttributes({ columnContentColor: newColor }),
                label: __("Column Content Color"),
              },
              {
                value: columnLinkColor,
                onChange: (newColor) =>
                  setAttributes({ columnLinkColor: newColor }),
                label: __("Column Link Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_anitian_three_column_header">
        <div
          className="md_anitian_three_column_header__bg_image"
          style={{ backgroundImage: `url(${backgroundMediaImage})` }}
        >
          <div className="container">
            {showBannerTitle && (
              <div className="md_anitian_three_column_header__heading">
                <RichText
                  tagName="h2"
                  value={bannerTitle}
                  onChange={(value) => setAttributes({ bannerTitle: value })}
                  placeholder={__("Enter Title")}
                  style={{
                    color: bannerTitleColor,
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className="container">
          <div className="md_anitian_three_column_header__content">
            {columnList &&
              columnList.map((postObj, index) => (
                <div className="md_anitian_three_column_header__item  show-items-hover-wrap" key={index}>
                  <div className="item-action-wrap show-items-hover small-icons">
                    <div className="move-item">
                      {0 < index && (
                        <Tooltip text={__("Move Left", "md-prime")}>
                          <span
                            className="dashicons dashicons-arrow-left-alt move-left"
                            onClick={() => moveItem(index, index - 1)}
                            onKeyDown={(event) => {
                              if (event.key === "Enter" || event.key === " ") {
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
                    {1 < columnList.length && (
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
                              const updatedArray = columnList.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                columnList: updatedArray,
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
                                const updatedArray = columnList.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  columnList: updatedArray,
                                });
                              }
                            }
                          }}
                          aria-label="Delete item"
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  {showColumnImage && (
                    <div className="md_anitian_three_column_header__item__image">
                      <MediaUpload
                        title={__("Image")}
                        onSelect={(media) =>
                          updateStaticPostObj(index, "image", media.url)
                        }
                        multiple={false}
                        render={({ open }) => (
                          <>
                            {postObj.image === "" ? (
                              <Button variant="primary" onClick={open}>
                                <i className="dashicons dashicons-format-image">
                                  {" "}
                                </i>
                              </Button>
                            ) : (
                              <>
                                <img src={postObj.image} alt="post" />
                                <Tooltip text={__("Edit Image", "md-prime")}>
                                  <i
                                    className="dashicons dashicons-edit edit-image"
                                    role="button"
                                    tabIndex="0"
                                    onClick={open}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        open();
                                      }
                                    }}
                                    aria-label="Edit image"
                                  ></i>
                                </Tooltip>
                                <Tooltip text={__("Remove Image", "md-prime")}>
                                  <i
                                    className="dashicons dashicons-no-alt remove-image"
                                    role="button"
                                    tabIndex="0"
                                    onClick={() => {
                                      const toDelete =
                                        // eslint-disable-next-line no-alert
                                        confirm(
                                          __(
                                            "Are you sure you want to remove this image?",
                                            "md-prime"
                                          )
                                        );
                                      if (toDelete) {
                                        updateStaticPostObj(index, "image", "");
                                      }
                                    }}
                                    onKeyDown={(e) => {
                                      if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault(); // Prevent default action for space key
                                        const toDelete =
                                          // eslint-disable-next-line no-alert
                                          confirm(
                                            __(
                                              "Are you sure you want to remove this image?",
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
                                      }
                                    }}
                                    aria-label="Remove image"
                                  ></i>
                                </Tooltip>
                              </>
                            )}
                          </>
                        )}
                      />
                    </div>
                  )}
                  <div className="md_anitian_three_column_header__item__content">
                    {showColumnTitle && (
                      <RichText
                        tagName="h5"
                        value={postObj.column_title}
                        onChange={(value) =>
                          updateStaticPostObj(index, "column_title", value)
                        }
                        placeholder={__("Enter Title")}
                        style={{
                          color: columnTitleColor,
                        }}
                      />
                    )}
                    {showColumnContent && (
                      <RichText
                        tagName="p"
                        value={postObj.column_description}
                        onChange={(value) =>
                          updateStaticPostObj(
                            index,
                            "column_description",
                            value
                          )
                        }
                        placeholder={__("Enter Description")}
                        style={{
                          color: columnContentColor,
                        }}
                      />
                    )}
                    {showColumnLink && (
                      <RichText
                        tagName="a"
                        className="md_anitian_three_column_header__item__link"
                        value={postObj.column_link}
                        onChange={(value) =>
                          updateStaticPostObj(index, "column_link", value)
                        }
                        placeholder={__("Add link")}
                        style={{
                          color: columnLinkColor,
                        }}
                      />
                    )}
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
        </div>
      </div>
    </div>
  );
}
