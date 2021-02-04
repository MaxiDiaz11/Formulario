campoRequerido = elemento => {
    if (elemento.value === '') {
        elemento.className = 'form-control is-invalid';
        return false;
    } else {
        elemento.className = 'form-control is-valid';
        return true;
    }
}

validarEmail = (elemento) => ((/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i).test(elemento.value) && campoRequerido(elemento)) ? elemento.className = 'form-control is-valid' : elemento.className = 'form-control is-invalid';

validarTelefono = (elemento) => (campoRequerido(elemento) && !isNaN(elemento.value)) ? elemento.className = 'form-control is-valid' : elemento.className = 'form-control is-invalid';
