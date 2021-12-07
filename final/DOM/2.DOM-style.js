let message = document.querySelector('.message');
let spoilButton = document.querySelector('.spoil-button');

message.style.color = 'red';
message.style.backgroundColor = 'black';
message.style.fontSize = '20px';

spoilButton.addEventListener('click', () => {
    // Show / Hide message
    if (message.style.display === 'none') {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
});