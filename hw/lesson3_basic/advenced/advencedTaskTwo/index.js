console.log("Hello");

let a = +prompt("Provide num");
let b = +prompt("num to '-'");
let c = +prompt("num to '+'");
let d = +prompt("num to '*'");
let e = +prompt("num to '/'");

let sum = ((a - b + c) * d) / e;
console.log(`((((${a} - ${b}) + ${c}) * ${d}) / ${e}) = ${sum}`);
