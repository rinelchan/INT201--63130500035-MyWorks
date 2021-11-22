// 1. Pure function
// ผลลัพธ์ที่ได้ ต้องเหมือนเดิมเสมอ / คาดการณ์ผลลัพธ์ได้
// ใส่ค่า argument ค่าใดค่าหนึ่ง เราต้องได้ผลลัพธ์เป็นค่าเดิมเสมอ
function addPure (a,b) {
  return a + b;
}
console.log('Pure Function: ' , addPure(1,6));

// 2. Avoid side function
// ช่วยให้ทำงานได้ถูกต้อง สม่ำเสมอ ไม่ขึ้นอยู่กับตัวแปร ปัจจัยภายนอก
// สิ่งอื่น ๆ ที่อยู่ภายนอกฟังก์ชันที่มีผลกับ function ของเรา (สิ่งที่เราไม่ต้องการ)
const b = 6;
function addSideEffect(a) {
  return a + b;
}
console.log('Side Effect: ', addSideEffect(1));

// 3. First class function
//// 3.1 Assigning a function to a variable
/// assign ให้กับตัวแปรใดตัวแปรนึงได้
//       variable  (assign function เข้าไปในตัวแปรที่สร้าง)
// const addAssigning = function addAssigning(a,b) {
const addAssigning = function(a,b) {
  return a + b;
}
console.log('Assigning: ', addAssigning(1,6));

//// 3.2 Returning a function
// return ค่า function ออกมาจากอีกตัวนึงได้
// return function ออกมาจากอีก function นึงได้
function addReturning(a,b) {
  return function() {
    return a + b;
  }
}
const addTwoNumber = addReturning(1,6);
console.log('Returning: ', addTwoNumber());

//// 3.3 Accepting a function as an argument
// pass function เข้าไปอีก function นึงได้
function addNumber(a,b) {
  return a + b;
}
function addAccepting(add, a, b) {
  return add(a,b);
}

console.log('Accepting: ', addAccepting(addNumber, 1, 6));



// result:
// Pure Function:  7
// Side Effect:  7
// Assigning:  7
// Returning:  7
// Accepting:  7