/**
 * @class parent for all the views
 * @constructor sets the parent element , welcome and error message for the view
 */
export class View {
  constructor(par, err, msg) {
    this._parent = par;
    this._errorMSG = err;
    this._MSG = msg;
  }
  /**
   * renders spinner to the view
   */
  renderSpinner() {
    this._parent.innerHTML = `
        <div class="spinner w-100 d-flex justify-content-center  ">
                        <i class="bi bi-arrow-repeat mt-md-5 "></i>
        </div>
        `;
  }
  /**
   * renders error message to the view , by default it renders a stored message
   * @param {string} [message=this._errorMSG]
   */
  renderError(message = this._errorMSG) {
    this._parent.innerHTML = `  <div class="message d-flex w-50 gap-3 mt-4 mx-auto ">
                    <i class="bi bi-exclamation-triangle text-danger"></i>
                    <p>
                       ${message}
                    </p>
                </div>`;
  }
  /**
   * renders welcome message to the view , by default it renders a stored message
   * @param {*string} [message=this._MSG]
   */
  renderMSG(message = this._MSG) {
    this._parent.innerHTML = `  <div class="message d-flex w-50 gap-3 mt-4 mx-auto ">
   <i class="bi bi-emoji-smile"></i>
                    <p>
                       ${message}
                    </p>
                </div>`;
  }
  /**
   * it updates the text and attributes at the this view aleady rendered at the page instead of rerendering all the view, for better performance
   * @param {string} data HTML code as string
   */
  update(data) {
    const newel = [
      ...document
        .createRange()
        .createContextualFragment(this._generateHTML(data))
        .querySelectorAll("*"),
    ];
    const curr = this._parent.querySelectorAll("*");
    newel.forEach((el, i) => {
      // UPDATING ATTRIBUTES
      if (!el.isEqualNode(curr[i])) {
        [...el.attributes].forEach((el) =>
          curr[i].setAttribute(el.name, el.value)
        );
      }
      // UPDATING TEXT
      if (!el.isEqualNode(curr[i]) && el.lastChild?.nodeValue.trim()) {
        if (curr[i].lastChild.nodeValue !== el.lastChild.nodeValue) {
          curr[i].lastChild.nodeValue = el.lastChild.nodeValue;
        }
      }
    });
  }
}
