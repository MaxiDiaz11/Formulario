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

//!
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
//!

validarGeneral = (event) => {
    event.preventDefault();
    if (campoRequerido(document.getElementById('nombre')) &&
        validarEmail(document.getElementById('email')) &&
        validarTelefono(document.getElementById('telefono')) &&
        cantidadCaracteres(document.getElementById('consulta'))
    ) enviarMail();

}

enviarMail = () => {
    let alerta = document.getElementById("mensajeEnvio");
    emailjs.send("service_kfwsodn", "template_iqhj5k4", {
        from_name: "Administrador",
        to_name: document.getElementById('email').value,
        message: `Nombre y apellido: ${document.getElementById('nombre').value} - 
        Telefono: ${document.getElementById('telefono').value} - 
        Consulta: ${document.getElementById('consulta').value}`,
    }).then(
        (response) => {
            console.log(response);
            alerta.className = "alert alert-success mx-3";
            alerta.innerHTML = "Su consulta fue enviada correctamente.";
        }, (error) => {
            console.log(error);
            alerta.className = "alert alert-danger mx-3";
            alerta.innerHTML = "Ocurrio un error. Verifique los datos ingresados.";
        }
    )
}