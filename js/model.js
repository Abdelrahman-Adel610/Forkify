import "core-js/stable";
import "regenerator-runtime/runtime";
import { API_LINK } from "./config";
import { getJSON } from "./helpers";
export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
  },
};
export async function loadRecipe(id) {
  try {
    const data = await getJSON(`${API_LINK + id}`);
    const { recipe } = data.data;
    state.recipe = {
      cookingTime: recipe.cooking_time,
      id,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      servings: recipe.servings,
      url: recipe.source_url,
      title: recipe.title,
    };
  } catch (err) {
    // alert(err.message);
    throw err;
  }
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
        imageUrl: el.image_url,
      };
    });
  } catch (err) {
    throw err;
  }
}
