document.write("juego de Dados <br>")

//Jugadores
const jugadorUno=(prompt ("Escriba su nombre")); 
const jugadorDos=(prompt ("Escriba su nombre")); 

//Números menores de 7 para simular las cara del dado

let numeroJugadorUno = Math.floor(Math.random()*7);
let numeroJugadorDos = Math.floor(Math.random()*7);


//Resultado Jugadores 
alert((jugadorUno) + " " + "su numero es:" + " " + (numeroJugadorUno));
alert(jugadorDos + " " + "su numero es:" + " " + numeroJugadorDos);

//Turnos
let primerTurno="";
let segundoTurno="";

//el número más alto empieza a jugar primero
if (numeroJugadorUno>numeroJugadorDos){
    alert((jugadorUno)+ " " + "jugas primero");
    alert((jugadorDos)+ " " + "jugas segundo");
    primerTurno=jugadorUno;
    segundoTurno=jugadorDos;
}else{
   alert((jugadorUno)+ " " + "jugas segundo");
   alert((jugadorDos)+ " " + "jugas primero");
   primerTurno=jugadorDos;
   segundoTurno=jugadorUno;
}

//Lanzamiento y Dado    

confirm((primerTurno) + "hace click en ACEPTAR para tirar el dado");
let dadoPrimerJugador=Math.floor(Math.random()*7);
alert((primerTurno) + " Tu número es: " + (dadoPrimerJugador));

confirm((segundoTurno) + "hace click en ACEPTAR para tirar el dado");
let dadoSegundoJugador=Math.floor(Math.random()*7);
alert((segundoTurno) + " Tu número es: " + (dadoSegundoJugador));




//Puestos 
let primerLugar="";
let segundoLugar="";


//Comparamos los números para ver quien es el ganador

if (dadoPrimerJugador>dadoSegundoJugador){
    primerLugar=jugadorUno
    segundoLugar=jugadorDos
}else{
    primerLugar=jugadorDos
    segundoLugar=jugadorUno
}

//Resultados
alert("1er Lugar" +" " + (primerLugar));
alert("2do Lugar" +" " + (segundoLugar));

//Ganador
alert("El GANADRO es:" + " " + (primerLugar));