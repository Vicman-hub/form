

document.addEventListener("DOMContentLoaded")
    , () => {
    const taskInput =
    document.getElementById("taskInput");
    const addTaskButton =
    document.getElementById("addTaskButton"
    );
    const taskList =
    document.getElementById("taskList");
    const errorMessage =
    document.getElementById("errorMessage");
    let tasks = [];
    addTaskButton.addEventListener("click")
    }
    , 
    () => {
    const taskValue =
    taskInput.value.trim();
    // Input validation
    if (taskValue ===
    "") {
    errorMessage.textContent =
    "Please enter a task!";
    return;
    } else {
    errorMessage.textContent =
    "";
    } 
    // Limit the number of tasks to 10
    if (tasks.length >= 10) {
    errorMessage.textContent =
     "" ;
    } 
    }