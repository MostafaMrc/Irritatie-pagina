document.addEventListener('DOMContentLoaded', function() {
    // Get the video element
    var video = document.getElementById('VideoRoll');

    // Add click event listener to the image element
    document.getElementById('photo-iphone').addEventListener('click', function() {
        // Show the video
        video.style.display = 'block';
        
        // Toggle the mute state
        video.muted = !video.muted;

        // If video is unmuted, play it
        if (!video.muted) {
            video.play();
        }
    });
});