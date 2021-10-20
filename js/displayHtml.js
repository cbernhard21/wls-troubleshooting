'use strict'

export async function displayOverdriveHtml() {
    const overdriveContainer = document.querySelector('.data-container');

    const response = await fetch('./db.json')
    const data = await response.json();

    const overdriveData = data.services.overdrive;

    let overdriveHtml = '';


    //loop to create each issue section
    let allOverdriveHtml = overdriveData.map(item => {
        let stepsHtml = [];
        let notes = item.notes
        let stepsArr = item.steps;

        // check to see if steps and notes are empty
        if (notes === '') {
            notes = '';
        }

        if (stepsArr) {
            //loop for the steps to creat list item
            for (let i = 0; i < stepsArr.length; i++) {
                let stepItem = `<li class="details-solution-steps">${stepsArr[i]}</li>`;
                stepsHtml.push(stepItem);
            }
        } else {
            stepsHtml = [];
        }

        overdriveHtml = `
            <details class="details">
            <summary class="details-issue pointer">${item.issue}</summary>
            <article class="details-solution">
              <h3 class="details-solution-title">${item.fix}</h3>
              <ol class="details-solution-list">
                ${stepsHtml.join('')}
              </ol>
              <p class="details-notes">${notes}</p>
            </article>
          </details>
        `;
        return overdriveHtml;
    })
    overdriveContainer.innerHTML = allOverdriveHtml;
}

export async function displayVintenHtml() {
    console.log('hello from vinten fucntion')
}