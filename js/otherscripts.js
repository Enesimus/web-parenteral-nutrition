let a = 15;
let b =;

function calcSc(a, b) {
  let sC;
  if (b !== "") {
    sC = Math.sqrt((a * b) ** 2/3600).toPrecision(2);
    console.log(sC);
  } else {
    sC = ((a * 4 + 7) / (90 + a)).toPrecision(2);
    console.log(sC);
  }
  return sC;
}

calcSc(a,b);

