// 1. Pure Function
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

updateCartCount

function removeCartItem(event) {
    var deleteItem = event.target
    deleteItem.parentElement.parentElement.remove()
    updateCartCount();
}

const cartBtn = document.querySelector("#cartBtn"); //เปลี่ยนเป็นid
const cartMenu = document.querySelector("#cartMenu"); //เปลี่ยนเป็นid

//คัดสินค้าในตะกร้า ให้เหลือเฉพาะสินค้าที่ไม่ได้ถูกลบออก
let filtered = productsCart.filter(function (value) {
    return (
      value.productInfo.productId !== product.productInfo.productId
    );
  });
  productsCart = filtered;
  setProductCookie(); //ทำการเซ็ทค่า cookie ใหม่
}
}
}
totalPriceAmount -= product.productInfo.price;
totalPriceLabel.textContent = `Total price: ${totalPriceAmount} ฿`;
});
});