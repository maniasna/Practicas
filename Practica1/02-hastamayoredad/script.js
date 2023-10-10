// Pide una edad por pantalla
let edad=prompt("Dime una edad: ");

// La primera vez comprobamos si es un número o no
if(isNaN(edad)) {
    console.log("El dato introducido no es un número")
}
else {
// Ahora comprobamos que el número introducido es menor de 18 o no en un bucle
// hasta que de un número igual o mayor a 18
while (edad<18){
    // Volvemos a comprobar internamente si el número introducido es o no un número
    if(isNaN(edad)) {
        console.log("El dato introducido no es un número");
        // Comprobamos el número introducido si es menor de 18 o no
    } else if (edad<18){
        // Si el valor introducido no es mayor de 18 o igual volvemos a pedir otro númoer
        edad=prompt("Dime una edad: ");
    } else {
        // Si el valor es igual o mayor a 18 lo corta y pone el número
        console.log("La edad válida que has introducido es: "+edad);
    }
}
}
