let correctAnswer = 7;
function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

function multiply(a, b) {
   return a * b;
}

function add(a, b) {
  return a + b;
}

function calc(numA, numB) {
/*   numA = double(numA);
  numA = square(numA);
  numA = multiply(numA, numB);
  numA = add(numA, numB); */

  let answer = add(numA, numB) +1;
  if (correctAnswer === answer) {
    return (`Correct answer! You fixed all the bugs. Well done`);
  } else {
    return (`${answer} is incorrect! The code still has bugs`);
  }
  
}

/* DO NOT CHANGE THE CODE BELOW */
calc(2, 4)
module.exports= { calc}

