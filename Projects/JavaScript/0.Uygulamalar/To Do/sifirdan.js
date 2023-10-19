// User Interface Values

// inputa girilen veriyi al localstorage işle ve yeni elemanı task listin aşağısına ekle

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const taskList = document.querySelector("#task-list");

let items;

eventListeners();

loadItems();

function eventListeners() {
  form.addEventListener("submit", addItem);
  taskList.addEventListener("click", deleteItem);
}

function loadItems() {
  items = getItemLS();
  items.forEach((e) => {
    createItem(e);
  });
}

function addItem(e) {
  createItem(input.value);
  setItemLS(input.value);

  input.value = "";

  e.preventDefault();
}

function createItem(text) {
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(text));
  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';
  li.appendChild(a);
  taskList.appendChild(li);
}

function getItemLS() {
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  return items;
}

function setItemLS(text) {
  items = getItemLS();
  items.push(text);
  localStorage.setItem("items", JSON.stringify(items));
}

function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();
      deleteItemFromLS(e.target.parentElement.parentElement.textContent);
    }
  }

  e.preventDefault();
}

function deleteItemFromLS(text) {
  items = getItemLS();

  items.forEach(function (item, index) {
    if (item === text) {
      items.splice(index, 1);
    }
  });
  localStorage.setItem("items", JSON.stringify(items));
}
// User Interface Values

// inputa girilen veriyi al localstorage işle ve yeni elemanı task listin aşağısına ekle
