'use strict'

export async function displayOverdriveHtml() {
    //get data from the internal json file
    const response = await fetch('./db.json')
    const data = await response.json();

    //global variables
    const overdriveContainer = document.querySelector('.data-container');
    const overdriveIpContainer = document.querySelector('.overdrive-ips');
    const overdriveData = data.services.overdrive;
    const overdriveIps = data.IPaddresses;

    //loop to create each issue section
    let allOverdriveHtml = overdriveData.map(item => {
        let stepsHtml = '';
        let notes = item.notes
        let stepsArr = item.steps;

        // check to see if steps and notes are empty
        if (notes === '') {
            notes = '';
        }

        if (stepsArr) {
            //loop for the steps to create list items

            for (let step of stepsArr) {
                let stepHtml = `<li class="details-solution-steps">${step}</li>`
                stepsHtml += stepHtml;
            }
        } else {
            stepsHtml = '';
        }

        let overdriveHtml = `
            <details class="details">
            <summary class="details-issue pointer">${item.issue}</summary>
            <article class="details-solution">
              <h3 class="details-solution-title">${item.fix}</h3>
              <ol class="details-solution-list">
                ${stepsHtml}
              </ol>
              <p class="details-notes">${notes}</p>
            </article>
          </details>
        `;
        return overdriveHtml;
    }).join('');
    overdriveContainer.innerHTML = allOverdriveHtml;

    //create overdrive IP HTML
    let overdriveIpHtml = overdriveIps.map(item => {
        let overdriveIpHtmlLine = `
            <p class="flex flex-direction">
              <span class="details-solution-steps w-300">${item.device}</span>
              <span class="bold">${item.ip}</span>
            </p>

      `;
        return overdriveIpHtmlLine;

    }).join('');

    overdriveIpContainer.innerHTML = overdriveIpHtml;

}

export async function displayVintenHtml() {
    console.log('hello from vinten fucntion')
}