

//document.getElementById("empezar").addEventListener("click", function () {
$("#empezar").click(function () {
	elegirDificultad();
});

//document.getElementById("reiniciar").addEventListener("click", function () {
$("#reiniciar").click(function () {
	recargar();
});


var json = JSON.parse(dificultades);
//Constantes extraídas del archivo json.
const DIFICULTAD_FACIL = json[0].cartas;
const DIFICULTAD_MEDIA = json[1].cartas;
const DIFICULTAD_MAXIMA = json[2].cartas;
const SEGUNDOS_FACIL = json[0].tiempo - 1;
const SEGUNDOS_MEDIA = json[1].tiempo - 1;
const SEGUNDOS_MAXIMA = json[2].tiempo - 1;
const TIEMPO_GIRAR = 300;
//Variables globales utilizadas.
var dificultad_actual;
//Array de las cartas en el tablero
var array_tablero = [];
//Array de IDs que se usará para asignar los colores e IDs
var arrayID = [];
//3 Variables para tener en cuenta las 3 cartas que se seleccionan
var esperar = 0;
var seleccionada1 = "";
var seleccionada2 = "";
var seleccionada3 = "";
//Si está en 1 el juego ha finalizado.
var finalizado = 0;
//Variables para el cronómetro.
var contador;
var pararReloj = 0;

//Variables del jugador y de la lista de ganadores.
var segundos = 0;
var nickname = "";
var ganadores = [];
var resultado = "";


function elegirDificultad() {
	//Se coge el valor de los radio button.
	var dificultad = document.getElementsByName("dificultad");
	//Y ya se recibe el nombre de la textbox
	//nickname = document.getElementById("nickname").value;
	nickname = $("nickname").value;
	//Si no hay nombre, no continúa.
	if (nickname != "") {				//Si lo hay, se asigna la dificultad actual a la que esté seleccionada.
		if (dificultad[0].checked) {
			dificultad_actual = DIFICULTAD_FACIL;
			segundos = SEGUNDOS_FACIL;
			inicializar();			//Y se inicializa.
		} else if (dificultad[1].checked) {
			dificultad_actual = DIFICULTAD_MEDIA;
			segundos = SEGUNDOS_MEDIA;
			inicializar();
		} else if (dificultad[2].checked) {
			dificultad_actual = DIFICULTAD_MAXIMA;
			segundos = SEGUNDOS_MAXIMA;
			inicializar();
		} else {
			alert("Selecciona una dificutad");
		}
	} else {
		alert("Por favor introduce un nickname");
	}
}

//Esta función llevará el cronometro, y cuando llegue a 0 acabará el juego.
function cuentaAtras() {
	if (finalizado == 0) {
		document.getElementById("tiempo").innerHTML = "Tiempo Restante: " + segundos;
		if (segundos == 0) {
			/*		alert("Se ha acabado el tiempo, has perdido.");    //xtoni  Aturat el compte enrere.
					finalizado = 1;
					clearInterval(contador);
					mostrarPuntuacion(); */
		} else {
			segundos--;
		}
	} else {
		clearInterval(contador);
	}
}

//Esta funció llenará el array de ID (Cada ID se repetirá 3 veces) 
//El número de ID dependerá de la dificultad actual.
function llenarArray() {
	for (var i = 0; i < dificultad_actual / 3; i++) {
		for (var y = 0; y < 3; y++) {
			arrayID.push(i);
		}
	}
}

//Esta función inicializará el cronometro y creará todas las cartas.
function inicializar() {
	//Inicia el cronometro.
	contador = setInterval(cuentaAtras, 1000);

	//Crea las ID
	llenarArray();
	//document.getElementById("menu").style.visibility = 'hidden';
	$('#menu').css("visibility", "hidden");
	//document.getElementById("juego").style.visibility = "visible";
	$('#juego').css("visibility", "visible");
	//Creará las cartas que sean necesarias, y les añadirá a cada una un ID de la lista de IDs.
	for (var i = 0; i < dificultad_actual; i++) {
		var carta = document.createElement("div");
		carta.setAttribute("class", "carta");
		var index = Math.floor(Math.random() * arrayID.length);
		carta.setAttribute("id", arrayID[index]);
		//Una vez el ID se haya cogido, se eliminará de la lista.
		arrayID.splice(index, 1);
		//Y añade la carta con ID y con todo al array de cartas.
		array_tablero.push(carta);
		//A la vez que le pone el event listener para que haga algo cuando se le clique.

		carta.addEventListener("click", function () {
			girar(this.getAttribute("id"), this);
		});
	}
	//Esta función inicializa todas las cartas con el color blanco, o sea: Sin estar giradas.
	inicializarBlanco();
	mostrarporPantalla();
}

//Muestra por pantalla todas las cartas.
function mostrarporPantalla() {
	for (var i = 0; i < dificultad_actual; i++) {
		//document.getElementById("juego").appendChild(array_tablero[i]);
		$("#juego").append(array_tablero[i]);
	}
}

