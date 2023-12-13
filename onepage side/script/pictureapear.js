document.addEventListener('DOMContentLoaded', function() {
    var imageContainer = document.getElementById('imageContainer');
    document.addEventListener('click', function(event) {
        if (event.clientX <= window.innerWidth / 2) {
            var newImage = document.createElement('img');
            newImage.src = '../picture/Untitled.jpg'; 
            newImage.classList.add('clickedImage'); 
            imageContainer.appendChild(newImage);
        }
    });
});
