/* Funciones de Nutricion Parenteral 
1. ingreso de usuario
2. creacion de paciente*/
let paciente = {
  run: "",
  fechaNacimiento: "",
  nombre: "",
  apellidoPaterno: "",
  apellidoMaterno: "",
  edad: "",
  peso: "",
  talla: "",
  sexo: ""
};

let prescripcion = {
  volumenDeseado: "",
  CargaGlucosa: "",
  Proteinas: "",
  Lipidos: "",
  Sodio: "",
  Acetato: "",
  Potasio: "",
  Fosfato: "",
  Calcio: "",
  Magnesio: "",
  Zinc: "",
  Vitaminas: "",
  Oligoelementos: ""
};

let receta = {
  VolumenAPreparar: "",
  Glu50: "",
  AA: "",
  Lip: "",
  NaCl: "",
  KCl: "",
  ZnSO: "",
  MgSO4: "",
  CaGlu: "",
  BifK: "",
  Acna: "",
  VitHidro: "",
  VitLipo: "",
  OligoelementosTipo: "",
  OligoelementosVol: "",
  Agua: "",
  Medico: ""
};

let run = document.querySelector("#run");
run.oninput = function () {
  let r = document.querySelector("#run").value;
  paciente.run = r;
};
let nom = document.querySelector("#nombres");
nom.oninput = function () {
  let r = nom.value;
  r = r.toUpperCase();
  paciente.nombre = r;
};
let app = document.querySelector("#appater");
app.oninput = function () {
  let r = app.value;
  r = r.toUpperCase();
  paciente.apellidoPaterno = r;
};
let apm = document.querySelector("#apmater");
apm.oninput = function () {
  let r = apm.value;
  r = r.toUpperCase();
  paciente.apellidoMaterno = r;
};

/*let genero = document.getElementsByName("Sexo");
genero.onclick = asignaGenero;
genero.onchange = asignaGenero;

function asignaGenero() {
 var a = document.getElementsByName("Sexo");
var i="";
 for (i=0; i<a.length, i++) {
  if (a[i].checked === true){ 
    paciente.sexo = a[i].value;
}
}
}*/
//let genero = document.querySelectorAll(":radio");
//genero.oninput = function () {
//  var r = document.querySelector("input[name=Sexo]:checked").value;
//  paciente.sexo = r;
//@SMN947 -> Se añade listener a la web para tomar el genero solo cuando se cambia para evitar el error
$(document).ready(function() {
  $('input[type=radio][name="Sexo"]').change(function() {
    paciente.sexo = $(this).val();
  });
});
//};

//genero.onclick = function(){
//let a="";
//for(a of genero){
//if a.
//}
//}
/*2.1 validacion de run
3. creacion de prescripcion
  // 3.1 calculo de edad : segun edad expresar en días, meses o años*/
function peso() {
  let p = (document.getElementById("peso").value * 10) / 10;
  paciente.peso = p;
  return p;
}

let estimaEdad1 = document.querySelector("#fechanacimiento");
let estimaEdad2 = document.querySelector("#fechaactual");

estimaEdad1.oninput = calcEdad;
estimaEdad1.onchange = calcEdad;
estimaEdad2.onchange = calcEdad;
estimaEdad2.oninput = calcEdad;

