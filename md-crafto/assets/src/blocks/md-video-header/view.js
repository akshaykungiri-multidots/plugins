/**
 * File Sample-dynamic.js
 *
 */
(function () {
  "use strict";
  const wordsToType = document
      .querySelector(".md_crafto_text_video__typing")
      .getAttribute("data-typing-words")
      .split(","),
    typer = jQuery(".md_crafto_text_video__typing"),
    typingSpeed = parseInt(typer.data("typing-speed")) || 70,
    typingDelay = parseInt(typer.data("typing-delay")) || 700;
    
    
  let currentWordIndex = 0,
    currentCharacterIndex = 0;

  function type() {
    const wordToType = wordsToType[currentWordIndex % wordsToType.length];

    if (currentCharacterIndex < wordToType.length) {
      typer[0].innerHTML += wordToType[currentCharacterIndex++];
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, typingDelay);
    }
  }
  function erase() {
    const wordToType = wordsToType[currentWordIndex % wordsToType.length];
    if (currentCharacterIndex > 0) {
      typer[0].innerHTML = wordToType.substr(0, --currentCharacterIndex - 1);
      setTimeout(erase, typingSpeed);
    } else {
      currentWordIndex++;
      setTimeout(type, typingDelay);
    }
  }

  window.onload = function () {
    type();
  };

  jQuery(document).ready(function ($) {
    $(".md_crafto_text_video__youtube_icon .play-button").on("click", function () {
      $(".crafto_video_popup__wrap").addClass("show-popup");
    });
    $(".crafto_video_popup__inner-header .close-popup").on("click", function () {
      $(".crafto_video_popup__wrap").removeClass("show-popup");
    });
  });
})(jQuery);
