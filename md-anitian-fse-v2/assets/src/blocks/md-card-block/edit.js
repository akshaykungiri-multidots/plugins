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
  MediaUpload,
  MediaUploadCheck,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";

import {
  Button,
  SelectControl,
  PanelBody,
  Tooltip,
  ToggleControl,
  RangeControl,
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
    cardBlockStyle,
    cardBlockList,
    subTitleFontColor,
    titleFontColor,
    headingContentFontColor,
    cardTitleFontColor,
    cardContentFontColor,
    cardLearnMoreFontColor,
    numberOfColumns,
    showImage,
    showTitle,
    showContent,
    showLink,
    showSubHeading,
    showHeadingContent,
    showHeading,
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...cardBlockList,
      {
        id: cardBlockList.length + 1,
        card_image: "",
        card_title: "",
        card_description: "",
        learn_more_link: "",
      },
    ];
    setAttributes({ cardBlockList: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...cardBlockList];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ cardBlockList: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...cardBlockList];
    arrayCopy[oldIndex] = cardBlockList[newIndex];
    arrayCopy[newIndex] = cardBlockList[oldIndex];

    setAttributes({
      cardBlockList: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps({ className: "md_anitian_card_block" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-anitian-fse-v2")}>
          <SelectControl
            label={__("Card Block Style", "md-anitian-fse-v2")}
            value={cardBlockStyle}
            options={[
              { label: "Style 1", value: "style1" },
              { label: "Style 2", value: "style2" },
              { label: "Style 3", value: "style3" },
              { label: "Style 4", value: "style4" },
            ]}
            onChange={(value) => setAttributes({ cardBlockStyle: value })}
          />
          <RangeControl
            label={__("Number of Columns", "md-anitian-fse-v2")}
            value={numberOfColumns}
            onChange={(value) => setAttributes({ numberOfColumns: value })}
            min={1}
            max={4}
          />
        </PanelBody>
        <PanelBody title={__("Toggle Settings", "md-anitian-fse-v2")} initialOpen={false}>
          <ToggleControl
            label={__("Show Sub Heading", "md-anitian-fse-v2")}
            checked={showSubHeading}
            onChange={(value) => setAttributes({ showSubHeading: value })}
          />
          <ToggleControl
            label={__("Show Heading", "md-anitian-fse-v2")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Heading Content", "md-anitian-fse-v2")}
            checked={showHeadingContent}
            onChange={(value) => setAttributes({ showHeadingContent: value })}
          />
          <ToggleControl
            label={__("Show Image", "md-anitian-fse-v2")}
            checked={showImage}
            onChange={(value) => setAttributes({ showImage: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-anitian-fse-v2")}
            checked={showTitle}
            onChange={(value) => setAttributes({ showTitle: value })}
          />
          <ToggleControl
            label={__("Show Content", "md-anitian-fse-v2")}
            checked={showContent}
            onChange={(value) => setAttributes({ showContent: value })}
          />
          <ToggleControl
            label={__("Show Link", "md-anitian-fse-v2")}
            checked={showLink}
            onChange={(value) => setAttributes({ showLink: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-anitian-fse-v2")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Color Settings", "md-anitian-fse-v2")}
            initialOpen={false}
            colorSettings={[
              {
                value: subTitleFontColor,
                onChange: (newColor) =>
                  setAttributes({ subTitleFontColor: newColor }),
                label: __("Sub Title Font Color"),
              },
              {
                value: titleFontColor,
                onChange: (newColor) =>
                  setAttributes({ titleFontColor: newColor }),
                label: __("Title Font Color"),
              },
              {
                value: headingContentFontColor,
                onChange: (newColor) =>
                  setAttributes({ headingContentFontColor: newColor }),
                label: __("Heading Content Font Color"),
              },
              {
                value: cardTitleFontColor,
                onChange: (newColor) =>
                  setAttributes({ cardTitleFontColor: newColor }),
                label: __("Card Title Font Color"),
              },
              {
                value: cardContentFontColor,
                onChange: (newColor) =>
                  setAttributes({ cardContentFontColor: newColor }),
                label: __("Card Description Font Color"),
              },
              {
                value: cardLearnMoreFontColor,
                onChange: (newColor) =>
                  setAttributes({ cardLearnMoreFontColor: newColor }),
                label: __("Card Learn More Font Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`md_anitian_card_block ${cardBlockStyle}`}>
        <div className="md_anitian_card_block__head">
          <div className="container">
            <div className="md_anitian_card_block__heading">
              {showSubHeading && (
              <RichText
                tagName="h3"
                value={subTitle}
                onChange={(value) => setAttributes({ subTitle: value })}
                placeholder={__("Enter Sub Title", "md-anitian-fse-v2")}
                style={{
                  color: subTitleFontColor,
                }}
              />
              )}
              {showHeading && (
              <RichText
                tagName="h2"
                value={title}
                onChange={(value) => setAttributes({ title: value })}
                placeholder={__("Enter Title", "md-anitian-fse-v2")}
                style={{
                  color: titleFontColor,
                }}
              />
              )}
              {showHeadingContent && (
              <RichText
                tagName="p"
                value={headingContent}
                onChange={(value) => setAttributes({ headingContent: value })}
                placeholder={__("Enter Heading Content", "md-anitian-fse-v2")}
                style={{
                  color: headingContentFontColor,
                }}
              />
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="md_anitian_card_block__content" style={{ gridTemplateColumns: `repeat(${numberOfColumns}, 1fr)` }}>
            {cardBlockList &&
              cardBlockList.map((postObj, index) => (
                <div className="md_anitian_card_block__item show-items-hover-wrap" key={index}>
                  <div className={`item-action-wrap show-items-hover pos-abs`}>
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
                      {index + 1 < cardBlockList.length && (
                        <Tooltip text={__("Move Right", "md-prime")}>
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
                    {1 < cardBlockList.length && (
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
                              const updatedArray = cardBlockList.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                cardBlockList: updatedArray,
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
                                const updatedArray = cardBlockList.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  cardBlockList: updatedArray,
                                });
                              }
                            }
                          }}
                          aria-label={__("Remove this item", "md-prime")}
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  {showImage && (
                  <div className="md_anitian_card_block__item__image">
                      <div className={`card-box-v1__box_image`}>
                        <div className="md-prime-block-control image-preview image-controle-visible-hover">
                          <div
                            className={`image-controls small-icons icon-center-fixed`}
                          >
                            <MediaUploadCheck>
                              <MediaUpload
                                onSelect={(media) =>
                                  updateStaticPostObj(
                                    index,
                                    "card_image",
                                    media.url
                                  )
                                }
                                allowedTypes={["image"]}
                                value={postObj.card_image}
                                render={({ open }) => {
                                  return (
                                    <Tooltip
                                      text={__("Edit Image", "md-prime")}
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
                                  );
                                }}
                              />
                            </MediaUploadCheck>
                            <Tooltip text={__("Remove Image", "md-prime")}>
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
                                    updateStaticPostObj(index, "card_image", "");
                                  }
                                }}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    updateStaticPostObj(index, "card_image", "");
                                  }
                                }}
                                aria-label={__("Remove image", "md-prime")}
                              ></i>
                            </Tooltip>
                          </div>
                          {postObj.card_image && (
                            <img src={postObj.card_image} alt={postObj.card_title} />
                          )}
                        </div>
                        {!postObj.card_image && (
                          <MediaUpload
                            onSelect={(item) => {
                              updateStaticPostObj(index, "card_image", item.url);
                            }}
                            allowedTypes={["image"]}
                            value={postObj.card_image}
                            render={({ open }) => (
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
                          />
                        )}
                      </div>
                  </div>
                  )}
                  <div className="md_anitian_card_block__item__content">
                    {showTitle && (
                      <h3 className="column-item-title" style={{ color: cardTitleFontColor }}>
                        {cardBlockStyle === "style4" && (
                          <i className="fa fa-check-circle"></i>
                        )}
                        <RichText
                          tagName="span"
                          value={postObj.card_title}
                          onChange={(value) =>
                            updateStaticPostObj(index, "card_title", value)
                          }
                          placeholder={__("Enter Title")}
                        />
                      </h3>
                    )}
                    <div className="md_anitian_card_block__item__content__link">
                      {showContent && (
                      <RichText
                        tagName="p"
                        className="column-item-desc"
                        value={postObj.card_description}
                        onChange={(value) =>
                          updateStaticPostObj(index, "card_description", value)
                        }
                        placeholder={__("Enter Description")}
                        style={{
                          color: cardContentFontColor,
                        }}
                      />
                      )}
                      {showLink && (
                      <RichText
                        tagName="p"
                        className="md_anitian_card_block__item__link"
                        value={postObj.learn_more_link}
                        onChange={(value) =>
                          updateStaticPostObj(index, "learn_more_link", value)
                        }
                        placeholder={__("Link")}
                        style={{
                          color: cardLearnMoreFontColor,
                        }}
                      />
                      )}
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
      </div>
    </div>
  );
}
