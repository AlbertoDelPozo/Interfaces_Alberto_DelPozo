class BlinkSpan extends HTMLSpanElement {
    constructor () {
        super ();
    }

    connectedCallback() {
        const intervalo = (this.changeinterval || 1) * 1000;
        const base = this.basecolor || 'inherit';
        const alternative = this.alternativecolor ||'transparent';
        let num = 0;
    }
}