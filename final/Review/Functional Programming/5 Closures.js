// What's Closures ?
// มี function 2 ตัว [ ภายนอก, ภายใน ]
// ประกาศ function ขึ้นมาตัวนึง หลังจากนั้นสร้าง function ภายใน (function ที่ประกาศไว้อันแรก)
// function ภายใน จะสามารถเข้าถึง variable ที่สร้างไว้ใน function ภายนอกได้

// concept
// มี function 2 ตัว [ ภายนอก, ภายใน ]
// function ภายใน จะทำการเรียกใช้ variable หรือสิ่งต่าง ๆ ที่ประกาศไว้ใน function ภายนอก

// type 1 

function outer() {
    const name = 'Outer';
    function inner() {
        console.log('Outer name: ', name);
    }
    inner();
}
outer(); 

// type 2
function outer() {
    const name = 'Outer';
    return function inner() {
        console.log('Outer name: ', name);
    }
    inner();
}
const innerFunction = outer();
innerFunction();



// Data privacy

// times() ประกาศตัวแปรใหม่ทุกรอบ -> 1, 1, 1
function times() {
    let counter = 0;       // ประกาศไว้ข้างใน
    counter += 1;
    console.log('Counter: ', counter);
}
times();                  // ประกาศตัวแปร counter ใหม่ทุกรอบ
times();
times();

// times() -> 1, 2, 3
function createTimes() {
    let counter = 0;
    return function times() {
        counter += 1;
        console.log('Counter: ', counter);
    }
}
const times = createTimes();
times();
times();
times();



// Stateful function
// type 1
function addFive(a) {
    return a + 5;
}

function addTen(a) {
    return a + 10;
}

// type 2
function createAdd(a) {
    return function(b) {
        return a + b;
    }
}

const addFive = createAdd(5);
const addTen = createAdd(10);

console.log('Add Five: ' , addFive(10));
console.log('Add Ten: ' , addTen(10));