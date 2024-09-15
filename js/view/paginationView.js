import { View } from "./view.js";
class PaginationView extends View {
  constructor() {
    super(
      document.querySelector(".page-ctrl"),
      "Couldn't find the recipe please try again.",
      "Start by searching for a recipe or an ingredient. Have fun!"
    );
  }
  renderPagination(currentPage, options = { left, right }) {
    this._clear();
    // console.log(options, currentPage);

    if (options.left) {
      const left = `<button data-page='${
        currentPage - 1
      }' class="me-auto">← page ${currentPage - 1}</button>`;
      this._parent.insertAdjacentHTML("beforeend", left);
    }
    if (options.right) {
      const right = `<button data-page='${
        currentPage + 1
      }' class="ms-auto">page ${currentPage + 1}→</button>`;
      this._parent.insertAdjacentHTML("beforeend", right);
    }
  }
  _clear() {
    this._parent.innerHTML = "";
  }
  eventHandler(handler) {}
}
export default new PaginationView();
