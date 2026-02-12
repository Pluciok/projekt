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

