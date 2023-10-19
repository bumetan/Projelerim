// UI VARIABLES

const taskList = document.querySelector("#task-list");
const form = document.querySelector("#addTaskForm");
const deleteAll = document.querySelector("#btnDeleteAll");
const input = document.querySelector("#txtTaskName");
let items;


eventListerner();
loadItems();

function eventListerner() {

    form.addEventListener('submit', addNewItem);
    deleteAll.addEventListener('click', deleteAllItem);
    taskList.addEventListener('click', deleteItem);

}

function loadItems() {

    items = getItemLS();
    items.forEach(element => {
        createItem(element);
    });
}

function addNewItem(e) {

    if (input.value === '') {
        confirm('Please enter value!!!');
    } else {
        createItem(input.value);
        setItemLS(input.value);
    }

    input.value = '';
    e.preventDefault();
}

function createItem(text) {

    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    const a = document.createElement('a');
    a.className = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li);

}

function getItemLS() {
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

function setItemLS(text) {

    items = getItemLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}

function deleteItem(e) {

    if (e.target.className == 'fas fa-times') {
        if (confirm('Are Your sure?')) {
            e.target.parentElement.parentElement.remove();
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }
}

function deleteItemFromLS(e) {

    items.forEach(function (item, index) {

        items = getItemLS();
        if (item === e) {
            items.splice(index, 1);
            localStorage.setItem('items', JSON.stringify(items));
        }
    });

}


function deleteAllItem() {

    items = getItemLS();
    items = [];
    localStorage.setItem('items', JSON.stringify(items));

    location.reload();

}