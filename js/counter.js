// Find elements on the page
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector("[data-counter]");

//Click on btnMinus
btnMinus.addEventListener("click", function () {
  //Check that counter should be more than 1
  if (parseInt(counter.innerHTML > 1)) {
    counter.innerHTML = --counter.innerHTML;
  }
});
//Click on btnPlus
btnPlus.addEventListener("click", function () {
  counter.innerHTML = ++counter.innerHTML;
});
