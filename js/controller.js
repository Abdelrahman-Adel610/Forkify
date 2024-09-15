import "regenerator-runtime/runtime"; //polyfilling async
import "core-js/stable"; //polyfilling ES6+ features
import * as model from "./model";
import recipeView from "./view/recipeView";
import searchView from "./view/searchView";
import resultsView from "./view/resultsView";
if (module.hot) module.hot.accept();

async function getRecipe() {
  try {
    const id = location.hash.slice(1);
    if (!id) {
      recipeView.renderMSG();
      return;
    }
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    recipeView.renderRecipe(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
}
async function searchFor() {
  try {
    const query = searchView.getQuery();
    resultsView.renderSpinner();
    await model.search(query);
    if (!model.state.search.results.length) throw new Error();
    resultsView.renderResults(model.state.search.results);
  } catch (err) {
    resultsView.renderError();
  }
}
function init() {
  recipeView.eventHandler(getRecipe);
  searchView.eventHandler(searchFor);
}
init();
