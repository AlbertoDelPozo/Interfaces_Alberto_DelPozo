class Blink extends HTMLElement {
    constructor() {
        super ();
    }

    connectedCallback() {
        let intervalo = 1000;
        let baseColor = "inherit";
        let alternativeColor = "transparent";
        let num = 0;

        if (this.getAttribute('changeinterval') != null) {
            intervalo = this.getAttribute('changeinterval')*1000;
        }

        if (this.getAttribute('basecolor') != null) {
            baseColor = this.getAttribute('basecolor');
        }

        if (this.getAttribute('alternativecolor') != null) {
            alternativeColor = this.getAttribute('alternativecolor');
        }

        setInterval(() => {
            ++num;
            if (n%2 != 0) {
                this.style.color = alternativeColor;
            } else {
                this.style.color = base;
            }

        }, intervalo);
    }
}
customElements.define('wc-blink', Blink);