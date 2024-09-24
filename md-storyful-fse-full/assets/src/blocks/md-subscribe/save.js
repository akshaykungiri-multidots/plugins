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
import './style.scss';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save() {
	return (
		<div {...useBlockProps.save()}>
			<form>
				<div className="form-group-radio">
					{/* News, Intelligence, Both */}
					<label>
						<input type="radio" name="newsletter" value="news" />
						{__('News', 'md-storyful-fse-full')}
					</label>
					<label>
						<input type="radio" name="newsletter" value="intelligence" />
						{__('Intelligence', 'md-storyful-fse-full')}
					</label>
					<label>
						<input type="radio" name="newsletter" value="both" />
						{__('Both', 'md-storyful-fse-full')}
					</label>
				</div>
				<div className="form-group-subscribe">
					<div className="form-group">
						<input type="email" name="email" id="email" placeholder={__('Email Address', 'md-storyful-fse-full')} />
						<input type="submit" value={__('Sign Up', 'md-storyful-fse-full')} />
					</div>
				</div>
			</form>
		</div>
	);
}
