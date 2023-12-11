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

  // counter++;
    
  // WIP return array of the fibonacci sequence.
  // fibRecursiveArr[num] = (fibsRecursive(num - 1) + fibsRecursive(num - 2));

  /*
    Bug in here!
    noticed slow computation while the for loop was instant at  fibs(80).
    As I ran it through the debugger setting a breakpoint at the return,
    I noticed as the num variable got below around 6, it added 1-2 to the num,
    then reducing, then adding... which caused the slow performance.

      return fibsRecursive(num - 1) + fibsRecursive(num - 2);

    Fix this. 
  */
  

  return fibsRecursive(num - 1) + fibsRecursive(num - 2);
};

/*
  code from Francis Casibu, fcasibu @ github
  https://github.com/fcasibu/TOP-recursion/blob/main/fib.js
*/ 

const fibRecursive = (n, a = [0, 1]) => {
  if (a.length >= n) return a;
  return fibRecursive(n, [...a, a[a.length - 2] + a[a.length - 1]]);
};

/*
  Code form web dev cody
  url, 
*/

const fibExample = (n) => {
  if (n === 1 || n === 2) return n;
  return fibExample(n - 1) + fibExample(n - 2)
}

// console.log(fibExample(50));

// console.log(fibRecursive(5));
console.log("fib for:", fibs(50));
// console.log("fib recursive:", fibsRecursive(50));
// console.log("result:", [0, 1, 1, 2, 3, 5, 8, 13])
