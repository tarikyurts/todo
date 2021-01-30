// SELECTORS
const todoInput = document.querySelector(".todo-input");
const toDoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const todoItem = document.querySelector('.todo-item');

// EVENT LISTENERS

toDoBtn.addEventListener("click", toDo);
todoList.addEventListener("click", checktrash);
// FUNCTIONS

function toDo(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const todoLi = document.createElement("li");
  todoLi.classList.add("todo-item");
  todoLi.innerText = todoInput.value;
  todoDiv.appendChild(todoLi);
  const check = document.createElement("button");
  check.innerHTML = `<i class="fas fa-check"></i>`;
  check.classList.add("check-btn");
  todoDiv.appendChild(check);
  const trash = document.createElement("button");
  trash.innerHTML = `<i class="fas fa-trash"></i>`;
  trash.classList.add("trash-btn");
  todoDiv.appendChild(trash);
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function checktrash(e) {
  const item = e.target;
  const todo = item.parentElement;

  console.log(item);
  if(item.classList[0] === "trash-btn") {
      todo.classList.add('fall');
    todoList.addEventListener('transitionend',function(){
      todo.remove()
    })
  }
  if(item.classList[0]=== 'check-btn'){
    todo.style = 'opacity:0.5;text-decoration:line-through;'
  }
}
