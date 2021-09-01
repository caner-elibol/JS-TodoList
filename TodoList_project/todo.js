//classları idleri tanıtma

const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardbody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListener();

//eventlistenerlar
function eventListener() {
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
  secondCardBody.addEventListener("click", deleteTodo);
  filter.addEventListener("keyup", filterTodos);
  clearButton.addEventListener("click", clearAllTodos);
}
function clearAllTodos(e) {
  if (confirm("Tümünü silmek istediğinize emin misiniz?")) {
    while (todoList.firstElementChild = !null) {
      todoList.removeChild(todoList.firstElementChild);
    }
    localStorage.removeItem("todos");
  }
}
function filterTodos(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      listItem.setAttribute("style", "display:none !important");
    } else {
      listItem.setAttribute("style", "display:block");
    }
  });
}
//Todo silme
function deleteTodo(e) {
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
    deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    showAlert("success", "Başarıyla Silindi.");
  }
}
//Todo silme(storage)
function deleteTodoFromStorage(deletetodo) {
  let todos = getTodosFromStorage();

  todos.forEach(function (todo, index) {
    if (todo === deletetodo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
//Tüm Todoları alma
function loadAllTodosToUI() {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo) {
    addTodoUI(todo);
  });
}
//Todo Ekleme
function addTodo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    showAlert("danger", "Lütfen bir Todo giriniz");
  } else {
    addTodoUI(newTodo);
    addTodoToStorage(newTodo);
    showAlert("success", "Ekleme tamamlandı");
  }
  e.preventDefault();
}
//Local Storage todo seçme
function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}
//Local Storage Ekleme yapma
function addTodoToStorage(newTodo) {
  let todos = getTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
//Alert Fonksiyonu
function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  firstCardbody.appendChild(alert);
  //Alert zaman ayarı
  window.setTimeout(function () {
    alert.remove();
  }, 2000);
}

function addTodoUI(newTodo) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  //link oluşturma
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class = 'fa fa-remove'></i>";
  //listItem oluşturma(TextNode)
  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);

  //Todo List'e listItem Ekleme
  todoList.appendChild(listItem);
  //Form elemanını temizleme
  todoInput.value = "";
}
