(function($) {
   function handleHeaderAnimationWhenScrolling(parameters, e) {
      var $this = $(this),
         $header = parameters.header,
         lastScrollTop = parameters.lastScrollTop,
         headerHeight = $header.outerHeight(),
         scrollTop = $this.scrollTop(); 

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

      parameters.setLastScrollTop(scrollTop);
   }

   function toggleMobileMenu(e) {
      $('.mobile-menu').toggleClass('is-open');
   }

   // jQuery is ready...
   $(function() {
      var $header = $('#wrapper > .header'), 
         $appContent = $('#wrapper > .app-content'),
         $mobileMenuTrigger = $('[data-trigger="mobile-nav"]'),
         headerHeight = $header.outerHeight(),
         lastScrollTop = 0;

      $appContent.css('padding-top', headerHeight + 'px');

      $(document).on('scroll', $.proxy(handleHeaderAnimationWhenScrolling, null, { 
         header: $header,
         lastScrollTop: lastScrollTop,
         setLastScrollTop: function(value) {
            lastScrollTop = value;
         }
      }));

      $mobileMenuTrigger.on('click', toggleMobileMenu);
   });
})(jQuery);


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
