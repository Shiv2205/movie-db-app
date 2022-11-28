import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./Components/MovieCard";
import GenreContext from "./util/genreContext";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";

function App() {
  const apiKey = "790b19bd215f9551da5fc23def9d05d8";
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const [sortBy, setSortBy] = useState("upcoming");

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${sortBy}?api_key=${apiKey}`
    ).then((response) => {
      //console.log(response);
      setMovies(response.data.results);
    });
  }, [sortBy]);

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
    ).then((response) => {
      //console.log(response);
      setGenre(response.data.genres);
    });
  }, []);

  const getSearch = (searchTarget) => {
    axios(`https://api.themoviedb.org/3/search/movie?api_key=790b19bd215f9551da5fc23def9d05d8&query=${searchTarget}&language=en-US&page=1&include_adult=false`)
    .then((response) => {
      console.log(response);
      response.data.results.length > 0 ? setMovies(response.data.results) : setNotFound(true);
    }).catch((error) => console.log(error));
  }

  return (

    <GenreContext.Provider value={genre}>
      <div className="App">

        <Navbar obj={{sortType: sortBy, setSortType: setSortBy}} getSearch={getSearch} setNotFound={setNotFound}/>

        <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {
            notFound ? <NotFound /> 
            :
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