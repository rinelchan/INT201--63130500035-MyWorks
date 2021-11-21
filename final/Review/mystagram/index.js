// ค้นหารูปภาพตาม keyword
function appendImageElem(keyword, index) {
  // สร้าง element img
  const imgElem = document.createElement('img');  
  // เข้าถึง property ของ element     ขนาดรูป
  imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;  


  const galleryElem = document.querySelector('.gallery');
  galleryElem.appendChild(imgElem);
}

function removePhotos() {
  const galleryElem = document.querySelector('.gallery');
  galleryElem.innerHTML = '';
}

function searchPhotos(event) {
  const keyword = event.target.value;

  if (event.key === 'Enter' && keyword) {
    removePhotos();

    for (let i = 1; i <= 9; i++) {
      appendImageElem(keyword, i);
    }
  }
}

// สร้างเพื่อครอบตัว code เพื่อให้เป้นระเบียบ
function run() {
  const inputElem = document.querySelector('input');
  inputElem.addEventListener('keydown', searchPhotos);
}

run();


// ดึงตัว element เพื่อใช้อ่านค่า property
document.querySelector('input');
// ดึงตัว element id เพื่อใช้อ่านค่า property
document.getElementById('email');
// สร้าง element ตัวใหม่
document.createElement('div');
// ลูกของ element 
document.appendChild(element);