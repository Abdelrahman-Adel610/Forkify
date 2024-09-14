import { API_LINK } from "./config";
import { getJSON } from "./helpers";
export const state = {
  recipe: {},
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
    alert(err.message);
    throw err;
  }
}
