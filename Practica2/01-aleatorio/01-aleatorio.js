// Ejercicio 1
const numeroAleatorio = (maximo) => {
    const numero = Math.floor(Math.random() * (maximo + 1));
    return numero;
};

let resul = numeroAleatorio(99999);
console.log(resul);

// Ejercicio 2
let premios = [];

for (let i = 0; i < 10; i++) {
    let premio = numeroAleatorio(99999);
    premios.push(premio);
}

premios.forEach((premio, index) => {
    const alertDiv = document.createElement('div');
    alertDiv.classList.add('alert');
    alertDiv.innerHTML = `Premio ${index + 1}: ${premio}`;
    document.body.appendChild(alertDiv);
});