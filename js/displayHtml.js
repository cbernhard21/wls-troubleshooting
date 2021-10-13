'use strict'

export function displayIssue(allData, section) {
    console.log(allData)
    let issueCardHtml = '';

    let eachIssueHtml = allData.map(issue => {

        issueCardHtml = `
        
          <article>
            <h3>${issue.issue}</h3>
            <p>${issue.fix}</p>
          </article>
        
        
        `

        return issueCardHtml;

    }).join('')

    section.innerHTML = eachIssueHtml;
}