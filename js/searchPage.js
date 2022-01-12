export function searchPage() {
    function liveSearch() {
        // Locate the row elements
        let row = document.querySelectorAll('.table-row');

        // Locate the search input
        let searchQuery = document.querySelector('#searchbox').value;

        // Loop through the table rows
        for (let i = 0; i < row.length; i++) {
            // If the text is within the row...
            if (
                row[i].textContent
                .toLowerCase()
                // ...and the text matches the search query...
                .includes(searchQuery.toLowerCase())
            ) {
                // ...remove the `.is-hidden` class.
                row[i].classList.remove('is-hidden');
            } else {
                // Otherwise, add the class.
                row[i].classList.add('is-hidden');
            }
        }
    }

    // add delay so page is always watching
    let typingTimer;
    let typeInterval = 500; // Half a second
    let searchInput = document.getElementById('searchbox');

    searchInput.addEventListener('keyup', () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(liveSearch, typeInterval);
    });

    searchInput.addEventListener('search', () => {
        let searchValue = document.querySelector('#searchbox').value;
        let row = document.querySelectorAll('.table-row');
        if (searchValue === '') {
            for (let i = 0; i < row.length; i++) {
                row[i].classList.remove('is-hidden');
            }
        }
    });
}