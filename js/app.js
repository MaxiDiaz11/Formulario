campoRequerido = elemento => {
    if (elemento.value === '') {
        elemento.className = 'form-control is-invalid';
        return false;
    } else {
        elemento.className = 'form-control is-valid';
        return true;
    }
}

validarEmail = (elemento) => {
    if ((/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i).test(elemento.value) && campoRequerido(elemento)) {
        elemento.className = 'form-control is-valid';
        return true;
    } else {
        elemento.className = 'form-control is-invalid';
        return false;
    }
}

validarTelefono = (elemento) => {
    if (campoRequerido(elemento) && !isNaN(elemento.value)) {
        elemento.className = 'form-control is-valid';
        return true;
    }
    else {
        elemento.className = 'form-control is-invalid';
        return false;
    }
}

cantidadCaracteres = (elemento) => {
    if (campoRequerido(elemento) && elemento.value.length > 10) {
        elemento.className = 'form-control is-valid';
        return true;
    }
    else {
        elemento.className = 'form-control is-invalid';
        return false;
    }
}

// let checkbox = document.getElementById('checkTermino');
// checkbox.addEventListener('change', validarCheckbox);

// validarCheckbox = () => {
//     if (checkbox.checked) {
//         checkbox.className = 'form-check-input is-valid';
//         return true;
//     }
//     else {
//         checkbox.className = 'form-check-input is-invalid';
//         return false;
//     }
// }

validarGeneral = (event) => {
    event.preventDefault();
    let alerta = document.getElementById("mensajeEnvio");
    if (campoRequerido(document.getElementById('nombre')) &&
        validarEmail(document.getElementById('email')) &&
        validarTelefono(document.getElementById('telefono')) &&
        cantidadCaracteres(document.getElementById('consulta'))
    ) {
        alerta.className = "alert alert-success mx-3";
        alerta.innerHTML = "Su consulta fue enviada correctamente.";
    } else {
        alerta.className = "alert alert-danger mx-3";
        alerta.innerHTML = "Ocurrio un error. Verifique los datos ingresados.";
    }
}