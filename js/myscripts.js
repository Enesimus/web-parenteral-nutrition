/* Funciones de Nutricion Parenteral 
1. ingreso de usuario
2. creacion de paciente
	2.1 validacion de run
3. creacion de prescripcion
	3.1 calculo de edad : segun edad expresar en días, meses o años
	3.2 calculo de superficie corporal
	3.3 ingreso de datos
		3.3.1 volumen deseado: ml/kg o ml/m2
		3.3.2 carga de glucosa: mg/kg/min
		3.3.3 proteinas: g/kg/d
		3.3.4 lipidos: g/kg/d
		3.3.5 sodio: mEq/kg/d
		3.3.6 acetato: mEq/kg/d
		3.3.7 potasio: mEq/kg/d
		3.3.8 fosfato: mEq/kg/d
		3.3.9 calcio: mg/kg/d
		3.3.10 magnesio: mEq/kg/d
		3.3.11 zinc: ug/kg/d
		3.3.12 vitaminas: si o no
		3.3.13 oligoelementos: si o no
		3.3.14 ciclado: si o no
	3.4 Calculo volumenes
		3.4.1 calculo de volumen a preparar: considerando 50ml adicionales para bajada.
		3.4.2 calculo de volumen de glucosa (50%)
		3.4.3 c volumen AA
		3.4.4 c volumen lipidos
		3.4.5 c volumen nacl
		3.4.6 c volumen kcl
		3.4.7 c voluman mgso4
		3.4.8 c volumen znso4
		3.4.9 c volumen glucca
		3.4.10 c volumen fosfK
		3.4.11 c volumen acna
		3.4.12 c volumen vit hidrosolubles
		3.4.13 c volumen vit liposolubles
		3.4.14 c volumen oligoelementos
		3.4.15 c volumen agua (>=0)
	3.5 Calculo osmolaridades
		3.5.1 alerta via central o periferica
	3.6 compatibilidad calcio fosforo
	3.7 limites estabilidad 
		3.7.1 mg
		3.7.2 fosfato
		3.7.3 calcio
	3.8 Calculo de calorias
		3.8.1 totales
		3.8.2 glucosa
		3.8.3 aminoacidos
		3.8.4 lipidos
	3.9 Calculo de calorias/kg
		3.9.1 totales
		3.9.2 glucosa
		3.9.3 aminoacidos
		3.9.4 lipidos
	3.10 calculo de porcentaje de calorias
		3.10.1 cal proteicas
		3.10.2 cal lipidos
		3.10.3 cal glucosa
	3.11 calorias no proteicas/gr proteina
4. repetir prescripcion
5. calculo de requerimientos caloricos segun edad
	5.1 schoffield
	5.1.1 peso
	5.1.2 peso talla
	5.2 oms
	5.3 agregar factor estrés

*/

const unidad = document.getElementById("unidad").value;
const cama = document.querySelector("#cama").value;
const anexo = document.querySelector("#anexo").value;
const nombres = document.querySelector("#nombres").value;
const apPater = document.querySelector("#appater").value;
const apMater = document.querySelector("#apmater").value;
const fNac = document.querySelector("#fechanacimiento").value;
const run = document.querySelector("#run").value;
const fActual = document.querySelector("#fechaactual").value;
const peso = document.querySelector("#peso").value;
const talla = document.querySelector("#talla").value;
const volDes = document.querySelector("#voldes").value;
const cargaGluc = document.querySelector("#cg").value;
const prots = document.querySelector("#proteinas").value;
const lips = document.querySelector("#lipidos").value;
const na = document.querySelector("#na").value;
const acna = document.querySelector("#acna").value;
const k = document.querySelector("#k").value;
const kpo = document.querySelector("#kpo").value;
const ca = document.querySelector("#ca").value;
const mg = document.querySelector("#mg").value;
const zn = document.querySelector("#zn").value;
const vits = document.querySelector("#vits").value;
const ols = document.querySelector("#oe").value;
const ciclado = document.querySelector("#ciclado").value;
const hrSusp = document.querySelector("#hrsusp").value;

if (ciclado === "Si") {
  hrSusp.attrib.hidden = "false";
} else {
}

function calcSC(peso, talla) {
  let supCorp;
  if (talla !== "") {
    supCorp = parseFloat(Math.sqrt((peso * talla) ** 2 / 3600).toPrecision(2));
    return supCorp;
    document.getElementById("scorp").innerHTML = supCorp + " ";
  } else {
    supCorp = (peso * 4 + 7) / (90 + peso).toPrecision(2);
    return supCorp;
    document.getElementById("scorp").innerHTML = supCorp + " ";
  }
}

function calcEdad() {
  let fechaActual = new Date(document.getElementById("fechaactual").value);
  let fechaNacimiento = new Date(
    document.getElementById("fechanacimiento").value
  );
  let edadms = fechaActual - fechaNacimiento;
  let edadDias = edadms / 86400000;
  switch (edadDias) {
    case edadDias < 30:
      document.getElementById("edad").innerHTML = edadDias + "días";
      break;
    case edadDias >= 30 && edadDias < 365:
      var edadMes = edadDias / 30.2;
      document.getElementById("edad").innerHTML = edadMes + "meses";
      break;
    case edadDias >= 365:
      var edadAnos = edadDias / 365;
      document.getElementById("edad").innerHTML = edadAnos + "años";
      break;
    default:
      document.getElementById("edad").innerHTML = "";
  }
}
