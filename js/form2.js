//Formulario 2


const nombreForm2 = document.getElementById("nombre");
const apellidoForm2 = document.getElementById("apellido");
const correo = document.getElementById("correo");
const expRegularForm2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

const cantidad = document.getElementById("cantidad");

const categoria = getElementById("categorias").selectedIndex;

const botonResumen = document.getElementById("resumen");
const botonBorrar = document.getElementById("borrar");


function validarNombre() {
    if (nombre.value.length < 3) {
        document.getElementById("errorNombre").innerHTML = "El nombre no es válido";
    } else {
        document.getElementById("errorNombre").innerHTML = "El nombre es correcto";
    }
}

function validarApellido() {
    if (apellido.value.length < 3) {
        document.getElementById("errorApellido").innerHTML = "El apellido no es válido";
    } else {
        document.getElementById("errorApellido").innerHTML = "El apellido es correcto";
    }
}

function validarEmail() {
    if (!expRegular.test(email.value)) {
        document.getElementById("errorCorreo").innerHTML = "El email no es válido";
    } else {
        document.getElementById("errorCorreo").innerHTML = "El email es correcto";
    }
}

function validarCategoria() {

    if (categoria == null || categoria == 0) {
        document.getElementById("errorCategoria").innerHTML = "Seleccionar una categoria por favor";
    } else {
        document.getElementById("errorCategoria").innerHTML = "La categoria seleccionada esta bien";
    }

}

function validarCantidad() {

    if (cantidad == null || cantidad == 0) {
        document.getElementById("errorCantidad").innerHTML = "La cantidad es incorrecta";
    } else {
        document.getElementById("errorCantidad").innerHTML = "La cantidad es correcta";
    }

}

function calculo() {
    if (categoria == 1) {
        const totalPagar = cantidad * 0.8;
        return document.getElementById("totalPagar");
    } else {
        if (categoria == 2) {
            const totalPagar = cantidad * 0.5;
            return document.getElementById("totalPagar");
        } else {
            const totalPagar = cantidad * 0.1;
            return document.getElementById("totalPagar");
        }
    }

}

botonBorrar.addEventListener("click", validarNombre);
botonBorrar.addEventListener("click", validarApellido);
botonBorrar.addEventListener("click", validarEmail);
botonBorrar.addEventListener("click", validarCategoria);


botonEnviar.addEventListener("click", calculo);

