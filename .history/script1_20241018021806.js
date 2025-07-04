// Highlight stars based on clicks
function highlightStars(event) {
    const stars = event.currentTarget.querySelectorAll('.star');
    const selectedValue = event.target.getAttribute('data-value');

    stars.forEach((star) => {
        if (star.getAttribute('data-value') <= selectedValue) {
            star.classList.add('selected'); // Add a class to highlight the star
        } else {
            star.classList.remove('selected'); // Remove highlight from unselected stars
        }
    });
}
