let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="nav-responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("tailwind");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("react");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

//detecta el scroll para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}


//Info usuarios por ID API
let foto = document.getElementById('foto');
let nombre = document.getElementById('nombre');
let nombreLogo = document.getElementById('nombreLogo');
let nombreAbout = document.getElementById('nombreAbout');
let cumpleaños = document.getElementById('cumpleaños');
let edad = document.getElementById('edad');
let telefono = document.getElementById('telefono');
let email = document.getElementById('email');
let ciudad = document.getElementById('ciudad');
let ciudadContact = document.getElementById('ciudadContact');
let telefonoContact = document.getElementById('telefonoContact');
let emailContact = document.getElementById('emailContact');


const generarUsuario = async () => {
    //consultar a la API
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];


    foto.src = datos.picture.large;
    nombre.innerHTML =  datos.name.title+". "+datos.name.first+" "+datos.name.last;
    nombreLogo.innerHTML =  datos.name.first+" "+datos.name.last;
    nombreAbout.innerHTML =  datos.name.first+" "+datos.name.last;
    cumpleaños.innerHTML = datos.dob.date;
    edad.innerHTML = datos.dob.age;
    telefono.innerHTML = datos.phone;
    email.innerHTML = datos.email;
    ciudad.innerHTML = datos.location.country+" , "+datos.location.state+" , "+datos.location.city;
    ciudadContact.innerHTML = datos.location.country+" , "+datos.location.state+" , "+datos.location.city;
    telefonoContact.innerHTML = datos.phone;
    emailContact.innerHTML = datos.email;
}


//crear un evento
document.addEventListener('DOMContentLoaded', generarUsuario);


