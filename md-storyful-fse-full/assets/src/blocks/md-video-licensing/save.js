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
export default function save({ attributes }) {
	const {
		heading,
		buyButtonText,
		sellButtonText,
		licenseText,
		learnMoreText,
		headingFontColor,
		buyButtonFontColor,
		sellButtonFontColor,
		licenseFontColor,
		showBuyButton,
		showSellButton,
		showLicenseText,
		showLearnMore,
	} = attributes;
	return (
		<div {...useBlockProps.save({className: "storyful-video-licensing"})}>
			<div class="storyful-video-licensing">
				<div class="container">
					<div class="video-licensing-wrap">
						<div class="video-licensing-wrap__left">
							<RichText.Content
								tagName="h1"
								className="section-title h1 wow fadeInLeft"
								value={heading}
								style={{
									color: headingFontColor,
								}}
							/>
							<div class="bye-sell-button wow fadeInLeft">
								{showBuyButton && (
								<span class='link'>
									<RichText.Content
										tagName="a"
										value={buyButtonText}
										style={{
											color: buyButtonFontColor,
										}}
									/>
								</span>
								)}
								{showSellButton && (
								<span class='link'>
									<RichText.Content
										tagName="a"
										value={sellButtonText}
										style={{
											color: sellButtonFontColor,
										}}
									/>
								</span>
								)}
							</div>
						</div>
						<div class="video-licensing-wrap__right">
							<div class="licensing-description-and-button">
								{showLicenseText && (
								<RichText.Content
									tagName="h2"
									className="licensing-description"
									value={licenseText}
									style={{
										color: licenseFontColor,
									}}
								/>
								)}
								{showLearnMore && (
								<div class="sbtn sbtn-arrow-primary">
									<span class="btn-text">
										<RichText.Content
											tagName="a"
											value={learnMoreText}
										/>
									</span>
								</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
