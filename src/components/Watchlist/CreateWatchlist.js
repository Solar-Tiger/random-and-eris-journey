async function fetchWatchlistData() {
    const pendingData = await fetch('../../data/watchlist.json');

    const parsedData = await pendingData.json();

    return parsedData;
}

async function createWatchlistCards() {
    const watchlistSection = document.createElement('section');
    const watchlistTitle = document.createElement('h1');
    const watchlistAnimeListContainer = document.createElement('div');

    const watchlistData = await fetchWatchlistData();

    watchlistTitle.textContent = watchlistData[0].category;

    for (let i = 0; i < watchlistData[0].currentlyWatching.length; i++) {
        // Create example card to use as reference
        const animeCard = document.createElement('div');

        animeCard.classList.add('anime-card');

        const animeCardImage = document.createElement('img');

        animeCardImage.src = watchlistData[0].currentlyWatching[i].animeImage;

        const animeCardTable = document.createElement('table');
        const animeCardTableHead = document.createElement('thead');
        const animeCardTableBody = document.createElement('tbody');

        animeCardTable.append(animeCardTableHead, animeCardTableBody);

        // Create table head information
        const animeCardTableHeadRow = document.createElement('tr');
        const animeCardTitle = document.createElement('th');

        animeCardTitle.textContent =
            watchlistData[0].currentlyWatching[i].animeName;
        animeCardTitle.colSpan = '2';

        animeCardTableHeadRow.appendChild(animeCardTitle);
        animeCardTableHead.appendChild(animeCardTableHeadRow);

        // Create table body information
        for (const data in watchlistData[0].currentlyWatching[i]) {
            if (data === 'animeName' || data === 'animeImage') {
                continue;
            } else {
                const animeCardBodyRow = document.createElement('tr');
                const animeCardBodyTitle = document.createElement('th');
                const animeCardBodyData = document.createElement('td');

                if (data === 'animeLink') {
                    const animeCardBodyLink = document.createElement('a');

                    animeCardBodyTitle.textContent = 'Anime Link:';
                    animeCardBodyLink.textContent =
                        watchlistData[0].currentlyWatching[i].animeName;
                    animeCardBodyLink.href =
                        watchlistData[0].currentlyWatching[i][data];

                    animeCardBodyData.appendChild(animeCardBodyLink);
                } else if (data !== 'animeName' && data !== 'animeImage') {
                    if (data === 'animeGenre') {
                        animeCardBodyTitle.textContent = 'Genre:';
                    } else {
                        animeCardBodyTitle.textContent = 'Episodes:';
                    }

                    animeCardBodyData.textContent =
                        watchlistData[0].currentlyWatching[i][data];
                }

                animeCardTableBody.appendChild(animeCardBodyRow);

                animeCardBodyRow.append(animeCardBodyTitle, animeCardBodyData);

                animeCard.append(animeCardImage, animeCardTable);

                watchlistAnimeListContainer.appendChild(animeCard);
            }
        }
    }

    watchlistSection.append(watchlistTitle, watchlistAnimeListContainer);

    return watchlistSection;
}

const completeWatchlist = await createWatchlistCards();

export { completeWatchlist };
