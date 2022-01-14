// Iteration 1: All directors? - Get the array of all directors.
const movies = require("./data");
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {

return arr.map((element) => {  
    return element
  })
}

getAllDirectors();
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movie) {
  let a = []
  for (let i = 0; i < movie.length; i++){
    if (movie[i].director === 'Steven Spielberg'){
      a.push(movie[i])
    }else{
      return 1
    }
  }
}

//const resu = movies.filter( Steven Spielberg => Steven Spielberg.length)
console.log(howManyMovies())

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
