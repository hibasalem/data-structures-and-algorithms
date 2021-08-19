"use strict";

const Hashtable = require("./hashtable");

let leftJoin = (hashmap1, hashmap2) => {
  let resultArr = [];
  let tempKey;
  let tempValue1;
  let tempValue2 = null;

  //   console.log(hashmap1.storage);
  //   console.log(hashmap1.storage.length);
  //   console.log(hashmap1.storage[673].head.value);
  //   console.log(Object.keys(hashmap1.storage[673].head.value)[0]);

  for (let i = 0; i < hashmap1.storage.length; i++) {
    if (hashmap1.storage[i]) {
      tempKey = Object.keys(hashmap1.storage[i].head.value)[0];
      tempValue1 = Object.values(hashmap1.storage[i].head.value)[0];
      //   console.log(tempKey);
      //   console.log(tempValue1);

      if (hashmap2.contains(tempKey)) {
        tempValue2 = Object.values(hashmap2.storage[i].head.value)[0];
        // console.log(tempValue2);
      } else {
        tempValue2 = null;
      }

      resultArr.push([tempKey, tempValue1, tempValue2]);
    }
  }

  return resultArr;
};

module.exports = leftJoin;
