$(document).ready(function() {
  // Show or hide the sticky footer button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.toparrow').fadeIn(200);
    } else {
      $('.toparrow').fadeOut(200);
    }
  });
  
  // Animate the scroll to top
  $('.toparrow').click(function(event) {
    event.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 300);
  })
});

