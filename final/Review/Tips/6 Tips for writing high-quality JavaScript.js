// 1. Default parameters
// ใส่ค่าเริ่มต้นให้ function

const API = {
    getWeather: () => 'Sunny'
};

// Bad 💥
function getWeather(cityName) {
    return API.getWeather(cityName || 'Bangkok');
}

// Good 💦
function getWeather(cityName = requireCityName ) {     // (cityname = 'Bangkok' )
     return API.getWeather(cityName);
 }

function requireCityName() {
    throw new Error ('cityName parameter is required');
}



// 2. Template literals 
// รวม string หลาย ๆ ตัว เข้าด้วยกัน

// Bad 💥
function toString(name, lastname) {
    return 'Name: ' + name + ', Lastname: ' + lastname;
} 

// Good 💦
function toString(name, lastName) {
    return 'Name: ${name}, Lastname: ${lastname}';
}
 


// 3. Destructuring
// วิธีการที่ทำให้เราสามารถ ดึงค่าที่เราต้องการ ออกมาจาก object และ array

const person = {
    name: 'Minion',
    lastName: 'Slim',
    age: 60,
    location: {
        city: 'Chonburi',
        country: 'กะลาแลนด์'
    }
}

// Bad 💥
function toString(person) {
    return 'Name: ${person.name}, Lastname: ${person.lastname}, City: ${person.ocation.city}';
}

// Good 💦
function toString({name, lastName, location: { city }}) {
    return 'Name: ${name}, Lastname: ${lastname}, City: ${city}';
}

// Bad 💥
const food = ['🍛', '🍝', '🍢', '🍤'];
const กะหรี่กั่ย = food[0];
const ข้าวปั้น = food[1];
const โด่งดิด่ง = food[2];

// Good 💦
const food = ['🍛', '🍝', '🍢', '🍤'];
const [กะหรี่กั่ย, ข้าวปั้น, โด่งดิด่ง] = food;
const [, กะหรี่กั่ย] = food;



// 4. Spread
// กระจายค่าสมาชิกใน object หรือใน array ออกมาได้ 

// Bad 💥
const animal = { name: '🐔'};
animal.color = 'pink';

// Good 💦
let animal = { name: '🐔'};
animal = { ...animal, color: 'pink'};

// Bad 💥
const food = ['🍛', '🍝', '🍢', '🍤'];
food.push('🍙');

// Good 💦
let food = ['🍛', '🍝', '🍢', '🍤'];
food = [...food, '🍙'];



// 5. Reduce, Filter, Map
// method array class - ช่วยให้เขียน code ได้กระชับมากขึ้น

// Bad 💥
const numbers = [1, 5, 9, 7, 3, 8];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// Good 💦
const numbers = [1, 5, 9, 7, 3, 8];
const sum = numbers.reduce((total, value) => total + value, 0);
const evens = numbers.filter((value) => value % 2 === 0);
const square = numbers.map((value) => value ** 2);



// 6. Async/Await
// syntax ที่ช่วยให้ทำงานกับ promise ได้ง่ายขึ้น

const API ={
    getWeather: () => Promise.resolve(),
    process: () => Promise.resolve()
};

// Bad 💥
function getWeather() {
    return API.getWeather()
    .then((weather) => {
        return API.process(weather);
    })
    .then((weather) => {
        console.log('Weather is ${weather}');
    });
}

// Good 💦
async function getWeather() {
    const weather = await API.getWeather();
    console.log('Weather is ${await API.process(weather)}');
}