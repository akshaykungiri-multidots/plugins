import { __ } from '@wordpress/i18n';

// background image sizes
export const backgroundSizes = [
	{ label: __('Select Background Size'), value: '' },
	{ label: __('auto'), value: 'auto' },
	{ label: __('cover'), value: 'cover' },
	{ label: __('contain'), value: 'contain' },
	{ label: __('initial'), value: 'initial' },
	{ label: __('inherit'), value: 'inherit' },
];

// background image positions
export const backgroundPositions = [
	{ label: __('Select Position'), value: '' },
	{ label: __('inherit'), value: 'inherit' },
	{ label: __('initial'), value: 'initial' },
	{ label: __('bottom'), value: 'bottom' },
	{ label: __('center'), value: 'center' },
	{ label: __('left'), value: 'left' },
	{ label: __('right'), value: 'right' },
	{ label: __('top'), value: 'top' },
	{ label: __('unset'), value: 'unset' },
	{ label: __('center center'), value: 'center center' },
	{ label: __('left top'), value: 'left top' },
	{ label: __('left center'), value: 'left center' },
	{ label: __('left bottom'), value: 'left bottom' },
	{ label: __('right top'), value: 'right top' },
	{ label: __('right center'), value: 'right center' },
	{ label: __('right bottom'), value: 'right bottom' },
	{ label: __('center top'), value: 'center top' },
	{ label: __('center bottom'), value: 'center bottom' },
];

export const mdprimeColors = [
	{ name: __('Palatinate Blue'), color: '#3333ff' },
	{ name: __('Beau Blue'), color: '#b8d9f7' },
	{ name: __('Non-Photo Blue'), color: '#a5d9f5' },
	{ name: __('Dark Imperial Blue'), color: '#0b1571' },
	{ name: __('Turquoise'), color: '#2ED9C3' },
	{ name: __('Water'), color: '#d5f7f3' },
	{ name: __('Azureish White'), color: '#D9f1ee' },
	{ name: __('White'), color: '#ffffff' },
	{ name: __('Black'), color: '#000000' },
	{ name: __('Chinese Black'), color: '#171417' },
	{ name: __('Cultured'), color: '#f6f6f6' },
	{ name: __('Macaroni And Cheese'), color: '#f6c485' },
];

export const mdprimeBtnStyles = [
	{ label: __('Primary'), value: 'btn-main' },
	{ label: __('Secondary'), value: 'btn-main btn-secondary' },
	{ label: __('Tertiary'), value: 'btn-main btn-tertiary' },
	{ label: __('Link With Icon'), value: 'btn-main btn-link-right-arrow' },
];

export function initSlickSlider() {
	// Get all elements with class '.slick-slider'
	const sliders = document.querySelectorAll('.slick-slider');

	// Loop through each slider and initialize Slick slider if not already initialized
	sliders.forEach((slider) => {
		if (!slider.classList.contains('slick-initialized')) {
			jQuery(slider).slick();
		}
	});
}

let isMobile = window.innerWidth < 992; // Initial value

function updateIsMobile() {
	isMobile = window.innerWidth < 992;
}

window.addEventListener('resize', updateIsMobile);

export function isMobileDevice() {
	return isMobile;
}
