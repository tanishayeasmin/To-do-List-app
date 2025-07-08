const taskList = document.getElementById("taskList");

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
  
    const li = document.createElement("li");
    li.innerHTML = `<span class="emoji">🌸</span>${taskText} 
      <button class="delete-btn" onclick="deleteTask(this)">🗑</button>`;
    li.onclick = function () {
      li.classList.toggle("done");
      saveData();
    };
  
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
    saveData()
  }
  
  function deleteTask(button) {
    const li = button.parentElement;
    li.classList.add("fade-out");
    setTimeout(() => li.remove(), 400);
    saveData();
  } 
  function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
    
}
showTask();