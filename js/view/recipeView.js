// import { View } from "./view.js";
import fractional from "fractional";
class recipeView {
  #parent = document.querySelector(".main-item");
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
  #setRecipeImgae(url, html) {
    const pic = this.#parent.querySelector("picture");

    pic.style.backgroundImage = `linear-gradient(to right bottom, #fbdb8978, #f48982),url(${url})`;
  }
  renderRecipe(recipe) {

    const html = this.#generateRecipe(recipe);
    this.#parent.innerHTML = html;
    this.#setRecipeImgae(recipe.image);
  }
  #getIngrident(item) {
    return `<li> <i class="bi bi-check2"></i>
            ${item.quantity ?new fractional.Fraction (item.quantity) : ""} ${item.unit} ${
      item.description
    } 
</li>`;
  }
}
export default new recipeView();
