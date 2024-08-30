document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todoInput');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');

 
    addButton.addEventListener('click', () => {
        const text = todoInput.value.trim();
        if (text === '') return;

        const todoItem = document.createElement('li');
        todoItem.classList.add('flex', 'items-center', 'justify-between', 'p-2',  'mb-2', 'rounded-lg', 'shadow', 'text-2xl', 'font-bold', 'text-white', 'p-4', 'outline-none', 'rounded-lg', 'bg-[#6B7280]');

        todoItem.innerHTML = `
            <span class="todo-text">${text}</span>
            <div>
                <button class="edit-button px-2 py-1  text-[#2E073F] text-white rounded-lg ">Edit</button>
                <button class="delete-button px-2 py-1 text-[#800000] text-white rounded-lg ml-2">DELETE</button>
            </div>
        `;

        todoList.appendChild(todoItem);
        todoInput.value = '';

      
        todoItem.querySelector('.edit-button').addEventListener('click', () => {
            const span = todoItem.querySelector('.todo-text');
            const currentText = span.textContent;
            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentText;
            input.classList.add('p-2', 'outline-none', 'bg-[#6B7280]');
            span.replaceWith(input);
            input.focus();

            input.addEventListener('blur', () => {
                span.textContent = input.value.trim();
                input.replaceWith(span);
            });
        });

     
        todoItem.querySelector('.delete-button').addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });
    });
});
