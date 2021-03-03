var nav = document.querySelector('#nav');

var toggle = false;

function toggleNav(){ 
    if(toggle == false){
        nav.classList.add('open');
        nav.classList.remove('close');
        // nav.style.display = "block";
        // nav.style.opacity = "1";
        toggle = true;
    }else if(toggle == true){
        nav.classList.add('close');
        nav.classList.remove('open');
        // nav.style.display = "none";
        // nav.style.opacity = "0";
        toggle = false;
    }
}