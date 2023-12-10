const unsortedList = [ [7], [2], [5], [4], [1], [6], [0], [3] ];

// In pseudocode:
// - Sort the left half of the array (assuming n > 1)
// - Sort the left half of the array (assuming n > 1)
// - Merge the two halves together

//   7 | 2 | 5 | 4 | 1 | 6 | 0 | 3
//   2   7 | 4   5 | 1   6 | 0   3
//   2   4   5   7 | 0   1   3   6
//   0   1   2   3   4   5   6   7

/* 
  step 1: hitta längden på listan
  step 2: spara längden på listan
  step 3: dela ländgen på listan igen
  step 4: spara delade ländgen på listan
  step 5: dela ländgen på listan igen
  step 6: spara delade ländgen på listan
    fortsätt tills längden inte går att dela === 1
    Gör det rekursivt
    Därefter spara listan i egna arrays enligt ovan.
*/
let lengthOfArray = unsortedList.length;

const mergeSort = (unsortedListArrLength) => {

  let nextArrayLength = Math.round(unsortedListArrLength / 2);

  console.log(nextArrayLength)

  if (nextArrayLength === 1) return console.log("Done:", unsortedList);

  // const leftHalf = [...unsortedListArr[0]];
  // console.log(leftHalf)

  if (nextArrayLength > 1) {
    mergeSort(nextArrayLength)
  }
};

console.log(mergeSort(lengthOfArray))
console.log("TO DO!")
console.log("compare current array, [ [7], [2], [5], [4], [1], [6], [0], [3] ]")
console.log("Add test to equal, [ 0, 1, 2, 3, 4, 5, 6, 7 ] ")
console.log("after tomorrows class :)")

