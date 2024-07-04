document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
  
    // Function to add a task
    function addTask() {
      const taskText = inputBox.value.trim();
      if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.className = "d-flex justify-content-between align-items-center p-2";
  
        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;
  
        const removeButton = document.createElement("button");
        removeButton.className = "btn btn-danger btn-sm";
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
          listContainer.removeChild(listItem);
        };

        // const editButton =document.createElement("button");
        // editButton.className = "btn btn-secondary btn-sm";
        // editButton.textContent = "Edit";
        // editButton.onclick = function(){

        // }
  
        listItem.appendChild(taskContent);
        listItem.appendChild(removeButton);
        listContainer.appendChild(listItem);
  
        // Clear the input box
        inputBox.value = "";
      }
    }
  
    // Make the addTask function globally accessible
    window.addTask = addTask;
  });
  