const isPolidrom = (number) => {
  const binaryString = number.toString(2)
  if(binaryString === 
  binaryString.split('').reverse().join('')) return true;
  return false;
}

const isStrictlyPalindromic = (n) => {
  for(i = 0; i < n; i++) {
      if(!isPolidrom(i)) return false;
  }
  return true;
};

console.log(isStrictlyPalindromic(3))
