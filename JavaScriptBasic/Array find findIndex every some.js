// find หาแค่ตัวแรก ไม่ยุ่งกับตัวหลัง
let scores = [82, 75, 48, 64, 36];
let failedScore = scores.find((score) => {
    return score < 50;
});

console.log(failedScore);     // 48

// find index ถ้าหาข้อมูลไม่เจอ --> -1
let scores = [82, 75, 48, 64, 36];
let failedScore = scores.findIndex((score) => {
    return score < 50;
});

console.log(failedScore);     // 2 (ตำแหน่งที่ 2)

//every ถ้าผิดตัวเดียว --> false
let scores = [82, 75, 48, 64, 36];
let everyonePassed = scores.every((score) => {
    return score >= 50;
})

console.log(everyonePassed);  // false

// some ถ้าถูกตัวเดียว --> true
let scores = [82, 75, 48, 64, 36];
let everyonePassed = scores.some((score) => {
    return score >= 50;
})

console.log(everyonePassed);  // true