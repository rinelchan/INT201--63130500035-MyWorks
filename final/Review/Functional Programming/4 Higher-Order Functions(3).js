const persons = [
    { name: "John", age:17 },
    { name: "Jane", age:10 },
    { name: "Jim", age:15 }
];



//// myFilter
 
// filter
// สร้าง array เปล่าแล้ว วน loop persons แต่ละคน แล้ว assign person แต่ละคนไปให้ argument ของ function ที่สร้างขึ้นมา
// แล้วเรียกใช้ function และดูเงื่อนไขว่าเป็นจริงหรือไม่
// ถ้าจริง จะ push ใส่เข้าไปใน array
// เมื่อวนครบทุก index ใน array หลังจากนั้น filter จะ return array ออกมา

const kids = persons.filter(person => person.age <= 15);
console.log('Kids: ' , kids);

// myFilter
// รับค่า argument เป็น array, function
function myFilter(arr, callback) {
    const result = [];
    for (let i =0; i < arr.length; i++) {
        const element = arr[i];
        if (callback(element)) {
            result.push(element);
        }
    }
    return result;
}
const kids = myFilter(persons, person => person.age <= 15);
console.log('Kids: ' , kids);

// ถ้าผูกติดกับ class array (ปกติไม่ควรทำ!! ไม่นิยม สร้าง class ใหม่เลยดีก่า)
Array.prototype.myFilter = function myFilter(callback) {
    const result = [];
    for (let i =0; i < this.length; i++) {
        const element = this[i];
        if (callback(element)) {
            result.push(element);
        }
    }
    return result;
}
const kids = persons.myFilter(person => person.age <= 15);
console.log('Kids: ' , kids);



//// myMap

// map
const olderPersons = persons.map((person) => ({
    ...person,
    age: person.age * 2
}));

console.log('Older persons: ' , olderPersons);

// myMap
function myMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const element  = arr[i];
        result.push(callback(element));
    }
    return result;
}

const olderPersons = myMap(persons, (person) => ({
    ...person,
    age: person.age * 2
}));

console.log('Older persons: ' , olderPersons);

// ถ้าผูกติดกับ class array
Array.prototype.myMap = function myMap(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        const element  = this[i];
        result.push(callback(element));
    }
    return result;
}

const olderPersons = persons.myMap((person) => ({
    ...person,
    age: person.age * 2
}));

console.log('Older persons: ' , olderPersons);