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
	const { columnList, columnTitleFontColor, columnDescriptionFontColor } =
		attributes;
	return (
		<div {...useBlockProps.save({ className: 'md-counter_block' })}>
			<div className="storyful-stat-number">
				<div className="container">
					<div className="stats-block-bottom">
						{columnList &&
							columnList.map((postObj, index) => (
								<div
									className="stats-block-bottom__item fadeInUp"
									key={index}
								>
									<RichText.Content
										tagName="h3"
										value={postObj.title}
										style={{
											color: columnTitleFontColor,
										}}
									/>
									<RichText.Content
										tagName="p"
										className="column-item-desc"
										value={postObj.description}
										style={{
											color: columnDescriptionFontColor,
										}}
									/>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
