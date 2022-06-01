function probarValidarSalarios(){
    console.assert(
        validarSalarios([{value: -1}]) === "Ingrese un salario válido",
        "Validar salarios no validó que el salario ingresado sea válido",
    )
}

probarValidarSalarios();
