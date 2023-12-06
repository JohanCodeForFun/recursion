const fibArr = [];
const fibRecursiveArr = [];

let x = 0;
let y = 1;
let z;

let counter = 0;

const fibs = (n) => {
  for (let i = 2; i < n; i++) {
    if (n === 1) return 0;
    if (n === 2) return 1;

    if (fibArr.length === 0) {
      fibArr.push(x, y);
    }

    z = x + y;
    x = y;
    y = z;

    fibArr.push(z);
  }

  return fibArr;
};

const fibsRecursive = (num) => {
  if (num === 1) return 0;
  if (num === 2) return 1;

  counter++;
    
  // WIP return array of the fibonacci sequence.
  // fibRecursiveArr[num] = (fibsRecursive(num - 1) + fibsRecursive(num - 2));

  console.log(fibRecursiveArr, counter)
  return fibsRecursive(num - 1) + fibsRecursive(num - 2);
};

console.log("fib for:", fibs(8));
console.log("fib recursive:", fibsRecursive(8));
// console.log("result:", [0, 1, 1, 2, 3, 5, 8, 13])
