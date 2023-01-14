const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')


const generateTemplate = todo => {

    const html = `
    <li class="list-group-item text-light d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;

}

// delete todos
list.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }

})

// add todos
addForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const todo = addForm.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();  // resets all input fields inside form.
    }

    

});

// filter todos
const filterTodos = (term) => {

    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));
        
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));
    

};

// keyup event
search.addEventListener('keyup', e => {

    const term = search.value.toLowerCase();
    filterTodos(term);

});

