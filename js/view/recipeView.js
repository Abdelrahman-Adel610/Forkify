// import { View } from "./view.js";
import fractional from "fractional";
class recipeView {
  #parent = document.querySelector(".main-item");
  #errorMSG = "Couldn't find the recipe please try again.";
  #MSG = "Start by searching for a recipe or an ingredient. Have fun!";
  renderSpinner() {
    this.#parent.innerHTML = `
    <div class="spinner w-100 d-flex justify-content-center  ">
                    <i class="bi bi-arrow-repeat mt-md-5 "></i>
    </div>
    `;
  }
  #generateRecipe(recipe) {
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

                                    <i class="bi bi-dash-circle"></i>

                                    <i class="bi bi-plus-circle"></i>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="bookmark">
                                <i class="bi bi-bookmark"></i>
                            </div>
                        </div>
                    </div>
                    <div class="ingredients py-4">
                        <h2 class="text-center">Recipe ingredients</h2>
                        <ul class="my-4">
                            
                            ${recipe.ingredients.reduce(
                              (curr, i) => (curr += this.#getIngrident(i)),
                              ""
                            )}
                        
                        </ul>
                    </div>
                    <div
                        class="howToCook text-center w-75 mx-auto d-flex flex-column align-items-center gap-3 justify-content-center mt-4">
                        <h2>How to cook it</h2>
                        <p>
                            This recipe was carefully designed and tested by <span class="fw-bolder"> Closet
                                Cooking.</span> Please check out directions at their website.
                        </p>
                        <a class="btn bg-main d-inline-block" href="${
                          recipe.url
                        }">Directions →</a>
                    </div>
                </div>`;
  }

  #getIngrident(item) {
    return `<li> <i class="bi bi-check2"></i>
          ${item.quantity ? new fractional.Fraction(item.quantity) : ""} ${
      item.unit
    } ${item.description} 
</li>`;
  }
  async renderRecipe(recipe) {
    const html = this.#generateRecipe(recipe);
    this.#parent.innerHTML = html;
  }
  eventHandler(handler) {
    window.addEventListener("hashchange", handler);
    window.addEventListener("load", handler);
  }
  renderError(message = this.#errorMSG) {
    this.#parent.innerHTML = `  <div class="message d-flex w-50 gap-3 mt-4 mx-auto ">
                    <i class="bi bi-exclamation-triangle text-danger"></i>
                    <p>
                       ${message}
                    </p>
                </div>`;
  }
  renderMSG(message = this.#MSG) {
    this.#parent.innerHTML = `  <div class="message d-flex w-50 gap-3 mt-4 mx-auto ">
   <i class="bi bi-emoji-smile"></i>
                    <p>
                       ${message}
                    </p>
                </div>`;
  }
}
export default new recipeView();
