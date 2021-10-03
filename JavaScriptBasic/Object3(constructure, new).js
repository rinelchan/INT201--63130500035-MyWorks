function Rabbit(name, breed, color, weight) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.weight = weight;
    this.talk = function() {
        (this.name + ' , oung oung');
}

// new ใช้รับ Object ใหม่ ที่ถูกสร้างขึ้น
let rabbit1 = new Rabbit('Mimi', 'Lion Head', 'White',1.2);
let rabbit2 = new Rabbit('Momo' , 'Netherland dwarfd', 'White',1.2);

console.log(rabbit1);
console.log(rabbit2);

rabbit1.talk();     // Mimi , oung oung
rabbit2.talk();     // Momo , oung oung



/*
let rabbits1 = {
      name: 'Mimi',
      breed: 'Lion Head',
      color: 'White',
      weight: 1.2
};

let rabbits2 = {
      name: 'Momo',
      breed: 'Netherland dwarf',
      color: 'White',
      weight: 1.2
};
*/