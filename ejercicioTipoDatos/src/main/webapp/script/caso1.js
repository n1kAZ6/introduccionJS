
function alumno(nombre, apellidos, edad){
	this.nombre = nombre;
	this.apellidos = apellidos;
	this.edad = edad;
}
function caso1(){
	var Persona = new alumno('Nico','Álvarez Zapata','35');
	document.write(" Verificación con instanceof que es un tipo alumno: ");
	document.write(Persona instanceof alumno);
	document.write('<br>');
	document.write("Verificación con instanceof que es un tipo objeto: ");
	document.write(Persona instanceof Object);
	document.write('<br>');
	document.write(" Propiedad Nombre: ");
	document.write(Persona.nombre);
	document.write('<br>');
	document.write(" Propiedad Apellido: ");
	document.write(Persona.apellidos);
	document.write('<br>');
	document.write(" Propiedad Edad: ");
	document.write(Persona.edad);
}


