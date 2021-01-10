const deleteBtn = document.querySelectorAll('.container .items .items-list .delete');
const checkbox = document.querySelectorAll('.container .items .items-list input');
const addBtn = document.querySelector('.container .add-item .add');
const itemsList = document.querySelector('.container .items .items-list');

function addItemToList() {
    let addInputElement = document.querySelector('.container .add-item input');
    let addInputText = addInputElement.value;
    let newListItem = document.createElement('div');
    newListItem.classList.add('list-item');
    newListItem.innerHTML = `
                <input type="checkbox">
                <li class="item">${addInputText}</li>
                <button class="delete">Delete Item</button>
    `;
    itemsList.append(newListItem);
    addInputElement.value = "";
}

addBtn.addEventListener('click', addItemToList);