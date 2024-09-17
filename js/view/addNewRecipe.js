import { View } from "./view";
class AddNewRecipe extends View {
  _upload = document.querySelector(".upload button");
  _overlay = document.querySelector(".overlay");
  _modal = document.querySelector(".addRecipe");
  _addRecipeBtn = document.querySelector(".addRecipeBtn");
  constructor() {
    super(
      document.querySelector(".AddRecipeForm"),
      "Couldn't add the recipe",
      "Succssfully added the recipe"
    );

    this._openModalEvent();
  }
  toggleModal() {
    this._parent.classList.toggle("d-none");
    this._overlay.classList.toggle("d-none");
  }
  _overlayClick(e) {
    if (e.target.closest(".close i") || !e.target.closest(".addRecipe")) {
      this.toggleModal();
      this.renderForm();
    }
  }
  renderForm() {
    this._parent.innerHTML = `
     <div>
                <div class="close">
                    <i class="bi bi-x position-absolute "></i>
                </div>
                <div class="yourRecipe d-flex w-100 mx-auto py-5
            px-5 h-100">
                    <div class="left w-50 px-4">
                        <h2 class="mb-4">Recipe data</h2>
                        <div class="grid">
                            <label for="title">Title</label>
                            <input class="form-control" type="text" placeholder="" id="title"  name="title">

                            <label for="URL">URL</label>
                            <input class="form-control" type="text" placeholder="" id="URL"  name="URL">
                            <label for="ImageURL">Image URL</label>
                            <input class="form-control" type="text" placeholder="" id="ImageURL" 
                                name="image">

                            <label for="Publisher">Publisher</label>
                            <input class="form-control" type="text" placeholder="" id="Publisher"
                                name="publisher">

                            <label for="PrepTime">Prep Time</label>
                            <input class="form-control" type="number" placeholder="" id="PrepTime" 
                                name="prepTime">

                            <label for="Servings">Servings</label>
                            <input class="form-control" type="number" placeholder="" id="Servings" 
                                name="servings">
                        </div>
                    </div>
                    <div class="right w-50 px-4">
                        <h2 class="mb-4">Ingredients</h2>
                        <div class="grid">
                            <label for="Ingredient_one">Ingredient 1</label>
                            <input class="form-control" type="text" name="ingredient-1"
                                placeholder="Format: 'Quantity,Unit,Description'" id="Ingredient_one"
                                
                            <label for="Ingredient_two">Ingredient 2</label>
                            <input class="form-control" type="text" name="ingredient-2"
                                placeholder="Format: 'Quantity,Unit,Description'" id="Ingredient_two" >
                            <label for="Ingredient_three">Ingredient 3</label>
                            <input class="form-control" type="text" name="ingredient-3"
                                placeholder="Format: 'Quantity,Unit,Description'" id="Ingredient_three" >
                            <label for="Ingredient_four">Ingredient 4</label>
                            <input class="form-control" type="text" name="ingredient-4"
                                placeholder="Format: 'Quantity,Unit,Description'" id="Ingredient_four" >
                            <label for="Ingredient_five">Ingredient 5</label>
                            <input class="form-control" type="text" name="ingredient-5"
                                placeholder="Format: 'Quantity,Unit,Description'" id="Ingredient_five" >
                            <label for="Ingredient_six">Ingredient 6</label>
                            <input class="form-control" type="text" name="ingredient-6"
                                placeholder="Format: 'Quantity,Unit,Description'" id="Ingredient_six" >
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center upload mb-5">
                    <button class="btn bg-main d-flex align-items-center justify-content-center gap-3" type="submit">
                        <i class="bi bi-cloud-upload"></i> UPLOAD
                    </button>
                </div>
            </div>
    `;
  }
  _openModalEvent() {
    this._addRecipeBtn.addEventListener("click", this.toggleModal.bind(this));

    this._parent.addEventListener("click", this._overlayClick.bind(this));
    this._overlay.addEventListener("click", this._overlayClick.bind(this));
  }
  getRecipe(handler) {
    this._parent.addEventListener("submit", function (e) {
      e.preventDefault();
      const Data = Object.fromEntries(
        [...this.querySelectorAll("input")].map((el) => [el.name, el.value])
      );
      handler(Data);
    });
  }
}
export default new AddNewRecipe();
