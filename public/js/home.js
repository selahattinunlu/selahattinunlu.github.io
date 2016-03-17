(function($) {
   // jQuery is ready...
   $(function() {
      var $homeHeroSpan = $('.home-hero .description span');

      if ($.fn.typed) {
         $homeHeroSpan.typed({
            strings: ["Full Time Developer & Part Time Student", "Full Stack Developer & Youtuber"],
            cursorChar: '_',
            contentType: 'text',
            typeSpeed: 30,
            startDelay: 1500
         })
      }
   });

   if (addEffectAsChaining) {
      addEffectAsChaining('.footer-item .body', 'zoomIn');
   }
})(jQuery);
