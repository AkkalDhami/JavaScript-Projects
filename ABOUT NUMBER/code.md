# ABOUT NUMBER

## View Demo : <https://about-number.vercel.app/>

## HTML Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About The Number..</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section class="container">
      <h2>About Number</h2>
      <form action="#" class="form">
        <input id="input" type="number" placeholder="Enter a Number" required />
        <button id="submit">Sumbit</button>
      </form>
      <div id="info">
        <ul></ul>
      </div>
    </section>
    <script src="script.js"></script>
  </body>
</html>

```

## CSS Code

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

body {
  background: #f5f7fa;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.container {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;
  padding: 18px 12px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.container h2 {
  text-align: center;
  padding: 10px 8px;
  font-size: 2em;
}
.container:hover {
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

/* Form styling */
.form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 25px;
}

.form input {
  flex: 1;
  padding: 12px 14px;
  font-size: 16px;
  border: 1.5px solid #ddd;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form input:focus {
  border-color: #4caf50;
  box-shadow: 0 0 6px rgba(76, 175, 80, 0.3);
}

.form button {
  padding: 16px 14px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background: #4caf50;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.form button:hover {
  background: #45a049;
}

#info ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style-type: none;
  line-height: 1.8;
}

#info li {
  padding: 10px;
  font-size: 17px;
  color: #555;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: background 0.3s, transform 0.2s;
}

#info li:hover {
  background: #4caf50;
  color: white;
  transform: translateY(-3px);
}

```

## JavaScript Code

```javascript
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

```
