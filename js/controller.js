import "regenerator-runtime/runtime"; //polyfilling async
import "core-js/stable"; //polyfilling ES6+ features
import * as model from "./model";
import recipeView from "./view/recipeView";
import searchView from "./view/searchView";
import resultsView from "./view/resultsView";
import paginationView from "./view/paginationView.js";
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
    const data = model.getDataOfPage(2);
    resultsView.renderResults(data);
    generatePagination();
  } catch (err) {
    resultsView.renderError();
  }
}
function generatePagination() {
  const currentPage = model.state.search.currentPage;
  const max = model.state.search.maxPages;

  const options = { left: 0, right: 0 };
  if (currentPage === 1 && max > 1) {
    options.right = 1;
  }
  if (currentPage === max && currentPage > 1) {
    options.left = 1;
  }
  if (currentPage > 1 && currentPage < max) {
    options.right = 1;
    options.left = 1;
  }

  paginationView.renderPagination(currentPage, options);
}
function init() {
  recipeView.eventHandler(getRecipe);
  searchView.eventHandler(searchFor);
}
init();
