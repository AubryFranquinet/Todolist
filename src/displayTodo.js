export function displayTodo() {
    let list = document.createElement('section')
    list.setAttribute('class', 'todolist')
    let main = document.querySelector('main')
    list.id = 'list';

    main.appendChild(list);
}