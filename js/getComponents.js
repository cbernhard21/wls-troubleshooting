'use strict'



export async function getNavHtml() {
    const response = await fetch('./components/nav.html');
    const navHtml = await response.text();
    document.querySelector('.nav').innerHTML = navHtml;

}



export async function getHeaderHtml(navSlideFunc) {
    const response = await fetch('./components/header.html');
    const headerHtml = await response.text();
    document.querySelector('.header-container').innerHTML = headerHtml;
    navSlideFunc();
}