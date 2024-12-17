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
