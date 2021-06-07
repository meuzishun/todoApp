const input = document.querySelector('#text-field');
const addItemBtn = document.querySelector('#submit-btn');
const clearListBtn = document.querySelector('#clear-btn');
const list = document.querySelector('#item-list');

function getInput() {
    let value = input.value;
    input.focus();
    input.value = '';
    return value;
}

function createMarkup(value) {
    let listElem = document.createElement('li');
    // let label = document.createElement('span');
    let label = document.createElement('p');
    let removeBtn = document.createElement('button');

    label.innerHTML = value;
    removeBtn.innerHTML = 'Remove';
    removeBtn.addEventListener('click', removeItem);

    listElem.appendChild(label);
    listElem.appendChild(removeBtn);
    list.appendChild(listElem);
}

function removeItem(evt) {
    evt.target.parentElement.remove();
}

function clearList() {
    Array.from(list.children).forEach(item => {
        item.remove();
    });
}

addItemBtn.addEventListener('click', function() {
    createMarkup(getInput());
});

clearListBtn.addEventListener('click', clearList);