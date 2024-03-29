import { useContext, useEffect, useState } from "react";
import GenreContext from "../util/genreContext";
import conditionalClasses from "../util/conditionalClasses";

const ModalCard = (props) => {
  const genre = useContext(GenreContext);
  const [genreList, setGenreList] = useState([]);
  const releaseDate = new Date(props.obj.release_date);

  useEffect(() => {
    let resList = [];
    resList.push(
      props.obj.genre_ids.map((id) => {
        let res = genre.find((obj) => obj.id === id);
        return res.name;
      })
    );
    setGenreList(resList[0]);
    //console.log(genreList);
  }, []);

  return (
    <div className="card min-w-fit">
      <figure className="px-2 pt-2">
        <img
          src={`https://image.tmdb.org/t/p/w500${props.obj.poster_path}`}
          alt="Movie Poster"
          className="rounded-xl"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title ">{props.obj.title}</h2>

        <p>
        <p className="text-lg font-semibold badge p-4 bg-base-200">Release Date: {releaseDate.getDate()} {monthToString(releaseDate.getMonth())} {releaseDate.getFullYear()}</p>
        <br /><br />
         <p className="text-lg font-semibold">Overview:</p> {props.obj.overview}</p><br />
        <h3 className="text-lg font-semibold">Genres:</h3>
        <div className={conditionalClasses(genreList.length < 5 ? "lg:grid-cols-4" : "lg:grid-cols-5", "grid gap-5 grid-cols-2")} >
        {genreList.length === 0 ? "N/A" : genreList.map((genreType, index) => {
          return (
            <div key={index} className="mt-5">
                <div key={index} className="py-2 rounded-lg text-center text-white font-semibold bg-fuchsia-600 px-4 lg:px-5">
                {genreType}
                </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default ModalCard;

const monthToString = (monthNumber) => {
    switch (monthNumber){
      case 0: return "Jan"; break;
      case 1: return "Feb"; break;
      case 2: return "Mar"; break;
      case 3: return "Apr"; break;
      case 4: return "May"; break;
      case 5: return "Jun"; break;
      case 6: return "Jul"; break;
      case 7: return "Aug"; break;
      case 8: return "Sep"; break;
      case 9: return "Oct"; break;
      case 10: return "Nov"; break;
      case 11: return "Dec"; break;
    }
}