document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const inputField = document.getElementById("new-task-description");
  if (inputField) {
      inputField.addEventListener("input", function(event) {
          const typedText = event.target.value;
          console.log("Typed text:", typedText);
      });
  } else {
      console.error("Input field not found.");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(event) {
      event.preventDefault(); 
      const taskDescription = document.getElementById("new-task-description").value; 
      console.log("Task description:", taskDescription);
      document.getElementById("new-task-description").value = "";
      return false;
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
      event.preventDefault();     
      const taskDescription = document.getElementById("new-task-description").value;
      const newTaskItem = document.createElement("li");
      newTaskItem.textContent = taskDescription;
      taskList.appendChild(newTaskItem);
      document.getElementById("new-task-description").value = "";
      return false;
  });
});
