(function(){

  // initialize the word (as a string) to check for palindrome
  let word = "racecar";
  console.log(word);

  // convert the string to an array and display it in the console
  let wordArray = word.split("");
  console.log(wordArray);

  // now reverse the array and display it in the console
  let reverseArray = wordArray.reverse();
  console.log(reverseArray);

  // now convert the reversed array into a string and display it in the console
  let reverseWord = reverseArray.join("");
  console.log(reverseWord);

  // now check if word equals reverseWord.  If true, we have a palindrome
  if (word === reverseWord) {
    console.log("As it turns out " + word + " is indeed a palindrome")
  } else {
    console.log("Nope, " + word + " is NOT palindrome")
  }

})()
