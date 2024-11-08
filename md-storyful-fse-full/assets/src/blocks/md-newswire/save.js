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
		newswireLeftTitle,
		newswireLeftDescription,
		newswireRightImage,
		newswireTitle,
		newswireDescription,
		newswireSubTitle,
		newswireButtonLink,
		newswireThemeStyle,
		backgroundColor,
		newswireTitleFontColor,
		newswireDescriptionFontColor,
		newswireButtonFontColor,
		newswireLeftTitleFontColor,
		newswireLeftDescriptionFontColor,
		newswireSubTitleFontColor,
		showNewswireButton,
		showNewswireBottom,
		showNewswireLeftDescription,
	} = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div
				className={`newswire-by-storyful ${newswireThemeStyle}`}
				style={{ background: backgroundColor }}
			>
				<div className="container">
					<div className="newswire-by-storyful-top">
						<div className="newswire-by-storyful-top__left fadeInLeft">
							<RichText.Content
								tagName="div"
								value={newswireLeftTitle}
								className="section-title h1"
								style={{
									color: newswireLeftTitleFontColor,
								}}
							/>
							<RichText.Content
								tagName="h2"
								value={newswireLeftDescription}
								style={{
									color: newswireLeftDescriptionFontColor,
								}}
							/>
							<RichText.Content
								tagName="h3"
								value={newswireSubTitle}
								className="newswire-sub-title"
								style={{
									color: newswireSubTitleFontColor,
								}}
							/>
						</div>
						{newswireRightImage && (
							<div className="newswire-by-storyful-top__right wow fadeInRight">
								<div className="side-graphics">
									<img src={newswireRightImage} />
								</div>
							</div>
						)}
					</div>
					{showNewswireBottom && (
						<div className="newswire-by-storyful-buttom">
							<div className="newswire-by-storyful-buttom__grid">
								<div className="newswire-by-storyful-items single-col">
									<div className="newswire-by-storyful-items__item wow fadeInUp">
										<RichText.Content
											tagName="h3"
											value={newswireTitle}
											className="newswire-sub-title"
											style={{
												color: newswireTitleFontColor,
											}}
										/>
										{showNewswireLeftDescription && (
											<RichText.Content
												tagName="p"
												value={newswireDescription}
												className="newswire-description"
												style={{
													color: newswireDescriptionFontColor,
												}}
											/>
										)}
									</div>
								</div>
							</div>
							{showNewswireButton && (
								<div className="newswire-by-storyful-buttom__contact wow bounceIn">
									<div className="circle-button">
										<div className="circle-text">
											<RichText.Content
												tagName="a"
												value={newswireButtonLink}
												className="btn btn-primary"
												style={{
													color: newswireButtonFontColor,
												}}
											/>
										</div>
									</div>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
