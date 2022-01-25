const TIEMPO = 1000;

document.addEventListener("DOMContentLoaded", () => {
    // seleccionamos el bloque que queremos mover
    var bloque = document.querySelector(".block");

    // Función para mover el bloque
    function desplazar(coordenada, direccion) {
        // variables
        var inicio = null;
        var desp = parseInt(mov.value) * direccion;
        var offset = parseInt(getComputedStyle(bloque).getPropertyValue(coordenada));
        function step(timestamp) {
            // comprobación de que el inicio no es null para poner a inicio el tiempo actual
            if (!inicio){
                inicio = timestamp;
            }
            var progreso = timestamp - inicio;

            // calculamos con una regla de tres donde va a estar el bloque
            bloque.style.setProperty(coordenada, ((desp * progreso) / TIEMPO) + offset + "px");

            if (progreso < TIEMPO) {
                window.requestAnimationFrame(step);
            } else {
                bloque.style.setProperty(coordenada, (desp + offset) + "px");
            }
        }

        window.requestAnimationFrame(step);
    }

    // eventos de desplazamiento
    document.getElementById("right").addEventListener("click", (e) => {
        desplazar("left", 1);
        // desplazarDerecha(); Función alternativa. Se crearía una para cada dirección con el valor correspondiente
    });

    document.getElementById("left").addEventListener("click", (e) => {
        desplazar("left", -1);
    });

    document.getElementById("top").addEventListener("click", (e) => {
        desplazar("top", -1);
    })

    document.getElementById("bottom").addEventListener("click", (e) => {
        desplazar("top", 1);
    })

    // permitimos el arrastre del bloque y restamos la diferencia para poder igualar donde hemos soltado con el ratón
    bloque.addEventListener('dragstart', (ev) => {
        var coordenadas = ev.target.getBoundingClientRect();
    
        ev.dataTransfer.setData('text', 
        (parseInt(coordenadas.left - ev.clientX) + ',' + parseInt(coordenadas.top - ev.clientY)));
    
    });

    // varible para el contenedor gris
    var container = document.querySelector('#container');

    // evento para aceptar objetos arrastrados
    container.addEventListener('dragover', (ev) => {
        ev.preventDefault();
    });

    // 

    container.addEventListener('drop', (ev) => {
        var offset = ev.dataTransfer.getData('text').split(',');

        bloque.style.left = (ev.clientX + parseInt(offset[0])) + 'px';
        bloque.style.top = (ev.clientY + parseInt(offset[1])) + 'px';
    
        comprobar();
    });

    var cuadrado = document.querySelector(".cuadrado"); 

    function comprobar(){		
		var dimBloque = bloque.getBoundingClientRect();
		var dimCuadrado = cuadrado.getBoundingClientRect();
		
		// Comprobamos el límite de todas las coordenadas. La coordenada izquierda y superior deben ser mayor al cuadrado central,
		// pero siempre sin sobrepasar las coordenadas derecha e inferior
		if ((dimBloque.left >= dimCuadrado.left) && (dimBloque.top >= dimCuadrado.top) && 
			(dimBloque.right <= dimCuadrado.right) && (dimBloque.bottom <= dimCuadrado.bottom)){	
			document.querySelector("#texto").style.display = "none";
			bloque.style.backgroundColor = "red";
		} else {
			document.querySelector("#texto").style.display = "inline";
			bloque.style.backgroundColor = "greenYellow";
		}
	};
})

