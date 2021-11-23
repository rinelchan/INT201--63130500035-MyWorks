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
// แบบปกติ
const kids = [];                            // สร้าง Array ใหม่
for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    if (person.age <= 15) {
        kids.push(person);
    }
}

// แบบย่อ (ใช้ filter)
const kids = persons.filter(person => {
    return person.age <=15;
});

// แบบย่อค่ดพ่อค่ดแม่!! (ใช้ filter)
const kids = persons.filter(person => person.age <=15);

console.log('Kids: ', kids);



//// map
// แบบปกติ
const olderPersons = [];
for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    olderPersons.push({
        ...person,
        age: person.age * 2
    });
}

// แบบย่อ (ใช้ map)
const olderPersons = persons.map((person) => {
    return {
        ...person,
        age: person.age * 2
    }
});

// แบบย่อค่ดพ่อค่ดแม่!! (ใช้ map)
const olderPersons = persons.map((person) => ({
        ...person,
        age: person.age * 2
}));

console.log('Older persons: ' , olderPersons);



//// reduce
// แบบปกติ
let totalAge = 0;
for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    totalAge += person.age; 
}

// แบบย่อ (ใช้ reduce)
const totalAge = persons.reduce((age, person) => {
    return age + person.age;
},0);

// แบบย่อค่ดพ่อค่ดแม่!! (ใช้ reduce)
const totalAge = persons.reduce((age, person) => age + person.age, 0);

console.log('Total age: ', totalAge);