campoRequerido = elemento => (elemento.value === '') ? elemento.className = 'form-control is-invalid' : elemento.className = 'form-control is-valid';

validarEmail = (elemento) => {
    (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(elemento.value) && elemento.value !== '' ) ?  elemento.className = 'form-control is-valid' : elemento.className = 'form-control is-invalid';
}