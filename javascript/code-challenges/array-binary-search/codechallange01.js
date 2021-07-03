"use strict";

const BinarySearch = (array, key) => {
  let mid;
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    const guess = array[mid];
    if (guess === key) {
      return mid;
    }
    if (guess > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

//----------------------------------
//test

describe("array insert shift test", () => {
  xtest("return array with the number in the middle index", () => {
    expect(reverseArray([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
  });
  xtest("return array with the number in the middle index", () => {
    expect(reverseArray([-131, -82, 0, 27, 42, 68, 179], 42)).toEqual(4);
  });
  xtest("return array with the number in the middle index", () => {
    expect(reverseArray([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
  });
  xtest("return array with the number in the middle index", () => {
    expect(reverseArray([1, 2, 3, 5, 6, 7], 4)).toEqual(-1);
  });
});
