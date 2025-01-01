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
 * React hook that is used to mark the packages element.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/
 */
import { WPElement } from "@wordpress/element";

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
  return (
    <div {...useBlockProps.save({ className: "md_team_section" })}>
      <div
        className="md_team_section__inner"
        style={{ backgroundColor: backgroundColour }}
      >
        <div className="container">
          {showHeadingLabel && (
          <RichText.Content
            tagName="aside"
            className="md_team_section__heading_label"
            value={headingLabel}
            placeholder={__("Heading Label")}
            style={{ color: headingLabelColor }}
          />
          )}
          {showHeading && (
          <RichText.Content
            tagName="h2"
            className="md_team_section__heading"
            value={heading}
            placeholder={__("Heading")}
            style={{ color: headingColor }}
          />
          )}
          <div className="md_team_section__team_grid">
            <div className="md_team_section__team_grid__list">
              {teamMembers &&
                teamMembers.map((postObj) => (
                  <div
                    key={postObj.id}
                    className="md_team_section__team_grid__list__item show-items-hover-wrap"
                  >
                    <div className="md_team_section__team_grid__list__item__image">
                      <div className="md-prime-block-control image-preview image-controle-visible-hover">
                        
                        {postObj.image && (
                          <img src={postObj.image} alt={"slider"} />
                        )}
                      </div>
                    </div>
                    <div className="md_team_section__team_grid__list__item__content">
                      {showTeamMemberName && (
                        <RichText.Content
                          tagName="h3"
                          className="md_team_section__team_grid__list__item__content__name"
                          value={postObj.name}
                          placeholder={__("Name")}
                          style={{ color: teamMemberNameColor }}
                        />
                      )}
                      {showTeamMemberPosition && (
                        <RichText.Content
                          tagName="h3"
                          className="md_team_section__team_grid__list__item__content__position"
                          value={postObj.position}
                          placeholder={__("Position")}
                          style={{ color: teamMemberPositionColor }}
                        />
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
