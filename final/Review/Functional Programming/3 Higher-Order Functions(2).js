const persons = [
    { name: "John", age:17 },
    { name: "Jane", age:10 },
    { name: "Jim", age:15 }
];



// forEach
// วน Array แต่ละ index ออกมาได้ (คล้าย for loop ต่างกันที่ ใช้ break, continue ไม่ได้) 
// แบบปกติ
for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    if (person.age > 15) continue;
    console.log('Name ${person.name}, age ${person.age}');
}

// แบบย่อ (ใช้ forEach)
persons.forEach( (person) => {
    console.log('Name ${person.name}, age ${person.age}');
});

// แบบย่อค่ดพ่อค่ดแม่!! (ใช้ forEach)
persons.forEach( person => console.log('Name ${person.name}, age ${person.age}'));



// find, findIndex
// find หา object ที่ตรงเงื่อนไขตรงงกับที่สร้างขึ้นมาแล้ว return object นั้นออกไป
// findIndex การทำงานเหมือน find แต่ จะ return index ใน condition แทน
// แบบปกติ
let jane;
for (let i = 0; i < persons.length; i++) {
    const person =persons[i];
    if (person.name === 'Jane') {
        jane = person;
        break;
    }
}

// แบบย่อ (ใช้ find)
const jane = persons.find((person) => {
    return person.name === 'Jane';
});

// แบบย่อค่ดพ่อค่ดแม่!! (ใช้ find, findIndex)
const jane = persons.find(person => person.name === 'Jane');
console.log('Jane: ' , jane);

const janeIndex = persons.findIndex(person => person.name === 'Jane');
console.log('Jane index: ' , janeIndex);



// every, some
// return เป็น true, false
// every เช็ค object ใน array ทั้งหมด ต้องผ่านเงื่อนไขที่สร้างมา
// some เช็ค object ตัวใดตัวหนึ่งที่ทำให้เงื่อนไขที่ใส่เข้าไปเป็น true ก็จะ retirn true ทันที
// แบบปกติ
let isKid = true;
for (let i = 0; i < persons.length; i++) {
    const person = persons [i];
    if (person.age > 15) {
        isKid = false;
        break;
    }
}

// แบบย่อ (ใช้ )
const isKid = persons.every((person) => {
    return person.age <= 17;
}) ;

// แบบย่อค่ดพ่อค่ดแม่!! (ใช้ )
const isKid = persons.every((person) => person.age <= 17) ;
console.log('isKid : ' , isKid);

const isKidSome = persons.some((person) => person.age <= 9) ;
console.log('isKidSome : ' , isKidSome);