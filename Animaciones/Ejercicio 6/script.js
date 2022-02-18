function cargarBarra() {
    let barra = document.querySelector(".barra");
    let tiempo = 2000;
    let proceso = 0;
    var start = null;
    
    return new Promise((resove, reject) => {
        function step(timestamp) {
            if (!start) {
                start = timestamp;
            }
            var progress = timestamp - start;
            let pct = ((progress*100)/tiempo) + "%";
            barra.style.width = pct;

            if (progress > tiempo) {
                proceso = window.requestAnimationFrame(step);
            } else {
                barra.style.width = "100%";
                resove("El fichero cargó bien");
            }
        }

        proceso = window.requestAnimationFrame(step);
    });
}

function cargarPromesa(opcion){
    if (opcion === "all"){
		return Promise.all([fetch('https://reqres.in/api/users'),fetch('https://reqres.in/api/login')]);
	} else if (opcion === "race"){
		return Promise.race([fetch('https://reqres.in/api/users'),fetch('https://reqres.in/api/login')]);
	} else {
		return fetch('https://reqres.in/api/users');
	}
}

document.addEventListener("DOMContentLoaded", () => {
    let mensaje = document.getElementById('mensaje');

    document.getElementById("cargar").addEventListener("click", () => {
        mensaje.textContent = "Cargando";

        cargarPromesa(document.getElementById("modo").value)
        .then( (respuesta) => {
            console.log(respuesta);
            return cargarBarra();
        })

        .then( (respuesta) => {
            mensaje.textContent = respuesta;
        })

        .catch( (error)  => {
            mensaje.textContent = "Error " + error;
            document.querySelector(".barra").style.width = "0%";
        });
    });
})