function calcCartPrice() {
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceEl = document.querySelector(".total-price");
  const deliveryCost = document.querySelector(".delivery-cost");
  const cartDeliveryEl = document.querySelector("[data-cart-delivery]");
  let totalPrice = 0;
  cartItems.forEach(function (item) {
    const counter = +item.querySelector("[data-counter]").innerHTML;
    const price = parseInt(item.querySelector(".price__currency").innerHTML);
    const currnetPrice = counter * price;
    totalPrice += currnetPrice;
  });
  if (totalPrice > 0) {
    cartDeliveryEl.classList.remove("none");
  } else {
    cartDeliveryEl.classList.add("none");
  }
  if (totalPrice < 600) {
    deliveryCost.classList.remove("free");
    deliveryCost.innerHTML = "250₽";
  } else {
    deliveryCost.classList.add("free");
    deliveryCost.innerHTML = "бесплатно";
  }
  totalPriceEl.innerHTML = totalPrice;
}
