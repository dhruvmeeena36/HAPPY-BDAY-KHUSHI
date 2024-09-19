// Select all toggle icons and add click event listeners
document.querySelectorAll('.toggle-answer').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        const answer = this.nextElementSibling; // Get the answer element
        if (answer.style.display === "none") {
            answer.style.display = "block"; // Show the answer
        } else {
            answer.style.display = "none";  // Hide the answer
        }
    });
});

// script.js

const videoPlayer1 = document.getElementById('videoPlayer1');
const videoPlayer2 = document.getElementById('videoPlayer2');

// Example: Event listener for Video 1 end
videoPlayer1.addEventListener('ended', () => {
    alert("Video 1 has ended.");
});

// Example: Event listener for Video 2 end
videoPlayer2.addEventListener('ended', () => {
    alert("Video 2 has ended.");
});

