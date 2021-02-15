const HAMBURGER = document.getElementById('hamburger-menu');
const MENU = document.getElementById('menu');
const URBAN = document.getElementById('urban');
const NATURE = document.getElementById('nature');
const CLOSE = document.getElementById('close');
let menuStatus = false;


function openMenu(){
    URBAN.style.left = '55vw';
        document.getElementById('body').style.overflow = 'hidden';
        document.getElementById('body').style.position = 'fixed';
        menuStatus = true;
}
function closeMenu(){
    URBAN.style.left = '0';
    document.getElementById('body').style.overflowY = 'scroll';
    document.getElementById('body').style.position = 'initial';
    menuStatus = false;
}


CLOSE.addEventListener('click',closeMenu)
HAMBURGER.addEventListener('click',openMenu);
window.addEventListener('click', function(e){
    if(e.target === URBAN){
        closeMenu();
    }
});
window.addEventListener('resize',closeMenu)