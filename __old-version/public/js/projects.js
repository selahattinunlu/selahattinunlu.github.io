$('.project-box, #work-description').css('visibility', 'hidden');

addEffectAsChaining('.project-box', 'fadeIn', 1000, 0, function() {
   $('#work-description').css('visibility', 'visible').addClass('animated').addClass('fadeIn');
});

initProjectBoxAnimation();