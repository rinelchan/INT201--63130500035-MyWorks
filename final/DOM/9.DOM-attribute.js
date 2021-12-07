const birdImage = document.querySelector('.bird-image');
const jsLink = document.querySelector('.js-link');
const textInput = document.querySelector('.text-input');

// 1. Classic
console.log(textInput.getAttribute('hidden-message'));
textInput.setAttribute('hidden-message', 'งอง');

// 2. Modern
console.log(textInput.dataset.hiddenMessage);
textInput.dataset.hiddenMessage = 'ง๊องงง';

// ------------------------------------------------------------------------

const spoilButtons = document.querySelectorAll('.spoil-button');

function spoilClick(event) {
    const messageId = event.target.dataset.messageId;
    const message = document.querySelector('#', + messageId);
    message.classList.toggle('show');
}

spoilButtons.forEach((button) => {
    button.addEventListener('click', spoilClick);
})