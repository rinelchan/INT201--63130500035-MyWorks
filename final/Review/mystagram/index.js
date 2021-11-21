// add image ตาม keyword
function appendImageElem(keyword, index) {
  // สร้าง element img
  const imgElem = document.createElement('img');  
  // เข้าถึง property ของ object(imgElem)          ขนาดรูป    เชื่อมต่อ text         รูปไม่ซ้ำกัน
  // imgElem.src = `https://source.unsplash.com/400x225/?' + keyword + '&sig=' + index;
  imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;  
  // <div class="gallery"></div>
  // ดึง element จาก class
  const galleryElem = document.querySelector('.gallery');
  galleryElem.appendChild(imgElem);
}

// ลบรูปที่หาก่อนหน้านี้
function removePhotos() {
  // ดึง element gallery                        class
  const galleryElem = document.querySelector('.gallery');
  // property ดึง HTML ที่อยู่ใน div gallery ออกมา แล้ว set ให้เป็น null
  galleryElem.innerHTML = '';
}

// รับ parameter event เข้ามา
function searchPhotos(event) {
  const keyword = event.target.value;
  //console.log(event.target); 
  //console.log(keyword);
  //ค่าที่ user กำลังพิมพ์อยู่ ณ ปัจจุบัน

  // user กดปุ่ม Enter หรือไม่
  //                           keyword !== '' (not null)
  if (event.key === 'Enter' && keyword) {
    // เรียกใช้ฟังก์ชัน removePhotos()
    removePhotos();

    // วน loop แล้วทำการเพิ่มรูป
    for (let i = 1; i <= 9; i++) {
      appendImageElem(keyword, i);  // ค่าที่ user ใส่
    }
  }
}

// สร้างเพื่อครอบตัว code เพื่อให้เป็นระเบียบ
function run() {
  // เรียกใช้ฟังก์ชัน appendImageElem()
  appendImageElem();
  // ดึงตัว input fill มา
  const inputElem = document.querySelector('input');
  // event ที่เมื่อ user พิมพ์ข้อมูลเข้ามาก็จะเรียกใช้ event นี้ (,เรียกใช้ฟังก์ชัน)
  inputElem.addEventListener('keydown', searchPhotos);
}

// เรียกใช้ function run()
run();



// Introduce DOM
// ดึงตัว element เพื่อใช้อ่านค่า property
document.querySelector('input');
// ดึงตัว element id เพื่อใช้อ่านค่า property
document.getElementById('email');
// สร้าง element ตัวใหม่
document.createElement('div');
// ลูกของ element 
document.appendChild(element);

/*
function appendImageElem(keyword, index) {
  const imgElem = document.createElement('img');  
  imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;  

  const galleryElem = document.querySelector('.gallery');
  galleryElem.appendChild(imgElem);
}

function run() {
    for (let i = 1; i <= 9; i++) {
      appendImageElem(keyword, i);
    }
  }

run();
*/

// Introduce Event
// ตัวแปร (btnElem) ดึงปุ่มออกมา
const btnElem = document.querySelector('button');
// by event ที่ปุ่ม โดยเรียกใช้ method (addEventListener)
// เมื่อ click ปุ่มนี้ จะทำการเรียกฟังก์ชัน onClick
btnElem.addEventListener('click', onClick);

//ฟังก์ชันจาก event รับ parameter(ชื่อ event) มาด้วยเสมอ
function onClick(event) {
  //          element ที่ทำให้เกิด event (button)
  console.log(event.target);
}