'use strict'

export async function getNavHtml() {
    const response = await fetch('./components/nav.html');
    const navHtml = await response.text();
    document.querySelector('#nav').innerHTML = navHtml;
}