function calcEdad(){
	var fechaActual = document.getElementById("fechaactual").value;
	var fechaNacimiento = document.getElementById("fechanacimiento").value;
	var edadms = fechaActual - fechaNacimiento;
	var edadDias = edadms / 86400000;
	switch(edadDias){
		case edadDias<30:
			document.getElementById("edad").innerHTML = edadDias + "días";
			break;
		case edadDias>=30 && edadDias<365:
			var edadMes = edadDias / 30.2;
			document.getElementById("edad").innerHTML = edadMes + "meses";
			break;
		case edadDias >= 365:
			var edadAnos = edadDias /365;
			document.getElementById("edad").innerHTML = edadAnos + "años";
			break
		default:
			document.getElementById('edad').innerHTML = "";
	}
}