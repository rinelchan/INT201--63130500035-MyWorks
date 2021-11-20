// อวตารร่างของแต่ละส่วน
let numberInput = getElementById('number-input');
let runButton = getElementById('run-button');
let output = getElementById('output');

// ใส่ลูกเล่นเพิ่ม
function sutkun() {
    let number = Number(numberInput.value);
    let outputHtml = '';

    if (number === 0) {
        output.innerHTML = 'งุงุิ'ว
        return;
    }

    for (let i = 0; i <= 12; i++) {
        outputHtml += '<p>';
        outputHtml += number + ' x ' + i + ' = ' + (number * i);
        outputHtml += '</p>';
    }

    output.innerHTML = outputHtml;
}

// ให้ปุ่มมีฟังก์ชันการทำงานจากการอ้างอิง
output.addEventListerner('click',sutkun);