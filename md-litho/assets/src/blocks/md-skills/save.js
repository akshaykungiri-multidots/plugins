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
import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
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
  return (
    <div {...useBlockProps.save({ className: "md_skills" })}>
      <div className="md_skills__inner">
        <div className="md_skills__content">
          {showSubheading && (
            <div
              className="md_skills__subheading"
              style={{ color: subheadingColor }}
            >
              <span className="horizontal-separator"></span>
              <RichText.Content
                tagName="span"
                className="md_skills__subheading-text"
                value={subheading}
                placeholder={__("Subheading")}
              />
            </div>
          )}
          {showHeading && (
            <RichText.Content
              tagName="h2"
              className="md_skills__heading"
              value={heading}
              placeholder={__("Heading")}
              style={{ color: headingColor }}
            />
          )}
          {showDescription && (
            <RichText.Content
              tagName="p"
              className="md_skills__description"
              value={description}
              placeholder={__("Description")}
              style={{ color: descriptionColor }}
            />
          )}
        </div>
        {showSkills && (
          <div className="md_skills__progress__wrapper">
            <ul className="md_skills__progress__inner">
              {skills &&
                skills.map((postObj) => (
                  <li
                    key={postObj.id}
                    className="md_skills__progress__item show-items-hover-wrap"
                  >
                    <div className="md_skills__progress__item__inner">
                      <div className="md_skills__progress__item__title-wrap">
                        <RichText.Content
                          tagName="span"
                          className="md_skills__progress__item__title"
                          value={postObj.title}
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
                      ></div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
