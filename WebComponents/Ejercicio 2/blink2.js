class BlinkSpan extends HTMLSpanElement {
    constructor () {
        super ();
    }

    connectedCallback() {
        const intervalo = (this.changeinterval || 1) * 1000;
        const base = this.basecolor || 'inherit';
        const alternative = this.alternativecolor ||'transparent';
        let num = 0;

        setInterval(() => {
            this.style.color = ++num % 2 ? alternative : base;
        }, intervalo);
    }

    // getters y setters

    get changeinterval() {
        return this.getAttribute('changeinterval');
    }

    get basecolor() {
        return this.getAttribute('basecolor');
    }

    get alternativecolor() {
        return this.getAttribute('alternativecolor');
    }

    set changeinterval(value) {
        this.setAttribute('changeinterval', value);
    }

    set basecolor(value) {
        this.setAttribute('basecolor', value);
    }

    set alternativecolor(value) {
        this.setAttribute('alternativecolor', value);
    }
}

customElements.define ('wc-blink-span', BlinkSpan, { extends: 'span' });