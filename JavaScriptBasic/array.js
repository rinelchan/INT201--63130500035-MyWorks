let fruits = ['Apple', 'Banana', 'Carrot'];
// fruits[1] = 'Watermelon';
console.log(fruits[0]);  // Apple

fruits.push('Watermelon'); // เพิ่ม
fruits.pop();  // ลบตัวล่าสุด
console.log(fruits.length); // นับจำนวนสมาชิก

// splice (ตำแหน่ง, จำนวนตัวที่จะลบ, ข้อมูลที่จะใส่เพิ่ม)
fruits.splice(1, 0, 'Watermelon');  // เพิ่มข้อมูล
fruits.splice(1, 1);  // ลบข้อมูล