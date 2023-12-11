// Function to scroll movie cards This Month
function scrollMovieCards(direction) {
    const container = document.getElementById('movieCardContainer');
    const scrollAmount = 300;

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
    }
}

// Function to scroll movie cards Next Month
function scrollMovieCardsNm(direction) {
    const container = document.getElementById('movieCardContainerNm');
    const scrollAmount = 300;

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
    }
}

// Function to scroll movie cards This Month
function scrollMovieCardsMob(direction) {
    const container = document.getElementById('movieCardContainerMob');
    const scrollAmount = 300;

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
    }
}

// Function to scroll movie cards Next Month
function scrollMovieCardsMobNm(direction) {
    const container = document.getElementById('movieCardContainerMobNm');
    const scrollAmount = 300;

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
    }
}