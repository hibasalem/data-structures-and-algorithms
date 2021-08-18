"use strict";

const Hashtable = require("./hashtable");

let repeatedWord = (string) => {
  const hashmap = new Hashtable(2000);
  let wordsArr = string.split(" ");
  let maxRepetes = 0;
  let result = " ";

  for (let i = 0; i < wordsArr.length; i++) {
    wordsArr[i] = wordsArr[i].toLowerCase();
    if (wordsArr[wordsArr.length - 1] === ",") {
      wordsArr[i] = wordsArr[i].substring(0, wordsArr[i].length - 1);
    }

    let count = hashmap.contains(wordsArr[i]).count + 1;
    // console.log("count", count, wordsArr[i]);

    hashmap.add(wordsArr[i], count);

    if (count > maxRepetes) {
      //   console.log("hiiiii", count, maxRepetes);
      maxRepetes = count;
      result = wordsArr[i];
    }
  }
  //   console.log({ word: result, count: maxRepetes });

  return { word: result, count: maxRepetes };
};

module.exports = repeatedWord;
