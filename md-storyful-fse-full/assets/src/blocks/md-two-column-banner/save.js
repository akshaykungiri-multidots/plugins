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
 * @param  root0
 * @param  root0.attributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const {
		sectionLeftTitle,
		sectionLeftDescription,
		sectionLeftButtonLink,
		sectionLeftImage,
		sectionRightTitle,
		sectionRightDescription,
		sectionRightButtonLink,
		sectionRightImage,
		sectionLeftTitleFontColor,
		sectionLeftDescriptionFontColor,
		sectionRightTitleFontColor,
		sectionRightDescriptionFontColor,
		showSectionLeftTitle,
		showSectionLeftDescription,
		showSectionLeftButton,
		showSectionRightTitle,
		showSectionRightDescription,
		showSectionRightButton,
	} = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: 'md_two_column_banner',
			})}
		>
			<div className="cta-section">
				<div className="container-fluid">
					<div className="cta-section__right">
						<div className="intelligence-section">
							<div className="intelligence-section__details wow fadeInLeft">
								<RichText.Content
									tagName="h2"
									className="section-title h1 with-darkbg"
									value={sectionLeftTitle}
									style={{
										color: sectionLeftTitleFontColor,
									}}
								/>
								<RichText.Content
									tagName="p"
									className="cta-section-desc"
									value={sectionLeftDescription}
									style={{
										color: sectionLeftDescriptionFontColor,
									}}
								/>
								<div className="sbtn sbtn-arrow-primary-v2">
									<span className="btn-text">
										<RichText.Content
											tagName="a"
											value={sectionLeftButtonLink}
										/>
									</span>
								</div>
							</div>
							{sectionLeftImage && (
								<div className="intelligence-section__media wow bounceIn">
									<div className="media-image-wrapper">
										<figure id="img-two">
											<img src={sectionLeftImage} />
										</figure>
									</div>
								</div>
							)}
						</div>
					</div>
					<div className="cta-section__left">
						<div className="cta-news-section">
							<div className="cta-news-section__details wow fadeInLeft">
								<RichText.Content
									tagName="h2"
									className="section-title h1"
									value={sectionRightTitle}
									style={{
										color: sectionRightTitleFontColor,
									}}
								/>
								<RichText.Content
									tagName="p"
									className="cta-section-desc"
									value={sectionRightDescription}
									style={{
										color: sectionRightDescriptionFontColor,
									}}
								/>
								<div className="sbtn sbtn-arrow-primary-v2">
									<span className="btn-text">
										<RichText.Content
											tagName="a"
											value={sectionRightButtonLink}
										/>
									</span>
								</div>
							</div>
							{sectionRightImage && (
								<div className="cta-news-section__media wow bounceIn">
									<div className="media-image-wrapper">
										<figure id="img-one">
											<img src={sectionRightImage} />
										</figure>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
