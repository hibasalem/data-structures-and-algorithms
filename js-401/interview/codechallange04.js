"use strict";

let findTheSum = (array) => {
  let newArr = [];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[i][j];
    }
    newArr.push(sum);
  }
  return newArr;
};

//----------------------------------
//test

describe("return the sum ", () => {
  xtest("return the sum ", () => {
    expect(
      findTheSum([
        [1, 2, 3],
        [3, 5, 7],
        [1, 7, 10],
      ])
    ).toBe([6, 15, 18]);
  });
  xtest("return the sum ", () => {
    expect(
      findTheSum([
        [0, 1, 5],
        [-4, 7, 2],
        [-3, 12, 11],
      ])
    ).toBe([6, 5, 20]);
  });
});
