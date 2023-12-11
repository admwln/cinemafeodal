// Function to scroll movie cards
function scrollMovieCards(direction) {
    const container = document.getElementById('movieCardContainer');
    const scrollAmount = 300;

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
    }
}

// Function to scroll movie cards
function scrollMovieCardsNm(direction) {
    const container = document.getElementById('movieCardContainerNm');
    const scrollAmount = 300;

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
    }
}

// Function to scroll movie cards
function scrollMovieCardsMob(direction) {
    const container = document.getElementById('movieCardContainerMob');
    const scrollAmount = 300;

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
    }
}

function scrollMovieCardsMobNm(direction) {
    const container = document.getElementById('movieCardContainerMobNm');
    const scrollAmount = 300;

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
    }
}