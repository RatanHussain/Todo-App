// Select all element here
let inputTodo = document.querySelector('#inputTodo');
let todoButton = document.querySelector('#todoButton');
let todoForm = document.querySelector('#todoForm');
let todoLists = document.querySelector('#todoLists');
let todoList = document.querySelector('li');
let message = document.querySelector('p');



const deleteTodo = (id)=>{
    id.style.display = none;
}

const createTodo = (todoId , todoValue)=>{
    const todoElement = document.createElement('li');
    todoElement.id = todoId;
    todoElement.innerHTML = `<span>${todoValue}</span> <span><button id="deleteBtn" ><i class="fa-solid fa-trash"></i></button></span>`
    todoLists.appendChild(todoElement);

    let deltodo = todoElement.querySelector('#deleteBtn');
    deltodo.addEventListener('click',(event)=>{
        let deltag = event.target.parentElement.parentElement.parentElement
        todoLists.removeChild(deltag)
        messagefn('Todo is Deleted.', 'message1')
    })
}

let messagefn = (sms , id)=>{
    message.innerHTML = sms;
    message.id = id
    setTimeout(() => {
        message.innerHTML = ''
        message.id = ''
    }, 1000);
}


// add Todo
const addTodo = (event)=>{
    event.preventDefault();
    // Generate unique id
    const id = Date.now().toString();
    createTodo(id , inputTodo.value)
    messagefn('Todo is Created','message')
}

// listener here
todoForm.addEventListener('submit',addTodo)