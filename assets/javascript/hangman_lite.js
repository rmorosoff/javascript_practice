(function(){

  // Set up word of choice and letter of choice
  let word = "mississippi";
  let letter = "s";

  // Initialize match count to zero
  let matchCount = 0;

  // use a for loop to traverse the word and increment counter when we get a letter match
  for (let i=0; i < word.length; i += 1) {
        if (word[i] === letter) {
            matchCount += 1;
        }
      }

  // if count is greater than 0 then we display the count
  if (matchCount > 0) {
    console.log("Yeah, the letter " + letter + " exists " + matchCount + " times in the word " + word);
  } else
  // if count was 0 then we dispay that letter was not in word
  {
    console.log("Nope, the letter " + letter + " does NOT exist in the word " + word);
  }


})()
