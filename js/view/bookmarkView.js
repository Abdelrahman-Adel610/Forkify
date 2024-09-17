import { Preview } from "./preview";
class BookmarkView extends Preview {
  constructor() {
    super(
      document.querySelector(".bookmark-list>div"),
      "No bookmarks yet. Find a nice recipe and bookmark it ;)",
      "No bookmarks yet. Find a nice recipe and bookmark it ;)"
    );
  }
  setGetBookmarksHandler(setter, getter) {
    window.addEventListener("load", getter);
    window.addEventListener("unload", setter);
  }
}
export default new BookmarkView();
