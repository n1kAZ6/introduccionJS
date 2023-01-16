function ejemplo1(){
    var a = 5;
	var b = 10;

	if (a === 5) {
  		let a = 4;
  		//Sustituye el valor de var b global 10 por 1
  		var b = 1;

		//imprime let a (es decir 4) del if no var a de la función
  		document.write("let a en if: " + a);
  		//imprime var global b que ya tiene valor 1  
  		document.write(" || var b en if: " + b); 
	}
	//imprime var a (es decir 5) de la función
	document.write(" || var a fuera if: " + a);
	
	//Vuelve a imprimir var global b que ya tiene valor 1  
	document.write(" || var b fuera if: " + b);
}

function ejemplo2(){
    if (x) {
  		let foo;
  		//No puede estar en el mismo ambito 2 let iguales
  		//let foo;
	}
}

function ejemplo31(){
    function varTest() {
  		var x = 31;
  		if (true) {
			//Linea de abajo sustituye el valor 31 que tenía
			//var x de varTest() de x por 71
    		var x = 71;
    		//Imprime var x que ya vale 71   
    		document.write("x como var dentro de if " + x);
  		}
  	//Vuelve a imprimir var x 
	document.write(" || x como var fuera del if " + x);
	}
	varTest();
}

function ejemplo32(){
    function letTest() {
  		let x = 31;
  		if (true) {
    		let x = 71;
    		//Imprime let x (71) del if
    		document.write("x como let dentro de if " + x); 
  		}
  	//Imprime let x (31) de la función letTest()
	document.write(" || x como let fuera del if" + x); 
	}
	letTest();
}

function ejemplo4(){
    var x = 'global';
	let y = 'global';
	document.write(this.x);
	document.write(this.y);
}