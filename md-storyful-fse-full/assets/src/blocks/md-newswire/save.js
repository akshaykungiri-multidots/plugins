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
		newswire_left_title,
		newswire_left_description,
		newswire_right_image,
		newswire_title,
		newswire_description,
		newswire_sub_title,
		newswire_button_link,
		newswire_theme_style,
		background_color,
		newswire_title_font_size,
		newswire_title_font_color,
		newswire_description_font_size,
		newswire_description_font_color,
		newswire_button_font_size,
		newswire_button_font_color,
		newswire_left_title_font_size,
		newswire_left_title_font_color,
		newswire_left_description_font_size,
		newswire_left_description_font_color,
		newswire_sub_title_font_size,
		newswire_sub_title_font_color,
	} = attributes;
	return (
		<div { ...useBlockProps.save() }>
			<div class={`newswire-by-storyful ${newswire_theme_style}`} style={{ background: background_color }}>
					<div class="container">
						<div class="newswire-by-storyful-top">
							<div class="newswire-by-storyful-top__left fadeInLeft">
								<RichText.Content
									tagName="div"
									value={newswire_left_title}
									className="section-title h1"
									style={{
										fontSize: newswire_left_title_font_size + "px",
										color: newswire_left_title_font_color,
									}}
								/>
								<RichText.Content
									tagName="h2"
									value={newswire_left_description}
									style={{
										fontSize: newswire_left_description_font_size + "px",
										color: newswire_left_description_font_color,
									}}
								/>
								<RichText.Content
									tagName="h3"
									value={newswire_sub_title}
									className="newswire-sub-title"
									style={{
										fontSize: newswire_sub_title_font_size + "px",
										color: newswire_sub_title_font_color,
									}}
								/>
							</div>
							{ newswire_right_image && (
							<div class="newswire-by-storyful-top__right wow fadeInRight">
								<div class="side-graphics">
									<img src={newswire_right_image} />
								</div>
							</div>
							)}
						</div>
						{ newswire_theme_style == 'style1' && (
						<div class="newswire-by-storyful-buttom">
							<div class="newswire-by-storyful-buttom__grid">
								<div class="newswire-by-storyful-items single-col">
									<div class="newswire-by-storyful-items__item wow fadeInUp">
										<RichText.Content
											tagName="h3"
											value={newswire_title}
											className="newswire-sub-title"
											style={{
												fontSize: newswire_title_font_size + "px",
												color: newswire_title_font_color,
											}}
										/>
										<RichText.Content
											tagName="p"
											value={newswire_description}
											className="newswire-description"
											style={{
												fontSize: newswire_description_font_size + "px",
												color: newswire_description_font_color,
											}}
										/>
									</div>
								</div>
							</div>
							<div class="newswire-by-storyful-buttom__contact wow bounceIn">
								<div class="circle-button">
									<div class="circle-text">
										<RichText.Content
											tagName="a"
											value={newswire_button_link}
											className="btn btn-primary"
											style={{
												fontSize: newswire_button_font_size + "px",
												color: newswire_button_font_color,
											}}
										/>
									</div>
								</div>
							</div>
						</div>
						)}
					</div>
				</div>
		</div>
	);
}
