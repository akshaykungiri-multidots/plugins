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
		buyButtonText,
		sellButtonText,
		licenseText,
		learnMoreText
	} = attributes;
	return (
		<div {...useBlockProps({className: "md_video_licensing",})}>
			<div class="storyful-video-licensing">
				<div class="container">
					<div class="video-licensing-wrap">
						<div class="video-licensing-wrap__left">
							<RichText
								tagName="h1"
								className="section-title h1 wow fadeInLeft"
								value={heading}
								onChange={(value) => setAttributes({ heading: value })}
								placeholder={__('Enter title...', 'md-blocks')}
							/>
							<div class="bye-sell-button wow fadeInLeft">
								<RichText
									tagName="span"
									className='link'
									value={buyButtonText}
									onChange={(value) => setAttributes({ buyButtonText: value })}
									placeholder={__('Enter buy button text...', 'md-blocks')}
								/>
								<RichText
									tagName="span"
									className='link'
									value={sellButtonText}
									onChange={(value) => setAttributes({ sellButtonText: value })}
									placeholder={__('Enter sell button text...', 'md-blocks')}
								/>
							</div>
						</div>
						<div class="video-licensing-wrap__right">
							<div class="licensing-description-and-button">
								<RichText
									tagName="h2"
									className="licensing-description"
									value={licenseText}
									onChange={(value) => setAttributes({ licenseText: value })}
									placeholder={__('Enter description...', 'md-blocks')}
								/>
								<div class="sbtn sbtn-arrow-primary">
									<span class="btn-text">
										<RichText
											tagName="a"
											value={learnMoreText}
											onChange={(value) => setAttributes({ learnMoreText: value })}
											placeholder={__('Enter learn more button text...', 'md-blocks')}
										/>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