//Gira las cartas.
function girar(idcarta, x) {
	//Si el juego NO ha terminado, podrá girarse la carta.
	if (finalizado == 0 && esperar == 0) {
		//Si la carta NO es blanca no se puede girar, ya que ya ha sido resuelta o ya la tienes seleccionada.
		if (x.style.backgroundColor != "white") {
			console.log("No puedes seleccionar una carta que ya ha sido averiguada");
		} else {
			asignarColores(x, idcarta);   //Si la carta sí se puede girar se le pondrá el color correspondiente.
			if (seleccionada1 == "") {	//Se llenan los huecos de las 3 cartas que se deben seleccionar.
				seleccionada1 = x;
			} else if (seleccionada2 == "") {
				seleccionada2 = x;
			} else if (seleccionada3 == "") {
				seleccionada3 = x;
				esperar = 1;
				setTimeout(function () {
					comprobarIguales();		//Una vez se hayan seleccionado tres cartas se comprobará si son iguales o no
				}, TIEMPO_GIRAR);			//Y se esperará un rato para dejar ver al usuario que cartas son.
			}

		}
	}
}

function comprobarIguales() {	//Esta función comprobará el color de las 3 cartas y decidirá si son iguales o no.

	if (seleccionada1 != "" && seleccionada2 != "" && seleccionada3 != "") {
		if (seleccionada1.style.backgroundColor == seleccionada2.style.backgroundColor &&
			seleccionada1.style.backgroundColor == seleccionada3.style.backgroundColor) {
			//Si son iguales, se quedan giradas y se comprueba si se ha ganado ya.
			comprobarVictoria();
		} else {
			//Si no son iguales, vuelven a quedarse boca abajo.
			seleccionada1.style.backgroundColor = "white";
			seleccionada2.style.backgroundColor = "white";
			seleccionada3.style.backgroundColor = "white";

		}
		//Y se reinician las selecciones en cualquiera de los dos casos.
		esperar = 0;
		seleccionada1 = "";
		seleccionada2 = "";
		seleccionada3 = "";
	}
}

function asignarColores(x, idcarta) {		//Esta función asigna a la carta que recibe un color dependiendo de su ID
	console.log(idcarta);
	if (idcarta == 0) {
		x.style.backgroundColor = "lightblue";
	} else if (idcarta == 1) {
		x.style.backgroundColor = "lightgreen";
	} else if (idcarta == 2) {
		x.style.backgroundColor = "pink";
	} else if (idcarta == 3) {
		x.style.backgroundColor = "orange";
	} else if (idcarta == 4) {
		x.style.backgroundColor = "yellow";
	} else if (idcarta == 5) {
		x.style.backgroundColor = "red";
	} else if (idcarta == 6) {
		x.style.backgroundColor = "purple";
	} else if (idcarta == 7) {
		x.style.backgroundColor = "gray";
	}
}

//Asigna todas las cartas el color blanco por defecto.
function inicializarBlanco() {
	for (var i = 0; i < array_tablero.length; i++) {
		array_tablero[i].style.backgroundColor = "white";
	}
}

//Comprueba que no quede ninguna carta boca abajo. Si no la hay el juego termina.
function comprobarVictoria() {
	finalizado = 1;
	for (var i = 0; i < array_tablero.length; i++) {
		if (array_tablero[i].style.backgroundColor == "white") {
			finalizado = 0;
		}
	}
	if (finalizado == 1) {
		victoria();
	}
}

//Esta función solo se hace cuando se gana el juego, y añade al usuario a la lista de ganadores.
function victoria() {
	ganadores.push([nickname, segundos * 100]);
	//Ordenamos el array de ganadores
	ganadores = ganadores.sort(function (a, b) {
		return b[1] - a[1];
	});
	mostrarPuntuacion();

}

//Pantalla de puntuaciones.
function mostrarPuntuacion() {
	//Se esconde el juego y se muestra la tabla de puntuaciones
	document.getElementById("juego").style.visibility = 'hidden';
	document.getElementById("ranking").style.visibility = 'visible';
	//Se reinicia la tabla de puntuaciones.
	document.getElementById("resultado").innerHTML = "";
	//Se hace un bucle pasando por todos los ganadores y se imprimen por pantalla.
	for (var i = 0; i < ganadores.length; i++) {
		var resultado = document.getElementById("resultado").innerHTML;
		document.getElementById("resultado").innerHTML = resultado + (i + 1) + ". Nickname: " + ganadores[i][0] + " Puntuacion: " + ganadores[i][1] + "<br>";
	}
}

//El juego se reinicia.
function recargar() {
	document.getElementById("menu").style.visibility = 'visible';
	document.getElementById("ranking").style.visibility = 'hidden';
	reiniciarVariables();
}


function reiniciarVariables() {
	//Se ponen todas las variables a su estado por defecto para poder jugar otra partida.
	document.getElementById("juego").innerHTML = "";
	dificultad_actual;
	array_tablero = [];
	arrayID = [];
	nickname = [];
	seleccionada1 = "";
	seleccionada2 = "";
	seleccionada3 = "";
	finalizado = 0;
	segundos = 0;
	contador;
	pararReloj = 0;

}