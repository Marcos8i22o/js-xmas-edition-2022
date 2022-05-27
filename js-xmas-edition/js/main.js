<<<<<<< Updated upstream
=======
function validarNombre(nombre) {
  if (nombre === "") {
    return "Este campo debe tener al menos 1 caracter";
  }

  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }

  const contieneSoloLetras = /^[A-z]+$/.test(nombre);

  if (!contieneSoloLetras) {
    return "Este campo debe contener sólo caracteres válidos";
  }

  return "";
}

function validarCiudad(ciudad) {
  if (ciudad === "") {
    return "Debe seleccionar una opción";
  }

  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo === "") {
    return "Este campo debe tener al menos 1 caracter";
  }

  if (descripcionRegalo.length >= 100) {
    return "Este campo debe tener menos de 100 caracteres";
  }

  if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
    return "El campo descripción-regalo sólo puede tener números y letras";
  }

  return "";
}

function validarFormulario(event) {
  const $form = document.querySelector("#carta-a-santa");

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcionRegalo,
  };

  const esExito = manejarErrores(errores) === 0;

  if (esExito) {
    $form.className = "oculto";
    document.querySelector("#exito").className = "";
    redireccionarPagina();
  }
  event.preventDefault();
}

function manejarErrores(errores) {
  const keys = Object.keys(errores);
  const $errores = document.querySelector("#errores");

  let cantidadErrores = 0;

  keys.forEach(function (key) {
    const error = errores[key];

    if (error) {
      $form[key].className = "error";
      cantidadErrores++;

      const $error = document.createElement("li");
      $error.innerText = error;

      $errores.appendChild($error);
    } else {
      $form[key].className = "";
      //$errores[key].remove();
    }
  });

  return cantidadErrores;
}


function redireccionarPagina() {
  const listaDeDeseosWeb = "wishlist.html";

  setTimeout(function () {
    window.location.href = listaDeDeseosWeb;
  }, 5000);
}


const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
>>>>>>> Stashed changes
