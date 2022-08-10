

// function change() {
//     let newDiv = document.createElement("div");

//     let checkButton = document.createElement("button");
//     let checkText = document.createTextNode("Check");

//     let deleteButton = document.createElement("button");
//     let deleteText = document.createTextNode("Delete");

//     let emptyPara = document.createElement("p");

//     checkButton.appendChild(checkText);
//     newDiv.appendChild(checkButton);

//     deleteButton.appendChild(deleteText);
//     newDiv.appendChild(deleteButton);

//     document.body.appendChild(newDiv);
// document.body.appendChild(emptyPara);
//   newDiv.setAttribute("border", "2")
//   newDiv.style.backgroundColor = "red";
// }

// function set_color() {
//     let backgroundPara = document.createElement("p");
//     let colorText = document.createTextNode("this is a paragragh with blue color");

//     backgroundPara.appendChild(colorText);
//     document.body.appendChild(backgroundPara);

//     let paragraghs = document.getElementsByTagName("p");
//     let secondParagraph = paragraghs[1];
//     secondParagraph.style.color = "blue" 

// for (i = 0; i < backgroundPara.length; i++) {
//     let paragraghs = document.getElementsByTagName("p");
//     let secondParagraph = paragraghs[i];
//     secondParagraph.style.color = "red"
// }
    
// }

// function insert_before() {
//   let insertedPara = document.createElement("p");
//   let insertedParaText = document.createTextNode("this is an inserted paragragh");

//   insertedPara.appendChild(insertedParaText);
//   insertedPara.insertBefore(backgroundPara);
//   document.body.appendChild(insertedPara);
//   insertedPara.removeChild(insertedParaText);
// }

const formInput= document.getElementById('form-input');
const submitBtn= document.getElementById('submit-button');
const deleteBtn= document.getElementById('delete');

let todosContainer = document.getElementById('todo-items-container');

submitBtn.addEventListener('click', addTodo);

let Todos = []

function addTodo(e){
  e.preventDefault()
  let todoValue = formInput.value;
  Todos.push(todoValue);
  formInput.value = '';
  renderTodo();
}

deleteBtn.addEventListener('click', deleteTodo)

function deleteTodo(param) {
  console.log(param);

  let remove = Todos.filter((todo) => todo !== todo )
  console.log(remove);
  // Todos.push(remove)
  // renderTodo()
}

function renderTodo() {
  todosContainer.innerHTML = ''
 Todos.forEach((todo, index) => {
  todosContainer.innerHTML += `<div class="todo-item" id="${index}">
  <p>${todo}</p>
  <button class="delete-btn" onclick="deleteTodo(${index})">delete</button>
  </div>`
// console.log(Todos);
})}

