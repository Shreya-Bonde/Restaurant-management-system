document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        // Click event to set the rating permanently
        star.addEventListener('click', function () {
            const rating = this.getAttribute('data-value');
            
            // Remove selected class from all stars
            stars.forEach(s => s.classList.remove('selected'));

            // Add selected class to the clicked star and all previous stars
            this.classList.add('selected');
            let previous = this.previousElementSibling;
            while (previous) {
                previous.classList.add('selected');
                previous = previous.previousElementSibling;
            }
        });

        // Hover effect to preview rating
        star.addEventListener('mouseover', function () {
            // Remove active class from all stars (hover preview effect)
            stars.forEach(s => s.classList.remove('active'));

            // Add active class to hovered star and all previous stars
            this.classList.add('active');
            let previous = this.previousElementSibling;
            while (previous) {
                previous.classList.add('active');
                previous = previous.previousElementSibling;
            }
        });

        // Remove hover effect but retain the selected stars
        star.addEventListener('mouseout', function () {
            // Remove active class from all stars (clear hover effect)
            stars.forEach(s => s.classList.remove('active'));

            // Re-apply selected class to keep stars yellow after rating
            stars.forEach(s => {
                if (s.classList.contains('selected')) {
                    s.classList.add('active');
                }
            });
        });
    });
});
