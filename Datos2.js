window.addEventListener("load", iniciarprograma)
Valor = 5

function iniciarprograma(){
	let datosColocados = document.getElementById("Rboton")
	let cambioTurno = document.getElementById("boton")


	datosColocados.addEventListener("click", acomodarDatos)
	cambioTurno.addEventListener("click" , cambioDeTurno)
	}




function cambioDeTurno(){


//Numeros

	TA.value = C2.innerHTML
	C2.innerHTML = C3.innerHTML
	C3.innerHTML = C4.innerHTML
	C4.innerHTML = C5.innerHTML
	Valor = Valor + 1
	C5.innerHTML = "#" + Valor


//Nombres

	TAN.value = N2.innerHTML
	N2.innerHTML = N3.innerHTML
	N3.innerHTML = N4.innerHTML
	N4.innerHTML = N5.innerHTML
	N5.innerHTML = ""


}



function acomodarDatos() {
	
	let nombreColocado = document.getElementById("RTA")
	let gradoColocado = document.getElementById("RTAN")
	let TActual = document.getElementById("TA")
	let TActualN = document.getElementById("TAN")
	let C2 = document.getElementById("C2")
	let N2 = document.getElementById("N2")
	let C3 = document.getElementById("C3")
	let N3 = document.getElementById("N3")
	let C4 = document.getElementById("C4")
	let N4 = document.getElementById("N4")
	let C5 = document.getElementById("C5")
	let N5 = document.getElementById("N5")	

if (TActualN.value.length == 0 ){

	TActualN.value = nombreColocado.value + " // Grado: " + gradoColocado.value

}
else if (N2.innerHTML.length == 0){

	N2.innerHTML = nombreColocado.value + " // Grado: " + gradoColocado.value

}
else if (N3.innerHTML.length == 0){

	N3.innerHTML = nombreColocado.value + " // Grado: " + gradoColocado.value

}
else if (N4.innerHTML.length == 0){

	N4.innerHTML = nombreColocado.value + " // Grado: " + gradoColocado.value

}
else if (N5.innerHTML.length == 0){

	N5.innerHTML = nombreColocado.value + " // Grado: " + gradoColocado.value

}
else{

	alert("debes esperar a que este disponible un turno")
}

}