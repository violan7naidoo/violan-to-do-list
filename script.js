const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const removeBtn = document.getElementById("removeBtn");

// add item to list
function addItem() {
  const task = taskInput.value.trim();

  if (task) {
    const listItem = document.createElement("div");
    const taskText = document.createElement("span");
    const deleteBtn = document.createElement("button");

    taskText.innerText = task;
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", removeItem);
    listItem.classList.add("task");
    listItem.appendChild(taskText);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    taskInput.value = "";
  }
}

// remove item from list
function removeItem() {
  const listItem = this.parentNode;
  taskList.removeChild(listItem);
}

// remove all completed items from list
function removeCompletedItems() {
  const completedItems = document.getElementsByClassName("completed");
  const completedItemsArr = [...completedItems];

  completedItemsArr.forEach((item) => {
    taskList.removeChild(item);
  });
}

// mark item as completed
function completeItem() {
  const listItem = this.parentNode;
  listItem.classList.toggle("completed");
}

// add item to list when add button is clicked
addBtn.addEventListener("click", addItem);

// add item to list when enter key is pressed
taskInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});

// remove all completed items from list when remove button is clicked
removeBtn.addEventListener("click", removeCompletedItems);

// mark item as completed when clicked
taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "SPAN") {
    event.target.parentNode.classList.toggle("completed");
  }
  if (event.target.tagName === "BUTTON") {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  }
});
