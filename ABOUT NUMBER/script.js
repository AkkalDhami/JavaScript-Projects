let info = document.querySelector("#info ul");

let btn = document.querySelector("#submit");

let isTrue = true;
if (isTrue) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    info.innerHTML = "";
    let input = parseInt(document.querySelector("#input").value);

    aboutNum(input);
    input = "";
  });
}

function aboutNum(num) {
  if (num === "") {
    alert("Please enter a number");
    return false;
  }

  if (isNaN(num)) {
    alert("Please enter a valid number");
    return false;
  }

  if (num % 2 === 0) {
    info.innerHTML += `<li>${num} is an Even Number. </li>`;
  } else {
    info.innerHTML += `<li>${num} is an Odd Number. </li>`;
  }

  if (num > 0) {
    info.innerHTML += `<li>${num} is a Positive Number. </li>`;
  }
  if (num < 0) {
    info.innerHTML += `<li>${num} is a Negative Number. </li>`;
  }

  if (num === 0) {
    info.innerHTML += `<li>${num} is Zero. </li>`;
  }

  // Check if the number is prime or composite
  if (isPrime(num)) {
    info.innerHTML += `<li>${num} is a Prime Number.</li> `;
  } else if (num > 1) {
    info.innerHTML += `<li>${num} is a Composite Number.</li> `;
  }

  if (Math.sqrt(num) % 1 === 0) {
    info.innerHTML += `<li>${num} is a Perfect Square.</li>`;
  } else {
    info.innerHTML += `<li>${num} is not a Perfect Square.</li>`;
  }

  return true;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
