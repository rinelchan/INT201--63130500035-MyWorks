const name = "Nutwara"
console.log(name)

const result = 5+5
console.log(result)





// [Variables (ตัวแปร)]
console.log('Goodbye World');

// let ชื่อตัวแปร = ข้อมูล
let x = 2;
let y = 10;
let z = x + y
console.log(z);

// let ใช้เก็บค่า
let username;





// [Data Types (ชนิดข้อมูล)]
let number = 5.5;
let string = 'abc';
let boolean1 = true;
let boolean2 = false;

// (ans = 1216)
let x = '12';
let y = '16';
console.log(x+y);

let x = String(12);
let y = '16';
console.log(x+y);

// (ans = 28)
let x = 12;
let y = Number('16');
console.log(x+y);





// [Operators (เครื่องหมาย)]
a1 = 3 + 2      // 5
a2 = 3 - 2      // 1
a3 = 3 * 2      // 6
a4 = 3 / 2      // 1.5
a5 = 3 ** 2     // 9
a6 = 3 % 2      // 1

x = 5;
x = x + 1;      // 6
x++             // 6

x = 5;
x = x + 5;      // 10
x += 5;         // 10

let x = 7;
let y = 5;

let a1 = x > y;       // true
let a2 = x <= y;      // true

let a3 = x < y;       // false
let a4 = x <= y;      // false

let a5 = x === y;     // false
let a6 = x !== y;     // true

let p = true;
let q = false;

let a1 = p && q;      // false
let a2 = p || q;      // true
let a3 = !p;          // false
  




// [Conditions (ตรวจสอบเงื่อนไข)]
let score = 80;

// if (เงื่อนไข) {คำสั่ง}
if (score >= 80) {
    console.log('Grade A');
}
else if (score >=70) {
    console.log('Grade B');
}
else {
    console.log('Grade F')
}





// [ Loops (วนลูป)]

//for (ค่าเริ่มต้น : เงื่อนไข : การเปลี่ยนแปลง) {คำสั่ง}
for (let i =1; i <= 12; i++) {
    if (i % 2 === 0) {
       continue; 
    } else if (i % 10 === 0){
        break;
    }
    let answer = i **2;
    console.log(answer);
}





// [Functions (ฟังก์ชั่น)]
let length = 2;
let width = 2;
let height = 3;
let baseArea = length * width;
let pyramidVolume = 1/3 * baseArea * height;
console.log(pyramidVolume);

// function ชื่อฟังก์ชัน(parameter1, ...) {คำสั่ง}
function getPyramidArea(length, width, height) {
    let baseArea = length * width;
    let pyramidVolume = 1/3 * baseArea * height;
    // console.log(pyramidVolume);
    return pyramidVolume;
}

// getPyramidArea(2, 2, 3);
// getPyramidArea(4, 4, 3);
let area1 =getPyramidArea(2, 2, 3);
let area2 =getPyramidArea(4, 4, 3);
console.log('Area 1 = ' + area1+ ',Area 2 = ' + area2 );