class CubComponent extends HTMLElement {
	constructor() {super();}
	connectedCallback() {
		const shadowDom = this.attachShadow({mode: 'open'});
		const template = document.getElementById('cub-art');
		const templateHtml = template.content.cloneNode(true);
		shadowDom.appendChild(templateHtml);
	}
}

customElements.define('cub-art', CubComponent);