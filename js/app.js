const taskForm = document.getElementById("taskForm");
const taskNameInput = document.getElementById("taskName");
const prioritySelect = document.getElementById("priority");
const taskList = document.getElementById("taskList");
const completedList = document.getElementById("completedList");

let tasks = [];

document.addEventListener("DOMContentLoaded", () => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderAllTasks();
    }
});

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskName = taskNameInput.value.trim();
    const priority = prioritySelect.value;

    if (taskName === "") {
        alert("Nazwa zadania nie może być pusta!");
        return;
    }

    const newTask = {
        id: Date.now(),
        name: taskName,
        priority: priority,
        completed: false
    };

    tasks.push(newTask);
    saveToLocalStorage();
    renderAllTasks();
    taskForm.reset();
});

