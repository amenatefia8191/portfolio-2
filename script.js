"use strick"
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 100 )
})

let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.navList');

menu.onclick = () => {
    menu.classList.toggle('bx-bx');
    navList.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-bx');
    navList.classList.remove('open');
}