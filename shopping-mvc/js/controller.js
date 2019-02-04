/**
 *  Controller for the shopping list application.
 */
class Controller {
  constructor() {
    console.log('Controller running!');
    /** @Private {!Model} Application Model */
    this.model_ = new Model(this);
  }

}

