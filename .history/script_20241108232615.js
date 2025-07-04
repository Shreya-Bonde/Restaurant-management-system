// document.addEventListener('DOMContentLoaded', function () {
//     const stars = document.querySelectorAll('.star');

//     stars.forEach(star => {
//         // Click event to set the rating permanently
//         star.addEventListener('click', function () {
//             const rating = this.getAttribute('data-value');
            
//             // Remove selected class from all stars
//             stars.forEach(s => s.classList.remove('selected'));

//             // Add selected class to the clicked star and all previous stars
//             this.classList.add('selected');
//             let previous = this.previousElementSibling;
//             while (previous) {
//                 previous.classList.add('selected');
//                 previous = previous.previousElementSibling;
//             }
//         });

//         // Hover effect to preview rating
//         star.addEventListener('mouseover', function () {
//             // Remove active class from all stars (hover preview effect)
//             stars.forEach(s => s.classList.remove('active'));

//             // Add active class to hovered star and all previous stars
//             this.classList.add('active');
//             let previous = this.previousElementSibling;
//             while (previous) {
//                 previous.classList.add('active');
//                 previous = previous.previousElementSibling;
//             }
//         });

//         // Remove hover effect but retain the selected stars
//         star.addEventListener('mouseout', function () {
//             // Remove active class from all stars (clear hover effect)
//             stars.forEach(s => s.classList.remove('active'));

//             // Re-apply selected class to keep stars yellow after rating
//             stars.forEach(s => {
//                 if (s.classList.contains('selected')) {
//                     s.classList.add('active');
//                 }
//             });
//         });
//     });
// });
const stars = document.querySelectorAll('.star');
        let currentRating = 0;

        // Function to reset the stars (remove all hover and checked classes)
        const resetStars = () => {
            stars.forEach(star => star.classList.remove('hovered', 'checked'));
        };

        // Function to set the current rating visually
        const setRating = (rating) => {
            resetStars();
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('checked');
                }
            });
        };

        // Event listeners for hover effect
        stars.forEach((star, index) => {
            // Hover effect
            star.addEventListener('mouseover', () => {
                resetStars();
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.add('hovered');
                }
            });

            // Remove hover effect when mouse leaves the star area
            star.addEventListener('mouseout', () => {
                setRating(currentRating);
            });

            // Click to set the rating
            star.addEventListener('click', () => {
                currentRating = index + 1;
                setRating(currentRating);
            });
        });