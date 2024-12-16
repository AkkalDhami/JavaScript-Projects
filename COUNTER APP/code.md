# Counter App

## View Demo : <https://counterapp-rouge.vercel.app/>

## HTML Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Counter App</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <section class="container">
      <h1>Counter App</h1>
      <h2 id="count">0</h2>

      <div class="row">
          <label for="incrementBy">Increment By:</label>
          <input type="number" id="incrementBy" min="1" placeholder="1" />
        </div>
        <button id="increment">Increment</button>

      <div class="row">
          <label for="decrementBy">Decrement By:</label>
          <input type="number" id="decrementBy" min="1" placeholder="1" />
        </div>
        <button id="decrement">Decrement</button>

      <button id="reset">Reset</button>
    </section>

    <script src="./script.js"></script>
  </body>
</html>
```

## CSS Code

```css
/* style.css */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #121212;
  color: #ffffff;
}

.container {
  text-align: center;
  background-color: #1e1e1e;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.6);
  width: 320px;
}

h1 {
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #ff9f00;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
}

#count {
  font-size: 2.8rem;
  margin: 1.2rem 0;
  color: #ffdd57;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.8);
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 0.5rem;
}

label {
  font-size: 1.3rem;
  color: #bbbbbb;
  text-align: left;
  font-weight: 600;
}

input[type="number"] {
  width: 80px;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #333333;
  color: #ffffff;
  border: 2px solid #444444;
  border-radius: 5px;
  text-align: center;
}

button {
  display: inline-block;
  width: 100%;
  padding: 0.7rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  margin: 0.5rem 0;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:active {
  transform: scale(0.98);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
}

#increment {
  background-color: #4caf50;
  margin-top: 6px;
  margin-bottom: 12px;
}

#decrement {
  background-color: #f44336;
}

#reset {
  background-color: #757575;
  transition: all 0.3s;
  margin-top: 8px;

  &:hover {
    background-color: #555555;
    cursor: pointer;
  }
}

```

## JavaScript Code

```javascript
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

```
