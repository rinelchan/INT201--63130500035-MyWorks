// ยืนยันว่าจะดำเนินการลบข้อมูลออกจริง ๆ
function checkDelete() {
    if(confirm){
      return ("confirm to delete");
  }else{
      return ("cancel");
  }
}

// ลบ product ออกจากตะกร้าทีละอัน
function removeItem() {
    let item = document.getElementById('item')
    item.removeChild(item.ElementChild);
        
    while (productsCart = productsCart.filtered()) {
        if (productsCart.firstChild && productsCart.firstChild.checked) {
            productsCart.removeChild(item);
        }
    }
}

let product = document.getElementById('product')
product.remove();


/*
deleteItem.addEventListener("click", () => {
    let deleteItem = 'addEventListener';
    let delete = items[deleteItem];
    var div = document.getElementById('div');
    div.removeEventListener('click',returnedFunction,false);
  
    event.preventDefault();
    this.removeEventListener();
  
    evt.preventDefault();
    this.removeProduct($(evt.currentTarget));
  }


// อันนี้เรามั่วว
deleteItem.removeEventListeners = function(deleteItem) {
   for(var index = 0; index != _listeners.length; index++)
    {
      var item = _listeners[index];

      var target = item.target;
      var type = item.type;
      var listener = item.listener;

       if(target == this && type == targetType)
       {
           this.removeEventListener(type, listener);
        }
   }
};
*/



for (let i = 0; i < products.filtered; i++) {
    if (products[i].age > 25) {
       result.push(productsCart[i])
    }
  }

const remove = products.filter((product) => {
    return product;
});

function removeProduct() { 
    var product = arr.productsCart();
    if (product > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

arr = arr.filter(function(item) {
    return item !== value
})

arr = arr.filter(item => item !== value)


// สามารถใช้หลายวิธีในการลบรายการออกจาก Array:

// //1
// someArray.shift(); // first element removed
// //2
// someArray = someArray.slice(1); // first element removed
// //3
// someArray.splice(0, 1); // first element removed
// //4
// someArray.pop(); // last element removed
// //5
// someArray = someArray.slice(0, a.length - 1); // last element removed
// //6
// someArray.length = someArray.length - 1; // last element removed



export function closeProductCart() {
    const cartMenu = document.querySelector(".cartMenu");
    while (cartMenu.firstChild) {
      // เช็คว่าในไอดี cartMenuมีคลาสลูกหรือไม่
      cartMenu.removeChild(cartMenu.firstChild);
    }
  }