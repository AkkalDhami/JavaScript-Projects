# Dad Son Joke

## View Demo: <https://dadsonjoke.vercel.app>

## HTML Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="jokeContainer">
        <h1>Random Joke</h1>
        <div class="joketext">
            <p id="dad">Dad: Did you hear about the Viking who was reincarnated?</p>
            <p id="son">Son: He was Bjorn again</p>
        </div>
        <button id="newJokeBtn">New Joke</button>
    </div>

    
    <script src="./script.js"></script>
</body>
</html>
```

## CSS Code

```css
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #121212;
  color: #f5f5f5;
}

#jokeContainer {
  background: linear-gradient(135deg, #333, #000);
  border-radius: 15px;
  padding: 30px;
  max-width: 450px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
}


#jokeContainer h1 {
  font-size: 2em;
  color: #ffca28;
  margin-bottom: 20px;
}

.joketext p {
  font-size: 1.3em;
  margin: 10px 0;
  padding: 5px 0;
}

#dad {
  color: #ff7043;
  font-weight: bold;
}

#son {
  color: #29b6f6;
  font-weight: bold;
}

#newJokeBtn {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  font-weight: bold;
  background-color: #ff7043;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  color: #fff;
  transition: all 0.3s ease;
}

#newJokeBtn:hover {
  background-color: #c24720;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
}

```

## JavaScript Code

```javascript
let url = "https://official-joke-api.appspot.com/random_joke";

document.getElementById("newJokeBtn").addEventListener("click", fetchJoke);

function fetchJoke() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("dad").textContent = `Dad: ${data.setup}`;
      document.getElementById("son").textContent = `Son: ${data.punchline}`;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

```
