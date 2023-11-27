/** @format */

// Select all element here
let inputTodo = document.querySelector('#inputTodo');
let todoButton = document.querySelector('#todoButton');
let todoForm = document.querySelector('#todoForm');
let todoLists = document.querySelector('#todoLists');
let todoList = document.querySelector('li');
let message = document.querySelector('p');

// todo make here by classes

class makeTodo {
	constructor(todoId, todoValue) {
		this.todoId = todoId;
		this.todoValue = todoValue;
	}
}

const deleteTodo = (id) => {
	id.style.display = none;
};

const createTodo = (newtodos) => {
	const todoElement = document.createElement('li');
	todoElement.id = newtodos.todoId;
	todoElement.innerHTML = `<span>${newtodos.todoValue}</span> <span><button id="deleteBtn" ><i class="fa-solid fa-trash"></i></button></span>`;
	todoLists.appendChild(todoElement);

	let deltodo = todoElement.querySelector('#deleteBtn');
	deltodo.addEventListener('click', (event) => {
		let deltag = event.target.parentElement.parentElement.parentElement;
		todoLists.removeChild(deltag);
		messagefn('Todo is Deleted.', 'message1');
		let todos = getTodosFromLocalStorage();
		todos = todos.filter((todo) => todo.todoId !== deltag.id);
		localStorage.setItem('mytodos', JSON.stringify(todos));
	});
};

let messagefn = (sms, id) => {
	message.innerHTML = sms;
	message.id = id;
	setTimeout(() => {
		message.innerHTML = '';
		message.id = '';
	}, 1000);
};

// getT odos From LocalStorage
const getTodosFromLocalStorage = () => {
	return localStorage.getItem('mytodos')
		? JSON.parse(localStorage.getItem('mytodos'))
		: [];
};

// add Todo
const addTodo = (event) => {
	event.preventDefault();
	if (inputTodo.value === '') {
		messagefn('You must enter a todo.', 'message1');
	} else {
		let todovalue = inputTodo.value;
		// Generate unique id
		const id = Date.now().toString();
        let newtodos = new makeTodo(id,todovalue)
		createTodo(newtodos);
		messagefn('Todo is Created', 'message');

        // adding toto in localStoeage
		const todos = getTodosFromLocalStorage();
		todos.push(newtodos);
		localStorage.setItem('mytodos', JSON.stringify(todos));

		inputTodo.value = '';
	}
};

const loadtodo = () => {
	let todos = getTodosFromLocalStorage();
	todos.map((todo) => createTodo(todo));
};

// listener here
todoForm.addEventListener('submit', addTodo);
window.addEventListener('DOMContentLoaded', loadtodo);
