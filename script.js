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
