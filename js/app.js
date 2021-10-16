'use strict'

import { getNavHtml, } from './getComponents.js';
import { getHeaderHtml } from './getComponents.js';
import { displayIssue } from './displayHtml.js';
import { navSlide } from './navSlide.js';



const contentData = document.querySelector('#content-data');

async function getData() {
    const response = await fetch('./db.json');
    const data = await response.json();

    const path = window.location.pathname;
    checkPage(path, data);
}

//check the page for the correct info

function checkPage(pathname, testData) {
    if (pathname === '/vinten.html') {
        console.log('vinten')
        displayIssue(testData.vinten, contentData);
    }

    if (pathname === '/overdrive.html') {
        console.log(pathname);
        console.log(testData.overdrive);

    }
}

getNavHtml();
getHeaderHtml(navSlide);
// getData();