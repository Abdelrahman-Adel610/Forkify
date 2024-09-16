import { Preview } from "./preview";
class ResultsView extends Preview {
  constructor() {
    super(
      document.querySelector(".list>div"),
      "Couldn't find the recipe please try again.",
      "Start by searching for a recipe or an ingredient. Have fun!"
    );
  }
}
export default new ResultsView();
