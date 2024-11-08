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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<form>
				<div className="form-group-radio">
					{/* News, Intelligence, Both */}
					<label htmlFor="newsletter-news">
						<input id="newsletter-news" type="radio" name="newsletter" value="news" />
						{__('News', 'md-storyful-fse-full')}
					</label>
					<label htmlFor="newsletter-intelligence">
						<input
							id="newsletter-intelligence"
							type="radio"
							name="newsletter"
							value="intelligence"
						/>
						{__('Intelligence', 'md-storyful-fse-full')}
					</label>
					<label htmlFor="newsletter-both">
						<input id="newsletter-both" type="radio" name="newsletter" value="both" />
						<input type="radio" name="newsletter" value="both" />
						{__('Both', 'md-storyful-fse-full')}
					</label>
				</div>
				<div className="form-group-subscribe">
					<div className="form-group">
						<input
							type="email"
							name="email"
							id="email"
							placeholder={__(
								'Email Address',
								'md-storyful-fse-full'
							)}
						/>
						<input
							type="submit"
							value={__('Sign Up', 'md-storyful-fse-full')}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
