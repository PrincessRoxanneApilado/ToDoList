const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskDate = document.getElementById('task-date');
const todoList = document.getElementById('todo-list');

let tasks = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = {
        id: Date.now(),
        date: taskDate.value,
        name: taskInput.value
    };
    tasks.push(task);
    updateTodoList();
    form.reset();
});

function updateTodoList() {
    todoList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task.date} - ${task.name}</span>
            <span>
                <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </span>`;
        todoList.appendChild(li);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    updateTodoList();
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);
    taskInput.value = task.name;
    taskDate.value = task.date;

    deleteTask(id);
}
