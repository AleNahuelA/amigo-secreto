// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombre =[]; 
let amigoSorteado = '';

const amigos = document.getElementById("listaAmigos") ; //Lista

console.log(listaNombre.length);
console.log(listaNombre);
function agregarAmigo(){
    resultado.innerHTML= '';
   
   nombreUsuario = document.getElementById('amigo').value;
   
    if(nombreUsuario == ''){
        alert('No es un nombre valido') 
        return
    }

    if(listaNombre.includes(nombreUsuario)){
        alert(`el amigo ${nombreUsuario} ya esta en la lista`);
        nombreRepetido = listaNombre.indexOf(nombreUsuario) //Encuentra la posicion
        listaNombre.slice(nombreRepetido, 1); // Elimina elemento especifico
        limpiarCaja();
    }else{
        listaNombre.push(nombreUsuario);
        mostrarAmigos();
        console.log(listaNombre);
        limpiarCaja();
    }
}

function mostrarAmigos(){
    listaAmigos.innerHTML="";

    for (let i = 0; i < listaNombre.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = listaNombre[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    //Comprobar si la lista esta vacia
    if(listaNombre.length == 0){
        alert('Debes agregar mas amigos para poder sortear');
    }else{

    amigoSorteado = Math.floor(Math.random()*listaNombre.length); //Genera un numero para indicar en que posicion esta el ganador
    nombreSorteado = listaNombre[amigoSorteado]; //Tiene el nombre del amigo elegido

    document.querySelector('#resultado').value = nombreSorteado;
    resultado.innerHTML= nombreSorteado;
    
    }
    empezarDeNuevo();
    
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function empezarDeNuevo(){
    listaNombre = [];
    listaAmigos.innerHTML = "";
}


//agregarAmigo();
//sortearAmigo();
//mostrarAmigos();