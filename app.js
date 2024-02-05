//let n = 5;
//let counter = 0;

//for (let i = 0; i <= n; i++) {
//  console.log(`(${n} + ${i} ** 2 )`);
//  counter += (n + i) ** 2;
//}
//console.log("sum: ", counter);

//let n = 5;
//let pover = n;
//let sum = 0;

//for (let i = 1; i <= n; i++) {
// sum += i ** pover;
//  pover--;
//}

//console.log(sum);

//let sum = "";

//for (let i = 1; i <= 5; i++) {
// for (let k = 1; k <= i; k++) {
//   sum += `${i} `;
//  }
//  console.log(sum.trimEnd());
//sum = "";
//}

let n = 16;
let counter = "";

for (let i = 1; i <= n; i++) {
  if (n % 1 == 0) {
    counter += `${i} `;
  }
}

console.log(counter.trimEnd());
