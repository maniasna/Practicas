window.addEventListener("load", function () {
  const formulario = document.querySelector("#formulario");
  const visa = document.querySelector("#visa");
  const mastercard = document.querySelector("#mastercard");
  const naranja = document.querySelector("#naranja");
  const cabal = document.querySelector("#cabal");
  const amex = document.querySelector("#amex");
  const numTarjeta = document.querySelector("#numTarjeta");

  formulario.addEventListener("submit", evento => {
    evento.preventDefault();
    evento.stopPropagation();
    let valido = false;

    if (visa.checked && validaTarjeta(numTarjeta)) {
      valido = true;
    }

    if (mastercard.checked && validaTarjeta(numTarjeta)) {
      valido = true;
    }

    if (naranja.checked && validaTarjeta(numTarjeta)) {
      valido = true;
    }

    if (cabal.checked && validaTarjeta(numTarjeta)) {
      valido = true;
    }

    if (amex.checked && validaTarjeta(numTarjeta)) {
      valido = true;
    }

    if (valido) {
      formulario.submit();
    }
  });

  function validaTarjeta(el) {
    const erVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
    const erMasterCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{12})$/
    const erNaranja = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{13})$/
    const erCabal = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{11})$/
    const erAmex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{10})$/
    const tarvalue = el.value.trim();
    if (tarvalue.match(erVisa)) {
      marcarValido(el);
      return true;
    } else if (tarvalue.match(erMasterCard)) {
      marcarValido(el);
      return true;
    } else if (tarvalue.match(erNaranja)) {
      marcarValido(el);
      return true;
    } else if (tarvalue.match(erCabal)) {
      marcarValido(el);
      return true;
    } else if (tarvalue.match(erAmex)) {
      marcarValido(el);
      return true;
    } else {
      marcaError(el, "La Fecha no tiene formato valido");
      return false;
    }
  }

  function marcaError(el, mensaje) {
    el.parentNode.querySelector(".error-feedback").textContent = mensaje;
    el.parentNode.classList.add("error");
}

function marcarValido(el) {
    el.parentNode.querySelector(".error-feedback").textContent = "";
    el.parentNode.classList.remove("error");
}

});

