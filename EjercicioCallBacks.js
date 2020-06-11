// Realizar los callbacks para poder mostrar como salida final los siguientes enunciados. 
// (Realizar los callbacks y las llamadas a ellos debajo de su respectivo enunciado.)

// 1.- Mi nombre es ${nombre}, tengo ${edad} años de edad, vivo en ${estado}, 
// trabajo en la empresa llamada ${empresa} con domicilio ${empresaDomicilio}.

let getPersona = (id, callback)  =>{

    let persona = personas.find((persona) =>{
        return persona._id == id;
    });

    if(!persona){
        callback("No existe esa persona", null)
    }else{
        callback(null, persona)
    }
}

let getEmpresaById = (persona, callback) =>{
    
    let empresa = empresas.find((empresa) => {
        return empresa._id == persona.idEmpresa;
    });
    if(!empresa){
        callback("No existe la empresa", null)
    }else{
        callback(null, {
            nombre : persona.nombre,
            edad: persona.edad,
            estado : persona.estado,
            empresaNombre : empresa.nombre,
            empresaDomicilio : empresa.domicilio             
        });
    }
}

getPersona(1, (err,persona) =>{
    if(err){
        return console.log(err);
    }
        getEmpresaById(persona, (err, datos) => {
            if(err){
                return console.log(err);
            }
            console.log(`* Mi nombre es ${datos.nombre}, tengo ${datos.edad} años de edad, vivo en ${datos.estado},trabajo en la empresa llamada ${datos.empresaNombre} con domicilio ${datos.empresaDomicilio}`);
        });
});


// 2.- En la empresa llamada ${empresa} llevo trabajando desde ${fechaContratacion}, 
// por lo tanto llevo ${anios} desde esa fecha y hasta ahora mi sueldo es de ${sueldo}.

getEmpresaSalario = (persona, callback) =>{

    let empresa = empresas.find((empresa) => {
        return empresa._id == persona.idEmpresa
    });
    if(!empresa){
        callback("No se encuentra la empresa", null)
    }else{
        var longitud = persona.fechaContratacion.length;
        var anios = new Date().getFullYear()- persona.fechaContratacion.substr(longitud-4, longitud);
        callback(null,{
            empresaNombre : empresa.nombre,
            fechaInicio : persona.fechaContratacion,
            sueldo : persona.salario,
            aniosLaborando: anios
        })
    }
}

getPersona(1, (err,persona) =>{
    if(err){
        return console.log(err);
    }
        getEmpresaSalario(persona, (err, datos) => {
            if(err){
                return console.log(err);
            }

            console.log(`* En la empresa llamada ${datos.empresaNombre} llevo trabajando desde ${datos.fechaInicio}, por lo tanto llevo ${datos.aniosLaborando} años desde esa fecha y hasta ahora mi sueldo es de ${datos.sueldo}`);
        });
});