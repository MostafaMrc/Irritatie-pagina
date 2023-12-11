document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('videoroll');
    document.getElementById('foto-iphone').addEventListener('click', function() {
        video.style.display = 'block';
        video.muted = !video.muted;
        if (!video.muted) {
            video.play();
        }
    });
});