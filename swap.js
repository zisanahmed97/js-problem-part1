let a = 5;
let b= 8;

console.log(a,b);

const temp = a;
a = b;
b = temp;

console.log(a,b);

//.........................................................
// distraction method

let x=6;
let y=9;

console.log(x,y);

[x,y] = [y,x];
console.log(x,y);