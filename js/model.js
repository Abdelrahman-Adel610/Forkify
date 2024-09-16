import "core-js/stable";
import "regenerator-runtime/runtime";
import { API_LINK, ITEMS_PER_PAGE, API_KEY } from "./config";
import { getJSON, sendJSON } from "./helpers";
export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    currentPage: 1,
    maxPages: 1,
  },
  bookmarks: [],
};
export function recipeFormatter(recipe) {

  return {
    cookingTime: recipe.cooking_time,
    id: recipe.id,
    image: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    url: recipe.source_url,
    title: recipe.title,
    ...(recipe.key && { key: recipe.key }),
    bookmarked: Isbookmarked(recipe.id),
  };
}
export async function loadRecipe(id) {
  try {
    const data = await getJSON(`${API_LINK + id}`);
    state.recipe = recipeFormatter(data.data.recipe);
  } catch (err) {
    // alert(err.message);
    throw err;
  }
}
function Isbookmarked(id) {
  return state.bookmarks.some((el) => el.id === id);
}
export async function search(query) {
  try {
    const data = await getJSON(
      `${API_LINK}?search=${query.toLocaleLowerCase()}`
    );
    const { recipes } = data.data;
    state.search.query = query;
    state.search.results = recipes.map((el) => {
      return {
        id: el.id,
        title: el.title,
        publisher: el.publisher,
        image: el.image_url,
      };
    });
    state.search.maxPages = Math.ceil(
      state.search.results.length / ITEMS_PER_PAGE
    );
  } catch (err) {
    throw err;
  }
}
export function getDataOfPage(page = state.search.currentPage) {
  state.search.currentPage = page;
  return state.search.results.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );
}
export function bookmarkRecipe() {
  state.recipe.bookmarked = 1;
  state.bookmarks.push(state.recipe);
}
export function unBookmarkRecipe() {
  state.recipe.bookmarked = 0;
  const index = state.bookmarks.findIndex((el) => el.id === state.recipe.id);
  state.bookmarks.splice(index, 1);
}
export function saveBookmarks() {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
}
export function retrieveBookmarks() {
  const data = JSON.parse(localStorage.getItem("bookmarks"));
  if (data) state.bookmarks = data;
  return data;
}
export async function uploadRecipe(data) {
  try {
    const ingredients = Object.entries(data)
      .filter((el) => el[0].startsWith("ingredient") && el[1].length)
      .map((el) => {
        const [quantity, unit, description] = el[1].split(",");
        if (el[1].split(",").length !== 3)
          throw new Error(
            "Wrong ingrdient format ,please follow out formatting rules"
          );
        return {
          quantity: quantity ? +quantity : null,
          unit: unit,
          description: description,
        };
      });
    const dataToUpload = {
      cooking_time: +data.prepTime,
      image_url: data.image,
      ingredients,
      publisher: data.publisher,
      servings: +data.servings,
      source_url: data.URL,
      title: data.title,
    };
    const recipe = await sendJSON(`${API_LINK}?key=${API_KEY}`, dataToUpload);
    return recipe.data.recipe;
  } catch (err) {
    throw err;
  }
}
