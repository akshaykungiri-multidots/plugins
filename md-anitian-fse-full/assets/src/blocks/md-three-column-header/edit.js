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
} from "@wordpress/block-editor";

import {
  PanelBody,
  Button,
} from "@wordpress/components";

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
  const { bannerTitle, backgroundMediaImage, columnList } = attributes;

  const [currentSlide, setCurrentSlide] = useState(0);

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
  const removeStaticPostObj = (index) => {
    const updatedStaticPostObj = [...columnList];
    updatedStaticPostObj.splice(index, 1);
    setAttributes({ columnList: updatedStaticPostObj });
    setCurrentSlide(-1);
  };

  return (
    <div {...useBlockProps({className: "md_anitian_three_column_header_section"})}>
      <InspectorControls>
        <PanelBody title={__("Block Settings", "md-storyful-fse-full")}>
          <label>{__("Background Image")}</label>
          <MediaUpload
            title={__("Background Image")}
            onSelect={(media) =>
              setAttributes({
                backgroundMediaImage: media.url,
              })
            }
            multiple={false}
            render={({ open }) => (
              <>
                <Button className="md_bg_image_upload" onClick={open}>
                  {backgroundMediaImage == "" ? (
                    <i className="dashicons dashicons-format-image"> </i>
                  ) : (
                    <img src={backgroundMediaImage} alt="background" />
                  )}
                </Button>
              </>
            )}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_anitian_three_column_header">
        <div
          className="md_anitian_three_column_header__bg_image"
          style={{ backgroundImage: `url(${backgroundMediaImage})` }}
        >
          <div className="container">
            <div className="md_anitian_three_column_header__heading">
              <RichText
                tagName="h2"
                value={bannerTitle}
                onChange={(value) => setAttributes({ bannerTitle: value })}
                placeholder={__("Enter Title")}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="md_anitian_three_column_header__content">
            {columnList &&
              columnList.map((postObj, index) => (
                <div className="md_anitian_three_column_header__item  show-items-hover-wrap">
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
                  <div className="md_anitian_three_column_header__item__image">
                    <MediaUpload
                      title={__("Image")}
                      onSelect={(media) =>
                        updateStaticPostObj(index, "image", media.url)
                      }
                      multiple={false}
                      render={({ open }) => (
                        <>
                          {postObj.image == "" ? (
                            <Button variant="primary" onClick={open}>
                              {__("Upload")}
                            </Button>
                          ) : (
                            <img onClick={open} src={postObj.image} />
                          )}
                        </>
                      )}
                    />
                  </div>
                  <div className="md_anitian_three_column_header__item__content">
                    <RichText
                      tagName="h5"
                      value={postObj.column_title}
                      onChange={(value) =>
                        updateStaticPostObj(index, "column_title", value)
                      }
                      placeholder={__("Enter Title")}
                    />
                    <RichText
                      tagName="p"
                      value={postObj.column_description}
                      onChange={(value) =>
                        updateStaticPostObj(index, "column_description", value)
                      }
                      placeholder={__("Enter Description")}
                    />
                    <RichText
                      tagName="a"
                      className="md_anitian_three_column_header__item__link"
                      value={postObj.column_link}
                      onChange={(value) =>
                        updateStaticPostObj(index, "column_link", value)
                      }
                      placeholder={__("Enter Title")}
                    />
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
