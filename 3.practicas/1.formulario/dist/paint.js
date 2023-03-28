const cardsEstudiantes = document.querySelector("#cardsEstudiantes");
const addStudent = (name, lastName, mail, tele, msn) =>{
    let person = {
        pname: name,
        plastName: lastName,
        pmail: mail,
        ptele: tele,
        pmsn: msn
    }

    let text = `¿Esta segur@ ${person.pname} ${person.plastName} de enviar la peticion?`;
    modalAlert(text,"aceptar",person);

}

function modalAlert(cadena, tipo, persona){
    const alerta = document.createElement("div");
    const texto = document.createElement("p");
    const btnCerrar = document.createElement("input");
    alerta.setAttribute("id", "alerta");
    alerta.setAttribute("class", "alerta");
    texto.setAttribute("class", "textAlert");
    texto.innerHTML = `<strong>${cadena}</strong>`;
    btnCerrar.setAttribute("type", "button");
    btnCerrar.setAttribute("class", "btnAlerta");
    btnCerrar.setAttribute("value", "Cerrar");
    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);

    if(tipo==="aceptar"){
        const btnEnviar = document.createElement("input");
        btnEnviar.setAttribute("type", "button");
        btnEnviar.setAttribute("class", "btnAlerta");
        btnEnviar.setAttribute("value", "Enviar");
        alerta.appendChild(btnEnviar);
        document.body.appendChild(alerta);
        btnEnviar.onclick = function(){
            paintCard(persona, "estudiante");
            document.getElementById("alerta").remove();
        }
    }else{
        document.body.appendChild(alerta);
    }

    btnCerrar.onclick = function(){
        document.getElementById("alerta").remove();
    }
}

const paintCard = (datos, tipo) =>{
    tipo = tipo.toUpperCase();
    const fragmento = document.createDocumentFragment();
    const temEstudiante = document.getElementById('templateEstudiante').content;
    if(tipo==="ESTUDIANTE"){
        let tempTemplate = temEstudiante.cloneNode(true);
        tempTemplate.querySelector('.title-card').innerHTML = `DATOS DEL PQR <hr>`;
        tempTemplate.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        tempTemplate.querySelector('.text-mail').innerHTML = `Correo Electronico: ${datos.pmail}`;
        tempTemplate.querySelector('.text-telefono').innerHTML = `Telefono: ${datos.ptele}`;
        tempTemplate.querySelector('.text-msn').innerHTML = `Mensaje: ${datos.pmsn}`;
        fragmento.appendChild(tempTemplate);
        cardsEstudiantes.appendChild(fragmento);

        return true;
    }

    return false;
    
}

export {addStudent,modalAlert}