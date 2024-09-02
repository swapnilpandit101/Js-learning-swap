
let score = 33;
console.log(typeof score);                     // number
console.log(typeof(score));                    // number

let score1 = "33"
console.log(typeof score1);                    // string
console.log(typeof(score1));                   // string


let valueInNumber = Number (score1);           // string converted in number
console.log(typeof valueInNumber);             // number
console.log(typeof(valueInNumber));            // number

let valueInString = String(score);             // Number converted in string
console.log(typeof valueInString);             // string
console.log(typeof(valueInString));            // string

let x = "123abc"
let y = Number(x)
console.log(typeof y);
console.log(y);


let z = null
let z1 = Number(z)
console.log(typeof z1);
console.log(z1);

let z2 = null
let z3 = String(z2)
console.log(typeof z3);
console.log(z3);


let s = undefined
let s1 = Number(s)
console.log(typeof s1);
console.log(s1);

let s2 = undefined
let s3 = String(s2)
console.log(typeof s3);
console.log(s3);

let k = true
let k1 = Number(k)
console.log(typeof k1);
console.log(k1);

let k2 = true
let k3 = String(k2)
console.log(typeof k3);
console.log(k3);

let f = "nanded"
let f1 = Number(f)
console.log(typeof f1);
console.log(f1);

