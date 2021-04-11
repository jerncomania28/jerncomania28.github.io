const menuBtn = document.querySelector('.menu-btn');

const menu= document.querySelector('.menu-mobile');





menuBtn.addEventListener('click', function(){
    console.log("MenuBtn functional ");
    menu.classList.toggle('open');
    console.log(menu.classList);
})