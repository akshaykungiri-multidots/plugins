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
import { useBlockProps, RichText, MediaUpload, InspectorControls } from "@wordpress/block-editor";

import { Button, SelectControl, PanelBody } from "@wordpress/components";

import { useState } from "@wordpress/element";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const { sub_title, title, heading_content, card_block_style, card_block_list } =
    attributes;

  const [currentSlide, setCurrentSlide] = useState(0);

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
  const removeStaticPostObj = (index) => {
    const updatedStaticPostObj = [...card_block_list];
    updatedStaticPostObj.splice(index, 1);
    setAttributes({ card_block_list: updatedStaticPostObj });
    setCurrentSlide(-1);
  };

  return (
    <div {...useBlockProps({ className: "md_anitian_card_block" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
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
        </PanelBody>
      </InspectorControls>
      <div className={`md_anitian_card_block ${card_block_style}`}>
        <div className="md_anitian_card_block__head">
          <div className="container">
            <div className="md_anitian_card_block__heading">
              <RichText
                tagName="h3"
                value={sub_title}
                onChange={(value) => setAttributes({ sub_title: value })}
                placeholder={__("Enter Sub Title", "md-anitian-fse-full")}
              />
              <RichText
                tagName="h2"
                value={title}
                onChange={(value) => setAttributes({ title: value })}
                placeholder={__("Enter Title", "md-anitian-fse-full")}
              />
              <RichText
                tagName="p"
                value={heading_content}
                onChange={(value) => setAttributes({ heading_content: value })}
                placeholder={__("Enter Heading Content", "md-anitian-fse-full")}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="md_anitian_card_block__content">
            {card_block_list &&
              card_block_list.map((postObj, index) => (
                <div className="md_anitian_card_block__item show-items-hover-wrap">
                  <div className="item-action-wrap show-items-hover small-icons">
                    <div className="move-item">
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
                  <div className="md_anitian_card_block__item__image">
                    <MediaUpload
                      title={__("Image")}
                      onSelect={(media) =>
                        updateStaticPostObj(index, "card_image", media.url)
                      }
                      multiple={false}
                      render={({ open }) => (
                        <>
                          {postObj.card_image == "" ? (
                            <Button variant="primary" onClick={open}>
                              {__("Upload")}
                            </Button>
                          ) : (
                            <img onClick={open} src={postObj.card_image} />
                          )}
                        </>
                      )}
                    />
                  </div>
                  <div className="md_anitian_card_block__item__content">
                    <RichText
                      tagName="h3"
                      className="column-item-title"
                      value={postObj.card_title}
                      onChange={(value) =>
                        updateStaticPostObj(index, "card_title", value)
                      }
                      placeholder={__("Enter Title")}
                    />
                    <div className="md_anitian_card_block__item__content__link">
                      <RichText
                        tagName="p"
                        className="column-item-desc"
                        value={postObj.card_description}
                        onChange={(value) =>
                          updateStaticPostObj(index, "card_description", value)
                        }
                        placeholder={__("Enter Description")}
                      />
                      <RichText
                        tagName="a"
                        className="md_anitian_card_block__item__link"
                        value={postObj.learn_more_link}
                        onChange={(value) =>
                          updateStaticPostObj(index, "learn_more_link", value)
                        }
                        placeholder={__("Enter Title")}
                      />
                    </div>
                  </div>
                </div>
              ))}
            <div className="add-item-wrap">
              <Button variant="primary" onClick={addStaticPostObj}>
                {__("Add New Slide")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
