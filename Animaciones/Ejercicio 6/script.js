document.addEventListener('DOMContentLoaded', () => {
    // en primer lugar para que cargue un fichero debemos hacer un fetch normal
    const ficheroUno = fetch('https://reqres.in/api/users');
    const ficheroDos = fetch('https://reqres.in/api/login');
    console.log(ficheroUno);
    console.log(ficheroDos);
    // para los dos ficheros debemos poner un fetch all

    // finalmente para el más rápido 
})