function calcEdad() {
  let fN = new Date(document.getElementById("fechanacimiento").value);
  let fA = new Date(document.getElementById("fechaactual").value);
  paciente.fechaNacimiento = fN;
  let edadMs = fA - fN;
  paciente.edad = edadMs;
  let edadDias = edadMs / 86400000;
  let edadMes = Math.floor(edadDias / 30.44);
  let edadYr = Math.floor(edadDias / 365.25);
  let edMesRes = edadMes - edadYr * 12;
  if (edadDias <= 30) {
    document.getElementById("edad").innerHTML = edadDias + " Días.";
    document.getElementById("tiponp").innerHTML = "Neonatal";
  } else {
    if (edadDias > 30 && edadYr <= 1) {
      document.getElementById("edad").innerHTML = edadMes + " Meses.";
      document.getElementById("tiponp").innerHTML = "Pediátrica";
    } else {
      if (edadYr > 1 && edadYr <= 6) {
        document.getElementById("tiponp").innerHTML = "Pediátrica";
        if (edadMes === 1) {
          document.getElementById("edad").innerHTML =
            edadYr + " Años " + edMesRes + " Mes.";
        } else {
          document.getElementById("edad").innerHTML =
            edadYr + " Años " + edMesRes + " Meses.";
        }
      } else {
        document.getElementById("edad").innerHTML = edadYr + " Años.";
      }
      if (edadYr > 15) {
        document.getElementById("tiponp").innerHTML = "Adultos";
      } else {
        document.getElementById("tiponp").innerHTML = "Pediátrica";
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
  let t = document.getElementById("talla").value;
  paciente.talla = parseInt(t, 10);
  if (peso() !== "" || peso() !== 0) {
    if (t !== "") {
      let sc = parseFloat(Math.sqrt((peso() * t) / 3600));
      document.getElementById("scorp").innerHTML =
        sc.toFixed(2) + " m<sup>2</sup>";
      return sc;
    } else {
      let scSt = (peso() * 4 + 7) / (90 + peso());
      document.getElementById("scorp").innerHTML =
        scSt.toFixed(2) + " m<sup>2</sup>";
      return scSt;
    }
  } else {
    window.alert("Introduzca el peso del paciente");
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
volDes.onchange = calcVolSolut;

function calcVolPrep() {
  let v = document.getElementById("voldes").value;
  prescripcion.volumenDeseado = v;
  let volDesSupCorp = (v * peso()) / supCorp();
  document.getElementById("voldesm2").innerHTML = volDesSupCorp.toFixed(0);
  //se adiciona volumen extra para bajada 30 ml segun acuerdo.
  let volPrep = v * peso() + 30;
  receta.VolumenAPreparar = volPrep;
  document.getElementById("volprep").innerHTML = Math.ceil(volPrep);
  return volPrep;
}
//		3.4.2 calculo de volumen de glucosa
let glucentrada = document.querySelector("#cg");
glucentrada.oninput = calcGluc50;
glucentrada.onchange = calcGluc50;
calcSupCorp1.onchange = calcGluc50;
glucentrada.onchange = calcVolSolut;

function calcGluc50() {
  let g = document.getElementById("cg").value;
  prescripcion.CargaGlucosa = g;
  let volGluc50 = g * peso() * 2.88 * (1 + 30 / calcVolPrep());
  receta.Glu50 = volGluc50;
  document.getElementById("gluc50").innerHTML = volGluc50.toFixed(0);
  return volGluc50;
}
//		3.4.3 c volumen AA
let aaentrada = document.querySelector("#proteinas");
aaentrada.oninput = calcAA10;
aaentrada.onchange = calcAA10;
calcSupCorp1.onchange = calcAA10;
aaentrada.onchange = calcVolSolut;

function calcAA10() {
  let prot = document.getElementById("proteinas").value;
  prescripcion.Proteinas = prot;
  let volAA10 = prot * peso() * 2.88 * (1 + 30 / calcVolPrep());
  receta.AA = volAA10;
  document.getElementById("aa10").innerHTML = volAA10.toFixed(0);
  return volAA10;
}
//		3.4.4 c volumen lipidos
let lipentrada = document.querySelector("#lipidos");
lipentrada.onchange = calcLip20;
lipentrada.oninput = calcLip20;
calcSupCorp1.onchange = calcLip20;
lipentrada.onchange = calcVolSolut;

function calcLip20() {
  let a = document.getElementById("lipidos").value;
  prescripcion.Lipidos = a;
  let volLip20 = peso() * a * 5 * (1 + 30 / calcVolPrep());
  receta.Lip = volLip20;
  document.getElementById("lip20").innerHTML = volLip20.toFixed(0);
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
naentrada.onchange = calcVolSolut;
acnaentrada.onchange = calcVolSolut;

function calcNaCl10() {
  let n = document.getElementById("na").value;
  let a = document.getElementById("acna").value;
  prescripcion.Sodio = n;
  prescripcion.Acetato = a;
  if (a >= 0 && a !== "") {
    let volNaCl10ac = (((n - a) * peso()) / 1.75) * (1 + 30 / calcVolPrep());
    let volAcNa = ((a * peso()) / 2.2) * (1 + 30 / calcVolPrep());
    receta.NaCl = volNaCl10ac;
    receta.Acna = volAcNa;
    document.getElementById("nacl10").innerHTML = volNaCl10ac.toFixed(1);
    document.getElementById("acna10").innerHTML = volAcNa.toFixed(1);
    return parseFloat(volNaCl10ac) + parseFloat(volAcNa);
  } else {
    let volNaCl10 = ((n * peso()) / 1.75) * (1 + 30 / calcVolPrep());
    receta.NaCl = volNaCl10;
    document.getElementById("nacl10").innerHTML = volNaCl10.toFixed(1);
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
kentrada.onchange = calcVolSolut;
po4entrada.onchange = calcVolSolut;

function calcKCl10() {
  let k = document.getElementById("k").value;
  let po4 = document.getElementById("po").value;
  prescripcion.Potasio = k;
  prescripcion.Fosfato = po4;
  if (po4 >= 0 && po4 !== "") {
    let volKCl10po = (((k - po4) * peso()) / 1.34) * (1 + 30 / calcVolPrep());
    let volKPO15 = ((po4 * peso()) / 1.1) * (1 + 30 / calcVolPrep());
    receta.KCl = volKCl10po;
    receta.BifK = volKPO15;
    document.getElementById("kcl10").innerHTML = volKCl10po.toFixed(1);
    document.getElementById("kpo15").innerHTML = volKPO15.toFixed(1);
    return volKCl10po + volKPO15;
  } else {
    let volKCl10 = ((k * peso()) / 1.34) * (1 + 30 / calcVolPrep());
    receta.KCl = volKCl10;
    document.getElementById("nacl10").innerHTML = volKCl10.toFixed(1);
    return volKCl10;
  }
}
//		3.4.7 c voluman mgso4
let mgentrada = document.querySelector("#mg");
mgentrada.onchange = calcMg25;
mgentrada.oninput = calcMg25;
calcSupCorp1.onchange = calcMg25;
mgentrada.onchange = calcVolSolut;

function calcMg25() {
  let a = document.getElementById("mg").value;
  prescripcion.Magnesio = a;
  let volMg25 = ((peso() * a) / 2) * (1 + 30 / calcVolPrep());
  receta.MgSO4 = volMg25;
  document.getElementById("mgso25").innerHTML = volMg25.toFixed(1);
  return volMg25;
}
//		3.4.8 c volumen znso4
let znentrada = document.querySelector("#zn");
znentrada.onchange = calcZn08;
znentrada.onchange = calcVolSolut;
znentrada.oninput = calcZn08;
calcSupCorp1.onchange = calcZn08;

function calcZn08() {
  let a = document.getElementById("zn").value;
  prescripcion.Zinc = a;
  let volZn08 = ((peso() * a) / 1000 / 2) * (1 + 30 / calcVolPrep());
  receta.ZnSO = volZn08;
  document.getElementById("znso08").innerHTML = volZn08.toFixed(2);
  return volZn08;
}
//		3.4.9 c volumen glucca
let caentrada = document.querySelector("#ca");
caentrada.onchange = calcCaGluc;
caentrada.onchange = calcVolSolut;
caentrada.oninput = calcCaGluc;
calcSupCorp1.onchange = calcCaGluc;

function calcCaGluc() {
  let a = document.getElementById("ca").value;
  prescripcion.Calcio = a;
  let volCaGluc = ((peso() * a) / 9) * (1 + 30 / calcVolPrep());
  receta.CaGlu = volCaGluc;
  document.getElementById("cagluc10").innerHTML = volCaGluc.toFixed(1);
  return volCaGluc;
}
//		3.4.10 c volumen fosfK
//		3.4.11 c volumen acna
//		3.4.12 c volumen vit hidrosolubles
let vitentrada = document.querySelector("#vits");
prescripcion.Vitaminas = vitentrada.value;
vitentrada.onchange = calcVits;
vitentrada.onchange = calcVolSolut;
vitentrada.oninput = calcVits;
calcSupCorp1.onchange = calcVits;

function calcVits() {
  let volVitHidro;
  let volVitLipo;
  if (vitentrada.value === "Si" && vitentrada !== "") {
    if (peso() < 10) {
      volVitHidro = ((peso() * 10) / 10) * (1 + 30 / calcVolPrep());
      receta.VitHidro = volVitHidro;
    } else {
      volVitHidro = 10;
      receta.VitHidro = volVitHidro;
    }
    document.getElementById("vithidro").innerHTML = volVitHidro.toFixed(1);
  } else {
    volVitHidro = 0;
    receta.VitHidro = volVitHidro;
    document.getElementById("vithidro").innerHTML = volVitHidro;
  }
  //		3.4.13 c volumen vit liposolubles
  if (vitentrada.value === "Si" && vitentrada !== "") {
    if (peso() < 2.5) {
      volVitLipo = peso() * 2 * (1 + 30 / calcVolPrep());
      receta.VitLipo = volVitLipo;
    } else {
      volVitLipo = 10;
      receta.VitLipo = volVitLipo;
    }
    document.getElementById("vitlipo").innerHTML = volVitLipo.toFixed(1);
  } else {
    volVitLipo = 0;
    receta.VitLipo = volVitLipo;
    document.getElementById("vitlipo").innerHTML = volVitLipo;
  }
  return parseFloat(volVitHidro) + parseFloat(volVitLipo);
}

//		3.4.14 c volumen oligoelementos
let oeentrada = document.querySelector("#oe");
prescripcion.Oligoelementos = oeentrada.value;
oeentrada.onchange = calcOe;
oeentrada.onchange = calcVolSolut;
oeentrada.oninput = calcOe;
calcSupCorp1.onchange = calcOe;

function calcOe() {
  let volOe;
  if (oeentrada.value === "Si") {
    if (peso() < 15) {
      document.getElementById("oeid").innerHTML = "4 Oligoelementos Tracelyte ";
      receta.OligoelementosTipo = "4 Oligoelementos Tracelyte";
    } else {
      document.getElementById("oeid").innerHTML = "9 Oligoelementos Addaven ";
      receta.OligoelementosTipo = "9 Oligoelementos Addaven";
    }
    volOe = peso() * 0.02 * (1 + 30 / calcVolPrep());
    receta.OligoelementosVol = volOe;
    document.getElementById("oel").innerHTML = volOe.toFixed(2);
  } else {
    volOe = 0;
    receta.OligoelementosVol = volOe;
    document.getElementById("oel").innerHTML = volOe;
  }
  return parseFloat(volOe);
}
//		3.4.15 c volumen agua (>=0)
let volumenSolutos = document.querySelectorAll(".volumen");
volumenSolutos.onchange = calcVolSolut;
calcSupCorp1.onchange = calcVolSolut;

function calcVolSolut() {
  let solutVolCalc =
    calcGluc50() +
    calcAA10() +
    calcLip20() +
    calcNaCl10() +
    calcKCl10() +
    calcCaGluc() +
    calcMg25() +
    calcVits() +
    calcOe() +
    calcZn08();
  let volAgua = calcVolPrep() - solutVolCalc;
  receta.Agua = volAgua;
  let voltTot = solutVolCalc + volAgua;
  document.getElementById("h2o").innerHTML = volAgua.toFixed(0);
  document.getElementById("voltot").innerHTML = voltTot.toFixed(0);
  calcOsmolaridad();
  calcVelocInf();
  calcCalorias();
  if (volAgua <= 0) {
    alert("Volumen incorrecto de solutos");
  }
}
//	3.5 Calculo osmolaridades
function calcOsmolaridad() {
  let na = document.getElementById("na").value;
  let k = document.getElementById("k").value;
  let mg = document.getElementById("mg").value;
  let osmo =
    (calcGluc50() * 5) / 2 +
    (calcAA10() * 1000) / 885 +
    (calcLip20() * 100) / 38 +
    na * peso() * 2 +
    k * peso() * 2 +
    calcCaGluc() * 0.46 +
    mg * peso();
  let osmolaridad = (osmo * 1000) / calcVolPrep();
  document.getElementById("osmcalc").innerHTML = osmolaridad.toFixed(0);
  //3.5.1 alerta via central o periferica
  if (osmolaridad >= 700) {
    document.getElementById("va").innerHTML = "USO EXCLUSIVO VIA CENTRAL";
  } else {
    document.getElementById("va").innerHTML = "USO PERIFERICO PERMITIDO";
  }
  if (osmolaridad > 1500) {
    alert("Osmolaridad Excesiva");
  }
}

let ciclEntrada = document.querySelector("#ciclado");
document.querySelector("#hrsusp").onchange = calcVelocInf;
document.querySelector("#hrsusp").oninput = calcVelocInf;
ciclEntrada.oninput = calcVelocInf;
ciclEntrada.onchange = calcVelocInf;

function calcVelocInf() {
  let cicl = document.getElementById("ciclado").value;
  if (cicl === "No" || cicl === "") {
    let a = (calcVolPrep() - 30) / 24;
    document.getElementById("vela").innerHTML = a.toFixed(1);
    document.getElementById("vela2").innerHTML = " mL/hora.";
  } else {
    let hrCicl = document.getElementById("hrsusp").value;
    if (hrCicl !== "") {
      let velCicl1 = (calcVolPrep() - 30) / (4 * (24 - hrCicl) - 10);
      let velCicl2 = velCicl1 * 2;
      let velCicl3 = velCicl1 * 4;
      document.getElementById("vela").innerHTML = `Iniciar a ${velCicl1.toFixed(
        1
      )} mL/hora por 1 hora, <br> luego aumentar a ${velCicl2.toFixed(
        1
      )} mL/hora por 1 hora, <br> luego aumentar a ${velCicl3.toFixed(
        1
      )} mL/hora por ${
        20 - hrCicl
      } horas; <br> luego disminuir a ${velCicl2.toFixed(
        1
      )} mL/hora por 1 hora, <br> luego disminuir a ${velCicl1.toFixed(
        1
      )} mL/hora por 1 hora y, <br> luego suspender por ${hrCicl} horas`;
      document.getElementById("vela2").innerHTML = "";
    } else {
      alert(
        "Ingrese valor de horas que desea suspender la nutricion parenteral"
      );
    }
  }
}
/*		
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
    3.9.4 lipidos*/

function calcCalorias() {
  const calLipid = 11;
  const calAA = 5;
  const calGluc = 3.4;
  let aporteKgCalGluc = document.getElementById("cg").value * 1.44 * calGluc;
  let aporteKgCalAA = document.getElementById("proteinas").value * calAA;
  let aporteKgCalLipid = document.getElementById("lipidos").value * calLipid;
  let aporteKgCal = aporteKgCalGluc + aporteKgCalAA + aporteKgCalLipid;
  document.getElementById("chcalkg").innerHTML = aporteKgCalGluc.toFixed(0);
  document.getElementById("pcalkg").innerHTML = aporteKgCalAA.toFixed(0);
  document.getElementById("lipcalkg").innerHTML = aporteKgCalLipid.toFixed(0);
  document.getElementById("totcalkg").innerHTML = aporteKgCal.toFixed(0);
  /* 3.10 calculo de porcentaje de calorias
		3.10.1 cal proteicas
		3.10.2 cal lipidos
    3.10.3 cal glucosa
    */
  document.getElementById("chcalporc").innerHTML = (
    (aporteKgCalGluc * 100) /
    aporteKgCal
  ).toFixed(0);
  document.getElementById("pcalporc").innerHTML = (
    (aporteKgCalAA * 100) /
    aporteKgCal
  ).toFixed(0);
  document.getElementById("lipcalporc").innerHTML = (
    (aporteKgCalLipid * 100) /
    aporteKgCal
  ).toFixed(0);
}
/*	
	3.11 calorias no proteicas/gr proteina
4. repetir prescripcion
5. calculo de requerimientos caloricos segun edad
	5.1 schoffield
	5.1.1 peso
	5.1.2 peso talla
	5.2 oms
	5.3 agregar factor estrés
*/
let med = document.querySelector("#medico");
med.oninput = function () {
  let r = document.querySelector("#medico").value;
  receta.Medico = r;
};
