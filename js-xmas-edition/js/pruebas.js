function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
      validarNombre("@") === "Este campo debe contener sólo caracteres válidos",
      "Validar nombre no validó que el nombre tenga caracteres válidos",
  )

  console.assert(
      validarNombre("Marcos") === "",
      'Validar nombre falló con un nombre válido'
  )
}

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === "Debe seleccionar una opción",
        'Validar ciudad no validó que se haya seleccionado una opción',
    );

    console.assert(
        validarCiudad("San Juan") === "",
        "Validar ciudad falló con una ciudad válida",
    )
}

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 
        'Este campo debe tener menos de 100 caracteres',
        'Validar descripción regalo no validó que el campo tenga menos de 100 caracteres',
    );

    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'Validar descripción regalo no validó  que el campo tenga al menos 1 caracter',
    );

    console.assert(
        validarDescripcionRegalo('*') === 'El campo descripción-regalo sólo puede tener números y letras',
        'Validar descripción-regalo no validó que el campo descrpción-regalo contenga sólo números y letras', 
    )

    console.assert(
        validarDescripcionRegalo("regalo") === "",
        'Validar descripción regalo falló al ingresar texto válido',
    )
}

probarValidarNombre();
