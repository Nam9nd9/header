// document.addEventListener("DOMContentLoaded", function() {
//   const quantityInput = document.querySelector(".qty-val");
//   const quantityChangeButtons = document.querySelectorAll(".quantity-minus, .quantity-plus");
  const btnUpdateCart = document.getElementById("btn-update_cart");
  const tamtinh = document.getElementById("tamtinh");
  const tong = document.getElementById("tongtien");
  const couponCode = document.getElementById("coupon_code");
  const applyCoupon = document.getElementById("apply_coupon");
//   quantityChangeButtons.forEach(button => {
//     button.addEventListener("click", function(event) {
//       event.preventDefault();
      
//       const changeAmount = parseInt(button.classList.contains("quantity-plus") ? 1 : -1);
//       const currentValue = parseInt(quantityInput.value);
//       const newValue = currentValue + changeAmount;

//       if (newValue >= 1) {
//         quantityInput.value = newValue;
//         // btnUpdateCart.addEventListener("click",()=>{
//         //   let a = 200000*newValue;
//         //   tamtinh.innerText=a;
//         //   tong.innerText=a;
//         // })
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  const quantityInput = document.querySelector(".qty-val");
  const quantityChangeButtons = document.querySelectorAll(".quantity-minus, .quantity-plus");

  quantityChangeButtons.forEach(button => {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      
      const changeAmount = parseInt(button.classList.contains("quantity-plus") ? 1 : -1);
      const currentValue = parseInt(quantityInput.value);
      const newValue = currentValue + changeAmount;

      if (newValue >= 1) {
        quantityInput.value = newValue;
                 btnUpdateCart.addEventListener("click",()=>{
                  let a = 200000*newValue;
                  tamtinh.innerText=a;
                  tong.innerText=a;

                  applyCoupon.addEventListener("click",()=>{
                    if(couponCode.value=="giam20k")
                      {
                         tong.innerText=a-20000;
                      }
                    else{
                      tong.innerText=a;
                      }
         
          })
         })
      }
    });
  });
});


const btnXoasp = document.getElementById("xoasp");
const containerBot = document.getElementById("main-content-container-bot")
btnXoasp.addEventListener("click",()=>{
  containerBot.innerHTML=`
  <div class="cart-enty woocommerce-info">
              Chưa có sản phẩm nào trong giỏ hàng.
            </div>
            <p class="return-to-shop">
              <a
                class="button wc-backward"
                href="/sanpham.html"
              >
                Quay trở lại cửa hàng
              </a>
            </p>
  `
})