function validarCantidadIntegrantes(cantidadIntegrantes) {
    const esValido = /^[1-9]+$/.test(cantidadIntegrantes);

    if(!esValido){
        return "Ingrese un número válido";
    }else{
        return "";
    }
    
}

function validarEdades(nodeListEdades){
    let resultado = "";

    nodeListEdades.forEach(function(edad){
        if(Number(edad.value) < 1){
            resultado = "Ingrese una edad válida";
            edad.className = "error"
        }else{
            edad.className = "";
        }
    })

    return resultado; 
}
