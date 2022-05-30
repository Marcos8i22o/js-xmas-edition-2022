function validarCantidadIntegrantes(cantidadIntegrantes) {
    if(cantidadIntegrantes < 0) {
        return "Ingrese un número válido";
    }else{
        return ""
    }
}

function validarEdades(nodeListEdades){
    let resultado = "";

    nodeListEdades.forEach(function(edad){
        if(Number(edad.value) < 1){
            resultado = "Ingrese una edad válida";
        }
    })

    return resultado; 
}
