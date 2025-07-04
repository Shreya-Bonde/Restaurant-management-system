<script>
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const rating = this.getAttribute('data-value');
            
            // Remove active class from all stars
            this.parentNode.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked star and previous ones
            this.classList.add('active');
            let previous = this.previousElementSibling;
            while (previous) {
                previous.classList.add('active');
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

        // Remove hover effect
        star.addEventListener('mouseout', function () {
            this.parentNode.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
        });
    });
</script>
