// 1. Primero hacemos que recoja el valor por pantalla
const num=prompt("Introduzca un número: ");

// 2. Una vez que ha recogido el valor por pantalla comprobamos
//    si el valor introducido es un número.
if (isNaN(num)) {
    console.log('El valor introducido no es un número');
// 1. Después de haber comprobado si el valor es un número,
//    chequeamos si el número es par o impar con el resto de la división,
//    de manera, que si el resto es 1 es impar y si es distinto de 1 es par.
} else if (num%2 == 1) {
    console.log('El número es impar');
} else {
    console.log('El número es par');
}