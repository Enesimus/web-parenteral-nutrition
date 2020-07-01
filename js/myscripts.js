/* Funciones de Nutricion Parenteral */

let unidad = document.querySelector("#unidad");
let cama = document.querySelector("#cama");
let anexo = document.querySelector("#anexo");
let nombres = document.querySelector("#nombres");
let apPater = document.querySelector("#appater");
let apMater= document.querySelector("#apmater");
let fNac = document.querySelector("#fechanacimiento");
let run = document.querySelector("#run");
let fActual = document.querySelector("#fechaactual");
let peso = document.querySelector("#peso");
let talla = document.querySelector("#talla");
let volDes = document.querySelector("#voldes");
let cargaGluc = document.querySelector("#cg");
let prots = document.querySelector("#proteinas");
let lips = document.querySelector("#lipidos");
let na = document.querySelector("#na");
let acna = document.querySelector("#acna");
let k = document.querySelector("#k");
let kpo = document.querySelector("#kpo");
let ca = document.querySelector("#ca");
let mg = document.querySelector("#mg");
let zn = document.querySelector("#zn");
let vits = document.querySelector("#vits");
let ols = document.querySelector("#oe");
let ciclado = document.querySelector("#ciclado");
let hrSusp = document.querySelector("#hrsusp");

if (ciclado = "Si") {
	hrSusp.attrib.hidden = "false";
} else {}

function calcSC(peso,talla){
	let supCorp;
	if (talla !== "") {
		supCorp = parseFloat((Math.sqrt((peso * talla)**2 / 3600)).toPrecision(2));
		return supCorp;
		document.getElementById("scorp").innerHTML = supCorp + " ";
	} else {
		supCorp = ((peso * 4)+7)/(90+peso).toPrecision(2);
		return supCorp;
		document.getElementById("scorp").innerHTML = supCorp + " ";
	}
}

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