/* eslint no-restricted-globals: 'off' */
// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function calculateAverageMovieRate (movies) {
    if (!movies.length) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < movies.length; i++) {
        sum += movies[i].rate;
    }
    return sum/movies.length;
}

/*
function calculateAverageMovieRate (movies) {
    return {
        movies
            .map(value => {
                return value.rate / movies.length;
            })
            .reduce((sum, rate) => {
                return sum + rate;
            }, 0);
            return movies.reduce((sum, movie) => sum + movie.rate / movies.length, 0);
        }
*/



// Iteration 2: Drama movies - Get the average of Drama Movies
function calculateAverageDramaRate (arrayMoviesDrama) {
    let moviesDramaFiltered = arrayMoviesDrama.filter((movie) => {
        if (movie.genre.includes('Drama')) {
            return true;
        }
    })
        return calculateAverageMovieRate(moviesDramaFiltered);
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear (movies) {
    const arrayCopy = [...movies];
    return arrayCopy .sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if(a.year < b.year) {
        return -1;
        } else {
            const firstMovieTitle = a.title.toLowerCase();
            const secondMovieTitle = b.title.toLowerCase();
            if (firstMovieTitle > secondMovieTitle) {
                return 1;
            } else {
                return 0;
            }
        }
    });
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function countSpielbergDramaMovies (movies) {
 return movies.filter(movie => {
     return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
 }).length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movies) {
    return movies
    .map(movie => movie.title)
    .sort((a, b) => {
        const firstMovieTitle = a.toLowerCase();
        const secondMovieTitle = b.toLowerCase();
    if (firstMovieTitle > secondMovieTitle) {
        return 1;
    } else if (firstMovieTitle < secondMovieTitle) {
        return -1;
    } else {
        return 0;
    }
})
    .slice(0,20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes (movies) {
    return movies.map(movie => {
        const duration = movie.duration.split(' ');
        let minutes = 0;
        for (let time of duration) {
            if (time.includes('h')) {
                minutes += parseInt(time) * 60;
            } else {
                minutes += parseInt(time);
            }
        }
        return {
            ...movie,
            duration: minutes
        };
    });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

functionbestYearAvg(movies) {
    {
        1995: [ 5, 8, 9 ]
    }
const movieRatesByYear = movies.reduce((accumulator, movie) => {
    const { year, rate } = movie;
    if (!accumulator[year]) {
        accumulator[year] = [];
    }
    accumulator[year].push(rate);
    return accumulator;
},{});
Object.defineProperties(movieRatesByYear).map(item => {
    const year = item [0];
    const rateArray = item[1];
    const averageRate = rateArray.reduce((sum, value) => sum + value / rateArray.length);
    console.log(year, averageRate };
    return{ year, averageRate};
}).reduce((bestItem, item) => {
    if (typeof bestItem === 'undefined' || )
})
}