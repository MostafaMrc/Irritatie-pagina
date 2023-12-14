function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

window.onload = function () {
    showPopup();
    setInterval(showPopup, 10000);
};
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
function showImage() {
    document.getElementById("showImage").style.display="block"
}
