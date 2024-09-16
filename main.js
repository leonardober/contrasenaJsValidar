let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?'; // Caracteres especiales añadidos
let contrasena = document.getElementById('contrasena');

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);
    if (numeroDigitado < 6) {
        alert("El número digitado debe ser mayor o igual a 6");
        return;
    }
    let password = '';
    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }
    contrasena.value = password;

    // Llamar a la función para validar la contraseña
    validarContrasena(password);
}

function limpiar() {
    contrasena.value = ''; // Limpiar la caja de texto
    cantidad.value = '';   // También limpiar el campo de cantidad si lo deseas
}

// Función para validar la seguridad de la contraseña
function validarContrasena(password) {
    const tieneLongitudSuficiente = password.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    if (tieneLongitudSuficiente && tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
        alert("Contraseña fuerte");
    } else {
        alert("Contraseña débil: asegúrate de que tenga al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.");
    }
}
