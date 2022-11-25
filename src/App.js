import { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import MovieCard from "./Components/MovieCard";
import GenreContext from "./util/genreContext";

function App() {
  const apiKey = "790b19bd215f9551da5fc23def9d05d8";
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  //let genres = useRef(getGenres(apiKey));

  let sortBy = "upcoming";

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${sortBy}?api_key=${apiKey}&append_to_response=images`
    ).then((response) => {
      console.log(response);
      setMovies(response.data.results);
    });
  }, [sortBy]);

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
    ).then((response) => {
      console.log(response);
      setGenre(response.data.genres);
    });
  }, []);

  return (

    <GenreContext.Provider value={genre}>
      <div className="App">

        <button className="btn btn-accent" onClick={() => console.log(genre)}>Get Genres</button>

        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {
            movies.length === 0 ? "Loading" :
            movies.map((movieObj) => {
              return <MovieCard key={movieObj.id} obj={movieObj} genre={3} />;
            })
          }
        </div>
      </div>
    </GenreContext.Provider>
  );
}

export default App;