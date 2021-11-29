// What' s Recursion ?
// function ทำการเรียกใช้ตัวมันเอง
function countDown(n) {
    if (n < 0) return;
    console.log('Count down: ' , n);
    countDown(n-1);
}
countDown(10);

// Why/when should we use Recursion ? | ทำไม/เมื่อไหร่ เราควรใช้ Recursion
////  1. Shorter and more readable                  | 1. เขียนโค้ดได้สั้นลง และทำให้โค้ดอ่านได้ง่ายขึ้น
////  2. A problem can be built off of sub-problems | 2. ใช้เมื่อปัญหาสามารถแตกออกเป็นปัญหาย่อยๆ ได้
  
// How to use Recursion ? | วิธีการสร้าง Recursion
//// 1. Base case
//// 2. Recursive case

// f(1) = 1;
// f(2) = 2 * 1           = 2 * f(1)
// f(3) = 3 * 2 * 1       = 3 * f(2)
// f(4) = 4 * 3 * 2 * 1   = 4 * f(3) => 24

function factoria(n) {
    if (n === 1) return 1;
    return n * factoria(n-1);
}
console.log('Factorial: ' , factoria(4));

// c => c
// bc => cb     => reverse(c) + b
// abc => cba   => reverse(bc) + a

function reverse(str) {
    if (str.length === 1) return str;
    const [firstCharacter] = str;
    const remainingCharacters = str.substring(1);
    return reverse(remainingCharacters) + firstCharacter;
}
console.log('Reverse: ' , reverse('abc'));