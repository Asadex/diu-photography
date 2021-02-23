const HAMBURGER = document.getElementById('hamburger-menu');
const MENU = document.getElementById('menu');
const URBAN = document.getElementById('urban');
const NATURE = document.getElementById('nature');
const CLOSE = document.getElementById('close');
let menuStatus = false;


function openMenu(){
    MENU.style.left = '0';
    menuStatus = true;
}
function closeMenu(){
    MENU.style.left = '-55vw';
    menuStatus = false;
}


CLOSE.addEventListener('click',closeMenu)
HAMBURGER.addEventListener('click',openMenu);
window.addEventListener('click', function(e){
    if(e.target === URBAN){
        closeMenu();
    }
});
window.addEventListener('resize',closeMenu);
window.addEventListener('scroll',closeMenu)