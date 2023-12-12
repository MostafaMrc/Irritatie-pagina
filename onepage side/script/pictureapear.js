document.addEventListener('DOMContentLoaded', function() {
    var leftClickImage = document.getElementById('leftClickImage');
    document.querySelector('.item1').addEventListener('click', function() {
        leftClickImage.style.display = (leftClickImage.style.display === 'none') ? 'block' : 'none';
    });
});