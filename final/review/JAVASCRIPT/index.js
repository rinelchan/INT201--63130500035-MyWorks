// basic
console.log('Banana !!');

// 1. Variable
// let ชื่อตัวแปร = ข้อมูล;
// ตั้งชื่อตัวแปรเป็น Eng และให้สื่อความหมายว่าเก็บค่าอะไรอยู่
let x = 2;
let y = 10;
let z = x + y;
console.log(z);       // 12

// 2. Data Types
// ตัวเลข ข้อความ 
// boolean ตรวจสอบเงื่อนไข / วน loop
let a = '11';
let b = '12';
console.log(a+b);     // 1112

let c = 1 ;
let d = Number('1');
console.log(c+d);     // 2

let e = 1 ;
let f = String('1');
console.log(e+f);     // 11

// 3. Operators
a1 = 3 + 2;          // 5
a2 = 3 - 2;          // 1
a3 = 3 * 2;          // 6
a4 = 3 / 2;          // 1.5
a5 = 3 ** 2;         // 9
a6 = 3 % 2;          // 1

g = 5 ;
g = g + 1 ;          // 6
g++;                 // 6
g += 5 ;             // 10

let h = 7;
let i = 5;

let b1 = h > i;      // true
let b2 = h >= i;     // true

let b3 = h < i;      // false
let b4 = h <= i;     // false

let b5 = h === i;    // false
let b6 = h !== i;    // true

let p = true;
let q = false;

let c1 = p && q;     // false
let c2 = p || q;     // true
let c3 = !p ;        // false

// 4. Conditions
// if (เงื่อนไข) {คำสั่งต่าง ๆ}
let score = 80 ;

if (score >= 80) {
    console.log('Grade A');
}
else if (score >=70) {
    console.log('Grade B');
}
else {
    console.log('Grade F');
}

// 5. Loop
// for (ค่าเริ่มต้น; เงื่อนไข; การเปลี่ยนแปลง) {คำสั่งต่าง ๆ}
for (let i = 1 ; i <= 12; i++) {
    if (i % 2 === 0) {
        continue;       // ข้าม loop นั้นทันที โดยไม่ทำคำสั่งข้างล่างต่อ
    }
    let ans1 = i ** 2;
    console.log(ans1);
}

for (let j = 1 ; j <= 12; j++) {
    if (j % 10 === 0) {
        break;       //  break เจอแล้วจะออกจาก loop ทันที
    }
    let ans2 = j ** 2;
    console.log(ans2);
}

// 6. Functions
// สิ่งที่สร้างมาแล้วตั้งชื่อให้มัน แล้วเอาคำสั่งมาใส่ข้างใน เมื่อจะใช้ ก็เรียกใช้แค่ function นั้น
let length = 2;
let width = 2;
let height = 3;
let baseArea = length * width;
let pyramidVolume = 1/3 * baseArea * height;
console.log(pyramidVolume);

// function ชื่อฟังก์ชัน (parameter1, ...) {คำสั่งต่าง ๆ}
// parameter - ตัวแปรที่รับค่าจากตำแหน่งที่เราเรียก
function getPyramid(length, width, height) {
    let baseArea = length * width;
    let pyramidVolume = 1/3 * baseArea * height;
    return pyramidVolume;  // คืนค่าที่เรียกใช้
}

let area1 = getPyramid(2,2,3);
let area2 = getPyramid(4,4,3);
console.log('Area 1 = ' + area1 + ' , ' +  'Area 2 = ' + area2);

// 7. HTML Controls
// document - ตัวแทนหน้าเว็บ html
//      .หาแท็ก(id ของแท็ก html [div id]
let content2 = document.getElementById('content-2');
let textHtml = '<b>ใกล้ปิดเทอมแล้ว</b>'
textHtml += '<i>อดทนหน่อย ใกล้แล้วว</i>'
//      .ค่าของ html ที่อยู่ใน content 2 = เปลี่ยนค่าใหม่ตามที่กำหนด
content2.innerHTML = textHtml;

// 8.HTML Events
let discountButton = document.getElementById('discount-button');
let message = document.getElementById('message');

function showMessage() {
    message.innerHTML = 'หยอกเล่น';
}

// ใส่คำสั่ง addEventListener (เหตุการณ์, คำสั่ง); ให้ discountButton
discountButton.addEventListener('click', showMessage);







