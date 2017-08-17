(function(){

  // Initialize our population, birth rate and number of weeks
  let startingPopulation = 12;
  let birthRate = 0.45;
  let numberOfWeeks = 16;

  // use currentPopulation to keep track of the population as it grows
  let currentPopulation = startingPopulation;

  // use a for loop to simulate each week and calculate the population growth inside the loop
  for (let i=0; i < numberOfWeeks; i += 1) {
    currentPopulation = currentPopulation + currentPopulation*birthRate;
  }

  // Display our simulation assumptions
  console.log("The starting population of Cherokee Hares is " + startingPopulation);
  console.log("The birth rate for this simulation is " + birthRate*100 + "%");

  // be nice and round the the final population to a whole number
  currentPopulation = Math.round(currentPopulation);
  console.log("There will be " + currentPopulation + " Cherokee Hares after " + numberOfWeeks + " weeks");

})()
