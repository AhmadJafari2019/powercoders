function domContentLoaded() {
  /** Widget that the User types an item in to */
  const inputBox = document.getElementById('item');
  inputBox.focus();
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
      //alert('koshad in khalie');
      return;
    }

    const item = new ShoppingListItem(trimmedValue, quantityBox.value.trim());

    shoppingList.appendChild(item.toListItem());
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

    const item = new ShoppingListItem(trimmedValue, quantityBox.value.trim());

    shoppingList.appendChild(item.toListItem() );
    inputBox.value = '';
    quantityBox.value = '';
    addItemButton.disabled = true;
    clearButton.disabled = false;
  });
  inputBox.focus();

  quantityBox.addEventListener('keyup', function (event) {
    const trimmedValue = inputBox.value.trim();
    addItemButton.disabled = inputBox.value.trim() === '';

    if (trimmedValue === '') {
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }

    const item = new ShoppingListItem(trimmedValue, quantityBox.value.trim());

    shoppingList.appendChild(item.toListItem() );
    inputBox.value = '';
    quantityBox.value = '';
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
 * @return {HTMLElement} li element
 */



function elseTest(num) {
  if (num < 10) {
    console.log('less than 10');
  } else if (num > 10) {
    console.log('bigger than 10');
  }
}

function Person(first, last, interests) {
  this.name = {
    first: first,
    last: last
  };
  this.interests = interests;
  this.greet = function () {
    console.log(`Hello ${this.name.first}`);
  };
}

/**
 * Represent an item in the Shopping list.
 * @param name {string} Name of the item.
 * @param quantity {string} Quantity of the item.
 * @constructor
 */
function ShoppingListItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;

}

ShoppingListItem.prototype.toListItem = function () {

    const listItem = document.createElement('li');

    const listText = document.createElement('span');
    listText.textContent = this.name;

    const deleteButton = document.createElement('i');
    listItem.appendChild(deleteButton).className = 'fa fa-trash';

    deleteButton.addEventListener('click', function (event) {
      console.log('Delete is clicked');
      listItem.remove();
      const inputBox = document.getElementById('item');
      inputBox.focus();
    });

    listItem.appendChild(listText);

    if (this.quantity !== '') {
      listItem.appendChild(document.createTextNode(' '));
      const span = document.createElement('span');
      span.textContent = `(${this.quantity})`;   // '(' + quantity + ')'
      listItem.appendChild(span);
    }

    listItem.appendChild(deleteButton);
    return listItem;

}
