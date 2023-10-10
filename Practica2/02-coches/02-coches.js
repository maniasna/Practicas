// Ejercicio 3
function coche(marca, modelo, precio, anno, urls) {
    this.marc = marca;
    this.model = modelo;
    this.price = precio;
    this.year = anno;
    this.url = urls;
}

let coches = new Array(5);
coches[0] = new coche("Ferrari", "Scaglietti", "12000€", "2010", "img/ferrari.png");
coches[1] = new coche("BMW", "Z4", "13000€", "1999", "img/bmw.png");
coches[2] = new coche("Seat", "Toledo", "15000€", "1999", "img/seat.png");
coches[3] = new coche("Fiat", "500", "16000€", "1995", "img/fiat.png");
coches[4] = new coche("Renault", "Clio", "11000€", "1995", "img/renault.png");

for (i = 0; i < coches.length; i++) {
    console.log("Marca: " + coches[i].marc + " - Modelo: " + coches[i].model + " - Precio: " + coches[i].price + " - Año: " + coches[i].year + " - Foto del coche: " + coches[i].url);
}