const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 },
];

// Render movies dynamically on the page and log details
const renderMovies = (movieList) => {
    const container = document.getElementById('movies-container');
    container.innerHTML = '';
    console.log("Rendering Movies List:");

    movieList.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <h3>${movie.title}</h3>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Rating:</strong> ${movie.rating}</p>
            <p><strong>Release Year:</strong> ${movie.releaseYear}</p>
        `;
        container.appendChild(movieCard);

        // Detailed log of movie details using template literals
        console.log(`${movie.title} (${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`);
    });

    if (movieList.length === 0) {
        console.log("No movies available to display.");
    }
};

// Add a new movie
const addMovie = (collection, movie) => {
    collection.push(movie);
};

// Add movie form submission
document.getElementById('movie-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const rating = parseFloat(document.getElementById('rating').value);
    const releaseYear = parseInt(document.getElementById('releaseYear').value);

    const newMovie = { title, genre, rating, releaseYear };
    addMovie(movies, newMovie);

    console.log(`Added movie: ${newMovie.title} (${newMovie.releaseYear}).`);
    renderMovies(movies);
    e.target.reset();
});

// Filter movies by genre
document.getElementById('filter-genre-btn').addEventListener('click', () => {
    const genre = document.getElementById('filter-genre').value;
    const filteredMovies = movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    console.log(`Filtering movies by genre: ${genre}`);
    renderMovies(filteredMovies);
});

// Filter movies by release year
document.getElementById('filter-year-btn').addEventListener('click', () => {
    const year = parseInt(document.getElementById('filter-year').value);
    const filteredMovies = movies.filter(movie => movie.releaseYear > year);
    console.log(`Filtering movies released after year: ${year}`);
    renderMovies(filteredMovies);
});

// Find the highest-rated movie
document.getElementById('highest-rated').addEventListener('click', () => {
    const highestRated = movies.reduce((best, movie) => (movie.rating > best.rating ? movie : best), movies[0]);
    console.log(`Highest-rated movie: ${highestRated.title} (${highestRated.rating})`);
    renderMovies([highestRated]);
});

// Initial render
renderMovies(movies);




/*
const movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 }
];


const addMovie = (collection, movie) => {
    collection.push(movie);
    
};
addMovie(movies, { title: "Tenet", genre: "Sci-Fi", rating: 7.5, releaseYear: 2020 });
console.log(movies);



const listMoviesByGenre = (collection, genre) => {
    return collection.filter(movie => movie.genre === genre);
};
console.log(listMoviesByGenre(movies, "Sci-Fi"));




const findHighestRatedMovie = collection => {
    return collection.reduce((highest, movie) => movie.rating > highest.rating ? movie : highest);
};
console.log(findHighestRatedMovie(movies));



const getMovieTitles = collection => {
    return collection.map(movie => movie.title);
};
console.log(getMovieTitles(movies));



const moviesAfterYear = (collection, year) => {
    return collection.filter(movie => movie.releaseYear > year);
};
console.log(moviesAfterYear(movies, 2010));


movies.forEach(movie => {
    console.log(`${movie.title} (${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`);
});
*/