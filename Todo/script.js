function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    
    if (todoInput.value.trim() !== '') {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = () => {
            li.classList.toggle('completed');
        };
        const text = document.createTextNode(todoInput.value);
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => {
            todoList.removeChild(li);
        };
        
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        
        todoInput.value = '';
    }
}