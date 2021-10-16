'use strict'

export function navSlide() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav');
    burgerMenu.addEventListener('click', () => {
        //toggle nav on screen
        navList.classList.toggle('slide');
        //animate burger lines
        burgerMenu.classList.toggle('burger-move');
    });

}