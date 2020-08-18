/* Funciones de Nutricion Parenteral 
1. ingreso de usuario
2. creacion de paciente
	2.1 validacion de run
3. creacion de prescripcion
	3.1 calculo de edad : segun edad expresar en días, meses o años*/

let estimaEdad1 = document.querySelector("#fechanacimiento");
let estimaEdad2 = document.querySelector("#fechaactual");

estimaEdad2.onload = fechaHoy;
estimaEdad1.oninput = calcEdad;
estimaEdad1.onchange = calcEdad;
estimaEdad2.onchange = calcEdad;
estimaEdad2.oninput = calcEdad;

function fechaHoy() {
  let a = new Date();
  document.getElementById("fechaactual").value.innerHTML = a;
}

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
calcSupCorp1.onchange = supCorp;
calcSupCorp2.oninput = supCorp;
calcSupCorp2.onchange = supCorp;

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
	3.4 Calculo volumenes*/
//		3.4.1 calculo de volumen a preparar: considerando 50ml adicionales para bajada.
let volDes = document.querySelector("#voldes");
volDes.oninput = calcVolPrep;
volDes.onchange = calcVolPrep;
calcSupCorp1.onchange = calcVolPrep;

function calcVolPrep() {
  let v = document.getElementById("voldes").value;
  let p = document.getElementById("peso").value;
  let volPrep = v * p + 50;
  document.getElementById("volprep").innerHTML = volPrep;
  return volPrep;
}
//		3.4.2 calculo de volumen de glucosa
let glucentrada = document.querySelector("#cg");
glucentrada.oninput = calcGluc50;
glucentrada.onchange = calcGluc50;
calcSupCorp1.onchange = calcGluc50;

function calcGluc50() {
  let g = document.getElementById("cg").value;
  let p = document.getElementById("peso").value;
  let volGluc50 = g * p * 2.88;
  document.getElementById("gluc50").innerHTML = volGluc50.toPrecision(4);
  return volGluc50;
}
//		3.4.3 c volumen AA
let aaentrada = document.querySelector("#proteinas");
aaentrada.oninput = calcAA10;
aaentrada.onchange = calcAA10;
calcSupCorp1.onchange = calcAA10;

function calcAA10() {
  let prot = document.getElementById("proteinas").value;
  let p = document.getElementById("peso").value;
  let volAA10 = prot * p * 2.88;
  document.getElementById("aa10").innerHTML = volAA10.toPrecision(3);
  return volAA10;
}
//		3.4.4 c volumen lipidos
let lipentrada = document.querySelector("#lipidos");
lipentrada.onchange = calcLip20;
lipentrada.oninput = calcLip20;
calcSupCorp1.onchange = calcLip20;

function calcLip20() {
  let p = document.getElementById("peso").value;
  let a = document.getElementById("lipidos").value;
  let volLip20 = p * a * 5;
  document.getElementById("lip20").innerHTML = volLip20.toPrecision(3);
  return volLip20;
}
//	3.4.5 c volumen nacl
let naentrada = document.querySelector("#na");
let acnaentrada = document.querySelector("#acna");
naentrada.onchange = calcNaCl10;
naentrada.oninput = calcNaCl10;
acnaentrada.onchange = calcNaCl10;
acnaentrada.oninput = calcNaCl10;
calcSupCorp1.onchange = calcNaCl10;

function calcNaCl10() {
  let p = document.getElementById("peso").value;
  let n = document.getElementById("na").value;
  let a = document.getElementById("acna").value;
  if (a >= 0 && a !== "") {
    let volNaCl10ac = ((n - a) * p) / 1.75;
    let volAcNa = ((a * p) / 2.2).toPrecision(2);
    document.getElementById("nacl10").innerHTML = volNaCl10ac.toPrecision(2);
    document.getElementById("acna10").innerHTML = volAcNa;
    return parseFloat(volNaCl10ac) + parseFloat(volAcNa);
  } else {
    let volNaCl10 = (n * p) / 1.75;
    document.getElementById("nacl10").innerHTML = volNaCl10.toPrecision(2);
    return volNaCl10;
  }
}
//		3.4.6 c volumen kcl
let kentrada = document.querySelector("#k");
let po4entrada = document.querySelector("#po");
kentrada.onchange = calcKCl10;
kentrada.oninput = calcKCl10;
po4entrada.onchange = calcKCl10;
po4entrada.oninput = calcKCl10;
calcSupCorp1.onchange = calcKCl10;

