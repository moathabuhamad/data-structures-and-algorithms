"use strict";

function quickSort(arr, left, right) {
  const pivotIndex = partition(arr, left, right);

  if (left < pivotIndex - 1) {
    quickSort(arr, left, pivotIndex - 1);
  }

  if (right > pivotIndex) {
    quickSort(arr, pivotIndex, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = Math.floor((left + right) / 2);

  while (left < right) {
    while (arr[left] < arr[pivot]) {
      left++;
    }

    while (arr[right] > arr[pivot]) {
      right--;
    }

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;
}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

module.exports = quickSort;
