"use strict";

function checkBrackets(input) {
  if (typeof input === "string") {
    let stack = [];
    for (let i = 0; i < input.length; i++) {
      let x = input[i];
      if (x === "(" || x === "[" || x === "{") {
        stack.push(x);
        continue;
      }
      if (stack.length === 0) return false;
      let check;
      if (x === ")") {
        check = stack.pop();
        if (check === "{" || check === "[") return false;
      } else if (x === "}") {
        check = stack.pop();
        if (check === "(" || check === "[") return false;
      } else if (x === "]") {
        check = stack.pop();
        if (check === "(" || check === "{") return false;
      }
    }
    return stack.length === 0;
  } else {
    console.error("expression must be a string");
  }
}

module.exports = checkBrackets;
