const ele = document.querySelector('body');
var menu = document.querySelector('#menu');
var subMenu = menu.querySelectorAll('.sub-menu');
var flexItems = menu.querySelectorAll('.flex');
var menuItems = menu.querySelectorAll('.item:not(.flex)');

// Add the contextmenu event listener to the body 
ele.addEventListener('contextmenu', function (e) {

    // prevent the default behaviour
    e.preventDefault();

    // If menu is hidden, then show the menu
    if (!menu.classList.contains('show')) {
        // const rect = ele.getBoundingClientRect();
        // const x = e.clientX - rect.left;
        // const y = e.clientY - rect.top;

        // get postion of cursor where clicked
        const x = e.clientX;
        const y = e.clientY;

        // Set the position for menu
        menu.style.top = `${y}px`;
        menu.style.left = `${x}px`;

        // add the show class to the menu, Show the menu
        menu.classList.add('show');

        document.addEventListener('click', documentClickHandler);
    } else {
        documentClickHandler(e);
    }
    
});

// Hide the menu when clicking outside of it
const documentClickHandler = function (e) {
    const isClickedOutside = !menu.contains(e.target);
    if (isClickedOutside) {
        hideMenu();
    }
};

// Function to hide the menu
function hideMenu(){
    // Hide the menu
    menu.classList.remove('show');

    // Remove the event handler
    document.removeEventListener('click', documentClickHandler);
}

// When clicked the sub menu item, then hide the sub menu first
// than hide the menu with transition delay of 0.2s
subMenu.forEach(function (subMenuItem) {
    subMenuItem.addEventListener('click', function () {
        subMenuItem.classList.add('hide');
        hideMenu();
        menu.style.transitionDelay = '0.2s'; 
    })
})

// When the mouse is enter in the flex items, then
// show the sub-menu and remove the hide class to show the sub-menu
flexItems.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        item.children[2].classList.remove('hide'); 
    })
})

// When clicked on the menu items, then hide the menu
menuItems.forEach(function(item){
    item.addEventListener('click', hideMenu);
})
