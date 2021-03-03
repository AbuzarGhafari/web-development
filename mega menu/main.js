var menuIcon = document.getElementById('menuIcon');
var icon = document.getElementById('icon');
var bottomNav = document.getElementById('bottomNav');
var header = document.getElementById('header');

let toggle = false;

function menuExpand(){ 
    if(toggle == false){

        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        icon.style.color = "#000";
        // bottomNav.style.top = "100%"; 
        bottomNav.style.display = "flex";
        bottomNav.style.visibility = "visible";
        bottomNav.style.transform = "scale(1)";
        header.style.backgroundColor = "#fff";
        bottomNav.style.height = "auto";
        bottomNav.style.padding = "2rem 0";

        menuIcon.style.color = "#000";

        toggle = true;

    }else if(toggle == true){

        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        icon.style.color = "#fff";
        // bottomNav.style.top = "-400%"; 
        bottomNav.style.transform = "scale(0.0)";
        header.style.backgroundColor = "transparent";
        bottomNav.style.visibility = "hidden";
        bottomNav.style.height = "0px";
        bottomNav.style.padding = "0px";
        
        menuIcon.style.color = "#fff";

        toggle = false;
    }
}