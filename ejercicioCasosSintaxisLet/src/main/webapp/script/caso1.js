function caso1(){
	//Definimos var a y b global, se puede usar en toda la función 
	var a = 5;
	var b = 10;

	if (a === 5) {
		//let a=4 solo se define local y solo se puede usar dentro del bloque if
		//var b=1 sin embargo machaca el 10
  		let a = 4;
  		var b = 1;
		//La linea de abajo imprime 4 y la siguiente 1
  		document.write(a);
  		document.write(b);
	}
	//La linea de abajo imprime 5 (pilla la global) y la siguiente 1 (el 10 fue machacado)
	document.write(a);
	document.write(b);
}

function caso2(){
	for (let i = 0; i<10; i++) {
		//imprime del 0 al 10
		document.write(i);
	}
	//Daria error ejecución la lina inferior, la i no existe fuera del for.
	document.write(i);
}

function caso3(){
	var z = 5
    let x = z+10, y = 12;
   
    document.write(x + y);
}