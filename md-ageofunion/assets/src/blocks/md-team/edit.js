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
  MediaUploadCheck,
  MediaUpload,
  PanelColorSettings,
  RichText,
} from "@wordpress/block-editor";

/**
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { WPElement } from "@wordpress/element";

import {
  PanelBody,
  Button,
  ToggleControl,
  Tooltip,
} from "@wordpress/components";

import placeholder from "./placeholder-image.png";

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
    headingLabel,
    showHeading,
    showHeadingLabel,
    headingLabelColor,
    headingColor,
    backgroundColour,
    teamMembers,
    showTeamMemberName,
    showTeamMemberPosition,
    teamMemberNameColor,
    teamMemberPositionColor,
  } = attributes;

  const siteURL = window.location.origin;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...teamMembers,
      {
        id: teamMembers.length + 1,
        image: "",
        name: "",
        position: "",
      },
    ];
    setAttributes({ teamMembers: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...teamMembers];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ teamMembers: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...teamMembers];
    arrayCopy[oldIndex] = teamMembers[newIndex];
    arrayCopy[newIndex] = teamMembers[oldIndex];

    setAttributes({
      teamMembers: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps({ className: "md_team_section" })}>
      <InspectorControls>
        <PanelBody title={__("Block Settings")} initialOpen={true}>
          <ToggleControl
            label={__("Show Heading")}
            checked={showHeading}
            onChange={(value) => setAttributes({ showHeading: value })}
          />
          <ToggleControl
            label={__("Show Heading Label")}
            checked={showHeadingLabel}
            onChange={(value) => setAttributes({ showHeadingLabel: value })}
          />
          <ToggleControl
            label={__("Show Team Member Name")}
            checked={showTeamMemberName}
            onChange={(value) => setAttributes({ showTeamMemberName: value })}
          />
          <ToggleControl
            label={__("Show Team Member Position")}
            checked={showTeamMemberPosition}
            onChange={(value) =>
              setAttributes({ showTeamMemberPosition: value })
            }
          />
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: headingColor,
                onChange: (value) => setAttributes({ headingColor: value }),
                label: __("Heading Color"),
              },
              {
                value: headingLabelColor,
                onChange: (value) =>
                  setAttributes({ headingLabelColor: value }),
                label: __("Heading Label Color"),
              },
              {
                value: teamMemberNameColor,
                onChange: (value) =>
                  setAttributes({ teamMemberNameColor: value }),
                label: __("Team Member Name Color"),
              },
              {
                value: teamMemberPositionColor,
                onChange: (value) =>
                  setAttributes({ teamMemberPositionColor: value }),
                label: __("Team Member Position Color"),
              },
              {
                value: backgroundColour,
                onChange: (value) => setAttributes({ backgroundColour: value }),
                label: __("Background Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div
        className="md_team_section__inner"
        style={{ backgroundColor: backgroundColour }}
      >
        <div className="container">
          {showHeadingLabel && (
          <RichText
            tagName="aside"
            className="md_team_section__heading_label"
            value={headingLabel}
            onChange={(value) => setAttributes({ headingLabel: value })}
            placeholder={__("Heading Label")}
            style={{ color: headingLabelColor }}
          />
          )}
          {showHeading && (
          <RichText
            tagName="h2"
            className="md_team_section__heading"
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
            placeholder={__("Heading")}
            style={{ color: headingColor }}
          />
          )}
          <div className="md_team_section__team_grid">
            <div className="md_team_section__team_grid__list">
              {teamMembers &&
                teamMembers.map((postObj, index) => (
                  <div
                    key={postObj.id}
                    className="md_team_section__team_grid__list__item show-items-hover-wrap"
                  >
                    <div className="item-action-wrap show-items-hover small-icons">
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
                        {index + 1 < teamMembers.length && (
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
                      {1 < teamMembers.length && (
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
                                const updatedArray = teamMembers.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  teamMembers: updatedArray,
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
                                  const updatedArray = teamMembers.filter(
                                    (item, itemIndex) => itemIndex !== index
                                  );
                                  setAttributes({
                                    teamMembers: updatedArray,
                                  });
                                }
                              }
                            }}
                            aria-label="Delete item"
                          ></i>
                        </Tooltip>
                      )}
                    </div>
                    <div className="md_team_section__team_grid__list__item__image">
                      <div className="md-prime-block-control image-preview image-controle-visible-hover">
                        <div
                          className={`image-controls small-icons icon-center-fixed`}
                        >
                          <MediaUploadCheck>
                            <MediaUpload
                              onSelect={(media) =>
                                updateStaticPostObj(index, "image", media.url)
                              }
                              allowedTypes={["image"]}
                              value={postObj.image}
                              render={({ open }) => (
                                <>
                                  {postObj.image ? (
                                    <>
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
                                      <Tooltip
                                        text={__("Remove Image", "md-prime")}
                                      >
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
                                              updateStaticPostObj(
                                                index,
                                                "image",
                                                ""
                                              );
                                            }
                                          }}
                                          role="button"
                                          tabIndex={0}
                                          onKeyDown={(e) => {
                                            if (
                                              e.key === "Enter" ||
                                              e.key === " "
                                            ) {
                                              e.preventDefault();
                                              updateStaticPostObj(
                                                index,
                                                "image",
                                                ""
                                              );
                                            }
                                          }}
                                          aria-label={__(
                                            "Remove image",
                                            "md-prime"
                                          )}
                                        ></i>
                                      </Tooltip>
                                    </>
                                  ) : (
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
                                </>
                              )}
                            />
                          </MediaUploadCheck>
                        </div>
                        {postObj.image ? (
                          <img src={postObj.image} alt={"slider"} />
                        ) : (
                          <img src={siteURL + placeholder} alt={"slider"} />
                        )}
                      </div>
                    </div>
                    <div className="md_team_section__team_grid__list__item__content">
                      {showTeamMemberName && (
                        <RichText
                          tagName="h3"
                          className="md_team_section__team_grid__list__item__content__name"
                          value={postObj.name}
                          onChange={(value) =>
                            updateStaticPostObj(index, "name", value)
                          }
                          placeholder={__("Name")}
                          style={{ color: teamMemberNameColor }}
                        />
                      )}
                      {showTeamMemberPosition && (
                        <RichText
                          tagName="h3"
                          className="md_team_section__team_grid__list__item__content__position"
                          value={postObj.position}
                          onChange={(value) =>
                            updateStaticPostObj(index, "position", value)
                          }
                          placeholder={__("Position")}
                          style={{ color: teamMemberPositionColor }}
                        />
                      )}
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
    </div>
  );
}
