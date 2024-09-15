import { View } from "./view";
class SearchView extends View {
  constructor() {
    super(
      document.querySelector(".search"),
      "Couldn't find the recipe please try again.",
      "Start by searching for a recipe or an ingredient. Have fun!"
    );
  }
  getQuery() {
    return this._parent.value;
  }
  eventHandler(handler) {
    document
      .querySelector(".searchForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();
        handler();
      });
  }
}
export default new SearchView();
