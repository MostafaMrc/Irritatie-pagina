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
function showImage() {
    var imageContainer = document.getElementById("imageContainer");
    var image = document.createElement("img");
    image.src = "../pictures/untitled.jpg"; 
    image.alt = "Image";
    imageContainer.innerHTML = "";
    imageContainer.appendChild(image);
}
