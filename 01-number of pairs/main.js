const numberOfPairs = (arr, k) => {
  let totalPairs = 0;
  let arrMap = {};
  arr.forEach((ele, index) => {
    arrMap[ele] = index;
  });
  arr.forEach(ele => {
    if(arrMap.hasOwnProperty(ele+k)) {
      totalPairs++;
    }
  })
  return totalPairs;
}

let arr = [1,7,5,9,12,3];
let k = 2;

console.log(numberOfPairs(arr, k));