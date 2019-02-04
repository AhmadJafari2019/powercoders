/**
 * Shopping list Model.
 *
 * The list is modelled as an array.
 */
class Model {
  /** @param controller {!Controller} App controller*/
  constructor(controller) {
    console.log('Model initialized');
    /** @private {!ShoppingListItem[]} Items in the list*/
    this.items_;

    /** @private {!View for this model.*/
    this.view_ = new View(this, controller);
  }
}
// controller and Model