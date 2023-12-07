  // Get references to the image and video elements
  const fotoIphone = document.getElementById('foto-iphone');
  const hoverVid = document.getElementById('hoverVid');

  // Add a mouseover event listener to the iPhone image
  fotoIphone.addEventListener('mouseover', () => {
      // Show the video and play it when the image is hovered
      hoverVid.style.display = 'block';
      hoverVid.play();
  });

  // Add a mouseout event listener to the iPhone image (optional)
  fotoIphone.addEventListener('mouseout', () => {
      // Pause the video and hide it when the mouse leaves the image (optional)
      hoverVid.pause();
      hoverVid.style.display = 'none';
  });