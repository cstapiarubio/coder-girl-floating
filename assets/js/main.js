//validación formulario
function validacion(){
	function nombre(){ 
		var nombre = document.getElementById("name").value;
		if(nombre.charAt(0) ===(nombre.charAt(0).toLowerCase())){
			alert("Nombre inválido");
		}
	}
	nombre();

	function apellido(){ 
		var apellido = document.getElementById("lastname").value;
		if(apellido.charAt(0) ===(apellido.charAt(0).toLowerCase())){
			alert("Apellido inválido");
		}
	}
	apellido();

	function correo() {  
		var correo = document.getElementById("correo").value;
		var expresion = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		 if (!expresion.test(correo)){
			alert("Email inválido");
		}
	}
	
	correo();

	function texto(){
		var mensaje=document.getElementById("mensaje").value;
		 if(mensaje.length>100){
			alert("Extensión de mensaje inválido");
		}
	}
	texto();
}


//boton que al apretarlo cambia el titulo 
function ins() {
  document.getElementById("frase").innerHTML = "CÓDIGO QUE TRANSFORMA";
}

//boton que al apretarlo cambia de izq a derecha la img 
function hack() {
    document.getElementById("img-hack").style.float = "right";
}
