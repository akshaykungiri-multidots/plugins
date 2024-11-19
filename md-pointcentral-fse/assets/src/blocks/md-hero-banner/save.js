/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
    const {
        title,
        description,
        buttonText,
        bannerImage,
        backgroundColor,
        titleColor,
        descriptionColor,
        buttonTextColor,
        buttonBackgroundColor,
        showTitle,
        showDescription,
        showButton,
        showImage,
      } = attributes;
    return (
        <div {...useBlockProps.save({className: "md_hero_banner"})}>
            <div className="pointcentral-hero-banner" style={{backgroundColor}}>
                <div className="container">
                    <div className="pointcentral-hero-banner-inner">
                        <div className="pointcentral-hero-banner-left">
                            <div className="pointcentral-hero-banner-content">
                                {showTitle && (
                                    <RichText.Content
                                        tagName="h1"
                                        className="pointcentral-hero-banner-title"
                                        value={title}
                                        style={{color: titleColor}}
                                    />
                                )}
                                {showDescription && (
                                    <RichText.Content
                                        tagName="p"
                                        className="pointcentral-hero-banner-description"
                                        value={description}
                                        style={{color: descriptionColor}}
                                    />
                                )}
                                {showButton && buttonText && (
                                    <div className="pointcentral-hero-banner-button">
                                        <RichText.Content
                                            tagName="span"
                                            className="pointcentral-hero-banner-button-text"
                                            value={buttonText}
                                            style={{color: buttonTextColor, backgroundColor: buttonBackgroundColor}}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                        {showImage && (
                        <div className="pointcentral-hero-banner-right">
                            <div className="solution-image">
                                {bannerImage && (
                                    <img  src={ bannerImage } alt="background" />
                                )}
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
