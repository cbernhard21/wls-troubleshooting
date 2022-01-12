import { searchPage } from './searchPage.js';

export function displayRouterHtml() {
    async function getRouterData() {
        try {
            const response = await fetch('./db/router.json');
            const data = await response.json();

            const loadedRouter = data.router;

            const routerTable = document.querySelector('.table');

            let allRouterHtml = loadedRouter
                .map((item) => {
                    let routerHtml = `
                      <tr class="table-row">
                        <td class="table-cell">${item.category}</td>
                        <td class="table-cell">${item.entry}</td>
                        <td class="table-cell">${item.source}</td>
                        <td class="table-cell">${item.description}</td>
                      </tr>
                  `;
                    return routerHtml;
                })
                .join('');

            routerTable.innerHTML = `

                <tr class="table-heading-row">
                  <th class="table-cell">Category</th>
                  <th class="table-cell">Entry</th>
                  <th class="table-cell">Source</th>
                  <th class="table-cell">Description</th>
                </tr>
                  ${allRouterHtml}
                `;

            searchPage();
        } catch (err) {
            console.log(err);
        }
    }

    getRouterData();
}