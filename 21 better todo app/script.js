let listsContainer = document.querySelector("[data-lists]");
let newListForm = document.querySelector("[data-new-list-form]");
let newListInput = document.querySelector("[data-new-list-input]");
let deleteListButton = document.querySelector("[data-delete-list-button]");
let listDisplayContainer = document.querySelector(
  "[data-list-display-container]"
);
let listTitleElement = document.querySelector("[data-list-title]");
let listCountElement = document.querySelector("[data-list-count]");
let tasksContainer = document.querySelector("[data-tasks]");
let taskTemplate = document.querySelector("#task-template");
let newTaskForm = document.querySelector("[data-new-task-form]");
let newTaskInput = document.querySelector("[data-new-task-input]");
let clearCompleteTaskButton = document.querySelector("[data-clear-complete-task-button]");

const LOCAL_STORAGE_LIST_KEY = "task.lists";
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

listsContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
});


tasksContainer.addEventListener('click', e=>{

    if(e.target.tagName.toLowerCase() === 'input'){
        const selectedList = lists.find(list=> list.id === selectedListId);
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id);
        selectedTask.complete = e.target.checked;
        save();
        renderTaskCount(selectedList);
    }
});


clearCompleteTaskButton.addEventListener('click', e=>{

    const selectedList = lists.find(list=> list.id === selectedListId);
    selectedList.tasks = selectedList.tasks.filter(task=>!task.complete);
    saveAndRender();


});



deleteListButton.addEventListener("click", (e) => {
  lists = lists.filter((list) => list.id !== selectedListId);
  selectedListId = null;
  saveAndRender();
});

newListForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const listname = newListInput.value;
  if (listname == null || listname === "") return;
  const list = createList(listname);
  newListInput.value = null;
  lists.push(list);
  saveAndRender();
});


newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskname = newTaskInput.value;
  if (taskname == null || taskname === "") return;
  const task = createTask(taskname);
  newTaskInput.value = null;
  const selectedList = lists.find(list => list.id === selectedListId)
  selectedList.tasks.push(task);
  saveAndRender();
});

function createTask(name){
    return { id: Date.now().toString(), name: name, complete: false };
}


function createList(name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
}

function saveAndRender() {
  save();
  render();
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

function render() {
  clearElement(listsContainer);

  renderLists();

  renderListItems();
}

function renderListItems() {
  const selectedList = lists.find((list) => list.id === selectedListId);

  if (selectedListId == null) {
    listDisplayContainer.style.display = "none";
  } else {
    listDisplayContainer.style.display = "";
    listTitleElement.innerText = selectedList.name;
    renderTaskCount(selectedList);
    clearElement(tasksContainer);
    renderTasks(selectedList);
  }
}

function renderTasks(selectedList){
    selectedList.tasks.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true);

        const checkbox = taskElement.querySelector('input');
        checkbox.id = task.id;
        checkbox.checked = task.complete;
        const label = taskElement.querySelector('label');
        label.htmlFor = task.id;
        label.append(task.name);
        tasksContainer.appendChild(taskElement);

    });
}

function renderTaskCount(selectedList) {
  const incompleteTaskCount = selectedList.tasks.filter(
    (task) => !task.complete
  ).length;
  const taskString =
    incompleteTaskCount === 1 || incompleteTaskCount === 0 ? "task" : "tasks";
  listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
}

function renderLists() {
  lists.forEach((list) => {
    let listElement = document.createElement("li");
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerText = list.name;

    if (list.id === selectedListId) {
      listElement.classList.add("active-list");
    }

    listsContainer.appendChild(listElement);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

render();
