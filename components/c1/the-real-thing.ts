export default class MyApplication extends HTMLElement {

	constructor() {
		super();

    const shadow = this.attachShadow({mode: 'closed'});
    const mount = document.createElement('div');
 		shadow.appendChild(mount);
        
    const Elm: any = window['Elm'];
    Elm.Main.init({ node: mount });
	}
	
	// Fires when an instance of the element is created.
 	createdCallback() {
		
	}
	
	// Fires when an instance was inserted into the document.
	attachedCallback() {

	};
}

customElements.define('my-application', MyApplication)
