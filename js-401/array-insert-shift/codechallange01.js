"use strict";

let insertShiftArray = (array, number) => {
  let result = [];
  let middleIdx = "";
  if (array.length % 2 == 0) {
    middleIdx = array.length / 2;
  } else {
    middleIdx = (array.length + 1) / 2;
  }
  for (let i = 0; i < array.length; i++) {
    if (i == middleIdx) {
      result.push(number);
    }
    result.push(array[i]);
  }
  return result;
};

//----------------------------------
//test

describe("array insert shift test", () => {
  xtest("return array with the number in the middle index", () => {
    expect(reverseArray([2, 4, 6, -8], 5)).toEqual([2, 4, 5, 6, -8]);
  });
  xtest("return array with the number in the middle index", () => {
    expect(reverseArray([42, 8, 15, 23, 42], 16)).toEqual([
      42, 8, 15, 16, 23, 42,
    ]);
  });
});
