import { View } from "./view";
class ResultsView extends View {
  constructor() {
    super(
      document.querySelector(".list>div"),
      "Couldn't find the recipe please try again.",
      "Start by searching for a recipe or an ingredient. Have fun!"
    );
  }
  renderResults(data) {
    this._parent.innerHTML = this._getElements(data);
  }
  _getElements(data) {
    return data
      .map(
        (el) =>
          `
             <div class="item">
                      <a href="#${el.id}">
                          <img src="${el.imageUrl}" alt="${el.title}">
                          <h2>${el.title}
                          </h2>
                          <p>${el.publisher}</p>
                      </a>
                  </div>
                `
      )
      .join(" ");
  }
}
export default new ResultsView();
