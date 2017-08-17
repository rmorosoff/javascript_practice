(function(){

  // Array of mountain heights
  let mountainHeights = [4300, 5600, 3400, 6700, 5700, 7600, 3200, 12000, 4650, 6677];

  console.log("Here is the unsorted array of heights:")
  console.log(mountainHeights);

  mountainHeights.sort(function(a, b){return a-b});

  console.log("Here is the SORTED array of heights:")
  console.log(mountainHeights);

  // pop the last item off the array, which is now the largest number
  let tallestMountain = mountainHeights.pop();

  console.log("The tallest mountain has the following height:")
  console.log(tallestMountain);

  })()
