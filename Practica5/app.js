window.addEventListener("load", function () {
    const formulario = document.querySelector("#formulario");
    const usuario = document.querySelector("#user");
    const passwd = document.querySelector("#passwd");
    const cp = document.querySelector("#cp");
    const numeroentero = document.querySelector("#numeroentero");
    const numeroreal = document.querySelector("#numeroreal");
    const telefono = document.querySelector("#telefono");
    const telefonointernacional = document.querySelector("#telefonointernacional");
    const fecha = document.querySelector("#fecha");
    const email = document.querySelector("#email");
    const dni = document.querySelector("#dni");
    const url = document.querySelector("#url");
    const tarjetacredito = document.querySelector("#tarjetacredito");
    const condiciones = document.querySelector("#condiciones");
    const condiciones2 = document.querySelector("#condiciones2");

    formulario.addEventListener("submit", evento => {
        evento.preventDefault();
        evento.stopPropagation();
        let valido = true;

        if (!validaUser(usuario)) {
            valido = false;
        }
        if (!validaPasswd(passwd)) {
            valido = false;
        }
        if (!validaCP(cp)) {
            valido = false;
        }
        if (!validaNumeroEntero(numeroentero)) {
            valido = false;
        }
        if (!validaNumeroReal(numeroreal)) {
            valido = false;
        }
        if (!validaTelefono(telefono)) {
            valido = false;
        }
        if (!validaTelefonoInternacional(telefonointernacional)) {
            valido = false;
        }
        if (!validaFecha(fecha)) {
            valido = false;
        }
        if (!validaEmail(email)) {
            valido = false;
        }
        if (!validaDNI(dni)) {
            valido = false;
        }
        if (!validaURL(url)) {
            valido = false;
        }
        if (!validaTarjetaCredito(tarjetacredito)) {
            valido = false;
        }
        if (!validaCondiciones(condiciones)) {
            valido = false;
        }
        if (!validaCondiciones2(condiciones2)) {
            valido = false;
        }
        if (valido) {
            formulario.submit();
        }
    });

    function validaUser(el) {
        if (!el.value) {
            marcaError(el, "No has introducido usuario");
            return false;
        } else {
            marcarValido(el);
            return true;
        }
    }

    function validaPasswd(el) {
        const erPasswd = /^(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,10}$/;
        const passwdvalue = el.value.trim();
        if (passwdvalue.match(erPasswd)) {
            marcarValido(el);
            return true;
        } else {
            marcaError(el, "El password debe tener entre 8 y 10 caracteres y contener al menos un dígito y un carácter especial");
            return false;
        }
    }

    
    function validaCP(el) {
        const erCP = /^[0-5][0-9]{4}$/;
        const cpvalue = el.value.trim();
        if (cpvalue.match(erCP)) {
            marcarValido(el);
            return true;
        } else {
            marcaError(el, "El Código Postal no tiene formato valido");
            return false;
        }
    }

    function validaNumeroEntero(el) {
        const erNumeroEntero = /^[0-9]+$/;
        //const intento= /^-?\d+$/;
        const nevalue = el.value.trim();
        if (nevalue.match(erNumeroEntero)) {
            marcarValido(el);
            return true;
        } else {
            marcaError(el, "El Numero Entero no tiene formato valido");
            return false;
        }
    }

    function validaNumeroReal(el) {
        const erNumeroReal = /^-?\d+(\.\d+)?$/;
        const nrvalue = el.value.trim();
        if (nrvalue.match(erNumeroReal)) {
            marcarValido(el);
            return true;
        } else {
            marcaError(el, "El Numero Real no tiene formato valido");
            return false;
        }
    }

    function validaTelefono(el) {
        const erTelefono= /^\d{10}$/;
        const telvalue = el.value.trim();
        if(telvalue.match(erTelefono)) {
            marcarValido(el);
            return true;
        } else {
            marcaError(el, "El Telefono no tiene formato valido");
            return false;
        }
    }

    function validaTelefonoInternacional(el) {
        const erTelefonoInternacional= /^\+?\d+[\d\s-]*$/;
        const tivalue = el.value.trim();
        if(tivalue.match(erTelefonoInternacional)) {
            marcarValido(el);
            return true;
        } else {
            marcaError(el, "El Telefono Internacional no tiene formato valido");
            return false;
        }
    }

    function validaFecha(el) {
        const erFecha= /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        const fecvalue = el.value.trim();
        if (fecvalue.match(erFecha)) {
            marcarValido(el);
            return true;
        } else {
            marcaError(el, "La Fecha no tiene formato valido");
            return false;
        }
    }

    function validaEmail(el) {
        const erEmail = /^[- \w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        const emailvalue = el.value.trim();
        if (emailvalue.match(erEmail)) {
            marcarValido(el);
            return true;
        } else {
            marcaError(el, "El email no tiene formato valido");
            return false;
        }
    }

    function validaDNI(el) {
        const erDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
        const dnivalue = el.value.trim();
        if (dnivalue.match(erDNI)) {
            marcarValido(el);
            return true;
        } else {
            marcaError(el, "El DNI no tiene formato valido");
            return false;
        }
    }

    function validaURL(el) {
        const erURL = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
        const urlvalue = el.value.trim();
        if(urlvalue.match(erURL)) {
            marcarValido(el);
            return true;
        } else {
            marcaError(el, "No has introducido usuario");
            return false;
        }
    }

    function validaTarjetaCredito(el) {
        const erTarjCred = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
        const tcvalue = el.value.trim();
        if(tcvalue.match(erTarjCred)) {
            marcarValido(el);
            return true;
        } else {
            marcaError(el, "No has introducido usuario");
            return false;
        }
    }

    function validaCondiciones(el) {
        if (!el.checked) {
            marcaError(el, "Tienes que aceptar las condiciones");
            return false;
        } else {
            marcarValido(el);
            return true;
        }
    }

    function validaCondiciones2(el) {
        if (!el.checked) {
            marcaError(el, "Tienes que aceptar la publicidad");
            return false;
        } else {
            marcarValido(el);
            return true;
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