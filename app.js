window.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.querySelector('.container .add-item .add');
    const itemsList = document.querySelector('.container .items .items-list');
    
    function addItemToList() {
        let addInputElement = document.querySelector('.container .add-item input');
        let addInputText = addInputElement.value;
        let newListItem = document.createElement('div');
    
        if (addInputText === "") return;
    
        newListItem.classList.add('list-item');
        newListItem.innerHTML = `
                    <input type="checkbox">
                    <li class="item">${addInputText}</li>
                    <button class="delete">Delete Item</button>
        `;
        itemsList.append(newListItem);
        addInputElement.value = "";

        const deleteBtn = document.querySelectorAll('.container .items .items-list .delete');
        deleteBtn.forEach(btn => btn.addEventListener('click', deleteItem));

        const checkboxes = document.querySelectorAll('.container .items .items-list input');
        checkboxes.forEach(checkbox => checkbox.addEventListener('click', checkOffItem));
    }
    
    function deleteItem(e) {
        let selectedItem = e.target;
        selectedItem.parentElement.remove();
    }

    function checkOffItem(e) {
        let checkedBox = e.target;
        let checkedItem = e.target.parentElement;
        checkedBox.classList.toggle('checked');

        if (checkedBox.classList.contains('checked')) {
            checkedItem.style.textDecoration = "line-through";
            checkedBox.style.checked = "checked";
        } else {
            checkedItem.style.textDecoration = "none";
            checkedBox.style.checked = "false";
        }

        
    }

    addBtn.addEventListener('click', addItemToList);

});