import { View } from "./view";
export class Preview extends View {
  constructor(par, err, msg) {
    super(par, err, msg);
  }
  renderResults(data) {
    this._parent.innerHTML = this._generateHTML(data);
  }
  _generateHTML(data) {
    const id = location.hash.slice(1);
    return data
      .map(
        (el) =>
          `
             <div class="item ${el.id === id ? "selected" : ""}">
                      <a href="#${el.id}">
                          <img src="${el.image}" alt="${el.title}">
                          <h2>${el.title}
                          </h2>
                          <div class='d-flex justify-content-between'>
                              <p>${el.publisher}</p>
                              
                            ${
                              el.key
                                ? `<div class="person"><i class="bi bi-person-fill"></i></div>`
                                : ""
                            }
                             
                        </div>
                      
                          </a>
                  </div>
                `
      )
      .join(" ");
  }
}
