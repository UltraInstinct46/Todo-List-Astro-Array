import { TodoListResource } from "../api/routes/resource";
import {api} from '../scripts/config';
const apiUrl = `https://crudcrud.com/api/${api}`;
const todoListResource = new TodoListResource(apiUrl);
const titleInput = document.getElementById('title');
const textInput = document.getElementById('text');
const saveButton = document.querySelectorAll('button.save');
const deleteButton = document.querySelectorAll('button.delete');
const updateButton = document.querySelectorAll('button.update');
const list = document.getElementById('card');
let id = "";
async function fetchTodoList() {
    const todoList = await todoListResource.getTodoList();
    console.log(todoList);
}

async function createTodoList() {
    const title = titleInput.value;
    const text = textInput.value;
    const createdTodoList = await todoListResource.createTodoList(title, text);
    console.log(createdTodoList);
}

async function updateTodoList(id) {
    const todoListId = id;
    const title = titleInput.value;
    const text = textInput.value;
    const updatedTodoList = await todoListResource.updateTodoList(todoListId, title, text);
    console.log(updatedTodoList);
}

async function deleteTodoList(id) {
    const todoListId = id;
    const isDeleted = await todoListResource.deleteTodoList(todoListId);
    console.log(isDeleted);
}


saveButton.forEach((button) => {
    button.addEventListener('click', () => {
        createTodoList();
    });
});

deleteButton.forEach((button) => {
    button.addEventListener('click', () => {
        deleteTodoList(id);
        alert("data with id : " + id + " Deleted successfully");
    });
});

updateButton.forEach((button) => {
    button.addEventListener('click', () => {
        updateTodoList(id);
        alert("data with id : " + id + " Updated successfully");
    });
});

list.addEventListener('click', function(event) {
    const clickedElement = event.target;
    const liElement = findParentLI(clickedElement);
  
    if (liElement) {
      const h2Element = liElement.querySelector('h2');
      const pElement = liElement.querySelector('p');
      const aElement = liElement.querySelector('h1');
      if (clickedElement.tagName === 'A' || clickedElement === h2Element || clickedElement === pElement) {
        id = aElement.innerText;
        titleInput.value = h2Element.innerText;
        textInput.value = pElement.innerText;
      }
    }
  });
  
  function findParentLI(element) {
    if (element.tagName === 'LI') {
      return element;
    } else if (element.parentElement) {
      return findParentLI(element.parentElement);
    }
  
    return null;
  }