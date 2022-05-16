"use strict";

const repeatedWord = (str) => {
  let splitedWord = str.toLowerCase().split(/\W+/g);
  let counter;

  for (let i = 0; i < splitedWord.length; i++) {
    counter = 1;

    for (let j = i + 1; j < splitedWord.length; j++) {
      if (splitedWord[i] === splitedWord[j]) {
        counter++;
        splitedWord[j] = "0";
      }
    }

    if (counter > 1 && splitedWord[i] !== "0") {
      return splitedWord[i];
    }
  }
};

module.exports = repeatedWord;
