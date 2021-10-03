/*

let rabbit = {
    // key: value (ชื่อข้อมูล: ข้อมูล)
    name: 'Mimi',
    breed: 'Lion Head',
    color: 'White',
    weight: 1.2
};
// เปลี่ยนข้อมูลที่อยู่ใน object
rabbit.name = 'ไก่';

console.log(rabbit.name);

*/



let rabbits = [
  {
    name: 'Mimi',
    breed: 'Lion Head',
    color: 'White',
    weight: 1.2
  },
  {
    name: 'Momo',
    breed: 'Netherland dwarf',
    color: 'White',
    weight: 1.2
  },
  {
    name: 'Mumu',
    breed: 'Mimi lop',
    color: 'White',
    weight: 1.2
  }
];

// แสดงข้อมูลทีละตัว
rabbits.forEach((rabbit) => {
    console.log(rabbit.name + ' , ' + rabbit.breed);
});
    // Mimi , Lion Head
    // Momo , Netherland dwarf
    // Mumu , Mimi lop