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
    if (taskName.length > 15) {
        alert("Nazwa zadania nie może być dłuższa niż 15 znaków!");
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

function renderAllTasks() {
    taskList.innerHTML = "";
    completedList.innerHTML = "";

    tasks.forEach(task => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        const taskContent = document.createElement("span");
        taskContent.textContent = `${task.name} (${task.priority})`;

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";
        completeBtn.classList.add("complete-btn");

        completeBtn.addEventListener("click", () => {
            task.completed = true;
            saveToLocalStorage();
            renderAllTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveToLocalStorage();
            renderAllTasks();
        });

        taskItem.appendChild(taskContent);
        taskItem.appendChild(completeBtn);
        taskItem.appendChild(deleteBtn);

        if (task.completed) {
            taskItem.classList.add("completed");
            completedList.appendChild(taskItem);
        } else {
            taskList.appendChild(taskItem);
        }
    });
}

function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
