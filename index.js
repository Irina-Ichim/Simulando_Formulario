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
    var mensajeError = document.getElementById('mensaje-telefono-error'); // Cambiado a 'mensaje-telefono-error'

    if (!/^[0-9]{9,}$/.test(inputTelefono.value.trim())) {
        mensajeError.textContent = 'El teléfono debe tener al menos 9 números.';
    } else {
        mensajeError.textContent = '';
    }
}
function enviarFormulario() {
    // Verifica si los campos requeridos están completos
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var asunto = document.getElementById('asunto').value.trim();

    if (nombre === '' || email === '' || telefono === '' || asunto === '') {
        // Campos incompletos, muestra la alerta personalizada
        mostrarAlerta('Por favor, completa todos los campos requeridos.');
        return;
    }

    // Aquí podrías realizar alguna acción de envío del formulario, si es necesario.

    // Muestra el mensaje de confirmación
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';

    // Muestra los elementos de confirmación
    document.getElementById('mensaje-confirmacion').style.display = 'block';
    document.getElementById('texto-confirmacion').style.display = 'block';

    // Oculta la alerta personalizada si estaba visible
    cerrarAlerta();
}

function mostrarAlerta(mensaje) {
    var alerta = document.getElementById('custom-alert');
    var mensajeAlerta = document.getElementById('alert-message');

    mensajeAlerta.textContent = mensaje;
    alerta.style.display = 'block';
}

function cerrarAlerta() {
    var alerta = document.getElementById('custom-alert');
    alerta.style.display = 'none';
}

function cerrarModal() {
    var modal = document.getElementById('myModal');
    var alerta = document.getElementById('custom-alert');

    modal.style.display = 'none';
    alerta.style.display = 'none';
}
