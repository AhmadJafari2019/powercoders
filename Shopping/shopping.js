function domContentLoaded() {
  /** Widget that the User types an item in to */
  const inputBox = document.getElementById('item');
  const quantityBox = document.getElementById('quantity');
  const shoppingList = document.querySelector('ul');
  const addItemButton = document.querySelector('button');
  const clearButton = document.getElementById('clear');


  clearButton.addEventListener('click', function (event) {
    const listItem = document.querySelectorAll('li');

    if (listItem.length === 0) {
      clearButton.disabled = true;
    } else {
      clearButton.disabled === false;
    }
    listItem.forEach(function (el) {
      el.remove();
    });
    clearButton.disabled = true;
    inputBox.focus();
  });

  // lis[0]
  // lis[1]
  // lis[3]


  addItemButton.addEventListener('click', function (event) {
    const trimmedValue = inputBox.value.trim();

    if (trimmedValue === '') {
      alert('koshad in khalie');
      return;
    }
    shoppingList.appendChild(createNewListItem(trimmedValue, quantityBox.value.trim()));
    inputBox.value = '';
    quantityBox.value = '';
    addItemButton.disabled = true;
    clearButton.disabled = false;
    inputBox.focus();
  });


  inputBox.addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    addItemButton.disabled = inputBox.value.trim() === '';

    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }
    shoppingList.appendChild(createNewListItem(trimmedValue, quantityBox.value.trim()));
    inputBox.value = '';
    addItemButton.disabled = true;
    clearButton.disabled = false;
  });

  inputBox.focus();

}

if (document.readyState === 'loading') {
  //DOMContentLoaded has not fired yet.
  document.addEventListener('DOMContentLoaded', function () {
    domContentLoaded();
  });
} else {
  //DOMContentLoaded has fired.
  domContentLoaded();
}


/**
 * Create and return an 'li' element for inculusion in the shopping list.
 *
 * @param {string} itemName Name of the item to add to the list
 * @param {string} quantity
 * @return {HTMLElement} li element
 */
function createNewListItem(itemName, quantity) {
  const listItem = document.createElement('li');

  const listText = document.createElement('span');
  listText.textContent = itemName;


  const deleteButton = document.createElement('i');
  listItem.appendChild(deleteButton).className = 'fa fa-trash';

  deleteButton.addEventListener('click', function (event) {
    console.log('Delete is clicked');
    listItem.remove();
    const inputBox = document.getElementById('item');
    inputBox.focus();
  });

  listItem.appendChild(listText);

  if (quantity !== '') {
    listItem.appendChild(document.createTextNode(' '));
    const span = document.createElement('span');
    span.textContent = `(${quantity})`;   // '(' + quantity + ')'
    listItem.appendChild(span);
  }

  listItem.appendChild(deleteButton);
  return listItem;
}


function elseTest(num) {
  if (num < 10) {
    console.log('less than 10');
  } else if (num > 10) {
    console.log('bigger than 10');
  }
}

