let message = document.getElementById('message-2');
message.innerHTML = 'อยากนอน';

let messages = document.getElementsByClassName('message');
for (let i = 0; i < message.length; i++) {
    message[i].innerHTML = "พี่ชอบหนูตรงไหนให้เอาปากกามาวงงง !!"
}

let messages = document.querySelectorAll('.message');
messages.forEach((message) => {
    message.innerHTML = "หมาเลย";
});

let message = document.querySelector('.message');
messages.innerHTML = "ไปนอน";