let num = -2;

let palmTree = (num) => {
  if (typeof num === 'number') {
    if (num > 0) {
      let str = '';
      for (let i = 1; i <= num; i++) {
        str += 'p';
      }
      return str;
    }
  }
  return false;
}
console.log(palmTree(5));


// Alternate solution
palmTree = (num) => {
  return (typeof num === 'number' && num > 0) ? 'p'.repeat(num) : false;
}
console.log(palmTree(3));


