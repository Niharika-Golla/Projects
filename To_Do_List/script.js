function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.onclick = function () {
            li.classList.toggle('completed');
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}
