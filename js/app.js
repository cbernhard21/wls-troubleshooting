'use strict';

import { getNavHtml } from './getComponents.js';
import { getHeaderHtml } from './getComponents.js';
// import { getFooterHtml } from './getComponents.js';
import { navSlide } from './navSlide.js';
import {
    displayOverdriveHtml,
    displayVintenHtml,
    displaySwitchHtml,
} from './displayHtml.js';
import { displayRouterHtml } from './displayRouter.js';

// global variables
const path = window.location.pathname;

// gets and displays phone numbers from the JSON file
async function getPhoneNumbers() {
    const response = await fetch('./db/db.json');
    const data = await response.json();

    let departments = data.numbers;
    let numberUl = document.querySelector('.numbers');
    let numberHtml = ``;

    let phoneNumbers = departments
        .map((department) => {
            numberHtml = `<li>${department.department} ${department.number}</li>`;
            return numberHtml;
        })
        .join('');

    numberUl.innerHTML = phoneNumbers;
}

//check the page for the correct info

function checkPage(pathname, phoneNumberFunc) {
    if (pathname === '/index.html') {
        phoneNumberFunc();
    }
    if (pathname === '/overdrive.html') {
        displayOverdriveHtml();
    }
    if (pathname === '/vinten.html') {
        displayVintenHtml();
    }
    if (pathname === '/acuity.html') {
        console.log('acuity');
    }
    if (pathname === '/caprica.html') {
        console.log('caprica');
    }
    if (pathname === '/xpression.html') {
        console.log('xpression');
    }
    if (pathname === '/router.html') {
        displayRouterHtml();
    }
    if (pathname === '/switch.html') {
        displaySwitchHtml();
    }
}

getNavHtml();
getHeaderHtml(navSlide);
// getFooterHtml();
checkPage(path, getPhoneNumbers);