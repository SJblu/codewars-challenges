// https://www.codewars.com/kata/574b3b1599d8f897470018f6

function getRealFloor(n){
  if (n>0 && n<=13) n--;
  if (n>13) n=n-2;
  // if (n===13) n--;
  return n;
}

console.log(getRealFloor(16));