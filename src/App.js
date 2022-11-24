import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./Components/MovieCard";

function App() {
  const apiKey = "790b19bd215f9551da5fc23def9d05d8";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
    ).then((response) => {
      console.log(response);
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className="App">



      <div className="grid grid-cols-3 gap-5">
        {
          //movies.length === 0 ? "Loading" :
          movies.map((movieObj) => {
            return <MovieCard key={movieObj.id} obj={movieObj} />;
          })
        }
      </div>
    </div>
  );
}

export default App;
