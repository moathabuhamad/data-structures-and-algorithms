'use strict';

module.exports =function sort(arr){
  for(let i=0;i < arr.length+1 ;i++){
    let j =i-1;
    while(j > 0 && arr[j-1] > arr[j]){
      let temp = arr[j-1];
      arr[j-1]=arr[j];
      arr[j] = temp;
      i =j-1;
    }
  }
  return arr;
};