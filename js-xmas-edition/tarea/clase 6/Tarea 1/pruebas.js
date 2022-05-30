function probarValidarCantidadIntegrantes () {

    console.assert(
        validarCantidadIntegrantes(/^[1-9]+$/.test ("")) === "Ingrese un número válido",
        "Validar cantidadIntegrantes no validó que el número sea válido",
    )

    console.assert(
        validarCantidadIntegrantes(3) === "",
        "Validar cantidadIntegrantes no validó que el valor ingresado es correcto",
    )
}

function probarValidarEdades(){
    console.assert(
        validarEdades([{value: 0}]) === "Ingrese una edad válida",
        "Validar edades no validó que la edad ingresada sea válida",
    )

  
    console.assert(
        validarEdades([{value: 2}]) === "",
        "Validar edades no validó que la edad ingresada es correcta",
    )
}

probarValidarCantidadIntegrantes();
probarValidarEdades();
