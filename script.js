// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("task-list");

        // Create a new list item
        const li = document.createElement("li");
        li.innerHTML = taskText;

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        // Add the task and delete button to the list
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
}
