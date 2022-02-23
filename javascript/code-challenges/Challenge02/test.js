function insertShiftArray(arr, x) {
  let mid = Math.ceil(arr.length / 2);
  let newArr = [];
  let last = arr.length;
//first half
  for (let i = 0; i < mid; i++) {
    newArr[i]= arr[i];
  }
//new mid value
  newArr[mid] = x;
//second half
  for (let i = mid; i < last; i++) {
    newArr[i + 1] = arr[i];
  }
 
  return newArr;
}
