import "regenerator-runtime/runtime"; //polyfilling async
import "core-js/stable"; //polyfilling ES6+ features
import * as model from "./model";
if (module.hot) module.hot.accept();

async function getRecipe() {
  const id = location.hash.slice(1);
  console.log(id);
  await model.loadRecipe(id);
}
function init() {
  window.addEventListener("hashchange", getRecipe);
}
init();
