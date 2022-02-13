class Blink extends HTMLElement {
    constructor () {
        super ();
    }

    connectedCallback() {
        const intervalo = (this.getAttribute ('changeinterval') || 1)*1000;
        const base = this.getAttribute ('basecolor') || 'inherit';
        const alternative = this.getAttribute ('alternativecolor') || 'transparent';
        let num = 0;

        setInterval(() => {
            this.style.color = ++num % 2 ? alternative : base;
        }, intervalo)
    }
}
customElements.define('wc-blink', Blink);