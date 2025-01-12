import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

import Movie from "./model/Movie.js";
import MovieForm from "./MovieForm";

function App() {
    // Whole component is rendered
    console.log("Component App is regenerated");

    const [movies, setMovies] = useState([]);
    console.log(movies)

    // for now it's done inline
    // function onMovieSubmit(newMovie) {
    //     setMovies([...movies,newMovie]);
    // }

    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>My favourite movie for today:</h2>

            <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])}/>

            <div>
                <ul>
                    {movies.map((movie) => <li key={movie.title}>{movie.title}, year: {movie.year}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default App;
