const HAMBURGER = document.getElementById('hamburger-menu');
const MENU = document.getElementById('menu');
const URBAN = document.getElementById('urban');
const NATURE = document.getElementById('nature');
const CLOSE = document.getElementById('close');
let menuStatus = false;

HAMBURGER.addEventListener('click',function(){
    URBAN.style.left = '55vw';
    document.getElementById('body').style.overflow = 'hidden';
    document.getElementById('body').style.position = 'fixed';
    menuStatus = true;
})

CLOSE.addEventListener('click',function(){
    URBAN.style.left = '0';
    document.getElementById('body').style.overflowY = 'scroll';
    document.getElementById('body').style.position = 'initial';
    menuStatus = false;
})

window.addEventListener('click', function(e){
    if(e.target === URBAN){
        URBAN.style.left = '0';
        document.getElementById('body').style.overflowY = 'scroll';
        document.getElementById('body').style.position = 'initial';
        menuStatus = false;
    }
})