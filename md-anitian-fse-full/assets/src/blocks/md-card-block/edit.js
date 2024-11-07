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
    sub_title,
    title,
    heading_content,
    card_block_style,
    card_block_list,
    sub_title_font_color,
    title_font_color,
    heading_content_font_color,
    card_title_font_color,
    card_content_font_color,
    card_learn_more_font_color,
    number_of_columns,
    show_image,
    show_title,
    show_content,
    show_link,
    show_sub_heading,
    show_heading_content,
    show_heading,
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...card_block_list,
      {
        id: card_block_list.length + 1,
        card_image: "",
        card_title: "",
        card_description: "",
        learn_more_link: "",
      },
    ];
    setAttributes({ card_block_list: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...card_block_list];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ card_block_list: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...card_block_list];
    arrayCopy[oldIndex] = card_block_list[newIndex];
    arrayCopy[newIndex] = card_block_list[oldIndex];

    setAttributes({
      card_block_list: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps({ className: "md_anitian_card_block" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-anitian-fse-full")}>
          <SelectControl
            label={__("Card Block Style", "md-anitian-fse-full")}
            value={card_block_style}
            options={[
              { label: "Style 1", value: "style1" },
              { label: "Style 2", value: "style2" },
              { label: "Style 3", value: "style3" },
            ]}
            onChange={(value) => setAttributes({ card_block_style: value })}
          />
          <RangeControl
            label={__("Number of Columns", "md-anitian-fse-full")}
            value={number_of_columns}
            onChange={(value) => setAttributes({ number_of_columns: value })}
            min={1}
            max={4}
          />
        </PanelBody>
        <PanelBody title={__("Toggle Settings", "md-anitian-fse-full")} initialOpen={false}>
          <ToggleControl
            label={__("Show Sub Heading", "md-anitian-fse-full")}
            checked={show_sub_heading}
            onChange={(value) => setAttributes({ show_sub_heading: value })}
          />
          <ToggleControl
            label={__("Show Heading", "md-anitian-fse-full")}
            checked={show_heading}
            onChange={(value) => setAttributes({ show_heading: value })}
          />
          <ToggleControl
            label={__("Show Heading Content", "md-anitian-fse-full")}
            checked={show_heading_content}
            onChange={(value) => setAttributes({ show_heading_content: value })}
          />
          <ToggleControl
            label={__("Show Image", "md-anitian-fse-full")}
            checked={show_image}
            onChange={(value) => setAttributes({ show_image: value })}
          />
          <ToggleControl
            label={__("Show Title", "md-anitian-fse-full")}
            checked={show_title}
            onChange={(value) => setAttributes({ show_title: value })}
          />
          <ToggleControl
            label={__("Show Content", "md-anitian-fse-full")}
            checked={show_content}
            onChange={(value) => setAttributes({ show_content: value })}
          />
          <ToggleControl
            label={__("Show Link", "md-anitian-fse-full")}
            checked={show_link}
            onChange={(value) => setAttributes({ show_link: value })}
          />
        </PanelBody>
        <PanelBody
          title={__("Color Settings", "md-anitian-fse-full")}
          initialOpen={false}
        >
          <PanelColorSettings
            title={__("Color Settings", "md-anitian-fse-full")}
            initialOpen={false}
            colorSettings={[
              {
                value: sub_title_font_color,
                onChange: (newColor) =>
                  setAttributes({ sub_title_font_color: newColor }),
                label: __("Sub Title Font Color"),
              },
              {
                value: title_font_color,
                onChange: (newColor) =>
                  setAttributes({ title_font_color: newColor }),
                label: __("Title Font Color"),
              },
              {
                value: heading_content_font_color,
                onChange: (newColor) =>
                  setAttributes({ heading_content_font_color: newColor }),
                label: __("Heading Content Font Color"),
              },
              {
                value: card_title_font_color,
                onChange: (newColor) =>
                  setAttributes({ card_title_font_color: newColor }),
                label: __("Card Title Font Color"),
              },
              {
                value: card_content_font_color,
                onChange: (newColor) =>
                  setAttributes({ card_content_font_color: newColor }),
                label: __("Card Description Font Color"),
              },
              {
                value: card_learn_more_font_color,
                onChange: (newColor) =>
                  setAttributes({ card_learn_more_font_color: newColor }),
                label: __("Card Learn More Font Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className={`md_anitian_card_block ${card_block_style}`}>
        <div className="md_anitian_card_block__head">
          <div className="container">
            <div className="md_anitian_card_block__heading">
              {show_sub_heading && (
              <RichText
                tagName="h3"
                value={sub_title}
                onChange={(value) => setAttributes({ sub_title: value })}
                placeholder={__("Enter Sub Title", "md-anitian-fse-full")}
                style={{
                  color: sub_title_font_color,
                }}
              />
              )}
              {show_heading && (
              <RichText
                tagName="h2"
                value={title}
                onChange={(value) => setAttributes({ title: value })}
                placeholder={__("Enter Title", "md-anitian-fse-full")}
                style={{
                  color: title_font_color,
                }}
              />
              )}
              {show_heading_content && (
              <RichText
                tagName="p"
                value={heading_content}
                onChange={(value) => setAttributes({ heading_content: value })}
                placeholder={__("Enter Heading Content", "md-anitian-fse-full")}
                style={{
                  color: heading_content_font_color,
                }}
              />
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="md_anitian_card_block__content" style={{ gridTemplateColumns: `repeat(${number_of_columns}, 1fr)` }}>
            {card_block_list &&
              card_block_list.map((postObj, index) => (
                <div className="md_anitian_card_block__item show-items-hover-wrap">
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
                      {index + 1 < card_block_list.length && (
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
                    {1 < card_block_list.length && (
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
                              const updatedArray = card_block_list.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                card_block_list: updatedArray,
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
                                const updatedArray = card_block_list.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  card_block_list: updatedArray,
                                });
                              }
                            }
                          }}
                          aria-label={__("Remove this item", "md-prime")}
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  {show_image && (
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
                            <img src={postObj.card_image} />
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
                    {show_title && (
                    <RichText
                      tagName="h3"
                      className="column-item-title"
                      value={postObj.card_title}
                      onChange={(value) =>
                        updateStaticPostObj(index, "card_title", value)
                      }
                      placeholder={__("Enter Title")}
                      style={{
                        color: card_title_font_color,
                      }}
                    />
                    )}
                    <div className="md_anitian_card_block__item__content__link">
                      {show_content && (
                      <RichText
                        tagName="p"
                        className="column-item-desc"
                        value={postObj.card_description}
                        onChange={(value) =>
                          updateStaticPostObj(index, "card_description", value)
                        }
                        placeholder={__("Enter Description")}
                        style={{
                          color: card_content_font_color,
                        }}
                      />
                      )}
                      {show_link && (
                      <RichText
                        tagName="p"
                        className="md_anitian_card_block__item__link"
                        value={postObj.learn_more_link}
                        onChange={(value) =>
                          updateStaticPostObj(index, "learn_more_link", value)
                        }
                        placeholder={__("Link")}
                        style={{
                          color: card_learn_more_font_color,
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
