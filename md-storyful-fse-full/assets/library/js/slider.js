/**
 * File Slider.js.
 *
 * Handle Slick Slider of different blocks
 *
 * @param $
 */
(function ($) {
  "use strict";

  // Get all elements with class '.slick-slider'
  const sliders = document.querySelectorAll(".slick-slider");

  // Loop through each slider and initialize Slick slider if not already initialized
  sliders.forEach((slider) => {
    if (!slider.classList.contains("slick-initialized")) {
      jQuery(slider).slick();
    }
  });

  $(document).ready(function () {
    // Slick slider for client-testimonials
	alert("hi");
    setTimeout(function () {
      $(".client-testimonials").slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
      });
    }, 5000);
  });
})(jQuery);
