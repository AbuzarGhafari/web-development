window.addEventListener('scroll', function(){

    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

});



var menuToggle = document.querySelector('.toggle');
var menu = document.querySelector('.menu'); 
var menuLiks = document.querySelectorAll('.menu li a');


function toggleMenu(){
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleMenu);   
menuLiks.forEach(link =>{
    link.addEventListener('click', toggleMenu);
})