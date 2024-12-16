let countMsg = document.getElementById("count");
let count = 0;
let incrementBy = document.getElementById("incrementBy");
let decrementBy = document.getElementById("decrementBy");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let resetBtn = document.getElementById("reset");

incrementBtn.addEventListener("click", function () {
  if (checkInput(incrementBy.value)) {
    count += parseInt(incrementBy.value);
    countMsg.textContent = count;
  }
});

decrementBtn.addEventListener("click", function () {
  if (checkInput(decrementBy.value)) {
    count -= parseInt(decrementBy.value);
    countMsg.textContent = count;
  }
});

resetBtn.addEventListener("click", function () {
  count = 0;
  countMsg.textContent = count;
});

function checkInput(inputValue) {
  if (inputValue === "" || isNaN(inputValue)) {
    countMsg.textContent = "Please enter a number";
    countMsg.style.fontSize = "22px";
    countMsg.style.color = "red";
    return false;
  }
  countMsg.style.fontSize = "2.8rem";
  countMsg.style.color = "#ffdd57";

  return true;
}
