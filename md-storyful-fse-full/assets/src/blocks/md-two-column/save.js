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
		title,
		description,
		backgroundImage,
		titleFontColor,
		descriptionFontColor,
	} = attributes;
	return (
		<div {...useBlockProps.save({ className: 'md_two_column' })}>
			<div
				className="storyful-two-column"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				<div className="container">
					<div className="two-columns__title">
						<RichText.Content
							tagName="h2"
							value={title}
							style={{
								color: titleFontColor,
							}}
						/>
					</div>
					<div className="two-columns__description wow fadeInRight">
						<RichText.Content
							tagName="p"
							value={description}
							style={{
								color: descriptionFontColor,
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
