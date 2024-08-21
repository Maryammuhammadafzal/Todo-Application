// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Task Checking
const todoList = document.getElementById('todo-list');

todoList.addEventListener('change', (event) => {
    const checkbox = event.target;
    const label = checkbox.nextElementSibling;

    if (checkbox.checked) {
        label.classList.add('completed');
    } else {
        label.classList.remove('completed');
    }
});

// Add New Task (Dummy implementation)
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <input type="checkbox">
        <label>New Task</label>
    `;
    todoList.appendChild(newTask);
});

// Search Filter
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    const tasks = todoList.getElementsByTagName('li');

    Array.from(tasks).forEach(task => {
        const label = task.querySelector('label').textContent.toLowerCase();
        task.style.display = label.includes(searchValue) ? '' : 'none';
    });
});

// Filter Completed/Pending Tasks (Dummy implementation)
const filterSelect = document.getElementById('filter');
filterSelect.addEventListener('change', () => {
    const filterValue = filterSelect.value;
    const tasks = todoList.getElementsByTagName('li');

    Array.from(tasks).forEach(task => {
        const checkbox = task.querySelector('input[type="checkbox"]');
        if (filterValue === 'completed' && !checkbox.checked) {
            task.style.display = 'none';
        } else if (filterValue === 'pending' && checkbox.checked) {
            task.style.display = 'none';
        } else {
            task.style.display = '';
        }
    });
});
