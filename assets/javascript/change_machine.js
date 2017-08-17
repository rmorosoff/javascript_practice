(function(){

  // Initialize dollar amount
  let dollars = 137;

  // Create blank array
  let answerArray = [];

  // find the number of twenties using division
  let twenties = dollars / 20;
  // round answer down to get whole number
  twenties = Math.floor(twenties);
  // push that result
  answerArray.push(twenties);

  // get remainder using modulo operator
  let remainder = dollars % 20;

  // now find number of tens using similar process from above
  let tens = remainder / 10;
  tens = Math.floor(tens);
  answerArray.push(tens);

  // if tens is greater than 0 then we need to calculate new remainder using modulo 10
  if (tens > 0) {
    remainder = remainder % 10;
  }

  // now find number of fives using similar process
  let fives = remainder / 5;
  fives = Math.floor(fives);
  answerArray.push(fives);

  if (fives > 0) {
    remainder = remainder % 5;
  }

  // our remainder now is our number of ones, so push this item onto the array
  answerArray.push(remainder);

  // output final array
  console.log("If you have " + dollars + " dollars, then this is your array representing the breakdown of twenties, tens, fives and ones:")
  console.log(answerArray);

})()
