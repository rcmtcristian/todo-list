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
 

render()

function addTodo() {
  const textbox = document.getElementById('todo-title');
  const title = textbox.value;

   const datePicker = document.getElementById('date-picker');
  const dueDate = datePicker.value;
 
const id  = new Date().getTime();

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id


  })
render();
 

  
}


function deleteTodo(e){
  
const deleteButton = e.target;
const idToDelete = deleteButton.id
}

function render(){
  document.getElementById('todo-list').innerHTML = "";

todos.forEach(function(todo){
  const element = document.createElement('div');
element.innerText = todo.title + ' ' + todo.dueDate;


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

// //getting user input//
// function addTodo() {
//   let textbox = document.getElementById('todo-title');
//   let title = textbox.value;
//   todos.push(title);
// }
 

//button//
/*
element = document.createElement('button');
element.innerText = todo4
document.body.appendChild(element);
*/

// //changing title*/
// document.title = 'todo list';


// //to add a number to the title//
// document.title = '(2)' + document.title;


