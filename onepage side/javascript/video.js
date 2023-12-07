document.getElementById('photo-iphone').addEventListener('click', function() {
    // Hide the image
    this.style.display = 'none';

    // Show and play the video
    let video = document.getElementById('videoPlayer');
    video.style.display = 'block';
    video.play();
  });