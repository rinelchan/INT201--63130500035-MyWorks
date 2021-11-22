// ทำให้เขียน code ได้สั้นมากขึ้น / reuse function ที่เขียนได้ด้วย / มี bug น้อยลง / maintain code ได้มากขึ้น
// filter, map, reduce

// 4. Higher order functions
// นำ concept ของ 3. First class function มาใช้
//// 4.1 Returning a function
//// 4.2 Accepting a function as an argument

const persons = [
    { name: "John", age:17 },
    { name: "Jane", age:10 },
    { name: "Jim", age:15 }
];

//// filter 
// สร้าง Array ใหม่
const kids = [];
for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    if (person.age <= 15) {
        kids.push(person);
    }
}
console.log('Kids: ', kids);
//// map
//// reduce
