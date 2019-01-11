document.addEventListener('DOMContentLoaded', function (event) {
    let inputBox = document.getElementById('item');
    let shoppingList = document.querySelector('ul');

    document.querySelector('button').addEventListener('click', function (event) {
        if (inputBox.value.trim()!==''){
            shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
            inputBox.value = '';
        }

       inputBox.focus();

    });

    inputBox.addEventListener('keyup', function(event) {
        if(inputBox.value.trim() !== '') {
             if (event.key === "Enter") {
                shoppingList.appendChild(createNewListItem(inputBox.value.trim()));
                inputBox.value = '';

            }
        }


    });

    inputBox.focus();

});


function createNewListItem(itemName) {
    let listItem = document.createElement('li');
    let listText = document.createElement('span');
    listItem.textContent = itemName;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function (event) {
        console.log('Delete is clicked');
        listItem.remove();
    });

    listItem.appendChild(listText);
    listItem.appendChild(deleteButton);
    return listItem;
}














