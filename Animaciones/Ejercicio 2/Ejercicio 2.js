// main
function inicio() {
    //variables
    // variable en la que vamos a mostrar el contador
    var ele = document.querySelector("p.output");
    // boton de iniciar
    var start = document.querySelector("#start");
    // boton de parar
    var stop = document.querySelector("#stop");
    // id del interval
    var id = 0;

    // función iniciar 
    function iniciar() {
        // variable para recoger los datos introducidos por el usuario
        var contador = document.querySelector("#segundos").value;
        
        // comprobación de que no se introducen números menores que 0
        if (contador <= 0) {
            // alerta para el usuario
            alert("El número introducido debe ser mayor o igual que cero");
        } else {
            // establecemos el color del contador
            ele.style.color = "black";
            // mostramos el valor del contador
            ele.innerHTML = contador;
            // iniciamos el interval
            id = setInterval(() => {
                // vamos restando los valores del contador con el interval
                contador--;
                // lo vamos mostrando al usuario
                ele.innerHTML = contador;
                // si el contador es igual a 0 cambiamos el color del mismo a rojo
                if (contador === 0) {
                    ele.style.color = "red";
                    //vaciamos el id del interval
                    clearInterval(id);
                }
            }, 1000);
        }
    }

    // función para resetear el contador
    function parar() {
        if (id) clearInterval(id);
    }

    // eventos de click
    start.addEventListener("click", iniciar);
    stop.addEventListener("click", parar);
}

window.onload = inicio;