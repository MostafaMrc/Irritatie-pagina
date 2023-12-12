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
    var leftClickImage = document.getElementById('leftClickImage');
    document.querySelector('.item1').addEventListener('click', function() {
        leftClickImage.style.display = (leftClickImage.style.display === 'none') ? 'block' : 'none';
    });
});
