/**
 * File Sample-dynamic.js
 * 
 */
(function ($) {
    "use strict";
    jQuery(document).on("click", ".md_real_facts_btn", function(){
        jQuery(".md_real_facts__more_item").slideToggle();
        jQuery(".mdTimelineSlide").slick('refresh');
        jQuery(".md_slider").slick('refresh');
    });
})( jQuery );