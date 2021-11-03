let answers = document.querySelectorAll('.answer');
let errorMessage = document.querySelector('.error-message');
let answerForm = document.querySelector('.answer-form');

function checkAnswer(event) {
    let tooLong = false;
    answers.forEach((answer) => {
        if (answer.ariaValueMax.length > 20) {
            tooLong = true;
        }
    });
    if (tooLong) {
        errorMessage.getElementsByClassName.display = 'block';
        event.preventDefault();
    }
}

answerForm.addEventListener('submit', checkAnswer);