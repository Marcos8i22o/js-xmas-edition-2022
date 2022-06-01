/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) 
inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente 
el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonAgregarIntegrante = document.querySelector('#boton-agregar-integrante');
const $botonQuitarIntegrante = document.querySelector('#boton-quitar-integrante')
const $botonCalcular = document.querySelector('#boton-calcular');

$botonAgregarIntegrante.onclick = function(){
    agregarIntegrante();
}

$botonQuitarIntegrante.onclick = function(){
    const $input = document.querySelector('.sueldos-anuales')
    const $label = document.querySelector('label');
    const $hr = document.querySelector('hr');

    $input.remove();
    $label.remove();
    $hr.remove();
}




$botonCalcular.onclick = function(){
    const nodeListSalarios = document.querySelectorAll('.sueldos-anuales');
    const salarios = {};
    
    salarios.mayorSalarioAnual = calcularMayorSalario(nodeListSalarios);
    salarios.menorSalarioAnual = calcularMenorSalario(nodeListSalarios);
    salarios.salarioAnualPromedio = calcularSalarioAnualPromedio(nodeListSalarios);
    salarios.salarioMensualPromedio = calcularSalarioMensualPromedio(nodeListSalarios);
    
    mostrarResultados(salarios);
}

function agregarIntegrante(){
    const $divIntegrantes = document.querySelector('#integrantes');

    const $labelIntegrante = document.createElement('label');
    $labelIntegrante.textContent = "Ingrese su sueldo anual: ";

    const $inputIntegrante = document.createElement('input');
    $inputIntegrante.type = "number";
    $inputIntegrante.className = "sueldos-anuales";

    const $hr = document.createElement('hr');

    $divIntegrantes.appendChild($labelIntegrante);
    $divIntegrantes.appendChild($inputIntegrante);
    $divIntegrantes.appendChild($hr);
}

function calcularMayorSalario(salarios){
    let maximo = 0;

    salarios.forEach(function(salario) {
        const salarioIntegrante = Number(salario.value);
        if(salarioIntegrante > maximo && salarioIntegrante !== ""){
            maximo = salarioIntegrante;
        }
    });
   
    return maximo;
}

function calcularMenorSalario(salarios){
    let minimo = Infinity;

    salarios.forEach(function(salario){
        const salarioIntegrante = Number(salario.value);
        if(salarioIntegrante < minimo && salario !== ""){
            minimo = salarioIntegrante;
        }
    })
    
    return minimo;
}

function calcularSalarioAnualPromedio(salarios){
    let acumulador = 0;

    salarios.forEach(function(salario){
        const salarioIntegrante = Number(salario.value);
        if(salarioIntegrante !== ""){
            acumulador += salarioIntegrante;
        }
    })
  
    return acumulador / salarios.length;
}

function calcularSalarioMensualPromedio(salarios){
    const MESES_EN_EL_ANIO = 12;
    let acumulador = 0;

    salarios.forEach(function(salario){
        const salarioIntegrante = Number(salario.value);
        if(salarioIntegrante !== ""){
            const resultado = salarioIntegrante / MESES_EN_EL_ANIO;
            acumulador += resultado;
        }
    })
    
    return acumulador / salarios.length;
}

function mostrarResultados(salarios){
    const $mayorSalarioAnual = document.querySelector('#mayor-salario-anual');
    const $menorSalarioAnual = document.querySelector('#menor-salario-anual');
    const $salarioAnualPromedio = document.querySelector('#salario-anual-promedio');
    const $salarioMensualPromedio = document.querySelector('#salario-mensual-promedio');

    $mayorSalarioAnual.textContent = `El mayor salario anual es de: ${salarios.mayorSalarioAnual}`;
    $menorSalarioAnual.textContent = `El menor salario anual es de: ${salarios.menorSalarioAnual}`;
    $salarioAnualPromedio.textContent = `El salario anual promedio es de: ${salarios.salarioAnualPromedio}`;
    $salarioMensualPromedio.textContent = `El salario mensual promedio es de: ${salarios.salarioMensualPromedio}`;
}
