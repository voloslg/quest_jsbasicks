
let num = -2;


let palmTree = (num) => {
  if (num > 0) {
    let str = '';
    for (let i = 1; i <= num; i++) {
      str += 'p';
    }
    return str;
  }
  return false;
}
console.log(palmTree(num)); 