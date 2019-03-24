//select dom items
const menubtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navitems = document.querySelectorAll('.nav-item');

//initial state of menu
let showmenu = false;

menubtn.addEventListener('click', togglemenu);

function togglemenu() {
    if (!showmenu) {
        menubtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navitems.forEach(item => item.classList.add('show'));

        //change menu state
        showmenu = true;
    } else {
        menubtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navitems.forEach(item => item.classList.remove('show'));

        //change menu state
        showmenu = false;
    }
}