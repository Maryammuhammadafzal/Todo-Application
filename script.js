document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return; // Prevent adding empty tasks

    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    document.getElementById('new-task').value = ''; // Clear the input
});
