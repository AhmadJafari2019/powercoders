

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
    last: last,
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
// function ShoppingListItem(name, quantity) {
//   this.name = name;
//this.quantity = quantity;
//
// }

/**
 * Represent an item in the shopping list.
 */
class ShoppingListItem {
  /**
   * @param name {string} Name
   * @param quantity {string} Quantity
   */
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
  }

  toListItem() {
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
}




