function manageMovies(input) {

    let movies = [];

    for (let command of input) {
        if (command.includes('addMovie')) {
            let commands = command.split('addMovie ')
            let movieTitle = commands[1];

            let movieObj = { name: movieTitle };

            movies.push(movieObj)

        } else if (command.includes('directedBy')) {
            let commands = command.split(' directedBy ')
            let movieTitle = commands[0];
            let directorName = commands[1];

            let movieFound = movies.find(m => m.name === movieTitle);

            if (movieFound) {
                movieFound.director = directorName;
            }
        } else if (command.includes('onDate')) {
            let commands = command.split(' onDate ')
            let movieTitle = commands[0];
            let movieDate = commands[1];

            let movieFound = movies.find(m => m.name === movieTitle);

            if (movieFound) {
                movieFound.date = movieDate;
            }
        }
    }

    let fullInfoMovies = movies.filter(m => m.name && m.date && m.director);

    for (let fullInfoMovie of fullInfoMovies) {
        console.log(JSON.stringify(fullInfoMovie));
    }

}


manageMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])