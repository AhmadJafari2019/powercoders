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


const nik = new Person('Nik', 'Clayton', ['Teaching', 'Skiing']);
const mhd = new Person('mhd', 'alsy',['swimming','cycling']);
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