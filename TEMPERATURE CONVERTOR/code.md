# Temperature Converter

## View Demo : <https://temperatureconvertor-three.vercel.app>

## HTML Code

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h1>Temperature Converter</h1>
      <form id="converterForm">
        <input
          type="number"
          id="temperatureInput"
          placeholder="Enter temperature"
        />
        <div class="from">
          <label for="unitSelect">From:</label>
          <select id="unitSelect">
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
            <option value="K">Kelvin</option>
          </select>
        </div>
        <div class="to">
          <label for="toUnitSelect">To:</label>
          <select id="toUnitSelect">
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
            <option value="K">Kelvin</option>
          </select>
        </div>

        <button id="submit" type="submit">Convert</button>
      </form>
      <div id="resultDisplay">Please enter a number</div>
    </div>

    <script src="./script.js"></script>
  </body>
</html>
```

## CSS Code

```css
/* Reset basic styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #121212;
  color: #e0e0e0;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  width: 400px;
  text-align: center;
}

h1 {
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 20px;
  color: #bb86fc;
}

h1 {
  font-size: 1.8em;
  margin-bottom: 20px;
  color: #bb86fc;
}

input[type="number"] {
  width: 100%;
  padding: 13px 12px;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: #333;
  color: #e0e0e0;
  font-size: 18px;
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0px 8px 2px #7f62a3;
  }
}

label {
  color: #bb86fc;
  font-size: 1.2em;
  margin-right: 5px;
}

select {
  width: calc(100% - 55px);
  padding: 13px 12px;
  border: none;
  border-radius: 4px;
  margin-bottom: 15px;
  background-color: #333;
  color: #e0e0e0;
  font-size: 18px;
  transition: all 0.3s;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0px 8px 2px #7f62a3;
  }
}

.from,
.to {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
}

button {
  width: 100%;
  padding: 13px 12px;
  border: none;
  border-radius: 4px;
  background-color: #bb86fc;
  color: #121212;
  font-size: 1.3em;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

button:hover {
  background-color: #a175f8;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
}

#resultDisplay {
  margin-top: 15px;
  font-size: 1.2em;
  color: #03dac5;
  background-color: #333;
  padding: 10px;
  border-radius: 4px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.4);
}
```

## JavaScript Code

```javascript
let converterForm = document.getElementById("converterForm");
let temperatureInput = document.getElementById("temperatureInput");
let resultDisplay = document.getElementById("resultDisplay");
let unitSelect = document.getElementById("unitSelect");
let unitSelect2 = document.getElementById("toUnitSelect");

converterForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let temperature = parseFloat(temperatureInput.value);
  let fromUnit = unitSelect.value;
  let toUnit = unitSelect2.value;
  checkInput(temperature, fromUnit, toUnit);
});


function checkInput(temperature, fromUnit, toUnit) {
  if (isNaN(temperature)) {
    resultDisplay.textContent = "Invalid input. Please enter a number.";
    return false;
  }
  if (fromUnit === "C" && toUnit === "C") {
    resultDisplay.textContent = temperature + "°C";
  }
  if (fromUnit === "C" && toUnit === "F") {
    resultDisplay.textContent = (temperature * 9) / 5 + 32 + "°F";
  }
  if (fromUnit === "C" && toUnit === "K") {
    resultDisplay.textContent = (temperature + 273.15) + "K";
  }
  if (fromUnit === "F" && toUnit === "F") {
    resultDisplay.textContent = temperature + "°F";
  }
  if (fromUnit === "F" && toUnit === "C") {
    resultDisplay.textContent = (((temperature - 32) * 5) / 9).toFixed(2) + "°C";
  }
  if (fromUnit === "F" && toUnit === "K") {
    resultDisplay.textContent = (((temperature - 32) * 5) / 9 + 32) + "K";
  }
  if (fromUnit === "Kelvin" && toUnit === "C") {
    resultDisplay.textContent = (temperature - 273.15) + "C";
  }

  if (fromUnit === "K" && toUnit === "F") {
    resultDisplay.textContent = (((temperature - 273.15) * 9) / 5 + 32) + "°F";
  }
  if (fromUnit === "K" && toUnit === "K") {
    resultDisplay.textContent = temperature + "K";
  }
}
``
