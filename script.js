//Values for CI
let P = 200000;
let r = 0.0772;
let n = 1;
let t = 3;
//formula
let A = P * Math.pow(1 + r / n, n * t);
let CI = A - P;

console.log("The compound interest after " + t + " years is : " + CI.toFixed(0));
