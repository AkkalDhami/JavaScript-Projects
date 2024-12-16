
# Tic Tac Toe
## View Demo: (https://funwithtictactoe.vercel.app)

## HTML Code:

```HTMl
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main>
      <h1>Tic Tac Toe</h1>
      <div class="container">
        <div class="game">
          <button class="box"></button>
          <button class="box"></button>
          <button class="box"></button>
          <button class="box"></button>
          <button class="box"></button>
          <button class="box"></button>
          <button class="box"></button>
          <button class="box"></button>
          <button class="box"></button>
        </div>
      </div>
      <button id="reset-btn">Reset Game</button>
      <div class="msg-container hide">
        <p id="msg">Winner</p>
        <br />
        <button id="new-btn">New Game</button>
      </div>
    </main>
    <script src="script.js"></script>
  </body>
</html>

```

## CSS Code:

```css
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: cadetblue;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.container {
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.game {
  height: 60vmin;
  width: 60vmin;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}
.box {
  height: 15vmin;
  width: 15vmin;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
  font-size: 8vmin;
  color: darkblue;
  background-color: turquoise;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover{
    background-color: rgba(37, 230, 211, 0.498);
    
  }
}
#reset-btn {
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  background-color: indigo;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgb(109, 5, 183);
  }
}
#new-btn {
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  background-color: indigo;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgb(109, 5, 183);
  }
}
#msg {
  color: #ffffc7;
  font-size: 5vmin;
  margin-top: 10px;
}

.hide {
  display: none;
}

```

## JS Code:

```js
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
```
