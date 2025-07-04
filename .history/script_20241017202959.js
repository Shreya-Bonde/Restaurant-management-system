<script>
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        // Click event to set the rating
        star.addEventListener('click', function () {
            const rating = this.getAttribute('data-value');
            
            // Remove active class from all stars
            this.parentNode.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));

            // Add active class to clicked star and previous ones
            this.classList.add('selected');
            let previous = this.previousElementSibling;
            while (previous) {
                previous.classList.add('selected');
                previous = previous.previousElementSibling;
            }
        });

        // Hover effect to preview rating
        star.addEventListener('mouseover', function () {
            this.parentNode.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            let previous = this.previousElementSibling;
            while (previous) {
                previous.classList.add('active');
                previous = previous.previousElementSibling;
            }
        });

        // Remove hover effect but keep the selected stars yellow
        star.addEventListener('mouseout', function () {
            this.parentNode.querySelectorAll('.star').forEach(s => s.classList.remove('active'));

            // Re-apply the "selected" class to keep stars yellow after rating
            this.parentNode.querySelectorAll('.star.selected').forEach(s => s.classList.add('active'));
        });
    });
</script>
