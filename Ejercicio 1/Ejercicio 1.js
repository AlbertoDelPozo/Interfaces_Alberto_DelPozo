var contador = 0;
var timer;

function inicio() {
    if (contador == 0) {
        timer = setTimeout(suma, 1000);        
    } 
    if (contador == 4) {
        clearTimeout(timer);
    }
}

function suma() {
    contador++;
    
}

window.onload = inicio;