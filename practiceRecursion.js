const array = [];
const numArray = [1, 2, 3, 4, 5];

const hellooo = (n) => {
  if (n === array.length) return array;
  array.push(`hello ${array.length + 1}!`)
  return hellooo(n);
};

// console.log(hellooo(5))

let totalSum = 0; 

const sumRecursive = (num, multiply) => {
  if (multiply === array.length) return array.reduce(
    (acc, currentValue) => acc + currentValue, 0
  );

  array.push(num)

  return sumRecursive(num, multiply)
}

console.log(sumRecursive(3, 5))