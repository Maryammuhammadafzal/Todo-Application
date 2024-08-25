// Theme Toggle
var themeToggle = document.getElementById('theme-toggle');
var body = document.body;

function changeTheme(){
  body.classList.toggle('dark-theme')
   themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
}


// themeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-theme');
//     themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
//     console.log(themeToggle);
    
// });

// Task Checking
var todoList = document.getElementById('todo-list');

todoList.addEventListener('change', (event) => {
    var checkbox = event.target;
    var label = checkbox.nextElementSibling;

    if (checkbox.checked) {
        label.classList.add('completed');
    } else {
        label.classList.remove('completed');
    }
});

// Add New Task (Dummy implementation)
var addTaskButton = document.getElementById('add-task');

function addTask(){
    Swal.fire({
        title: "Add new Task",
        input: "text",
        inputAttributes: {
          autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Add",
        showLoaderOnConfirm: true,
        preConfirm: async (login) => {
          try {
            const githubUrl = `
              https://api.github.com/users/${login}
            `;
            const response = await fetch(githubUrl);
            if (!response.ok) {
              return Swal.showValidationMessage(`
                ${JSON.stringify(await response.json())}
              `);
            }
            return response.json();
          } catch (error) {
            Swal.showValidationMessage(`
              Request failed: ${error}
            `);
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          });
        }
      });
}

// addTaskButton.addEventListener('click', () => {
//     var newTask = document.createElement('li');
//     newTask.innerHTML = `
//         <input type="checkbox">
//         <label> </label>
//     `;
//     todoList.appendChild(newTask);
// });

// Search Filter
var searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
    var searchValue = searchInput.value.toLowerCase();
    var tasks = todoList.getElementsByTagName('li');

    Array.from(tasks).forEach(task => {
        var label = task.querySelector('label').textContent.toLowerCase();
        task.style.display = label.includes(searchValue) ? '' : 'none';
    });
});

// Filter Completed/Pending Tasks (Dummy implementation)
var filterSelect = document.getElementById('filter');
filterSelect.addEventListener('change', () => {
    var filterValue = filterSelect.value;
    var tasks = todoList.getElementsByTagName('li');

    Array.from(tasks).forEach(task => {
        var checkbox = task.querySelector('input[type="checkbox"]');
        if (filterValue === 'completed' && !checkbox.checked) {
            task.style.display = 'none';
        } else if (filterValue === 'pending' && checkbox.checked) {
            task.style.display = 'none';
        } else {
            task.style.display = '';
        }
    });
});
