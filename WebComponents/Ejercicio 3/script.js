const detailsTemplate = document.createElement('template');

detailsTemplate.innerHTML = `
    <details>
        <summary>
            <span>
                <slot class="name" name="element-name">NECESITA NOMBRE</slot>
                <slot class="desc" name="description">NECESITA DESCRIPCIÓN</slot>
            </span>
        </summary>
        <div class="attributes>
            <h4><span>Atributos</span></h4>
            <slot name="attributes"><p>Ninguno</p></slot>
        </div>
    </details>
`;

customElements.define('element-details', 
    class extends HTMLElement {
        constructor () {
            super();
            this._shadowRoot = this.attachShadow({ mode: 'open' });
            this._shadowRoot.appendChild(detailsTemplate.content.cloneNode(true));
        }
    }
)