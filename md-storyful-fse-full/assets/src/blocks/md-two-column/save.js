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
		title,
		description,
		background_image,
		titleFontSize,
		titleFontColor,
		descriptionFontSize,
		descriptionFontColor,
	  } = attributes;
	return (
		<div {...useBlockProps.save({className: "md_two_column"})}>
			<div className="storyful-two-column" style={{backgroundImage: `url(${background_image})`}}>
				<div class="container">
					<div class="two-columns__title">
						<RichText.Content
							tagName="h2"
							value={title}
							style={{
								fontSize: titleFontSize,
								color: titleFontColor,
							}}
						/>
					</div>
					<div class="two-columns__description wow fadeInRight">
						<RichText.Content
							tagName="p"
							value={description}
							style={{
								fontSize: descriptionFontSize,
								color: descriptionFontColor,
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
