$(document).ready(function () {
    const table = document.querySelector('.task-list tbody');
    const form = document.forms['addTask'];
    const inputTitle = form.elements['title'];
    const inputText = form.elements['body'];
    const inputPriority = form.elements['priority'];
    form.addEventListener('submit', OnFormSubmit);
    table.addEventListener('click', OnDelete);
    
    function OnFormSubmit(e) {
        e.preventDefault();
        const titleValue = inputTitle.value;
        const bodyValue = inputText.value;
        const priorityValue = inputPriority.value;

        if(!titleValue || !bodyValue || !priorityValue) {
            alert('Заполните все поля');
            return;
        }

        const tr = document.createElement('tr');
        const title = document.createElement('td');
        title.textContent = titleValue;

        const body = document.createElement('td');
        body.textContent = bodyValue;

        const priority = document.createElement('td');
        priority.textContent = priorityValue;

        const del = document.createElement('td');
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-danger', 'delete');
        button.textContent = "Видалити";
        del.appendChild(button);

        tr.appendChild(title);
        tr.appendChild(body);
        tr.appendChild(priority);
        tr.appendChild(del);

        table.insertAdjacentElement('afterBegin', tr);
        form.reset();
    }

    function OnDelete(e) {
        e.preventDefault();
        if(e.target.classList.contains('delete')) {
            e.target.parentNode.parentNode.remove();
        }
    }
});
