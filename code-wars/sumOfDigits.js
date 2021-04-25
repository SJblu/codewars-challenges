// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
  let sum = 0;

  for (i = String(n).length - 1; i >= 0; i--) {
    sum += Number(String(n)[i]);
  }

  if (String(sum).length > 1) {
    return digital_root(sum);
  }

  return sum;
}

console.log(digital_root(493193));
