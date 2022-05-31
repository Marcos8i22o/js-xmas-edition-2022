/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $formulario = document.querySelector("form");
const $botonCalcular = document.querySelector("#calcular");
const $totalIntegrantes = document.querySelector("#total-integrantes");

const errores = {};

crearInputCantidadIntegrantes($formulario, $totalIntegrantes);
crearBotonAceptar($formulario);

const $botonAceptar = document.querySelector("#boton-aceptar");
const $botonResetear = document.querySelector("#boton-resetear");
const $resultados = document.querySelector("#resultados");
const $errores = document.querySelector("#errores");

function crearInputCantidadIntegrantes($formulario, $totalIntegrantes) {
  const $label = document.createElement("label");
  $label.textContent = "Ingrese la cantidad de integrantes de la familia: ";

  const $cantidadIntegrantes = document.createElement("input");
  $cantidadIntegrantes.type = "number";
  $cantidadIntegrantes.id = "cantidad-de-integrantes";

  $totalIntegrantes.appendChild($label);
  $totalIntegrantes.appendChild($cantidadIntegrantes);

  $formulario.appendChild($totalIntegrantes);
}

function crearBotonAceptar($form) {
  const $totalIntegrantes = document.querySelector("#total-integrantes");

  const $boton = document.createElement("button");
  $boton.type = "button";
  $boton.id = "boton-aceptar";
  $boton.textContent = "Aceptar";

  $totalIntegrantes.appendChild($boton);
  $form.appendChild($totalIntegrantes);
}

function crearInputsEdades($formulario, cantidadIntegrantes) {
  for (let i = 0; i < cantidadIntegrantes; i++) {
    const $div = document.createElement("div");
    $div.className = "edad";

    const $etiquetaIntegrante = document.createElement("label");
    $etiquetaIntegrante.textContent = `Integrante nº: ${i + 1} `;

    const $inputEdad = document.createElement("input");
    $inputEdad.type = "number";
    $inputEdad.className = "edades-integrantes";

    $div.appendChild($etiquetaIntegrante);
    $div.appendChild($inputEdad);

    $formulario.appendChild($div);
  }
}

$botonAceptar.onclick = function () {
  const cantidadIntegrantes = Number(
    document.querySelector("#cantidad-de-integrantes").value
  );

  errores.errorCantidadIntegrantes =
    validarCantidadIntegrantes(cantidadIntegrantes);
  const $cantidadIntegrantes = document.querySelector(
    "#cantidad-de-integrantes"
  );


  const esExito = manejarErrores(errores) === false;

  if (esExito) {
    crearInputsEdades($formulario, cantidadIntegrantes);
    $cantidadIntegrantes.className = "";
    borrarErrores();
  } else {
    $cantidadIntegrantes.className = "error";
  }

};

$botonCalcular.onclick = function () {
  const nodeListEdades = document.querySelectorAll(".edades-integrantes");
  const resultados = {};

  resultados.mayorEdad = calcularMayorEdad(nodeListEdades);
  resultados.menorEdad = calcularMenorEdad(nodeListEdades);
  resultados.promedioEdades = calcularPromedioEdades(nodeListEdades);

  borrarErrores();
  errores.errorEdades = validarEdades(nodeListEdades);
  if (errores.errorEdades === "") {
    mostrarResultados(resultados, $resultados);
  } else {
    manejarErrores(errores)
  }
};

$botonResetear.onclick = function () {
  resetear();
};

function calcularMayorEdad(edades) {
  let mayorEdad = 0;

  edades.forEach(function (edad) {
    let edadIntegrante = Number(edad.value);

    if (edadIntegrante > mayorEdad) {
      mayorEdad = edadIntegrante;
    }
  });

  return mayorEdad;
}

function calcularMenorEdad(edades) {
  let menorEdad = 200;

  edades.forEach(function (edad) {
    let edadIntegrante = Number(edad.value);

    if (edadIntegrante < menorEdad) {
      menorEdad = edadIntegrante;
    }
  });

  return menorEdad;
}

function calcularPromedioEdades(edades) {
  let acumulador = 0;

  edades.forEach(function (edad) {
    acumulador += Number(edad.value);
  });

  return acumulador / edades.length;
}

function mostrarResultados(resultados, $resultados) {
  const $menorIntegrante = document.querySelector("#menor-integrante");
  const $mayorIntegrante = document.querySelector("#mayor-integrante");
  const $edadPromedio = document.querySelector("#edad-promedio");

  $resultados.style.display = "";

  $menorIntegrante.textContent = `El menor de la familia tiene: ${resultados.menorEdad} años`;
  $mayorIntegrante.textContent = `El mayor de la familia tiene: ${resultados.mayorEdad} años`;
  $edadPromedio.textContent = `El promedio de edades es: ${resultados.promedioEdades} años`;
}

function resetear() {

  borrarResultados();
  borrarCantidadIntegrantes();
  borrarIntegrantes();
  borrarErrores();
  borrarBordeInput();

}

function borrarErrores() {
  const $errores = document.querySelectorAll('li');

  $errores.forEach(function(error){
    error.remove();
  })

}

function borrarCantidadIntegrantes(){
  document.querySelector("#cantidad-de-integrantes").value = "";
}

function borrarIntegrantes(){
  const nodeListDivsEdades = document.querySelectorAll(".edad");

  for (let i = 0; i < nodeListDivsEdades.length; i++) {
    nodeListDivsEdades[i].remove();
  }
}

function borrarResultados(){
 const $resultados = document.querySelectorAll('em');
 const $lineasDivisorias = document.querySelectorAll('hr');

 for(let i = 0; i < $resultados.length; i++){
   $resultados[i].remove()
   $lineasDivisorias[i].remove();
 }
 
}



function borrarBordeInput(){
  const inputs = document.querySelectorAll('input');
  inputs.forEach(function(input){
    input.className = "";
  })
}

function manejarErrores(errores) {
  let hayError = false;

  const keys = Object.keys(errores);
  keys.forEach(function (key) {
    const error = errores[key];

    if (error) {
      borrarErrores();
      const $error = document.createElement("li");
      $error.textContent = error;

      $errores.appendChild($error);
      
      hayError = true;
    }
  });
  
  return hayError;
}
