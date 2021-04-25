const input = require('fs').readFileSync('teste.txt', 'utf8');
const lines = input.split('\n');

let newLines = lines.map(line => {
  return line.replace(/(\r\n|\n|\r)/gm, "");
})

function checkWord(word) {
  let arrWord = word.split("");
  let correctWord = "";
  let position = arrWord.length-1;

  for(i=arrWord.length-1; i>=0; i--) {
    for(j=position-1; j>=0; j--) {
      if(arrWord[i] === arrWord[j]) {
        position = j;
        arrWord.pop(j)
        break;
      }
    }
    if(i === position) break;
  }

  correctWord = arrWord.join("")
  console.log(correctWord)
}

// casos = ["sanduicheiche", "barrilarril", "ratoato", "sol", "coliseueu", "queijoijo", "astroastro", "a"]

// casos.forEach(teste => {
//   checkWord(teste)
// })

newLines.forEach(word => {
  checkWord(word)
})

// console.log(`Palavra: ${newLines[0]}, Aqrui nao`)