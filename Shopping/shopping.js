document.addEventListener('DOMContentLoaded', function (event) {
    const inputBox = document.getElementById('item');
    const shoppingList = document.querySelector('ul');
    const addItemButton = document.querySelector('button');

    document.querySelector('button').addEventListener('click', function (event) {
        if (inputBox.value.trim()!==''){
            shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
            inputBox.value = '';
            addItemButton.disabled = true;
            }

       inputBox.focus();

    });

    inputBox.addEventListener('keyup', function(event) {
        if(inputBox.value.trim() !== '') {
            addItemButton.disabled = false;
             if (event.key === "Enter") {
                shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
                inputBox.value = '';

            }
        }

        if(inputBox.value.trim() === '') {
            addItemButton.disabled = true;
        }
    });

    inputBox.focus();
});



function createNewListItem(itemName) {
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    listItem.textContent = itemName;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function (event) {
        console.log('Delete is clicked');
        listItem.remove();
    });

    listItem.appendChild(listText);
    listItem.appendChild(deleteButton);
    return listItem;
}














