// Primero le pedimos por teclado el correo electronico
const email=prompt("Dime tu correo electrónico: ");

// Le quitamos los espacios de alante y atras
email=email.trim();

// Comprobamos si es una cadena o no
if (isNaN(email)) {
    let arroba=email.indexOf('@');

    // Comprobamos que contiene un arroba el email
    if (arroba !== -1) {
        // Si lo contiene recortamos y obtenemos el nombre
        let nombre=email.slice(0,arroba);
        console.log("El nombre de usuario es: "+nombre);
    }
    else {
        console.log("Correo erróneo");
    }
}
else {
    console.log("El dato introducido no es un correo electrónico");
}