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

/*
  code from Fanzhong Zeng
  link, https://betterprogramming.pub/merge-sort-in-javascript-ce6e0e8b8fb2
*/

let counter = 0;
let counterMerge = 0;

console.log(unsortedList)
function mergeSortRecursion(unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray
  }
  console.log("counter:" , counter)
  counter++;

  const midPoint = Math.floor(unsortedArray.length / 2);

  const leftArr = unsortedArray.slice(0, midPoint)
  const rightArr = unsortedArray.slice(midPoint)

  return merTwoArrays(mergeSortRecursion(leftArr), mergeSortRecursion(rightArr))
}

function merTwoArrays(leftArr, rightArr) {
  console.log("merge counter:", counterMerge)
  counterMerge++;

  let resultArray = [];

  let leftIndex = 0, rightIndex = 0;

  while (leftIndex < leftArr.length &&
    rightIndex < rightArr.length) {
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        console.log("left arr:", leftArr[leftIndex])
        resultArray.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        console.log("rightArr:", rightArr[rightIndex])
        resultArray.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }
    if (leftArr[leftIndex]) {
      var unaddedElements = leftArr.slice(leftIndex);
      resultArray.push(...unaddedElements);
    } else {
      var unaddedElements = rightArr.slice(rightIndex);
      resultArray.push(...unaddedElements);
    }

    return resultArray;
}



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

console.log(mergeSortRecursion(unsortedList))

// console.log(mergeSort(lengthOfArray))
console.log("TO DO!")
console.log("compare current array, [ [7], [2], [5], [4], [1], [6], [0], [3] ]")
console.log("Add test to equal, [ 0, 1, 2, 3, 4, 5, 6, 7 ] ")
console.log("after tomorrows class :)")

