import { View } from "./view.js";
class RecipeView extends View {
  constructor() {
    super(
      document.querySelector(".main-item"),
      "Couldn't find the recipe please try again.",
      "Start by searching for a recipe or an ingredient. Have fun!"
    );
  }

  _generateHTML(recipe) {
    return `<div class="recipe  w-100 h-100 ">
                    <picture>
                    <img src='${recipe.image}'>
                    </picture>
                    <header>
                        <h2 class=" start-50 position-absolute bg-main text-white px-2 py-2">${
                          recipe.title
                        }</h2>
                    </header>
                    <div class="info d-flex justify-content-between mt-5 w-80 mx-auto py-4">

                        <div class="left d-flex gap-5">
                            <div class=" time d-flex gap-3 ">
                                <i class=" bi bi-stopwatch"></i>
                                <p>
                                    <span class="fw-bolder"> ${
                                      recipe.cookingTime
                                    } </span> minutes
                                </p>
                            </div>
                            <div class="servs d-flex gap-3 ">
                                <i class="bi bi-people"></i>
                                <p> <span class="fw-bolder"> ${
                                  recipe.servings
                                } </span> servings</p>
                                <div class="plusMinus">
                                    <i class="bi bi-dash-circle" data-next='${
                                      recipe.servings - 1
                                    }'></i>

                                    <i class="bi bi-plus-circle" data-next='${
                                      recipe.servings + 1
                                    }'></i>
                                </div>
                            </div>
                        </div>
                        <div class="right d-flex align-items-center gap-3">
                            <div class="person">
                            ${
                              recipe.key
                                ? `<i class="bi bi-person-fill"></i>`
                                : ""
                            }
                            </div>
                            <div class="bookmark">
                                <i class="bi bi-bookmark${
                                  recipe.bookmarked ? "-fill" : ""
                                }"></i>
                            </div>
                        
                        </div>
                    </div>
                    <div class="ingredients py-4">
                        <h2 class="text-center">Recipe ingredients</h2>
                        <ul class="my-4">
                            
                            ${recipe.ingredients.reduce(
                              (curr, i) => (curr += this._getIngrident(i)),
                              ""
                            )}
                        
                        </ul>
                    </div>
                    <div
                        class="howToCook text-center w-75 mx-auto d-flex flex-column align-items-center gap-3 justify-content-center my-4">
                        <h2>How to cook it</h2>
                        <p>
                            This recipe was carefully designed and tested by <span class="fw-bolder"> Closet
                                Cooking.</span> Please check out directions at their website.
                        </p>
                        <a class="btn bg-main d-inline-block" target="_blank" href="${
                          recipe.url
                        }">Directions →</a>
                    </div>
                </div>`;
  }

  _getIngrident(item) {
    return `<li> <i class="bi bi-check2"></i>
          ${item.quantity ? item.quantity : ""} ${item.unit} ${
      item.description
    } 
</li>`;
  }
  async renderRecipe(recipe) {
    const html = this._generateHTML(recipe);
    this._parent.innerHTML = html;
  }
  eventHandler(handler) {
    window.addEventListener("hashchange", handler);
    window.addEventListener("load", handler);
  }
  servingsClickHandler(handler) {
    this._parent.addEventListener("click", function (e) {
      const element = e.target.closest("i[data-next]");
      if (!element) return;
      const { next } = element.dataset;
      if (next <= 0) return;
      handler(+next);
    });
  }
  bookmarkClickHandler(handler) {
    this._parent.addEventListener("click", function (e) {
      if (
        e.target.closest(".bi-bookmark") ||
        e.target.closest(".bi-bookmark-fill")
      ) {
        handler();
      }
    });
  }
}
export default new RecipeView();
