const input = require('fs').readFileSync('teste.txt', 'utf8');
const lines = input.split('\n');


function validateCpf(cpf) {
  
  let lastDigits = cpf.split("-")[1]
  cpf = cpf.split("-")[0].split("").filter(char => char !== ".")

  let firstDigitCheck = 0;
  let lastDigitCheck = 0;

  cpf.forEach((digit, index) => {
    firstDigitCheck += (Number(digit) * (index+1))
  })
  cpf.forEach((digit, index) => {
    lastDigitCheck += (Number(digit) * (9-index))
  })

  firstDigitCheck = firstDigitCheck%11;
  if(firstDigitCheck === 10) firstDigitCheck = 0;

  lastDigitCheck = lastDigitCheck%11;
  if(lastDigitCheck === 10) lastDigitCheck = 0;

  // console.log(firstDigitCheck, lastDigitCheck)

  if (firstDigitCheck === Number(lastDigits[0]) && lastDigitCheck === Number(lastDigits[1])){
    console.log("CPF valido")
  } else {
    console.log("CPF invalido")
  }
}

// let lines = ["048.856.829-63", "733.184.680-96", "227.518.471-08", "092.844.842-86", "098.447.895-55"]


lines.forEach(cpf => {
  cpf = cpf.slice(0, -1)
  validateCpf(cpf)
})

// lines[0] = lines[0].slice(0, -1)

// console.log(lines)