
$(function() {
   /*
   **********************
   Header Animation
   ***********************
   */
   var $header = $('#wrapper > .header');
   var $appContent = $('#wrapper > .app-content');

   var headerHeight = $header.outerHeight();
   var lastScrollTop = 0;

   $appContent.css('padding-top', headerHeight + 'px');

   $(document).scroll(function() {
      var scrollTop = $(document).scrollTop();

      // scroll down and scroll up
      if (scrollTop > lastScrollTop) { 
         if (scrollTop > 0 && ! $header.hasClass('is-small')) {
            $header.addClass('is-small');
         }

         if (scrollTop > 0 && scrollTop > headerHeight) {
            $header.addClass('is-hide');
         }
      } else {
         $header.removeClass('is-hide');

         if (scrollTop == 0) {
            $header.removeClass('is-small');
         }
      }

      lastScrollTop = scrollTop;
   });


   /*
   **********************
   Mobile Menu
   ***********************
   */
   var $mobileMenu = $('.mobile-menu');
   var $mobileMenuTrigger = $('.mobile-menu-trigger');
   var $mobileMenuCloseTrigger = $('.mobile-menu-close-trigger');

   $mobileMenuTrigger.click(function() {
      $mobileMenu.addClass('is-open');
   });

   $mobileMenuCloseTrigger.click(function() {
      $mobileMenu.removeClass('is-open');
   });
});


/*
**********************
Add Effect As Chaining
***********************
*/
window.addEffectAsChaining = function (elem, effect, timeout, index, callback) {
   var delay = timeout || 1000;
   var callback = callback || null;
   var index = index || 0;
   var items = $(elem);
   var total = items.length;
   var i = index;

   var current = $(items[i]);
   current.css('visibility', 'visible').addClass('animated').addClass(effect);

   delay = (total - i == 1) ? 0 : delay; 

   setTimeout(function() {
      if (i < total) {
         return addEffectAsChaining(elem, effect, delay, ++i, callback);
      }

      if (callback) {
         return callback();
      }
   }, delay);
}


/*
**********************
Project Box Animation
***********************
*/
window.initProjectBoxAnimation = function() {
   // Fix Mobile Browser's hover state issue
   $('.project-box').click(function() {
      return;
   });

   $('[data-target-project]').click(function() {
      var id = $(this).data('target-project');
      var target = $('[data-project="'+ id +'"]')

      target.addClass('is-open');
   });

   $('[data-trigger="dismiss"]').click(function() {
      var workDetailBox = $(this).parents('.project-detail-page-box');
      workDetailBox.removeClass('is-open');
   });
}
