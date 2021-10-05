import styleSheet from "./styles.css" assert { type: "css" };

export default class C2 extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({mode: 'closed'})
      const text = document.createElement('h2')
      text.textContent = "majllo"
      shadow.appendChild(text)
      shadow.adoptedStyleSheets = [styleSheet]
    }
}

customElements.define('c2-widget', C2)
