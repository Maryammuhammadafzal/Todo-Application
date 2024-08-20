// document.getElementById('add-task-btn').addEventListener('click', function() {
//     const taskText = document.getElementById('new-task').value;
//     if (taskText === '') return; // Prevent adding empty tasks

//     const taskList = document.getElementById('task-list');
//     const listItem = document.createElement('li');
//     listItem.textContent = taskText;

//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.classList.add('delete-btn');
//     deleteBtn.addEventListener('click', function() {
//         taskList.removeChild(listItem);
//     });

//     listItem.appendChild(deleteBtn);
//     taskList.appendChild(listItem);

//     document.getElementById('new-task').value = ''; // Clear the input
// });



function showPrompt(){
    var modalDiv = document.getElementById('popup');
    modalDiv.className = "modal";
    modalDiv.removeAttribute("style")
}


document.getElementById("add-btn").addEventListener('click' , function(){
    var taskText = document.getElementById("task-input-text").value;
    if (taskText === "") return; //prevent adding empty tasks

    // Creating Checkbox button
    var listItemCheckbox = document.createElement('button');
    listItemCheckbox.classList.add('check-box');

    // Create text Element 'p' and adding text
    var text = document.createElement('p');
    text.textContent = taskText.value;

    //Get ul list id and create list items
    var taskList = document.getElementById("task-list");
    var listItem = document.createElement('li');

    //Adding checkbox and text in list item
    // listItem.textContent = listItemCheckbox;
    listItem.textContent = text;
  
    //Adding list item li into the task list
    taskList.appendChild(listItemCheckbox);
    taskList.appendChild(listItem);
    console.log(taskList);
    

    // taskList.innerHTML = listItem.innerHTML;
    // console.log(listItem);
    
    listItemCheckbox.addEventListener('click', function(){
        taskList.ariaChecked(listItem);
    })


    listItem.appendChild(listItemCheckbox);
    taskList.appendChild(listItem);


    document.getElementById('task-input-text').value = ''; // Clear the input

    var modalDiv = document.getElementById('popup');
    modalDiv.style.display = "none"

})