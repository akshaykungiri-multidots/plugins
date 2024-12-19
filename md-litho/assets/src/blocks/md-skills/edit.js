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
  PanelColorSettings,
  RichText,
} from "@wordpress/block-editor";

import {
  PanelBody,
  ToggleControl,
  Tooltip,
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
    subheading,
    heading,
    description,
    skills,
    showSubheading,
    showHeading,
    showDescription,
    showSkills,
    subheadingColor,
    headingColor,
    descriptionColor,
    skillsTitleColor,
    skillsProgressColor,
  } = attributes;

  const addStaticPostObj = () => {
    const staticPostObj = [
      ...skills,
      {
        id: skills.length + 1,
        title: "",
        progress: 0,
      },
    ];
    setAttributes({ skills: staticPostObj });
  };
  const updateStaticPostObj = (index, key, value) => {
    const updatedStaticPostObj = [...skills];
    updatedStaticPostObj[index][key] = value;
    setAttributes({ skills: updatedStaticPostObj });
  };
  const moveItem = (oldIndex, newIndex) => {
    const arrayCopy = [...skills];
    arrayCopy[oldIndex] = skills[newIndex];
    arrayCopy[newIndex] = skills[oldIndex];

    setAttributes({
      skills: arrayCopy,
    });
  };

  return (
    <div {...useBlockProps({ className: "md_skills" })}>
      <InspectorControls>
        <PanelBody title={__("Title Settings")}>
          <ToggleControl
            label={__("Show Subheading")}
            checked={showSubheading}
            onChange={() => setAttributes({ showSubheading: !showSubheading })}
          />
          <ToggleControl
            label={__("Show Heading")}
            checked={showHeading}
            onChange={() => setAttributes({ showHeading: !showHeading })}
          />
          <ToggleControl
            label={__("Show Description")}
            checked={showDescription}
            onChange={() =>
              setAttributes({ showDescription: !showDescription })
            }
          />
          <ToggleControl
            label={__("Show Skills")}
            checked={showSkills}
            onChange={() => setAttributes({ showSkills: !showSkills })}
          />
        </PanelBody>
        <PanelBody title={__("Color Settings")} initialOpen={false}>
          <PanelColorSettings
            title={__("Color Settings")}
            colorSettings={[
              {
                value: subheadingColor,
                onChange: (colorValue) =>
                  setAttributes({ subheadingColor: colorValue }),
                label: __("Subheading Color"),
              },
              {
                value: headingColor,
                onChange: (colorValue) =>
                  setAttributes({ headingColor: colorValue }),
                label: __("Heading Color"),
              },
              {
                value: descriptionColor,
                onChange: (colorValue) =>
                  setAttributes({ descriptionColor: colorValue }),
                label: __("Description Color"),
              },
              {
                value: skillsTitleColor,
                onChange: (colorValue) =>
                  setAttributes({ skillsTitleColor: colorValue }),
                label: __("Skills Title Color"),
              },
              {
                value: skillsProgressColor,
                onChange: (colorValue) =>
                  setAttributes({ skillsProgressColor: colorValue }),
                label: __("Skills Progress Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <div className="md_skills__inner">
        <div className="md_skills__content">
          {showSubheading && (
            <div
              className="md_skills__subheading"
              style={{ color: subheadingColor }}
            >
              <span className="horizontal-separator"></span>
              <RichText
                tagName="span"
                className="md_skills__subheading-text"
                value={subheading}
                onChange={(value) => setAttributes({ subheading: value })}
                placeholder={__("Subheading")}
              />
            </div>
          )}
          {showHeading && (
            <RichText
              tagName="h2"
              className="md_skills__heading"
              value={heading}
              onChange={(value) => setAttributes({ heading: value })}
              placeholder={__("Heading")}
              style={{ color: headingColor }}
            />
          )}
          {showDescription && (
            <RichText
              tagName="p"
              className="md_skills__description"
              value={description}
              onChange={(value) => setAttributes({ description: value })}
              placeholder={__("Description")}
              style={{ color: descriptionColor }}
            />
          )}
        </div>
        {showSkills && (
        <div className="md_skills__progress__wrapper">
          <ul className="md_skills__progress__inner">
            {skills &&
              skills.map((postObj, index) => (
                <li
                  key={postObj.id}
                  className="md_skills__progress__item show-items-hover-wrap"
                >
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
                      {index + 1 < skills.length && (
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
                    {1 < skills.length && (
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
                              const updatedArray = skills.filter(
                                (item, itemIndex) => itemIndex !== index
                              );
                              setAttributes({
                                skills: updatedArray,
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
                                const updatedArray = skills.filter(
                                  (item, itemIndex) => itemIndex !== index
                                );
                                setAttributes({
                                  skills: updatedArray,
                                });
                              }
                            }
                          }}
                          aria-label="Delete item"
                        ></i>
                      </Tooltip>
                    )}
                  </div>
                  <div className="md_skills__progress__item__inner">
                    <div className="md_skills__progress__item__title-wrap">
                      <RichText
                        tagName="span"
                        className="md_skills__progress__item__title"
                        value={postObj.title}
                        onChange={(value) =>
                          updateStaticPostObj(index, "title", value)
                        }
                        placeholder={__("Skill Title")}
                        style={{ color: skillsTitleColor }}
                      />
                      <span className="progress-percent">
                        {postObj.progress}%
                      </span>
                    </div>
                    <div
                      className="skills-progress"
                      style={{
                        width: `${postObj.progress}%`,
                        height: "5px",
                        backgroundColor: skillsProgressColor,
                        marginTop: "2px",
                      }}
                    >
                    </div>
                  </div>
                  <RangeControl
                    label={__("Select Progress Range")}
                    value={postObj.progress}
                    onChange={(value) =>
                      updateStaticPostObj(index, "progress", value)
                    }
                    min={0}
                    max={100}
                  />
                </li>
              ))}
          </ul>
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
        )}
      </div>
    </div>
  );
}
