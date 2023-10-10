// Primero declaramos las variables por teclado
const nombre=prompt("Dime tu nombre: ");
const curso=prompt("Dime el nombre del curso: ");
const localidad=prompt("Dime la localidad del curso: ");
const fechainicio=prompt("Dime la fecha de inicio del curso: ");
const fechafin=prompt("Dime la fecha de finalización del curso: ");

// Una vez que tenemos las variables creamos la cadena que contiene el texto
// En la cadena indicamos donde van las variables para completar la carta
const cadena=`Estimado ${nombre.trim()},

Bienvenido al curso de ${curso.trim()} que se celebrará en la localidad de
${localidad.trim()} entre las fechas ${fechainicio.trim()} y ${fechafin.trim()}.
Espero que el curso se desarrolle según sus expectativas.
Estaremos encantados de atenderle

Atentamente, 
La dirección.
`;

// Una vez creada la carta la visualizamos con el console.log()
console.log(cadena);