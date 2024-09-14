import "regenerator-runtime/runtime"; //polyfilling async
import "core-js/stable"; //polyfilling ES6+ features
import * as model from "./model";
import recipeView from "./view/recipeView";
if (module.hot) module.hot.accept();

async function getRecipe() {
  try {
    const id = location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    recipeView.renderRecipe(model.state.recipe);
  } catch (err) {
    console.error(err.message);
  }
}
function init() {
  window.addEventListener("hashchange", getRecipe);
  window.addEventListener("load", getRecipe);
}
init();
