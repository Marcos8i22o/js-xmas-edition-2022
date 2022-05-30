function probarValidarCantidadIntegrantes () {
    console.assert(
        validarCantidadIntegrantes(-1) === "Ingrese un número válido",
        "Validar cantidadIntegrantes no validó que se haya ingresado un número válido",
    )
}

probarValidarCantidadIntegrantes();
