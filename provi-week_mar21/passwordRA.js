const input = require('fs').readFileSync('teste.txt', 'utf8');
const lines = input.split('\n');

function passwordRA(pass) {
  let code = "";
  pass = pass.split("")

  pass.forEach(letter => {
    if (letter.match(/[GQaku]/g)) code += 0;
    if (letter.match(/[ISblv]/g)) code += 1;
    if (letter.match(/[EOYcmw]/g)) code += 2;
    if (letter.match(/[FPZdnx]/g)) code += 3;
    if (letter.match(/[JTeoy]/g)) code += 4;
    if (letter.match(/[DNXfpz]/g)) code += 5;
    if (letter.match(/[AKUgq]/g)) code += 6;
    if (letter.match(/[CMWhr]/g)) code += 7;
    if (letter.match(/[BLWis]/g)) code += 8;
    if (letter.match(/[HRjt]/g)) code += 9;
  })

  console.log(code.slice(0, 12))
}

// let arr = [3, "o rato roeu a roupa de margarida", "O Rato Roeu A Roupa de Margarida", "OlA TuDo CeRtO"]

for(i=1; i<lines.length; i++){
  if(lines[i].length > 20) {
    lines[i] = lines[i].slice(0, 20)
  }
  passwordRA(lines[i])
}