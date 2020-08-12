/* Funciones de Nutricion Parenteral 
1. ingreso de usuario
2. creacion de paciente
	2.1 validacion de run
3. creacion de prescripcion
	3.1 calculo de edad : segun edad expresar en días, meses o años*/

let estimaEdad1 = document.querySelector("#fechanacimiento");
let estimaEdad2 = document.querySelector("#fechaactual");

estimaEdad1.oninput = calcEdad;
estimaEdad2.oninput = calcEdad;

function calcEdad() {
  let fN = new Date(document.getElementById("fechanacimiento").value);
  let fA = new Date(document.getElementById("fechaactual").value);
  let edadMs = fA - fN;
  let edadDias = edadMs / (1000 * 60 * 60 * 24);
  let edadMes = Math.floor(edadDias / 30.44);
  let edadYr = Math.floor(edadDias / 365.25);
  let edMesRes = edadMes - edadYr * 12;
  if (edadDias <= 30) {
    document.getElementById("edad").innerHTML = edadDias + " Días.";
  } else {
    if (edadDias > 30 && edadYr <= 1) {
      document.getElementById("edad").innerHTML = edadMes + " Meses.";
    } else {
      if (edadYr > 1 && edadYr <= 6) {
        document.getElementById("edad").innerHTML =
          edadYr + " Años " + edMesRes + " Meses.";
      } else {
        document.getElementById("edad").innerHTML = edadYr + " Años.";
      }
    }
  }
}

/*3.2 calculo de superficie corporal*/

let calcSupCorp1 = document.querySelector("#peso");
let calcSupCorp2 = document.querySelector("#talla");

calcSupCorp1.oninput = supCorp;
calcSupCorp2.oninput = supCorp;

function supCorp() {
  let p = (document.getElementById("peso").value * 10) / 10;
  let t = document.getElementById("talla").value;
  if (p !== "" || p !== 0) {
    if (t !== "") {
      let sc = parseFloat(Math.sqrt((p * t) / 3600).toPrecision(2));
      document.getElementById("scorp").innerHTML = sc + " m<sup>2</sup>";
    } else {
      let scSt = ((p * 4 + 7) / (90 + p)).toPrecision(2);
      document.getElementById("scorp").innerHTML = scSt + " m<sup>2</sup>";
    }
  } else {
    alert("Introduzca el peso del paciente");
  }

  // document.getElementById("sc1").innerHTML = sc1 + " m<sup>2</sup>";
}

/*3.3 ingreso de datos
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
		*/
let volDes = document.querySelector("#voldes");
volDes.oninput = calcVolPrep;
volDes.onchange = calcVolPrep;

function calcVolPrep() {
  let v = document.getElementById("voldes").value;
  let p = document.getElementById("peso").value;
  let volPrep = v * p + 50;
  document.getElementById("volprep").innerHTML =
    "Volumen a preparar es " + volPrep + " mL";
}
/*
		3.4.2 calculo de volumen de glucosa
*/
let glucentrada = document.querySelector("#cg");

glucentrada.oninput = calcGluc50;
glucentrada.onchange = calcGluc50;

function calcGluc50() {
  let g = document.getElementById("cg").value;
  let p = document.getElementById("peso").value;
  let volGluc50 = g * p * 2.88;
  document.getElementById("gluc50").innerHTML = volGluc50 + " mL.";
}
/*
		3.4.3 c volumen AA*/
let aaentrada = document.querySelector("#aa10");
aaentrada.oninput = calcAA10;
aaentrada.onchange = calcAA10;

function calcAA10() {
  let g = document.getElementById("aa10").value;
  let p = document.getElementById("peso").value;
  let adds = document.getElementById("volprep");
  let volAA10 = g * p * 2.88;
  document.getElementById("aa10").innerHTML = volAA10 + " mL.";
}
/*		3.4.4 c volumen lipidos
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
