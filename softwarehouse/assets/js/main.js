

// ===================================================
// 
//      top header
// 
// ===================================================
var dots = document.querySelector('.threedots');
var headerContactInfo = document.querySelector('#headerContactInfo');
var sidemenu = document.querySelector('.sidemenu');
var menuToggler = document.querySelector('#menuToggler');

dots.addEventListener('click', function(){
    sidemenu.classList.remove('show');
    headerContactInfo.classList.toggle('show');
});

menuToggler.addEventListener('click', function(){
    sidemenu.classList.toggle('show');
    headerContactInfo.classList.remove('show');

    if(menuToggler.classList.contains('fa-bars')){
        menuToggler.classList.remove('fa-bars')
        menuToggler.classList.add('fa-times')
    }else{
        menuToggler.classList.add('fa-bars')
        menuToggler.classList.remove('fa-times')
    }

});



// ===================================================
// 
//      SEARCH FORM TOGGLE
// 
// ===================================================

var searchbtn = document.querySelector('#searchbtn');
var searchform = document.querySelector('#searchform');
var closesearchformbtn = document.querySelector('#closesearchformbtn');
var navbarContent = document.querySelector('#navbarContent');
searchbtn.addEventListener('click', function(){
    searchform.classList.toggle('show');
    navbarContent.classList.toggle('hide');
});
closesearchformbtn.addEventListener('click', function(){
    searchform.classList.toggle('show');
    navbarContent.classList.toggle('hide');
});


// ===================================================
// 
//      MAIN NAVIGATION SLIDE SHOW
// 
// ===================================================
var navbar = document.querySelector('.navbar');

$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          navbar.classList.add('show');
        } else {
            navbar.classList.remove('show');        
      }
    });
        
  });
  