//main
function inicio() {
    //variable para almacenar todos los divs
    var divs = document.querySelectorAll("div.num");
    // console.log(divs);
    // array con los ids generados por el setTimeout
    var ids = [];

    // función para mostrar los elementos ocultos
    function mostrar() {
        //hacemos un forEach para establecer los setTimeout
        divs.forEach((ele, index) => {
            //setTimeout
            let id = setTimeout(() => {
                //mostramos el div con display block
                ele.style.display = "block";
            }, 1000*index);
            //introducimos en el array general los id de cada timeout
            ids.push(id);
        });
    }

    //ejecutamos la función
    mostrar();

    //cada vez que hagamos click en un div se ocultarán los divs de nuevo
    divs.forEach((ele) => {
        ele.addEventListener("click", () => {
            ids.forEach((divActual) => {
                // finalizamos los timeout
                clearTimeout(divActual);
            });

            // reiniciamos los divs
            reiniciar();
        })
    });

    //función para reiniciar los divs
    function reiniciar() {
        // vaciamos ell array de ids
        ids = [];
        // forEacha para ocultar los divs
        divs.forEach((divActual) => {
            // ocultamos los divs
            divActual.style.display = "none";
        })
        // volvemos a ejecutar la función para mostrar los divs de nuevo
        mostrar();
    }
};

window.onload = inicio;