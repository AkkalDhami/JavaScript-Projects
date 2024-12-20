# Todo
## View Demo: (https://focus-todo-list.vercel.app)

## HTML And Tailwind CSS Code:
```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ToDO - Create By Akkal Dhami</title>
    <link rel="stylesheet" href="./src/output.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
      integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>
  <body class="bg-[#16162f] mx-auto flex justify-center max-w-[1200px]">
    <section class="bg-[#1d1f3b] p-5 w-[600px] h-auto flex flex-col space-y-3">
      <div
        class="flex justify-center w-full h-6 flex-col items-center gap-3 mb-2"
      >
        <h1 class="text-3xl font-bold text-orange-500 text-center">
          To-Do List
        </h1>
      </div>

      <form action="#" id="toDoForm">
        <div class="flex w-full rounded-lg border-2 border-orange-400">
          <input
            type="text"
            id="taskInput"
            placeholder="Enter your task..."
            class="bg-transparent text-gray-300 text-[18px] outline-none p-3 grow"
          />
          <button
            type="submit"
            id="addTaskBtn"
            class="bg-orange-500 text-[22px] text-white px-4 py-3 text-sm font-medium hover:bg-orange-600 duration-300"
          >
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </form>

      <div class="relative">
        <h2
          class="text-[26px] text-center text-orange-500 tracking-wide font-bold"
        >
          Your Today's Progress
        </h2>
        <div
          class="progressBarContainer rounded-lg h-[14px] bg-[#393b57] mt-3 mb-3"
        >
          <div
            id="progress-bar"
            class="bg-green-500 h-[100%] rounded-full transition-width duration-300"
          ></div>
        </div>
        <!-- Tooltip -->
        <div
          id="tooltip"
          class="absolute top-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm rounded py-1 px-2 opacity-0 transition-opacity duration-300 pointer-events-none"
        >
          0%
        </div>
        <span
          id="tooltip2"
          class="absolute -translate-x-1/2 top-[45%] opacity-0 left-1/2 w-2 block rotate-45 h-2 bg-black transition-opacity duration-300 pointer-events-none"
        ></span>
      </div>

      <div class="mt-3">
        <ul
          id="taskLists"
          class="flex flex-col text-white space-y-3 max-h-[500px] overflow-y-auto py-3"
        ></ul>
      </div>
    </section>


    <script src="./src/script.js"></script>
  </body>
</html>
```

## JavaScript Code:
```javascript
let toDoContainer = document.querySelector("#taskLists");
let toDoForm = document.querySelector("#toDoForm");
let taskInput = document.querySelector("#taskInput");

document.addEventListener("DOMContentLoaded", () => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    let icon = task.isComplete
      ? `<i class="fa-solid fa-circle-check"></i>`
      : `<i class="fa-regular fa-circle"></i>`;
    let color = task.isComplete ? "text-green-500" : "text-red-500";
    addToDo(task.id, task.text, icon, color);
  });
});

toDoForm.addEventListener("submit", (e) => {
  let taskInputValue = taskInput.value.trim();
  e.preventDefault();
  if (!validInput()) return;

  let taskId = Date.now();

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ id: taskId, text: taskInputValue, isComplete: false, color: "text-red-500" });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  addToDo(taskId, taskInputValue, `<i class="fa-regular fa-circle"></i>`, "text-red-500");

  clearInput();

});

function validInput() {
  let taskInputValue = taskInput.value.trim();
  if (taskInputValue === "") {
    alert("Task input field cannot be empty.");
    return false;
  }
  return true;
}

function clearInput() {
  taskInput.value = "";
}

function addToDo(id, input, icon, color) {
  toDoContainer.innerHTML += `
    <li
         id="todo${id}"
         class="text-xl rounded-lg flex border border-gray-500 hover:border-[#1ccc0f] duration-300 justify-between items-center px-3 py-4 w-full"
       >
         <div class="flex justify-between items-center w-full gap-3">
           <h3 onclick="checkedToDo(${id})" class="checkedToDo ${color} cursor-pointer">
             ${icon}
           </h3>
           <p class="grow text-[18px]">${input}</p>
           <button  onclick="editToDo(${id})"
             class="editToDo text-[22px] text-gray-400 font-medium hover:text-orange-500 duration-300"
           >
             <i class="fa-regular fa-pen-to-square"></i>
           </button>
           
           <button
             class="deleteToDo text-[22px] text-gray-400 font-medium hover:text-orange-500 duration-300"
             onclick="deleteTask(${id})"
           >
             <i class="fa-solid fa-xmark"></i>
           </button>
         </div>
       </li>
 `;
  updateProgressBar();
}


function editToDo(id) {

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task.id === id);
  let taskInputValue = tasks[0].text;
  taskInput.value = taskInputValue;
  taskInput.focus();
  taskInput.select();
  deleteTask(id)
  updateProgressBar();
}



function deleteTask(id) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  document.querySelector(`#todo${id}`).remove();
  updateProgressBar();
}

function checkedToDo(id) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks = tasks.map((task) => {
    if (task.id === id) {
      task.isComplete = !task.isComplete;
      task.color = task.isComplete ? "text-green-500" : "text-red-500";
    }
    return task;
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));

  let taskElement = document.querySelector(`#todo${id} .checkedToDo`);
  if (taskElement) {
    let task = tasks.find((task) => task.id === id);
    if (task.isComplete) {
      taskElement.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
      taskElement.classList.remove(`text-red-500`);
      taskElement.classList.add(`text-green-500`);
    } else {
      taskElement.innerHTML = `<i class="fa-regular fa-circle"></i>`;
      taskElement.classList.add(`text-red-500`);
      taskElement.classList.remove(`text-green-500`);
    }
  }
  updateProgressBar();
}

function updateProgressBar() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const totalTasks = tasks.length;
  const progressBar = document.getElementById('progress-bar');
  const completedTasks = tasks.filter(task => task.isComplete).length;
  const percentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  progressBar.style.width = `${percentage}%`;


  const tooltip = document.getElementById('tooltip');
  tooltip.textContent = percentage + '%';
  console.log(percentage)
  if (totalTasks === 0) {
    progressBar.classList.add(`w-[0%]`);
    tooltip.textContent = '0%';
  }
 
}

updateProgressBar();

window.addEventListener('storage', updateProgressBar);

const progressBarContainer = document.querySelector('.progressBarContainer');

progressBarContainer.addEventListener('mouseenter', () => {
  const tooltip = document.getElementById('tooltip');
  tooltip.classList.remove('opacity-0');
  tooltip.classList.add('opacity-100');
});

progressBarContainer.addEventListener('mouseleave', () => {
  const tooltip = document.getElementById('tooltip');
  tooltip.classList.remove('opacity-100');
  tooltip.classList.add('opacity-0');

});



function toggleTaskCompletion(id) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateProgressBar();
  }
}
```