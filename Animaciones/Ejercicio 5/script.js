document.addEventListener('DOMContentLoaded', () => {
    var divs = document.querySelectorAll('div.num');
    var id = 0;
    var contador = 0;

    function reiniciar() {
        contador = 0;
        divs.forEach((divActual) => {
            divActual.style.display = 'none';
        });

        aparecer();
    }

    function mostrar() {
        var promesa1 = new Promise((resolve, reject) => {
            id = setTimeout(() => {
                divs[contador].style.display = 'block';
                resolve(id);
            }, 1000);
        });

        return promesa1;
    }

    function aparecer() {
        if(contador == divs.length) {
            id = setTimeout(reiniciar, 1000);
        } else {
            mostrar().then(() => {
                contador++;
                aparecer();
            });
        }
    }

    aparecer();


    divs.forEach((ele) => {
        ele.addEventListener('click', () => {
            clearTimeout(id);

            reiniciar();
        })
    });
});