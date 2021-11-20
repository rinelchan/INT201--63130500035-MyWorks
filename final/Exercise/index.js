let numberInput = getElementById('number-input');
let runButton = getElementById('run-button');
let output = getElementById('output');

function sutkun() {
    let number = Number(numberInput.value);
    let outputHtml = '';

    for (let i = 0; i <= 12; i++) {
        outputHtml += '<p>';
        outputHtml += number + ' x ' + i + ' = ' + (number * i);
        outputHtml += '</p>';
    }

    output.innerHtml = outputHtml;
}

output.addEventListerner('click',sutkun);