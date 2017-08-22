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
		 if (correo !==(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
			alert("Email inválido");
		}
	}
	
	correo();

	function texto(){
		var mensaje=document.getElementById("mensaje").value;
		 if(mensaje !==(/^[A-Z][a-z]{1,100}$/)){
			alert("Extensión de mensaje inválido");
		}
	}
	texto();
}

validacion();

function ins() {
  document.getElementById("frase").innerHTML = "CÓDIGO QUE TRANSFORMA";
}

