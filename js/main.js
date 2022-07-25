/* todo list*/


let todos = [{
  title: 'get dog',
  dueDate: '2022-10-6',
  id: 'id1'
}, {
  title:'go outside',
  dueDate:'2022-11-5',
  id: 'id2'
}, {
  title:'touch grass',
  dueDate:"2023-1-02",
  id: 'id3'
}];
 


function createTodo(title, dueDate,){
 /* Creating a new todo item and pushing it into the todos array. */
const id  =  '' + new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id
  }) 
}

render()

/* Getting the value of the textbox and assigning it to the title. */
function addTodo() {
  const textbox = document.getElementById('todo-title');
  const title = textbox.value;
 
   /* Getting the value of the date picker and assigning it to the due date. */
   const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;
 

createTodo(title,dueDate)

render();
 
}

function removeTodo(idToDelete){

todos = todos.filter( function (todo){
if(todo.id === idToDelete){
  return false;
}else{
    return true
  }
  })
}

function deleteTodo(e){
  
const deleteButton = e.target;
const idToDelete = deleteButton.id

removeTodo(idToDelete)

render()
}

// checkbox
function checkTodo(event) {
  const checkbox = event.target;

  const todoId = checkbox.dataset.todoId;
  const checked = checkbox.checked;

  toggleTodo(todoId, checked);
  render();
}


//shows
/* Clearing the todo list */
function render(){
  document.getElementById('todo-list').innerHTML = "";

/* Creating a div element and adding the text of the todo title and due date to it. */
todos.forEach(function(todo){
  const element = document.createElement('div');
element.innerText = todo.title + ' ' + todo.dueDate;

//checkbox
const checkbox = document.createElement('input');


/* The above code is creating a checkbox element and adding it to the DOM. */
checkbox.type = 'checkbox';
  checkbox.onchange = checkTodo;
  checkbox.dataset.todoId = todo.id;
  if (todo.isDone === true) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
  element.prepend(checkbox);


/* Creating a new element, adding the todo text to it, and then appending it to the todo list. */
const deleteButton = document.createElement('button')
deleteButton.innerText = 'Delete'
deleteButton.style = 'margin-left: 1rem'
deleteButton.onclick = deleteTodo;
deleteButton.id = todo.id;
element.appendChild(deleteButton)

const todoList = document.getElementById('todo-list')
todoList.appendChild(element);

});
}


