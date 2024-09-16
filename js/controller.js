import "regenerator-runtime/runtime"; //polyfilling async
import "core-js/stable"; //polyfilling ES6+ features
import * as model from "./model";
import recipeView from "./view/recipeView";
import searchView from "./view/searchView";
import resultsView from "./view/resultsView";
import bookmarkView from "./view/bookmarkView.js";
import paginationView from "./view/paginationView.js";
if (module.hot) module.hot.accept();

async function getRecipe() {
  try {
    const id = location.hash.slice(1);

    if (!model.state.bookmarks.length) {
      bookmarkView.renderMSG();
    }
    if (!id) {
      recipeView.renderMSG();
      return;
    }
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    recipeView.renderRecipe(model.state.recipe);
    /************/
    const data = model.getDataOfPage(model.state.search.currentPage);
    if (data) resultsView.update(data);
    if (model.state.bookmarks) bookmarkView.update(model.state.bookmarks);
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
    goToPage();
  } catch (err) {
    resultsView.renderError();
  }
}
function goToPage(page = 1) {
  const data = model.getDataOfPage(page);
  resultsView.renderResults(data);
  generatePagination();
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
function updateServings(num) {
  const currnetData = model.state.recipe;
  const total = model.state.recipe.servings;
  currnetData.ingredients.forEach((el) => {
    el.quantity = (num / total) * el.quantity;
  });
  model.state.recipe.servings = num;
  // recipeView.renderRecipe(model.state.recipe);
  recipeView.update(model.state.recipe);
}
function bookmark() {
  if (!model.state.recipe.bookmarked) model.bookmarkRecipe();
  else model.unBookmarkRecipe();
  recipeView.update(model.state.recipe);
  bookmarkView.renderResults(model.state.bookmarks);
  if (!model.state.bookmarks.length) {
    bookmarkView.renderMSG();
  }
}
function getStoredBookmarks() {
  const data = model.retrieveBookmarks();
  if (data.length) {
    bookmarkView.renderResults(model.state.bookmarks);
  } else bookmarkView.renderMSG();
}
function init() {
  recipeView.eventHandler(getRecipe);
  recipeView.servingsClickHandler(updateServings);
  recipeView.bookmarkClickHandler(bookmark);
  searchView.eventHandler(searchFor);
  paginationView.eventHandler(goToPage);
  bookmarkView.setGetBookmarksHandler(model.saveBookmarks, getStoredBookmarks);
}
init();
