// Define Element ID
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

console.log(taskInput, addTaskBtn, taskList);

// State
let tasks = [];

// Render function
function renderTasks() {
  taskList.innerHTML = "";

  for (const task of tasks) {
    const li = document.createElement("li");
    li.textContent = task.text;

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    taskList.appendChild(li);
  }
}

// Add task
addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({
    id: Date.now(),
    text: text,
    completed: false
  });

  taskInput.value = "";
  renderTasks();
});
