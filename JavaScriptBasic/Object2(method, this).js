let rabbit = {
    // key: value (ชื่อข้อมูล: ข้อมูล)
    name: 'Mimi',
    breed: 'Lion Head',
    color: 'White',
    weight: 1.2,
    talk: function() {
        console.log('Oung Oung')
    }
/*
    talk () {
        console.log('Oung Oung')
    }
*/
};

rabbit.talk();     // Oung Oung





let name = 'ปลาหยุด'

let rabbit = {
    name: 'Mimi',
    breed: 'Lion Head',
    color: 'White',
    weight: 1.2,
    talk () {
        console.log(this.name + ', Oung Oung')
    },
    weightDetail() {
        if (this.weight < 1) {
            return 'น้อยเกิ๊นนนนน';
        }
        else if (this.weight > 2) {
            return 'มากเกิ๊นนนนน';
        }
        return 'ปกติเจ่าาาาา';
    }
};

rabbit.talk();     // ปลาหยุด , Oung Oung
console.log(rabbit.weightDetail());     // ปกติเจ่าาาาา