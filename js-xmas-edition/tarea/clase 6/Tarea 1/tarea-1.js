/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $formulario = document.querySelector('form');
const $botonCalcular = document.querySelector('#calcular');
const $totalIntegrantes = document.querySelector('#total-integrantes');

crearInputCantidadIntegrantes($formulario,$totalIntegrantes);
crearBotonAceptar($formulario);
const $botonAceptar = document.querySelector('#boton-aceptar');
const $botonResetear = document.querySelector('#boton-resetear');
const $resultados = document.querySelector('#resultados');


function crearInputCantidadIntegrantes($formulario,$totalIntegrantes){

    const $label = document.createElement('label');
    $label.textContent = "Ingrese la cantidad de integrantes de la familia: ";
    
    const $cantidadIntegrantes = document.createElement('input');
    $cantidadIntegrantes.type = "number";
    $cantidadIntegrantes.id = "cantidad-de-integrantes";

    $totalIntegrantes.appendChild($label);
    $totalIntegrantes.appendChild($cantidadIntegrantes);

    $formulario.appendChild($totalIntegrantes);
}

function crearBotonAceptar($form){
    const $totalIntegrantes = document.querySelector('#total-integrantes');
    
    const $boton = document.createElement('button');
    $boton.type = "button";
    $boton.id = "boton-aceptar";
    $boton.textContent = "Aceptar";

    $totalIntegrantes.appendChild($boton);
    $form.appendChild($totalIntegrantes);
}

function crearInputsEdades($formulario,cantidadIntegrantes){
    for(let i = 0; i < cantidadIntegrantes; i++){
        
        const $div = document.createElement('div');
        $div.className = "edad";
        
        const $label = document.createElement('label');
        $label.textContent = `Integrante nº: ${i+1} `;

        const $inputEdad = document.createElement('input');
        $inputEdad.type = "number";
        $inputEdad.className = "edades-integrantes";

        $div.appendChild($label);
        $div.appendChild($inputEdad);

        $formulario.appendChild($div);
    }
}

$botonAceptar.onclick = function() {
    const cantidadIntegrantes = Number(document.querySelector('#cantidad-de-integrantes').value);
    crearInputsEdades($formulario,cantidadIntegrantes);
}

$botonCalcular.onclick = function() {
    const nodeListEdades = document.querySelectorAll('.edades-integrantes');
    const mayorEdad = calcularMayorEdad(nodeListEdades);
    const menorEdad = calcularMenorEdad(nodeListEdades);
    const promedioEdades = calcularPromedioEdades(nodeListEdades);
    
    mostrarResultados(mayorEdad,menorEdad,promedioEdades,$resultados);
}

$botonResetear.onclick = function(){
    resetear($resultados);
}

function calcularMayorEdad (edades) {
    let mayorEdad = 0;
    for(let i = 0; i < edades.length; i++){
        let edadIntegrante = Number(edades[i].value);
        
        if(edadIntegrante > mayorEdad){
            mayorEdad = edadIntegrante;
        }
    }

    return mayorEdad;
}

function calcularMenorEdad (edades) {
    let menorEdad = Number(edades[0].value);

    for(let i = 1; i < edades.length; i++){
        let edadIntegrante = Number(edades[i].value);
        
        if(edadIntegrante < menorEdad){
            menorEdad = edadIntegrante;
        }
    }

    return menorEdad;
}

function calcularPromedioEdades (edades) {
    let acumulador = 0;

    for(let i = 0; i < edades.length; i++){
        acumulador += Number(edades[i].value);
    }

    return acumulador / edades.length;
}

function mostrarResultados(mayor,menor,prom,$resultados){
    const $menorIntegrante = document.querySelector('#menor-integrante');
    const $mayorIntegrante = document.querySelector('#mayor-integrante');
    const $edadPromedio = document.querySelector('#edad-promedio');

    $resultados.style.display = "";

    $menorIntegrante.textContent = `El menor de la familia tiene: ${menor} años`;
    $mayorIntegrante.textContent = `El mayor de la familia tiene: ${mayor} años`;
    $edadPromedio.textContent = `El promedio de edades es: ${prom} años`;
}

function resetear ($resultados) {
    const nodeListDivsEdades = document.querySelectorAll('.edad');

    for(let i = 0; i < nodeListDivsEdades.length; i++){
        nodeListDivsEdades[i].remove();
    }

    $resultados.remove();
    document.querySelector('#cantidad-de-integrantes').value = "";
     
}