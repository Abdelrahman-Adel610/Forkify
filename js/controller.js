import "regenerator-runtime/runtime"; //polyfilling async
import "core-js/stable"; //polyfilling ES6+ features
import * as model from "./model";
import { SUCCESS_MSG_TIME, SPINNER_TIME } from "./config.js";
import recipeView from "./view/recipeView";
import searchView from "./view/searchView";
import resultsView from "./view/resultsView";
import bookmarkView from "./view/bookmarkView.js";
import paginationView from "./view/paginationView.js";
import AddNewRecipe from "./view/addNewRecipe.js";
import { wait } from "./helpers.js";
import { recipe } from "./typedef";

import addNewRecipe from "./view/addNewRecipe.js";
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
function bookmark(recipe = model.state.recipe) {
  model.state.recipe = recipe;
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
/**
 * Uploads recipe to API
 * if (valid )==> display the recipe, mark it with user's icon and bookmark it.
 * else render error message to the user
 * @param {object} data
 */
async function uploadRecipe(data) {
  try {
    /**
     * @type {recipe}
     */
    let recipe = await model.uploadRecipe(data);
    recipeView.renderRecipe(recipe);
    history.pushState(null, "", `#${recipe.id}`);
    recipe = model.recipeFormatter(recipe);
    bookmark(recipe);

    AddNewRecipe.renderSpinner();
    await wait(SPINNER_TIME);
    AddNewRecipe.renderMSG();
    await wait(SUCCESS_MSG_TIME);
    AddNewRecipe.toggleModal();
    addNewRecipe.renderForm();
  } catch (err) {
    AddNewRecipe.renderError(err.message);
  }
}
/**
 * Runs all the event handlers of all the site ,events all handled in the view class which is responsible for all DOM staff ,so we pass to View classes functions to be excuted on each event (publisher subscriber method)
 * @returns {void}
 */
function init() {
  recipeView.eventHandler(getRecipe);
  recipeView.servingsClickHandler(updateServings);
  recipeView.bookmarkClickHandler(bookmark);
  searchView.eventHandler(searchFor);
  paginationView.eventHandler(goToPage);
  bookmarkView.setGetBookmarksHandler(model.saveBookmarks, getStoredBookmarks);
  AddNewRecipe.getRecipe(uploadRecipe);
}
init();
