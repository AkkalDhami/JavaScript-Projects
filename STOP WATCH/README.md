# Stop-Watch
## View Demo: (https://stopwatch-theta-five.vercel.app/)
## HTML COde:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stop Watch</title>
    <!-- link css here -->
  </head>
  <body>
    <!-- Stopwatch -->
    <div class="container">
      <h1>Stop Watch</h1>
      <div id="stopwatch">00:00:00:00</div>
      <button id="start-btn">Start</button>
      <button id="pause-btn">Pause</button>
      <button id="reset-btn">Reset</button>
    </div>

    <!-- link js file here -->
  </body>
</html>
```

## CSS COde:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #1e1e2f;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  color: #fff;
}

.container {
  background-color: #2c2c3e;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
}
.container h1 {
  color: #fff;
  margin: 0;
}

#stopwatch {
  font-size: 3em;
  font-weight: bold;
  color: #f2a365;
  padding: 20px 0;
}

button {
  background-color: #f2a365;
  border: none;
  padding: 10px 20px;
  margin: 10px 3px;
  font-size: 1em;
  font-weight: bold;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
  transform: scale(1.1);
  box-shadow: 0px 6px 15px rgba(242, 163, 101, 0.5);
}

button:active {
  transform: scale(0.95);
  background-color: #d99863;
}

#start-btn {
  background-color: #1bda5b;
}

#pause-btn {
  background-color: #e77b28;
}

#reset-btn {
  background-color: #2d88d6;
}

#start-btn:hover {
  box-shadow: 0px 6px 15px rgba(164, 212, 180, 0.5);
}

#pause-btn:hover {
  box-shadow: 0px 6px 15px rgba(255, 180, 162, 0.5);
}

#reset-btn:hover {
  box-shadow: 0px 6px 15px rgba(189, 224, 254, 0.5);
}
```

## JavaScript COde:

```javascript
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;
let isRunning = false;

function updateDisplay() {
  const stopwatch = document.getElementById("stopwatch");
  stopwatch.textContent =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      milliseconds += 1;

      if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }
      if (minutes === 60) {
        minutes = 0;
        hours += 1;
      }

      updateDisplay();
    }, 10);
  }
}

function pauseStopwatch() {
  clearInterval(timer);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(timer);
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  updateDisplay();
}

document.getElementById("start-btn").addEventListener("click", startStopwatch);
document.getElementById("pause-btn").addEventListener("click", pauseStopwatch);
document.getElementById("reset-btn").addEventListener("click", resetStopwatch);
```
