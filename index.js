function validarAsunto() {
    var inputAsunto = document.getElementById('asunto');
    var mensajeError = document.getElementById('mensaje-asunto-error');
    
    var palabras = inputAsunto.value.trim().split(/\s+/);
    var cantidadPalabras = palabras.length;

    if (cantidadPalabras > 30) {
        mensajeError.textContent = 'El asunto no debe exceder las 30 palabras.';
    } else {
        mensajeError.textContent = '';
    }
}

function validarTelefono() {
    var inputTelefono = document.getElementById('telefono');
    var mensajeError = document.getElementById('mensaje-telefono-error');

    if (!/^[0-9]{9,}$/.test(inputTelefono.value.trim())) {
        mensajeError.textContent = 'El teléfono debe tener al menos 9 números.';
    } else {
        mensajeError.textContent = '';
    }
}