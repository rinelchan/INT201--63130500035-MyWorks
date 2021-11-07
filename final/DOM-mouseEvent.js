// change image
let thumbnailImage = document.querySelectorAll('.thumbnail-image');
let bigImage = document.querySelector('.big-image');

function changeImage(event) {
    bigImage.src = event.target.src;
}

function removeImage() {
    bigImage.src = '';
}

thumbnailImage.forEach((thumbnail) => {
    thumbnail.addEventListener('mouseout', removeImage);
    thumbnail.addEventListener('mouseover', changeImage);
});