"use strict";

let validateBrackets = (string) => {
  let result = [];
  let result2 = [];

  let match;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "(" || string[i] == "[" || string[i] == "{") {
      result.push(string[i]);
    }
    if (string[i] == ")" || string[i] == "]" || string[i] == "}") {
      result2.push(string[i]);
    }
  }
  // console.log(result);
  if (result.length != result2.length || result.length == 0) {
    return (match = false);
  }
  for (let j = 0; j < result.length; j++) {
    // console.log(string[j]);

    if (
      (result[j] == "(" && string.includes(")")) ||
      (result[j] == "{" && string.includes("}")) ||
      (result[j] == "[" && string.includes("]"))
    ) {
      match = true;
    } else {
      match = false;
    }
  }

  return match;

  // let counter = result.length - 1;
  // let lessCounter = 0;

  // while (counter > 0 && match) {
  //   console.log(lessCounter, counter, match);

  //   if (
  //     (result[counter] == "}" && result[lessCounter] == "{") ||
  //     (result[counter] == "(" && result[lessCounter] == ")")
  //   ) {
  //     counter -= 1;
  //     lessCounter++;
  //     match = true;
  //   } else {
  //     match = false;
  //   }
  // }
};

module.exports = validateBrackets;
