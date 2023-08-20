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
      }
    });
  });
});