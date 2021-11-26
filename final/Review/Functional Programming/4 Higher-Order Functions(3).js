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





// myMap