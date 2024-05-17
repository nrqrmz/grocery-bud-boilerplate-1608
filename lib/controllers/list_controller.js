import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['item', 'listItem']

  addItem(event) {
    event.preventDefault(); // event in this line refers to submit
    const listItem = `<li class="list-group-item">
      <div class="d-flex justify-content-between">
        ${this.itemTarget.value}
        <button data-action="click->list#deleteItem" type='button' class="btn btn-danger text-white">X</button>
      </div>
    </li>`;
    this.listItemTarget.insertAdjacentHTML('beforeend', listItem)
    this.itemTarget.value = ''
  }

  deleteItem(event) {
    event.target.parentElement.parentElement.remove()
  }
}
