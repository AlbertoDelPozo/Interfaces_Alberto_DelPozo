document.addEventListener("DOMContentLoaded", () => {
    var divs = document.querySelectorAll("div.animate");
    var currentID = 0;

    function reiniciar() {
        divs.forEach((curDIV) => {
            curDIV.style.display = "none";
        });

        aparecer();
    }

    function mostrarDIV(contDIV) {
        let p1 = new Promise((resolve, reject) => {
            currentID = setTimeout(() => {
                divs[contDIV].style.display = "block";
                resolve(currentID);
            }, 1000);
        });

        return p1;
    }

    async function aparecer() {
        for (let contDIV=0;contDIV<divs.length; contDIV++) {
            currentID = await mostrarDIV(contDIV);
        }

        currentID = setTimeout(reiniciar, 1000);
    }

    aparecer();

    divs.forEach((elem) => {
        elem.addEventListener("click", () => {
            clearTimeout(currentID);
            reiniciar();
        })
    });
});