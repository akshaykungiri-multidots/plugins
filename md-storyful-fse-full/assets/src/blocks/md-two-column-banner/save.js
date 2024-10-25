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
		section_left_title,
		section_left_description,
		section_left_button_link,
		section_left_image,
		section_right_title,
		section_right_description,
		section_right_button_link,
		section_right_image,
		section_left_title_font_size,
		section_left_title_font_color,
		section_left_description_font_size,
		section_left_description_font_color,
		section_left_button_font_size,
		section_right_title_font_size,
		section_right_title_font_color,
		section_right_description_font_size,
		section_right_description_font_color,
		section_right_button_font_size,
	  } = attributes;

	return (
		<div
		{...useBlockProps.save({
			className: "md_two_column_banner",
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
									value={section_left_title}
									style={{
										fontSize: section_left_title_font_size,
										color: section_left_title_font_color,
									}}
								/>
								<RichText.Content
									tagName="p"
									className="cta-section-desc"
									value={section_left_description}
									style={{
										fontSize: section_left_description_font_size,
										color: section_left_description_font_color,
									}}
								/>
								<div className="sbtn sbtn-arrow-primary-v2">
									<span className="btn-text">
										<RichText.Content
											tagName="a"
											value={section_left_button_link}
											style={{
												fontSize: section_left_button_font_size,
											}}
										/>
									</span>
								</div>
							</div>
							{ section_left_image && (
								<div class="intelligence-section__media wow bounceIn">
									<div class="media-image-wrapper">
										<figure id="img-two">
											<img src={section_left_image} />
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
									value={section_right_title}
									style={{
										fontSize: section_right_title_font_size,
										color: section_right_title_font_color,
									}}
								/>
								<RichText.Content
									tagName="p"
									className="cta-section-desc"
									value={section_right_description}
									style={{
										fontSize: section_right_description_font_size,
										color: section_right_description_font_color,
									}}
								/>
								<div className="sbtn sbtn-arrow-primary-v2">
									<span className="btn-text">
										<RichText.Content
											tagName="a"
											value={section_right_button_link}
											style={{
												fontSize: section_right_button_font_size,
											}}
										/>
									</span>
								</div>
							</div>
							{ section_right_image && (
							<div class="cta-news-section__media wow bounceIn">
								<div class="media-image-wrapper">
									<figure id="img-one">
										<img src={section_right_image} />
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
