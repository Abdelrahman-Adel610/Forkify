export class View {
  constructor(par, err, msg) {
    this._parent = par;
    this._errorMSG = err;
    this._MSG = msg;
  }
  renderSpinner() {
    this._parent.innerHTML = `
        <div class="spinner w-100 d-flex justify-content-center  ">
                        <i class="bi bi-arrow-repeat mt-md-5 "></i>
        </div>
        `;
  }
  renderError(message = this._errorMSG) {
    this._parent.innerHTML = `  <div class="message d-flex w-50 gap-3 mt-4 mx-auto ">
                    <i class="bi bi-exclamation-triangle text-danger"></i>
                    <p>
                       ${message}
                    </p>
                </div>`;
  }
  renderMSG(message = this._MSG) {
    this._parent.innerHTML = `  <div class="message d-flex w-50 gap-3 mt-4 mx-auto ">
   <i class="bi bi-emoji-smile"></i>
                    <p>
                       ${message}
                    </p>
                </div>`;
  }
}
