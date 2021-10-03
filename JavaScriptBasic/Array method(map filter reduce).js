// map
let scores = [82, 75, 48, 64, 36];
let passFailScores = scores.map((score) => {
    if (score >= 50) {
        return 'passed';
    }
    return 'failed';
});

console.log(scores);            // [82, 75, 48, 64, 36]
console.log(passFailScores);    // ["passed", "passed", "failed", "passed", "failed"]





// filter
let scores = [82, 75, 48, 64, 36];
let passFailScores = scores.filter((score) => {
    return score >= 50;
});

console.log(scores);            // [82, 75, 48, 64, 36]
console.log(passFailScores);    // [82, 75, 64]





// reduce
let scores = [82, 75, 48, 64, 36];
let sumScores = scores.reduce((sum, score) => {
    return sum + score;
});

console.log(scores);            // [82, 75, 48, 64, 36]
console.log(passFailScores);    // 305