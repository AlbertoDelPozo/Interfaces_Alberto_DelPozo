const switchTemplate = document.createElement('template');

switchTemplate.innerHTML = `
<style>			
		/* En este CSS no importa tanto emplear selectores de etiquetas ya que solo aplicará al componente web */
		:host{
			display: block;
			margin-bottom: 1em;
		}
		
		main{
			display: flex;		
		}
		
		main:hover{
			cursor: pointer;
		}
	
		div{
			width: 30px;
			height: 30px;			
		}
	
		.on{
			background-color: green;
			border: 1px solid green;
		}
		
		.off{
			background-color: red;
			border: 1px solid red;
		}
		
		.neutral{
			border: 1px solid black;
		}
	</style>
	<main>
		<div id="btnOff" class="off"></div>
		<div id="btnOn" class="neutral">OFF</div>		
	</main>
`;

class Switch extends HTMLElement {
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'closed' });
        this._shadowRoot.appendChild(switchTemplate.content.cloneNode(true));

        this.btnOff = this._shadowRoot.getElementById("btnOff");
        this.btnOn = this._shadowRoot.getElementById("btnOn");

        this.addEventListener("click", () => {
            this.estado = (this.estado == "off") ? "on" : "off";
        });
    }

    atributeChangedCallback(attr, oldVal, newVal) {
        if (attr == 'estado') {
            if (newVal == "off") {
                this.btnOff.className = "off";
				this.btnOff.innerHTML = "";
				this.btnOn.className = "neutral";
				this.btnOn.innerHTML = "OFF";	
            } else if (newVal == "on"){
                this.btnOff.className = "neutral";
				this.btnOff.innerHTML = "ON";
				this.btnOn.className = "on";
				this.btnOn.innerHTML = "";	
            }
        }
    }

    actualizarEstado() {
        if (!this.estado ||(this.estado != "on" && this.estado != "off")) {
            this.estado="off";
        }
    }

    encender() {
        this.estado="on";
    }

    apagar() {
        this.estado="off";
    }

    get observedAttributes() {
        return ['estado'];
    }

    get estado() {
        return this.getAttribute('estado');
    }

    set estado(value) {
        this.setAttribute('estado', value);
    }
}

customElements.define('my-switch', Switch);