function calcKCl10() {
  let p = document.getElementById("peso").value;
  let k = document.getElementById("k").value;
  let po4 = document.getElementById("po").value;
  if (po4 >= 0 && po4 !== "") {
    let volKCl10po = ((k - po4) * p) / 1.34;
    let volKPO15 = (po4 * p) / 1.1;
    document.getElementById("kcl10").innerHTML = volKCl10po.toPrecision(2);
    document.getElementById("kpo15").innerHTML = volKPO15.toPrecision(2);
    return volKCl10po + volKPO15;
  } else {
    let volKCl10 = (k * p) / 1.34;
    document.getElementById("nacl10").innerHTML = volKCl10.toPrecision(2);
    return volKCl10;
  }
}
//		3.4.7 c voluman mgso4
let mgentrada = document.querySelector("#mg");
mgentrada.onchange = calcMg25;
mgentrada.oninput = calcMg25;
calcSupCorp1.onchange = calcMg25;

function calcMg25() {
  let p = document.getElementById("peso").value;
  let a = document.getElementById("mg").value;
  let volMg25 = (p * a) / 2;
  document.getElementById("mgso25").innerHTML = volMg25.toPrecision(2);
  return volMg25;
}
//		3.4.8 c volumen znso4
let znentrada = document.querySelector("#zn");
znentrada.onchange = calcZn08;
znentrada.oninput = calcZn08;
calcSupCorp1.onchange = calcZn08;

function calcZn08() {
  let p = document.getElementById("peso").value;
  let a = document.getElementById("zn").value;
  let volZn08 = (p * a) / 1000 / 2;
  document.getElementById("znso08").innerHTML = volZn08.toPrecision(2);
  return volZn08;
}
//		3.4.9 c volumen glucca
let caentrada = document.querySelector("#ca");
caentrada.onchange = calcCaGluc;
caentrada.oninput = calcCaGluc;
calcSupCorp1.onchange = calcCaGluc;

function calcCaGluc() {
  let p = document.getElementById("peso").value;
  let a = document.getElementById("ca").value;
  let volCaGluc = (p * a) / 9;
  document.getElementById("cagluc10").innerHTML = volCaGluc.toPrecision(2);
  return volCaGluc;
}
//		3.4.10 c volumen fosfK
//		3.4.11 c volumen acna
//		3.4.12 c volumen vit hidrosolubles
let vitentrada = document.querySelector("#vits");
vitentrada.onchange = calcVits;
vitentrada.oninput = calcVits;
calcSupCorp1.onchange = calcVits;

function calcVits() {
  let p = document.getElementById("peso").value;
  let volVitHidro;
  let volVitLipo;
  if (vitentrada.value === "Si") {
    if (p < 10) {
      volVitHidro = ((p * 10) / 10).toPrecision(3);
    } else {
      volVitHidro = 10;
    }
    document.getElementById("vithidro").innerHTML = volVitHidro;
  } else {
    document.getElementById("vithidro").innerHTML = 0;
  }
  if (vitentrada.value === "Si") {
    if (p < 2.5) {
      volVitLipo = (p * 2).toPrecision(3);
    } else {
      volVitLipo = 10;
    }
    document.getElementById("vitlipo").innerHTML = volVitLipo;
  } else {
    document.getElementById("vitlipo").innerHTML = 0;
  }
  return parseFloat(volVitHidro) + parseFloat(volVitLipo);
}

//		3.4.13 c volumen vit liposolubles
//		3.4.14 c volumen oligoelementos
let oeentrada = document.querySelector("#oe");
oeentrada.onchange = calcOe;
oeentrada.oninput = calcOe;
calcSupCorp1.onchange = calcOe;

function calcOe() {
  let p = document.getElementById("peso").value;
  let volOe;
  if (oeentrada.value === "Si") {
    if (p < 15) {
      document.getElementById("oeid").innerHTML = "4 Oligoelementos Tracelyte ";
    } else {
      document.getElementById("oeid").innerHTML = "9 Oligoelementos Addaven ";
    }
    volOe = (p * 0.02).toPrecision(3);
    document.getElementById("oel").innerHTML = volOe;
  } else {
    document.getElementById("oel").innerHTML = 0;
  }
  return parseFloat(volOe);
}
//		3.4.15 c volumen agua (>=0)
let volumenSolutos = document.querySelectorAll(".volumen");
volumenSolutos.onchange = calcVolSolut;

function calcVolSolut() {
  let solutVolCalc =
    parseFloat(calcGluc50()) +
    parseFloat(calcAA10()) +
    parseFloat(calcLip20()) +
    parseFloat(calcNaCl10()) +
    parseFloat(calcKCl10()) +
    parseFloat(calcMg25()) +
    parseFloat(calcVits()) +
    parseFloat(calcOe()) +
    parseFloat(calcZn08());
  // console.log(solutVolCalc);
  let volAgua = calcVolPrep() - solutVolCalc;
  document.getElementById("h2o").innerHTML = volAgua.toPrecision(4);
}
/*	3.5 Calculo osmolaridades
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
